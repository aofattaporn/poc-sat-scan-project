/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#4E2A81',
        'secondary': '#C0AEF9',
        'main-white' : '#FFFFF',
        'grey' :  '#FAFAFC',
        'black-primary' : '#404040'
      },
    },
  },
  plugins: [
]}