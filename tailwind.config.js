/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'light-green': '#0BE58A',
      'white': '#FFF',
      'black': '#000',
      'p-color': 'rgba(21, 11, 43, 0.60)',
      'card-p-color': '#878787',
      'sidebar-p-color': 'rgba(40, 40, 40, 0.70)'
    },
    fontFamily: {
      sans: ['Lexend', 'sans-serif']
    }
  },
  plugins: [daisyui],
}