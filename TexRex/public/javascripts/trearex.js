import { modalController } from "./modal/modal.js";
document.addEventListener("DOMContentLoaded", function () {
  modalController({
    modal: ".madal1",
    btnOpen: ".modal_window1",
    btnClose: ".modal__close",
    time: "300",
  });
  modalController({
    modal: ".madal2",
    btnOpen: ".modal_window2",
    btnClose: ".modal__close",
    time: "300",
  });

  modalController({
    modal: ".madal3",
    btnOpen: ".modal_window3",
    btnClose: ".modal__close",
    time: "300",
  });

  modalController({
    modal: ".madal4",
    btnOpen: ".modal_window4",
    btnClose: ".modal__close",
    time: "300",
  });

  modalController({
    modal: ".madal5",
    btnOpen: ".modal_window5",
    btnClose: ".modal__close",
    time: "300",
  });
  const modal4 = document.querySelector(".madal4");
  const modal3Btn = document.querySelector(".madal3 .btn");
  const modal3 = document.querySelector(".madal3");
  const modalBack = document.querySelector(".madal4 .back_btn");
  const modalClose = document.querySelectorAll(".modal__close");
  const modal = document.querySelectorAll(".modal");
  const modalform = document.querySelectorAll(".login_account");

  modalform.forEach((submit) => {
    submit.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  });
  modalBack.addEventListener("click", function () {
    modal4.classList.remove("modal_animate");
  });
  modal3Btn.addEventListener("click", function () {
    modal3.classList.remove("modal_animate");
  });

  modal.forEach((el) => {
    el.addEventListener("click", function (event) {
      event.target
        .closest(".modal_back")
        .parentElement.parentElement.classList.remove("modal_animate");
    });
  });

  modalClose.forEach((close) => {
    close.addEventListener("click", function () {
      modal.forEach((modal) => {
        modal.classList.remove("modal_animate");
      });
    });
  });

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
        1680: {
          spaceBetween: 10,
          slidesPerView: 4,
        },

        960: {
          spaceBetween: 10,
          slidesPerView: 3,
        },

          768: {
          spaceBetween: 10,
          slidesPerView: 2,
        },
           480: {
          spaceBetween: 10,
          slidesPerView: 2,
        },

            320: {
          spaceBetween: 10,
          slidesPerView: 2,
        },
      },
    });
  }
  swiperSliders();
});
