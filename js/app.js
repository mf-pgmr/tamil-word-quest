// Main Application Controller (Responsive Left Sidebar with Mobile Drawer & Dark Mode)
import { storage, BADGE_DEFINITIONS } from "./services/storage.js";
import { sound } from "./services/speech.js";
import { VOCABULARY, LEVELS } from "./data/words.js";
import { TrainerComponent } from "./components/trainer.js";
import { ScrambleQuizComponent } from "./components/scrambleQuiz.js";
import { ListenQuizComponent } from "./components/listenQuiz.js";
import { MissingQuizComponent } from "./components/missingQuiz.js";

class App {
  constructor() {
    this.activeTab = "trainer";
    this.currentLevel = storage.data.currentLevel || 1;
    this.contentEl = document.getElementById("main-content");
    this.trainer = null;
    this.scramble = null;
    this.listen = null;
    this.missing = null;

    this.init();
  }

  init() {
    this.initTheme();
    this.setupMobileDrawer();
    this.updateHeaderStats();
    this.setupSidebarNav();
    this.setupLevelSelector();

    const updateStatsCb = () => this.updateHeaderStats();
    this.trainer = new TrainerComponent(this.contentEl, updateStatsCb);
    this.scramble = new ScrambleQuizComponent(this.contentEl, updateStatsCb);
    this.listen = new ListenQuizComponent(this.contentEl, updateStatsCb);
    this.missing = new MissingQuizComponent(this.contentEl, updateStatsCb);

    this.switchTab("trainer");
  }

  initTheme() {
    const savedTheme = storage.data.theme || "system";
    this.applyTheme(savedTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      if (storage.data.theme === "system") {
        this.setDarkMode(e.matches);
      }
    });

