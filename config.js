/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "saba 💜",
  photo: "./img/saba sultana.jpeg",  
   music: "./music/Tangled.mp3",    // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#D8A7E8",           // Main accent color (rose pink)
    accent: "#FFD166",            // Secondary accent color (sky blue)
    dark: {
      background: "#17112B",      // Slate 900
      text: "#FFF4E0",            // Slate 100
    },
    light: {
      background: "#F8EFFF",      // Stone 50
      text: "#3B245C",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
  {
    type: "greeting",
    title: "Hey, My Rapunzel!",
    subtitle: "Tonight, the lanterns are shining just for you ✨"
  },

  {
    type: "countdown",
    from: 3,
    goText: "🌸🌷🌼🌺"
  },

  {
    type: "announcement",
    text: "HAPPY BIRTHDAY, PRINCESS! 👑💜"
  },

  {
    type: "chatbox",
    message:
      "Once upon a time, there was a beautiful soul who deserved her own magical birthday. Today is your day! May your dreams take you to places more beautiful than you ever imagined. 💜✨",
    buttonText: "Continue ✨"
  },

  {
    type: "ideas",
    lines: [
      "A new year of your story begins... 🌸",
      "Keep chasing your dreams. ✨",
      "Let your light shine brighter than the lanterns. 🏮",
      "And remember... <strong>the best is yet to come! 💜</strong>"
    ],
    bigLetters: "DREAM"
  },

  {
    type: "quote",
    text:
      "Sometimes the smallest step in the right direction ends up being the biggest step of your life.",
    author: "For someone who deserves a little more magic ✨"
  },

  {
    type: "stars",
    count: 60
  },

  {
    type: "balloons",
    count: 20
  },

  {
    type: "profile",
    wishTitle: "Happy  Birthday, Beautiful💜! ",
    wishText:
      "May your life always be filled with love, laughter, adventures, beautiful dreams and a little bit of magic. 💜✨"
  },

  {
    type: "fireworks",
    count: 30
  },

  {
    type: "confetti",
    count: 15
  },

  {
    type: "closing",
    text:
      "greatful to have you as my sister, love you 💗...And she lived happily ever after",
    replayText: "Experience the magic again 💜"
  }
]
}