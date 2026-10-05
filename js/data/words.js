// Curated Tamil vocabulary database with 138 words across 6 progressive tiers (No emojis)
export const LEVELS = [
  {
    id: 1,
    title: "Level 1: Root Words & Pulli (புள்ளி)",
    subtitle: "Simple 2 & 3 letter root words without complex vowel signs",
    badge: "Seedling Reader",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 2,
    title: "Level 2: The Long 'Aa' Sound (துணைக்கால் ா)",
    subtitle: "Words with the stretching 'ா' sound",
    badge: "Word Explorer",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 3,
    title: "Level 3: The 'i' and 'ee' Sounds (ி, ீ)",
    subtitle: "Words with loop modifiers above letters",
    badge: "Sound Champion",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 4,
    title: "Level 4: Curves & Loops (ு, ூ, ை, ோ)",
    subtitle: "Everyday 2, 3, and 4 letter words with complex vowel signs",
    badge: "Tamil Master",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: 5,
    title: "Level 5: Sound Pairs (ஒலி வேறுபாடுகள்)",
    subtitle: "Paired contrasting words exploring short/long vowels and unique consonants",
    badge: "Sound Master",
    color: "from-pink-500 to-rose-600"
  },
  {
    id: 6,
    title: "Level 6: Everyday & Actions (சொற்களும் செயல்களும்)",
    subtitle: "U/Oo series words, everyday objects, and action verbs",
    badge: "Tamil Champion",
    color: "from-violet-500 to-purple-600"
  },
    {
    id: 7,
    title: "Level 7: School & Study Items (பள்ளியும் படிப்புப் பொருள்களும்)",
    subtitle: "Conversation, school bag items, and flashcards from textbook Pages 11 & 12",
    badge: "Dialogue Expert",
    color: "from-teal-500 to-cyan-600"
  },
  {
    id: 8,
    title: "Level 8: Opposites & Positions (எதிர்ச் சொற்களும் நிலைகளும்)",
    subtitle: "Antonyms, heights, sizes, and relative positions from textbook Pages 14 & 15",
    badge: "Concept Master",
    color: "from-amber-600 to-rose-600"
  },
  {
    id: 9,
    title: "Level 9: Numbers & Everyday Words (எண்களும் அன்றாடச் சொற்களும்)",
    subtitle: "Tens from 10 to 90, everyday household items, and nature from textbook Pages 9, 10 & 15",
    badge: "Number Wizard",
    color: "from-sky-500 to-indigo-600"
  },
  {
    id: 10,
    title: "Level 10: Action Verbs & Dialogue (வினைகளும் உரையாடலும்)",
    subtitle: "Story actions, expressions, and conversation speech from textbook Pages 8, 12 & 13",
    badge: "Tamil Storyteller",
    color: "from-emerald-600 to-teal-700"
  }
];

