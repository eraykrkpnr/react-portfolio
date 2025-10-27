/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "eray" : "#09090b",
      "textColor" : "#f9f9f9"
    },
    extend: {
      fontFamily: {
        justAnother: "JustAnotherHand"
      },
      fontSize: {
        'xs': '24px',
        'sm': '27px',
        'base': '30px',
        'lg': '36px',
        'xl': '42px',
        '2xl': '48px',
        '3xl': '54px',
        '4xl': '72px',
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}
