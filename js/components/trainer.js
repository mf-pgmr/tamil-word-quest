// Flashcard & Phonics Reading Trainer Component (No Emojis, Dark Mode & Screen-Contained)
import { VOCABULARY, LEVELS } from "../data/words.js";
import { sound } from "../services/speech.js";
import { storage } from "../services/storage.js";

export class TrainerComponent {
  constructor(containerEl, onProgressUpdate) {
    this.container = containerEl;
    this.onProgressUpdate = onProgressUpdate;
    this.currentLevel = storage.data.currentLevel || 1;
    this.currentIndex = 0;
    this.activeWords = [];
    this.filterWords();
  }

  filterWords() {
    this.activeWords = VOCABULARY.filter(w => w.level === this.currentLevel);
    this.currentIndex = 0;
  }

  setLevel(levelId) {
    this.currentLevel = levelId;
    storage.setCurrentLevel(levelId);
    this.filterWords();
    this.render();
  }

  render() {
    const word = this.activeWords[this.currentIndex] || this.activeWords[0];
    const isMastered = storage.data.masteredWords.includes(word.id);
    const currentLvlObj = LEVELS.find(l => l.id === this.currentLevel) || LEVELS[0];

    this.container.innerHTML = `
      <div class="h-full w-full max-w-2xl mx-auto flex flex-col justify-between py-1 sm:py-2 select-none">
        
        <!-- Header Info Bar -->
        <div class="flex items-center justify-between px-1 mb-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Level ${this.currentLevel}
            </span>
            <span class="text-xs text-slate-400 dark:text-slate-500 font-semibold">•</span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">
              Word ${this.currentIndex + 1} of ${this.activeWords.length}
            </span>
          </div>

          <div>
            ${isMastered ? `
              <span class="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-300 dark:border-emerald-800">
                ✓ Mastered
              </span>
            ` : `
              <span class="text-xs text-slate-400 dark:text-slate-500">Not Mastered Yet</span>
            `}
          </div>
        </div>

        <!-- Main Flashcard (Contained & Centered) -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 shadow-xl border-2 border-slate-100 dark:border-slate-800 flex-1 flex flex-col justify-between my-1">
          
          <!-- Meaning & Category -->
          <div class="text-center pt-1">
            <div class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              ${word.english}
            </div>
            <div class="text-xs text-slate-400 dark:text-slate-500 italic mt-0.5">
              "${word.hint}"
            </div>
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
                  class="letter-tile group bg-amber-50/80 dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-slate-700/80 active:scale-95 border-2 border-amber-300 dark:border-amber-500/40 text-amber-950 dark:text-amber-300 font-bold rounded-2xl w-18 h-20 sm:w-22 sm:h-24 flex flex-col items-center justify-center shadow-md transition-all cursor-pointer"
                  title="Hear '${letter}'"
                >
                  <span class="text-3xl sm:text-4xl font-tamil leading-tight">${letter}</span>
                  <span class="text-[10px] sm:text-[11px] text-amber-700 dark:text-amber-400 font-semibold mt-1">
                    ${word.breakdowns && word.breakdowns[idx] ? word.breakdowns[idx].sound : ''}
                  </span>
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Phonics Anatomy Formula Box -->
          <div id="breakdown-box" class="bg-amber-50/70 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-amber-900 dark:text-amber-200 max-w-md mx-auto w-full transition-all text-center">
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
          <div class="border-t border-slate-100 dark:border-slate-800/80 pt-2.5 text-center">
            <span class="text-xs text-slate-400 dark:text-slate-500">English Phonics:</span>
            <span class="font-mono font-bold text-indigo-600 dark:text-indigo-400 tracking-wider text-sm ml-1.5">
              ${word.translit}
            </span>
          </div>

        </div>

        <!-- Navigation Buttons: ALWAYS VISIBLE AT BOTTOM -->
        <div class="flex items-center justify-between gap-3 pt-2">
          <button id="btn-prev" class="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95 text-slate-700 dark:text-slate-200 font-bold px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm disabled:opacity-40 transition-all cursor-pointer" ${this.currentIndex === 0 ? 'disabled' : ''}>
            ← Previous
          </button>

          <button id="btn-master" class="flex-1 max-w-xs font-bold py-2.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer
            ${isMastered 
              ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
              : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-200 dark:shadow-none'}"
          >
            <span>${isMastered ? '✓ Mastered (+20 XP)' : 'I Can Read This!'}</span>
          </button>

          <button id="btn-next" class="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95 text-slate-700 dark:text-slate-200 font-bold px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm disabled:opacity-40 transition-all cursor-pointer" ${this.currentIndex === this.activeWords.length - 1 ? 'disabled' : ''}>
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
          box.innerHTML = `
            <div class="flex items-center justify-between text-xs">
              <div>
                <span class="font-bold font-tamil text-amber-950 dark:text-amber-300 text-base">${b.letter}</span>
                <span class="mx-1 text-slate-400">=</span>
                <span class="font-bold text-amber-800 dark:text-amber-200">${b.root}</span>
              </div>
              <div class="bg-amber-200/60 dark:bg-slate-700 px-2 py-0.5 rounded text-[11px] font-bold text-amber-900 dark:text-amber-300">
                "${b.sound}"
              </div>
            </div>
          `;
        }
      });
    });

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
