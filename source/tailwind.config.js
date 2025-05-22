/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surprise brand colors: deep blue, gradient violet, lime accent
        primary: "#2E4A7D",
        secondary: "#7F53AC",
        accent: "#4ADE80",
        bg: "#F8FAFC",
        hero: "linear-gradient(90deg, #7F53AC 0%, #647DEE 100%)"
      },
      fontFamily: {
        logo: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: []
}