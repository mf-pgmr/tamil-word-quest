// Speed Word Challenge: 60-Second Rapid-Fire Arcade Quiz Component
import { LEVELS } from "../data/words.js";
import { sound } from "../services/speech.js";
import { storage } from "../services/storage.js";

export class SpeedQuizComponent {
  constructor(containerEl, onProgressUpdate) {
    this.container = containerEl;
    this.onProgressUpdate = onProgressUpdate;
    this.currentLevel = storage.data.currentLevel || 1;
    this.mode = "read"; // "read" (Tamil -> English) or "listen" (Audio -> Tamil)
    this.gameState = "lobby"; // "lobby", "playing", "summary"
    this.timeLeft = 60;
    this.totalTime = 60;
    this.timerInterval = null;
    this.score = 0;
    this.totalAnswered = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.points = 0;
    this.currentWord = null;
    this.options = [];
    this.answered = false;
    this.history = [];
    this.recentWordIds = [];
  }

  setLevel(levelId) {
    this.currentLevel = levelId;
    if (this.gameState === "lobby" || this.gameState === "summary") {
      this.render();
    }
  }

  getWordPool() {
    const all = storage.getAllWords();
    if (this.currentLevel === "all" || !this.currentLevel) {
      return all;
    }
    const filtered = all.filter(w => w.level === this.currentLevel);
    return filtered.length >= 4 ? filtered : all;
  }

  startChallenge() {
    this.stopTimer();
    this.score = 0;
    this.totalAnswered = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.points = 0;
    this.timeLeft = 60;
    this.totalTime = 60;
    this.history = [];
    this.recentWordIds = [];
    this.gameState = "playing";

    this.timerInterval = setInterval(() => this.tickTimer(), 1000);
    this.loadQuestion();
    this.render();
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  tickTimer() {
    this.timeLeft--;

    if (this.timeLeft <= 0) {
      this.timeLeft = 0;
      this.updateTimerDisplay();
      this.endChallenge();
      return;
    }

    if (this.timeLeft <= 10) {
      sound.playTick();
    }

    this.updateTimerDisplay();
  }

  updateTimerDisplay() {
    if (!this.container || this.gameState !== "playing") return;

    const timerText = this.container.querySelector("#speed-timer-text");
    const timerBar = this.container.querySelector("#speed-timer-bar");
    const timerBox = this.container.querySelector("#speed-timer-box");

    if (timerText) {
      timerText.textContent = `${this.timeLeft}s`;
    }

    if (timerBar) {
      const pct = Math.max(0, Math.min(100, (this.timeLeft / 60) * 100));
      timerBar.style.width = `${pct}%`;
      if (this.timeLeft <= 10) {
        timerBar.className = "h-full bg-rose-500 transition-all duration-300";
      } else if (this.timeLeft <= 25) {
        timerBar.className = "h-full bg-amber-500 transition-all duration-300";
      } else {
        timerBar.className = "h-full bg-emerald-500 transition-all duration-300";
      }
    }

    if (timerBox) {
      if (this.timeLeft <= 10) {
        timerBox.classList.add("timer-pulse", "text-rose-600", "dark:text-rose-400", "border-rose-400");
        timerBox.classList.remove("text-slate-700", "dark:text-slate-200", "border-slate-200");
      } else {
        timerBox.classList.remove("timer-pulse", "text-rose-600", "dark:text-rose-400", "border-rose-400");
        timerBox.classList.add("text-slate-700", "dark:text-slate-200", "border-slate-200");
      }
    }
  }

  loadQuestion() {
    this.answered = false;
    const pool = this.getWordPool();
    if (!pool.length) return;

    // Pick word not recently shown
    let candidates = pool.filter(w => !this.recentWordIds.includes(w.id));
    if (!candidates.length) {
      this.recentWordIds = [];
      candidates = pool;
    }

    const currentWord = candidates[Math.floor(Math.random() * candidates.length)];
    this.currentWord = currentWord;
    this.recentWordIds.push(currentWord.id);
    if (this.recentWordIds.length > 8) {
      this.recentWordIds.shift();
    }

    // Pick 3 distractors
    const otherWords = pool.filter(w => w.id !== currentWord.id);
    const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random()).slice(0, 3);
    this.options = [currentWord, ...shuffledOthers].sort(() => 0.5 - Math.random());

    if (this.mode === "listen") {
      setTimeout(() => {
        sound.speak(currentWord.id);
      }, 150);
    }
  }

