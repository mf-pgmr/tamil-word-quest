// Missing Letter Quiz Component (Detective Mode)
import { VOCABULARY, LEVELS } from "../data/words.js";
import { sound } from "../services/speech.js";
import { storage } from "../services/storage.js";

export class MissingQuizComponent {
  constructor(containerEl, onProgressUpdate) {
    this.container = containerEl;
    this.onProgressUpdate = onProgressUpdate;
    this.currentLevel = 1;
    this.questions = [];
    this.currentIndex = 0;
    this.streak = 0;
    this.score = 0;
    this.answered = false;
    this.initQuiz();
  }

  setLevel(levelId) {
    this.currentLevel = levelId;
    this.initQuiz();
    this.render();
  }

  initQuiz() {
    // Only words with at least 2 letters
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
    // Randomly pick which letter index to hide
    this.hiddenIdx = Math.floor(Math.random() * currentWord.letters.length);
    const correctLetter = currentWord.letters[this.hiddenIdx];

    // Pick 2 distractor letters from the same level
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
      <div class="max-w-xl mx-auto space-y-6">
        <!-- Header -->
        <div class="flex items-center justify-between bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-500 uppercase">Letter Detective</span>
            <span class="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
              Q ${this.currentIndex + 1} / ${this.questions.length}
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
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-slate-100 text-center">
          <div class="text-7xl mb-2 select-none">${currentWord.emoji}</div>
          <h3 class="text-xl font-bold text-slate-800">${currentWord.english}</h3>
          <p class="text-xs text-slate-400 mt-0.5 mb-6 italic">"${currentWord.hint}"</p>

          <!-- Word with blank -->
          <div class="flex justify-center items-center gap-3 my-6">
            ${currentWord.letters.map((l, i) => {
              if (i === this.hiddenIdx) {
                return `
                  <div class="w-16 h-18 sm:w-20 sm:h-22 rounded-2xl border-3 border-dashed border-amber-400 bg-amber-50 flex items-center justify-center font-tamil text-3xl font-black text-amber-600 animate-pulse">
                    ?
                  </div>
                `;
              }
              return `
                <div class="w-16 h-18 sm:w-20 sm:h-22 rounded-2xl border-2 border-slate-200 bg-slate-50 flex items-center justify-center font-tamil text-3xl font-bold text-slate-700">
                  ${l}
                </div>
              `;
            }).join("")}
          </div>

          <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            Pick the missing letter to complete the word:
          </p>

          <!-- Choices -->
          <div class="flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
            ${this.choices.map(letter => `
              <button 
                data-letter="${letter}" 
                class="missing-choice-btn w-18 h-18 sm:w-22 sm:h-22 rounded-2xl border-2 border-slate-200 bg-white hover:bg-amber-50 hover:border-amber-400 active:scale-95 transition-all flex items-center justify-center font-tamil text-3xl sm:text-4xl font-bold text-slate-800 shadow-md"
              >
                ${letter}
              </button>
            `).join("")}
          </div>

          <div id="missing-feedback" class="mt-5 min-h-[24px] text-sm font-bold"></div>
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
          btn.classList.add("bg-emerald-100", "border-emerald-500", "text-emerald-900");
          sound.playSuccess();
          sound.speak(currentWord.tamil);
          this.streak++;
          this.score += 20 + (this.streak * 5);
          storage.addXP(15);
          storage.markWordMastered(currentWord.id);

          if (this.streak >= 5) {
            storage.unlockBadge("streak_5");
          }
          if (this.onProgressUpdate) this.onProgressUpdate();

          if (feedback) {
            feedback.innerHTML = `<span class="text-emerald-600 animate-bounce">🎯 Spot on! Completed "${currentWord.tamil}" (${currentWord.translit})!</span>`;
          }

          setTimeout(() => {
            this.currentIndex++;
            this.loadQuestion();
            this.render();
          }, 1200);

        } else {
          btn.classList.add("bg-rose-100", "border-rose-400", "text-rose-900");
          sound.playError();
          this.streak = 0;

          // Highlight correct button
          this.container.querySelectorAll(".missing-choice-btn").forEach(b => {
            if (b.dataset.letter === correctLetter) {
              b.classList.add("bg-emerald-50", "border-emerald-500");
            }
          });

          if (feedback) {
            feedback.innerHTML = `<span class="text-rose-500">Missing letter was "${correctLetter}". The word is "${currentWord.tamil}".</span>`;
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
      <div class="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-xl border-2 border-slate-100 text-center space-y-5">
        <div class="text-6xl animate-bounce">🔍</div>
        <h2 class="text-2xl font-black text-slate-800">Mystery Solved!</h2>
        <p class="text-sm text-slate-500">
          You uncovered all the missing letters like a true Tamil Detective!
        </p>

        <div class="bg-amber-50 rounded-2xl p-4 border border-amber-200">
          <div class="text-3xl font-black text-amber-600">⭐ ${this.score} pts</div>
          <div class="text-xs text-amber-800 font-semibold mt-1">Detective Score</div>
        </div>

        <button id="btn-replay-detective" class="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl shadow-md transition-all">
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
