/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['var(--font-inter)', fontFamily.sans]
      },
      colors: {
        "brown": "#b87440",
      },
      borderRadius: {
        "4xl": "2.5rem"
      }
    },
  },
  plugins: [],
}