  handleChoice(selectedWord, btnEl) {
    if (this.answered || this.gameState !== "playing" || !this.currentWord) return;
    this.answered = true;
    this.totalAnswered++;

    const isCorrect = selectedWord.id === this.currentWord.id;
    this.history.push({
      word: this.currentWord,
      correct: isCorrect,
      chosen: selectedWord
    });

    if (isCorrect) {
      this.score++;
      this.streak++;
      this.maxStreak = Math.max(this.maxStreak, this.streak);
      const earnedXP = 10 + Math.min(this.streak * 2, 20);
      this.points += earnedXP;
      storage.addXP(earnedXP);

      // Time bonus: +2 seconds!
      this.timeLeft = Math.min(this.timeLeft + 2, 90);
      sound.playBonus();

      btnEl.classList.remove("bg-white", "dark:bg-slate-800", "border-slate-200", "dark:border-slate-700");
      btnEl.classList.add("bg-emerald-500", "text-white", "border-emerald-600", "scale-105");

      this.showFloatingEffect(btnEl, "+2s ⚡", "text-amber-500 dark:text-amber-300");

      setTimeout(() => {
        if (this.gameState === "playing") {
          this.loadQuestion();
          this.renderPlayingQuestion();
        }
      }, 200);
    } else {
      this.streak = 0;
      this.timeLeft = Math.max(this.timeLeft - 1, 0);
      sound.playError();

      btnEl.classList.remove("bg-white", "dark:bg-slate-800", "border-slate-200", "dark:border-slate-700");
      btnEl.classList.add("shake", "bg-rose-500", "text-white", "border-rose-600");

      // Reveal correct option
      const correctBtn = this.container.querySelector(`[data-word-id="${this.currentWord.id}"]`);
      if (correctBtn) {
        correctBtn.classList.remove("bg-white", "dark:bg-slate-800", "border-slate-200", "dark:border-slate-700");
        correctBtn.classList.add("bg-emerald-500", "text-white", "border-emerald-600");
      }

      this.showFloatingEffect(btnEl, "-1s", "text-rose-500");

      setTimeout(() => {
        if (this.gameState === "playing") {
          this.loadQuestion();
          this.renderPlayingQuestion();
        }
      }, 380);
    }

    if (this.onProgressUpdate) {
      this.onProgressUpdate();
    }
  }

