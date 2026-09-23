// Parent Portal Component: Add, Manage, and Export Custom Tamil Words
import { LEVELS, splitTamilLetters, autoGeneratePhonics } from "../data/words.js";
import { storage } from "../services/storage.js";
import { sound } from "../services/speech.js";

export class ParentComponent {
  constructor(containerEl, onWordsChanged) {
    this.container = containerEl;
    this.onWordsChanged = onWordsChanged;
    this.unlocked = false; // Simple math lock so the child doesn't accidentally edit
    this.mathQ = this.generateMathQuestion();
  }

  generateMathQuestion() {
    const a = Math.floor(Math.random() * 6) + 4;
    const b = Math.floor(Math.random() * 6) + 4;
    return { a, b, answer: a * b };
  }

  render() {
    if (!this.unlocked) {
      this.renderLockScreen();
      return;
    }
    this.renderDashboard();
  }

  renderLockScreen() {
    this.container.innerHTML = `
      <div class="h-full min-h-0 w-full max-w-md mx-auto flex flex-col justify-center items-center p-4 select-none">
        <div class="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl w-full text-center">
          <div class="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-3 font-black text-xl">
            P
          </div>
          <h2 class="text-xl font-black text-slate-900 dark:text-white mb-1">Parent Portal</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 mb-6">
            Please solve this quick problem to verify you are a parent:
          </p>

          <div class="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 mb-4">
            <div class="text-2xl font-black text-indigo-600 dark:text-indigo-400 tracking-wider">
              ${this.mathQ.a} × ${this.mathQ.b} = ?
            </div>
          </div>

          <form id="parent-gate-form" class="space-y-3">
            <input 
              type="number" 
              id="gate-answer" 
              placeholder="Your answer" 
              class="w-full text-center py-2.5 px-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-lg focus:outline-none focus:border-indigo-500"
              required
              autofocus
            />
            <button 
              type="submit" 
              class="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold py-2.5 rounded-xl shadow-md transition-all cursor-pointer text-sm"
            >
              Enter Parent Portal →
            </button>
          </form>
          <div id="gate-error" class="text-xs text-rose-500 font-bold mt-2 min-h-[18px]"></div>
        </div>
      </div>
    `;

    const form = this.container.querySelector("#parent-gate-form");
    const input = this.container.querySelector("#gate-answer");
    const errEl = this.container.querySelector("#gate-error");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = parseInt(input.value.trim(), 10);
      if (val === this.mathQ.answer) {
        sound.playPop();
        this.unlocked = true;
        this.render();
      } else {
        sound.playTone(200, "sawtooth", 0.2);
        errEl.textContent = "Incorrect answer. Please try again!";
        input.value = "";
        input.focus();
      }
    });
  }

  renderDashboard() {
    const customWords = storage.getCustomWords();
    const allWords = storage.getAllWords();

    this.container.innerHTML = `
      <div class="w-full max-w-4xl mx-auto flex flex-col gap-4 py-2 px-1 select-none">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Parent Portal
              </h2>
              <span class="bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 text-[11px] font-bold px-2 py-0.5 rounded-full">
                Custom Vocabulary
              </span>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Add words for your child to learn. All words save to this device and can be exported into the codebase.
            </p>
          </div>

          <div class="flex items-center gap-2 text-xs">
            <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-center">
              <span class="text-slate-400 text-[10px] uppercase font-bold block">Custom Words</span>
              <span class="font-black text-indigo-600 dark:text-indigo-400 text-sm">${customWords.length}</span>
            </div>
            <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-center">
              <span class="text-slate-400 text-[10px] uppercase font-bold block">Total Active</span>
              <span class="font-black text-emerald-600 dark:text-emerald-400 text-sm">${allWords.length}</span>
            </div>
          </div>
        </div>

        <!-- Add Word Form Card -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md border-2 border-slate-100 dark:border-slate-800">
          <h3 class="text-base font-extrabold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <span>Add a New Word</span>
          </h3>

          <form id="add-word-form" class="space-y-3.5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <!-- Tamil Word Input -->
              <div>
                <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                  Tamil Word <span class="text-rose-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="word-tamil" 
                  placeholder="e.g. அம்மா, நிலா, பூனை" 
                  class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-tamil text-lg font-bold focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <!-- English Meaning Input -->
              <div>
                <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                  English Meaning <span class="text-rose-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="word-english" 
                  placeholder="e.g. Mother, Moon, Cat" 
                  class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <!-- Child Hint / Context -->
              <div>
                <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                  Child-Friendly Hint <span class="text-rose-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="word-hint" 
                  placeholder="e.g. She loves and cares for our family." 
                  class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <!-- Difficulty Tier Selector -->
              <div>
                <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                  Difficulty Tier
                </label>
                <select 
                  id="word-level" 
                  class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs focus:outline-none focus:border-indigo-500"
                >
                  <option value="1">Level 1: Root & Pulli (புள்ளி)</option>
                  <option value="2">Level 2: Long 'Aa' Sound (ா)</option>
                  <option value="3">Level 3: Sounds of 'i' (ி, ீ)</option>
                  <option value="4" selected>Level 4: Curves & Loops (ு, ூ, ை, ோ)</option>
                </select>
              </div>
            </div>

            <!-- Real-time Letter Breakdown & Phonics Preview Box -->
            <div id="preview-box" class="bg-indigo-50/60 dark:bg-slate-800/60 border border-indigo-200/80 dark:border-slate-700 rounded-2xl p-3">
              <div class="flex items-center justify-between text-xs mb-2">
                <span class="font-extrabold uppercase tracking-wider text-indigo-900 dark:text-indigo-300 text-[11px]">
                  Automatic Phonics Preview
                </span>
                <span id="preview-letter-count" class="text-slate-400 dark:text-slate-500 text-[11px] font-bold">
                  0 Letters Detected
                </span>
              </div>

              <div id="preview-tiles" class="flex items-center gap-2 flex-wrap min-h-[48px] py-1">
                <span class="text-xs text-slate-400 dark:text-slate-500 italic">
                  Type a Tamil word above to see the automatic letter tiles.
                </span>
              </div>

              <div class="mt-2 pt-2 border-t border-indigo-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <div>
                  <span class="text-slate-500 dark:text-slate-400">English Phonics:</span>
                  <span id="preview-translit" class="font-mono font-bold text-indigo-700 dark:text-indigo-300 ml-1">
                    --
                  </span>
                </div>

                <!-- Test Audio Button -->
                <button 
                  type="button" 
                  id="btn-test-speech" 
                  class="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Hear Word</span>
                </button>
              </div>
            </div>

            <!-- Submit Button & Feedback -->
            <div class="flex items-center justify-between pt-1">
              <div id="form-feedback" class="text-xs font-bold min-h-[20px]"></div>
              <button 
                type="submit" 
                class="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold px-5 py-2 rounded-xl shadow-md transition-all cursor-pointer text-xs sm:text-sm flex items-center gap-1.5"
              >
                <span>Save & Add to Quest</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Custom Words Library Card -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md border-2 border-slate-100 dark:border-slate-800">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-base font-extrabold text-slate-900 dark:text-white">
              Custom Words Added on this Device (${customWords.length})
            </h3>
            
            <div class="flex items-center gap-2">
              <button 
                id="btn-copy-code" 
                class="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
                title="Copy code to paste into words.js for permanent commit"
              >
                Copy for words.js
              </button>
            </div>
          </div>

          ${customWords.length === 0 ? `
            <div class="text-center py-8 text-slate-400 dark:text-slate-500 text-xs">
              No custom words added yet. Fill out the form above to add customized vocabulary for your child!
            </div>
          ` : `
            <div class="divide-y divide-slate-100 dark:divide-slate-800">
              ${customWords.map(w => `
                <div class="py-3 flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <button 
                      data-play-tamil="${w.tamil}"
                      class="btn-play-row w-9 h-9 rounded-xl bg-amber-50 dark:bg-slate-800 text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-slate-700 flex items-center justify-center font-bold text-xs border border-amber-200 dark:border-slate-700 cursor-pointer"
                      title="Listen"
                    >
                      Play
                    </button>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="font-tamil font-black text-lg text-slate-900 dark:text-white">${w.tamil}</span>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">• ${w.english}</span>
                        <span class="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold px-2 py-0.5 rounded-md">
                          Lvl ${w.level}
                        </span>
                      </div>
                      <div class="text-[11px] text-slate-400 dark:text-slate-500 italic mt-0.5">
                        "${w.hint}" &nbsp;•&nbsp; <span class="font-mono text-indigo-600 dark:text-indigo-400">${w.translit}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button 
                      data-delete-id="${w.id}"
                      class="btn-delete-row text-xs font-bold text-rose-500 hover:text-rose-700 dark:hover:text-rose-400 px-2 py-1 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              `).join("")}
            </div>
          `}
        </div>

        <!-- Code Snippet Modal / Drawer (Hidden by default) -->
        <div id="code-snippet-box" class="hidden bg-slate-900 text-slate-200 p-4 rounded-2xl border border-slate-800 font-mono text-xs overflow-x-auto">
          <div class="flex items-center justify-between mb-2 text-slate-400">
            <span>Paste the snippet below into js/data/words.js:</span>
            <button id="btn-close-code" class="text-slate-400 hover:text-white text-xs font-bold cursor-pointer">Close ✕</button>
          </div>
          <pre id="code-snippet-content" class="bg-slate-950 p-3 rounded-xl overflow-x-auto text-[11px]"></pre>
        </div>

      </div>
    `;

    this.attachDashboardEvents();
  }

  attachDashboardEvents() {
    const tamilInput = this.container.querySelector("#word-tamil");
    const englishInput = this.container.querySelector("#word-english");
    const hintInput = this.container.querySelector("#word-hint");
    const levelSelect = this.container.querySelector("#word-level");
    const form = this.container.querySelector("#add-word-form");
    const previewTiles = this.container.querySelector("#preview-tiles");
    const previewTranslit = this.container.querySelector("#preview-translit");
    const letterCountEl = this.container.querySelector("#preview-letter-count");
    const testSpeechBtn = this.container.querySelector("#btn-test-speech");
    const feedbackEl = this.container.querySelector("#form-feedback");

    let currentBreakdown = { breakdowns: [], translit: "" };
    let currentLetters = [];

    // Live update preview as parent types Tamil word
    tamilInput.addEventListener("input", () => {
      const val = tamilInput.value.trim();
      currentLetters = splitTamilLetters(val);
      currentBreakdown = autoGeneratePhonics(currentLetters);

      if (currentLetters.length > 0) {
        letterCountEl.textContent = `${currentLetters.length} Letters Detected`;
        previewTiles.innerHTML = currentLetters.map((letter, idx) => `
          <div class="bg-white dark:bg-slate-800 border-2 border-indigo-200 dark:border-slate-600 text-indigo-950 dark:text-indigo-200 rounded-xl px-2.5 py-1 flex flex-col items-center shadow-sm">
            <span class="font-tamil font-black text-base">${letter}</span>
            <span class="text-[9px] text-indigo-600 dark:text-indigo-400 font-bold">
              ${currentBreakdown.breakdowns[idx] ? currentBreakdown.breakdowns[idx].sound : ''}
            </span>
          </div>
        `).join("");
        previewTranslit.textContent = currentBreakdown.translit || "--";
      } else {
        letterCountEl.textContent = `0 Letters Detected`;
        previewTiles.innerHTML = `<span class="text-xs text-slate-400 dark:text-slate-500 italic">Type a Tamil word above to see the automatic letter tiles.</span>`;
        previewTranslit.textContent = "--";
      }
    });

    // Test Audio
    testSpeechBtn.addEventListener("click", () => {
      const val = tamilInput.value.trim();
      if (val) {
        sound.playPop();
        sound.speakWithWebSpeech(val, 0.85);
      } else {
        feedbackEl.className = "text-xs font-bold text-amber-500 min-h-[20px]";
        feedbackEl.textContent = "Please type a Tamil word first to test audio.";
      }
    });

    // Handle Form Submit
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const tamil = tamilInput.value.trim();
      const english = englishInput.value.trim();
      const hint = hintInput.value.trim();
      const level = parseInt(levelSelect.value, 10) || 1;

      if (!tamil || !english) return;

      const letters = splitTamilLetters(tamil);
      if (letters.length === 0) {
        feedbackEl.className = "text-xs font-bold text-rose-500 min-h-[20px]";
        feedbackEl.textContent = "Could not parse Tamil letters. Please verify the Tamil word.";
        return;
      }

      const { breakdowns, translit } = autoGeneratePhonics(letters);

      const newWord = {
        id: "custom_" + Date.now(),
        level,
        tamil,
        letters,
        breakdowns,
        translit,
        english,
        hint: hint || english
      };

      storage.addCustomWord(newWord);
      sound.playSuccess();

      if (this.onWordsChanged) {
        this.onWordsChanged();
      }

      this.render();
    });

    // Row audio play
    this.container.querySelectorAll(".btn-play-row").forEach(btn => {
      btn.addEventListener("click", () => {
        const tamil = btn.dataset.playTamil;
        sound.playPop();
        sound.speakWithWebSpeech(tamil, 0.85);
      });
    });

    // Row delete
    this.container.querySelectorAll(".btn-delete-row").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.deleteId;
        if (confirm("Are you sure you want to remove this word from the quest?")) {
          sound.playPop();
          storage.deleteCustomWord(id);
          if (this.onWordsChanged) {
            this.onWordsChanged();
          }
          this.render();
        }
      });
    });

    // Copy for words.js
    const copyBtn = this.container.querySelector("#btn-copy-code");
    const snippetBox = this.container.querySelector("#code-snippet-box");
    const snippetContent = this.container.querySelector("#code-snippet-content");
    const closeCodeBtn = this.container.querySelector("#btn-close-code");

    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const custom = storage.getCustomWords();
        if (!custom.length) {
          alert("No custom words to export yet. Add a word first!");
          return;
        }

        const formatted = custom.map(w => {
          return `  {\n    id: ${JSON.stringify(w.id)},\n    level: ${w.level},\n    tamil: ${JSON.stringify(w.tamil)},\n    letters: ${JSON.stringify(w.letters)},\n    breakdowns: ${JSON.stringify(w.breakdowns)},\n    translit: ${JSON.stringify(w.translit)},\n    english: ${JSON.stringify(w.english)},\n    hint: ${JSON.stringify(w.hint)}\n  }`;
        }).join(",\n");

        if (snippetContent) {
          snippetContent.textContent = formatted;
        }
        if (snippetBox) {
          snippetBox.classList.remove("hidden");
        }

        if (navigator.clipboard) {
          navigator.clipboard.writeText(formatted).then(() => {
            sound.playPop();
            copyBtn.textContent = "✓ Copied to Clipboard!";
            setTimeout(() => {
              copyBtn.textContent = "Copy for words.js";
            }, 2500);
          }).catch(() => {});
        }
      });
    }

    if (closeCodeBtn && snippetBox) {
      closeCodeBtn.addEventListener("click", () => {
        snippetBox.classList.add("hidden");
      });
    }
  }
}
