// Curated Tamil vocabulary database with 80 words across 4 progressive tiers (No emojis)
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
  }
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