  showFloatingEffect(targetEl, text, colorClass) {
    if (!targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    const floatEl = document.createElement("div");
    floatEl.className = `fixed pointer-events-none font-black text-sm sm:text-base float-up-fade z-50 ${colorClass}`;
    floatEl.textContent = text;
    floatEl.style.left = `${rect.left + rect.width / 2 - 15}px`;
    floatEl.style.top = `${rect.top - 10}px`;
    document.body.appendChild(floatEl);

    setTimeout(() => {
      if (floatEl.parentNode) floatEl.parentNode.removeChild(floatEl);
    }, 800);
  }

  endChallenge() {
    this.stopTimer();
    this.gameState = "summary";

    const isNewBest = storage.saveSpeedScore(this.score, this.currentLevel, this.maxStreak);
    this.isNewBest = isNewBest;

    if (this.onProgressUpdate) {
      this.onProgressUpdate();
    }

    sound.playFanfare();
    this.render();
  }

  render() {
    if (this.gameState === "lobby") {
      this.renderLobby();
    } else if (this.gameState === "playing") {
      this.renderPlaying();
    } else if (this.gameState === "summary") {
      this.renderSummary();
    }
  }

  renderLobby() {
    this.stopTimer();
    const bestScore = storage.getSpeedHighScore(this.currentLevel);
    const pool = this.getWordPool();
    const levelLabel = this.currentLevel === "all" ? "All Words (Full Quest)" : `Level ${this.currentLevel}`;

    this.container.innerHTML = `
      <div class="h-full min-h-0 w-full max-w-xl mx-auto flex flex-col justify-between py-2 sm:py-4 select-none">
        
        <!-- Top Badge Banner -->
        <div class="text-center space-y-1">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
            <span>⚡ Speed Challenge</span>
            <span>•</span>
            <span>60s Arcade</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white font-tamil tracking-wide mt-1">
            வேகச் சொல் சவால்
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Rapid-fire word sprint! Answer as many words as you can in 60 seconds.
          </p>
        </div>

        <!-- Mode & Level Selection Card -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-slate-100 dark:border-slate-800 space-y-4 my-auto">
          
          <!-- Mode Toggle Cards -->
          <div>
            <label class="block text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Select Challenge Mode:
            </label>
            <div class="grid grid-cols-2 gap-2.5">
              <button id="speed-mode-read" class="flex flex-col items-center p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                this.mode === "read"
                  ? "border-amber-500 bg-amber-50/60 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 shadow-sm"
                  : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
              }">
                <span class="text-2xl mb-1">🔤</span>
                <span class="text-xs font-black">Sight Reading</span>
                <span class="text-[10px] text-slate-400 dark:text-slate-500 text-center mt-0.5">Tamil Word → Meaning</span>
              </button>

              <button id="speed-mode-listen" class="flex flex-col items-center p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                this.mode === "listen"
                  ? "border-amber-500 bg-amber-50/60 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 shadow-sm"
                  : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
              }">
                <span class="text-2xl mb-1">🔊</span>
                <span class="text-xs font-black">Sound Match</span>
                <span class="text-[10px] text-slate-400 dark:text-slate-500 text-center mt-0.5">Audio → Tamil Word</span>
              </button>
            </div>
          </div>

          <!-- Level Info Pill & Personal Best -->
          <div class="grid grid-cols-2 gap-2.5 pt-1">
            <div class="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-center">
              <div class="text-[10px] font-extrabold uppercase text-slate-400 dark:text-slate-500">Active Tier</div>
              <div class="text-xs font-black text-slate-800 dark:text-slate-200 mt-0.5 truncate">${levelLabel}</div>
              <div class="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">${pool.length} words pool</div>
            </div>

            <div class="bg-amber-50/70 dark:bg-amber-950/30 p-3 rounded-2xl border border-amber-200/80 dark:border-amber-800/60 text-center">
              <div class="text-[10px] font-extrabold uppercase text-amber-700 dark:text-amber-400">Personal Best</div>
              <div class="text-base font-black text-amber-600 dark:text-amber-300 mt-0.5">${bestScore} words</div>
              <div class="text-[10px] text-amber-600/80 dark:text-amber-400/80 mt-0.5">Record to beat 🏆</div>
            </div>
          </div>

          <!-- Game Rules Mini Pills -->
          <div class="flex items-center justify-center gap-3 text-[11px] font-bold text-slate-500 dark:text-slate-400 pt-1">
            <span class="flex items-center gap-1">⏱️ 60 Seconds</span>
            <span>•</span>
            <span class="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">⚡ +2s on Correct</span>
            <span>•</span>
            <span class="flex items-center gap-1 text-rose-500">⚠️ -1s on Wrong</span>
          </div>
        </div>

        <!-- Start Button -->
        <div class="px-2 pt-2">
          <button id="btn-start-speed" class="w-full py-3.5 px-6 rounded-2xl font-black text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 active:scale-95 shadow-lg shadow-amber-500/25 transition-all cursor-pointer flex items-center justify-center gap-2">
            <span>⚡</span>
            <span>Start 60s Challenge!</span>
          </button>
        </div>
      </div>
    `;

    // Bind lobby events
    const readBtn = this.container.querySelector("#speed-mode-read");
    const listenBtn = this.container.querySelector("#speed-mode-listen");
    const startBtn = this.container.querySelector("#btn-start-speed");

    if (readBtn) {
      readBtn.addEventListener("click", () => {
        sound.playPop();
        this.mode = "read";
        this.renderLobby();
      });
    }

    if (listenBtn) {
      listenBtn.addEventListener("click", () => {
        sound.playPop();
        this.mode = "listen";
        this.renderLobby();
      });
    }

    if (startBtn) {
      startBtn.addEventListener("click", () => {
        sound.playPop();
        this.startChallenge();
      });
    }
  }

  renderPlaying() {
    this.container.innerHTML = `
      <div class="h-full min-h-0 w-full max-w-xl mx-auto flex flex-col justify-between py-1 sm:py-2 select-none">
        
        <!-- Playing Top Header -->
        <div class="flex items-center justify-between px-2 mb-2">
          <!-- Timer Display -->
          <div id="speed-timer-box" class="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <span class="text-sm">⏱️</span>
            <span id="speed-timer-text" class="text-sm font-black tracking-tight">${this.timeLeft}s</span>
          </div>

          <!-- Streak Badge -->
          <div class="flex items-center gap-2">
            <div id="speed-streak-badge" class="px-3 py-1 rounded-full text-xs font-black transition-all ${
              this.streak >= 3
                ? "bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-sm combo-fire-glow"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            }">
              ${this.streak >= 3 ? `🔥 ${this.streak}x Streak` : `Streak: ${this.streak}`}
            </div>

            <!-- Quit Button -->
            <button id="btn-quit-speed" class="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer" title="Quit Round">
              <span class="text-xs font-bold px-1.5 py-0.5">✕ Quit</span>
            </button>
          </div>
        </div>

        <!-- Countdown Progress Bar -->
        <div class="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-2">
          <div id="speed-timer-bar" class="h-full bg-emerald-500 transition-all duration-300" style="width: ${(this.timeLeft / 60) * 100}%"></div>
        </div>

        <!-- Dynamic Question Area -->
        <div id="speed-question-card" class="flex-1 flex flex-col justify-between min-h-0 my-1">
          <!-- Filled by renderPlayingQuestion() -->
        </div>

        <!-- Bottom Score Counter -->
        <div class="flex items-center justify-between px-3 py-1.5 text-xs font-extrabold text-slate-400 dark:text-slate-500">
          <div>Score: <span id="speed-score-counter" class="text-slate-800 dark:text-slate-200">${this.score} words</span></div>
          <div>Points: <span class="text-amber-600 dark:text-amber-400">${this.points} XP</span></div>
        </div>
      </div>
    `;

    const quitBtn = this.container.querySelector("#btn-quit-speed");
    if (quitBtn) {
      quitBtn.addEventListener("click", () => {
        sound.playPop();
        this.stopTimer();
        this.gameState = "lobby";
        this.render();
      });
    }

    this.renderPlayingQuestion();
  }

  renderPlayingQuestion() {
    const cardEl = this.container ? this.container.querySelector("#speed-question-card") : null;
    if (!cardEl || !this.currentWord) return;

    const scoreCounter = this.container.querySelector("#speed-score-counter");
    if (scoreCounter) scoreCounter.textContent = `${this.score} words`;

    const streakBadge = this.container.querySelector("#speed-streak-badge");
    if (streakBadge) {
      streakBadge.textContent = this.streak >= 3 ? `🔥 ${this.streak}x Streak` : `Streak: ${this.streak}`;
      if (this.streak >= 3) {
        streakBadge.className = "px-3 py-1 rounded-full text-xs font-black transition-all bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-sm combo-fire-glow";
      } else {
        streakBadge.className = "px-3 py-1 rounded-full text-xs font-black transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400";
      }
    }

    const showPhonics = storage.getShowPhonics ? storage.getShowPhonics() : true;

    if (this.mode === "read") {
      // Sight Reading: Big Tamil Word -> 4 English Options
      cardEl.innerHTML = `
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-slate-100 dark:border-slate-800 text-center flex-1 flex flex-col justify-between">
          <div class="my-auto">
            <span class="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 block">
              What does this word mean?
            </span>
            <div class="text-3xl sm:text-5xl font-black text-slate-800 dark:text-white font-tamil tracking-wide dialogue-tamil-line py-2">
              ${this.currentWord.tamil}
            </div>
            ${
              showPhonics && this.currentWord.translit
                ? `<div class="text-xs text-amber-700 dark:text-amber-400 font-semibold mt-1">${this.currentWord.translit}</div>`
                : ""
            }
            <button id="btn-speed-audio" class="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer">
              <span>🔊</span>
              <span>Listen</span>
            </button>
          </div>

          <!-- 4 English Choices -->
          <div class="grid grid-cols-2 gap-2.5 sm:gap-3 mt-4">
            ${this.options.map(opt => `
              <button data-word-id="${opt.id}" class="speed-opt-btn p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-extrabold text-xs sm:text-sm hover:border-amber-400 dark:hover:border-amber-500 active:scale-95 transition-all cursor-pointer shadow-sm text-center">
                ${opt.english}
              </button>
            `).join("")}
          </div>
        </div>
      `;
    } else {
      // Sound Match: Audio Prompt -> 4 Tamil Words
      cardEl.innerHTML = `
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-slate-100 dark:border-slate-800 text-center flex-1 flex flex-col justify-between">
          <div class="my-auto">
            <span class="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 block">
              Listen and match the word:
            </span>
            
            <button id="btn-speed-replay" class="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-tr from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 active:scale-95 text-white rounded-full flex flex-col items-center justify-center shadow-lg shadow-amber-500/20 transition-all cursor-pointer my-1">
              <span class="text-2xl mb-0.5">🔊</span>
              <span class="text-[10px] font-bold text-white/90">Play</span>
            </button>

            <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-2">
              Which Tamil word matches this sound?
            </p>
          </div>

          <!-- 4 Tamil Choices -->
          <div class="grid grid-cols-2 gap-2.5 sm:gap-3 mt-4">
            ${this.options.map(opt => `
              <button data-word-id="${opt.id}" class="speed-opt-btn p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-tamil font-black text-base sm:text-xl hover:border-amber-400 dark:hover:border-amber-500 active:scale-95 transition-all cursor-pointer shadow-sm text-center">
                ${opt.tamil}
              </button>
            `).join("")}
          </div>
        </div>
      `;
    }

    // Bind option clicks
    cardEl.querySelectorAll(".speed-opt-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const wordId = btn.dataset.wordId;
        const selectedWord = this.options.find(w => w.id === wordId);
        if (selectedWord) {
          this.handleChoice(selectedWord, btn);
        }
      });
    });

    const audioBtn = cardEl.querySelector("#btn-speed-audio") || cardEl.querySelector("#btn-speed-replay");
    if (audioBtn) {
      audioBtn.addEventListener("click", () => {
        sound.speak(this.currentWord.id);
      });
    }
  }

  renderSummary() {
    this.stopTimer();
    const accuracy = this.totalAnswered > 0 ? Math.round((this.score / this.totalAnswered) * 100) : 0;
    const personalBest = storage.getSpeedHighScore(this.currentLevel);

    this.container.innerHTML = `
      <div class="h-full min-h-0 w-full max-w-xl mx-auto flex flex-col justify-between py-2 sm:py-3 select-none overflow-y-auto">
        
        <!-- Summary Card Header -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-slate-100 dark:border-slate-800 text-center space-y-4">
          
          <div>
            ${
              this.isNewBest
                ? `<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 mb-2">
                    🏆 New Personal Best!
                  </div>`
                : ""
            }
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Time's Up! ⚡
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Awesome speed sprint! Here is how you performed:
            </p>
          </div>

          <!-- Big Stat Score Cards -->
          <div class="grid grid-cols-3 gap-2 sm:gap-3">
            <div class="bg-amber-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-amber-200 dark:border-slate-700">
              <div class="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">${this.score}</div>
              <div class="text-[10px] font-extrabold uppercase text-amber-800 dark:text-slate-400 mt-0.5">Words Done</div>
            </div>

            <div class="bg-indigo-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-indigo-200 dark:border-slate-700">
              <div class="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">${accuracy}%</div>
              <div class="text-[10px] font-extrabold uppercase text-indigo-800 dark:text-slate-400 mt-0.5">Accuracy</div>
            </div>

            <div class="bg-rose-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-rose-200 dark:border-slate-700">
              <div class="text-2xl sm:text-3xl font-black text-rose-600 dark:text-rose-400">${this.maxStreak}x</div>
              <div class="text-[10px] font-extrabold uppercase text-rose-800 dark:text-slate-400 mt-0.5">Max Streak</div>
            </div>
          </div>

          <!-- Total Points Banner -->
          <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs">
            <span class="font-bold text-slate-600 dark:text-slate-300">XP Earned this round:</span>
            <span class="font-black text-emerald-600 dark:text-emerald-400 text-sm">+${this.points} XP</span>
          </div>

          <!-- Mini Word Review List -->
          ${
            this.history.length > 0
              ? `
                <div class="text-left pt-1">
                  <div class="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Round Word Review:
                  </div>
                  <div class="max-h-36 overflow-y-auto space-y-1.5 pr-1">
                    ${this.history.map(item => `
                      <div class="flex items-center justify-between p-2 rounded-xl border text-xs ${
                        item.correct
                          ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-800/40 text-emerald-950 dark:text-emerald-200"
                          : "bg-rose-50/50 dark:bg-rose-950/20 border-rose-200/60 dark:border-rose-800/40 text-rose-950 dark:text-rose-200"
                      }">
                        <div class="flex items-center gap-2">
                          <span class="font-black">${item.correct ? "✓" : "✕"}</span>
                          <span class="font-black font-tamil text-sm">${item.word.tamil}</span>
                          <span class="text-slate-400 dark:text-slate-500 text-[10px]">(${item.word.english})</span>
                        </div>
                        <button class="review-listen-btn p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer" data-word-id="${item.word.id}" title="Listen">
                          🔊
                        </button>
                      </div>
                    `).join("")}
                  </div>
                </div>
              `
              : ""
          }

          <!-- Action Buttons -->
          <div class="flex gap-2.5 pt-2">
            <button id="btn-speed-again" class="flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-amber-500/20 active:scale-95 transition-all cursor-pointer">
              🔄 Play Again (60s)
            </button>
            <button id="btn-speed-menu" class="flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer">
              ⚙️ Change Mode
            </button>
          </div>
        </div>
      </div>
    `;

    const againBtn = this.container.querySelector("#btn-speed-again");
    const menuBtn = this.container.querySelector("#btn-speed-menu");

    if (againBtn) {
      againBtn.addEventListener("click", () => {
        sound.playPop();
        this.startChallenge();
      });
    }

    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        sound.playPop();
        this.gameState = "lobby";
        this.render();
      });
    }

    this.container.querySelectorAll(".review-listen-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        sound.speak(btn.dataset.wordId);
      });
    });
  }
}
