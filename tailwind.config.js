// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // tous tes fichiers React/Vite
  ],
  theme: {
    extend: {
      fontFamily: {
        seasons: ['TheSeasonsSpring'],   // ✅ Police The Seasons
        poppins: ['Poppins', 'sans-serif'], // ✅ Police Poppins
      },
    },
  },
  plugins: [],
}
