// Speech and Web Audio Sound Effects Service

class SoundService {
  constructor() {
    this.audioCtx = null;
    this.currentAudio = null;
    this.audioCache = new Map();
    this.synth = window.speechSynthesis;
    this.tamilVoice = null;
    this.speechRate = 0.9;
    this.initAudio();
    this.initVoices();
  }

  initAudio() {
    const startAudio = () => {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.audioCtx = new AudioContext();
        }
      }
      if (this.audioCtx && this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
      if (this.synth && this.synth.paused) {
        this.synth.resume();
      }
      window.removeEventListener("click", startAudio);
      window.removeEventListener("touchstart", startAudio);
      window.removeEventListener("keydown", startAudio);
    };
    window.addEventListener("click", startAudio);
    window.addEventListener("touchstart", startAudio);
    window.addEventListener("keydown", startAudio);
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

  speak(text, rate = 0.9, onEnd = null) {
    if (!text) return;

    // Stop any currently playing audio
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }

    // Method 1: High-fidelity Native Tamil Voice Engine (works across all OS without needing OS language packs)
    const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ta&client=tw-ob&q=${encodeURIComponent(text)}`;
    const audio = new Audio(ttsUrl);
    this.currentAudio = audio;
    audio.playbackRate = rate || 0.9;

    audio.onended = () => {
      if (this.currentAudio === audio) this.currentAudio = null;
      if (onEnd) onEnd();
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        if (err.name === "NotAllowedError") {
          // Autoplay blocked prior to user interaction; silently ignore
          return;
        }
        console.warn("Native TTS audio failed, falling back to Web Speech API:", err);
        this.speakWithWebSpeech(text, rate, onEnd);
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
        console.warn("SpeechSynthesis error:", e);
      };

      this.synth.speak(utterance);
    } catch (e) {
      console.warn("Speech error:", e);
    }
  }

  speakSlow(text, onEnd = null) {
    this.speak(text, 0.65, onEnd);
  }

  // Web Audio Synthesized Sound Effects (100% Offline and responsive)
  playTone(freq, type = "sine", duration = 0.15, startTimeOffset = 0, gainLevel = 0.15) {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.audioCtx = new AudioContext();
    }
    if (!this.audioCtx) return;

    try {
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }

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
    } catch (e) {
      console.warn("Tone error:", e);
    }
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
    if (!this.audioCtx) return;
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
