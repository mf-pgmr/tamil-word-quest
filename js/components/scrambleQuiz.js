// Word Builder / Spelling Scramble Quiz Component (No emojis, Dark Mode, Screen-Contained)
import { VOCABULARY, LEVELS } from "../data/words.js";
import { sound } from "../services/speech.js";
import { storage } from "../services/storage.js";

export class ScrambleQuizComponent {
  constructor(containerEl, onProgressUpdate) {
    this.container = containerEl;
    this.onProgressUpdate = onProgressUpdate;
    this.currentLevel = storage.data.currentLevel || 1;
    this.quizList = [];
    this.currentIndex = 0;
    this.placedLetters = [];
    this.availableTiles = [];
    this.streak = 0;
    this.score = 0;
  }

  setLevel(levelId) {
    this.currentLevel = levelId;
    storage.setCurrentLevel(levelId);
    this.initQuiz();
    this.render();
  }

  initQuiz() {
    const words = VOCABULARY.filter(w => w.level === this.currentLevel);
    this.quizList = [...words].sort(() => 0.5 - Math.random());
    this.currentIndex = 0;
    this.streak = 0;
    this.score = 0;
    this.loadQuestion();
  }

  loadQuestion() {
    if (this.currentIndex >= this.quizList.length) return;
    const word = this.quizList[this.currentIndex];
    this.placedLetters = [];

    const distractorPool = VOCABULARY
      .filter(w => w.id !== word.id && w.level === this.currentLevel)
      .flatMap(w => w.letters);
    
    const distractor = distractorPool.length > 0 
      ? distractorPool[Math.floor(Math.random() * distractorPool.length)]
      : "ம";

    const allTiles = [...word.letters, distractor];
    this.availableTiles = allTiles
      .map((letter, i) => ({ id: `t_${i}_${letter}`, letter, used: false }))
      .sort(() => 0.5 - Math.random());
  }

