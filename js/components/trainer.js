// Flashcard & Phonics Reading Trainer Component (No Emojis, Dark Mode & Screen-Contained)
import { VOCABULARY, LEVELS } from "../data/words.js";
import { sound } from "../services/speech.js";
import { storage } from "../services/storage.js";

export class TrainerComponent {
  constructor(containerEl, onProgressUpdate, onSettingChange) {
    this.container = containerEl;
    this.onProgressUpdate = onProgressUpdate;
    this.onSettingChange = onSettingChange;
    this.currentLevel = storage.data.currentLevel || 1;
    this.currentIndex = 0;
    this.activeWords = [];
    this.isMeaningPeeked = false;
    this.filterWords();
  }

  filterWords() {
    this.activeWords = this.currentLevel === "all"
      ? storage.getAllWords()
      : storage.getAllWords().filter(w => w.level === this.currentLevel);
    this.currentIndex = 0;
    this.isMeaningPeeked = false;
  }

  setLevel(levelId) {
    this.currentLevel = levelId;
    storage.setCurrentLevel(levelId);
    this.filterWords();
    this.render();
  }

  render() {
    const word = this.activeWords[this.currentIndex] || this.activeWords[0];
    const isMastered = word ? storage.data.masteredWords.includes(word.id) : false;
    const currentLvlObj = LEVELS.find(l => l.id === this.currentLevel) || LEVELS[0];
    const showMeaning = storage.data.showMeaning !== false;
    const showPhonics = storage.data.showPhonics !== false;
    const isMeaningVisible = showMeaning || this.isMeaningPeeked;

    this.container.innerHTML = `
      <div class="h-full min-h-0 w-full min-w-0 max-w-2xl mx-auto flex flex-col justify-between py-1 sm:py-2 select-none">
        
        <!-- Header Info Bar -->
        <div class="flex items-center justify-between px-1 mb-2 gap-2 flex-wrap sm:flex-nowrap">
          <div class="flex items-center gap-1.5 sm:gap-2">
            <span class="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
              ${this.currentLevel === "all" ? "All Words" : `Level ${this.currentLevel}`}
            </span>
            <span class="text-xs text-slate-400 dark:text-slate-500 font-semibold">•</span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">
              Word ${this.currentIndex + 1} of ${this.activeWords.length}
            </span>
            ${isMastered ? `
              <span class="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full text-[11px] font-bold border border-emerald-300 dark:border-emerald-800 ml-1">
                ✓ Mastered
              </span>
            ` : ''}
          </div>

          <!-- Quick Study Aid Pills in Header -->
          <div class="flex items-center gap-1.5">
            <button id="pill-toggle-meaning" class="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold border transition-all cursor-pointer flex items-center gap-1 ${showMeaning ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-700'}" title="Toggle English Meaning">
              <span>Meaning:</span>
              <span class="font-extrabold">${showMeaning ? 'ON' : 'OFF'}</span>
            </button>

            <button id="pill-toggle-phonics" class="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold border transition-all cursor-pointer flex items-center gap-1 ${showPhonics ? 'bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-700'}" title="Toggle Phonic Sound Letters">
              <span>Phonics:</span>
              <span class="font-extrabold">${showPhonics ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>

        <!-- Main Flashcard (Contained & Centered) -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border-2 border-slate-100 dark:border-slate-800 flex-1 min-w-0 flex flex-col justify-between my-1 w-full">
          
          <!-- Meaning & Category -->
          <div class="text-center pt-1 min-h-[64px] flex flex-col justify-center items-center">
            ${isMeaningVisible ? `
              <div class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                ${word.english}
              </div>
              <div class="text-xs text-slate-400 dark:text-slate-500 italic mt-0.5">
                "${word.hint}"
              </div>
              ${!showMeaning && this.isMeaningPeeked ? `
                <button id="btn-peek-meaning" class="text-[10px] text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5 cursor-pointer underline">
                  Hide meaning
                </button>
              ` : ''}
            ` : `
              <div class="text-3xl sm:text-4xl font-black font-tamil text-slate-900 dark:text-white tracking-tight">
                ${word.tamil}
              </div>
              <button id="btn-peek-meaning" class="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold mt-1 cursor-pointer bg-slate-100 dark:bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700/60 transition-colors">
                <span>Show English Meaning</span>
              </button>
            `}
          </div>

          <!-- Main Interactive Letter Tiles -->
          <div class="my-auto py-2 text-center">
            <p class="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
              Tap letters to hear phonic sounds:
            </p>
            <div class="flex justify-center items-center gap-2 sm:gap-3 flex-wrap">
              ${word.letters.map((letter, idx) => `
                <button 
                  data-letter-idx="${idx}"
                  class="letter-tile group bg-amber-50/80 dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-slate-700/80 active:scale-95 border-2 border-amber-300 dark:border-amber-500/40 text-amber-950 dark:text-amber-300 font-bold rounded-2xl w-16 h-18 sm:w-20 sm:h-22 flex flex-col items-center justify-center shadow-md transition-all cursor-pointer"
                  title="Hear '${letter}'"
                >
                  <span class="text-2xl sm:text-3xl font-tamil leading-tight">${letter}</span>
                  ${showPhonics ? `
                    <span class="text-[10px] text-amber-700 dark:text-amber-400 font-semibold mt-1">
                      ${word.breakdowns && word.breakdowns[idx] ? word.breakdowns[idx].sound : ''}
                    </span>
                  ` : ''}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Phonics Anatomy Formula Box -->
          <div id="breakdown-box" class="bg-amber-50/70 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-amber-900 dark:text-amber-200 max-w-full mx-auto w-full transition-all text-center">
            <span class="font-bold">Phonics Tip:</span> Tap any letter above to hear its sound!
          </div>

          <!-- Pronunciation Audio Controls -->
          <div class="flex justify-center items-center gap-3 my-2 pt-2">
            <button id="btn-speak-word" class="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold px-6 py-2.5 rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none flex items-center gap-2 text-sm sm:text-base transition-all cursor-pointer">
              <span>Read Word</span>
            </button>
            <button id="btn-speak-slow" class="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 text-slate-700 dark:text-slate-200 font-semibold px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs sm:text-sm transition-all cursor-pointer" title="Listen slowly">
              <span>Slow</span>
            </button>
          </div>

          <!-- English Sounds / Transliteration -->
          ${showPhonics ? `
            <div class="border-t border-slate-100 dark:border-slate-800/80 pt-2.5 text-center">
              <span class="text-xs text-slate-400 dark:text-slate-500">English Phonics:</span>
              <span class="font-mono font-bold text-indigo-600 dark:text-indigo-400 tracking-wider text-sm ml-1.5">
                ${word.translit}
              </span>
            </div>
          ` : `
            <div class="border-t border-slate-100 dark:border-slate-800/80 pt-2 text-center">
              <span class="text-[11px] text-slate-400 dark:text-slate-500 italic">Pure Tamil reading mode</span>
            </div>
          `}

        </div>

        <!-- Navigation Buttons: ALWAYS VISIBLE AT BOTTOM -->
        <div class="flex-shrink-0 flex items-center justify-between gap-2 sm:gap-3 pt-2 pb-1 w-full">
          <button id="btn-prev" class="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95 text-slate-700 dark:text-slate-200 font-bold px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm disabled:opacity-40 transition-all cursor-pointer text-xs sm:text-sm whitespace-nowrap" ${this.currentIndex === 0 ? 'disabled' : ''}>
            ← Prev
          </button>

          <button id="btn-master" class="flex-1 font-bold py-2 sm:py-2.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer text-xs sm:text-sm truncate
            ${isMastered 
              ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
              : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-200 dark:shadow-none'}"
          >
            <span class="truncate">${isMastered ? '✓ Mastered' : 'I Can Read This!'}</span>
          </button>

          <button id="btn-next" class="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95 text-slate-700 dark:text-slate-200 font-bold px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm disabled:opacity-40 transition-all cursor-pointer text-xs sm:text-sm whitespace-nowrap" ${this.currentIndex === this.activeWords.length - 1 ? 'disabled' : ''}>
            Next →
          </button>
        </div>

      </div>
    `;

    this.attachEvents(word);
  }

  attachEvents(word) {
    // Tap letter tile
    this.container.querySelectorAll(".letter-tile").forEach(tile => {
      tile.addEventListener("click", () => {
        sound.playPop();
        const idx = parseInt(tile.dataset.letterIdx);
        const letter = word.letters[idx];
        sound.speak(letter, 0.7);

        // Show breakdown
        const box = this.container.querySelector("#breakdown-box");
        if (box && word.breakdowns && word.breakdowns[idx]) {
          const b = word.breakdowns[idx];
          const showPhonics = storage.data.showPhonics !== false;
          box.innerHTML = `
            <div class="flex items-center ${showPhonics ? 'justify-between' : 'justify-center'} text-xs">
              <div>
                <span class="font-bold font-tamil text-amber-950 dark:text-amber-300 text-base">${b.letter}</span>
                <span class="mx-1 text-slate-400">=</span>
                <span class="font-bold text-amber-800 dark:text-amber-200">${b.root}</span>
              </div>
              ${showPhonics ? `
                <div class="bg-amber-200/60 dark:bg-slate-700 px-2 py-0.5 rounded text-[11px] font-bold text-amber-900 dark:text-amber-300">
                  "${b.sound}"
                </div>
              ` : ''}
            </div>
          `;
        }
      });
    });

    // Quick Pill Toggles in Header
    const pillMeaning = this.container.querySelector("#pill-toggle-meaning");
    if (pillMeaning) {
      pillMeaning.addEventListener("click", () => {
        sound.playPop();
        storage.toggleMeaning();
        if (this.onSettingChange) this.onSettingChange();
        this.render();
      });
    }

    const pillPhonics = this.container.querySelector("#pill-toggle-phonics");
    if (pillPhonics) {
      pillPhonics.addEventListener("click", () => {
        sound.playPop();
        storage.togglePhonics();
        if (this.onSettingChange) this.onSettingChange();
        this.render();
      });
    }

    // Peek / Hide Meaning toggle button
    const peekBtn = this.container.querySelector("#btn-peek-meaning");
    if (peekBtn) {
      peekBtn.addEventListener("click", () => {
        sound.playPop();
        this.isMeaningPeeked = !this.isMeaningPeeked;
        this.render();
      });
    }

    // Speak whole word
    const speakBtn = this.container.querySelector("#btn-speak-word");
    if (speakBtn) {
      speakBtn.addEventListener("click", () => {
        sound.playPop();
        speakBtn.classList.add("ring-4", "ring-indigo-300", "animate-pulse");
        sound.speak(word.id, 0.95, () => {
          speakBtn.classList.remove("ring-4", "ring-indigo-300", "animate-pulse");
        });
        setTimeout(() => {
          speakBtn.classList.remove("ring-4", "ring-indigo-300", "animate-pulse");
        }, 1500);
      });
    }

    // Speak slow
    const speakSlowBtn = this.container.querySelector("#btn-speak-slow");
    if (speakSlowBtn) {
      speakSlowBtn.addEventListener("click", () => {
        sound.playPop();
        speakSlowBtn.classList.add("ring-4", "ring-slate-300", "animate-pulse");
        sound.speakSlow(word.id, () => {
          speakSlowBtn.classList.remove("ring-4", "ring-slate-300", "animate-pulse");
        });
        setTimeout(() => {
          speakSlowBtn.classList.remove("ring-4", "ring-slate-300", "animate-pulse");
        }, 2200);
      });
    }

    // Prev / Next
    const prevBtn = this.container.querySelector("#btn-prev");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (this.currentIndex > 0) {
          sound.playPop();
          this.currentIndex--;
          this.isMeaningPeeked = false;
          this.render();
        }
      });
    }

    const nextBtn = this.container.querySelector("#btn-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (this.currentIndex < this.activeWords.length - 1) {
          sound.playPop();
          this.currentIndex++;
          this.isMeaningPeeked = false;
          this.render();
        }
      });
    }

    // Master button
    const masterBtn = this.container.querySelector("#btn-master");
    if (masterBtn) {
      masterBtn.addEventListener("click", () => {
        const added = storage.markWordMastered(word.id);
        if (added) {
          sound.playSuccess();
        } else {
          sound.playPop();
        }
        if (this.onProgressUpdate) this.onProgressUpdate();
        this.render();
      });
    }
  }
}
