// Interactive Dialogue Reader Supporting Multiple Lessons (No emojis)
import { DIALOGUES, PAGE_11_DIALOGUE, PAGE_13_DIALOGUE } from "../data/words.js";
import { speech, sound } from "../services/speech.js";
import { storage } from "../services/storage.js";

class DialogueReader {
  constructor() {
    this.container = null;
    this.selectedDialogueId = "lesson1_p11";
    this.isPlayingAll = false;
    this.currentPlayingIndex = -1;
    this.playbackRate = 0.9;
    this.playTimeout = null;
    this.currentActiveLine = -1;
    this.currentActiveWordIdx = -1;
    this.highlightRafId = null;
    this.isHighlightingWords = false;
  }

  getActiveDialogue() {
    return DIALOGUES.find(d => d.id === this.selectedDialogueId) || DIALOGUES[0];
  }

  render(container) {
    this.container = container;
    this.stopPlayback();

    const dialogue = this.getActiveDialogue();
    const showMeaning = storage.getShowMeaning ? storage.getShowMeaning() : true;
    const showPhonics = storage.getShowPhonics ? storage.getShowPhonics() : true;
    const showHighlights = storage.getShowHighlights ? storage.getShowHighlights() : true;

    container.innerHTML = `
      <div class="max-w-3xl mx-auto space-y-4 pb-12">
        <!-- Dialogue Switcher Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 select-none">
          ${DIALOGUES.map(d => {
            const isSelected = d.id === this.selectedDialogueId;
            return `
              <button 
                class="dialogue-tab-btn px-3.5 py-2 rounded-2xl text-xs font-bold transition cursor-pointer flex items-center gap-2 shrink-0 ${
                  isSelected 
                    ? "bg-teal-600 text-white shadow-md shadow-teal-500/20" 
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                }"
                data-dialogue-id="${d.id}"
              >
                <span class="font-tamil">${d.title}</span>
                <span class="text-[10px] ${isSelected ? "text-teal-100" : "text-slate-400 dark:text-slate-500"} font-semibold">(${d.pageLabel})</span>
              </button>
            `;
          }).join("")}
        </div>

        <!-- Dialogue Header Card -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 md:p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-300">
                  ${dialogue.pageLabel}
                </span>
                <span class="text-xs text-slate-400 dark:text-slate-500 font-semibold">
                  ${dialogue.description || dialogue.englishTitle}
                </span>
              </div>
              <h2 class="text-2xl font-black text-slate-800 dark:text-white font-tamil tracking-wide mt-1">
                ${dialogue.title}
              </h2>
              <p class="text-xs text-slate-500 dark:text-slate-400 font-tamil mt-0.5">
                ${dialogue.subtitle}
              </p>
              ${showMeaning && dialogue.englishSubtitle ? `<p class="text-xs text-slate-400 dark:text-slate-500 italic mt-0.5">${dialogue.englishSubtitle}</p>` : ""}
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
                <span id="highlights-btn-icon" class="w-2 h-2 rounded-full ${showHighlights ? "bg-teal-500" : "bg-slate-400"}"></span>
                <span id="highlights-btn-text">Highlights: ${showHighlights ? "On" : "Off"}</span>
              </button>
              <button id="dialogue-toggle-translit-btn" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                showPhonics
                  ? "bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/80"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700"
              }" title="Toggle English transliteration / phonetics">
                <span id="translit-btn-icon" class="w-2 h-2 rounded-full ${showPhonics ? "bg-amber-500" : "bg-slate-400"}"></span>
                <span id="translit-btn-text">Translit: ${showPhonics ? "On" : "Off"}</span>
              </button>
              <button id="dialogue-play-all-btn" class="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-md shadow-teal-500/20 active:scale-95 transition cursor-pointer">
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
          ${dialogue.lines.map((line, idx) => this.renderLine(line, idx, showMeaning, showPhonics, showHighlights)).join("")}
        </div>

        <!-- Lesson Takeaway & Discussion Box -->
        ${
          dialogue.question ? `
            <div class="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800/80 rounded-2xl p-5 border border-teal-200 dark:border-teal-800/50">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-teal-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  ?
                </div>
                <div class="space-y-1">
                  <h4 class="text-sm font-black text-teal-950 dark:text-teal-100 font-tamil">
                    ${dialogue.question.tamilPrompt}
                  </h4>
                  <p class="text-xs text-teal-900 dark:text-teal-200 font-tamil">
                    ${dialogue.question.tamilQuestion}
                  </p>
                  <p class="text-xs text-teal-800 dark:text-teal-300 font-tamil font-bold">
                    ${dialogue.question.tamilAnswer}
                  </p>
                  ${
                    dialogue.question.englishHint
                      ? `<p class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-1">${dialogue.question.englishHint}</p>`
                      : ""
                  }
                </div>
              </div>
            </div>
          ` : ""
        }
      </div>
    `;

