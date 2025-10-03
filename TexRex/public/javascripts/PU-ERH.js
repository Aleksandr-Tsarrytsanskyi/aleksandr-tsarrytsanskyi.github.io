document.addEventListener("DOMContentLoaded", function() {


  //    const resizableSwiper1 = (
  //   breakpoint,
  //   swiperClass,
  //   swiperSettings,
  //   callback
  // ) => {
  //   let swiper1;

  //   breakpoint = window.matchMedia(breakpoint);

  //   const enableSwiper = function (className, settings) {
  //     swiper1 = new Swiper(className, settings);
  //     const swiperPrev = document.querySelector(".swiperPrev1");
  //     const swiperNext = document.querySelector(".swiperNext1");

  //     swiperPrev.addEventListener("click", () => {
  //       swiper1.slidePrev();
  //     });
  //     swiperNext.addEventListener("click", () => {
  //       swiper1.slideNext();
  //     });
  //     if (callback) {
  //       callback(swiper1);
  //     }
  //   };

  //   const checker = function () {
  //     if (breakpoint.matches) {
  //       return enableSwiper(swiperClass, swiperSettings);
  //     } else {
  //       if (swiper1 !== undefined) swiper1.destroy(true, true);
  //       return;
  //     }
  //   };

  //   breakpoint.addEventListener("change", checker);
  //   checker();
  // };

  //  resizableSwiper1("(max-width: 9020px)", ".recommend_slider", {
  //   loop: true,
  //   spaceBetween: 10,
  //   slidesPerView: 4,
  //   freeMode: true,
  //   // pagination: {
  //   //   el: ".swiper-pagination",
  //   //   clickable: true,
  //   // },
  //   //   navigation: {
  //   //   nextEl: '.swiper-button-next',
  //   //   prevEl: '.swiper-button-prev',
  //   //   clickable: true
  //   // },
  //   // autoplay: {
  //   //     delay: 5000,
  //   //   },
  //   // pagination: {
  //   //   el: ".swiperslider-pagination",
  //   //   clickable: true,
  //   // },
  //   breakpoints: {
  //     1200: {
  //       spaceBetween: 20,
  //     },
  //   },
  // });

  
  // let swiper2;
  //     const resizableSwiper2 = (
  //   breakpoint,
  //   swiperClass,
  //   swiperSettings,
  //   callback
  // ) => {

  //   breakpoint = window.matchMedia(breakpoint);

  //   const enableSwiper = function (className, settings) {
  //     swiper2 = new Swiper(className, settings);
  //   //   const swiperPrev = document.querySelector(".swiperPrev1");
  //   //   const swiperNext = document.querySelector(".swiperNext1");

  //   //   swiperPrev.addEventListener("click", () => {
  //   //     swiper2.slidePrev();
  //   //   });
  //   //   swiperNext.addEventListener("click", () => {
  //   //     swiper2.slideNext();
  //   //   });
  //   //   if (callback) {
  //   //     callback(swiper2);
  //   //   }
  //   };

  //   const checker = function () {
  //     if (breakpoint.matches) {
  //       return enableSwiper(swiperClass, swiperSettings);
  //     } else {
  //       if (swiper2 !== undefined) swiper2.destroy(true, true);
  //       return;
  //     }
  //   };

  //   breakpoint.addEventListener("change", checker);
  //   checker();
  // };

  //  resizableSwiper2("(max-width: 9020px)", ".recommend_slider_min", {
  //   loop: true,
  //   spaceBetween: 10,
  //   slidesPerView: 7,
  //   freeMode: true,
  //   // pagination: {
  //   //   el: ".swiper-pagination",
  //   //   clickable: true,
  //   // },
  //   //   navigation: {
  //   //   nextEl: '.swiper-button-next',
  //   //   prevEl: '.swiper-button-prev',
  //   //   clickable: true
  //   // },
  //   // autoplay: {
  //   //     delay: 5000,
  //   //   },
  //   // pagination: {
  //   //   el: ".swiperslider-pagination",
  //   //   clickable: true,
  //   // },
  //   breakpoints: {
  //     1200: {
  //       spaceBetween: 20,
  //     },
  //   },
  // });
   var swiperThumbs = new Swiper(".mySwiperThumbs", {
       loop: true,
       spaceBetween: 10,
       slidesPerView: 4, // Количество отображаемых миниатюр
       freeMode: true,
       watchSlidesProgress: true,
   });

   // Инициализация основного слайдера
   var swiperMain = new Swiper(".mySwiperMain", {
       loop: true,
       spaceBetween: 10,
       navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
       },
       thumbs: {
           swiper: swiperThumbs, // Связываем основной слайдер с миниатюрами
       },
   });


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
      const swiperPrev = document.querySelector(".swiperPrev");
      const swiperNext = document.querySelector(".swiperNext");

      swiperPrev.addEventListener("click", () => {
        swiper.slidePrev();
      });
      swiperNext.addEventListener("click", () => {
        swiper.slideNext();
      });
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

   resizableSwiper("(max-width: 9020px)", ".slider_description", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    //   navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    //   clickable: true
    // },
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
      thumbs: {
        swiper: {
            el: ".recommend_slider_min",
             
        }
     }
    },
  });


  
})