// Missing Letter Quiz Component (Detective Mode - No emojis, Dark Mode, Screen-Contained)
import { VOCABULARY, LEVELS } from "../data/words.js";
import { sound } from "../services/speech.js";
import { storage } from "../services/storage.js";

export class MissingQuizComponent {
  constructor(containerEl, onProgressUpdate) {
    this.container = containerEl;
    this.onProgressUpdate = onProgressUpdate;
    this.currentLevel = storage.data.currentLevel || 1;
    this.questions = [];
    this.currentIndex = 0;
    this.streak = 0;
    this.score = 0;
    this.answered = false;
  }

  setLevel(levelId) {
    this.currentLevel = levelId;
    storage.setCurrentLevel(levelId);
    this.initQuiz();
    this.render();
  }

  initQuiz() {
    const words = VOCABULARY.filter(w => w.level === this.currentLevel && w.letters.length >= 2);
    this.questions = [...words].sort(() => 0.5 - Math.random());
    this.currentIndex = 0;
    this.streak = 0;
    this.score = 0;
    this.loadQuestion();
  }

  loadQuestion() {
    this.answered = false;
    if (this.currentIndex >= this.questions.length) return;

    const currentWord = this.questions[this.currentIndex];
    this.hiddenIdx = Math.floor(Math.random() * currentWord.letters.length);
    const correctLetter = currentWord.letters[this.hiddenIdx];

    const distractorPool = VOCABULARY
      .filter(w => w.level === this.currentLevel)
      .flatMap(w => w.letters)
      .filter(l => l !== correctLetter);

    const shuffledPool = [...new Set(distractorPool)].sort(() => 0.5 - Math.random());
    const distractors = shuffledPool.slice(0, 2);

    this.choices = [correctLetter, ...distractors].sort(() => 0.5 - Math.random());
  }

  render() {
    if (this.currentIndex >= this.questions.length) {
      this.renderComplete();
      return;
    }

    const currentWord = this.questions[this.currentIndex];
    const correctLetter = currentWord.letters[this.hiddenIdx];

    this.container.innerHTML = `
      <div class="h-full min-h-0 w-full max-w-xl mx-auto flex flex-col justify-between py-1 sm:py-2 select-none">
        
        <!-- Header -->
        <div class="flex items-center justify-between px-2 mb-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-black uppercase text-amber-600 dark:text-amber-400">Level ${this.currentLevel}</span>
            <span class="text-xs bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded-full">
              ${this.currentIndex + 1} / ${this.questions.length}
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

        <!-- Question Card -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-slate-100 dark:border-slate-800 text-center flex-1 flex flex-col justify-between my-1">
          
          <div>
            <span class="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-slate-500">Find the missing letter:</span>
            <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">${currentWord.english}</h3>
            <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5 italic">"${currentWord.hint}"</p>
          </div>

          <!-- Word with Blank -->
          <div class="flex justify-center items-center gap-2 sm:gap-3 my-4">
            ${currentWord.letters.map((l, i) => {
              if (i === this.hiddenIdx) {
                return `
                  <div class="w-16 h-18 sm:w-20 sm:h-22 rounded-2xl border-3 border-dashed border-amber-400 dark:border-amber-500 bg-amber-50 dark:bg-slate-800 flex items-center justify-center font-tamil text-3xl font-black text-amber-600 dark:text-amber-400 animate-pulse">
                    ?
                  </div>
                `;
              }
              return `
                <div class="w-16 h-18 sm:w-20 sm:h-22 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center font-tamil text-3xl font-bold text-slate-700 dark:text-slate-200">
                  ${l}
                </div>
              `;
            }).join("")}
          </div>

          <p class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            Pick the letter to complete the word:
          </p>

          <!-- Choices -->
          <div class="flex justify-center items-center gap-2.5 sm:gap-4 flex-wrap my-1">
            ${this.choices.map(letter => `
              <button 
                data-letter="${letter}" 
                class="missing-choice-btn w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-slate-700 active:scale-95 transition-all flex items-center justify-center font-tamil text-3xl font-bold text-slate-800 dark:text-white shadow-sm cursor-pointer"
              >
                ${letter}
              </button>
            `).join("")}
          </div>

          <div id="missing-feedback" class="min-h-[22px] text-xs font-bold mt-2"></div>
        </div>

        <div class="text-center pt-2">
          <span class="text-[11px] text-slate-400 dark:text-slate-500">Practice discerning consonants and vowel signs</span>
        </div>

      </div>
    `;

    this.attachEvents(currentWord, correctLetter);
  }

  attachEvents(currentWord, correctLetter) {
    this.container.querySelectorAll(".missing-choice-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (this.answered) return;
        this.answered = true;

        const letter = btn.dataset.letter;
        sound.speak(letter, 0.7);

        const feedback = this.container.querySelector("#missing-feedback");

        if (letter === correctLetter) {
          btn.classList.add("bg-emerald-100", "dark:bg-emerald-950/60", "border-emerald-500", "text-emerald-900", "dark:text-emerald-300");
          sound.playSuccess();
          sound.speak(currentWord.id);
          this.streak++;
          this.score += 20 + (this.streak * 5);
          storage.addXP(15);
          storage.markWordMastered(currentWord.id);

          if (this.streak >= 5) storage.unlockBadge("streak_5");
          if (this.onProgressUpdate) this.onProgressUpdate();

          if (feedback) {
            feedback.innerHTML = `<span class="text-emerald-600 dark:text-emerald-400">Spot on! "${currentWord.tamil}" (${currentWord.translit})</span>`;
          }

          setTimeout(() => {
            this.currentIndex++;
            this.loadQuestion();
            this.render();
          }, 1200);

        } else {
          btn.classList.add("bg-rose-100", "dark:bg-rose-950/60", "border-rose-400", "text-rose-900", "dark:text-rose-300");
          sound.playError();
          this.streak = 0;

          this.container.querySelectorAll(".missing-choice-btn").forEach(b => {
            if (b.dataset.letter === correctLetter) {
              b.classList.add("bg-emerald-50", "dark:bg-emerald-950/40", "border-emerald-500");
            }
          });

          if (feedback) {
            feedback.innerHTML = `<span class="text-rose-500">Correct letter was "${correctLetter}". Word is "${currentWord.tamil}".</span>`;
          }

          setTimeout(() => {
            this.currentIndex++;
            this.loadQuestion();
            this.render();
          }, 2000);
        }
      });
    });
  }

  renderComplete() {
    sound.playFanfare();
    this.container.innerHTML = `
      <div class="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-3xl p-7 shadow-xl border-2 border-slate-100 dark:border-slate-800 text-center space-y-4 my-auto select-none">
        <h2 class="text-2xl font-black text-slate-900 dark:text-white">Mystery Solved!</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          You identified all the missing letters in Level ${this.currentLevel}!
        </p>

        <div class="bg-amber-50 dark:bg-slate-800 rounded-2xl p-4 border border-amber-200 dark:border-slate-700">
          <div class="text-3xl font-black text-amber-600 dark:text-amber-400">${this.score} pts</div>
          <div class="text-xs text-amber-800 dark:text-slate-400 font-semibold mt-1">Detective Score</div>
        </div>

        <button id="btn-replay-detective" class="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 rounded-xl shadow-md transition-all cursor-pointer">
          Solve More Words
        </button>
      </div>
    `;

    const replay = this.container.querySelector("#btn-replay-detective");
    if (replay) {
      replay.addEventListener("click", () => {
        sound.playPop();
        this.initQuiz();
        this.render();
      });
    }
  }
}
