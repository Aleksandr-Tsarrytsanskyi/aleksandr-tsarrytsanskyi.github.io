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

  const removeProduct = document.querySelector(".comparison__content");
  const clearProduct = document.querySelectorAll(
    ".comparison__content .remove"
  );
  const clearbtn = document.querySelector(".comparison__item button");
  const modalRemoveProduct = document.querySelector(
    ".modal_comparison_remove_product"
  );
  const modalclearBtn = document.querySelector(".comparison__item button");
  const modalclear = document.querySelector(".modal_comparison_clear");
  const addBasket = document.querySelectorAll(".comparison__content button");
  const modalBesket = document.querySelector(".modal_besket");
  const removemodalBesket = document.querySelector(".modal_besket_remove");
  const modal4 = document.querySelector(".madal4");
  const modal3Btn = document.querySelector(".madal3 .btn");
  const modal3 = document.querySelector(".madal3");
  const modalBack = document.querySelector(".madal4 .back_btn");
  const modalClose = document.querySelectorAll(".modal__close");
  const modal = document.querySelectorAll(".modal");
  const modalform = document.querySelectorAll(".login_account");
  const modalbesket  = document.querySelector(".modal_besket ");
  const favorBtn  = document.querySelectorAll(".comparison__content button ");

  function swiper() {
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

  resizableSwiper("(max-width: 768px)", ".somparison_slider_product", {
    loop: true,
    spaceBetween: 10,
   
    slidesPerView: 1.1,
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
    // breakpoints: {
    //   1200: {
    //     spaceBetween: 20,
    //   },
    // },
  });
  }
  swiper();

  if(window.innerWidth <= 960) {
    favorBtn.forEach(btn => {
      btn.innerHTML = ""

    })
  }

  if(window.innerWidth > 960) {
    favorBtn.forEach(btn => {
      btn.innerHTML = "ДОБАВИТЬ В КОРЗИНУ"

    })
  }

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
  removeProduct.addEventListener("click", function (event) {
    let eventTarget = event.target.closest(
      ".comparison__content_remove"
    ).parentElement;
    eventTarget.remove();

    if( event.target.closest(".comparison__content_remove")) {
      modalbesket.classList.remove("modal_besket_show")
    }
    modalRemoveProduct.classList.add("modal_comparison_remove_product_show");
  });

  modalclearBtn.addEventListener("click", function (event) {
    modalclear.classList.add("modal_comparison_remove_product_show");
  });

  removemodalBesket.addEventListener("click", function (event) {
    modalBesket.classList.remove("modal_besket_show");
  });

  clearbtn.addEventListener("click", function () {
    clearProduct.forEach((product) => {
      product.remove();
      modalbesket.classList.remove("modal_besket_show")
    });
  });

  addBasket.forEach((btn) => {
    btn.addEventListener("click", function () {
      modalBesket.classList.add("modal_besket_show");
    });
  });
});
