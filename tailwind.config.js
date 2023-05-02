/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Poppins', 'sans-serif'],
        'condensed': ['Roboto Condensed', 'sans-serif']
      },
      colors: {
        "brown": "#b87440",
    },
    },
  },
  plugins: [],
}
