/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#1A1C20',      // Black-greyish
        parchment: '#F5F5F0',     // Off-white parchment
        gold: '#D4AF37',          // Gold accent
      },
      fontFamily: {
        // English Fonts
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
        // Arabic Fonts
        arabic: ['Amiri', 'Traditional Arabic', 'serif'],
        arabicDisplay: ['Scheherazade New', 'Amiri', 'serif'],
        arabicNaskh: ['Noto Naskh Arabic', 'Amiri', 'serif'],
      },
    },
  },
  plugins: [],
}
