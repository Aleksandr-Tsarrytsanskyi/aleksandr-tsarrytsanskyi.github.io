tailwind.config = {
  theme: {
    extend: {
      colors: {
        white: {
          100: "#fff",
          200: "#f3f3f3"
        },
        blue: "#003b77",
        black: {
          100: "#111827",
          200: "#6b7280"
        },
        green: "#9f9"
      },
       fontSize: {
        "base": "16px",
        "lg": "18px",
        "xl": "20px",
        "1xl": "24px",
        "2xl": "52px",
        "3xl": "60px",
      },
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
        montserrat : ['Montserrat', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        sans: ['Open Sans', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        // Добавление Roboto как основного шрифта для класса font-sans
      },
    },
  },
};



