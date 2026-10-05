# தமிழ் Word Quest (Tamil Word Quest)

An interactive, gamified web app designed for young learners (especially 10-year-olds in English medium) to learn to read Tamil words from scratch.

![Tamil Word Quest Preview](https://img.shields.io/badge/Tamil-Learning%20App-orange?style=for-the-badge)
![Zero Dependencies](https://img.shields.io/badge/Build-Zero%20Dependencies-green?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?style=for-the-badge)

---

## Key Learning Features

1. **Progressive Learning Staircase (10 Tiers, 210 Words)**:
   - **Level 1**: Root words & Pulli consonants (கல், கண், பல், படம், மரம், கடல்...)
   - **Level 2**: Long 'Aa' sound / துணைக்கால் ா (பால், கால், வால், பாய், நாய், வானம்...)
   - **Level 3**: Short & Long 'i' sounds / ி, ீ (கிளி, நரி, மீன், மணி, விரல், நிலா...)
   - **Level 4**: Curves & Compound letters / ு, ூ, ை, ோ (குடை, பூனை, யானை, வீடு, தோசை...)
   - **Level 5**: Sound Pairs & Distinction / ஒலி வேறுபாடுகள் (மழை, வலை, குளம், கூடை...)
   - **Level 6**: Everyday & Actions / சொற்களும் செயல்களும் (நட, ஓடு, பாடு, ஆடு...)
   - **Level 7**: School & Study Items / பள்ளியும் படிப்புப் பொருள்களும் (ஏடுகள், வண்ணங்கள், எழுதுகோல், அழிப்பான்...)
   - **Level 8**: Opposites & Positions / எதிர்ச் சொற்களும் நிலைகளும் (உயரம், குட்டை, அதிகம், குறைவு, மேலே, கீழே...)
   - **Level 9**: Numbers & Everyday Words / எண்களும் அன்றாடச் சொற்களும் (பத்து, இருபது, முப்பது, தொண்ணூறு, கதை, கண்ணாடி...)
   - **Level 10**: Action Verbs & Dialogue / வினைகளும் உரையாடலும் (விழுந்தது, பறந்தது, திறந்தது, உருண்டது, சரளமாக...)

2. **Phonics Chunking & Letter Breakdown**:
   - Tap any individual letter tile to hear its isolated sound.
   - Live anatomy view showing the vowel-consonant breakdown (e.g. `பா = ப் + ஆ`).
   - Whole-word spoken blend and slow-speed turtle audio.

3. **Engaging Game Modes**:
   - **Learn to Read**: Interactive flashcards with meaning, transliteration, and audio.
   - **Word Builder**: Drag and tap scrambled letter tiles to construct words.
   - **Listen & Match**: Ear training quiz testing spoken comprehension.
   - **Letter Detective**: Missing letter challenge.
   - **Speed Challenge**: 60-second rapid-fire arcade quiz sprint.
   - **Trophies & Badges**: Streaks, XP points, and achievement badges.

---

## Running Locally

No installation or build steps needed! Simply open `index.html` in your favorite web browser (Chrome, Edge, Safari, Firefox):

```bash
# Optional: serve with any static server or open directly
start index.html
```

---

## Deploying to GitHub Pages

1. Create a repository named `tamil-word-quest` under your GitHub account:
   - URL: `https://github.com/new`
   - Repo name: `tamil-word-quest`
   - Set visibility to **Public**
2. Push this directory:
   ```bash
   git remote add origin https://github.com/mf-pgmr/tamil-word-quest.git
   git branch -M main
   git push -u origin main
   ```
3. In GitHub, go to **Settings** $\rightarrow$ **Pages**:
   - Under **Source**, select **Deploy from a branch**.
   - Branch: `main` / Folder: `/ (root)`.
   - Click **Save**.
4. Your site will be live at:
   `https://mf-pgmr.github.io/tamil-word-quest/`