    this.bindEvents();
  }

  getSpeakerMeta(speaker) {
    if (speaker === "மணி") {
      return {
        initial: "ம",
        avatarBg: "bg-teal-600 text-white",
        bubbleBg: "bg-white dark:bg-slate-900 border-teal-200 dark:border-teal-800/60",
        speakerBadge: "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300"
      };
    } else if (speaker === "பாபு") {
      return {
        initial: "பா",
        avatarBg: "bg-indigo-600 text-white",
        bubbleBg: "bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-800/60",
        speakerBadge: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300"
      };
    } else if (speaker === "அம்மா") {
      return {
        initial: "அ",
        avatarBg: "bg-rose-600 text-white",
        bubbleBg: "bg-white dark:bg-slate-900 border-rose-200 dark:border-rose-800/60",
        speakerBadge: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
      };
    } else if (speaker === "கவின்") {
      return {
        initial: "க",
        avatarBg: "bg-sky-600 text-white",
        bubbleBg: "bg-white dark:bg-slate-900 border-sky-200 dark:border-sky-800/60",
        speakerBadge: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300"
      };
    }
    return {
      initial: speaker ? speaker.charAt(0) : "உ",
      avatarBg: "bg-slate-600 text-white",
      bubbleBg: "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800",
      speakerBadge: "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300"
    };
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

  formatTamilText(tamilText, vocabularyList, showHighlights, lineIndex) {
    if (!tamilText) return "";
    const words = tamilText.split(" ");

    return words.map((rawWord, wordIdx) => {
      if (!rawWord) return "";

      // Separate leading and trailing punctuation (e.g. "பாபு," -> "பாபு" + ",", "வேண்டுமா?" -> "வேண்டுமா" + "?")
      const punctMatch = rawWord.match(/^([,\.?!…":'“”—-]*)(.*?)([,\.?!…":'“”—-]*)$/);
      const leadingPunct = punctMatch ? punctMatch[1] : "";
      const coreWord = punctMatch ? punctMatch[2] : rawWord;
      const trailingPunct = punctMatch ? punctMatch[3] : "";

      const matchedVocab = this.findMatchingVocab(coreWord, vocabularyList);
      const wordId = `line-${lineIndex}-word-${wordIdx}`;

      if (matchedVocab) {
        const pillClass = showHighlights ? "pill-highlighted" : "pill-plain";
        return `${leadingPunct}<span id="${wordId}" class="dialogue-word-token dialogue-word-pill ${pillClass}" data-line="${lineIndex}" data-word-idx="${wordIdx}" data-word="${matchedVocab}" data-spoken="${coreWord}" title="${showHighlights ? `Tap to listen: ${matchedVocab}` : coreWord}">${coreWord}</span>${trailingPunct}`;
      } else {
        return `${leadingPunct}<span id="${wordId}" class="dialogue-word-token" data-line="${lineIndex}" data-word-idx="${wordIdx}" data-spoken="${coreWord}" title="Tap to listen">${coreWord}</span>${trailingPunct}`;
      }
    }).join(" ");
  }

  renderLine(line, index, showMeaning, showPhonics, showHighlights) {
    const meta = this.getSpeakerMeta(line.speaker);
    const formattedTamil = this.formatTamilText(line.tamil, line.vocabulary, showHighlights, index);

    return `
      <div id="dialogue-line-${index}" class="dialogue-line-card flex items-start gap-3 p-4 rounded-2xl border ${meta.bubbleBg} shadow-sm transition-all duration-300">
        <!-- Character Avatar Initial -->
        <div class="w-10 h-10 rounded-2xl ${meta.avatarBg} flex items-center justify-center font-bold text-base shrink-0 shadow-sm font-tamil">
          ${meta.initial}
        </div>

        <div class="flex-1 min-w-0 space-y-2">
          <!-- Line Header: Speaker Name & Audio Button -->
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-md text-xs font-black font-tamil ${meta.speakerBadge}">
                ${line.speaker} (${line.speakerRole})
              </span>
              <span class="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
                Line ${index + 1}
              </span>
            </div>

            <button class="dialogue-speak-line-btn p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer" data-index="${index}" title="Listen to this line">
              <span class="text-xs font-bold">Listen</span>
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
        if (iconEl) iconEl.className = "w-2 h-2 rounded-full bg-teal-500 inline-block";
        if (textEl) textEl.textContent = "Highlights: On";
      } else {
        highlightBtn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700";
        if (iconEl) iconEl.className = "w-2 h-2 rounded-full bg-slate-400 inline-block";
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
        if (iconEl) iconEl.className = "w-2 h-2 rounded-full bg-amber-500 inline-block";
        if (textEl) textEl.textContent = "Translit: On";
      } else {
        translitBtn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700";
        if (iconEl) iconEl.className = "w-2 h-2 rounded-full bg-slate-400 inline-block";
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

  computeWordTimings(words, totalDuration) {
    if (!words || !words.length) return [];
    const dur = totalDuration > 0 ? totalDuration : 3.0;

    const weights = words.map(w => {
      const cleanLen = w.replace(/[^\p{L}\p{M}]/gu, "").length;
      let weight = Math.max(cleanLen, 2);

      if (/[,\-]/.test(w)) weight += 2.0;
      if (/[\.?!]/.test(w)) weight += 3.0;
      if (/\.{2,}/.test(w)) weight += 4.0;

      return weight;
    });

    const totalWeight = weights.reduce((sum, wt) => sum + wt, 0);
    const timings = [];
    let currentStart = 0;

    for (let i = 0; i < words.length; i++) {
      const wordDur = (weights[i] / totalWeight) * dur;
      timings.push({
        index: i,
        start: currentStart,
        end: currentStart + wordDur
      });
      currentStart += wordDur;
    }

    return timings;
  }

  startWordHighlighting(lineIndex, words, audio) {
    this.stopWordHighlighting();

    const dialogue = this.getActiveDialogue();
    const fallbackDur = (dialogue.durations && dialogue.durations[lineIndex]) || 3.5;
    this.isHighlightingWords = true;

    const updateLoop = () => {
      if (!this.isHighlightingWords) return;

      if (audio && !audio.paused && !audio.ended) {
        const dur = (audio.duration && !isNaN(audio.duration) && audio.duration > 0) ? audio.duration : fallbackDur;
        const curTime = audio.currentTime || 0;
        const timings = this.computeWordTimings(words, dur);

        let activeIdx = -1;
        for (let i = 0; i < timings.length; i++) {
          if (curTime >= timings[i].start && curTime < timings[i].end) {
            activeIdx = i;
            break;
          }
        }
        if (activeIdx === -1 && curTime >= (timings[timings.length - 1]?.start || 0)) {
          activeIdx = timings.length - 1;
        }

        this.setActiveWord(lineIndex, activeIdx);
      }

      if (this.isHighlightingWords) {
        this.highlightRafId = requestAnimationFrame(updateLoop);
      }
    };

    this.highlightRafId = requestAnimationFrame(updateLoop);
  }

  stopWordHighlighting() {
    this.isHighlightingWords = false;
    if (this.highlightRafId) {
      cancelAnimationFrame(this.highlightRafId);
      this.highlightRafId = null;
    }
    this.clearAllActiveWords();
  }

  setActiveWord(lineIndex, wordIdx) {
    if (this.currentActiveLine === lineIndex && this.currentActiveWordIdx === wordIdx) {
      return;
    }

    this.clearAllActiveWords();
    this.currentActiveLine = lineIndex;
    this.currentActiveWordIdx = wordIdx;

    if (wordIdx >= 0 && this.container) {
      const wordEl = this.container.querySelector(`#line-${lineIndex}-word-${wordIdx}`);
      if (wordEl) {
        wordEl.classList.add("active-spoken-word");
      }
    }
  }

  clearAllActiveWords() {
    this.currentActiveLine = -1;
    this.currentActiveWordIdx = -1;
    if (!this.container) return;
    this.container.querySelectorAll(".active-spoken-word").forEach(el => {
      el.classList.remove("active-spoken-word");
    });
  }

  bindEvents() {
    // 0. Dialogue Tab switching
    this.container.querySelectorAll(".dialogue-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        sound.playPop();
        const newId = btn.dataset.dialogueId;
        if (newId && newId !== this.selectedDialogueId) {
          this.selectedDialogueId = newId;
          this.render(this.container);
        }
      });
    });

    // 1. Play individual lines
    this.container.querySelectorAll(".dialogue-speak-line-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const index = parseInt(btn.dataset.index, 10);
        this.playLine(index);
      });
    });

    // 2. Play words on click with nice tactile feedback
    this.container.querySelectorAll(".dialogue-word-token").forEach(token => {
      token.addEventListener("click", e => {
        e.stopPropagation();
        const wordText = token.dataset.word || token.dataset.spoken;
        if (wordText) {
          sound.playPop();
          token.classList.add("scale-105", "ring-2", "ring-amber-400");
          setTimeout(() => {
            token.classList.remove("scale-105", "ring-2", "ring-amber-400");
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
    const dialogue = this.getActiveDialogue();
    if (index < 0 || index >= dialogue.lines.length) return;

    this.highlightLine(index);
    const line = dialogue.lines[index];
    const words = line.tamil.split(" ").filter(Boolean);

    if (line.audio) {
      speech.playLocalAudio(
        line.audio,
        this.playbackRate,
        () => {
          this.stopWordHighlighting();
          this.clearLineHighlight(index);
          if (onEnded) onEnded();
        },
        () => {
          // Fallback to Web Speech if local audio fails
          const textToSpeak = this.cleanSpeechText(line.tamil);
          speech.speakWithWebSpeech(textToSpeak, this.playbackRate, () => {
            this.stopWordHighlighting();
            this.clearLineHighlight(index);
            if (onEnded) onEnded();
          });
        }
      );
      // Start real-time word highlight synchronization with the audio
      this.startWordHighlighting(index, words, speech.currentAudio);
    } else {
      const textToSpeak = this.cleanSpeechText(line.tamil);
      speech.speakWithWebSpeech(textToSpeak, this.playbackRate, () => {
        this.stopWordHighlighting();
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
    const dialogue = this.getActiveDialogue();
    if (this.currentPlayingIndex >= dialogue.lines.length) {
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
    this.stopWordHighlighting();
    this.clearAllHighlights();
    speech.stop();
  }

  highlightLine(index) {
    this.clearAllHighlights();
    const card = this.container ? this.container.querySelector(`#dialogue-line-${index}`) : null;
    if (card) {
      card.classList.add("ring-2", "ring-teal-500", "bg-teal-50/40", "dark:bg-teal-950/20");
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  clearLineHighlight(index) {
    const card = this.container ? this.container.querySelector(`#dialogue-line-${index}`) : null;
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
    const text = playAllBtn.querySelector("#play-all-text");
    if (isPlaying) {
      if (text) text.textContent = "Pause";
      playAllBtn.classList.add("from-rose-600", "to-amber-600");
      playAllBtn.classList.remove("from-teal-600", "to-emerald-600");
    } else {
      if (text) text.textContent = "Read Together";
      playAllBtn.classList.remove("from-rose-600", "to-amber-600");
      playAllBtn.classList.add("from-teal-600", "to-emerald-600");
    }
  }
}

export const dialogueReader = new DialogueReader();
