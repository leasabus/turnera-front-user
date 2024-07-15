/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#edf2f4',
        red: '#DA1111',
        green : '#45DA11',
        gray: '#6c757d',
        blue: '#325BEE'
      }
    },
  },
  plugins: [],
}

