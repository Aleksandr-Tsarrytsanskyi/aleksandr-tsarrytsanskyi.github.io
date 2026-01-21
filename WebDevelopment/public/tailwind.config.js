tailwind.config = {
  theme: {
    extend: {
      colors: {
        white: {
          100: "#ffffff",
          200: "#f5f5f5",
          300: "#dedede",
          400: "#f0f0f0"
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
        fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        poppins: ['Poppins', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        roboto: ['Roboto', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
      },
    },
  },
};



