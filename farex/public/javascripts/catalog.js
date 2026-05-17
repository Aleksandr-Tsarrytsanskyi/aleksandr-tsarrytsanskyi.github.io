import { modalController } from "./modal/modal.js";
import { scrollToHeaderBtn } from "./scrollUp.js";
document.addEventListener("DOMContentLoaded", function () {
  scrollToHeaderBtn();
modalController({
    modal: ".modal_filtr",
    btnOpen: ".filtr_btn",
    btnClose: ".modal__close",
    time: "300"
})

 modalController({
    modal: ".modal_profile",
    btnOpen: ".header__profile",
    btnClose: ".modal__close",
    time: "300"
})
  modalController({
    modal: ".modal_profile_login",
    btnOpen: ".modal_profile__login",
    btnClose: ".modal__close",
    time: "300"
})
  modalController({
    modal: ".modal_profile_registration",
    btnOpen: ".modal_profile__registration",
    btnClose: ".modal__close",
    time: "300"
})

  modalController({
    modal: ".modal_profile_login",
    btnOpen: ".modal_profile_registration_login",
    btnClose: ".modal__close",
    time: "300"
})

 modalController({
    modal: ".modal_profile_reset_pas",
    btnOpen: ".modal_profile_login_repeat_pas",
    btnClose: ".modal__close",
    time: "300"
})
  modalController({
    modal: ".modal_add_faborites",
    btnOpen: ".card .favorites",
    btnClose: ".modal__close",
    time: "300",
  });

  

  function rangeSlider() {
    var slider = document.getElementById("range_slider");
    const inpu0 = document.getElementById("input-0");
    const inpu1 = document.getElementById("input-1");
    const inputs = [inpu0, inpu1];
    if (slider) {
      noUiSlider.create(slider, {
        start: [0, 8000],
        step: 1,
        connect: true,
        range: {
          min: [0],
          max: [10000],
        },
      });
    }
    slider.noUiSlider.on("update", function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
      inputs[handle].focus();
    });
    const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      slider.noUiSlider.set(arr);
    };
    inputs.forEach((el, index) => {
      el.addEventListener("change", (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    });
  }
 
  //   const favorites = document.querySelectorAll(".card .favorites");
  //   const besket = document.querySelectorAll(".card__besket_add");
  //   console.dir(favorites);
  //     const addBesket = document.querySelectorAll(".card__besket_add");
  //     const modalBesket = document.querySelector(".modal_add_besket");
  //     const modalFavorites = document.querySelector(".modal_add_faborites");

  //   favorites.forEach((el) => {
  //   el.addEventListener("click", function (e) {
  //      e.target.classList.toggle("active");
  //     modalBesket.classList.remove("modal_animate");
  //     if (e.target.classList.contains("active")) {
  //       modalFavorites.classList.remove("modal_animate");
  //     }
  //   });
  // });

  // addBesket.forEach((el) => {
  //   el.addEventListener("click", function (e) {
      
  //     modalFavorites.classList.remove("modal_animate");
  //     e.target.classList.toggle("active");
  //     if (e.target.classList.contains("active")) {
  //       modalBesket.classList.remove("modal_animate");
  //     }
  //   });
  // });
  // }

  //    function changeCounterProductBesket() {
  //   const counterProduct = document.querySelector(
  //     ".header__besket_counter .counter"
  //   );
  //   const addBesket = document.querySelectorAll(".card__besket_add");
  //   const besketCounter = document.querySelector(".header__besket_counter");
  //   //   const removeProduct = document.querySelector(".modal_besket_remove");
    
  //   const stopEvent = document.querySelector(".header__right_menu svg");
      
  // const showfavorites = document.querySelector(".mobile_none");
  // // const emptyLink = document.querySelector(".header__right_menu .empty");
  // //   let counter = 0;
     
  // //    emptyLink.addEventListener("click", function(e) {
  // //     e.preventDefault();
  // //      modalEmpty.classList.add("modal_animate");
  // //    if(counter > 0) {
  // //         console.dir(counter);
  // //         modalEmpty.classList.remove("modal_animate");
  // //         window.location.href = "/public/besket.html"

  // //       }
   
    
  // // })

  //   // addBesket.forEach((addProduct) => {
  //   //   addProduct.addEventListener("click", function (e) {
  //   //     e.preventDefault();
  //   //     besketCounter.classList.add("header__besket_counter_show");

  //   //     if (!addProduct.classList.contains("active")) {
  //   //       counter++;
  //   //       counterProduct.textContent = counter;
  //   //     }

  //   //     if (addProduct.classList.contains("active")) {
  //   //       counter--;
  //   //       counterProduct.textContent = counter;
  //   //     }
  //   //     if (counter <= 0) {
  //   //       counter = 0;
  //   //     }
  //   //     if(counter > 0) {
  //   //       modalEmpty.classList.remove("modal_animate")
          
  //   //     }

  //   //     if (counter == 0) {
  //   //       besketCounter.classList.remove("header__besket_counter_show");
  //   //     }
  //   //   });
  //   // });

  //   //   removeProduct.addEventListener("click", function () {
  //   //     counter--;
  //   //     counterProduct.textContent = counter;
  //   //     if (counter == 0) {
  //   //       besketCounter.classList.remove("besket_counter_show");
  //   //     }
  //   //   });
  // }

  // function changeCounterProductFavorites() {
  //   const counterProduct = document.querySelector(
  //     ".header__favorites_counter .counter"
  //   );
  //   const addBesket = document.querySelectorAll(".card .favorites");
  //   const besketCounter = document.querySelector(".header__favorites_counter");
  //   //   const removeProduct = document.querySelector(".modal_besket_remove");

  //   let counter = 0;
  //   addfavorites.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   if(counter > 0) {
  //     window.location.href = "favorites.html"
  //   }

    
    
  // });
  //   addBesket.forEach((addProduct) => {
  //     addProduct.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       besketCounter.classList.add("header__besket_counter_show");

  //       if (!addProduct.classList.contains("active")) {
  //         counter++;
  //         counterProduct.textContent = counter;
  //       }

  //       if (addProduct.classList.contains("active")) {
  //         counter--;
  //         counterProduct.textContent = counter;
  //       }
        

  //       if (counter == 0) {
  //         showfavorites.classList.add("mobile_none");
  //       }

  //       if(counter > 0) {
  //         console.log("asfasfasf");
          
  //         showfavorites.classList.remove("mobile_none")
  //       }

  //       if (counter == 0) {
  //         besketCounter.classList.remove("header__besket_counter_show");
  //       }
  //     });
  //   });

  //   //   removeProduct.addEventListener("click", function () {
  //   //     counter--;
  //   //     counterProduct.textContent = counter;
  //   //     if (counter == 0) {
  //   //       besketCounter.classList.remove("besket_counter_show");
  //   //     }
  //   //   });
  // }

  // changeCounterProductBesket();
  // changeCounterProductFavorites();
  rangeSlider();

});
