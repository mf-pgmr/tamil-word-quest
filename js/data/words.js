// Curated Tamil vocabulary database for young learners
export const LEVELS = [
  {
    id: 1,
    title: "Level 1: Root Words & Pulli (புள்ளி)",
    subtitle: "Simple 2 & 3 letter words without complex vowel signs",
    badge: "🌱 Seedling Reader",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 2,
    title: "Level 2: The Long 'Aa' Sound (துணைக்கால் ா)",
    subtitle: "Words with the stretching 'ா' sound",
    badge: "⭐ Word Explorer",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 3,
    title: "Level 3: The 'i' and 'ee' Sounds (ி, ீ)",
    subtitle: "Words with loop modifiers above letters",
    badge: "🚀 Sound Champion",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 4,
    title: "Level 4: Curves & Loops (ு, ூ, ை, ோ)",
    subtitle: "Popular everyday 2, 3, and 4 letter words",
    badge: "👑 Tamil Master",
    color: "from-amber-500 to-orange-600"
  }
];

export const VOCABULARY = [
  // --- LEVEL 1: ROOT WORDS & PULLI (NO VOWEL SIGNS EXCEPT PULLI) ---
  {
    id: "l1_1",
    level: 1,
    tamil: "கல்",
    letters: ["க", "ல்"],
    breakdowns: [
      { letter: "க", root: "க் + அ", sound: "Ka" },
      { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L (ending)" }
    ],
    translit: "Kal",
    english: "Stone",
    emoji: "🪨",
    hint: "Hard and found on the ground or in river beds."
  },
  {
    id: "l1_2",
    level: 1,
    tamil: "கண்",
    letters: ["க", "ண்"],
    breakdowns: [
      { letter: "க", root: "க் + அ", sound: "Ka" },
      { letter: "ண்", root: "Pure Consonant (மெய்)", sound: "N (retroflex)" }
    ],
    translit: "Kan",
    english: "Eye",
    emoji: "👁️",
    hint: "You use this to see the world!"
  },
  {
    id: "l1_3",
    level: 1,
    tamil: "பல்",
    letters: ["ப", "ல்"],
    breakdowns: [
      { letter: "ப", root: "ப் + அ", sound: "Pa" },
      { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }
    ],
    translit: "Pal",
    english: "Tooth",
    emoji: "🦷",
    hint: "You brush them every morning."
  },
  {
    id: "l1_4",
    level: 1,
    tamil: "மண்",
    letters: ["ம", "ண்"],
    breakdowns: [
      { letter: "ம", root: "ம் + அ", sound: "Ma" },
      { letter: "ண்", root: "Pure Consonant (மெய்)", sound: "N" }
    ],
    translit: "Man",
    english: "Soil / Sand",
    emoji: "🪴",
    hint: "Plants and trees grow in this."
  },
  {
    id: "l1_5",
    level: 1,
    tamil: "படம்",
    letters: ["ப", "ட", "ம்"],
    breakdowns: [
      { letter: "ப", root: "ப் + அ", sound: "Pa" },
      { letter: "ட", root: "ட் + அ", sound: "Da" },
      { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }
    ],
    translit: "Pa-dam",
    english: "Picture",
    emoji: "🖼️",
    hint: "A drawing, photo, or painting in a frame."
  },
  {
    id: "l1_6",
    level: 1,
    tamil: "மரம்",
    letters: ["ம", "ர", "ம்"],
    breakdowns: [
      { letter: "ம", root: "ம் + அ", sound: "Ma" },
      { letter: "ர", root: "ர் + அ", sound: "Ra" },
      { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }
    ],
    translit: "Ma-ram",
    english: "Tree",
    emoji: "🌳",
    hint: "Has green leaves, a trunk, and gives shade."
  },
  {
    id: "l1_7",
    level: 1,
    tamil: "நகம்",
    letters: ["ந", "க", "ம்"],
    breakdowns: [
      { letter: "ந", root: "ந் + அ", sound: "Na" },
      { letter: "க", root: "க் + அ", sound: "Ga / Ka" },
      { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }
    ],
    translit: "Na-gam",
    english: "Nail (Finger/Toe)",
    emoji: "💅",
    hint: "At the tip of your fingers and toes."
  },
  {
    id: "l1_8",
    level: 1,
    tamil: "கடல்",
    letters: ["க", "ட", "ல்"],
    breakdowns: [
      { letter: "க", root: "க் + அ", sound: "Ka" },
      { letter: "ட", root: "ட் + அ", sound: "Dal" },
      { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }
    ],
    translit: "Ka-dal",
    english: "Sea / Ocean",
    emoji: "🌊",
    hint: "A giant body of salty water with big waves."
  },
  {
    id: "l1_9",
    level: 1,
    tamil: "பட்டம்",
    letters: ["ப", "ட்", "ட", "ம்"],
    breakdowns: [
      { letter: "ப", root: "ப் + அ", sound: "Pa" },
      { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T (stop)" },
      { letter: "ட", root: "ட் + அ", sound: "Tam" },
      { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }
    ],
    translit: "Pat-tam",
    english: "Kite",
    emoji: "🪁",
    hint: "Flies high in the sky attached to a thread."
  },
  {
    id: "l1_10",
    level: 1,
    tamil: "கப்பல்",
    letters: ["க", "ப்", "ப", "ல்"],
    breakdowns: [
      { letter: "க", root: "க் + அ", sound: "Ka" },
      { letter: "ப்", root: "Pure Consonant (மெய்)", sound: "P" },
      { letter: "ப", root: "ப் + அ", sound: "Pal" },
      { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }
    ],
    translit: "Kap-pal",
    english: "Ship",
    emoji: "🚢",
    hint: "A large vessel sailing across the sea."
  },

  // --- LEVEL 2: THE LONG 'AA' SOUND (துணைக்கால் ா) ---
  {
    id: "l2_1",
    level: 2,
    tamil: "பால்",
    letters: ["பா", "ல்"],
    breakdowns: [
      { letter: "பா", root: "ப் + ஆ", sound: "Paa" },
      { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }
    ],
    translit: "Paal",
    english: "Milk",
    emoji: "🥛",
    hint: "White, nutritious drink from cows."
  },
  {
    id: "l2_2",
    level: 2,
    tamil: "கால்",
    letters: ["கா", "ல்"],
    breakdowns: [
      { letter: "கா", root: "க் + ஆ", sound: "Kaa" },
      { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }
    ],
    translit: "Kaal",
    english: "Leg",
    emoji: "🦵",
    hint: "You use both of these to run and walk."
  },
  {
    id: "l2_3",
    level: 2,
    tamil: "வால்",
    letters: ["வா", "ல்"],
    breakdowns: [
      { letter: "வா", root: "வ் + ஆ", sound: "Vaa" },
      { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }
    ],
    translit: "Vaal",
    english: "Tail",
    emoji: "🐕",
    hint: "Dogs wag this when they are happy!"
  },
  {
    id: "l2_4",
    level: 2,
    tamil: "பாய்",
    letters: ["பா", "ய்"],
    breakdowns: [
      { letter: "பா", root: "ப் + ஆ", sound: "Paa" },
      { letter: "ய்", root: "Pure Consonant (மெய்)", sound: "Y" }
    ],
    translit: "Paai",
    english: "Mat",
    emoji: "🧘",
    hint: "Spread on the floor to sit or sleep."
  },
  {
    id: "l2_5",
    level: 2,
    tamil: "நாய்",
    letters: ["நா", "ய்"],
    breakdowns: [
      { letter: "நா", root: "ந் + ஆ", sound: "Naa" },
      { letter: "ய்", root: "Pure Consonant (மெய்)", sound: "Y" }
    ],
    translit: "Naai",
    english: "Dog",
    emoji: "🐶",
    hint: "A friendly pet that barks 'bow-bow'!"
  },
  {
    id: "l2_6",
    level: 2,
    tamil: "காடு",
    letters: ["கா", "டு"],
    breakdowns: [
      { letter: "கா", root: "க் + ஆ", sound: "Kaa" },
      { letter: "டு", root: "ட் + உ", sound: "Du" }
    ],
    translit: "Kaa-du",
    english: "Forest",
    emoji: "🌲",
    hint: "A dense wild place full of tall trees and wildlife."
  },
  {
    id: "l2_7",
    level: 2,
    tamil: "மாடு",
    letters: ["மா", "டு"],
    breakdowns: [
      { letter: "மா", root: "ம் + ஆ", sound: "Maa" },
      { letter: "டு", root: "ட் + உ", sound: "Du" }
    ],
    translit: "Maa-du",
    english: "Cow / Ox",
    emoji: "🐄",
    hint: "A farm animal that eats grass and moos."
  },
  {
    id: "l2_8",
    level: 2,
    tamil: "வானம்",
    letters: ["வா", "ந", "ம்"],
    breakdowns: [
      { letter: "வா", root: "வ் + ஆ", sound: "Vaa" },
      { letter: "ந", root: "ந் + அ", sound: "Na" },
      { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }
    ],
    translit: "Vaa-nam",
    english: "Sky",
    emoji: "☁️",
    hint: "Blue above us where clouds, sun, and stars dwell."
  },
  {
    id: "l2_9",
    level: 2,
    tamil: "காகம்",
    letters: ["கா", "க", "ம்"],
    breakdowns: [
      { letter: "கா", root: "க் + ஆ", sound: "Kaa" },
      { letter: "க", root: "க் + அ", sound: "Gam" },
      { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }
    ],
    translit: "Kaa-gam",
    english: "Crow",
    emoji: "🐦‍⬛",
    hint: "A smart black bird that says 'kaa-kaa'!"
  },
  {
    id: "l2_10",
    level: 2,
    tamil: "பாலம்",
    letters: ["பா", "ல", "ம்"],
    breakdowns: [
      { letter: "பா", root: "ப் + ஆ", sound: "Paa" },
      { letter: "ல", root: "ல் + அ", sound: "Lam" },
      { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }
    ],
    translit: "Paa-lam",
    english: "Bridge",
    emoji: "🌉",
    hint: "Crosses over a river or a railway track."
  },

  // --- LEVEL 3: SHORT & LONG 'I' SOUNDS (ி, ீ) ---
  {
    id: "l3_1",
    level: 3,
    tamil: "கிளி",
    letters: ["கி", "ளி"],
    breakdowns: [
      { letter: "கி", root: "க் + இ", sound: "Ki" },
      { letter: "ளி", root: "ள் + இ", sound: "Li" }
    ],
    translit: "Ki-li",
    english: "Parrot",
    emoji: "🦜",
    hint: "A green bird with a red beak that can mimic speech."
  },
  {
    id: "l3_2",
    level: 3,
    tamil: "நரி",
    letters: ["ந", "ரி"],
    breakdowns: [
      { letter: "ந", root: "ந் + அ", sound: "Na" },
      { letter: "ரி", root: "ர் + இ", sound: "Ri" }
    ],
    translit: "Na-ri",
    english: "Fox",
    emoji: "🦊",
    hint: "A clever wild animal with a bushy tail."
  },
  {
    id: "l3_3",
    level: 3,
    tamil: "மீன்",
    letters: ["மீ", "ன்"],
    breakdowns: [
      { letter: "மீ", root: "ம் + ஈ", sound: "Meen" },
      { letter: "ன்", root: "Pure Consonant (மெய்)", sound: "N" }
    ],
    translit: "Meen",
    english: "Fish",
    emoji: "🐟",
    hint: "Swims underwater with fins and gills."
  },
  {
    id: "l3_4",
    level: 3,
    tamil: "தீ",
    letters: ["தீ"],
    breakdowns: [
      { letter: "தீ", root: "த் + ஈ", sound: "Thee" }
    ],
    translit: "Thee",
    english: "Fire",
    emoji: "🔥",
    hint: "Hot flame that glows orange and gives warmth."
  },
  {
    id: "l3_5",
    level: 3,
    tamil: "மணி",
    letters: ["ம", "ணி"],
    breakdowns: [
      { letter: "ம", root: "ம் + அ", sound: "Ma" },
      { letter: "ணி", root: "ண் + இ", sound: "Ni" }
    ],
    translit: "Ma-ni",
    english: "Bell / Time",
    emoji: "🔔",
    hint: "Rings at school or temple; also means 'clock time'."
  },
  {
    id: "l3_6",
    level: 3,
    tamil: "விரல்",
    letters: ["வி", "ர", "ல்"],
    breakdowns: [
      { letter: "வி", root: "வ் + இ", sound: "Vi" },
      { letter: "ர", root: "ர் + அ", sound: "Ra" },
      { letter: "ல்", root: "Pure Consonant (மெய்)", sound: "L" }
    ],
    translit: "Vi-ral",
    english: "Finger",
    emoji: "👆",
    hint: "You have 5 of these on each hand."
  },
  {
    id: "l3_7",
    level: 3,
    tamil: "சிங்கம்",
    letters: ["சி", "ங்", "க", "ம்"],
    breakdowns: [
      { letter: "சி", root: "ச் + இ", sound: "Sing" },
      { letter: "ங்", root: "Pure Consonant (மெய்)", sound: "Ng" },
      { letter: "க", root: "க் + அ", sound: "Gam" },
      { letter: "ம்", root: "Pure Consonant (மெய்)", sound: "M" }
    ],
    translit: "Sing-gam",
    english: "Lion",
    emoji: "🦁",
    hint: "The majestic King of the Jungle with a golden mane."
  },
  {
    id: "l3_8",
    level: 3,
    tamil: "நிலா",
    letters: ["நி", "லா"],
    breakdowns: [
      { letter: "நி", root: "ந் + இ", sound: "Ni" },
      { letter: "லா", root: "ல் + ஆ", sound: "Laa" }
    ],
    translit: "Ni-laa",
    english: "Moon",
    emoji: "🌙",
    hint: "Shines bright in the night sky."
  },

  // --- LEVEL 4: CURVES & LOOPS (ு, ூ, ை, ோ) ---
  {
    id: "l4_1",
    level: 4,
    tamil: "குடை",
    letters: ["கு", "டை"],
    breakdowns: [
      { letter: "கு", root: "க் + உ", sound: "Ku" },
      { letter: "டை", root: "ட் + ஐ", sound: "Dai" }
    ],
    translit: "Ku-dai",
    english: "Umbrella",
    emoji: "☂️",
    hint: "Opens up to protect you from rain and sunshine."
  },
  {
    id: "l4_2",
    level: 4,
    tamil: "பூனை",
    letters: ["பூ", "னை"],
    breakdowns: [
      { letter: "பூ", root: "ப் + ஊ", sound: "Poo" },
      { letter: "னை", root: "ன் + ஐ", sound: "Nai" }
    ],
    translit: "Poo-nai",
    english: "Cat",
    emoji: "🐱",
    hint: "Whiskered pet that drinks milk and purrs."
  },
  {
    id: "l4_3",
    level: 4,
    tamil: "யானை",
    letters: ["யா", "னை"],
    breakdowns: [
      { letter: "யா", root: "ய் + ஆ", sound: "Yaa" },
      { letter: "னை", root: "ன் + ஐ", sound: "Nai" }
    ],
    translit: "Yaa-nai",
    english: "Elephant",
    emoji: "🐘",
    hint: "The biggest land animal with giant ears and a trunk."
  },
  {
    id: "l4_4",
    level: 4,
    tamil: "வீடு",
    letters: ["வீ", "டு"],
    breakdowns: [
      { letter: "வீ", root: "வ் + ஈ", sound: "Vee" },
      { letter: "டு", root: "ட் + உ", sound: "Du" }
    ],
    translit: "Vee-du",
    english: "House / Home",
    emoji: "🏡",
    hint: "Where you and your family live."
  },
  {
    id: "l4_5",
    level: 4,
    tamil: "முட்டை",
    letters: ["மு", "ட்", "டை"],
    breakdowns: [
      { letter: "மு", root: "ம் + உ", sound: "Mu" },
      { letter: "ட்", root: "Pure Consonant (மெய்)", sound: "T" },
      { letter: "டை", root: "ட் + ஐ", sound: "Tai" }
    ],
    translit: "Mut-tai",
    english: "Egg",
    emoji: "🥚",
    hint: "Oval shaped; hens lay them."
  },
  {
    id: "l4_6",
    level: 4,
    tamil: "தவளை",
    letters: ["த", "வ", "ளை"],
    breakdowns: [
      { letter: "த", root: "த் + அ", sound: "Tha" },
      { letter: "வ", root: "வ் + அ", sound: "Va" },
      { letter: "ளை", root: "ள் + ஐ", sound: "Lai" }
    ],
    translit: "Tha-va-lai",
    english: "Frog",
    emoji: "🐸",
    hint: "Amphibian that hops and ribbits near ponds."
  },
  {
    id: "l4_7",
    level: 4,
    tamil: "குதிரை",
    letters: ["கு", "தி", "ரை"],
    breakdowns: [
      { letter: "கு", root: "க் + உ", sound: "Ku" },
      { letter: "தி", root: "த் + இ", sound: "Dhi" },
      { letter: "ரை", root: "ர் + ஐ", sound: "Rai" }
    ],
    translit: "Ku-dhi-rai",
    english: "Horse",
    emoji: "🐴",
    hint: "Gallops fast and loves eating fresh hay."
  },
  {
    id: "l4_8",
    level: 4,
    tamil: "தோசை",
    letters: ["தோ", "சை"],
    breakdowns: [
      { letter: "தோ", root: "த் + ஓ", sound: "Tho" },
      { letter: "சை", root: "ச் + ஐ", sound: "Sai" }
    ],
    translit: "Tho-sai",
    english: "Dosa",
    emoji: "🥞",
    hint: "Crispy golden South Indian crepe enjoyed with chutney and sambar!"
  }
];
