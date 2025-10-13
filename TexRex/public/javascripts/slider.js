document.addEventListener("DOMContentLoaded", function () {
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

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 9020px)", ".top_slider_header", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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
    },
  });

  //    resizableSwiper("(max-width: 9020px)", ".products_slider", {
  //     loop: true,
  //     spaceBetween: 10,
  //     slidesPerView: 4,
  //     freeMode: true,
  // //      pagination: {
  // //     el: '.swiper-pagination',
  // //     clickable: true
  // //   },
  //   //   navigation: {
  //   //   nextEl: '.swiper-button-next',
  //   //   prevEl: '.swiper-button-prev',
  //   //   clickable: true
  //   // },
  //     // autoplay: {
  //     //     delay: 5000,
  //     //   },
  //     // pagination: {
  //     //   el: ".swiperslider-pagination",
  //     //   clickable: true,
  //     // },
  //     breakpoints: {
  //       1200: {
  //         spaceBetween: 20,
  //       },
  //     },
  //   });

  const resizableSwiper1 = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper1;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper1 = new Swiper(className, settings);
      const swiperPrev = document.querySelector(".swiperPrev1");
      const swiperNext = document.querySelector(".swiperNext1");

      swiperPrev.addEventListener("click", () => {
        swiper1.slidePrev();
      });
      swiperNext.addEventListener("click", () => {
        swiper1.slideNext();
      });
      if (callback) {
        callback(swiper);
      }
    };
    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper1 !== undefined) swiper.destroy(true, true);
        return;
      }
    };
    breakpoint.addEventListener("change", checker);
    checker();
  };

  resizableSwiper1("(max-width: 9020px)", ".products_slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    //      pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true
    //   },
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
      1680: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
    },
  });
  //   resizableSwiper1("(max-width: 1680px)", ".products_slider_mobile", {
  //   loop: true,
  //   spaceBetween: 10,
  //   slidesPerView: 1,
  //   freeMode: true,
  //   //      pagination: {
  //   //     el: '.swiper-pagination',
  //   //     clickable: true
  //   //   },
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
  //     1680: {
  //       spaceBetween: 20,
  //       slidesPerView: 1,
  //     },
  //   },
  // });

// const swiper2 = new Swiper('.products_slider_mobile', {
//   // Optional parameters
//   loop: true,
//     spaceBetween: 10,
//     slidesPerView: 1,
//     freeMode: true,

//   // If we need pagination
//   // pagination: {
//   //   el: '.swiper-pagination',
//   // },

//   // // Navigation arrows
//   // navigation: {
//   //   nextEl: '.swiper-button-next',
//   //   prevEl: '.swiper-button-prev',
//   // },

//   // // And if we need scrollbar
//   // scrollbar: {
//   //   el: '.swiper-scrollbar',
//   // },
// });

  const products_slider = document.querySelector(".products_slider")
  function changeMatchMedia() {
    
  if(window.innerWidth <= 1680) {
    console.log("OK");
    
    products_slider.classList.remove("products_slider");
    products_slider.classList.add("products_slider_mobile");
  }

}



  const resizableSwiper2 = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper2;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper2 = new Swiper(className, settings);
      const swiperPrev = document.querySelector(".swiperPrev2");
      const swiperNext = document.querySelector(".swiperNext2");

      swiperPrev.addEventListener("click", () => {
        swiper2.slidePrev();
      });
      swiperNext.addEventListener("click", () => {
        swiper2.slideNext();
      });
      if (callback) {
        callback(swiper);
      }
    };
    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper1 !== undefined) swiper.destroy(true, true);
        return;
      }
    };
    breakpoint.addEventListener("change", checker);
    checker();
  };

  resizableSwiper2("(max-width: 9020px)", ".watch_slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    //      pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true
    //   },
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
      1680: {
        spaceBetween: 20,
         slidesPerView: 4,
      },
    },
  });

  const resizableSwiper3 = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper3;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper3 = new Swiper(className, settings);
      const swiperPrev = document.querySelector(".swiperPrev3");
      const swiperNext = document.querySelector(".swiperNext3");

      swiperPrev.addEventListener("click", () => {
        swiper3.slidePrev();
      });
      swiperNext.addEventListener("click", () => {
        swiper3.slideNext();
      });
      if (callback) {
        callback(swiper);
      }
    };
    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper3 !== undefined) swiper3.destroy(true, true);
        return;
      }
    };
    breakpoint.addEventListener("change", checker);
    checker();
  };

  resizableSwiper3("(max-width: 9020px)", ".event_slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    //      pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true
    //   },
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
    },
  });

  function scrollToHeaderBtn() {
    const btnScrollHeader = document.querySelector(".footer__up");
    const header = document.querySelector(".header");

    btnScrollHeader.addEventListener("click", function () {
      if (header) {
        header.scrollIntoView({
          behavior: "smooth", // Для плавной прокрутки
          block: "start", // Прокрутить так, чтобы начало элемента было вверху
        });
      }
    });
  }
  scrollToHeaderBtn();
});
