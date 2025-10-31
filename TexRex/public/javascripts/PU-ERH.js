import { modalController } from "./modal/modal.js";
import { countBeskekProduct } from "./besket/besketCounter.js";
countBeskekProduct();
document.addEventListener("DOMContentLoaded", function () {
  modalController({
    modal: ".modal_review",
    btnOpen: ".rewiues",
    btnClose: ".modal__close",
    time: "300",
  });

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

  function addProductsCart() {
    const removeBesket = document.querySelector(".modal_besket_remove");
    const modalBesket = document.querySelector(".modal_besket");
    const addBesket = document.querySelector(".description__addcart button");
    const ratingItem = document.querySelectorAll(".modal_review_item");
    const ratingText = document.querySelector(".modal_review_rating_text");
    const ratingResult = document.querySelector(".modal_review_result");
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
    ratingItem.forEach((rating) => {
      rating.addEventListener("click", function (event) {
        if (rating.checked) {
          let result = rating.value;
          ratingText.textContent = rating.value;
          console.log(event.target.value == 3);
        }

        if (event.target.value == 3) {
          ratingResult.textContent = "нормально";
        }
        if (event.target.value <= 2) {
          ratingResult.textContent = "Плохо";
        }

        if (event.target.value > 3) {
          ratingResult.textContent = "Отлично";
        }
      });
    });
    addBesket.addEventListener("click", function () {
      modalBesket.classList.add("modal_besket_show");
    });

    removeBesket.addEventListener("click", function () {
      modalBesket.classList.remove("modal_besket_show");
    });
  }
  addProductsCart();

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

    resizableSwiper1("(max-width: 9020px)", ".recommend_slider", {
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
          spaceBetween: 20,
            slidesPerView: 4.2,
        },
         768: {
          spaceBetween: 20,
            slidesPerView: 3.2,
        },
         320: {
          spaceBetween: 20,
            slidesPerView: 2.2,
        },
      },
    });


      resizableSwiper1("(max-width: 768px)", ".stars_slider", {
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
      // breakpoints: {
       
      //    320: {
      //     spaceBetween: 20,
      //       slidesPerView: 1,
      //   },
      // },
    });

    let swiperThumbs = new Swiper(".mySwiperThumbs", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 7, // Количество отображаемых миниатюр
      freeMode: true,
      watchSlidesProgress: true,
    });

    // Инициализация основного слайдера
    let swiperMain = new Swiper(".mySwiperMain", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 1,
      thumbs: {
        swiper: swiperThumbs, // Связываем основной слайдер с миниатюрами
      },
    });

    const swiperPrev = document.querySelector(".swiperPrev");
    const swiperNext = document.querySelector(".swiperNext");

    swiperPrev.addEventListener("click", () => {
      swiperMain.slidePrev();
    });
    swiperNext.addEventListener("click", () => {
      swiperMain.slideNext();
    });
  }
  swiperSliders();

  function tabsProduct() {
    const tabsbtn = document.querySelectorAll(
      ".description__tabs .tabs_nav_btn"
    );
    const tabsItem = document.querySelectorAll(".description__tabs_content");

    tabsbtn.forEach((tabs) => {
      tabs.addEventListener("click", function () {
        const currentBtn = tabs;
        const tabId = currentBtn.getAttribute("data-tab");
        const currentTab = document.querySelector(tabId);
        tabsItem.forEach((item) => {
          item.classList.remove("active");
        });

        tabsbtn.forEach((item) => {
          item.classList.remove("active");
        });
        currentBtn.classList.add("active");
        currentTab.classList.add("active");
      });
    });
  }
  tabsProduct();

  function cartData() {
    const cart = document.querySelector(".description__item .basket");

    cart.addEventListener("click", function (event) {
      if (!event.target.matches(".minus, .plus")) {
        return;
      }
      console.log(event.target);

      let currentItems, minusBtn;

      if (event.target.matches(".minus") || event.target.matches(".plus")) {
        const counter = event.target.closest(".description__quantity");
        console.log(counter);

        currentItems = counter.querySelector(".counter");

        minusBtn = counter.querySelector(".minus");
        console.log(minusBtn);
      }

      if (event.target.matches(".plus")) {
        currentItems.textContent = ++currentItems.textContent;

        minusBtn.removeAttribute("disabled");
        conculateTotalCartValue();
      }

      if (event.target.matches(".minus")) {
        if (parseInt(currentItems.textContent) > 2) {
          currentItems.textContent = --currentItems.textContent;
          currentItems.classList.remove("currentItems_active");
        } else if (parseInt(currentItems.textContent) === 2) {
          currentItems.textContent = --currentItems.textContent;
          minusBtn.setAttribute("disabled", "disabled");
        }
        conculateTotalCartValue();
      }
    });

    const conculateTotalCartValue = () => {
      const cartItems = document.querySelector(".description__item .basket");
      const cartTotalPrice = document.querySelector(
        ".description_price .price span"
      );

      let totalCartValue = 0;

      const itemCount = document.querySelector(
        ".description__quantity .counter"
      );

      const itemPrice = localStorage.getItem("priceproducts");

      const itemTotalPrice =
        parseInt(itemCount.textContent) *
        parseInt(itemPrice.split(" ").join(""));
      console.log(itemTotalPrice);

      //  itemPrice.textContent = formatter.format(itemTotalPrice);

      totalCartValue += itemTotalPrice;

      cartTotalPrice.textContent = totalCartValue;
    };
  }

  function changeAcardion() {
    const acardion = document.querySelectorAll(".description_acradion");
    console.log(acardion);

    const content = document.querySelectorAll(".content");
    acardion.forEach((el) => {
      el.addEventListener("click", function (e) {
        console.log(e.target);
       
        el.classList.toggle("active");
        let content = el.nextElementSibling;
        console.log(content);

        console.log(content.style.maxHeight);

        if (content.style.maxHeight) {
          console.log("11111");

          document
            .querySelectorAll(".description_acradion_content")
            .forEach((el) => {
              el.style.maxHeight = null;
              
            });
        } else {
          document
            .querySelectorAll(".description_acradion_content")
            .forEach((el) => {
              el.style.maxHeight = null;
              content.style.maxHeight = content.scrollHeight + "px";
             
            });
        }
      });
    });
  }

  changeAcardion();

  cartData();

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

  //       const resizableSwiper = (
  //   breakpoint,
  //   swiperClass,
  //   swiperSettings,
  //   callback
  // ) => {
  //   let swiper;

  //   breakpoint = window.matchMedia(breakpoint);

  //   const enableSwiper = function (className, settings) {
  //     swiper = new Swiper(className, settings);
  //     const swiperPrev = document.querySelector(".swiperPrev");
  //     const swiperNext = document.querySelector(".swiperNext");

  //     swiperPrev.addEventListener("click", () => {
  //       swiper.slidePrev();
  //     });
  //     swiperNext.addEventListener("click", () => {
  //       swiper.slideNext();
  //     });
  //     if (callback) {
  //       callback(swiper);
  //     }
  //   };

  //   const checker = function () {
  //     if (breakpoint.matches) {
  //       return enableSwiper(swiperClass, swiperSettings);
  //     } else {
  //       if (swiper !== undefined) swiper.destroy(true, true);
  //       return;
  //     }
  //   };

  //   breakpoint.addEventListener("change", checker);
  //   checker();
  // };

  //  resizableSwiper("(max-width: 9020px)", ".slider_description", {
  //   loop: true,
  //   spaceBetween: 10,
  //   slidesPerView: 1,
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
  //     thumbs: {
  //       swiper: {
  //           el: ".recommend_slider_min",

  //       }
  //    }
  //   },
  // });
});
