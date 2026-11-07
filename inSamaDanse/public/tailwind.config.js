tailwind.config = {
  theme: {
    extend: {
      
       fontSize: {
        "base": "14px",
        "lg": "15px",
        "xl": "16px",
        "1xl": "18px",
        "2xl": "32px",
        "3xl": "42px",
        "4xl": "62px",
      },
      screens: {
      'tablet': '864px',
      'mobile': '360px',
      "pc": "1280px",
      "dek": '1440px',
      "mobile1": '600px'
      
    },
     

    //  maxWidth: {
    //     '8xl': '1300px', // 1440px
    //     'full': '100%',
    //     'screen-xl': '1280px', // Пример из стандартных
    //   },
        fontFamily: {
        jostMedium : ['Jost Medium', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        JostSemibold : ['Jost SemiBold', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        helveticaRegular : ['Helvetica Regular', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        HelveticaBold : ['Helvetica Bold', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        FahkwangRegular: ['Fahkwang Regular', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        FahkwangMedium: ['Fahkwang Medium', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        inter: ['Inter_18pt Regular', 'sans-serif'], // Добавление Roboto как основного шрифта для класса font-sans
        // Добавление Roboto как основного шрифта для класса font-sans
      },
    },
  },
};



