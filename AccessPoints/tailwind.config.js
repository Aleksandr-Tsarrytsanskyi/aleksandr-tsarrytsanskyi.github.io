/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/**/*.{html,js}",
  ],

  theme: {
    extend: {
     colors: {
      black: "#201f1f"
     },

     fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "30px",
     },

     fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },

  plugins: [],
};