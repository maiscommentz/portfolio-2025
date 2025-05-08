/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cBlack': '#1F1F1F',
        'cWhite': '#FFFFFF',
        'cPrimary': '#FACB4C',
        'cGray': '#E9E9E9',
      },
    },
  },
  variants: {
    extend: {
      mixBlendMode: ['hover', 'focus'],
    },
  },
  plugins: [],
}

