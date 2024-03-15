/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        White_p: "#F9F9F9",
        gray_p: "#686868",
        black_p: "#141414"
      }
    },
  },
  plugins: [],
}
