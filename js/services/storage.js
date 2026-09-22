// LocalStorage Persistence & Gamification Progress

const STORAGE_KEY = "tamil_word_quest_data_v1";

const DEFAULT_DATA = {
  theme: "system", // "system", "dark", "light"
  xp: 0,
  streak: 0,
  bestStreak: 0,
  lastActiveDate: null,
  showTranslit: true,
  currentLevel: 1,
  masteredWords: [], // Array of word IDs
  badges: [],
  levelProgress: {
    1: { stars: 0, quizHighScore: 0 },
    2: { stars: 0, quizHighScore: 0 },
    3: { stars: 0, quizHighScore: 0 },
    4: { stars: 0, quizHighScore: 0 }
  }
};

export const BADGE_DEFINITIONS = [
  { id: "first_word", title: "First Step", desc: "Read your very first Tamil word!" },
  { id: "word_10", title: "Reader 10", desc: "Mastered 10 Tamil words!" },
  { id: "word_25", title: "Reader 25", desc: "Mastered 25 Tamil words!" },
  { id: "word_50", title: "Tamil Scholar", desc: "Mastered 50 Tamil words!" },
  { id: "streak_5", title: "On Fire", desc: "Get 5 quiz questions right in a row!" },
  { id: "spelling_champ", title: "Letter Builder", desc: "Spell 5 words correctly in Scramble Mode!" },
  { id: "level1_master", title: "Level 1 Hero", desc: "Completed all Level 1 root words!" }
];

class StorageService {
  constructor() {
    this.data = this.load();
    this.checkStreak();
  }

  load() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...DEFAULT_DATA, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.warn("Storage load error:", e);
    }
    return { ...DEFAULT_DATA };
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  setTheme(theme) {
    this.data.theme = theme;
    this.save();
    return this.data.theme;
  }

  setCurrentLevel(lvl) {
    this.data.currentLevel = lvl;
    this.save();
  }

  checkStreak() {
    const today = new Date().toDateString();
    if (!this.data.lastActiveDate) {
      this.data.lastActiveDate = today;
      this.data.streak = 1;
      this.save();
      return;
    }

    if (this.data.lastActiveDate === today) {
      return;
    }

    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (this.data.lastActiveDate === yesterday) {
      this.data.streak += 1;
    } else {
      this.data.streak = 1;
    }
    this.data.lastActiveDate = today;
    this.save();
  }

  addXP(points) {
    this.data.xp += points;
    this.save();
    return this.data.xp;
  }

  markWordMastered(wordId) {
    if (!this.data.masteredWords.includes(wordId)) {
      this.data.masteredWords.push(wordId);
      this.addXP(20);
      this.checkBadges();
      this.save();
      return true;
    }
    return false;
  }

  unlockBadge(badgeId) {
    if (!this.data.badges.includes(badgeId)) {
      this.data.badges.push(badgeId);
      this.addXP(50);
      this.save();
      return true;
    }
    return false;
  }

  checkBadges() {
    if (this.data.masteredWords.length >= 1) {
      this.unlockBadge("first_word");
    }
    if (this.data.masteredWords.length >= 10) {
      this.unlockBadge("word_10");
    }
    if (this.data.masteredWords.length >= 25) {
      this.unlockBadge("word_25");
    }
    if (this.data.masteredWords.length >= 50) {
      this.unlockBadge("word_50");
    }
  }

  getLearnerLevel() {
    return Math.floor(this.data.xp / 100) + 1;
  }

  toggleTranslit() {
    this.data.showTranslit = !this.data.showTranslit;
    this.save();
    return this.data.showTranslit;
  }

  resetProgress() {
    const curTheme = this.data.theme;
    this.data = { ...DEFAULT_DATA, theme: curTheme };
    this.save();
  }
}

export const storage = new StorageService();
