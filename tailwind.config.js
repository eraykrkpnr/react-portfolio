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
        burtons: "burtons",
        InterTight: "InterTight",
        Coolvetica: "Coolvetica"
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}
