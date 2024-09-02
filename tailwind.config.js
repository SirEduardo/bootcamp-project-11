/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customWhite: 'rgba(255, 255, 255, 0.3)',
      },
      animation: {
        spin: "spin 1s linear infinite"
      }
    },
  },
  plugins: [],
}