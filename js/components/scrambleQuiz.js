// Word Builder / Spelling Scramble Quiz Component
import { VOCABULARY, LEVELS } from "../data/words.js";
import { sound } from "../services/speech.js";
import { storage } from "../services/storage.js";

export class ScrambleQuizComponent {
  constructor(containerEl, onProgressUpdate) {
    this.container = containerEl;
    this.onProgressUpdate = onProgressUpdate;
    this.currentLevel = 1;
    this.quizList = [];
    this.currentIndex = 0;
    this.placedLetters = [];
    this.availableTiles = [];
    this.streak = 0;
    this.score = 0;
    this.initQuiz();
  }

  setLevel(levelId) {
    this.currentLevel = levelId;
    this.initQuiz();
    this.render();
  }

  initQuiz() {
    // Shuffle words from the current level
    const words = VOCABULARY.filter(w => w.level === this.currentLevel);
    this.quizList = [...words].sort(() => 0.5 - Math.random());
    this.currentIndex = 0;
    this.streak = 0;
    this.score = 0;
    this.loadQuestion();
  }

  loadQuestion() {
    if (this.currentIndex >= this.quizList.length) {
      // Completed round
      return;
    }
    const word = this.quizList[this.currentIndex];
    this.placedLetters = [];

    // Create scrambled tiles: actual letters + 1 distractor from another word in the same level
    const distractorPool = VOCABULARY
      .filter(w => w.id !== word.id && w.level === this.currentLevel)
      .flatMap(w => w.letters);
    
    const distractor = distractorPool.length > 0 
      ? distractorPool[Math.floor(Math.random() * distractorPool.length)]
      : "ம";

    const allTiles = [...word.letters, distractor];
    // Shuffle tiles
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
    const isTargetFull = this.placedLetters.length === word.letters.length;

    this.container.innerHTML = `
      <div class="max-w-xl mx-auto space-y-5">
        <!-- Level Bar & Score Header -->
        <div class="flex items-center justify-between bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-500 uppercase">Level ${this.currentLevel}</span>
            <span class="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
              Q ${this.currentIndex + 1} / ${this.quizList.length}
            </span>
          </div>

          <div class="flex items-center gap-3">
            <div class="flex items-center gap-1 text-sm font-bold text-amber-600">
              <span>🔥 Streak:</span>
              <span class="bg-amber-100 px-2 py-0.5 rounded-md">${this.streak}</span>
            </div>
            <div class="text-sm font-extrabold text-indigo-600">
              ⭐ ${this.score} pts
            </div>
          </div>
        </div>

        <!-- Question Card -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-slate-100 text-center relative">
          
          <!-- Image and Prompt -->
          <div class="text-7xl mb-2 select-none" id="quiz-emoji">
            ${word.emoji}
          </div>

          <h3 class="text-2xl font-black text-slate-800">
            ${word.english}
          </h3>
          <p class="text-xs text-slate-400 mt-1 mb-4 italic">
            "${word.hint}"
          </p>

          <!-- Audio Clue -->
          <button id="btn-hear-word" class="inline-flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 active:scale-95 text-indigo-700 font-bold px-4 py-2 rounded-xl text-sm transition-all mb-6">
            <span>🔊</span> Hear Tamil Word
          </button>

          <!-- Answer Slot Area (Empty boxes where letters land) -->
          <div class="mb-8">
            <p class="text-xs text-slate-400 font-semibold mb-2 uppercase tracking-wider">Tap tiles below to build word:</p>
            <div id="slots-container" class="flex justify-center items-center gap-3 min-h-[70px]">
              ${word.letters.map((_, idx) => {
                const placed = this.placedLetters[idx];
                return `
                  <button 
                    data-slot-idx="${idx}"
                    class="slot-tile w-16 h-18 sm:w-20 sm:h-22 rounded-2xl flex items-center justify-center font-tamil text-3xl sm:text-4xl font-bold transition-all
                    ${placed 
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-200 border-2 border-amber-600 cursor-pointer hover:bg-amber-600 active:scale-95' 
                      : 'border-2 border-dashed border-slate-300 bg-slate-50 text-slate-300 cursor-default'}"
                  >
                    ${placed ? placed.letter : '?'}
                  </button>
                `;
              }).join("")}
            </div>
          </div>

          <!-- Available Letter Tiles Pool -->
          <div class="border-t border-slate-100 pt-5">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Letter Pool:</p>
            <div class="flex justify-center items-center gap-3 flex-wrap">
              ${this.availableTiles.map((tile) => `
                <button 
                  data-tile-id="${tile.id}"
                  class="pool-tile w-14 h-16 sm:w-16 sm:h-18 rounded-2xl flex items-center justify-center font-tamil text-2xl sm:text-3xl font-bold transition-all shadow-md
                  ${tile.used 
                    ? 'opacity-20 cursor-not-allowed bg-slate-200 text-slate-400 shadow-none' 
                    : 'bg-white hover:bg-amber-50 text-slate-800 border-2 border-slate-200 hover:border-amber-400 active:scale-95'}"
                  ${tile.used ? 'disabled' : ''}
                >
                  ${tile.letter}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Feedback message -->
          <div id="quiz-feedback" class="mt-4 min-h-[24px] text-sm font-bold"></div>
        </div>

        <!-- Controls: Clear / Skip -->
        <div class="flex justify-between items-center px-2">
          <button id="btn-clear-slots" class="text-xs font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1">
            🔄 Clear Letters
          </button>
          <button id="btn-skip-word" class="text-xs font-bold text-indigo-500 hover:text-indigo-700">
            Skip Question →
          </button>
        </div>
      </div>
    `;

    this.attachEvents(word);
  }

  attachEvents(word) {
    // Audio button
    const hearBtn = this.container.querySelector("#btn-hear-word");
    if (hearBtn) {
      hearBtn.addEventListener("click", () => {
        sound.speak(word.tamil);
      });
    }

    // Emoji click
    const emoji = this.container.querySelector("#quiz-emoji");
    if (emoji) {
      emoji.addEventListener("click", () => {
        sound.speak(word.tamil);
      });
    }

    // Tapping a pool tile to place it
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

    // Tapping a placed slot to recall it
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

    // Clear button
    const clearBtn = this.container.querySelector("#btn-clear-slots");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        sound.playPop();
        this.placedLetters.forEach(t => t.used = false);
        this.placedLetters = [];
        this.render();
      });
    }

    // Skip button
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
        // Correct!
        sound.playSuccess();
        sound.speak(word.tamil);
        this.streak++;
        this.score += 20 + (this.streak * 5);
        storage.addXP(15);
        storage.markWordMastered(word.id);

        if (this.streak >= 5) {
          storage.unlockBadge("streak_5");
        }
        storage.unlockBadge("spelling_champ");

        if (this.onProgressUpdate) this.onProgressUpdate();

        if (feedback) {
          feedback.innerHTML = `<span class="text-emerald-600 animate-bounce">🎉 Brilliant! You spelled "${word.tamil}" (${word.translit})!</span>`;
        }

        setTimeout(() => {
          this.currentIndex++;
          this.loadQuestion();
          this.render();
        }, 1200);

      } else {
        // Incorrect
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
      <div class="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-xl border-2 border-slate-100 text-center space-y-5">
        <div class="text-6xl animate-bounce">🏆</div>
        <h2 class="text-2xl font-black text-slate-800">Level Complete!</h2>
        <p class="text-sm text-slate-500">
          You conquered Level ${this.currentLevel} spelling challenges!
        </p>

        <div class="bg-amber-50 rounded-2xl p-4 border border-amber-200">
          <div class="text-3xl font-black text-amber-600">⭐ ${this.score} pts</div>
          <div class="text-xs text-amber-800 font-semibold mt-1">Total Score Earned</div>
        </div>

        <div class="flex gap-3 pt-2">
          <button id="btn-play-again" class="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl shadow-md transition-all">
            Play Again
          </button>
          <button id="btn-next-level" class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-md transition-all">
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
        this.currentLevel = this.currentLevel < 4 ? this.currentLevel + 1 : 1;
        this.initQuiz();
        this.render();
      });
    }
  }
}
