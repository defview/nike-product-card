/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        chirp: ["Chirp", "sans-serif"],
        chirpe: ["ChirpExtended", "sans-serif"],
      },
      backgroundImage: {
        home: "url('/img/Nikebg4.png')",
      },
    },
  },
  plugins: [],
}

