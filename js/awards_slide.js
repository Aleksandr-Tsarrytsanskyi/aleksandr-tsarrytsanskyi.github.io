    document.addEventListener("DOMContentLoaded", function() {

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

    resizableSwiper("(max-width: 3500px)", ".slider6", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        navigation: {
          nextEl: ".nextslider",
          prevEl: ".prevslider",
        },
        // autoplay: {
        //     delay: 5000,
        //   },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1200: {
            spaceBetween: 20,
          },
        },
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })
})