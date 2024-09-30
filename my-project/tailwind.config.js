/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutralsilver': '#F5F7FA',
        'neutralDgrey': '#4D4D4D',
        'brandPrimary': '#4CAF4F',
        'neutralGrey': '#F5F7FA',
        'gray900': '#18191F',


      }
    },
  },
  plugins: [],
}