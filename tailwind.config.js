/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#78AD07',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#1E1E1E',
        'gray-light': '#d3dce6',
        'green-light': '#BEF34D',
        'green-cat': '#AEFF00',
        'green-footer': '#78AD07',

      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins:[" Poppins", "sans-serif"]
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],  
}

