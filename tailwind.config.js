/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Eğer Next.js 13+ app directory kullanıyorsan bunu da ekle
    "./src/**/*.{js,ts,jsx,tsx}",  // src klasörü kullanıyorsan bunu da ekle
  ],
  theme: {
    extend: {
      colors: {
        "eray" : "#09090b",
        "textColor" : "#f9f9f9",
        "retro-gray": "#808080", // Windows/Mac gri arkaplanı
        "retro-light": "#f3f4f6", // Pencere içi açık gri
        "retro-border": "#000000", // Keskin siyah kenarlıklar
      },
      fontFamily: {
        // 'VT323' bizim retro bilgisayar fontumuz (ÖNEMLİ)
        mono: ["VT323", "monospace"], 
        sans: ["VT323", "sans-serif"], // Varsayılan sans fontunu da retro yapıyoruz
      },
      // Font boyutlarını 'extend' içine almadım çünkü varsayılanları korumak istiyoruz.
      // Senin 72px'lik boyutlarını özel isimlerle ekleyelim ki standart yapıyı bozmasın.
      fontSize: {
        // Standart Tailwind boyutlarını koruyoruz (UI elementleri için gerekli)
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        
        // Senin özel büyük boyutlarını 'display' ön ekiyle ekleyelim
        'display-sm': '27px',
        'display-base': '30px',
        'display-lg': '36px',
        'display-xl': '42px',
        'display-2xl': '48px',
        'display-3xl': '54px',
        'display-4xl': '72px',
      },
      backgroundImage: {
        'retro-pattern': "linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)",
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}