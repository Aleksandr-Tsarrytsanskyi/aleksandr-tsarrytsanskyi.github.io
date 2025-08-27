document.addEventListener("DOMContentLoaded", function() {         
//   const swiper = new Swiper('.swiper', {
//   // Optional parameters
//  slidesPerView: 3,
//   loop: true,

//   // If we need pagination
//   breakpoints: {
//             // Для экранов шириной до 768px
//             // 767: {
//             //     slidesPerView: 1,
//             //     spaceBetween: 15
//             // },
//             // // Для экранов шириной до 320px
//             // 320: {
//             //     slidesPerView: 1,
//             //     spaceBetween: 20
//             // },
//         },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//     clickable: true
//   },

//   // And if we need scrollbar
 
// });


//     const swiper1 = new Swiper('.swiper1', {
//   // Optional parameters
//  slidesPerView: 3,
//   loop: true,

//   // If we need pagination
//   // breakpoints: {
//   //           // Для экранов шириной до 768px
//   //           935: {
//   //               slidesPerView: 1,
//   //               spaceBetween: 15
//   //           },
//   //           // Для экранов шириной до 320px
//   //           320: {
//   //               slidesPerView: 1,
//   //               spaceBetween: 20
//   //           },

//   //       },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//     clickable: true
//   },

//   // And if we need scrollbar
 
// });


//     const swiper2 = new Swiper('.swiper2', {
//   // Optional parameters
//  slidesPerView: 1,
//   loop: true,

//   // If we need pagination
//   // breakpoints: {
//   //           // Для экранов шириной до 768px
//   //           935: {
//   //               slidesPerView: 1,
//   //               spaceBetween: 15
//   //           },
//   //           // Для экранов шириной до 320px
//   //           320: {
//   //               slidesPerView: 1,
//   //               spaceBetween: 20
//   //           },

//   //       },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//     clickable: true
//   },

//   // And if we need scrollbar
 
// });


 const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

    resizableSwiper("(max-width: 935px)", ".slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true
  },
    // autoplay: {
    //     delay: 5000,
    //   },
    // pagination: {
    //   el: ".swiperslider-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
  });

  resizableSwiper("(min-width: 935px)", ".slider1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true
  },
    // autoplay: {
    //     delay: 5000,
    //   },
    // pagination: {
    //   el: ".swiperslider-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
  });


})