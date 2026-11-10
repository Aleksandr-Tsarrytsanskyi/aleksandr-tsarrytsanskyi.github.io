/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/**/*.{html,js}",
  ],

  theme: {
    extend: {
     colors: {
       50: "#effaf2",
        100: "#d9f3df",
        200: "#b8e8c4",
        300: "#87d69c",
        400: "#4cbd6c",
          500: "#239c49",
          600: "#187d39",
          700: "#176332",
          800: "#18502c",
          900: "#154226"
     },

     fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "30px",
     },

     fontFamily: {
       inter: ['Inter', 'sans-serif'],
        
      },
    },
  },

  plugins: [],
};