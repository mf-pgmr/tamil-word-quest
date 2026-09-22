// "Listen & Match" Quiz Component (No emojis, Dark Mode, Screen-Contained)
import { VOCABULARY, LEVELS } from "../data/words.js";
import { sound } from "../services/speech.js";
import { storage } from "../services/storage.js";

export class ListenQuizComponent {
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

  initQuiz(autoPlay = false) {
    const words = VOCABULARY.filter(w => w.level === this.currentLevel);
    this.questions = [...words].sort(() => 0.5 - Math.random());
    this.currentIndex = 0;
    this.streak = 0;
    this.score = 0;
    this.loadQuestion(autoPlay);
  }

  loadQuestion(autoPlay = false) {
    this.answered = false;
    if (this.currentIndex >= this.questions.length) return;

    const currentWord = this.questions[this.currentIndex];
    const allOtherWords = VOCABULARY.filter(w => w.id !== currentWord.id);
    const shuffledOthers = [...allOtherWords].sort(() => 0.5 - Math.random()).slice(0, 3);
    this.options = [currentWord, ...shuffledOthers].sort(() => 0.5 - Math.random());

    if (autoPlay) {
      setTimeout(() => {
        sound.speak(currentWord.id);
      }, 400);
    }
  }

  render() {
    if (this.currentIndex >= this.questions.length) {
      this.renderComplete();
      return;
    }

    const currentWord = this.questions[this.currentIndex];

    this.container.innerHTML = `
      <div class="h-full min-h-0 w-full max-w-xl mx-auto flex flex-col justify-between py-1 sm:py-2 select-none">
        
        <!-- Header -->
        <div class="flex items-center justify-between px-2 mb-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-black uppercase text-amber-600 dark:text-amber-400">Level ${this.currentLevel}</span>
            <span class="text-xs bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 font-bold px-2 py-0.5 rounded-full">
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

        <!-- Audio Prompt Card -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-slate-100 dark:border-slate-800 text-center flex-1 flex flex-col justify-between my-1">
          
          <div>
            <p class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Listen to the word:</p>
            
            <button id="btn-replay-audio" class="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-tr from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 active:scale-95 text-white rounded-full flex flex-col items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none transition-all cursor-pointer">
              <span class="text-base font-black uppercase tracking-wider">Play</span>
              <span class="text-[10px] text-white/80 font-medium">Sound</span>
            </button>

            <p class="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 mt-3">
              Which Tamil word matches the audio?
            </p>
          </div>

          <!-- 4 Card Choices -->
          <div class="grid grid-cols-2 gap-2.5 sm:gap-3 my-2">
            ${this.options.map((opt) => `
              <button 
                data-word-id="${opt.id}" 
                class="quiz-choice-btn group p-3 sm:p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50/50 dark:hover:bg-slate-700 active:scale-95 transition-all text-center flex flex-col items-center justify-center min-h-[90px] cursor-pointer"
              >
                <span class="text-2xl sm:text-3xl font-tamil font-black text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">${opt.tamil}</span>
                <span class="text-xs font-medium text-slate-400 dark:text-slate-500 mt-1">${opt.english}</span>
              </button>
            `).join("")}
          </div>

          <div id="listen-feedback" class="min-h-[22px] text-xs font-bold mt-1"></div>
        </div>

        <div class="text-center pt-2">
          <span class="text-[11px] text-slate-400 dark:text-slate-500">Tap the round Play button above to hear again anytime</span>
        </div>

      </div>
    `;

    this.attachEvents(currentWord);
  }

  attachEvents(currentWord) {
    const replayBtn = this.container.querySelector("#btn-replay-audio");
    if (replayBtn) {
      replayBtn.addEventListener("click", () => {
        sound.playPop();
        sound.speak(currentWord.id);
      });
    }

    this.container.querySelectorAll(".quiz-choice-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (this.answered) return;
        this.answered = true;

        const selectedId = btn.dataset.wordId;
        const feedback = this.container.querySelector("#listen-feedback");

        if (selectedId === currentWord.id) {
          btn.classList.add("bg-emerald-100", "dark:bg-emerald-950/60", "border-emerald-500", "text-emerald-900", "dark:text-emerald-300");
          sound.playSuccess();
          this.streak++;
          this.score += 20 + (this.streak * 5);
          storage.addXP(15);
          storage.markWordMastered(currentWord.id);

          if (this.streak >= 5) storage.unlockBadge("streak_5");
          if (this.onProgressUpdate) this.onProgressUpdate();

          if (feedback) {
            feedback.innerHTML = `<span class="text-emerald-600 dark:text-emerald-400">Correct! "${currentWord.tamil}" (${currentWord.translit})</span>`;
          }

          setTimeout(() => {
            this.currentIndex++;
            this.loadQuestion(true);
            this.render();
          }, 1200);

        } else {
          btn.classList.add("bg-rose-100", "dark:bg-rose-950/60", "border-rose-400", "text-rose-900", "dark:text-rose-300");
          sound.playError();
          this.streak = 0;

          this.container.querySelectorAll(".quiz-choice-btn").forEach(b => {
            if (b.dataset.wordId === currentWord.id) {
              b.classList.add("bg-emerald-50", "dark:bg-emerald-950/40", "border-emerald-500");
            }
          });

          if (feedback) {
            feedback.innerHTML = `<span class="text-rose-500">Correct was "${currentWord.tamil}" (${currentWord.english})</span>`;
          }

          setTimeout(() => {
            this.currentIndex++;
            this.loadQuestion(true);
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
        <h2 class="text-2xl font-black text-slate-900 dark:text-white">Listening Complete!</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          Your Tamil listening recognition is getting sharp!
        </p>

        <div class="bg-indigo-50 dark:bg-slate-800 rounded-2xl p-4 border border-indigo-200 dark:border-slate-700">
          <div class="text-3xl font-black text-indigo-600 dark:text-indigo-400">${this.score} pts</div>
          <div class="text-xs text-indigo-800 dark:text-slate-400 font-semibold mt-1">Quiz Score</div>
        </div>

        <button id="btn-replay-quiz" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-xl shadow-md transition-all cursor-pointer">
          Play Next Set
        </button>
      </div>
    `;

    const replay = this.container.querySelector("#btn-replay-quiz");
    if (replay) {
      replay.addEventListener("click", () => {
        sound.playPop();
        this.initQuiz();
        this.render();
      });
    }
  }
}
