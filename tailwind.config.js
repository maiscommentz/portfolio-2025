/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cBlack': '#1F1F1F',
        'cWhite': '#FFFFFF',
        'cGreen': '#B9FF69',
        'cGray': '#E9E9E9',
      },
    },
  },
  plugins: [],
}

