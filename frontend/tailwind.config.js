/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg-color': '#E7F0FE',
        'main-color': '#3B5987'
      }
    },
  },
  plugins: [],
}