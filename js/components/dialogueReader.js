// Interactive Dialogue Reader for Page 11: Mani & Babu's Conversation
import { PAGE_11_DIALOGUE } from "../data/words.js";
import { speech } from "../services/speech.js";
import { storage } from "../services/storage.js";

class DialogueReader {
  constructor() {
    this.container = null;
    this.isPlayingAll = false;
    this.currentPlayingIndex = -1;
    this.playbackRate = 0.9;
  }

  render(container) {
    this.container = container;
    this.stopPlayback();

    const showMeaning = storage.getShowMeaning ? storage.getShowMeaning() : true;
    const showPhonics = storage.getShowPhonics ? storage.getShowPhonics() : true;

    container.innerHTML = `
      <div class="max-w-3xl mx-auto space-y-4 pb-12">
        <!-- Dialogue Header Card -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 md:p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-300">
                  Page 11 Lesson
                </span>
                <span class="text-xs text-slate-400 dark:text-slate-500 font-semibold">
                  School Preparation Conversation
                </span>
              </div>
              <h2 class="text-2xl font-black text-slate-800 dark:text-white font-tamil tracking-wide mt-1">
                ${PAGE_11_DIALOGUE.title}
              </h2>
              <p class="text-xs text-slate-500 dark:text-slate-400 font-tamil mt-0.5">
                ${PAGE_11_DIALOGUE.subtitle}
              </p>
              ${showMeaning ? `<p class="text-xs text-slate-400 dark:text-slate-500 italic mt-0.5">${PAGE_11_DIALOGUE.englishSubtitle}</p>` : ""}
            </div>

            <!-- Player Toolbar -->
            <div class="flex items-center gap-2 self-start sm:self-auto">
              <button id="dialogue-rate-btn" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer">
                Speed: ${this.playbackRate === 0.9 ? "Normal" : "Slow"}
              </button>
              <button id="dialogue-play-all-btn" class="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-md shadow-teal-500/20 active:scale-95 transition cursor-pointer">
                <span id="play-all-icon">▶</span>
                <span id="play-all-text">Read Together</span>
              </button>
            </div>
          </div>

          <!-- Vocabulary Pill Legend -->
          <div class="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
            <span class="font-bold text-slate-600 dark:text-slate-300">Tip:</span>
            <span>Tap any</span>
            <span class="inline-block px-2 py-0.5 rounded-md bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border border-teal-200 dark:border-teal-800 font-bold font-tamil">
              highlighted word
            </span>
            <span>in the dialogue to hear its pronunciation!</span>
          </div>
        </div>

        <!-- Speech Turns Feed -->
        <div id="dialogue-lines-list" class="space-y-3">
          ${PAGE_11_DIALOGUE.lines.map((line, idx) => this.renderLine(line, idx, showMeaning, showPhonics)).join("")}
        </div>

        <!-- Lesson Takeaway & Discussion Box -->
        <div class="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800/80 rounded-2xl p-5 border border-teal-200 dark:border-teal-800/50">
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-xl bg-teal-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
              ?
            </div>
            <div class="space-y-1">
              <h4 class="text-sm font-black text-teal-950 dark:text-teal-100 font-tamil">
                சிந்தித்து விடையளிக்க (Think & Answer):
              </h4>
              <p class="text-xs text-teal-900 dark:text-teal-200 font-tamil">
                மணி தன் பள்ளிப் பையில் தேவையான பொருள்களைச் சரியாக வைக்க எதனைப் பயன்படுத்தினான்?
              </p>
              <p class="text-xs text-teal-800 dark:text-teal-300 font-tamil font-bold">
                விடை: பட அட்டைகள் (Picture Flashcards)!
              </p>
              <p class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-1">
                What did Mani use to verify his bag was packed properly? Picture flashcards!
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  renderLine(line, index, showMeaning, showPhonics) {
    const isMani = line.speaker === "மணி";
    const avatarBg = isMani
      ? "bg-teal-600 text-white"
      : "bg-indigo-600 text-white";
    const bubbleBg = isMani
      ? "bg-white dark:bg-slate-900 border-teal-200 dark:border-teal-800/60"
      : "bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-800/60";
    const speakerBadge = isMani
      ? "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300"
      : "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300";

    // Format Tamil text with clickable vocabulary word pills
    let formattedTamil = line.tamil;
    line.vocabulary.forEach(vocab => {
      const reg = new RegExp(`(${vocab})`, "g");
      formattedTamil = formattedTamil.replace(
        reg,
        `<span class="dialogue-word-pill inline-block px-1.5 py-0.5 mx-0.5 rounded-lg bg-teal-50 dark:bg-teal-950/70 text-teal-900 dark:text-teal-200 border border-teal-200 dark:border-teal-800 font-bold hover:bg-teal-100 dark:hover:bg-teal-900 cursor-pointer transition" data-word="$1" title="Tap to listen">$1</span>`
      );
    });

    return `
      <div id="dialogue-line-${index}" class="dialogue-line-card flex items-start gap-3 p-4 rounded-2xl border ${bubbleBg} shadow-sm transition-all duration-300">
        <!-- Character Avatar Initial -->
        <div class="w-10 h-10 rounded-2xl ${avatarBg} flex items-center justify-center font-bold text-base shrink-0 shadow-sm font-tamil">
          ${isMani ? "ம" : "பா"}
        </div>

        <div class="flex-1 min-w-0 space-y-1.5">
          <!-- Line Header: Speaker Name & Audio Button -->
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-md text-xs font-black font-tamil ${speakerBadge}">
                ${line.speaker} (${line.speakerRole})
              </span>
              <span class="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
                Line ${index + 1}
              </span>
            </div>

            <button class="dialogue-speak-line-btn p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer" data-index="${index}" title="Listen to this line">
              <span class="text-sm font-bold">Listen</span>
            </button>
          </div>

          <!-- Spoken Tamil Text -->
          <div class="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 font-tamil leading-relaxed">
            ${formattedTamil}
          </div>

          <!-- Phonetics & Transliteration -->
          ${
            showPhonics && line.translit
              ? `<div class="text-xs text-amber-700 dark:text-amber-400 font-medium tracking-wide">
                  ${line.translit}
                </div>`
              : ""
          }

          <!-- English Meaning -->
          ${
            showMeaning && line.english
              ? `<div class="text-xs text-slate-500 dark:text-slate-400 pt-0.5 italic">
                  "${line.english}"
                </div>`
              : ""
          }
        </div>
      </div>
    `;
  }

  bindEvents() {
    // 1. Play individual lines
    this.container.querySelectorAll(".dialogue-speak-line-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const index = parseInt(btn.dataset.index, 10);
        this.playLine(index);
      });
    });

    // 2. Play individual highlighted vocabulary words
    this.container.querySelectorAll(".dialogue-word-pill").forEach(pill => {
      pill.addEventListener("click", e => {
        e.stopPropagation();
        const wordText = pill.dataset.word;
        if (wordText) {
          pill.classList.add("scale-110", "bg-amber-100", "dark:bg-amber-900");
          setTimeout(() => {
            pill.classList.remove("scale-110", "bg-amber-100", "dark:bg-amber-900");
          }, 350);
          speech.speak(wordText, this.playbackRate);
        }
      });
    });

    // 3. Play All / Read Together button
    const playAllBtn = this.container.querySelector("#dialogue-play-all-btn");
    if (playAllBtn) {
      playAllBtn.addEventListener("click", () => {
        if (this.isPlayingAll) {
          this.stopPlayback();
        } else {
          this.startPlayAll();
        }
      });
    }

    // 4. Rate button
    const rateBtn = this.container.querySelector("#dialogue-rate-btn");
    if (rateBtn) {
      rateBtn.addEventListener("click", () => {
        this.playbackRate = this.playbackRate === 0.9 ? 0.75 : 0.9;
        rateBtn.textContent = `Speed: ${this.playbackRate === 0.9 ? "Normal" : "Slow"}`;
      });
    }
  }

  playLine(index, onEnded = null) {
    if (index < 0 || index >= PAGE_11_DIALOGUE.lines.length) return;

    this.highlightLine(index);
    const line = PAGE_11_DIALOGUE.lines[index];

    // If native line MP3 exists, play it; otherwise speak via Web Speech API
    if (line.audio) {
      speech.playLocalAudio(
        line.audio,
        () => {
          this.clearLineHighlight(index);
          if (onEnded) onEnded();
        },
        () => {
          // Fallback to Web Speech
          speech.speakWithWebSpeech(line.tamil, this.playbackRate, () => {
            this.clearLineHighlight(index);
            if (onEnded) onEnded();
          });
        }
      );
    } else {
      speech.speakWithWebSpeech(line.tamil, this.playbackRate, () => {
        this.clearLineHighlight(index);
        if (onEnded) onEnded();
      });
    }
  }

  startPlayAll() {
    this.isPlayingAll = true;
    this.updatePlayAllButtonState(true);
    this.currentPlayingIndex = 0;
    this.playNextSequentialLine();
  }

  playNextSequentialLine() {
    if (!this.isPlayingAll) return;
    if (this.currentPlayingIndex >= PAGE_11_DIALOGUE.lines.length) {
      this.stopPlayback();
      return;
    }

    const idx = this.currentPlayingIndex;
    this.playLine(idx, () => {
      if (this.isPlayingAll) {
        this.currentPlayingIndex++;
        // Short pause between speaker turns
        setTimeout(() => {
          this.playNextSequentialLine();
        }, 500);
      }
    });
  }

  stopPlayback() {
    this.isPlayingAll = false;
    this.updatePlayAllButtonState(false);
    this.clearAllHighlights();
    speech.stop();
  }

  highlightLine(index) {
    this.clearAllHighlights();
    const card = this.container.querySelector(`#dialogue-line-${index}`);
    if (card) {
      card.classList.add("ring-2", "ring-teal-500", "bg-teal-50/40", "dark:bg-teal-950/20");
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  clearLineHighlight(index) {
    const card = this.container.querySelector(`#dialogue-line-${index}`);
    if (card) {
      card.classList.remove("ring-2", "ring-teal-500", "bg-teal-50/40", "dark:bg-teal-950/20");
    }
  }

  clearAllHighlights() {
    if (!this.container) return;
    this.container.querySelectorAll(".dialogue-line-card").forEach(c => {
      c.classList.remove("ring-2", "ring-teal-500", "bg-teal-50/40", "dark:bg-teal-950/20");
    });
  }

  updatePlayAllButtonState(isPlaying) {
    const playAllBtn = this.container ? this.container.querySelector("#dialogue-play-all-btn") : null;
    if (!playAllBtn) return;
    const icon = playAllBtn.querySelector("#play-all-icon");
    const text = playAllBtn.querySelector("#play-all-text");
    if (isPlaying) {
      if (icon) icon.textContent = "⏸";
      if (text) text.textContent = "Pause";
      playAllBtn.classList.add("from-rose-600", "to-amber-600");
      playAllBtn.classList.remove("from-teal-600", "to-emerald-600");
    } else {
      if (icon) icon.textContent = "▶";
      if (text) text.textContent = "Read Together";
      playAllBtn.classList.remove("from-rose-600", "to-amber-600");
      playAllBtn.classList.add("from-teal-600", "to-emerald-600");
    }
  }
}

export const dialogueReader = new DialogueReader();