  render() {
    if (this.currentIndex >= this.quizList.length) {
      this.renderComplete();
      return;
    }

    const word = this.quizList[this.currentIndex];

    this.container.innerHTML = `
      <div class="h-full min-h-0 w-full max-w-xl mx-auto flex flex-col justify-between py-1 sm:py-2 select-none">
        
        <!-- Header Bar -->
        <div class="flex items-center justify-between px-2 mb-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-black uppercase text-amber-600 dark:text-amber-400">Level ${this.currentLevel}</span>
            <span class="text-xs bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded-full">
              ${this.currentIndex + 1} / ${this.quizList.length}
            </span>
          </div>

          <div class="flex items-center gap-3">
            <div class="text-xs font-bold text-amber-600 dark:text-amber-400">
              Streak: ${this.streak}
            </div>
            <div class="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
              ${this.score} pts
            </div>
          </div>
        </div>

        <!-- Question Card (Contained) -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-slate-100 dark:border-slate-800 text-center flex-1 flex flex-col justify-between my-1">
          
          <div>
            <span class="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-slate-500">Spell in Tamil:</span>
            <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              ${word.english}
            </h3>
            <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5 italic">
              "${word.hint}"
            </p>
          </div>

          <!-- Hear Audio Clue -->
          <div class="my-2">
            <button id="btn-hear-word" class="inline-flex items-center gap-1.5 bg-indigo-50 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-slate-700 active:scale-95 text-indigo-700 dark:text-indigo-300 font-bold px-4 py-2 rounded-xl text-xs transition-all cursor-pointer border border-indigo-200 dark:border-slate-700">
              <span>Hear Tamil Word</span>
            </button>
          </div>

          <!-- Answer Slot Area -->
          <div class="my-2">
            <p class="text-[11px] text-slate-400 dark:text-slate-500 font-semibold mb-2 uppercase tracking-wider">Word Slots:</p>
            <div id="slots-container" class="flex justify-center items-center gap-2 sm:gap-3 min-h-[70px]">
              ${word.letters.map((_, idx) => {
                const placed = this.placedLetters[idx];
                return `
                  <button 
                    data-slot-idx="${idx}"
                    class="slot-tile w-16 h-18 sm:w-20 sm:h-22 rounded-2xl flex items-center justify-center font-tamil text-3xl font-bold transition-all
                    ${placed 
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-200 dark:shadow-none border-2 border-amber-600 cursor-pointer hover:bg-amber-600 active:scale-95' 
                      : 'border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-300 dark:text-slate-600 cursor-default'}"
                  >
                    ${placed ? placed.letter : ''}
                  </button>
                `;
              }).join("")}
            </div>
          </div>

          <!-- Letter Pool -->
          <div class="border-t border-slate-100 dark:border-slate-800/80 pt-3">
            <p class="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Available Letters:</p>
            <div class="flex justify-center items-center gap-2 sm:gap-3 flex-wrap">
              ${this.availableTiles.map((tile) => `
                <button 
                  data-tile-id="${tile.id}"
                  class="pool-tile w-14 h-16 sm:w-16 sm:h-18 rounded-2xl flex items-center justify-center font-tamil text-2xl sm:text-3xl font-bold transition-all shadow-sm cursor-pointer
                  ${tile.used 
                    ? 'opacity-20 cursor-not-allowed bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 shadow-none' 
                    : 'bg-slate-50 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border-2 border-slate-200 dark:border-slate-700 active:scale-95'}"
                  ${tile.used ? 'disabled' : ''}
                >
                  ${tile.letter}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Feedback message -->
          <div id="quiz-feedback" class="min-h-[22px] text-xs font-bold mt-2"></div>
        </div>

        <!-- Controls: Clear / Skip -->
        <div class="flex-shrink-0 flex justify-between items-center px-2 pt-2 pb-1">
          <button id="btn-clear-slots" class="text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer">
            Clear Letters
          </button>
          <button id="btn-skip-word" class="text-xs font-bold text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 cursor-pointer">
            Skip Word →
          </button>
        </div>

      </div>
    `;

    this.attachEvents(word);
  }

  attachEvents(word) {
    const hearBtn = this.container.querySelector("#btn-hear-word");
    if (hearBtn) {
      hearBtn.addEventListener("click", () => {
        sound.playPop();
        sound.speak(word.id);
      });
    }

    this.container.querySelectorAll(".pool-tile").forEach(btn => {
      btn.addEventListener("click", () => {
        const tileId = btn.dataset.tileId;
        const tile = this.availableTiles.find(t => t.id === tileId);
        if (tile && !tile.used && this.placedLetters.length < word.letters.length) {
          sound.playPop();
          sound.speak(tile.letter, 0.7);
          tile.used = true;
          this.placedLetters.push(tile);
          this.render();
          this.checkAnswer(word);
        }
      });
    });

    this.container.querySelectorAll(".slot-tile").forEach(btn => {
      btn.addEventListener("click", () => {
        const slotIdx = parseInt(btn.dataset.slotIdx);
        if (this.placedLetters[slotIdx]) {
          sound.playPop();
          const recalled = this.placedLetters.splice(slotIdx, 1)[0];
          recalled.used = false;
          this.render();
        }
      });
    });

    const clearBtn = this.container.querySelector("#btn-clear-slots");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        sound.playPop();
        this.placedLetters.forEach(t => t.used = false);
        this.placedLetters = [];
        this.render();
      });
    }

    const skipBtn = this.container.querySelector("#btn-skip-word");
    if (skipBtn) {
      skipBtn.addEventListener("click", () => {
        this.streak = 0;
        this.currentIndex++;
        this.loadQuestion();
        this.render();
      });
    }
  }

  checkAnswer(word) {
    if (this.placedLetters.length === word.letters.length) {
      const formedWord = this.placedLetters.map(p => p.letter).join("");
      const feedback = this.container.querySelector("#quiz-feedback");

      if (formedWord === word.tamil) {
        sound.playSuccess();
        sound.speak(word.id);
        this.streak++;
        this.score += 20 + (this.streak * 5);
        storage.addXP(15);
        storage.markWordMastered(word.id);

        if (this.streak >= 5) storage.unlockBadge("streak_5");
        storage.unlockBadge("spelling_champ");

        if (this.onProgressUpdate) this.onProgressUpdate();

        if (feedback) {
          feedback.innerHTML = `<span class="text-emerald-600 dark:text-emerald-400">Brilliant! "${word.tamil}" (${word.translit})</span>`;
        }

        setTimeout(() => {
          this.currentIndex++;
          this.loadQuestion();
          this.render();
        }, 1200);

      } else {
        sound.playError();
        if (feedback) {
          feedback.innerHTML = `<span class="text-rose-500">Not quite! Tap a letter to remove and try again.</span>`;
        }
        this.streak = 0;
      }
    }
  }

  renderComplete() {
    sound.playFanfare();
    this.container.innerHTML = `
      <div class="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-3xl p-7 shadow-xl border-2 border-slate-100 dark:border-slate-800 text-center space-y-4 my-auto select-none">
        <h2 class="text-2xl font-black text-slate-900 dark:text-white">Level Complete!</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          You conquered Level ${this.currentLevel} spelling challenges!
        </p>

        <div class="bg-amber-50 dark:bg-slate-800 rounded-2xl p-4 border border-amber-200 dark:border-slate-700">
          <div class="text-3xl font-black text-amber-600 dark:text-amber-400">${this.score} pts</div>
          <div class="text-xs text-amber-800 dark:text-slate-400 font-semibold mt-1">Total Score Earned</div>
        </div>

        <div class="flex gap-3 pt-2">
          <button id="btn-play-again" class="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 rounded-xl shadow-md transition-all cursor-pointer">
            Play Again
          </button>
          <button id="btn-next-level" class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-xl shadow-md transition-all cursor-pointer">
            Next Level →
          </button>
        </div>
      </div>
    `;

    const playAgain = this.container.querySelector("#btn-play-again");
    if (playAgain) {
      playAgain.addEventListener("click", () => {
        sound.playPop();
        this.initQuiz();
        this.render();
      });
    }

    const nextLvl = this.container.querySelector("#btn-next-level");
    if (nextLvl) {
      nextLvl.addEventListener("click", () => {
        sound.playPop();
        const next = this.currentLevel < 4 ? this.currentLevel + 1 : 1;
        this.setLevel(next);
      });
    }
  }
}
