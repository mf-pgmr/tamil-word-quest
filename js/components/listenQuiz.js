// "Listen & Pick" Quiz Component (Ear Training & Reading Match)
import { VOCABULARY, LEVELS } from "../data/words.js";
import { sound } from "../services/speech.js";
import { storage } from "../services/storage.js";

export class ListenQuizComponent {
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
    const words = VOCABULARY.filter(w => w.level === this.currentLevel);
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
    // Pick 3 options from current level or other levels as distractors
    const allOtherWords = VOCABULARY.filter(w => w.id !== currentWord.id);
    const shuffledOthers = [...allOtherWords].sort(() => 0.5 - Math.random()).slice(0, 3);
    this.options = [currentWord, ...shuffledOthers].sort(() => 0.5 - Math.random());

    // Automatically speak the word after a brief delay
    setTimeout(() => {
      sound.speak(currentWord.tamil);
    }, 300);
  }

  render() {
    if (this.currentIndex >= this.questions.length) {
      this.renderComplete();
      return;
    }

    const currentWord = this.questions[this.currentIndex];

    this.container.innerHTML = `
      <div class="max-w-xl mx-auto space-y-6">
        <!-- Header -->
        <div class="flex items-center justify-between bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-500 uppercase">Listen & Match</span>
            <span class="text-xs bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded-full">
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

        <!-- Big Audio Prompt Card -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-slate-100 text-center">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Listen carefully to the word:</p>
          
          <button id="btn-replay-audio" class="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-gradient-to-tr from-indigo-500 to-purple-600 text-white rounded-full flex flex-col items-center justify-center shadow-xl shadow-indigo-200 hover:scale-105 active:scale-95 transition-all cursor-pointer">
            <span class="text-4xl sm:text-5xl animate-pulse">🔊</span>
            <span class="text-[11px] font-bold mt-1 uppercase tracking-wide">Play Again</span>
          </button>

          <p class="text-sm font-semibold text-slate-600 mt-5">
            Which Tamil word matches the audio?
          </p>

          <!-- 4 Card Choices -->
          <div class="grid grid-cols-2 gap-3 sm:gap-4 mt-6">
            ${this.options.map((opt) => `
              <button 
                data-word-id="${opt.id}" 
                class="quiz-choice-btn group p-4 sm:p-5 rounded-2xl border-2 border-slate-200 bg-slate-50 hover:bg-indigo-50/50 hover:border-indigo-400 active:scale-95 transition-all text-center flex flex-col items-center justify-center min-h-[110px]"
              >
                <span class="text-2xl sm:text-3xl mb-1">${opt.emoji}</span>
                <span class="text-2xl sm:text-3xl font-tamil font-black text-slate-800 group-hover:text-indigo-700">${opt.tamil}</span>
                <span class="text-xs font-medium text-slate-400 mt-0.5">${opt.english}</span>
              </button>
            `).join("")}
          </div>

          <div id="listen-feedback" class="mt-4 min-h-[24px] text-sm font-bold"></div>
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
        sound.speak(currentWord.tamil);
      });
    }

    this.container.querySelectorAll(".quiz-choice-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (this.answered) return;
        this.answered = true;

        const selectedId = btn.dataset.wordId;
        const feedback = this.container.querySelector("#listen-feedback");

        if (selectedId === currentWord.id) {
          btn.classList.remove("bg-slate-50", "border-slate-200");
          btn.classList.add("bg-emerald-100", "border-emerald-500", "text-emerald-900");
          sound.playSuccess();
          this.streak++;
          this.score += 20 + (this.streak * 5);
          storage.addXP(15);
          storage.markWordMastered(currentWord.id);

          if (this.streak >= 5) {
            storage.unlockBadge("streak_5");
          }
          if (this.onProgressUpdate) this.onProgressUpdate();

          if (feedback) {
            feedback.innerHTML = `<span class="text-emerald-600 animate-bounce">🎯 Correct! "${currentWord.tamil}" (${currentWord.translit})</span>`;
          }

          setTimeout(() => {
            this.currentIndex++;
            this.loadQuestion();
            this.render();
          }, 1200);

        } else {
          btn.classList.remove("bg-slate-50", "border-slate-200");
          btn.classList.add("bg-rose-100", "border-rose-400", "text-rose-900");
          sound.playError();
          this.streak = 0;

          // Highlight the correct one
          this.container.querySelectorAll(".quiz-choice-btn").forEach(b => {
            if (b.dataset.wordId === currentWord.id) {
              b.classList.add("bg-emerald-50", "border-emerald-500");
            }
          });

          if (feedback) {
            feedback.innerHTML = `<span class="text-rose-500">The correct answer was "${currentWord.tamil}" (${currentWord.english})</span>`;
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
        <div class="text-6xl animate-bounce">🎉</div>
        <h2 class="text-2xl font-black text-slate-800">Listening Champion!</h2>
        <p class="text-sm text-slate-500">
          Your Tamil listening and reading skills are sharpening fast!
        </p>

        <div class="bg-indigo-50 rounded-2xl p-4 border border-indigo-200">
          <div class="text-3xl font-black text-indigo-600">⭐ ${this.score} pts</div>
          <div class="text-xs text-indigo-800 font-semibold mt-1">Quiz Score</div>
        </div>

        <button id="btn-replay-quiz" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-md transition-all">
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
