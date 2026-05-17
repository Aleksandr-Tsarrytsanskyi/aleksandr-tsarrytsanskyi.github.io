import { modalController } from "./modal/modal.js";
import { scrollToHeaderBtn } from "./scrollUp.js";
// import { changeCounterProductBesket } from "./counters/counter-besket.js";

document.addEventListener("DOMContentLoaded", function () {
  scrollToHeaderBtn();
  const addfavorites = document.querySelector(".mobile_none a");
  const showfavorites = document.querySelector(".mobile_none");
  const emptyLink = document.querySelector(".header__right_menu .empty");
 
  function changeCounterProductBesket() {
    const counterProduct = document.querySelector(
      ".header__besket_counter .counter"
    );
    const addBesket = document.querySelectorAll(".card__besket_add");
    const besketCounter = document.querySelector(".header__besket_counter");
    //   const removeProduct = document.querySelector(".modal_besket_remove");
    const modalEmpty = document.querySelector(".modal_empty_besket");
    const stopEvent = document.querySelector(".header__right_menu svg");

    let counter = 0;
     
     emptyLink.addEventListener("click", function(e) {
      e.preventDefault();
       modalEmpty.classList.add("modal_animate");
     if(counter > 0) {
          console.dir(counter);
          modalEmpty.classList.remove("modal_animate");
          window.location.href = "besket.html"

        }
   
    
  })

    addBesket.forEach((addProduct) => {
      addProduct.addEventListener("click", function (e) {
        e.preventDefault();
        besketCounter.classList.add("header__besket_counter_show");

        if (!addProduct.classList.contains("active")) {
          counter++;
          counterProduct.textContent = counter;
        }

        if (addProduct.classList.contains("active")) {
          counter--;
          counterProduct.textContent = counter;
        }
        if (counter <= 0) {
          counter = 0;
        }
        if(counter > 0) {
          modalEmpty.classList.remove("modal_animate")
          
        }

        if (counter == 0) {
          besketCounter.classList.remove("header__besket_counter_show");
        }
      });
    });

    //   removeProduct.addEventListener("click", function () {
    //     counter--;
    //     counterProduct.textContent = counter;
    //     if (counter == 0) {
    //       besketCounter.classList.remove("besket_counter_show");
    //     }
    //   });
  }

  function changeCounterProductFavorites() {
    const counterProduct = document.querySelector(
      ".header__favorites_counter .counter"
    );
    const addBesket = document.querySelectorAll(".card .favorites");
    const besketCounter = document.querySelector(".header__favorites_counter");
    //   const removeProduct = document.querySelector(".modal_besket_remove");

    let counter = 0;
    addfavorites.addEventListener("click", function (e) {
    e.preventDefault();
    if(counter > 0) {
      window.location.href = "favorites.html"
    }

    
    
  });
    addBesket.forEach((addProduct) => {
      addProduct.addEventListener("click", function (e) {
        e.preventDefault();
        besketCounter.classList.add("header__besket_counter_show");

        if (!addProduct.classList.contains("active")) {
          counter++;
          counterProduct.textContent = counter;
        }

        if (addProduct.classList.contains("active")) {
          counter--;
          counterProduct.textContent = counter;
        }
        

        if (counter == 0) {
          showfavorites.classList.add("mobile_none");
        }

        if(counter > 0) {
          console.log("asfasfasf");
          
          showfavorites.classList.remove("mobile_none")
        }

        if (counter == 0) {
          besketCounter.classList.remove("header__besket_counter_show");
        }
      });
    });

    //   removeProduct.addEventListener("click", function () {
    //     counter--;
    //     counterProduct.textContent = counter;
    //     if (counter == 0) {
    //       besketCounter.classList.remove("besket_counter_show");
    //     }
    //   });
  }

  changeCounterProductFavorites();
  changeCounterProductBesket();
  modalController({
    modal: ".modal_profile",
    btnOpen: ".header__profile",
    btnClose: ".modal__close",
    time: "300",
  });
  modalController({
    modal: ".modal_profile_login",
    btnOpen: ".modal_profile__login",
    btnClose: ".modal__close",
    time: "300",
  });
  modalController({
    modal: ".modal_profile_registration",
    btnOpen: ".modal_profile__registration",
    btnClose: ".modal__close",
    time: "300",
  });

  modalController({
    modal: ".modal_profile_login",
    btnOpen: ".modal_profile_registration_login",
    btnClose: ".modal__close",
    time: "300",
  });

  modalController({
    modal: ".modal_add_faborites",
    btnOpen: ".card .favorites",
    btnClose: ".modal__close",
    time: "300",
  });

  modalController({
    modal: ".modal_add_besket",
    btnOpen: ".card__besket_add",
    btnClose: ".modal__close",
    time: "300",
  });

  modalController({
    modal: ".modal_profile_reset_pas",
    btnOpen: ".modal_profile_login_repeat_pas",
    btnClose: ".modal__close",
    time: "300",
  });

  //  modalController({
  //   modal: ".modal_empty_besket",
  //   btnOpen: ".header__right_menu .empty",
  //   btnClose: ".modal__close",
  //   time: "300",
  // });

  const modalLignBtn = document.querySelector(
    ".modal_profile_registration_login"
  );
  const modalShowLogin = document.querySelector(".modal_profile_registration");
  const favorites = document.querySelectorAll(".card .favorites");
  const addBesket = document.querySelectorAll(".card__besket_add");
  const modalFavorites = document.querySelector(".modal_add_faborites");
  const modalBesket = document.querySelector(".modal_add_besket");

  favorites.forEach((el) => {
    el.addEventListener("click", function (e) {
      modalBesket.classList.remove("modal_animate");
      if (e.target.classList.contains("active")) {
        modalFavorites.classList.remove("modal_animate");
      }
    });
  });

  addBesket.forEach((el) => {
    el.addEventListener("click", function (e) {
      modalFavorites.classList.remove("modal_animate");
      if (e.target.classList.contains("active")) {
        modalBesket.classList.remove("modal_animate");
      }
    });
  });
  modalLignBtn.addEventListener("click", function () {
    modalShowLogin.classList.remove("modal_animate");
  });

  function imageProductsActive() {
    const imgProducts = document.querySelectorAll(".card img");
    imgProducts.forEach((img) => {
      img.classList.add("product_img_active");
    });
  }

  function swipetSliders() {
    const swiper = new Swiper(".new_products", {
      // Optional parameters

      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      // If we need pagination

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
    });

    const swiper1 = new Swiper(".new_watch", {
      // Optional parameters

      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      // If we need pagination

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
    });
  }

  function addFavoritesProduct() {
    const favorites = document.querySelectorAll(".card .favorites");
    const besket = document.querySelectorAll(".card__besket_add");
    console.dir(favorites);

    favorites.forEach((product) => {
      product.addEventListener("click", function (event) {
        console.dir(favorites);
        event.target.classList.toggle("active");
      });
    });

    besket.forEach((product) => {
      product.addEventListener("click", function (event) {
        event.target.classList.toggle("active");
        if (!event.target.classList.contains("active")) {
          console.dir("asfasf");
        }
      });
    });
  }

  imageProductsActive();
  swipetSliders();
  addFavoritesProduct();
});
