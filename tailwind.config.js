/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'robotoc': ['Roboto Condensed', 'sans-serif']
      },
      colors: {
        "brown": 
        {
          "500": "#b87440",
        },
    },
    },
  },
  plugins: [],
}
