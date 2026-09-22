// Flashcard & Phonics Reading Trainer Component
import { VOCABULARY, LEVELS } from "../data/words.js";
import { sound } from "../services/speech.js";
import { storage } from "../services/storage.js";

export class TrainerComponent {
  constructor(containerEl, onProgressUpdate) {
    this.container = containerEl;
    this.onProgressUpdate = onProgressUpdate;
    this.currentLevel = 1;
    this.currentIndex = 0;
    this.activeWords = [];
    this.filterWords();
  }

  filterWords() {
    this.activeWords = VOCABULARY.filter(w => w.level === this.currentLevel);
    this.currentIndex = 0;
  }

  setLevel(levelId) {
    this.currentLevel = levelId;
    this.filterWords();
    this.render();
  }

  render() {
    const word = this.activeWords[this.currentIndex];
    const isMastered = storage.data.masteredWords.includes(word.id);
    const currentLvlObj = LEVELS.find(l => l.id === this.currentLevel);

    this.container.innerHTML = `
      <div class="max-w-2xl mx-auto space-y-6">
        <!-- Level Selector Tabs -->
        <div class="flex flex-wrap gap-2 justify-center pb-2">
          ${LEVELS.map(lvl => `
            <button 
              data-level="${lvl.id}" 
              class="lvl-tab px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-sm flex items-center gap-1.5
              ${this.currentLevel === lvl.id 
                ? 'bg-amber-500 text-white shadow-amber-200 shadow-md scale-105' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}"
            >
              <span>${lvl.badge.split(' ')[0]}</span>
              <span>Level ${lvl.id}</span>
            </button>
          `).join("")}
        </div>

        <!-- Level Banner Info -->
        <div class="bg-gradient-to-r ${currentLvlObj.color} text-white p-4 rounded-2xl shadow-sm text-center">
          <h2 class="font-extrabold text-lg">${currentLvlObj.title}</h2>
          <p class="text-xs text-white/90 mt-0.5">${currentLvlObj.subtitle}</p>
        </div>

        <!-- Main Flashcard -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-slate-100 relative overflow-hidden text-center transition-all duration-300">
          
          <!-- Mastered Ribbon -->
          ${isMastered ? `
            <div class="absolute top-4 right-4 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-emerald-300">
              ✓ Learned
            </div>
          ` : `
            <div class="absolute top-4 right-4 bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-semibold">
              Word ${this.currentIndex + 1} of ${this.activeWords.length}
            </div>
          `}

          <!-- Visual Illustration / Emoji -->
          <div class="text-7xl sm:text-8xl my-3 transform hover:scale-110 transition-transform cursor-pointer select-none" id="emoji-click">
            ${word.emoji}
          </div>

          <!-- Interactive Letter Tiles for Phonics Chunking -->
          <div class="my-5">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Tap individual letters to hear sounds:</p>
            <div class="flex justify-center items-center gap-2 sm:gap-3 flex-wrap">
              ${word.letters.map((letter, idx) => `
                <button 
                  data-letter-idx="${idx}"
                  class="letter-tile group relative bg-amber-50 hover:bg-amber-100 active:scale-95 border-2 border-amber-300 text-amber-950 font-bold rounded-2xl w-16 h-18 sm:w-20 sm:h-22 flex flex-col items-center justify-center shadow-md transition-all"
                  title="Click to hear ${letter}"
                >
                  <span class="text-3xl sm:text-4xl font-tamil">${letter}</span>
                  <span class="text-[10px] text-amber-700 font-semibold tracking-wide mt-1">
                    ${word.breakdowns && word.breakdowns[idx] ? word.breakdowns[idx].sound : ''}
                  </span>
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Letter Anatomy Details Box (Dynamic on letter click) -->
          <div id="breakdown-box" class="bg-amber-50/70 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 mx-auto max-w-md transition-all">
            <span class="font-bold">💡 Phonics Tip:</span> Tap any letter tile above to hear its sound and see how it is made!
          </div>

          <!-- Audio Pronunciation Controls -->
          <div class="flex justify-center items-center gap-3 my-5">
            <button id="btn-speak-word" class="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold px-6 py-3 rounded-2xl shadow-lg shadow-indigo-200 flex items-center gap-2 text-base transition-all">
              <span class="text-xl">🔊</span> Read Word
            </button>
            <button id="btn-speak-slow" class="bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 font-semibold px-4 py-3 rounded-2xl border border-slate-300 flex items-center gap-1.5 text-sm transition-all" title="Listen slowly">
              <span>🐢</span> Slow
            </button>
          </div>

          <!-- Meaning & Transliteration Peek -->
          <div class="border-t border-slate-100 pt-4 mt-4">
            <div class="flex items-center justify-center gap-2 text-slate-500 mb-1">
              <span class="text-sm font-semibold">English Meaning:</span>
              <span class="text-base font-bold text-slate-800">${word.english}</span>
            </div>
            
            <div class="text-xs text-slate-400 italic mb-3">
              "${word.hint}"
            </div>

            <!-- Phonics / Transliteration Toggle -->
            <div class="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs">
              <span class="text-slate-400">English Sounds:</span>
              <span class="font-mono font-bold text-indigo-600 tracking-wide">${word.translit}</span>
            </div>
          </div>
        </div>

        <!-- Navigation & Action Buttons -->
        <div class="flex items-center justify-between gap-3">
          <button id="btn-prev" class="bg-white hover:bg-slate-50 active:scale-95 text-slate-700 font-bold px-5 py-2.5 rounded-xl border border-slate-300 shadow-sm disabled:opacity-40 transition-all" ${this.currentIndex === 0 ? 'disabled' : ''}>
            ← Previous
          </button>

          <button id="btn-master" class="flex-1 max-w-xs font-bold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2
            ${isMastered 
              ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
              : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-200'}"
          >
            <span>${isMastered ? '✓ Mastered (+20 XP)' : '⭐ I Can Read This!'}</span>
          </button>

          <button id="btn-next" class="bg-white hover:bg-slate-50 active:scale-95 text-slate-700 font-bold px-5 py-2.5 rounded-xl border border-slate-300 shadow-sm disabled:opacity-40 transition-all" ${this.currentIndex === this.activeWords.length - 1 ? 'disabled' : ''}>
            Next →
          </button>
        </div>
      </div>
    `;

    this.attachEvents(word);
  }

  attachEvents(word) {
    // Level tabs
    this.container.querySelectorAll(".lvl-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        sound.playPop();
        const lvl = parseInt(btn.dataset.level);
        this.setLevel(lvl);
      });
    });

    // Tap letter tile
    this.container.querySelectorAll(".letter-tile").forEach(tile => {
      tile.addEventListener("click", () => {
        sound.playPop();
        const idx = parseInt(tile.dataset.letterIdx);
        const letter = word.letters[idx];
        sound.speak(letter, 0.7);

        // Show breakdown
        const box = this.container.querySelector("#breakdown-box");
        if (box && word.breakdowns && word.breakdowns[idx]) {
          const b = word.breakdowns[idx];
          box.innerHTML = `
            <div class="flex items-center justify-between">
              <div>
                <span class="text-base font-bold font-tamil text-amber-950">${b.letter}</span>
                <span class="mx-1 text-slate-400">=</span>
                <span class="font-bold text-amber-800">${b.root}</span>
              </div>
              <div class="bg-amber-200/60 px-2 py-0.5 rounded text-[11px] font-bold text-amber-900">
                Sounds like: "${b.sound}"
              </div>
            </div>
          `;
        }
      });
    });

    // Speak whole word
    const speakBtn = this.container.querySelector("#btn-speak-word");
    if (speakBtn) {
      speakBtn.addEventListener("click", () => {
        sound.speak(word.tamil);
      });
    }

    // Speak slow
    const speakSlowBtn = this.container.querySelector("#btn-speak-slow");
    if (speakSlowBtn) {
      speakSlowBtn.addEventListener("click", () => {
        sound.speakSlow(word.tamil);
      });
    }

    // Emoji click
    const emojiClick = this.container.querySelector("#emoji-click");
    if (emojiClick) {
      emojiClick.addEventListener("click", () => {
        sound.playPop();
        sound.speak(word.tamil);
      });
    }

    // Prev / Next
    const prevBtn = this.container.querySelector("#btn-prev");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (this.currentIndex > 0) {
          sound.playPop();
          this.currentIndex--;
          this.render();
        }
      });
    }

    const nextBtn = this.container.querySelector("#btn-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (this.currentIndex < this.activeWords.length - 1) {
          sound.playPop();
          this.currentIndex++;
          this.render();
        }
      });
    }

    // Master button
    const masterBtn = this.container.querySelector("#btn-master");
    if (masterBtn) {
      masterBtn.addEventListener("click", () => {
        const added = storage.markWordMastered(word.id);
        if (added) {
          sound.playSuccess();
        } else {
          sound.playPop();
        }
        if (this.onProgressUpdate) this.onProgressUpdate();
        this.render();
      });
    }
  }
}
