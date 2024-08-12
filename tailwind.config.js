/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'custom-blue':'#536B8D',
      'steel-blue':{
      400:'#536B8D',
      },
      },
    },
  },
  plugins: [],
}