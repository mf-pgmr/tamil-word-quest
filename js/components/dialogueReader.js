// Interactive Dialogue Reader for Page 11: Mani & Babu's Conversation
import { PAGE_11_DIALOGUE } from "../data/words.js";
import { speech, sound } from "../services/speech.js";
import { storage } from "../services/storage.js";

class DialogueReader {
  constructor() {
    this.container = null;
    this.isPlayingAll = false;
    this.currentPlayingIndex = -1;
    this.playbackRate = 0.9;
    this.playTimeout = null;
  }

  render(container) {
    this.container = container;
    this.stopPlayback();

    const showMeaning = storage.getShowMeaning ? storage.getShowMeaning() : true;
    const showPhonics = storage.getShowPhonics ? storage.getShowPhonics() : true;
    const showHighlights = storage.getShowHighlights ? storage.getShowHighlights() : true;

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
            <div class="flex flex-wrap items-center gap-2 self-start sm:self-auto">
              <button id="dialogue-rate-btn" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer">
                Speed: ${this.playbackRate === 0.9 ? "Normal" : "Slow"}
              </button>
              <button id="dialogue-toggle-highlights-btn" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                showHighlights
                  ? "bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/80"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700"
              }" title="Toggle vocabulary word highlights">
                <span id="highlights-btn-icon">${showHighlights ? "✨" : "👁️"}</span>
                <span id="highlights-btn-text">Highlights: ${showHighlights ? "On" : "Off"}</span>
              </button>
              <button id="dialogue-toggle-translit-btn" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                showPhonics
                  ? "bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/80"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700"
              }" title="Toggle English transliteration / phonetics">
                <span id="translit-btn-icon">${showPhonics ? "🔤" : "🚫"}</span>
                <span id="translit-btn-text">Translit: ${showPhonics ? "On" : "Off"}</span>
              </button>
              <button id="dialogue-play-all-btn" class="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-md shadow-teal-500/20 active:scale-95 transition cursor-pointer">
                <span id="play-all-icon">▶</span>
                <span id="play-all-text">Read Together</span>
              </button>
            </div>
          </div>

          <!-- Vocabulary Pill Legend -->
          <div id="dialogue-legend" class="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
            <span class="font-bold text-slate-600 dark:text-slate-300">Tip:</span>
            <span id="legend-text-main">
              ${
                showHighlights
                  ? `Tap any <span class="inline-block px-2 py-0.5 rounded-md bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border border-teal-200 dark:border-teal-800 font-bold font-tamil">highlighted word</span> in the dialogue to hear its pronunciation!`
                  : `Highlights are currently hidden. Tap <strong>Highlights: Off</strong> above or in Study Aids to reveal word cards!`
              }
            </span>
          </div>
        </div>

        <!-- Speech Turns Feed -->
        <div id="dialogue-lines-list" class="space-y-3">
          ${PAGE_11_DIALOGUE.lines.map((line, idx) => this.renderLine(line, idx, showMeaning, showPhonics, showHighlights)).join("")}
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

  findMatchingVocab(coreWord, vocabularyList) {
    if (!vocabularyList || !vocabularyList.length || !coreWord) return null;
    for (const vocab of vocabularyList) {
      if (coreWord === vocab) return vocab;
      if (coreWord.startsWith(vocab)) return vocab;
      // Handle Tamil inflected stems (e.g. சீக்கிரம் -> சீக்கிர..., பழகு -> பழக..., இன்று -> இன்ற..., படம் -> பட...)
      const stem = vocab.replace(/[ம்ுகு]$/, "");
      if (stem && stem.length >= 2 && coreWord.startsWith(stem)) {
        return vocab;
      }
      if (vocab === "இன்று" && coreWord.startsWith("இன்")) {
        return vocab;
      }
    }
    return null;
  }

  formatTamilText(tamilText, vocabularyList, showHighlights) {
    if (!tamilText) return "";
    const words = tamilText.split(" ");

    return words.map(rawWord => {
      if (!rawWord) return "";

      // Separate leading and trailing punctuation (e.g. "பாபு," -> "பாபு" + ",", "வேண்டுமா?" -> "வேண்டுமா" + "?")
      const punctMatch = rawWord.match(/^([,\.?!…":'“”—-]*)(.*?)([,\.?!…":'“”—-]*)$/);
      const leadingPunct = punctMatch ? punctMatch[1] : "";
      const coreWord = punctMatch ? punctMatch[2] : rawWord;
      const trailingPunct = punctMatch ? punctMatch[3] : "";

      const matchedVocab = this.findMatchingVocab(coreWord, vocabularyList);
      if (matchedVocab) {
        const pillClass = showHighlights ? "pill-highlighted" : "pill-plain";
        return `${leadingPunct}<span class="dialogue-word-pill ${pillClass}" data-word="${matchedVocab}" data-spoken="${coreWord}" title="${showHighlights ? `Tap to listen: ${matchedVocab}` : coreWord}">${coreWord}</span>${trailingPunct}`;
      }
      return rawWord;
    }).join(" ");
  }

  renderLine(line, index, showMeaning, showPhonics, showHighlights) {
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

    const formattedTamil = this.formatTamilText(line.tamil, line.vocabulary, showHighlights);

    return `
      <div id="dialogue-line-${index}" class="dialogue-line-card flex items-start gap-3 p-4 rounded-2xl border ${bubbleBg} shadow-sm transition-all duration-300">
        <!-- Character Avatar Initial -->
        <div class="w-10 h-10 rounded-2xl ${avatarBg} flex items-center justify-center font-bold text-base shrink-0 shadow-sm font-tamil">
          ${isMani ? "ம" : "பா"}
        </div>

        <div class="flex-1 min-w-0 space-y-2">
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

          <!-- Spoken Tamil Text with Generous Inter-Word Spacing -->
          <div class="dialogue-tamil-line text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 font-tamil">
            ${formattedTamil}
          </div>

          <!-- Phonetics & Transliteration with Clear Spacing -->
          <div class="dialogue-translit-line text-xs text-amber-700 dark:text-amber-400 font-medium ${showPhonics ? '' : 'hidden'}">
            ${line.translit || ""}
          </div>

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

  updateHighlightsUI(showHighlights) {
    const highlightBtn = this.container ? this.container.querySelector("#dialogue-toggle-highlights-btn") : null;
    const iconEl = this.container ? this.container.querySelector("#highlights-btn-icon") : null;
    const textEl = this.container ? this.container.querySelector("#highlights-btn-text") : null;
    if (highlightBtn) {
      if (showHighlights) {
        highlightBtn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/80";
        if (iconEl) iconEl.textContent = "✨";
        if (textEl) textEl.textContent = "Highlights: On";
      } else {
        highlightBtn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700";
        if (iconEl) iconEl.textContent = "👁️";
        if (textEl) textEl.textContent = "Highlights: Off";
      }
    }

    if (this.container) {
      this.container.querySelectorAll(".dialogue-word-pill").forEach(pill => {
        if (showHighlights) {
          pill.classList.remove("pill-plain");
          pill.classList.add("pill-highlighted");
          pill.title = `Tap to listen: ${pill.dataset.word || ""}`;
        } else {
          pill.classList.remove("pill-highlighted");
          pill.classList.add("pill-plain");
          pill.title = pill.dataset.spoken || "";
        }
      });
    }

    const legendText = this.container ? this.container.querySelector("#legend-text-main") : null;
    if (legendText) {
      legendText.innerHTML = showHighlights
        ? `Tap any <span class="inline-block px-2 py-0.5 rounded-md bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border border-teal-200 dark:border-teal-800 font-bold font-tamil">highlighted word</span> in the dialogue to hear its pronunciation!`
        : `Highlights are currently hidden. Tap <strong>Highlights: Off</strong> above or in Study Aids to reveal word cards!`;
    }
  }

  updateTranslitUI(showPhonics) {
    const translitBtn = this.container ? this.container.querySelector("#dialogue-toggle-translit-btn") : null;
    const iconEl = this.container ? this.container.querySelector("#translit-btn-icon") : null;
    const textEl = this.container ? this.container.querySelector("#translit-btn-text") : null;
    if (translitBtn) {
      if (showPhonics) {
        translitBtn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/80";
        if (iconEl) iconEl.textContent = "🔤";
        if (textEl) textEl.textContent = "Translit: On";
      } else {
        translitBtn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700";
        if (iconEl) iconEl.textContent = "🚫";
        if (textEl) textEl.textContent = "Translit: Off";
      }
    }

    if (this.container) {
      this.container.querySelectorAll(".dialogue-translit-line").forEach(el => {
        if (showPhonics) {
          el.classList.remove("hidden");
        } else {
          el.classList.add("hidden");
        }
      });
    }
  }

  cleanSpeechText(text) {
    if (!text) return "";
    return text
      .replace(/\.{2,}/g, ", ")
      .replace(/[—–]/g, " ")
      .replace(/["“”'‘’]/g, "")
      .trim();
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
        const wordText = pill.dataset.word || pill.dataset.spoken;
        if (wordText) {
          sound.playPop();
          pill.classList.add("scale-105", "ring-2", "ring-teal-400");
          setTimeout(() => {
            pill.classList.remove("scale-105", "ring-2", "ring-teal-400");
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

    // 5. Toggle Highlights button
    const highlightBtn = this.container.querySelector("#dialogue-toggle-highlights-btn");
    if (highlightBtn) {
      highlightBtn.addEventListener("click", () => {
        sound.playPop();
        const newShow = storage.toggleHighlights();
        this.updateHighlightsUI(newShow);

        // Sync sidebar checkbox if present
        const sidebarCheckbox = document.getElementById("toggle-highlights");
        if (sidebarCheckbox) {
          sidebarCheckbox.checked = newShow;
        }
      });
    }

    // 6. Toggle Transliteration button
    const translitBtn = this.container.querySelector("#dialogue-toggle-translit-btn");
    if (translitBtn) {
      translitBtn.addEventListener("click", () => {
        sound.playPop();
        const newShow = storage.togglePhonics();
        this.updateTranslitUI(newShow);

        // Sync sidebar checkbox if present
        const sidebarCheckbox = document.getElementById("toggle-phonics");
        if (sidebarCheckbox) {
          sidebarCheckbox.checked = newShow;
        }
      });
    }
  }

  playLine(index, onEnded = null) {
    if (index < 0 || index >= PAGE_11_DIALOGUE.lines.length) return;

    this.highlightLine(index);
    const line = PAGE_11_DIALOGUE.lines[index];

    if (line.audio) {
      speech.playLocalAudio(
        line.audio,
        this.playbackRate,
        () => {
          this.clearLineHighlight(index);
          if (onEnded) onEnded();
        },
        () => {
          // Fallback to Web Speech if local audio fails
          const textToSpeak = this.cleanSpeechText(line.tamil);
          speech.speakWithWebSpeech(textToSpeak, this.playbackRate, () => {
            this.clearLineHighlight(index);
            if (onEnded) onEnded();
          });
        }
      );
    } else {
      const textToSpeak = this.cleanSpeechText(line.tamil);
      speech.speakWithWebSpeech(textToSpeak, this.playbackRate, () => {
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
        this.playTimeout = setTimeout(() => {
          this.playNextSequentialLine();
        }, 600);
      }
    });
  }

  stopPlayback() {
    this.isPlayingAll = false;
    if (this.playTimeout) {
      clearTimeout(this.playTimeout);
      this.playTimeout = null;
    }
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
