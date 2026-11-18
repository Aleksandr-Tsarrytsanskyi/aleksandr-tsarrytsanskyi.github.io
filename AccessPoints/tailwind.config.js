/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/**/*.{html,js}",
  ],

  theme: {
<<<<<<< HEAD

     screens: {
      mobile: "375px",   // Mobile landscape
      tablet: "768px",   // Tablet // Laptop
      pc: "1280px",  // Desktop
   
    },
=======
    screens: { mobile: "375px", tablet: "768px", pc: "1280px" },
>>>>>>> 978ae9bec0569eb38a82e4e845dcbf30453b9138

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