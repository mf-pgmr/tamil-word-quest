// Main Application Controller
import { storage, BADGE_DEFINITIONS } from "./services/storage.js";
import { sound } from "./services/speech.js";
import { VOCABULARY } from "./data/words.js";
import { TrainerComponent } from "./components/trainer.js";
import { ScrambleQuizComponent } from "./components/scrambleQuiz.js";
import { ListenQuizComponent } from "./components/listenQuiz.js";
import { MissingQuizComponent } from "./components/missingQuiz.js";

class App {
  constructor() {
    this.activeTab = "trainer";
    this.contentEl = document.getElementById("main-content");
    this.trainer = null;
    this.scramble = null;
    this.listen = null;
    this.missing = null;

    this.init();
  }

  init() {
    this.updateHeaderStats();
    this.setupTabs();

    // Instantiate components
    const updateStatsCb = () => this.updateHeaderStats();
    this.trainer = new TrainerComponent(this.contentEl, updateStatsCb);
    this.scramble = new ScrambleQuizComponent(this.contentEl, updateStatsCb);
    this.listen = new ListenQuizComponent(this.contentEl, updateStatsCb);
    this.missing = new MissingQuizComponent(this.contentEl, updateStatsCb);

    // Initial render
    this.switchTab("trainer");
  }

  updateHeaderStats() {
    const xpEl = document.getElementById("stat-xp");
    const streakEl = document.getElementById("stat-streak");
    const levelEl = document.getElementById("stat-level");
    const wordsCountEl = document.getElementById("stat-words-count");

    if (xpEl) xpEl.textContent = `${storage.data.xp} XP`;
    if (streakEl) streakEl.textContent = `${storage.data.streak} Days`;
    if (levelEl) levelEl.textContent = `Lvl ${storage.getLearnerLevel()}`;
    if (wordsCountEl) wordsCountEl.textContent = `${storage.data.masteredWords.length} / ${VOCABULARY.length} Words`;
  }

  setupTabs() {
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;
        if (tab !== this.activeTab) {
          sound.playPop();
          this.switchTab(tab);
        }
      });
    });
  }

  switchTab(tab) {
    this.activeTab = tab;

    // Update tab button styles
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      const isCurrent = btn.dataset.tab === tab;
      if (isCurrent) {
        btn.classList.remove("text-slate-500", "bg-transparent");
        btn.classList.add("text-indigo-700", "bg-indigo-50", "border-indigo-300");
      } else {
        btn.classList.remove("text-indigo-700", "bg-indigo-50", "border-indigo-300");
        btn.classList.add("text-slate-500", "bg-transparent");
      }
    });

    // Render active component
    if (tab === "trainer") {
      this.trainer.render();
    } else if (tab === "scramble") {
      this.scramble.initQuiz();
      this.scramble.render();
    } else if (tab === "listen") {
      this.listen.initQuiz();
      this.listen.render();
    } else if (tab === "missing") {
      this.missing.initQuiz();
      this.missing.render();
    } else if (tab === "progress") {
      this.renderProgressView();
    }
  }

  renderProgressView() {
    const mastered = storage.data.masteredWords;
    const badges = storage.data.badges;

    this.container = this.contentEl;
    this.container.innerHTML = `
      <div class="max-w-2xl mx-auto space-y-6">
        <!-- Progress Summary Card -->
        <div class="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl text-center relative overflow-hidden">
          <div class="text-6xl mb-2">⭐</div>
          <h2 class="text-3xl font-black">Learner Level ${storage.getLearnerLevel()}</h2>
          <p class="text-indigo-100 text-sm mt-1">Keep practicing everyday to unlock new badges and levels!</p>

          <div class="grid grid-cols-3 gap-3 mt-6">
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
              <div class="text-2xl font-black">${storage.data.xp}</div>
              <div class="text-xs text-indigo-200 uppercase font-semibold">Total XP</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
              <div class="text-2xl font-black">${storage.data.streak} 🔥</div>
              <div class="text-xs text-indigo-200 uppercase font-semibold">Day Streak</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
              <div class="text-2xl font-black">${mastered.length}</div>
              <div class="text-xs text-indigo-200 uppercase font-semibold">Words Read</div>
            </div>
          </div>
        </div>

        <!-- Badges Trophy Room -->
        <div class="bg-white rounded-3xl p-6 shadow-xl border-2 border-slate-100">
          <h3 class="font-black text-slate-800 text-lg mb-4 flex items-center gap-2">
            <span>🏆</span> Achievement Badges
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${BADGE_DEFINITIONS.map(badge => {
              const unlocked = badges.includes(badge.id);
              return `
                <div class="flex items-center gap-3 p-3 rounded-2xl border-2 transition-all
                  ${unlocked 
                    ? 'border-amber-300 bg-amber-50/60 shadow-sm' 
                    : 'border-slate-200 bg-slate-50 opacity-40 grayscale'}">
                  <div class="text-3xl">${badge.title.split(" ")[0]}</div>
                  <div>
                    <h4 class="font-extrabold text-sm text-slate-800">${badge.title.split(" ").slice(1).join(" ")}</h4>
                    <p class="text-xs text-slate-500">${badge.desc}</p>
                    <span class="text-[10px] font-bold ${unlocked ? 'text-emerald-600' : 'text-slate-400'}">
                      ${unlocked ? '✓ Unlocked' : '🔒 Locked'}
                    </span>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Mastered Words Library -->
        <div class="bg-white rounded-3xl p-6 shadow-xl border-2 border-slate-100">
          <h3 class="font-black text-slate-800 text-lg mb-3 flex items-center justify-between">
            <span class="flex items-center gap-2">
              <span>📚</span> Words You Can Read (${mastered.length}/${VOCABULARY.length})
            </span>
          </h3>

          ${mastered.length === 0 ? `
            <div class="text-center py-8 text-slate-400">
              <p>You haven't marked any words as mastered yet.</p>
              <button id="btn-go-train" class="mt-3 bg-indigo-600 text-white font-bold px-4 py-2 rounded-xl text-sm hover:bg-indigo-700">
                Start Reading Now →
              </button>
            </div>
          ` : `
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-72 overflow-y-auto p-1">
              ${VOCABULARY.filter(w => mastered.includes(w.id)).map(w => `
                <div class="word-card-lib flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-amber-50 cursor-pointer" data-tamil="${w.tamil}">
                  <span class="text-2xl">${w.emoji}</span>
                  <div class="overflow-hidden">
                    <div class="font-tamil font-bold text-slate-800 text-base truncate">${w.tamil}</div>
                    <div class="text-[11px] text-slate-500 truncate">${w.english}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          `}
        </div>

        <!-- Reset Button -->
        <div class="text-center pt-2">
          <button id="btn-reset-data" class="text-xs text-slate-400 hover:text-rose-500 transition-colors">
            Reset All Progress Data
          </button>
        </div>
      </div>
    `;

    // Library card audio
    this.container.querySelectorAll(".word-card-lib").forEach(card => {
      card.addEventListener("click", () => {
        sound.speak(card.dataset.tamil);
      });
    });

    const goTrain = this.container.querySelector("#btn-go-train");
    if (goTrain) {
      goTrain.addEventListener("click", () => this.switchTab("trainer"));
    }

    const resetBtn = this.container.querySelector("#btn-reset-data");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to reset all XP and progress?")) {
          storage.resetProgress();
          this.updateHeaderStats();
          this.renderProgressView();
        }
      });
    }
  }
}

// Start app once DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  new App();
});
