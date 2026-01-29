tailwind.config = {
  theme: {
    extend: {
      colors: {
        white: {
          100: "#ffffff",
          200: "#f5f5f5",
          300: "#dedede",
          400: "#f0f0f0",
          500: "#e5e7eb",
          600: "#d1d5db"
        },
        blue: "#3e82da",
        black: "#060606"
      },
       fontSize: {
        "xs": "10px",
        "sm": "12px",
        "base": "14px",
        "lg": "16px",
        "xl": "18px",
        "1xl": "30px",
        "2xl": "40px",
        "3xl": "64px",
      },
      screens: {
      'tablet': '768px',
      'mobile': '300px',
      "pc": "1200px"
      
    },

     maxWidth: {
        '8xl': '1300px', // 1440px
        'full': '100%',
        'screen-xl': '1280px', // Пример из стандартных
      },
        fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        poppins: ['Poppins', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        roboto: ['Roboto', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
      },
    },
  },
};



