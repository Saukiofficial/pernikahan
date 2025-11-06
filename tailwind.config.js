/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Path ke semua file Blade dan React
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      // Kita bisa extend theme di sini nanti
     fontFamily: {
  sans: ['Inter', 'sans-serif'],
  'great-vibes': ['"Great Vibes"', 'cursive'],
  'tangerine': ['"Tangerine"', 'cursive'],
},
    },
  },
  plugins: [],
}