    const toggleTheme = () => {
      sound.playPop();
      const isDark = document.documentElement.classList.contains("dark");
      const newTheme = isDark ? "light" : "dark";
      storage.setTheme(newTheme);
      this.applyTheme(newTheme);
    };

    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", toggleTheme);
    }

    const mobileThemeBtn = document.getElementById("mobile-theme-btn");
    if (mobileThemeBtn) {
      mobileThemeBtn.addEventListener("click", toggleTheme);
    }
  }

  applyTheme(theme) {
    let isDark = false;
    if (theme === "dark") {
      isDark = true;
    } else if (theme === "light") {
      isDark = false;
    } else {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    this.setDarkMode(isDark);
  }

  setDarkMode(isDark) {
    const labelEl = document.getElementById("theme-toggle-label");
    const mobileLabelEl = document.getElementById("mobile-theme-btn");
    if (isDark) {
      document.documentElement.classList.add("dark");
      if (labelEl) labelEl.textContent = "Light";
      if (mobileLabelEl) mobileLabelEl.textContent = "Light";
    } else {
      document.documentElement.classList.remove("dark");
      if (labelEl) labelEl.textContent = "Dark";
      if (mobileLabelEl) mobileLabelEl.textContent = "Dark";
    }
  }

  setupMobileDrawer() {
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("sidebar-backdrop");
    const openBtn = document.getElementById("mobile-menu-btn");
    const closeBtn = document.getElementById("sidebar-close-btn");

    this.closeDrawer = () => {
      if (sidebar) sidebar.classList.remove("open");
      if (backdrop) backdrop.classList.remove("open");
    };

    this.openDrawer = () => {
      if (sidebar) sidebar.classList.add("open");
      if (backdrop) backdrop.classList.add("open");
    };

    const handleOpen = (e) => {
      e.preventDefault();
      sound.playPop();
      this.openDrawer();
    };

    const handleClose = (e) => {
      e.preventDefault();
      sound.playPop();
      this.closeDrawer();
    };

    if (openBtn) {
      openBtn.addEventListener("click", handleOpen);
      openBtn.addEventListener("touchend", handleOpen, { passive: false });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", handleClose);
      closeBtn.addEventListener("touchend", handleClose, { passive: false });
    }

    if (backdrop) {
      backdrop.addEventListener("click", handleClose);
      backdrop.addEventListener("touchend", handleClose, { passive: false });
    }
  }

  updateHeaderStats() {
    const xpEl = document.getElementById("stat-xp");
    const streakEl = document.getElementById("stat-streak");
    const levelEl = document.getElementById("stat-level");
    const wordsCountEl = document.getElementById("stat-words-count");

    const mStreak = document.getElementById("mobile-stat-streak");
    const mXp = document.getElementById("mobile-stat-xp");

    if (xpEl) xpEl.textContent = `${storage.data.xp} XP`;
    if (streakEl) streakEl.textContent = `${storage.data.streak} d`;
    if (levelEl) levelEl.textContent = `Lvl ${storage.getLearnerLevel()}`;
    if (wordsCountEl) wordsCountEl.textContent = `${storage.data.masteredWords.length} / ${VOCABULARY.length} Words`;

    if (mStreak) mStreak.textContent = `${storage.data.streak} d`;
    if (mXp) mXp.textContent = `${storage.data.xp} XP`;
  }

  setupSidebarNav() {
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;
        if (tab !== this.activeTab) {
          sound.playPop();
          this.switchTab(tab);
        }
        if (window.innerWidth < 768) {
          this.closeDrawer();
        }
      });
    });
  }

  setupLevelSelector() {
    document.querySelectorAll(".sidebar-level-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        sound.playPop();
        const lvl = parseInt(btn.dataset.level);
        this.setLevel(lvl);
        if (window.innerWidth < 768) {
          this.closeDrawer();
        }
      });
    });
    this.updateActiveLevelUI();
  }

  setLevel(lvl) {
    this.currentLevel = lvl;
    storage.setCurrentLevel(lvl);
    this.updateActiveLevelUI();

    if (this.activeTab === "trainer") {
      this.trainer.setLevel(lvl);
    } else if (this.activeTab === "scramble") {
      this.scramble.setLevel(lvl);
    } else if (this.activeTab === "listen") {
      this.listen.setLevel(lvl);
    } else if (this.activeTab === "missing") {
      this.missing.setLevel(lvl);
    }
  }

  updateActiveLevelUI() {
    document.querySelectorAll(".sidebar-level-btn").forEach(btn => {
      const lvl = parseInt(btn.dataset.level);
      const isCurrent = lvl === this.currentLevel;
      if (isCurrent) {
        btn.classList.add("bg-amber-500", "text-white", "shadow-sm");
        btn.classList.remove("text-slate-600", "dark:text-slate-400", "hover:bg-slate-100", "dark:hover:bg-slate-800");
      } else {
        btn.classList.remove("bg-amber-500", "text-white", "shadow-sm");
        btn.classList.add("text-slate-600", "dark:text-slate-400", "hover:bg-slate-100", "dark:hover:bg-slate-800");
      }
    });
  }

  switchTab(tab) {
    this.activeTab = tab;

    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      const isCurrent = btn.dataset.tab === tab;
      if (isCurrent) {
        btn.classList.add("bg-indigo-600", "text-white", "shadow-md");
        btn.classList.remove("text-slate-600", "dark:text-slate-400", "hover:bg-slate-100", "dark:hover:bg-slate-800");
      } else {
        btn.classList.remove("bg-indigo-600", "text-white", "shadow-md");
        btn.classList.add("text-slate-600", "dark:text-slate-400", "hover:bg-slate-100", "dark:hover:bg-slate-800");
      }
    });

    if (tab === "trainer") {
      this.trainer.setLevel(this.currentLevel);
      this.trainer.render();
    } else if (tab === "scramble") {
      this.scramble.setLevel(this.currentLevel);
      this.scramble.render();
    } else if (tab === "listen") {
      this.listen.setLevel(this.currentLevel);
      this.listen.render();
    } else if (tab === "missing") {
      this.missing.setLevel(this.currentLevel);
      this.missing.render();
    } else if (tab === "progress") {
      this.renderProgressView();
    }
  }

  renderProgressView() {
    const mastered = storage.data.masteredWords;
    const badges = storage.data.badges;

    this.contentEl.innerHTML = `
      <div class="h-full w-full max-w-2xl mx-auto flex flex-col justify-between py-1 sm:py-2 select-none overflow-y-auto">
        
        <!-- Summary Card -->
        <div class="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-5 text-white shadow-xl text-center mb-3">
          <h2 class="text-2xl font-black">Learner Level ${storage.getLearnerLevel()}</h2>
          <p class="text-xs text-indigo-100 mt-0.5">Keep reading daily to master all 80 Tamil words</p>

          <div class="grid grid-cols-3 gap-2 mt-4">
            <div class="bg-white/10 rounded-2xl p-2.5 border border-white/20">
              <div class="text-xl font-black">${storage.data.xp}</div>
              <div class="text-[10px] text-indigo-200 uppercase font-bold">Total XP</div>
            </div>
            <div class="bg-white/10 rounded-2xl p-2.5 border border-white/20">
              <div class="text-xl font-black">${storage.data.streak} Days</div>
              <div class="text-[10px] text-indigo-200 uppercase font-bold">Active Streak</div>
            </div>
            <div class="bg-white/10 rounded-2xl p-2.5 border border-white/20">
              <div class="text-xl font-black">${mastered.length} / 80</div>
              <div class="text-[10px] text-indigo-200 uppercase font-bold">Words Mastered</div>
            </div>
          </div>
        </div>

        <!-- Badges Trophy Room -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-lg border-2 border-slate-100 dark:border-slate-800 mb-3">
          <h3 class="font-black text-slate-800 dark:text-white text-base mb-3">
            Achievement Badges
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${BADGE_DEFINITIONS.map(badge => {
              const unlocked = badges.includes(badge.id);
              return `
                <div class="flex items-center gap-3 p-3 rounded-2xl border-2 transition-all
                  ${unlocked 
                    ? 'border-amber-300 dark:border-amber-500/40 bg-amber-50/50 dark:bg-slate-800' 
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 opacity-40'}">
                  <div class="w-8 h-8 rounded-xl bg-amber-500 text-white font-black flex items-center justify-center text-xs">
                    ${unlocked ? '✓' : '•'}
                  </div>
                  <div>
                    <h4 class="font-extrabold text-xs text-slate-800 dark:text-white">${badge.title}</h4>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">${badge.desc}</p>
                    <span class="text-[10px] font-bold ${unlocked ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}">
                      ${unlocked ? 'Unlocked' : 'Locked'}
                    </span>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Mastered Words Library -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-lg border-2 border-slate-100 dark:border-slate-800 mb-3">
          <h3 class="font-black text-slate-800 dark:text-white text-base mb-2">
            Words Mastered (${mastered.length}/${VOCABULARY.length})
          </h3>

          ${mastered.length === 0 ? `
            <div class="text-center py-6 text-slate-400 dark:text-slate-500 text-xs">
              <p>No words mastered yet. Practice in Learn to Read!</p>
              <button id="btn-go-train" class="mt-2 bg-indigo-600 text-white font-bold px-4 py-2 rounded-xl text-xs hover:bg-indigo-700 cursor-pointer">
                Start Learning Now →
              </button>
            </div>
          ` : `
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-52 overflow-y-auto p-1">
              ${VOCABULARY.filter(w => mastered.includes(w.id)).map(w => `
                <div class="word-card-lib flex items-center justify-between p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-slate-700 cursor-pointer" data-id="${w.id}">
                  <span class="font-tamil font-bold text-slate-800 dark:text-white text-base">${w.tamil}</span>
                  <span class="text-[11px] text-slate-500 dark:text-slate-400">${w.english}</span>
                </div>
              `).join("")}
            </div>
          `}
        </div>

        <div class="text-center pt-1">
          <button id="btn-reset-data" class="text-xs text-slate-400 hover:text-rose-500 transition-colors cursor-pointer">
            Reset Learner Progress
          </button>
        </div>

      </div>
    `;

    this.contentEl.querySelectorAll(".word-card-lib").forEach(card => {
      card.addEventListener("click", () => {
        sound.speak(card.dataset.id);
      });
    });

    const goTrain = this.contentEl.querySelector("#btn-go-train");
    if (goTrain) {
      goTrain.addEventListener("click", () => this.switchTab("trainer"));
    }

    const resetBtn = this.contentEl.querySelector("#btn-reset-data");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("Reset all XP, streaks, and mastered words?")) {
          storage.resetProgress();
          this.updateHeaderStats();
          this.renderProgressView();
        }
      });
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new App();
});
