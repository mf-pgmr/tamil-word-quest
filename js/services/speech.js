// Speech and Web Audio Sound Effects Service

class SoundService {
  constructor() {
    this.audioCtx = null;
    this.synth = window.speechSynthesis;
    this.tamilVoice = null;
    this.speechRate = 0.85; // Slightly slower than 1.0 for better clarity for learners
    this.initAudio();
    this.initVoices();
  }

  initAudio() {
    // Lazy initialize AudioContext on user gesture
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
      window.removeEventListener("click", startAudio);
      window.removeEventListener("keydown", startAudio);
    };
    window.addEventListener("click", startAudio);
    window.addEventListener("keydown", startAudio);
  }

  initVoices() {
    if (!this.synth) return;

    const findVoice = () => {
      const voices = this.synth.getVoices();
      // Look for Tamil voice (ta-IN, ta-LK, or containing Tamil)
      this.tamilVoice = voices.find(v => v.lang.startsWith("ta") || v.lang.includes("Tamil")) || null;
    };

    findVoice();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = findVoice;
    }
  }

  speak(text, rate = null) {
    if (!this.synth) return;
    this.synth.cancel(); // Stop any pending speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ta-IN";
    utterance.rate = rate || this.speechRate;
    utterance.pitch = 1.05;

    if (this.tamilVoice) {
      utterance.voice = this.tamilVoice;
    }

    this.synth.speak(utterance);
  }

  speakSlow(text) {
    this.speak(text, 0.6);
  }

  // Web Audio Synthesized Sound Effects
  playTone(freq, type = "sine", duration = 0.15, startTimeOffset = 0, gainLevel = 0.15) {
    if (!this.audioCtx) return;
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
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playPop() {
    this.playTone(450, "sine", 0.08, 0, 0.2);
  }

  playSuccess() {
    // Cheerful ascending arpeggio (C5, E5, G5, C6)
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      this.playTone(freq, "triangle", 0.18, idx * 0.08, 0.2);
    });
  }

  playError() {
    // Gentle buzz/wobble for retry
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
    // Triumphant level up fanfare
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
