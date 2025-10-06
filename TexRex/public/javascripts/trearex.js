document.addEventListener("DOMContentLoaded", function() {
      function swiperSliders() {
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
        callback(swiper1);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper1 !== undefined) swiper1.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

   resizableSwiper1("(max-width: 9020px)", ".media_slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
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
    },
  });

  

}
swiperSliders()
})