export const VOCABULARY = [
  // ==================== LEVEL 1: ROOT WORDS & PULLI ====================
  {
    id: "l1_1", level: 1, tamil: "கல்", letters: ["க", "ல்"],
    breakdowns: [{ letter: "க", root: "க் + அ", sound: "Ka" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Kal", english: "Stone", hint: "Hard and found on the ground or in river beds."
  },
  {
    id: "l1_2", level: 1, tamil: "கண்", letters: ["க", "ண்"],
    breakdowns: [{ letter: "க", root: "க் + அ", sound: "Ka" }, { letter: "ண்", root: "Pure Consonant (மெய்)", sound: "N (retroflex)" }],
    translit: "Kan", english: "Eye", hint: "You use this to see the world around you."
  },
  {
    id: "l1_3", level: 1, tamil: "பல்", letters: ["ப", "ல்"],
    breakdowns: [{ letter: "ப", root: "ப் + அ", sound: "Pa" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Pal", english: "Tooth", hint: "You brush them every morning."
  },
  {
    id: "l1_4", level: 1, tamil: "மண்", letters: ["ம", "ண்"],
    breakdowns: [{ letter: "ம", root: "ம் + அ", sound: "Ma" }, { letter: "ண்", root: "Pure Consonant (மெய்)", sound: "N" }],
    translit: "Man", english: "Soil / Sand", hint: "Plants, flowers, and trees grow in this."
  },
  {
    id: "l1_5", level: 1, tamil: "படம்", letters: ["ப", "ட", "ம்"],
    breakdowns: [{ letter: "ப", root: "ப் + அ", sound: "Pa" }, { letter: "ட", root: "ட் + அ", sound: "Da" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Pa-dam", english: "Picture", hint: "A photo, drawing, or painting in a frame."
  },
  {
    id: "l1_6", level: 1, tamil: "மரம்", letters: ["ம", "ர", "ம்"],
    breakdowns: [{ letter: "ம", root: "ம் + அ", sound: "Ma" }, { letter: "ர", root: "ர் + அ", sound: "Ra" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Ma-ram", english: "Tree", hint: "Has green leaves, sturdy trunk, and gives cool shade."
  },
  {
    id: "l1_7", level: 1, tamil: "நகம்", letters: ["ந", "க", "ம்"],
    breakdowns: [{ letter: "ந", root: "ந் + அ", sound: "Na" }, { letter: "க", root: "க் + அ", sound: "Gam" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Na-gam", english: "Nail (Finger/Toe)", hint: "Protects the tips of your fingers and toes."
  },
  {
    id: "l1_8", level: 1, tamil: "கடல்", letters: ["க", "ட", "ல்"],
    breakdowns: [{ letter: "க", root: "க் + அ", sound: "Ka" }, { letter: "ட", root: "ட் + அ", sound: "Dal" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Ka-dal", english: "Sea / Ocean", hint: "A giant body of salty water with rolling waves."
  },
  {
    id: "l1_9", level: 1, tamil: "பட்டம்", letters: ["ப", "ட்", "ட", "ம்"],
    breakdowns: [{ letter: "ப", root: "ப் + அ", sound: "Pa" }, { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" }, { letter: "ட", root: "ட் + அ", sound: "Tam" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Pat-tam", english: "Kite", hint: "Flies high in the breezy sky on a string."
  },
  {
    id: "l1_10", level: 1, tamil: "கப்பல்", letters: ["க", "ப்", "ப", "ல்"],
    breakdowns: [{ letter: "க", root: "க் + அ", sound: "Ka" }, { letter: "ப்", root: "Pure Consonant (மெய்)", sound: "P" }, { letter: "ப", root: "ப் + அ", sound: "Pal" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Kap-pal", english: "Ship", hint: "A large vessel sailing across the sea."
  },
  {
    id: "l1_11", level: 1, tamil: "மலர்", letters: ["ம", "ல", "ர்"],
    breakdowns: [{ letter: "ம", root: "ம் + அ", sound: "Ma" }, { letter: "ல", root: "ல் + அ", sound: "La" }, { letter: "ர்", root: "Pure Consonant (மெய்)", sound: "R" }],
    translit: "Ma-lar", english: "Flower / Blossom", hint: "Colorful, sweet-smelling blossom on a plant."
  },
  {
    id: "l1_12", level: 1, tamil: "பணம்", letters: ["ப", "ண", "ம்"],
    breakdowns: [{ letter: "ப", root: "ப் + அ", sound: "Pa" }, { letter: "ண", root: "ண் + அ", sound: "Na" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Pa-nam", english: "Money / Currency", hint: "Coins and notes used to buy things."
  },
  {
    id: "l1_13", level: 1, tamil: "பழம்", letters: ["ப", "ழ", "ம்"],
    breakdowns: [{ letter: "ப", root: "ப் + அ", sound: "Pa" }, { letter: "ழ", root: "ழ் + அ (Special Tamil sound)", sound: "Zha" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Pa-zham", english: "Fruit", hint: "Sweet, juicy treat like an apple or banana."
  },
  {
    id: "l1_14", level: 1, tamil: "வட்டம்", letters: ["வ", "ட்", "ட", "ம்"],
    breakdowns: [{ letter: "வ", root: "வ் + அ", sound: "Va" }, { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" }, { letter: "ட", root: "ட் + அ", sound: "Tam" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Vat-tam", english: "Circle", hint: "A round geometric shape with no corners."
  },
  {
    id: "l1_15", level: 1, tamil: "சட்டம்", letters: ["ச", "ட்", "ட", "ம்"],
    breakdowns: [{ letter: "ச", root: "ச் + அ", sound: "Sa" }, { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" }, { letter: "ட", root: "ட் + அ", sound: "Tam" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Sat-tam", english: "Frame / Rule", hint: "A border for pictures or an important rule."
  },
  {
    id: "l1_16", level: 1, tamil: "தங்கம்", letters: ["த", "ங்", "க", "ம்"],
    breakdowns: [{ letter: "த", root: "த் + அ", sound: "Tha" }, { letter: "ங்", root: "Pure Consonant (மெய்)", sound: "Ng" }, { letter: "க", root: "க் + அ", sound: "Gam" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Thang-gam", english: "Gold", hint: "Precious yellow metal used to make medals and jewelry."
  },
  {
    id: "l1_17", level: 1, tamil: "உடல்", letters: ["உ", "ட", "ல்"],
    breakdowns: [{ letter: "உ", root: "Pure Vowel (உயிர்)", sound: "U" }, { letter: "ட", root: "ட் + அ", sound: "Dal" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "U-dal", english: "Body", hint: "Your physical self from head to toe."
  },
  {
    id: "l1_18", level: 1, tamil: "அன்னம்", letters: ["அ", "ன்", "ன", "ம்"],
    breakdowns: [{ letter: "அ", root: "Pure Vowel (உயிர்)", sound: "A" }, { letter: "ன்", root: "Pure Consonant (மெய்)", sound: "N" }, { letter: "ன", root: "ன் + அ", sound: "Nam" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "An-nam", english: "Swan", hint: "A graceful white water bird that glides on lakes."
  },
  {
    id: "l1_19", level: 1, tamil: "அண்ணன்", letters: ["அ", "ண்", "ண", "ன்"],
    breakdowns: [{ letter: "அ", root: "Pure Vowel (உயிர்)", sound: "A" }, { letter: "ண்", root: "Pure Consonant (மெய்)", sound: "N" }, { letter: "ண", root: "ண் + அ", sound: "Nan" }, { letter: "ன்", root: "Pure Consonant (மெய்)", sound: "N" }],
    translit: "An-nan", english: "Elder Brother", hint: "An older brother in the family."
  },
  {
    id: "l1_20", level: 1, tamil: "வனம்", letters: ["வ", "ன", "ம்"],
    breakdowns: [{ letter: "வ", root: "வ் + அ", sound: "Va" }, { letter: "ன", root: "ன் + அ", sound: "Na" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Va-nam", english: "Forest / Woods", hint: "A peaceful woodland full of tall green trees."
  },

  // ==================== LEVEL 2: THE LONG 'AA' SOUND ====================
  {
    id: "l2_1", level: 2, tamil: "பால்", letters: ["பா", "ல்"],
    breakdowns: [{ letter: "பா", root: "ப் + ஆ", sound: "Paa" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Paal", english: "Milk", hint: "Nutritious white drink that makes bones strong."
  },
  {
    id: "l2_2", level: 2, tamil: "கால்", letters: ["கா", "ல்"],
    breakdowns: [{ letter: "கா", root: "க் + ஆ", sound: "Kaa" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Kaal", english: "Leg", hint: "You use both of these to walk, run, and jump."
  },
  {
    id: "l2_3", level: 2, tamil: "வால்", letters: ["வா", "ல்"],
    breakdowns: [{ letter: "வா", root: "வ் + ஆ", sound: "Vaa" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Vaal", english: "Tail", hint: "Animals wag this when they feel cheerful."
  },
  {
    id: "l2_4", level: 2, tamil: "பாய்", letters: ["பா", "ய்"],
    breakdowns: [{ letter: "பா", root: "ப் + ஆ", sound: "Paa" }, { letter: "ய்", root: "Pure Consonant (மெய்)", sound: "Y" }],
    translit: "Paai", english: "Mat", hint: "Spread out on the floor to sit or rest on."
  },
  {
    id: "l2_5", level: 2, tamil: "நாய்", letters: ["நா", "ய்"],
    breakdowns: [{ letter: "நா", root: "ந் + ஆ", sound: "Naa" }, { letter: "ய்", root: "Pure Consonant (மெய்)", sound: "Y" }],
    translit: "Naai", english: "Dog", hint: "Loyal pet that barks happily and plays fetch."
  },
  {
    id: "l2_6", level: 2, tamil: "காடு", letters: ["கா", "டு"],
    breakdowns: [{ letter: "கா", root: "க் + ஆ", sound: "Kaa" }, { letter: "டு", root: "ட் + உ", sound: "Du" }],
    translit: "Kaa-du", english: "Jungle / Forest", hint: "A wilderness home to birds and wild creatures."
  },
  {
    id: "l2_7", level: 2, tamil: "மாடு", letters: ["மா", "டு"],
    breakdowns: [{ letter: "மா", root: "ம் + ஆ", sound: "Maa" }, { letter: "டு", root: "ட் + உ", sound: "Du" }],
    translit: "Maa-du", english: "Cow / Ox", hint: "A gentle farm animal that grazes in green pastures."
  },
  {
    id: "l2_8", level: 2, tamil: "வானம்", letters: ["வா", "ன", "ம்"],
    breakdowns: [{ letter: "வா", root: "வ் + ஆ", sound: "Vaa" }, { letter: "ன", root: "ன் + அ", sound: "Na" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Vaa-nam", english: "Sky", hint: "The expansive blue space above us."
  },
  {
    id: "l2_9", level: 2, tamil: "காகம்", letters: ["கா", "க", "ம்"],
    breakdowns: [{ letter: "கா", root: "க் + ஆ", sound: "Kaa" }, { letter: "க", root: "க் + அ", sound: "Gam" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Kaa-gam", english: "Crow", hint: "A clever black bird that caws 'kaa-kaa'."
  },
  {
    id: "l2_10", level: 2, tamil: "பாலம்", letters: ["பா", "ல", "ம்"],
    breakdowns: [{ letter: "பா", root: "ப் + ஆ", sound: "Paa" }, { letter: "ல", root: "ல் + அ", sound: "Lam" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Paa-lam", english: "Bridge", hint: "Spans across rivers and roads for vehicles to cross."
  },
  {
    id: "l2_11", level: 2, tamil: "பாப்பா", letters: ["பா", "ப்", "பா"],
    breakdowns: [{ letter: "பா", root: "ப் + ஆ", sound: "Paa" }, { letter: "ப்", root: "Pure Consonant (மெய்)", sound: "P" }, { letter: "பா", root: "ப் + ஆ", sound: "Paa" }],
    translit: "Paap-paa", english: "Baby / Toddler", hint: "A cute little child that giggles."
  },
  {
    id: "l2_12", level: 2, tamil: "அப்பா", letters: ["அ", "ப்", "பா"],
    breakdowns: [{ letter: "அ", root: "Pure Vowel (உயிர்)", sound: "A" }, { letter: "ப்", root: "Pure Consonant (மெய்)", sound: "P" }, { letter: "பா", root: "ப் + ஆ", sound: "Paa" }],
    translit: "Ap-paa", english: "Father / Dad", hint: "Your dad who loves and cares for you."
  },
  {
    id: "l2_13", level: 2, tamil: "அம்மா", letters: ["அ", "ம்", "மா"],
    breakdowns: [{ letter: "அ", root: "Pure Vowel (உயிர்)", sound: "A" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }, { letter: "மா", root: "ம் + ஆ", sound: "Maa" }],
    translit: "Am-maa", english: "Mother / Mom", hint: "Your loving mom."
  },
  {
    id: "l2_14", level: 2, tamil: "அக்கா", letters: ["அ", "க்", "கா"],
    breakdowns: [{ letter: "அ", root: "Pure Vowel (உயிர்)", sound: "A" }, { letter: "க்", root: "Pure Consonant (மெய்)", sound: "K" }, { letter: "கா", root: "க் + ஆ", sound: "Kaa" }],
    translit: "Ak-kaa", english: "Elder Sister", hint: "An older sister in the family."
  },
  {
    id: "l2_15", level: 2, tamil: "தாத்தா", letters: ["தா", "த்", "தா"],
    breakdowns: [{ letter: "தா", root: "த் + ஆ", sound: "Thaa" }, { letter: "த்", root: "Pure Consonant (மெய்)", sound: "Th" }, { letter: "தா", root: "த் + ஆ", sound: "Thaa" }],
    translit: "Thaat-thaa", english: "Grandfather", hint: "A wise grandpa who tells wonderful stories."
  },
  {
    id: "l2_16", level: 2, tamil: "மான்", letters: ["மா", "ன்"],
    breakdowns: [{ letter: "மா", root: "ம் + ஆ", sound: "Maa" }, { letter: "ன்", root: "Pure Consonant (மெய்)", sound: "N" }],
    translit: "Maan", english: "Deer", hint: "A graceful swift animal with gentle brown eyes."
  },
  {
    id: "l2_17", level: 2, tamil: "வாத்து", letters: ["வா", "த்", "து"],
    breakdowns: [{ letter: "வா", root: "வ் + ஆ", sound: "Vaa" }, { letter: "த்", root: "Pure Consonant (மெய்)", sound: "Th" }, { letter: "து", root: "த் + உ", sound: "Thu" }],
    translit: "Vaat-thu", english: "Duck", hint: "Swims on ponds and quacks playfully."
  },
  {
    id: "l2_18", level: 2, tamil: "மாம்பழம்", letters: ["மா", "ம்", "ப", "ழ", "ம்"],
    breakdowns: [{ letter: "மா", root: "ம் + ஆ", sound: "Maa" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }, { letter: "ப", root: "ப் + அ", sound: "Pa" }, { letter: "ழ", root: "ழ் + அ", sound: "Zham" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Maam-pa-zham", english: "Mango", hint: "The sweet, golden king of tropical fruits."
  },
  {
    id: "l2_19", level: 2, tamil: "பாட்டு", letters: ["பா", "ட்", "டு"],
    breakdowns: [{ letter: "பா", root: "ப் + ஆ", sound: "Paa" }, { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" }, { letter: "டு", root: "ட் + உ", sound: "Tu" }],
    translit: "Paat-tu", english: "Song / Melody", hint: "Musical tune you sing and dance along with."
  },
  {
    id: "l2_20", level: 2, tamil: "காது", letters: ["கா", "து"],
    breakdowns: [{ letter: "கா", root: "க் + ஆ", sound: "Kaa" }, { letter: "து", root: "த் + உ", sound: "Dhu" }],
    translit: "Kaa-dhu", english: "Ear", hint: "You use your ears to listen to sounds and music."
  },

  // ==================== LEVEL 3: SHORT & LONG 'I' SOUNDS ====================
  {
    id: "l3_1", level: 3, tamil: "கிளி", letters: ["கி", "ளி"],
    breakdowns: [{ letter: "கி", root: "க் + இ", sound: "Ki" }, { letter: "ளி", root: "ள் + இ", sound: "Li" }],
    translit: "Ki-li", english: "Parrot", hint: "A bright green bird with a curved red beak."
  },
  {
    id: "l3_2", level: 3, tamil: "நரி", letters: ["ந", "ரி"],
    breakdowns: [{ letter: "ந", root: "ந் + அ", sound: "Na" }, { letter: "ரி", root: "ர் + இ", sound: "Ri" }],
    translit: "Na-ri", english: "Fox", hint: "A clever wild animal with an orange bushy tail."
  },
  {
    id: "l3_3", level: 3, tamil: "மீன்", letters: ["மீ", "ன்"],
    breakdowns: [{ letter: "மீ", root: "ம் + ஈ", sound: "Meen" }, { letter: "ன்", root: "Pure Consonant (மெய்)", sound: "N" }],
    translit: "Meen", english: "Fish", hint: "Swims underwater with fins and shimmering scales."
  },
  {
    id: "l3_4", level: 3, tamil: "தீ", letters: ["தீ"],
    breakdowns: [{ letter: "தீ", root: "த் + ஈ", sound: "Thee" }],
    translit: "Thee", english: "Fire", hint: "Glowing orange flame providing light and warmth."
  },
  {
    id: "l3_5", level: 3, tamil: "மணி", letters: ["ம", "ணி"],
    breakdowns: [{ letter: "ம", root: "ம் + அ", sound: "Ma" }, { letter: "ணி", root: "ண் + இ", sound: "Ni" }],
    translit: "Ma-ni", english: "Bell / Clock Time", hint: "Chimes at school and also tells the hour."
  },
  {
    id: "l3_6", level: 3, tamil: "விரல்", letters: ["வி", "ர", "ல்"],
    breakdowns: [{ letter: "வி", root: "வ் + இ", sound: "Vi" }, { letter: "ர", root: "ர் + அ", sound: "Ra" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Vi-ral", english: "Finger", hint: "You have five of these on each hand."
  },
  {
    id: "l3_7", level: 3, tamil: "சிங்கம்", letters: ["சி", "ங்", "க", "ம்"],
    breakdowns: [{ letter: "சி", root: "ச் + இ", sound: "Sing" }, { letter: "ங்", root: "Pure Consonant (மெய்)", sound: "Ng" }, { letter: "க", root: "க் + அ", sound: "Gam" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Sing-gam", english: "Lion", hint: "The majestic King of the Jungle with a proud mane."
  },
  {
    id: "l3_8", level: 3, tamil: "நிலா", letters: ["நி", "லா"],
    breakdowns: [{ letter: "நி", root: "ந் + இ", sound: "Ni" }, { letter: "லா", root: "ல் + ஆ", sound: "Laa" }],
    translit: "Ni-laa", english: "Moon", hint: "Shines with silver light in the midnight sky."
  },
  {
    id: "l3_9", level: 3, tamil: "தம்பி", letters: ["த", "ம்", "பி"],
    breakdowns: [{ letter: "த", root: "த் + அ", sound: "Tha" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }, { letter: "பி", root: "ப் + இ", sound: "Bi" }],
    translit: "Tham-bi", english: "Younger Brother", hint: "A little brother in the family."
  },
  {
    id: "l3_10", level: 3, tamil: "பாட்டி", letters: ["பா", "ட்", "டி"],
    breakdowns: [{ letter: "பா", root: "ப் + ஆ", sound: "Paa" }, { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" }, { letter: "டி", root: "ட் + இ", sound: "Ti" }],
    translit: "Paat-ti", english: "Grandmother", hint: "Grandma who cooks delicious family treats."
  },
  {
    id: "l3_11", level: 3, tamil: "கிண்ணம்", letters: ["கி", "ண்", "ண", "ம்"],
    breakdowns: [{ letter: "கி", root: "க் + இ", sound: "Ki" }, { letter: "ண்", root: "Pure Consonant (மெய்)", sound: "N" }, { letter: "ண", root: "ண் + அ", sound: "Nam" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Kin-nam", english: "Bowl / Cup", hint: "Used to hold soup, cereal, or desserts."
  },
  {
    id: "l3_12", level: 3, tamil: "சிட்டு", letters: ["சி", "ட்", "டு"],
    breakdowns: [{ letter: "சி", root: "ச் + இ", sound: "Si" }, { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" }, { letter: "டு", root: "ட் + உ", sound: "Tu" }],
    translit: "Sit-tu", english: "Sparrow / Small Bird", hint: "A cheerful little bird that chirps on branches."
  },
  {
    id: "l3_13", level: 3, tamil: "சிப்பி", letters: ["சி", "ப்", "பி"],
    breakdowns: [{ letter: "சி", root: "ச் + இ", sound: "Si" }, { letter: "ப்", root: "Pure Consonant (மெய்)", sound: "P" }, { letter: "பி", root: "ப் + இ", sound: "Pi" }],
    translit: "Sip-pi", english: "Seashell / Oyster", hint: "Found on the sandy seashore with a pearl inside."
  },
  {
    id: "l3_14", level: 3, tamil: "கிணறு", letters: ["கி", "ண", "று"],
    breakdowns: [{ letter: "கி", root: "க் + இ", sound: "Ki" }, { letter: "ண", root: "ண் + அ", sound: "Na" }, { letter: "று", root: "ற் + உ", sound: "Ru" }],
    translit: "Ki-na-ru", english: "Water Well", hint: "Deep stone well where fresh water is drawn with a bucket."
  },
  {
    id: "l3_15", level: 3, tamil: "பனி", letters: ["ப", "னி"],
    breakdowns: [{ letter: "ப", root: "ப் + அ", sound: "Pa" }, { letter: "னி", root: "ன் + இ", sound: "Ni" }],
    translit: "Pa-ni", english: "Mist / Snow", hint: "Cold dewy mist on winter mornings."
  },
  {
    id: "l3_16", level: 3, tamil: "கீரை", letters: ["கீ", "ரை"],
    breakdowns: [{ letter: "கீ", root: "க் + ஈ", sound: "Kee" }, { letter: "ரை", root: "ர் + ஐ", sound: "Rai" }],
    translit: "Kee-rai", english: "Spinach / Greens", hint: "Healthy green leafy vegetables full of vitamins."
  },
  {
    id: "l3_17", level: 3, tamil: "சீனி", letters: ["சீ", "னி"],
    breakdowns: [{ letter: "சீ", root: "ச் + ஈ", sound: "See" }, { letter: "னி", root: "ன் + இ", sound: "Ni" }],
    translit: "See-ni", english: "Sugar", hint: "White sweet crystals added to milk and sweets."
  },
  {
    id: "l3_18", level: 3, tamil: "வீணை", letters: ["வீ", "ணை"],
    breakdowns: [{ letter: "வீ", root: "வ் + ஈ", sound: "Vee" }, { letter: "ணை", root: "ண் + ஐ", sound: "Nai" }],
    translit: "Vee-nai", english: "Veena (Musical Instrument)", hint: "A traditional classical string instrument of South India."
  },
  {
    id: "l3_19", level: 3, tamil: "இட்லி", letters: ["இ", "ட்", "லி"],
    breakdowns: [{ letter: "இ", root: "Pure Vowel (உயிர்)", sound: "I" }, { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" }, { letter: "லி", root: "ல் + இ", sound: "Li" }],
    translit: "It-li", english: "Idli", hint: "Soft, fluffy steamed rice cakes eaten with chutney."
  },
  {
    id: "l3_20", level: 3, tamil: "விண்மீன்", letters: ["வி", "ண்", "மீ", "ன்"],
    breakdowns: [{ letter: "வி", root: "வ் + இ", sound: "Vi" }, { letter: "ண்", root: "Pure Consonant (மெய்)", sound: "N" }, { letter: "மீ", root: "ம் + ஈ", sound: "Meen" }, { letter: "ன்", root: "Pure Consonant (மெய்)", sound: "N" }],
    translit: "Vin-meen", english: "Star", hint: "Twinkling celestial light shining in outer space."
  },

  // ==================== LEVEL 4: CURVES & COMPLEX MODIFIERS ====================
  {
    id: "l4_1", level: 4, tamil: "குடை", letters: ["கு", "டை"],
    breakdowns: [{ letter: "கு", root: "க் + உ", sound: "Ku" }, { letter: "டை", root: "ட் + ஐ", sound: "Dai" }],
    translit: "Ku-dai", english: "Umbrella", hint: "Shields you from falling raindrops and hot sun."
  },
  {
    id: "l4_2", level: 4, tamil: "பூனை", letters: ["பூ", "னை"],
    breakdowns: [{ letter: "பூ", root: "ப் + ஊ", sound: "Poo" }, { letter: "னை", root: "ன் + ஐ", sound: "Nai" }],
    translit: "Poo-nai", english: "Cat", hint: "Whiskered domestic pet that meows and purrs."
  },
  {
    id: "l4_3", level: 4, tamil: "யானை", letters: ["யா", "னை"],
    breakdowns: [{ letter: "யா", root: "ய் + ஆ", sound: "Yaa" }, { letter: "னை", root: "ன் + ஐ", sound: "Nai" }],
    translit: "Yaa-nai", english: "Elephant", hint: "Magnificent gentle giant with big ears and a long trunk."
  },
  {
    id: "l4_4", level: 4, tamil: "வீடு", letters: ["வீ", "டு"],
    breakdowns: [{ letter: "வீ", root: "வ் + ஈ", sound: "Vee" }, { letter: "டு", root: "ட் + உ", sound: "Du" }],
    translit: "Vee-du", english: "House / Home", hint: "Where your family stays safely together."
  },
  {
    id: "l4_5", level: 4, tamil: "முட்டை", letters: ["மு", "ட்", "டை"],
    breakdowns: [{ letter: "மு", root: "ம் + உ", sound: "Mu" }, { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" }, { letter: "டை", root: "ட் + ஐ", sound: "Tai" }],
    translit: "Mut-tai", english: "Egg", hint: "Oval shaped food laid by birds and hens."
  },
  {
    id: "l4_6", level: 4, tamil: "தவளை", letters: ["த", "வ", "ளை"],
    breakdowns: [{ letter: "த", root: "த் + அ", sound: "Tha" }, { letter: "வ", root: "வ் + அ", sound: "Va" }, { letter: "ளை", root: "ள் + ஐ", sound: "Lai" }],
    translit: "Tha-va-lai", english: "Frog", hint: "An amphibious creature that hops near lily pads."
  },
  {
    id: "l4_7", level: 4, tamil: "குதிரை", letters: ["கு", "தி", "ரை"],
    breakdowns: [{ letter: "கு", root: "க் + உ", sound: "Ku" }, { letter: "தி", root: "த் + இ", sound: "Dhi" }, { letter: "ரை", root: "ர் + ஐ", sound: "Rai" }],
    translit: "Ku-dhi-rai", english: "Horse", hint: "A noble animal that trots and gallops swiftly."
  },
  {
    id: "l4_8", level: 4, tamil: "தோசை", letters: ["தோ", "சை"],
    breakdowns: [{ letter: "தோ", root: "த் + ஓ", sound: "Tho" }, { letter: "சை", root: "ச் + ஐ", sound: "Sai" }],
    translit: "Tho-sai", english: "Dosa", hint: "Golden crispy South Indian crepe served with chutney."
  },
  {
    id: "l4_9", level: 4, tamil: "முயல்", letters: ["மு", "ய", "ல்"],
    breakdowns: [{ letter: "மு", root: "ம் + உ", sound: "Mu" }, { letter: "ய", root: "ய் + அ", sound: "Ya" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Mu-yal", english: "Rabbit / Bunny", hint: "Fluffy animal with long ears that loves fresh carrots."
  },
  {
    id: "l4_10", level: 4, tamil: "மயில்", letters: ["ம", "யி", "ல்"],
    breakdowns: [{ letter: "ம", root: "ம் + அ", sound: "Ma" }, { letter: "யி", root: "ய் + இ", sound: "Yi" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Ma-yil", english: "Peacock", hint: "National bird of India that dances with gorgeous blue-green feathers."
  },
  {
    id: "l4_11", level: 4, tamil: "கோழி", letters: ["கோ", "ழி"],
    breakdowns: [{ letter: "கோ", root: "க் + ஓ", sound: "Koe" }, { letter: "ழி", root: "ழ் + இ", sound: "Zhi" }],
    translit: "Koe-zhi", english: "Hen / Chicken", hint: "Farm bird that clucks and lays fresh eggs."
  },
  {
    id: "l4_12", level: 4, tamil: "குரங்கு", letters: ["கு", "ர", "ங்", "கு"],
    breakdowns: [{ letter: "கு", root: "க் + உ", sound: "Ku" }, { letter: "ர", root: "ர் + அ", sound: "Rang" }, { letter: "ங்", root: "Pure Consonant (மெய்)", sound: "Ng" }, { letter: "கு", root: "க் + உ", sound: "Gu" }],
    translit: "Ku-rang-gu", english: "Monkey", hint: "Playful creature that swings from tree branches."
  },
  {
    id: "l4_13", level: 4, tamil: "ஆந்தை", letters: ["ஆ", "ந்", "தை"],
    breakdowns: [{ letter: "ஆ", root: "Pure Vowel (உயிர்)", sound: "Aa" }, { letter: "ந்", root: "Pure Consonant (மெய்)", sound: "N" }, { letter: "தை", root: "த் + ஐ", sound: "Thai" }],
    translit: "Aan-thai", english: "Owl", hint: "A wise nocturnal bird that hoots softly in the night."
  },
  {
    id: "l4_14", level: 4, tamil: "ஆமை", letters: ["ஆ", "மை"],
    breakdowns: [{ letter: "ஆ", root: "Pure Vowel (உயிர்)", sound: "Aa" }, { letter: "மை", root: "ம் + ஐ", sound: "Mai" }],
    translit: "Aa-mai", english: "Turtle / Tortoise", hint: "Carries a hard protective shell and moves with patience."
  },
  {
    id: "l4_15", level: 4, tamil: "பந்து", letters: ["ப", "ந்", "து"],
    breakdowns: [{ letter: "ப", root: "ப் + அ", sound: "Pan" }, { letter: "ந்", root: "Pure Consonant (மெய்)", sound: "N" }, { letter: "து", root: "த் + உ", sound: "Thu" }],
    translit: "Pan-thu", english: "Ball", hint: "Spherical toy used in soccer, cricket, and basketball."
  },
  {
    id: "l4_16", level: 4, tamil: "சூரியன்", letters: ["சூ", "ரி", "ய", "ன்"],
    breakdowns: [{ letter: "சூ", root: "ச் + ஊ", sound: "Soo" }, { letter: "ரி", root: "ர் + இ", sound: "Ri" }, { letter: "ய", root: "ய் + அ", sound: "Yan" }, { letter: "ன்", root: "Pure Consonant (மெய்)", sound: "N" }],
    translit: "Soo-ri-yan", english: "Sun", hint: "The bright star that illuminates our daytime with warmth."
  },
  {
    id: "l4_17", level: 4, tamil: "ரோஜா", letters: ["ரோ", "ஜா"],
    breakdowns: [{ letter: "ரோ", root: "ர் + ஓ", sound: "Ro" }, { letter: "ஜா", root: "ஜ் + ஆ", sound: "Jaa" }],
    translit: "Ro-jaa", english: "Rose", hint: "A fragrant red flower with velvety petals."
  },
  {
    id: "l4_18", level: 4, tamil: "சோறு", letters: ["சோ", "று"],
    breakdowns: [{ letter: "சோ", root: "ச் + ஓ", sound: "So" }, { letter: "று", root: "ற் + உ", sound: "Ru" }],
    translit: "So-ru", english: "Cooked Rice", hint: "Wholesome steamed white grain staple of South Indian meals."
  },
  {
    id: "l4_19", level: 4, tamil: "புறா", letters: ["பு", "றா"],
    breakdowns: [{ letter: "பு", root: "ப் + உ", sound: "Pu" }, { letter: "றா", root: "ற் + ஆ", sound: "Raa" }],
    translit: "Pu-raa", english: "Pigeon / Dove", hint: "A peaceful bird that coos gently on window sills."
  },
  {
    id: "l4_20", level: 4, tamil: "கூடு", letters: ["கூ", "டு"],
    breakdowns: [{ letter: "கூ", root: "க் + ஊ", sound: "Koo" }, { letter: "டு", root: "ட் + உ", sound: "Du" }],
    translit: "Koo-du", english: "Bird Nest", hint: "Cozy twigs where birds lay eggs and raise their chicks."
  },

  // ==================== LEVEL 5: SOUND PAIRS & CONTRASTS (ஒலி வேறுபாடுகள்) ====================
  {
    id: "l5_1", level: 5, tamil: "கல்", letters: ["க", "ல்"],
    breakdowns: [{ letter: "க", root: "Consonant + Vowel", sound: "Ka" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Kal", english: "Stone", hint: "Hard and found on the ground or in river beds."
  },
  {
    id: "l5_2", level: 5, tamil: "கால்", letters: ["கா", "ல்"],
    breakdowns: [{ letter: "கா", root: "Consonant + Vowel", sound: "Kaa" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Kaal", english: "Leg / Foot", hint: "You use your legs to stand, walk, and run."
  },
  {
    id: "l5_3", level: 5, tamil: "பல்", letters: ["ப", "ல்"],
    breakdowns: [{ letter: "ப", root: "Consonant + Vowel", sound: "Pa" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Pal", english: "Tooth", hint: "You brush them every morning."
  },
  {
    id: "l5_4", level: 5, tamil: "பால்", letters: ["பா", "ல்"],
    breakdowns: [{ letter: "பா", root: "Consonant + Vowel", sound: "Paa" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Paal", english: "Milk", hint: "Healthy white drink that makes bones strong."
  },
  {
    id: "l5_5", level: 5, tamil: "கொடி", letters: ["கொ", "டி"],
    breakdowns: [{ letter: "கொ", root: "Consonant + Vowel", sound: "Ko" }, { letter: "டி", root: "Consonant + Vowel", sound: "Di" }],
    translit: "Ko-di", english: "Flag / Banner", hint: "Flutters proudly in the wind on a pole."
  },
  {
    id: "l5_6", level: 5, tamil: "கோடி", letters: ["கோ", "டி"],
    breakdowns: [{ letter: "கோ", root: "Consonant + Vowel", sound: "Koa" }, { letter: "டி", root: "Consonant + Vowel", sound: "Di" }],
    translit: "Koo-di", english: "10 Millions / Crore", hint: "A very large number equal to ten million."
  },
  {
    id: "l5_7", level: 5, tamil: "மடி", letters: ["ம", "டி"],
    breakdowns: [{ letter: "ம", root: "Consonant + Vowel", sound: "Ma" }, { letter: "டி", root: "Consonant + Vowel", sound: "Di" }],
    translit: "Ma-di", english: "Lap / Fold", hint: "Comfortable place to sit on mom's or dad's knees."
  },
  {
    id: "l5_8", level: 5, tamil: "மாடி", letters: ["மா", "டி"],
    breakdowns: [{ letter: "மா", root: "Consonant + Vowel", sound: "Maa" }, { letter: "டி", root: "Consonant + Vowel", sound: "Di" }],
    translit: "Maa-di", english: "Upstairs / Balcony", hint: "The upper floor or rooftop of a house."
  },
  {
    id: "l5_9", level: 5, tamil: "கை", letters: ["கை"],
    breakdowns: [{ letter: "கை", root: "Consonant + Vowel", sound: "Kai" }],
    translit: "Kai", english: "Hand / Arm", hint: "You hold a pencil, write, and clap with this."
  },
  {
    id: "l5_10", level: 5, tamil: "காய்", letters: ["கா", "ய்"],
    breakdowns: [{ letter: "கா", root: "Consonant + Vowel", sound: "Kaa" }, { letter: "ய்", root: "Pure Consonant (மெய்)", sound: "Y" }],
    translit: "Kaay", english: "Vegetable", hint: "Crisp, fresh vegetable used to cook delicious food."
  },
  {
    id: "l5_11", level: 5, tamil: "பை", letters: ["பை"],
    breakdowns: [{ letter: "பை", root: "Consonant + Vowel", sound: "Pai" }],
    translit: "Pai", english: "Bag", hint: "A schoolbag or shopping tote for carrying things."
  },
  {
    id: "l5_12", level: 5, tamil: "பாய்", letters: ["பா", "ய்"],
    breakdowns: [{ letter: "பா", root: "Consonant + Vowel", sound: "Paa" }, { letter: "ய்", root: "Pure Consonant (மெய்)", sound: "Y" }],
    translit: "Paay", english: "Mat", hint: "Woven grass mat spread on the floor to sit or rest."
  },
  {
    id: "l5_13", level: 5, tamil: "ஒலி", letters: ["ஒ", "லி"],
    breakdowns: [{ letter: "ஒ", root: "Vowel (உயிர்)", sound: "O" }, { letter: "லி", root: "Consonant + Vowel", sound: "Li" }],
    translit: "O-li", english: "Sound / Noise", hint: "What you hear with your ears, like music or a chime."
  },
  {
    id: "l5_14", level: 5, tamil: "ஒளி", letters: ["ஒ", "ளி"],
    breakdowns: [{ letter: "ஒ", root: "Vowel (உயிர்)", sound: "O" }, { letter: "ளி", root: "Consonant + Vowel", sound: "Li" }],
    translit: "O-li", english: "Light / Brightness", hint: "Bright glow from the sun or a warm oil lamp."
  },
  {
    id: "l5_15", level: 5, tamil: "வலி", letters: ["வ", "லி"],
    breakdowns: [{ letter: "வ", root: "Consonant + Vowel", sound: "Va" }, { letter: "லி", root: "Consonant + Vowel", sound: "Li" }],
    translit: "Va-li", english: "Pain / Ache", hint: "An ouch sensation when you get hurt or stub your toe."
  },
  {
    id: "l5_16", level: 5, tamil: "வழி", letters: ["வ", "ழி"],
    breakdowns: [{ letter: "வ", root: "Consonant + Vowel", sound: "Va" }, { letter: "ழி", root: "Consonant + Vowel", sound: "Zhi" }],
    translit: "Va-zhi", english: "Path / Route", hint: "A walkway, road, or trail that leads somewhere."
  },
  {
    id: "l5_17", level: 5, tamil: "மலை", letters: ["ம", "லை"],
    breakdowns: [{ letter: "ம", root: "Consonant + Vowel", sound: "Ma" }, { letter: "லை", root: "Consonant + Vowel", sound: "Lai" }],
    translit: "Ma-lai", english: "Mountain / Hill", hint: "A towering rocky peak rising high into the clouds."
  },
  {
    id: "l5_18", level: 5, tamil: "மழை", letters: ["ம", "ழை"],
    breakdowns: [{ letter: "ம", root: "Consonant + Vowel", sound: "Ma" }, { letter: "ழை", root: "Consonant + Vowel", sound: "Zhai" }],
    translit: "Ma-zhai", english: "Rain", hint: "Water droplets falling gently from gray storm clouds."
  },
  {
    id: "l5_19", level: 5, tamil: "வலை", letters: ["வ", "லை"],
    breakdowns: [{ letter: "வ", root: "Consonant + Vowel", sound: "Va" }, { letter: "லை", root: "Consonant + Vowel", sound: "Lai" }],
    translit: "Va-lai", english: "Net / Web", hint: "Woven mesh used by fishermen or spun by spiders."
  },
  {
    id: "l5_20", level: 5, tamil: "வாழை", letters: ["வா", "ழை"],
    breakdowns: [{ letter: "வா", root: "Consonant + Vowel", sound: "Vaa" }, { letter: "ழை", root: "Consonant + Vowel", sound: "Zhai" }],
    translit: "Vaa-zhai", english: "Plantain / Banana Tree", hint: "Tropical tree with broad green leaves and sweet yellow fruit."
  },
  {
    id: "l5_21", level: 5, tamil: "பல்லி", letters: ["ப", "ல்", "லி"],
    breakdowns: [{ letter: "ப", root: "Consonant + Vowel", sound: "Pa" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }, { letter: "லி", root: "Consonant + Vowel", sound: "Li" }],
    translit: "Pal-li", english: "Lizard (Gecko)", hint: "Small harmless reptile that walks on walls and eats bugs."
  },
  {
    id: "l5_22", level: 5, tamil: "பள்ளி", letters: ["ப", "ள்", "ளி"],
    breakdowns: [{ letter: "ப", root: "Consonant + Vowel", sound: "Pa" }, { letter: "ள்", root: "Pure Consonant (மெய்)", sound: "L" }, { letter: "ளி", root: "Consonant + Vowel", sound: "Li" }],
    translit: "Pal-li", english: "School", hint: "Where kids go every morning to learn and make friends."
  },
  {
    id: "l5_23", level: 5, tamil: "இலை", letters: ["இ", "லை"],
    breakdowns: [{ letter: "இ", root: "Vowel (உயிர்)", sound: "I" }, { letter: "லை", root: "Consonant + Vowel", sound: "Lai" }],
    translit: "I-lai", english: "Leaf", hint: "Green flat part of a plant that soaks in sunshine."
  },
  {
    id: "l5_24", level: 5, tamil: "இல்லை", letters: ["இ", "ல்", "லை"],
    breakdowns: [{ letter: "இ", root: "Vowel (உயிர்)", sound: "I" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }, { letter: "லை", root: "Consonant + Vowel", sound: "Lai" }],
    translit: "Il-lai", english: "No / Not", hint: "A word meaning none, absent, or no."
  },
  // ==================== LEVEL 6: EVERYDAY WORDS & ACTIONS (சொற்களும் செயல்களும்) ====================
  {
    id: "l6_1", level: 6, tamil: "கதவு", letters: ["க", "த", "வு"],
    breakdowns: [{ letter: "க", root: "Consonant + Vowel", sound: "Ka" }, { letter: "த", root: "Consonant + Vowel", sound: "Tha" }, { letter: "வு", root: "Consonant + Vowel", sound: "Vu" }],
    translit: "Ka-dha-vu", english: "Door", hint: "You turn the handle and open this to enter a room."
  },
  {
    id: "l6_2", level: 6, tamil: "ரூபாய்", letters: ["ரூ", "பா", "ய்"],
    breakdowns: [{ letter: "ரூ", root: "Consonant + Vowel", sound: "Roo" }, { letter: "பா", root: "Consonant + Vowel", sound: "Paa" }, { letter: "ய்", root: "Pure Consonant (மெய்)", sound: "Y" }],
    translit: "Roo-paay", english: "Rupee", hint: "Indian currency unit used to buy toys and treats."
  },
  {
    id: "l6_3", level: 6, tamil: "தட்டு", letters: ["த", "ட்", "டு"],
    breakdowns: [{ letter: "த", root: "Consonant + Vowel", sound: "Tha" }, { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" }, { letter: "டு", root: "Consonant + Vowel", sound: "Du" }],
    translit: "That-tu", english: "Plate / Dish", hint: "Round shallow dish on which food is served."
  },
  {
    id: "l6_4", level: 6, tamil: "பசு", letters: ["ப", "சு"],
    breakdowns: [{ letter: "ப", root: "Consonant + Vowel", sound: "Pa" }, { letter: "சு", root: "Consonant + Vowel", sound: "Su" }],
    translit: "Pa-su", english: "Cow", hint: "Gentle holy farm animal that gives delicious milk."
  },
  {
    id: "l6_5", level: 6, tamil: "கருப்பு", letters: ["க", "ரு", "ப்", "பு"],
    breakdowns: [{ letter: "க", root: "Consonant + Vowel", sound: "Ka" }, { letter: "ரு", root: "Consonant + Vowel", sound: "Ru" }, { letter: "ப்", root: "Pure Consonant (மெய்)", sound: "P" }, { letter: "பு", root: "Consonant + Vowel", sound: "Pu" }],
    translit: "Ka-rup-pu", english: "Black (Color)", hint: "The dark shade of the midnight sky or a crow's feathers."
  },
  {
    id: "l6_6", level: 6, tamil: "மூன்று", letters: ["மூ", "ன்", "று"],
    breakdowns: [{ letter: "மூ", root: "Consonant + Vowel", sound: "Moo" }, { letter: "ன்", root: "Pure Consonant (மெய்)", sound: "N" }, { letter: "று", root: "Consonant + Vowel", sound: "Ru" }],
    translit: "Moon-ru", english: "Three", hint: "The number that comes right after two: 1, 2, 3!"
  },
  {
    id: "l6_7", level: 6, tamil: "கழுத்து", letters: ["க", "ழு", "த்", "து"],
    breakdowns: [{ letter: "க", root: "Consonant + Vowel", sound: "Ka" }, { letter: "ழு", root: "Consonant + Vowel", sound: "Zhu" }, { letter: "த்", root: "Pure Consonant (மெய்)", sound: "Th" }, { letter: "து", root: "Consonant + Vowel", sound: "Thu" }],
    translit: "Ka-zhuth-thu", english: "Neck", hint: "Connects your head to your shoulders."
  },
  {
    id: "l6_8", level: 6, tamil: "கழுகு", letters: ["க", "ழு", "கு"],
    breakdowns: [{ letter: "க", root: "Consonant + Vowel", sound: "Ka" }, { letter: "ழு", root: "Consonant + Vowel", sound: "Zhu" }, { letter: "கு", root: "Consonant + Vowel", sound: "Ku" }],
    translit: "Ka-zhu-gu", english: "Eagle", hint: "Majestic bird of prey with sharp eyesight flying high."
  },
  {
    id: "l6_9", level: 6, tamil: "தூக்கம்", letters: ["தூ", "க்", "க", "ம்"],
    breakdowns: [{ letter: "தூ", root: "Consonant + Vowel", sound: "Thoo" }, { letter: "க்", root: "Pure Consonant (மெய்)", sound: "K" }, { letter: "க", root: "Consonant + Vowel", sound: "Ka" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Thook-kam", english: "Sleep / Slumber", hint: "Restful snooze in bed at night to dream and recharge."
  },
  {
    id: "l6_10", level: 6, tamil: "நூறு", letters: ["நூ", "று"],
    breakdowns: [{ letter: "நூ", root: "Consonant + Vowel", sound: "Noo" }, { letter: "று", root: "Consonant + Vowel", sound: "Ru" }],
    translit: "Noo-ru", english: "One Hundred", hint: "The number 100, equal to ten tens."
  },
  {
    id: "l6_11", level: 6, tamil: "கூடை", letters: ["கூ", "டை"],
    breakdowns: [{ letter: "கூ", root: "Consonant + Vowel", sound: "Koo" }, { letter: "டை", root: "Consonant + Vowel", sound: "Dai" }],
    translit: "Koo-dai", english: "Basket", hint: "Woven container with a handle to carry fruit or flowers."
  },
  {
    id: "l6_12", level: 6, tamil: "சூடு", letters: ["சூ", "டு"],
    breakdowns: [{ letter: "சூ", root: "Consonant + Vowel", sound: "Soo" }, { letter: "டு", root: "Consonant + Vowel", sound: "Du" }],
    translit: "Soo-du", english: "Heat / Warmth", hint: "Warm feeling from fresh hot food or the midday sun."
  },
  {
    id: "l6_13", level: 6, tamil: "கழுதை", letters: ["க", "ழு", "தை"],
    breakdowns: [{ letter: "க", root: "Consonant + Vowel", sound: "Ka" }, { letter: "ழு", root: "Consonant + Vowel", sound: "Zhu" }, { letter: "தை", root: "Consonant + Vowel", sound: "Thai" }],
    translit: "Ka-zhu-dhai", english: "Donkey", hint: "Hardworking animal with long ears that brays 'hee-haw'."
  },
  {
    id: "l6_14", level: 6, tamil: "தோட்டம்", letters: ["தோ", "ட்", "ட", "ம்"],
    breakdowns: [{ letter: "தோ", root: "Consonant + Vowel", sound: "Thoa" }, { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" }, { letter: "ட", root: "Consonant + Vowel", sound: "Da" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Thoot-tam", english: "Garden", hint: "A lovely outdoor plot filled with plants and blooming flowers."
  },
  {
    id: "l6_15", level: 6, tamil: "சட்டை", letters: ["ச", "ட்", "டை"],
    breakdowns: [{ letter: "ச", root: "Consonant + Vowel", sound: "Sa" }, { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" }, { letter: "டை", root: "Consonant + Vowel", sound: "Dai" }],
    translit: "Sat-tai", english: "Shirt", hint: "Garment worn on your upper body with sleeves and collar."
  },
  {
    id: "l6_16", level: 6, tamil: "பெட்டி", letters: ["பெ", "ட்", "டி"],
    breakdowns: [{ letter: "பெ", root: "Consonant + Vowel", sound: "Pe" }, { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" }, { letter: "டி", root: "Consonant + Vowel", sound: "Di" }],
    translit: "Pet-ti", english: "Box / Trunk", hint: "Sturdy container with a lid used for storage."
  },
  {
    id: "l6_17", level: 6, tamil: "கத்தரிக்காய்", letters: ["க", "த்", "த", "ரி", "க்", "கா", "ய்"],
    breakdowns: [{ letter: "க", root: "Consonant + Vowel", sound: "Ka" }, { letter: "த்", root: "Pure Consonant (மெய்)", sound: "Th" }, { letter: "த", root: "Consonant + Vowel", sound: "Tha" }, { letter: "ரி", root: "Consonant + Vowel", sound: "Ri" }, { letter: "க்", root: "Pure Consonant (மெய்)", sound: "K" }, { letter: "கா", root: "Consonant + Vowel", sound: "Kaa" }, { letter: "ய்", root: "Pure Consonant (மெய்)", sound: "Y" }],
    translit: "Kath-tha-rik-kaay", english: "Eggplant (Brinjal)", hint: "Glossy purple vegetable cooked in savory curries."
  },
  {
    id: "l6_18", level: 6, tamil: "எறும்பு", letters: ["எ", "று", "ம்", "பு"],
    breakdowns: [{ letter: "எ", root: "Vowel (உயிர்)", sound: "E" }, { letter: "று", root: "Consonant + Vowel", sound: "Ru" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }, { letter: "பு", root: "Consonant + Vowel", sound: "Pu" }],
    translit: "E-rum-bu", english: "Ant", hint: "Tiny industrious insect that marches in lines and loves sugar."
  },
  {
    id: "l6_19", level: 6, tamil: "தேங்காய்", letters: ["தே", "ங்", "கா", "ய்"],
    breakdowns: [{ letter: "தே", root: "Consonant + Vowel", sound: "Thae" }, { letter: "ங்", root: "Pure Consonant (மெய்)", sound: "Ng" }, { letter: "கா", root: "Consonant + Vowel", sound: "Kaa" }, { letter: "ய்", root: "Pure Consonant (மெய்)", sound: "Y" }],
    translit: "Thaeng-kaay", english: "Coconut", hint: "Hard brown shell with sweet water and white kernel inside."
  },
  {
    id: "l6_20", level: 6, tamil: "வடை", letters: ["வ", "டை"],
    breakdowns: [{ letter: "வ", root: "Consonant + Vowel", sound: "Va" }, { letter: "டை", root: "Consonant + Vowel", sound: "Dai" }],
    translit: "Va-dai", english: "Vada (Fritter)", hint: "Crispy golden donut-shaped savory treat dipped in sambar."
  },
  {
    id: "l6_21", level: 6, tamil: "ஆடு", letters: ["ஆ", "டு"],
    breakdowns: [{ letter: "ஆ", root: "Long Vowel (நெடில்)", sound: "Aa" }, { letter: "டு", root: "Consonant + Vowel", sound: "Du" }],
    translit: "Aa-du", english: "Goat", hint: "Playful farm animal that chews grass and says 'maa-maa'."
  },
  {
    id: "l6_22", level: 6, tamil: "பூ", letters: ["பூ"],
    breakdowns: [{ letter: "பூ", root: "Consonant + Vowel", sound: "Poo" }],
    translit: "Poo", english: "Flower", hint: "Fragrant, colorful bloom in a garden or garland."
  },
  {
    id: "l6_23", level: 6, tamil: "வாங்கு", letters: ["வா", "ங்", "கு"],
    breakdowns: [{ letter: "வா", root: "Consonant + Vowel", sound: "Vaa" }, { letter: "ங்", root: "Pure Consonant (மெய்)", sound: "Ng" }, { letter: "கு", root: "Consonant + Vowel", sound: "Ku" }],
    translit: "Vaan-gu", english: "(To) Buy", hint: "Action of purchasing goods with money."
  },
  {
    id: "l6_24", level: 6, tamil: "எழுது", letters: ["எ", "ழு", "து"],
    breakdowns: [{ letter: "எ", root: "Vowel (உயிர்)", sound: "E" }, { letter: "ழு", root: "Consonant + Vowel", sound: "Zhu" }, { letter: "து", root: "Consonant + Vowel", sound: "Thu" }],
    translit: "E-zhu-dhu", english: "(To) Write", hint: "Action of putting pencil to paper to form words."
  },
  {
    id: "l6_25", level: 6, tamil: "வேலை", letters: ["வே", "லை"],
    breakdowns: [{ letter: "வே", root: "Consonant + Vowel", sound: "Vae" }, { letter: "லை", root: "Consonant + Vowel", sound: "Lai" }],
    translit: "Vae-lai", english: "Work / Task", hint: "Chore or duty you complete with effort."
  },
  {
    id: "l6_26", level: 6, tamil: "பாடு", letters: ["பா", "டு"],
    breakdowns: [{ letter: "பா", root: "Consonant + Vowel", sound: "Paa" }, { letter: "டு", root: "Consonant + Vowel", sound: "Du" }],
    translit: "Paa-du", english: "(To) Sing", hint: "Action of making melodious musical tunes with your voice."
  },
  {
    id: "l6_27", level: 6, tamil: "சாப்பிடு", letters: ["சா", "ப்", "பி", "டு"],
    breakdowns: [{ letter: "சா", root: "Consonant + Vowel", sound: "Saa" }, { letter: "ப்", root: "Pure Consonant (மெய்)", sound: "P" }, { letter: "பி", root: "Consonant + Vowel", sound: "Pi" }, { letter: "டு", root: "Consonant + Vowel", sound: "Du" }],
    translit: "Saap-pi-du", english: "(To) Eat", hint: "Action of chewing and enjoying delicious food."
  },
  {
    id: "l6_28", level: 6, tamil: "நில்", letters: ["நி", "ல்"],
    breakdowns: [{ letter: "நி", root: "Consonant + Vowel", sound: "Ni" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Nil", english: "(To) Stand", hint: "Action of being upright on your feet without moving."
  },
  {
    id: "l6_29", level: 6, tamil: "நட", letters: ["ந", "ட"],
    breakdowns: [{ letter: "ந", root: "Consonant + Vowel", sound: "Na" }, { letter: "ட", root: "Consonant + Vowel", sound: "Da" }],
    translit: "Na-da", english: "(To) Walk", hint: "Action of taking steps forward on your feet."
  },
  {
    id: "l6_30", level: 6, tamil: "நடி", letters: ["ந", "டி"],
    breakdowns: [{ letter: "ந", root: "Consonant + Vowel", sound: "Na" }, { letter: "டி", root: "Consonant + Vowel", sound: "Di" }],
    translit: "Na-di", english: "(To) Act", hint: "Action of performing a character in a play or drama."
  },
  {
    id: "l6_31", level: 6, tamil: "உட்கார்", letters: ["உ", "ட்", "கா", "ர்"],
    breakdowns: [{ letter: "உ", root: "Vowel (உயிர்)", sound: "U" }, { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" }, { letter: "கா", root: "Consonant + Vowel", sound: "Kaa" }, { letter: "ர்", root: "Pure Consonant (மெய்)", sound: "R" }],
    translit: "Ut-kaar", english: "(To) Sit", hint: "Action of resting on a chair or on the floor."
  },
  // ==================== LEVEL 7: SCHOOL & DIALOGUE (பள்ளியும் உரையாடலும்) ====================
  {
    id: "l7_1", level: 7, tamil: "உரையாடல்", letters: ["உ", "ரை", "யா", "ட", "ல்"],
    breakdowns: [{ letter: "உ", root: "Vowel (உயிர்)", sound: "U" }, { letter: "ரை", root: "ர் + ஐ", sound: "Rai" }, { letter: "யா", root: "ய் + ஆ", sound: "Yaa" }, { letter: "ட", root: "ட் + அ", sound: "Da" }, { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "U-rai-yaa-dal", english: "Dialogue / Conversation", hint: "A friendly talk between two people sharing ideas and stories."
  },
  {
    id: "l7_2", level: 7, tamil: "ஆசிரியர்", letters: ["ஆ", "சி", "ரி", "ய", "ர்"],
    breakdowns: [{ letter: "ஆ", root: "Long Vowel (நெடில்)", sound: "Aa" }, { letter: "சி", root: "ச் + இ", sound: "Si" }, { letter: "ரி", root: "ர் + இ", sound: "Ri" }, { letter: "ய", root: "ய் + அ", sound: "Ya" }, { letter: "ர்", root: "Pure Consonant (மெய்)", sound: "R" }],
    translit: "Aa-si-ri-yar", english: "Teacher", hint: "A caring guide at school who teaches reading, math, and knowledge."
  },
  {
    id: "l7_3", level: 7, tamil: "நண்பன்", letters: ["ந", "ண்", "ப", "ன்"],
    breakdowns: [{ letter: "ந", root: "ந் + அ", sound: "Na" }, { letter: "ண்", root: "Pure Consonant (மெய்)", sound: "N" }, { letter: "ப", root: "ப் + அ", sound: "Pa" }, { letter: "ன்", root: "Pure Consonant (மெய்)", sound: "N" }],
    translit: "Nan-ban", english: "Friend / Buddy", hint: "A buddy you talk, play, and share secrets with."
  },
  {
    id: "l7_4", level: 7, tamil: "வகுப்பு", letters: ["வ", "கு", "ப்", "பு"],
    breakdowns: [{ letter: "வ", root: "வ் + அ", sound: "Va" }, { letter: "கு", root: "க் + உ", sound: "Ku" }, { letter: "ப்", root: "Pure Consonant (மெய்)", sound: "P" }, { letter: "பு", root: "ப் + உ", sound: "Pu" }],
    translit: "Va-gup-pu", english: "Class / Grade", hint: "Your classroom where you learn lessons with schoolmates."
  },
  {
    id: "l7_5", level: 7, tamil: "சாப்பாடு", letters: ["சா", "ப்", "பா", "டு"],
    breakdowns: [{ letter: "சா", root: "ச் + ஆ", sound: "Saa" }, { letter: "ப்", root: "Pure Consonant (மெய்)", sound: "P" }, { letter: "பா", root: "ப் + ஆ", sound: "Paa" }, { letter: "டு", root: "ட் + உ", sound: "Du" }],
    translit: "Saap-paa-du", english: "Food / Meal", hint: "A delicious meal or lunch packed carefully for school."
  },
  {
    id: "l7_6", level: 7, tamil: "நாளை", letters: ["நா", "ளை"],
    breakdowns: [{ letter: "நா", root: "ந் + ஆ", sound: "Naa" }, { letter: "ளை", root: "ள் + ஐ", sound: "Lai" }],
    translit: "Naa-lai", english: "Tomorrow", hint: "The upcoming day right after today."
  },
  {
    id: "l7_7", level: 7, tamil: "இன்று", letters: ["இ", "ன்", "று"],
    breakdowns: [{ letter: "இ", root: "Vowel (உயிர்)", sound: "I" }, { letter: "ன்", root: "Pure Consonant (மெய்)", sound: "N" }, { letter: "று", root: "ற் + உ", sound: "Ru" }],
    translit: "In-ru", english: "Today", hint: "The present day that is happening right now."
  },
  {
    id: "l7_8", level: 7, tamil: "சீக்கிரம்", letters: ["சீ", "க்", "கி", "ர", "ம்"],
    breakdowns: [{ letter: "சீ", root: "ச் + ஈ", sound: "See" }, { letter: "க்", root: "Pure Consonant (மெய்)", sound: "K" }, { letter: "கி", root: "க் + இ", sound: "Ki" }, { letter: "ர", root: "ர் + அ", sound: "Ra" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "See-kki-ram", english: "Early / Soon", hint: "Waking up or doing something quickly without delay."
  },
  {
    id: "l7_9", level: 7, tamil: "நன்றி", letters: ["ந", "ன்", "றி"],
    breakdowns: [{ letter: "ந", root: "ந் + அ", sound: "Na" }, { letter: "ன்", root: "Pure Consonant (மெய்)", sound: "N" }, { letter: "றி", root: "ற் + இ", sound: "Ri" }],
    translit: "Nan-ri", english: "Thanks / Thank You", hint: "Polite word spoken when someone helps or shares with you."
  },
  {
    id: "l7_10", level: 7, tamil: "அட்டை", letters: ["அ", "ட்", "டை"],
    breakdowns: [{ letter: "அ", root: "Vowel (உயிர்)", sound: "A" }, { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" }, { letter: "டை", root: "ட் + ஐ", sound: "Dai" }],
    translit: "At-tai", english: "Card / Flashcard", hint: "A stiff paper flashcard with pictures or words."
  },
  {
    id: "l7_11", level: 7, tamil: "யோசனை", letters: ["யோ", "ச", "னை"],
    breakdowns: [{ letter: "யோ", root: "ய் + ஓ", sound: "Yoa" }, { letter: "ச", root: "ச் + அ", sound: "Sa" }, { letter: "னை", root: "ன் + ஐ", sound: "Nai" }],
    translit: "Yoa-sa-nai", english: "Idea / Thought", hint: "A clever thought or bright suggestion in your mind."
  },
  {
    id: "l7_12", level: 7, tamil: "பொருள்", letters: ["பொ", "ரு", "ள்"],
    breakdowns: [{ letter: "பொ", root: "ப் + ஒ", sound: "Po" }, { letter: "ரு", root: "ர் + உ", sound: "Ru" }, { letter: "ள்", root: "Pure Consonant (மெய்)", sound: "L" }],
    translit: "Po-rul", english: "Thing / Item", hint: "An object or item you pack inside your school bag."
  },
  {
    id: "l7_13", level: 7, tamil: "தேவை", letters: ["தே", "வை"],
    breakdowns: [{ letter: "தே", root: "த் + ஏ", sound: "Thae" }, { letter: "வை", root: "வ் + ஐ", sound: "Vai" }],
    translit: "Thae-vai", english: "Need / Requirement", hint: "Something necessary or useful that you must have."
  },
  {
    id: "l7_14", level: 7, tamil: "பழகு", letters: ["ப", "ழ", "கு"],
    breakdowns: [{ letter: "ப", root: "ப் + அ", sound: "Pa" }, { letter: "ழ", root: "ழ் + அ", sound: "Zha" }, { letter: "கு", root: "க் + உ", sound: "Ku" }],
    translit: "Pa-zha-gu", english: "(To) Practice / Learn", hint: "Doing an activity repeatedly until you get skilled at it."
  },
  {
    id: "l7_15", level: 7, tamil: "ஆரம்பி", letters: ["ஆ", "ர", "ம்", "பி"],
    breakdowns: [{ letter: "ஆ", root: "Long Vowel (நெடில்)", sound: "Aa" }, { letter: "ர", root: "ர் + அ", sound: "Ra" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }, { letter: "பி", root: "ப் + இ", sound: "Pi" }],
    translit: "Aa-ram-bi", english: "(To) Begin / Start", hint: "Taking the very first step to start an activity."
  },
  {
    id: "l7_16", level: 7, tamil: "சரிபார்", letters: ["ச", "ரி", "பா", "ர்"],
    breakdowns: [{ letter: "ச", root: "ச் + அ", sound: "Sa" }, { letter: "ரி", root: "ர் + இ", sound: "Ri" }, { letter: "பா", root: "ப் + ஆ", sound: "Paa" }, { letter: "ர்", root: "Pure Consonant (மெய்)", sound: "R" }],
    translit: "Sa-ri-paar", english: "(To) Verify / Check", hint: "Looking carefully over items to ensure nothing is missing."
  },
  {
    id: "l7_17", level: 7, tamil: "இப்பொழுது", letters: ["இ", "ப்", "பொ", "ழு", "து"],
    breakdowns: [{ letter: "இ", root: "Vowel (உயிர்)", sound: "I" }, { letter: "ப்", root: "Pure Consonant (மெய்)", sound: "P" }, { letter: "பொ", root: "ப் + ஒ", sound: "Po" }, { letter: "ழு", root: "ழ் + உ", sound: "Zhu" }, { letter: "து", root: "த் + உ", sound: "Dhu" }],
    translit: "Ip-po-zhu-dhu", english: "Now / At Present", hint: "At this exact moment in time without waiting."
  },
  {
    id: "l7_18", level: 7, tamil: "வேண்டும்", letters: ["வே", "ண்", "டு", "ம்"],
    breakdowns: [{ letter: "வே", root: "வ் + ஏ", sound: "Vae" }, { letter: "ண்", root: "Pure Consonant (மெய்)", sound: "N" }, { letter: "டு", root: "ட் + உ", sound: "Du" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Vaen-dum", english: "Must / Needed", hint: "Expressing something that is required or necessary."
  },
  {
    id: "l7_19", level: 7, tamil: "புத்தகம்", letters: ["பு", "த்", "த", "க", "ம்"],
    breakdowns: [{ letter: "பு", root: "ப் + உ", sound: "Pu" }, { letter: "த்", root: "Pure Consonant (மெய்)", sound: "Th" }, { letter: "த", root: "த் + அ", sound: "Tha" }, { letter: "க", root: "க் + அ", sound: "Ka" }, { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }],
    translit: "Puth-tha-gam", english: "Book", hint: "Printed pages bound together filled with knowledge and stories."
  },
  // Level 7: Additional School & Study Items
  {
    id: "l7_20", level: 7, tamil: "à®à®Ÿà¯à®•à®³à¯", letters: ["à®", "à®Ÿà¯", "à®•", "à®³à¯"],
    breakdowns: [{ letter: "à®", root: "Long Vowel (à®¨à¯†à®Ÿà®¿à®²à¯)", sound: "Ae" }, { letter: "à®Ÿà¯", root: "à®Ÿà¯ + à®‰", sound: "Du" }, { letter: "à®•", root: "à®•à¯ + à®…", sound: "Ka" }, { letter: "à®³à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "L" }],
    translit: "Ae-du-gal", english: "Notebooks / Books", hint: "Sheets or notebooks used for writing and study."
  },
  {
    id: "l7_21", level: 7, tamil: "à®µà®£à¯à®£à®™à¯à®•à®³à¯", letters: ["à®µ", "à®£à¯", "à®£", "à®™à¯", "à®•", "à®³à¯"],
    breakdowns: [{ letter: "à®µ", root: "à®µà¯ + à®…", sound: "Va" }, { letter: "à®£à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }, { letter: "à®£", root: "à®£à¯ + à®…", sound: "Na" }, { letter: "à®™à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "Ng" }, { letter: "à®•", root: "à®•à¯ + à®…", sound: "Ga" }, { letter: "à®³à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "L" }],
    translit: "Van-nang-gal", english: "Colors / Paints", hint: "Bright shades like red, green, and blue for drawing."
  },
  {
    id: "l7_22", level: 7, tamil: "à®Žà®´à¯à®¤à¯à®•à¯‹à®²à¯", letters: ["à®Ž", "à®´à¯", "à®¤à¯", "à®•à¯‹", "à®²à¯"],
    breakdowns: [{ letter: "à®Ž", root: "Vowel (à®‰à®¯à®¿à®°à¯)", sound: "E" }, { letter: "à®´à¯", root: "à®´à¯ + à®‰", sound: "Zhu" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }, { letter: "à®•à¯‹", root: "à®•à¯ + à®“", sound: "Koa" }, { letter: "à®²à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "L" }],
    translit: "E-zhu-dhu-koal", english: "Pen / Pencil", hint: "Writing instrument used to write on paper."
  },
  {
    id: "l7_23", level: 7, tamil: "à®…à®´à®¿à®ªà¯à®ªà®¾à®©à¯", letters: ["à®…", "à®´à®¿", "à®ªà¯", "à®ªà®¾", "à®©à¯"],
    breakdowns: [{ letter: "à®…", root: "Vowel (à®‰à®¯à®¿à®°à¯)", sound: "A" }, { letter: "à®´à®¿", root: "à®´à¯ + à®‡", sound: "Zhi" }, { letter: "à®ªà¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "P" }, { letter: "à®ªà®¾", root: "à®ªà¯ + à®†", sound: "Paa" }, { letter: "à®©à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }],
    translit: "A-zhip-paan", english: "Eraser / Rubber", hint: "Tool used to erase pencil marks neatly."
  },
  {
    id: "l7_24", level: 7, tamil: "à®•à¯‹à®ªà¯à®ªà¯", letters: ["à®•à¯‹", "à®ªà¯", "à®ªà¯"],
    breakdowns: [{ letter: "à®•à¯‹", root: "à®•à¯ + à®“", sound: "Koa" }, { letter: "à®ªà¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "P" }, { letter: "à®ªà¯", root: "à®ªà¯ + à®‰", sound: "Pu" }],
    translit: "Koap-pu", english: "Folder / File", hint: "Keeps drawings, notes, and study papers organized."
  },
  {
    id: "l7_25", level: 7, tamil: "à®¤à®£à¯à®£à¯€à®°à¯", letters: ["à®¤", "à®£à¯", "à®£à¯€", "à®°à¯"],
    breakdowns: [{ letter: "à®¤", root: "à®¤à¯ + à®…", sound: "Tha" }, { letter: "à®£à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }, { letter: "à®£à¯€", root: "à®£à¯ + à®ˆ", sound: "Nee" }, { letter: "à®°à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "R" }],
    translit: "Than-neer", english: "Water", hint: "Refreshing clear drink kept in a school water bottle."
  },

  // ==================== LEVEL 8: OPPOSITES & POSITIONS (à®Žà®¤à®¿à®°à¯à®šà¯ à®šà¯Šà®±à¯à®•à®³à¯à®®à¯ à®¨à®¿à®²à¯ˆà®•à®³à¯à®®à¯) ====================
  {
    id: "l8_1", level: 8, tamil: "à®‰à®¯à®°à®®à¯", letters: ["à®‰", "à®¯", "à®°", "à®®à¯"],
    breakdowns: [{ letter: "à®‰", root: "Vowel (à®‰à®¯à®¿à®°à¯)", sound: "U" }, { letter: "à®¯", root: "à®¯à¯ + à®…", sound: "Ya" }, { letter: "à®°", root: "à®°à¯ + à®…", sound: "Ram" }, { letter: "à®®à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "M" }],
    translit: "U-ya-ram", english: "Tall / Height", hint: "Standing high above the ground like a tall giraffe."
  },
  {
    id: "l8_2", level: 8, tamil: "à®•à¯à®Ÿà¯à®Ÿà¯ˆ", letters: ["à®•à¯", "à®Ÿà¯", "à®Ÿà¯ˆ"],
    breakdowns: [{ letter: "à®•à¯", root: "à®•à¯ + à®‰", sound: "Ku" }, { letter: "à®Ÿà¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "T" }, { letter: "à®Ÿà¯ˆ", root: "à®Ÿà¯ + à®", sound: "Dai" }],
    translit: "Kut-tai", english: "Short / Low height", hint: "Close to the ground, the opposite of tall."
  },
  {
    id: "l8_3", level: 8, tamil: "à®…à®¤à®¿à®•à®®à¯", letters: ["à®…", "à®¤à®¿", "à®•", "à®®à¯"],
    breakdowns: [{ letter: "à®…", root: "Vowel (à®‰à®¯à®¿à®°à¯)", sound: "A" }, { letter: "à®¤à®¿", root: "à®¤à¯ + à®‡", sound: "Dhi" }, { letter: "à®•", root: "à®•à¯ + à®…", sound: "Gam" }, { letter: "à®®à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "M" }],
    translit: "A-dhi-gam", english: "More / Plenty", hint: "A large number or great amount of items."
  },
  {
    id: "l8_4", level: 8, tamil: "à®•à¯à®±à¯ˆà®µà¯", letters: ["à®•à¯", "à®±à¯ˆ", "à®µà¯"],
    breakdowns: [{ letter: "à®•à¯", root: "à®•à¯ + à®‰", sound: "Ku" }, { letter: "à®±à¯ˆ", root: "à®±à¯ + à®", sound: "Rai" }, { letter: "à®µà¯", root: "à®µà¯ + à®‰", sound: "Vu" }],
    translit: "Ku-rai-vu", english: "Less / Few", hint: "A smaller quantity, the opposite of more."
  },
  {
    id: "l8_5", level: 8, tamil: "à®®à¯à®©à¯à®©à®¾à®²à¯", letters: ["à®®à¯", "à®©à¯", "à®©à®¾", "à®²à¯"],
    breakdowns: [{ letter: "à®®à¯", root: "à®®à¯ + à®‰", sound: "Mu" }, { letter: "à®©à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }, { letter: "à®©à®¾", root: "à®©à¯ + à®†", sound: "Naa" }, { letter: "à®²à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "L" }],
    translit: "Mun-naal", english: "In Front / Ahead", hint: "Positioned directly in front of someone or something."
  },
  {
    id: "l8_6", level: 8, tamil: "à®ªà®¿à®©à¯à®©à®¾à®²à¯", letters: ["à®ªà®¿", "à®©à¯", "à®©à®¾", "à®²à¯"],
    breakdowns: [{ letter: "à®ªà®¿", root: "à®ªà¯ + à®‡", sound: "Pi" }, { letter: "à®©à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }, { letter: "à®©à®¾", root: "à®©à¯ + à®†", sound: "Naa" }, { letter: "à®²à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "L" }],
    translit: "Pin-naal", english: "Behind / Back", hint: "Positioned at the rear or back, opposite of front."
  },
  {
    id: "l8_7", level: 8, tamil: "à®®à¯‡à®²à¯‡", letters: ["à®®à¯‡", "à®²à¯‡"],
    breakdowns: [{ letter: "à®®à¯‡", root: "à®®à¯ + à®", sound: "Mae" }, { letter: "à®²à¯‡", root: "à®²à¯ + à®", sound: "Lae" }],
    translit: "Mae-lae", english: "Above / Up", hint: "High up in the air or on top of a surface."
  },
  {
    id: "l8_8", level: 8, tamil: "à®•à¯€à®´à¯‡", letters: ["à®•à¯€", "à®´à¯‡"],
    breakdowns: [{ letter: "à®•à¯€", root: "à®•à¯ + à®ˆ", sound: "Kee" }, { letter: "à®´à¯‡", root: "à®´à¯ + à®", sound: "Zhae" }],
    translit: "Kee-zhae", english: "Below / Down", hint: "Down on the ground or floor, opposite of up."
  },
  {
    id: "l8_9", level: 8, tamil: "à®‰à®³à¯à®³à¯‡", letters: ["à®‰", "à®³à¯", "à®³à¯‡"],
    breakdowns: [{ letter: "à®‰", root: "Vowel (à®‰à®¯à®¿à®°à¯)", sound: "U" }, { letter: "à®³à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "L" }, { letter: "à®³à¯‡", root: "à®³à¯ + à®", sound: "Lae" }],
    translit: "Ul-lae", english: "Inside / Within", hint: "Placed inside a room, box, or bag."
  },
  {
    id: "l8_10", level: 8, tamil: "à®µà¯†à®³à®¿à®¯à¯‡", letters: ["à®µà¯†", "à®³à®¿", "à®¯à¯‡"],
    breakdowns: [{ letter: "à®µà¯†", root: "à®µà¯ + à®Ž", sound: "Ve" }, { letter: "à®³à®¿", root: "à®³à¯ + à®‡", sound: "Li" }, { letter: "à®¯à¯‡", root: "à®¯à¯ + à®", sound: "Yae" }],
    translit: "Ve-li-yae", english: "Outside / Out", hint: "Out in the open air, opposite of inside."
  },
  {
    id: "l8_11", level: 8, tamil: "à®ªà¯†à®°à®¿à®¯", letters: ["à®ªà¯†", "à®°à®¿", "à®¯"],
    breakdowns: [{ letter: "à®ªà¯†", root: "à®ªà¯ + à®Ž", sound: "Pe" }, { letter: "à®°à®¿", root: "à®°à¯ + à®‡", sound: "Ri" }, { letter: "à®¯", root: "à®¯à¯ + à®…", sound: "Ya" }],
    translit: "Pe-ri-ya", english: "Big / Large", hint: "Grand and huge in size like an elephant."
  },
  {
    id: "l8_12", level: 8, tamil: "à®šà®¿à®±à®¿à®¯", letters: ["à®šà®¿", "à®±à®¿", "à®¯"],
    breakdowns: [{ letter: "à®šà®¿", root: "à®šà¯ + à®‡", sound: "Si" }, { letter: "à®±à®¿", root: "à®±à¯ + à®‡", sound: "Ri" }, { letter: "à®¯", root: "à®¯à¯ + à®…", sound: "Ya" }],
    translit: "Si-ri-ya", english: "Small / Tiny", hint: "Little and tiny in size like an ant."
  },
  {
    id: "l8_13", level: 8, tamil: "à®ªà®´à¯ˆà®¯", letters: ["à®ª", "à®´à¯ˆ", "à®¯"],
    breakdowns: [{ letter: "à®ª", root: "à®ªà¯ + à®…", sound: "Pa" }, { letter: "à®´à¯ˆ", root: "à®´à¯ + à®", sound: "Zhai" }, { letter: "à®¯", root: "à®¯à¯ + à®…", sound: "Ya" }],
    translit: "Pa-zhai-ya", english: "Old / Used", hint: "Existing for a long time, opposite of new."
  },
  {
    id: "l8_14", level: 8, tamil: "à®ªà¯à®¤à®¿à®¯", letters: ["à®ªà¯", "à®¤à®¿", "à®¯"],
    breakdowns: [{ letter: "à®ªà¯", root: "à®ªà¯ + à®‰", sound: "Pu" }, { letter: "à®¤à®¿", root: "à®¤à¯ + à®‡", sound: "Dhi" }, { letter: "à®¯", root: "à®¯à¯ + à®…", sound: "Ya" }],
    translit: "Pu-dhi-ya", english: "New / Fresh", hint: "Brand new, freshly made or recently bought."
  },
  {
    id: "l8_15", level: 8, tamil: "à®¨à¯€à®³à®®à¯", letters: ["à®¨à¯€", "à®³", "à®®à¯"],
    breakdowns: [{ letter: "à®¨à¯€", root: "à®¨à¯ + à®ˆ", sound: "Nee" }, { letter: "à®³", root: "à®³à¯ + à®…", sound: "Lam" }, { letter: "à®®à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "M" }],
    translit: "Nee-lam", english: "Long / Length", hint: "Extending a great distance from end to end."
  },

  // ==================== LEVEL 9: NUMBERS & EVERYDAY WORDS (à®Žà®£à¯à®•à®³à¯à®®à¯ à®…à®©à¯à®±à®¾à®Ÿà®šà¯ à®šà¯Šà®±à¯à®•à®³à¯à®®à¯) ====================
  {
    id: "l9_1", level: 9, tamil: "à®ªà®¤à¯à®¤à¯", letters: ["à®ª", "à®¤à¯", "à®¤à¯"],
    breakdowns: [{ letter: "à®ª", root: "à®ªà¯ + à®…", sound: "Pa" }, { letter: "à®¤à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "Th" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Thu" }],
    translit: "Path-thu", english: "Ten (10)", hint: "The number 10, equal to all the fingers on both hands."
  },
  {
    id: "l9_2", level: 9, tamil: "à®‡à®°à¯à®ªà®¤à¯", letters: ["à®‡", "à®°à¯", "à®ª", "à®¤à¯"],
    breakdowns: [{ letter: "à®‡", root: "Vowel (à®‰à®¯à®¿à®°à¯)", sound: "I" }, { letter: "à®°à¯", root: "à®°à¯ + à®‰", sound: "Ru" }, { letter: "à®ª", root: "à®ªà¯ + à®…", sound: "Ba" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "I-ru-ba-dhu", english: "Twenty (20)", hint: "The number 20, two groups of ten."
  },
  {
    id: "l9_3", level: 9, tamil: "à®®à¯à®ªà¯à®ªà®¤à¯", letters: ["à®®à¯", "à®ªà¯", "à®ª", "à®¤à¯"],
    breakdowns: [{ letter: "à®®à¯", root: "à®®à¯ + à®‰", sound: "Mu" }, { letter: "à®ªà¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "P" }, { letter: "à®ª", root: "à®ªà¯ + à®…", sound: "Pa" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "Mup-pa-dhu", english: "Thirty (30)", hint: "The number 30, three groups of ten."
  },
  {
    id: "l9_4", level: 9, tamil: "à®¨à®¾à®±à¯à®ªà®¤à¯", letters: ["à®¨à®¾", "à®±à¯", "à®ª", "à®¤à¯"],
    breakdowns: [{ letter: "à®¨à®¾", root: "à®¨à¯ + à®†", sound: "Naa" }, { letter: "à®±à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "R" }, { letter: "à®ª", root: "à®ªà¯ + à®…", sound: "Pa" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "Naar-pa-dhu", english: "Forty (40)", hint: "The number 40, four groups of ten."
  },
  {
    id: "l9_5", level: 9, tamil: "à®à®®à¯à®ªà®¤à¯", letters: ["à®", "à®®à¯", "à®ª", "à®¤à¯"],
    breakdowns: [{ letter: "à®", root: "Vowel (à®‰à®¯à®¿à®°à¯)", sound: "Ai" }, { letter: "à®®à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "M" }, { letter: "à®ª", root: "à®ªà¯ + à®…", sound: "Ba" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "Aim-ba-dhu", english: "Fifty (50)", hint: "The number 50, half of one hundred."
  },
  {
    id: "l9_6", level: 9, tamil: "à®…à®±à¯à®ªà®¤à¯", letters: ["à®…", "à®±à¯", "à®ª", "à®¤à¯"],
    breakdowns: [{ letter: "à®…", root: "Vowel (à®‰à®¯à®¿à®°à¯)", sound: "A" }, { letter: "à®±à¯", root: "à®±à¯ + à®‰", sound: "Ru" }, { letter: "à®ª", root: "à®ªà¯ + à®…", sound: "Ba" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "A-ru-ba-dhu", english: "Sixty (60)", hint: "The number 60, six groups of ten."
  },
  {
    id: "l9_7", level: 9, tamil: "à®Žà®´à¯à®ªà®¤à¯", letters: ["à®Ž", "à®´à¯", "à®ª", "à®¤à¯"],
    breakdowns: [{ letter: "à®Ž", root: "Vowel (à®‰à®¯à®¿à®°à¯)", sound: "E" }, { letter: "à®´à¯", root: "à®´à¯ + à®‰", sound: "Zhu" }, { letter: "à®ª", root: "à®ªà¯ + à®…", sound: "Ba" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "E-zhu-ba-dhu", english: "Seventy (70)", hint: "The number 70, seven groups of ten."
  },
  {
    id: "l9_8", level: 9, tamil: "à®Žà®£à¯à®ªà®¤à¯", letters: ["à®Ž", "à®£à¯", "à®ª", "à®¤à¯"],
    breakdowns: [{ letter: "à®Ž", root: "Vowel (à®‰à®¯à®¿à®°à¯)", sound: "E" }, { letter: "à®£à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }, { letter: "à®ª", root: "à®ªà¯ + à®…", sound: "Ba" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "En-ba-dhu", english: "Eighty (80)", hint: "The number 80, eight groups of ten."
  },
  {
    id: "l9_9", level: 9, tamil: "à®¤à¯Šà®£à¯à®£à¯‚à®±à¯", letters: ["à®¤à¯Š", "à®£à¯", "à®£à¯‚", "à®±à¯"],
    breakdowns: [{ letter: "à®¤à¯Š", root: "à®¤à¯ + à®’", sound: "Tho" }, { letter: "à®£à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }, { letter: "à®£à¯‚", root: "à®£à¯ + à®Š", sound: "Noo" }, { letter: "à®±à¯", root: "à®±à¯ + à®‰", sound: "Ru" }],
    translit: "Thon-noo-ru", english: "Ninety (90)", hint: "The number 90, nine groups of ten."
  },
  {
    id: "l9_10", level: 9, tamil: "à®®à®¾à®²à¯ˆ", letters: ["à®®à®¾", "à®²à¯ˆ"],
    breakdowns: [{ letter: "à®®à®¾", root: "à®®à¯ + à®†", sound: "Maa" }, { letter: "à®²à¯ˆ", root: "à®²à¯ + à®", sound: "Lai" }],
    translit: "Maa-lai", english: "Evening / Garland", hint: "The pleasant evening time before sunset, or flower garland."
  },
  {
    id: "l9_11", level: 9, tamil: "à®•à®¤à¯ˆ", letters: ["à®•", "à®¤à¯ˆ"],
    breakdowns: [{ letter: "à®•", root: "à®•à¯ + à®…", sound: "Ka" }, { letter: "à®¤à¯ˆ", root: "à®¤à¯ + à®", sound: "Dhai" }],
    translit: "Ka-dhai", english: "Story / Tale", hint: "An exciting narrative or bedtime tale."
  },
  {
    id: "l9_12", level: 9, tamil: "à®•à®£à¯à®£à®¾à®Ÿà®¿", letters: ["à®•", "à®£à¯", "à®£à®¾", "à®Ÿà®¿"],
    breakdowns: [{ letter: "à®•", root: "à®•à¯ + à®…", sound: "Kan" }, { letter: "à®£à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }, { letter: "à®£à®¾", root: "à®£à¯ + à®†", sound: "Naa" }, { letter: "à®Ÿà®¿", root: "à®Ÿà¯ + à®‡", sound: "Di" }],
    translit: "Kan-naa-di", english: "Mirror / Eyeglasses", hint: "Reflective glass or spectacles to see clearly."
  },
  {
    id: "l9_13", level: 9, tamil: "à®¤à®™à¯à®•à¯ˆ", letters: ["à®¤", "à®™à¯", "à®•à¯ˆ"],
    breakdowns: [{ letter: "à®¤", root: "à®¤à¯ + à®…", sound: "Tha" }, { letter: "à®™à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "Ng" }, { letter: "à®•à¯ˆ", root: "à®•à¯ + à®", sound: "Gai" }],
    translit: "Thang-gai", english: "Younger Sister", hint: "A younger sister in the family."
  },
  {
    id: "l9_14", level: 9, tamil: "à®šà®¤à¯à®°à®®à¯", letters: ["à®š", "à®¤à¯", "à®°", "à®®à¯"],
    breakdowns: [{ letter: "à®š", root: "à®šà¯ + à®…", sound: "Sa" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }, { letter: "à®°", root: "à®°à¯ + à®…", sound: "Ram" }, { letter: "à®®à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "M" }],
    translit: "Sa-dhu-ram", english: "Square (Shape)", hint: "Geometric shape with four equal straight sides."
  },
  {
    id: "l9_15", level: 9, tamil: "à®•à®Ÿà¯ˆ", letters: ["à®•", "à®Ÿà¯ˆ"],
    breakdowns: [{ letter: "à®•", root: "à®•à¯ + à®…", sound: "Ka" }, { letter: "à®Ÿà¯ˆ", root: "à®Ÿà¯ + à®", sound: "Dai" }],
    translit: "Ka-dai", english: "Shop / Store", hint: "A store where you buy groceries and goods."
  },
  {
    id: "l9_16", level: 9, tamil: "à®Šà®žà¯à®šà®²à¯", letters: ["à®Š", "à®žà¯", "à®š", "à®²à¯"],
    breakdowns: [{ letter: "à®Š", root: "Long Vowel (à®¨à¯†à®Ÿà®¿à®²à¯)", sound: "Oo" }, { letter: "à®žà¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "Nj" }, { letter: "à®š", root: "à®šà¯ + à®…", sound: "Sal" }, { letter: "à®²à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "L" }],
    translit: "Oon-jal", english: "Swing", hint: "Hanging seat in the park that swings back and forth."
  },
  {
    id: "l9_17", level: 9, tamil: "à®¤à®•à¯à®•à®¾à®³à®¿", letters: ["à®¤", "à®•à¯", "à®•à®¾", "à®³à®¿"],
    breakdowns: [{ letter: "à®¤", root: "à®¤à¯ + à®…", sound: "Tha" }, { letter: "à®•à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "K" }, { letter: "à®•à®¾", root: "à®•à¯ + à®†", sound: "Kaa" }, { letter: "à®³à®¿", root: "à®³à¯ + à®‡", sound: "Li" }],
    translit: "Thak-kaa-li", english: "Tomato", hint: "Juicy red vegetable commonly used in curry and salad."
  },

  // ==================== LEVEL 10: ACTION VERBS & DIALOGUE (à®µà®¿à®©à¯ˆà®•à®³à¯à®®à¯ à®‰à®°à¯ˆà®¯à®¾à®Ÿà®²à¯à®®à¯) ====================
  {
    id: "l10_1", level: 10, tamil: "à®µà®¿à®´à¯à®¨à¯à®¤à®¤à¯", letters: ["à®µà®¿", "à®´à¯", "à®¨à¯", "à®¤", "à®¤à¯"],
    breakdowns: [{ letter: "à®µà®¿", root: "à®µà¯ + à®‡", sound: "Vi" }, { letter: "à®´à¯", root: "à®´à¯ + à®‰", sound: "Zhun" }, { letter: "à®¨à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }, { letter: "à®¤", root: "à®¤à¯ + à®…", sound: "Dha" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "Vi-zhun-dha-dhu", english: "Fell Down", hint: "Dropped down to the ground from higher up."
  },
  {
    id: "l10_2", level: 10, tamil: "à®ªà®±à®¨à¯à®¤à®¤à¯", letters: ["à®ª", "à®±", "à®¨à¯", "à®¤", "à®¤à¯"],
    breakdowns: [{ letter: "à®ª", root: "à®ªà¯ + à®…", sound: "Pa" }, { letter: "à®±", root: "à®±à¯ + à®…", sound: "Ran" }, { letter: "à®¨à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }, { letter: "à®¤", root: "à®¤à¯ + à®…", sound: "Dha" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "Pa-ran-dha-dhu", english: "Flew", hint: "Glided through the sky using wings like a bird."
  },
  {
    id: "l10_3", level: 10, tamil: "à®¤à®¿à®±à®¨à¯à®¤à®¤à¯", letters: ["à®¤à®¿", "à®±", "à®¨à¯", "à®¤", "à®¤à¯"],
    breakdowns: [{ letter: "à®¤à®¿", root: "à®¤à¯ + à®‡", sound: "Thi" }, { letter: "à®±", root: "à®±à¯ + à®…", sound: "Ran" }, { letter: "à®¨à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }, { letter: "à®¤", root: "à®¤à¯ + à®…", sound: "Dha" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "Thi-ran-dha-dhu", english: "Opened", hint: "Unlatched a door or box to reveal the inside."
  },
  {
    id: "l10_4", level: 10, tamil: "à®‰à®°à¯à®£à¯à®Ÿà®¤à¯", letters: ["à®‰", "à®°à¯", "à®£à¯", "à®Ÿ", "à®¤à¯"],
    breakdowns: [{ letter: "à®‰", root: "Vowel (à®‰à®¯à®¿à®°à¯)", sound: "U" }, { letter: "à®°à¯", root: "à®°à¯ + à®‰", sound: "Run" }, { letter: "à®£à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }, { letter: "à®Ÿ", root: "à®Ÿà¯ + à®…", sound: "Da" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "U-run-da-dhu", english: "Rolled", hint: "Turned over and over along the floor like a ball."
  },
  {
    id: "l10_5", level: 10, tamil: "à®•à¯à®°à¯ˆà®¤à¯à®¤à®¤à¯", letters: ["à®•à¯", "à®°à¯ˆ", "à®¤à¯", "à®¤", "à®¤à¯"],
    breakdowns: [{ letter: "à®•à¯", root: "à®•à¯ + à®‰", sound: "Ku" }, { letter: "à®°à¯ˆ", root: "à®±à¯ + à®", sound: "Rait" }, { letter: "à®¤à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "Th" }, { letter: "à®¤", root: "à®¤à¯ + à®…", sound: "Tha" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "Ku-raith-tha-dhu", english: "Barked", hint: "Made a loud barking sound like a watchful dog."
  },
  {
    id: "l10_6", level: 10, tamil: "à®‡à®©à®¿à®¤à¯à®¤à®¤à¯", letters: ["à®‡", "à®©à®¿", "à®¤à¯", "à®¤", "à®¤à¯"],
    breakdowns: [{ letter: "à®‡", root: "Vowel (à®‰à®¯à®¿à®°à¯)", sound: "I" }, { letter: "à®©à®¿", root: "à®©à¯ + à®‡", sound: "Nit" }, { letter: "à®¤à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "Th" }, { letter: "à®¤", root: "à®¤à¯ + à®…", sound: "Tha" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "I-nith-tha-dhu", english: "Tasted Sweet", hint: "Delivered a delicious sweet flavor like honey or sugar."
  },
  {
    id: "l10_7", level: 10, tamil: "à®®à¯‡à®¯à¯à®¨à¯à®¤à®¤à¯", letters: ["à®®à¯‡", "à®¯à¯", "à®¨à¯", "à®¤", "à®¤à¯"],
    breakdowns: [{ letter: "à®®à¯‡", root: "à®®à¯ + à®", sound: "Mae" }, { letter: "à®¯à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "Y" }, { letter: "à®¨à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }, { letter: "à®¤", root: "à®¤à¯ + à®…", sound: "Dha" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "Maey-ndha-dhu", english: "Grazed", hint: "Ate fresh grass quietly in the green pasture."
  },
  {
    id: "l10_8", level: 10, tamil: "à®•à®°à¯ˆà®¨à¯à®¤à®¤à¯", letters: ["à®•", "à®°à¯ˆ", "à®¨à¯", "à®¤", "à®¤à¯"],
    breakdowns: [{ letter: "à®•", root: "à®•à¯ + à®…", sound: "Ka" }, { letter: "à®°à¯ˆ", root: "à®±à¯ + à®", sound: "Rain" }, { letter: "à®¨à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }, { letter: "à®¤", root: "à®¤à¯ + à®…", sound: "Dha" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "Ka-rain-dha-dhu", english: "Dissolved / Cawed", hint: "Melted in liquid, or crow called out kaa-kaa."
  },
  {
    id: "l10_9", level: 10, tamil: "à®µà®¨à¯à®¤à®¤à¯", letters: ["à®µ", "à®¨à¯", "à®¤", "à®¤à¯"],
    breakdowns: [{ letter: "à®µ", root: "à®µà¯ + à®…", sound: "Va" }, { letter: "à®¨à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "N" }, { letter: "à®¤", root: "à®¤à¯ + à®…", sound: "Dha" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "Van-dha-dhu", english: "Came / Arrived", hint: "Arrived at a destination from elsewhere."
  },
  {
    id: "l10_10", level: 10, tamil: "à®°à¯à®šà®¿à®¤à¯à®¤à®¤à¯", letters: ["à®°à¯", "à®šà®¿", "à®¤à¯", "à®¤", "à®¤à¯"],
    breakdowns: [{ letter: "à®°à¯", root: "à®°à¯ + à®‰", sound: "Ru" }, { letter: "à®šà®¿", root: "à®šà¯ + à®‡", sound: "Sit" }, { letter: "à®¤à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "Th" }, { letter: "à®¤", root: "à®¤à¯ + à®…", sound: "Tha" }, { letter: "à®¤à¯", root: "à®¤à¯ + à®‰", sound: "Dhu" }],
    translit: "Ru-sith-tha-dhu", english: "Tasted Delicious", hint: "Tasted richly flavorful and satisfying to eat."
  },
  {
    id: "l10_11", level: 10, tamil: "à®‰à®¤à®µà®¿", letters: ["à®‰", "à®¤", "à®µà®¿"],
    breakdowns: [{ letter: "à®‰", root: "Vowel (à®‰à®¯à®¿à®°à¯)", sound: "U" }, { letter: "à®¤", root: "à®¤à¯ + à®…", sound: "Dha" }, { letter: "à®µà®¿", root: "à®µà¯ + à®‡", sound: "Vi" }],
    translit: "U-dha-vi", english: "Help / Assistance", hint: "Lending a supporting hand to someone in need."
  },
  {
    id: "l10_12", level: 10, tamil: "à®†à®šà¯ˆ", letters: ["à®†", "à®šà¯ˆ"],
    breakdowns: [{ letter: "à®†", root: "Long Vowel (à®¨à¯†à®Ÿà®¿à®²à¯)", sound: "Aa" }, { letter: "à®šà¯ˆ", root: "à®šà¯ + à®", sound: "Sai" }],
    translit: "Aa-sai", english: "Wish / Desire", hint: "A heartfelt wish or desire to achieve something."
  },
  {
    id: "l10_13", level: 10, tamil: "à®¤à®¿à®©à®®à¯à®®à¯", letters: ["à®¤à®¿", "à®©", "à®®à¯", "à®®à¯"],
    breakdowns: [{ letter: "à®¤à®¿", root: "à®¤à¯ + à®‡", sound: "Dhi" }, { letter: "à®©", root: "à®©à¯ + à®…", sound: "Na" }, { letter: "à®®à¯", root: "à®®à¯ + à®‰", sound: "Mum" }, { letter: "à®®à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "M" }],
    translit: "Dhi-na-mum", english: "Daily / Everyday", hint: "Happening each and every day without missing."
  },
  {
    id: "l10_14", level: 10, tamil: "à®Šà®°à¯", letters: ["à®Š", "à®°à¯"],
    breakdowns: [{ letter: "à®Š", root: "Long Vowel (à®¨à¯†à®Ÿà®¿à®²à¯)", sound: "Oo" }, { letter: "à®°à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "R" }],
    translit: "Oor", english: "Town / Hometown", hint: "A village, hometown, or settlement where people reside."
  },
  {
    id: "l10_15", level: 10, tamil: "à®•à¯Šà®žà¯à®šà®®à¯", letters: ["à®•à¯Š", "à®žà¯", "à®š", "à®®à¯"],
    breakdowns: [{ letter: "à®•à¯Š", root: "à®•à¯ + à®’", sound: "Ko" }, { letter: "à®žà¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "Nj" }, { letter: "à®š", root: "à®šà¯ + à®…", sound: "Sam" }, { letter: "à®®à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "M" }],
    translit: "Kon-jam", english: "A Little / A Bit", hint: "A small amount or modest portion."
  },
  {
    id: "l10_16", level: 10, tamil: "à®¨à¯‡à®°à®®à¯", letters: ["à®¨à¯‡", "à®°", "à®®à¯"],
    breakdowns: [{ letter: "à®¨à¯‡", root: "à®¨à¯ + à®", sound: "Nae" }, { letter: "à®°", root: "à®°à¯ + à®…", sound: "Ram" }, { letter: "à®®à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "M" }],
    translit: "Nae-ram", english: "Time / Hour", hint: "The continuous duration of minutes and hours."
  },
  {
    id: "l10_17", level: 10, tamil: "à®®à®Ÿà¯à®Ÿà¯à®®à¯", letters: ["à®®", "à®Ÿà¯", "à®Ÿà¯", "à®®à¯"],
    breakdowns: [{ letter: "à®®", root: "à®®à¯ + à®…", sound: "Ma" }, { letter: "à®Ÿà¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "T" }, { letter: "à®Ÿà¯", root: "à®Ÿà¯ + à®‰", sound: "Dum" }, { letter: "à®®à¯", root: "Pure Consonant (à®®à¯†à®¯à¯)", sound: "M" }],
    translit: "Mat-tum", english: "Only / Solely", hint: "Exclusively this and nothing else."
  },
  {
    id: "l10_18", level: 10, tamil: "à®šà®°à®³à®®à®¾à®•", letters: ["à®š", "à®°", "à®³", "à®®à®¾", "à®•"],
    breakdowns: [{ letter: "à®š", root: "à®šà¯ + à®…", sound: "Sa" }, { letter: "à®°", root: "à®°à¯ + à®…", sound: "Ra" }, { letter: "à®³", root: "à®³à¯ + à®…", sound: "La" }, { letter: "à®®à®¾", root: "à®®à¯ + à®†", sound: "Maa" }, { letter: "à®•", root: "à®•à¯ + à®…", sound: "Ga" }],
    translit: "Sa-ra-la-maa-ga", english: "Fluently / Smoothly", hint: "Speaking with effortless flow and confidence."
  }
];

// Page 11 Dialogue Script (Mani & Babu Conversation)
export const PAGE_11_DIALOGUE = {
  id: "lesson1_p11",
  pageLabel: "Page 11 Lesson",
  description: "School Preparation Conversation",
  durations: [3.2, 3.0, 10.4, 10.2, 12.0, 7.2, 11.2, 4.1],
  question: {
    tamilPrompt: "à®šà®¿à®¨à¯à®¤à®¿à®¤à¯à®¤à¯ à®µà®¿à®Ÿà¯ˆà®¯à®³à®¿à®•à¯à®• (Think & Answer):",
    tamilQuestion: "à®®à®£à®¿ à®¤à®©à¯ à®ªà®³à¯à®³à®¿à®ªà¯ à®ªà¯ˆà®¯à®¿à®²à¯ à®¤à¯‡à®µà¯ˆà®¯à®¾à®© à®ªà¯Šà®°à¯à®³à¯à®•à®³à¯ˆà®šà¯ à®šà®°à®¿à®¯à®¾à®• à®µà¯ˆà®•à¯à®• à®Žà®¤à®©à¯ˆà®ªà¯ à®ªà®¯à®©à¯à®ªà®Ÿà¯à®¤à¯à®¤à®¿à®©à®¾à®©à¯?",
    tamilAnswer: "à®µà®¿à®Ÿà¯ˆ: à®ªà®Ÿ à®…à®Ÿà¯à®Ÿà¯ˆà®•à®³à¯ (Picture Flashcards)!",
    englishHint: "What did Mani use to verify his bag was packed properly? Picture flashcards!"
  },
  title: "உரையாடல்",
  subtitle: "ஆசிரியர் சொல்வதைக் கேட்டு, நண்பனுடன் உரையாடுக:",
  englishTitle: "Dialogue: Getting Ready for School",
  englishSubtitle: "Listen to the teacher, converse with friend:",
  lines: [
    {
      id: 1,
      speaker: "மணி",
      speakerRole: "Mani",
      tamil: "பாபு, நாளைக்கு நீ பள்ளிக்குப் போக வேண்டுமா?",
      english: "Babu, do you have to go to school tomorrow?",
      translit: "Baabu, naalaikku nee pallikkup poaga vaendum-aa?",
      audio: "audio/dialogue/dialogue_1.mp3",
      vocabulary: ["நாளை", "பள்ளி", "வேண்டும்"]
    },
    {
      id: 2,
      speaker: "பாபு",
      speakerRole: "Babu",
      tamil: "போக வேண்டும் மணி. நீ போக வேண்டாமா?",
      english: "I have to go, Mani. Don't you have to go?",
      translit: "Poaga vaendum Mani. Nee poaga vaendaam-aa?",
      audio: "audio/dialogue/dialogue_2.mp3",
      vocabulary: ["வேண்டும்"]
    },
    {
      id: 3,
      speaker: "மணி",
      speakerRole: "Mani",
      tamil: "நானும் போக வேண்டும். நாளைக்குச் சீக்கிரமாகப் போக வேண்டும். இப்பொழுதே வகுப்புக்குத் தேவையான பொருள்களை என் பையில் எடுத்துவைக்க வேண்டும்.",
      english: "I also have to go. Tomorrow I must go early. Right now, I have to pack the things needed for class into my bag.",
      translit: "Naanum poaga vaendum. Naalaikkuch cheekkiramaagap poaga vaendum. Ippozhudhae vaguppukkuth thaevaiyaana porulgalai en paiyil eduthuvaikka vaendum.",
      audio: "audio/dialogue/dialogue_3.mp3",
      vocabulary: ["சீக்கிரம்", "இப்பொழுது", "வகுப்பு", "தேவை", "பொருள்", "பை", "வேண்டும்"]
    },
    {
      id: 4,
      speaker: "பாபு",
      speakerRole: "Babu",
      tamil: "உனக்குத் தேவையான பொருள்களை நீயே பையில் எடுத்துவைப்பாயா? எனக்குத் தேவையான பொருள்களை என் அம்மாதான் என் பையில் எடுத்துவைப்பார்கள்.",
      english: "Do you pack the things you need into your bag yourself? For me, my mother packs the things I need into my bag.",
      translit: "Unakkuth thaevaiyaana porulgalai neeyae paiyil eduthuvaippaayaa? Enakkuth thaevaiyaana porulgalai en ammaa thaan en paiyil eduthuvaippaargal.",
      audio: "audio/dialogue/dialogue_4.mp3",
      vocabulary: ["தேவை", "பொருள்", "பை", "அம்மா"]
    },
    {
      id: 5,
      speaker: "மணி",
      speakerRole: "Mani",
      tamil: "அம்மா ஏன் இந்த வேலை எல்லாம் செய்ய வேண்டும்? நீயும், நான் செய்வதுபோலச் செய்து பழகலாமே. சாப்பாடுதவிர மீதிப் பொருள்களை முதன்நாளே எடுத்துவைப்பேன்.",
      english: "Why should mother do all this work? You too can practice doing it like I do. Except for food, I pack the rest of the items on the previous day itself.",
      translit: "Ammaa aen indha vaelai ellaam seyya vaendum? Neeyum, naan seyvadhupoalach seydhu pazhagalaamae. Saappaduthavira meedhip porulgalai mudhannaalae eduthuvaippaen.",
      audio: "audio/dialogue/dialogue_5.mp3",
      vocabulary: ["வேலை", "பழகு", "சாப்பாடு", "பொருள்", "வேண்டும்"]
    },
    {
      id: 6,
      speaker: "பாபு",
      speakerRole: "Babu",
      tamil: "நன்றி மணி. நாளையிலிருந்து... இல்லை இல்லை இன்றைக்கே நான் இந்த வேலையைச் செய்ய ஆரம்பிக்கிறேன்.",
      english: "Thanks Mani. From tomorrow... no, no, starting today itself I will begin doing this work.",
      translit: "Nanri Mani. Naalaiyilirundhu... illai illai inraikkae naan indha vaelaiyaich cheyya aarambikkiraen.",
      audio: "audio/dialogue/dialogue_6.mp3",
      vocabulary: ["நன்றி", "நாளை", "இல்லை", "இன்று", "வேலை", "ஆரம்பி"]
    },
    {
      id: 7,
      speaker: "மணி",
      speakerRole: "Mani",
      tamil: "என்ன என்ன பொருள்களைப் பையில் வைக்க வேண்டும் என்று நான் பட அட்டைகள் வைத்திருக்கிறேன். அதைப் பார்த்து எல்லாப் பொருள்களையும் பையில் வைத்தேனா என்று சரிபார்ப்பேன்.",
      english: "I have picture flashcards showing what things to put in the bag. Looking at them, I check if I put all the things into the bag.",
      translit: "Enna enna porulgalaip paiyil vaikka vaendum endru naan pada attaikal vaiththirukkiraen. Adhaip paarththu ellaap porulgalaiyum paiyil vaiththaenaa endru saripaarppaen.",
      audio: "audio/dialogue/dialogue_7.mp3",
      vocabulary: ["பொருள்", "பை", "வேண்டும்", "படம்", "அட்டை", "சரிபார்"]
    },
    {
      id: 8,
      speaker: "பாபு",
      speakerRole: "Babu",
      tamil: "நல்ல யோசனை. உன் பட அட்டைகளைப் பற்றிச்சொல் மணி.",
      english: "Good idea! Tell me about your picture flashcards, Mani.",
      translit: "Nalla yoasanai. Un pada attaikalaip patrich chol Mani.",
      audio: "audio/dialogue/dialogue_8.mp3",
      vocabulary: ["யோசனை", "அட்டை"]
    }
  ]
};

// Page 13 Dialogue Script (Lesson 3: Amma & Kavin Conversation)
export const PAGE_13_DIALOGUE = {
  id: "lesson3_p13",
  title: "à®ªà®¾à®Ÿà®®à¯ 3: à®…à®®à¯à®®à®¾à®µà¯à®®à¯ à®•à®µà®¿à®©à¯à®®à¯",
  subtitle: "à®µà¯€à®Ÿà¯à®Ÿà®¿à®²à¯ à®…à®®à¯à®®à®¾à®µà®¿à®Ÿà®®à¯ à®ªà¯‡à®šà¯à®®à¯ à®‰à®°à¯ˆà®¯à®¾à®Ÿà®²à¯:",
  englishTitle: "Lesson 3: Amma and Kavin",
  englishSubtitle: "Conversation with mother at home:",
  pageLabel: "Page 13 Lesson",
  description: "Fluency & Daily Tamil Practice",
  durations: [4.8, 3.2, 9.2, 3.5, 11.5, 23.0, 14.0, 5.0, 2.0],
  question: {
    tamilPrompt: "à®šà®¿à®¨à¯à®¤à®¿à®¤à¯à®¤à¯ à®µà®¿à®Ÿà¯ˆà®¯à®³à®¿à®•à¯à®• (Think & Answer):",
    tamilQuestion: "à®¤à®®à®¿à®´à®¿à®²à¯ à®šà®°à®³à®®à®¾à®•à®ªà¯ à®ªà¯‡à®š à®•à®µà®¿à®©à¯à®®à¯ à®…à®®à¯à®®à®¾à®µà¯à®®à¯ à®Žà®©à¯à®© à®šà¯†à®¯à¯à®¯à®¤à¯ à®¤à¯€à®°à¯à®®à®¾à®©à®¿à®¤à¯à®¤à®¾à®°à¯à®•à®³à¯?",
    tamilAnswer: "à®µà®¿à®Ÿà¯ˆ: à®¤à®¿à®©à®®à¯à®®à¯ à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯ à®¤à®®à®¿à®´à®¿à®²à¯ à®®à®Ÿà¯à®Ÿà¯à®®à¯ à®ªà¯‡à®š à®®à¯à®Ÿà®¿à®µà¯†à®Ÿà¯à®¤à¯à®¤à®¾à®°à¯à®•à®³à¯!",
    englishHint: "What did Kavin and Amma decide to do to speak Tamil fluently? Speak only in Tamil for one hour every day!"
  },
  lines: [
    {
      id: 1,
      speaker: "à®•à®µà®¿à®©à¯",
      speakerRole: "Kavin",
      tamil: "à®…à®®à¯à®®à®¾, à®Žà®©à¯à®© à®šà¯†à®¯à¯à®•à®¿à®±à¯€à®°à¯à®•à®³à¯? à®Žà®©à®•à¯à®•à¯à®•à¯ à®•à¯Šà®žà¯à®šà®®à¯ à®‰à®¤à®µà®¿à®šà¯†à®¯à¯à®¯ à®®à¯à®Ÿà®¿à®¯à¯à®®à®¾?",
      english: "Mom, what are you doing? Can you help me a little?",
      translit: "Ammaa, enna seigireergal? Enakkuk konjam udhaviseyya mudiyumaa?",
      audio: "audio/dialogue/dialogue3_1.mp3",
      vocabulary: ["à®…à®®à¯à®®à®¾", "à®•à¯Šà®žà¯à®šà®®à¯", "à®‰à®¤à®µà®¿"]
    },
    {
      id: 2,
      speaker: "à®…à®®à¯à®®à®¾",
      speakerRole: "Amma",
      tamil: "à®šà¯†à®¯à¯à®•à®¿à®±à¯‡à®©à¯ à®•à®µà®¿à®©à¯. à®Žà®©à¯à®© à®šà¯†à®¯à¯à®¯ à®µà¯‡à®£à¯à®Ÿà¯à®®à¯?",
      english: "Sure Kavin. What should I do?",
      translit: "Seigiraen Kavin. Enna seyya vaendum?",
      audio: "audio/dialogue/dialogue3_2.mp3",
      vocabulary: ["à®µà¯‡à®£à¯à®Ÿà¯à®®à¯"]
    },
    {
      id: 3,
      speaker: "à®•à®µà®¿à®©à¯",
      speakerRole: "Kavin",
      tamil: "à®Žà®©à¯ à®¨à®£à¯à®ªà®°à¯à®•à®³à¯à®Ÿà®©à¯ à®¨à®©à¯à®±à®¾à®•à®¤à¯ à®¤à®®à®¿à®´à®¿à®²à¯ à®ªà¯‡à®š à®µà¯‡à®£à¯à®Ÿà¯à®®à¯ à®Žà®©à¯à®±à¯ à®Žà®©à®•à¯à®•à¯ à®†à®šà¯ˆà®¯à®¾à®• à®‡à®°à¯à®•à¯à®•à®¿à®±à®¤à¯ à®…à®®à¯à®®à®¾. à®…à®¤à®±à¯à®•à¯ à®¨à®¾à®©à¯ à®Žà®©à¯à®© à®šà¯†à®¯à¯à®¯ à®µà¯‡à®£à¯à®Ÿà¯à®®à¯?",
      english: "I wish to speak well in Tamil with my friends, Mom. What should I do for that?",
      translit: "En nanbargaludan nanraagath thamizhil paesa vaendum endru enakkuaasaiyaaga irukkiradhu ammaa. Adharku naan enna seyya vaendum?",
      audio: "audio/dialogue/dialogue3_3.mp3",
      vocabulary: ["à®µà¯‡à®£à¯à®Ÿà¯à®®à¯", "à®†à®šà¯ˆ", "à®…à®®à¯à®®à®¾"]
    },
    {
      id: 4,
      speaker: "à®…à®®à¯à®®à®¾",
      speakerRole: "Amma",
      tamil: "à®‰à®©à®•à¯à®•à¯à®ªà¯ à®ªà®¿à®Ÿà®¿à®¤à¯à®¤ à®ªà®¾à®Ÿà®®à¯ à®¤à®¾à®©à¯‡ à®¤à®®à®¿à®´à¯à®ªà¯à®ªà®¾à®Ÿà®®à¯?",
      english: "Your favorite subject is Tamil, isn't it?",
      translit: "Unakkup pidiththa paadam thaanae thamizhppaadam?",
      audio: "audio/dialogue/dialogue3_4.mp3",
      vocabulary: ["à®ªà®¾à®Ÿà®®à¯"]
    },
    {
      id: 5,
      speaker: "à®•à®µà®¿à®©à¯",
      speakerRole: "Kavin",
      tamil: "à®†à®®à®¾à®®à¯, à®…à®®à¯à®®à®¾. à®Žà®©à®•à¯à®•à¯à®¤à¯ à®¤à®®à®¿à®´à¯à®ªà¯à®ªà®¾à®Ÿà®®à¯à®®à¯ à®ªà®¿à®Ÿà®¿à®•à¯à®•à¯à®®à¯. à®¤à®®à®¿à®´à¯à®ªà¯à®ªà®³à¯à®³à®¿à®¯à¯à®®à¯ à®ªà®¿à®Ÿà®¿à®•à¯à®•à¯à®®à¯. à®¤à®®à®¿à®´à¯ à®µà®•à¯à®ªà¯à®ªà®¿à®²à¯ à®¨à®¾à®©à¯ à®¨à®©à¯à®±à®¾à®•à®ªà¯ à®ªà®Ÿà®¿à®•à¯à®•à®¿à®±à¯‡à®©à¯. à®†à®©à®¾à®²à¯ à®¤à®®à®¿à®´à¯ à®ªà¯‡à®šà¯à®µà®¤à¯à®¤à®¾à®©à¯...",
      english: "Yes, Mom. I like Tamil subject and I like Tamil school. I read well in Tamil class. But speaking Tamil is what...",
      translit: "Aamaam, ammaa. Enakkuth thamizhppaadamum pidikkum. Thamizhppalliyum pidikkum. Thamizh vaguppil naan nanraagap padikkiraen. Aanaal thamizh paesuvadhuthaan...",
      audio: "audio/dialogue/dialogue3_5.mp3",
      vocabulary: ["à®…à®®à¯à®®à®¾", "à®ªà®¾à®Ÿà®®à¯", "à®ªà®³à¯à®³à®¿", "à®µà®•à¯à®ªà¯à®ªà¯"]
    },
    {
      id: 6,
      speaker: "à®…à®®à¯à®®à®¾",
      speakerRole: "Amma",
      tamil: "à®Žà®©à¯à®© à®•à®µà®¿à®©à¯ à®ªà¯‡à®šà¯à®µà®¤à¯à®¤à®¾à®©à¯... à®Žà®©à¯à®©? à®šà®°à®³à®®à®¾à®•à®ªà¯ à®ªà¯‡à®šà®µà¯‡à®£à¯à®Ÿà¯à®®à¯ à®…à®µà¯à®µà®³à®µà¯à®¤à®¾à®©à¯‡! à®¨à®¾à®©à¯à®®à¯ à®¨à¯€à®¯à¯à®®à¯ à®…à®ªà¯à®ªà®¾à®µà¯à®®à¯ à®¤à®¿à®©à®®à¯à®®à¯ à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯ à®¤à®®à®¿à®´à®¿à®²à¯ à®®à®Ÿà¯à®Ÿà¯à®®à¯ à®ªà¯‡à®šà¯à®µà¯‹à®®à¯. à®‰à®©à¯ à®¤à®®à®¿à®´à¯à®ªà¯ à®ªà¯à®¤à¯à®¤à®•à®¤à¯à®¤à®¿à®²à¯ à®‰à®³à¯à®³ à®ªà®¾à®Ÿà®™à¯à®•à®³à¯ˆà®ªà¯ à®ªà®±à¯à®±à®¿à®ªà¯ à®ªà¯‡à®šà®²à®¾à®®à¯, à®¨à®®à¯ à®µà¯€à®Ÿà¯à®Ÿà¯ˆà®ªà¯ à®ªà®±à¯à®±à®¿à®ªà¯ à®ªà¯‡à®šà®²à®¾à®®à¯, à®¨à®®à¯ à®Šà®°à¯ˆà®ªà¯ à®ªà®±à¯à®±à®¿à®ªà¯ à®ªà¯‡à®šà®²à®¾à®®à¯, à®‰à®©à¯ à®¨à®£à¯à®ªà®°à¯à®•à®³à¯ˆà®ªà¯ à®ªà®±à¯à®±à®¿à®ªà¯ à®ªà¯‡à®šà®²à®¾à®®à¯.",
      english: "What Kavin, speaking is... what? You just want to speak fluently, that's all! You, Dad, and I will speak only in Tamil for one hour every day. We can talk about lessons in your Tamil book, our house, our hometown, and your friends.",
      translit: "Enna Kavin paesuvadhuthaan... enna? Saralamaagap paesavaendum avvalavuthaanae! Naanum neeyum appaavum dhinamum oru mani naeram thamizhil mattum paesuvoam. Un thamizhp puththagaththil ulla paadangalaip patrip paesalaam, nam veettaip patrip paesalaam, nam ooraip patrip paesalaam, un nanbargalaip patrip paesalaam.",
      audio: "audio/dialogue/dialogue3_6.mp3",
      vocabulary: ["à®šà®°à®³à®®à®¾à®•", "à®µà¯‡à®£à¯à®Ÿà¯à®®à¯", "à®…à®ªà¯à®ªà®¾", "à®¤à®¿à®©à®®à¯à®®à¯", "à®¨à¯‡à®°à®®à¯", "à®®à®Ÿà¯à®Ÿà¯à®®à¯", "à®ªà¯à®¤à¯à®¤à®•à®®à¯", "à®ªà®¾à®Ÿà®®à¯", "à®Šà®°à¯"]
    },
    {
      id: 7,
      speaker: "à®•à®µà®¿à®©à¯",
      speakerRole: "Kavin",
      tamil: "à®ªà¯‡à®šà®²à®¾à®®à¯ à®…à®®à¯à®®à®¾. à®¨à®®à¯ à®µà¯€à®Ÿà¯à®Ÿà¯ˆà®ªà¯ à®ªà®±à¯à®±à®¿à®¯à¯à®®à¯, à®¨à®®à¯ à®Šà®°à¯ˆà®ªà¯ à®ªà®±à¯à®±à®¿à®¯à¯à®®à¯, à®Žà®©à¯ à®¨à®£à¯à®ªà®°à¯à®•à®³à¯ˆà®ªà¯ à®ªà®±à¯à®±à®¿à®¯à¯à®®à¯ à®ªà¯‡à®š à®¨à®¾à®©à¯ à®¤à®®à®¿à®´à¯ à®µà®•à¯à®ªà¯à®ªà®¿à®²à¯ à®•à®±à¯à®±à¯à®•à¯à®•à¯Šà®£à¯à®Ÿà¯‡à®©à¯ à®…à®®à¯à®®à®¾. à®¨à®¾à®³à¯ˆà®•à¯à®•à¯ à®¨à®¾à®®à¯ à®¤à®®à®¿à®´à®¿à®²à¯ à®ªà¯‡à®š à®†à®°à®®à¯à®ªà®¿à®•à¯à®•à®²à®¾à®®à®¾?",
      english: "We can talk, Mom! I learned in Tamil class how to speak about our house, our hometown, and my friends, Mom. Shall we start speaking in Tamil tomorrow?",
      translit: "Paesalaam ammaa. Nam veettaip patriyum, nam ooraip patriyum, en nanbargalaip patriyum paesa naan thamizh vaguppil katrukkondaen ammaa. Naalaikku naam thamizhil paesa aarambikkalaamaa?",
      audio: "audio/dialogue/dialogue3_7.mp3",
      vocabulary: ["à®…à®®à¯à®®à®¾", "à®Šà®°à¯", "à®µà®•à¯à®ªà¯à®ªà¯", "à®¨à®¾à®³à¯ˆ", "à®†à®°à®®à¯à®ªà®¿"]
    },
    {
      id: 8,
      speaker: "à®…à®®à¯à®®à®¾",
      speakerRole: "Amma",
      tamil: "à®¨à®¾à®³à¯ˆà®•à¯à®•à®¾? à®‡à®©à¯à®±à¯ˆà®•à¯à®•à¯‡... à®‡à®ªà¯à®ªà¯Šà®´à¯à®¤à¯‡ à®†à®°à®®à¯à®ªà®¿à®•à¯à®•à®²à®¾à®®à¯‡.",
      english: "Tomorrow? Let's start today itself... right now!",
      translit: "Naalaikkaa? Inraikkae... ippozhudhae aarambikkalaamae.",
      audio: "audio/dialogue/dialogue3_8.mp3",
      vocabulary: ["à®¨à®¾à®³à¯ˆ", "à®‡à®©à¯à®±à¯", "à®‡à®ªà¯à®ªà¯Šà®´à¯à®¤à¯", "à®†à®°à®®à¯à®ªà®¿"]
    },
    {
      id: 9,
      speaker: "à®•à®µà®¿à®©à¯",
      speakerRole: "Kavin",
      tamil: "à®†à®°à®®à¯à®ªà®¿à®•à¯à®•à®²à®¾à®®à¯‡...",
      english: "Let's begin...",
      translit: "Aarambikkalaamae...",
      audio: "audio/dialogue/dialogue3_9.mp3",
      vocabulary: ["à®†à®°à®®à¯à®ªà®¿"]
    }
  ]
};

export const DIALOGUES = [
  PAGE_11_DIALOGUE,
  PAGE_13_DIALOGUE
];

// Helper to correctly segment Tamil words into grapheme clusters (letter tiles)
export function splitTamilLetters(text) {
  if (!text) return [];
  const clean = text.trim();
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter("ta", { granularity: "grapheme" });
    return Array.from(segmenter.segment(clean), s => s.segment).filter(s => s.trim().length > 0);
  }
  const matches = clean.match(/[\u0B80-\u0BFF][\u0BBE-\u0BCD\u0BD7]*/g);
  return matches ? matches.filter(s => s.trim().length > 0) : Array.from(clean);
}

// Letter phonics mapping dictionary
const TAMIL_PHONICS = {
  // Pure vowels
  "அ": { root: "Vowel (உயிர்)", sound: "A" },
  "ஆ": { root: "Long Vowel (நெடில்)", sound: "Aa" },
  "இ": { root: "Vowel (உயிர்)", sound: "I" },
  "ஈ": { root: "Long Vowel (நெடில்)", sound: "Ee" },
  "உ": { root: "Vowel (உயிர்)", sound: "U" },
  "ஊ": { root: "Long Vowel (நெடில்)", sound: "Oo" },
  "எ": { root: "Vowel (உயிர்)", sound: "E" },
  "ஏ": { root: "Long Vowel (நெடில்)", sound: "Ae" },
  "ஐ": { root: "Vowel (உயிர்)", sound: "Ai" },
  "ஒ": { root: "Vowel (உயிர்)", sound: "O" },
  "ஓ": { root: "Long Vowel (நெடில்)", sound: "Oa" },
  "ஔ": { root: "Vowel (உயிர்)", sound: "Au" },
  "ஃ": { root: "Ayutham (ஆய்தம்)", sound: "Akh" }
};

export function autoGeneratePhonics(letters) {
  if (!letters || !letters.length) return { breakdowns: [], translit: "" };

  const breakdowns = letters.map(letter => {
    // 1. Check known vowels
    if (TAMIL_PHONICS[letter]) {
      return { letter, root: TAMIL_PHONICS[letter].root, sound: TAMIL_PHONICS[letter].sound };
    }

    // 2. Pure consonant with Pulli (்)
    if (letter.endsWith("\u0BCD")) {
      return { letter, root: "Pure Consonant (மெய்)", sound: estimateConsonantSound(letter) };
    }

    // 3. Vowel compound
    return { letter, root: "Consonant + Vowel", sound: estimateSyllableSound(letter) };
  });

  const translit = breakdowns.map(b => b.sound).join("-");
  return { breakdowns, translit };
}

function estimateConsonantSound(char) {
  const base = char.charAt(0);
  const map = {
    "க": "K", "ங": "Ng", "ச": "S", "ஞ": "Nj", "ட": "T", "ண": "N",
    "த": "Th", "ந": "N", "ப": "P", "ம": "M", "ய": "Y", "ர": "R",
    "ல": "L", "வ": "V", "ழ": "Zh", "ள": "L", "ற": "R", "ன": "N",
    "ஜ": "J", "ஷ": "Sh", "ஸ": "S", "ஹ": "H"
  };
  return map[base] || "C";
}

function estimateSyllableSound(char) {
  const base = char.charAt(0);
  const sign = char.slice(1);
  const consMap = {
    "க": "k", "ங": "ng", "ச": "s", "ஞ": "nj", "ட": "d", "ண": "n",
    "த": "th", "ந": "n", "ப": "p", "ம": "m", "ய": "y", "ர": "r",
    "ல": "l", "வ": "v", "ழ": "zh", "ள": "l", "ற": "r", "ன": "n",
    "ஜ": "j", "ஷ": "sh", "ஸ": "s", "ஹ": "h"
  };
  const vowelMap = {
    "": "a",
    "\u0BBE": "aa", // ா
    "\u0BBF": "i",  // ி
    "\u0BC0": "ee", // ீ
    "\u0BC1": "u",  // ு
    "\u0BC2": "oo", // ூ
    "\u0BC6": "e",  // ெ
    "\u0BC7": "ae", // ே
    "\u0BC8": "ai", // ை
    "\u0BCA": "o",  // ொ
    "\u0BCB": "oa", // ோ
    "\u0BCC": "au"  // ௌ
  };

  const c = consMap[base] || "t";
  const v = vowelMap[sign] !== undefined ? vowelMap[sign] : "a";
  const res = c + v;
  return res.charAt(0).toUpperCase() + res.slice(1);
}

