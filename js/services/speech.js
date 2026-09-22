// Speech and Web Audio Sound Effects Service with bundled local MP3 audio
import { VOCABULARY } from "../data/words.js";

class SoundService {
  constructor() {
    this.audioCtx = null;
    this.currentAudio = null;
    this.synth = window.speechSynthesis;
    this.tamilVoice = null;
    this.speechRate = 0.9;

    // Fast lookup for full word audio
    this.wordMap = new Map();
    VOCABULARY.forEach(w => {
      this.wordMap.set(w.tamil, w.id);
      this.wordMap.set(w.id, w.id);
    });

    this.initAudio();
    this.initVoices();
  }

  ensureAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume().catch(() => {});
    }
    if (this.synth && this.synth.paused) {
      this.synth.resume();
    }
  }

  initAudio() {
    const unlockAudio = () => {
      this.ensureAudioContext();
      if (this.audioCtx && this.audioCtx.state === "running") {
        window.removeEventListener("click", unlockAudio);
        window.removeEventListener("touchend", unlockAudio);
        window.removeEventListener("keydown", unlockAudio);
      }
    };
    // Listen to true user gestures (not touchstart which fires on scrolls/swipes)
    window.addEventListener("click", unlockAudio, { passive: true });
    window.addEventListener("touchend", unlockAudio, { passive: true });
    window.addEventListener("keydown", unlockAudio, { passive: true });
  }

  initVoices() {
    if (!this.synth) return;

    const findVoice = () => {
      const voices = this.synth.getVoices();
      this.tamilVoice = voices.find(v => 
        v.lang === "ta-IN" || v.lang === "ta_IN" || v.lang.startsWith("ta") || v.name.toLowerCase().includes("tamil")
      ) || null;
    };

    findVoice();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = findVoice;
    }
  }

  getAudioUrl(textOrId) {
    if (!textOrId) return null;
    const str = textOrId.trim();

    // 1. Check if word ID (e.g. "l1_1")
    if (/^l\d+_\d+$/.test(str)) {
      return `audio/words/${str}.mp3`;
    }

    // 2. Check if known Tamil word text
    const wordId = this.wordMap.get(str);
    if (wordId) {
      return `audio/words/${wordId}.mp3`;
    }

    // 3. Letter audio filename based on UTF-16 hex codes
    const hex = Array.from(str)
      .map(c => c.charCodeAt(0).toString(16).padStart(4, "0"))
      .join("_");
    return `audio/letters/${hex}.mp3`;
  }

  speak(textOrId, rate = 0.95, onEnd = null) {
    if (!textOrId) return;

    const audioUrl = this.getAudioUrl(textOrId);
    if (!audioUrl) return;

    // Safely stop previous audio without breaking on unfulfilled promises
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
      this.currentAudio = null;
    }

    const audio = new Audio(audioUrl);
    this.currentAudio = audio;
    audio.playbackRate = rate || 0.95;

    audio.onended = () => {
      if (this.currentAudio === audio) this.currentAudio = null;
      if (onEnd) onEnd();
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        // AbortError is normal when rapid user clicks interrupt previous audio
        // NotAllowedError happens if autoplay policy restricts sound before interaction
        if (err.name === "AbortError" || err.name === "NotAllowedError") return;
        
        console.warn(`Local audio failed for ${textOrId} (${audioUrl}), falling back:`, err);
        this.speakWithWebSpeech(textOrId, rate, onEnd);
      });
    }
  }

  speakWithWebSpeech(text, rate = 0.9, onEnd = null) {
    if (!this.synth) return;

    try {
      this.synth.cancel();
      if (this.synth.paused) {
        this.synth.resume();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ta-IN";
      utterance.rate = rate;
      utterance.pitch = 1.0;

      if (this.tamilVoice) {
        utterance.voice = this.tamilVoice;
      }

      utterance.onend = () => {
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        // Ignore interrupted errors in Web Speech as well
        if (e.error !== "interrupted") {
          console.warn("SpeechSynthesis error:", e);
        }
      };

      this.synth.speak(utterance);
    } catch (e) {
      console.warn("Speech error:", e);
    }
  }

  speakSlow(textOrId, onEnd = null) {
    this.speak(textOrId, 0.7, onEnd);
  }

  // Web Audio Synthesized Sound Effects (100% Offline and responsive)
  playTone(freq, type = "sine", duration = 0.15, startTimeOffset = 0, gainLevel = 0.15) {
    this.ensureAudioContext();
    if (!this.audioCtx || this.audioCtx.state !== "running") return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + startTimeOffset);

      gain.gain.setValueAtTime(gainLevel, this.audioCtx.currentTime + startTimeOffset);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + startTimeOffset + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(this.audioCtx.currentTime + startTimeOffset);
      osc.stop(this.audioCtx.currentTime + startTimeOffset + duration);
    } catch (e) {}
  }

  playPop() {
    this.playTone(450, "sine", 0.08, 0, 0.2);
  }

  playSuccess() {
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      this.playTone(freq, "triangle", 0.18, idx * 0.08, 0.2);
    });
  }

  playError() {
    this.ensureAudioContext();
    if (!this.audioCtx || this.audioCtx.state !== "running") return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(160, this.audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(110, this.audioCtx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.25);
    } catch (e) {}
  }

  playFanfare() {
    const notes = [
      { f: 523.25, d: 0.12, t: 0 },
      { f: 659.25, d: 0.12, t: 0.12 },
      { f: 783.99, d: 0.12, t: 0.24 },
      { f: 1046.50, d: 0.35, t: 0.36 }
    ];
    notes.forEach(n => {
      this.playTone(n.f, "sine", n.d, n.t, 0.25);
    });
  }
}

export const sound = new SoundService();
