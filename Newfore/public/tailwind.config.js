tailwind.config = {
  theme: {
    extend: {
      colors: {
        white: {
          100: "#fefefe",
 
        },
        orange: {
          100: "#f15d26"
        },
        black: {
          100: '#34373c',
          200: "#16171a",
        },
        gray: {
          100: "#f6f8fa"
        }
      },
      //  fontSize: {
      //   "base": "16px",
      //   "lg": "18px",
      //   "xl": "20px",
      //   "1xl": "24px",
      //   "2xl": "52px",
      //   "3xl": "60px",
      // },
      screens: {
      'tablet': '768px',
      'mobile': '375px',
      "pc": "1480px"
      
    },
     

     maxWidth: {
        '8xl': '1300px', // 1440px
        'full': '100%',
        'screen-xl': '1280px', // Пример из стандартных
      },
        fontFamily: {
        raleway : ['Raleway', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        inter: ['Inter', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        urbanist: ['Urbanist', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        // Добавление Roboto как основного шрифта для класса font-sans
        // Добавление Roboto как основного шрифта для класса font-sans
      },
    },
  },
};



