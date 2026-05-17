// // import { addFavoritesProduct } from "./main.js";
// // addFavoritesProduct();
// import { modalController } from "./modal/modal.js";
// import { scrollToHeaderBtn } from "./scrollUp.js";

// modalController({
//   modal: ".modal_profile",
//   btnOpen: ".header__profile",
//   btnClose: ".modal__close",
//   time: "300",
// });
// modalController({
//   modal: ".modal_profile_login",
//   btnOpen: ".modal_profile__login",
//   btnClose: ".modal__close",
//   time: "300",
// });
// modalController({
//   modal: ".modal_profile_registration",
//   btnOpen: ".modal_profile__registration",
//   btnClose: ".modal__close",
//   time: "300",
// });

// modalController({
//   modal: ".modal_profile_login",
//   btnOpen: ".modal_profile_registration_login",
//   btnClose: ".modal__close",
//   time: "300",
// });
//  modalController({
//     modal: ".modal_profile_reset_pas",
//     btnOpen: ".modal_profile_login_repeat_pas",
//     btnClose: ".modal__close",
//     time: "300"
// })

//   const addFavorites = document.querySelector(".about-product__favorites");
//   const addLocalStorage = document.querySelector(
//     ".about-product__price .price"
//   ).innerHTML;
//     const addfavorites = document.querySelector(".mobile_none a");
//   const showfavorites = document.querySelector(".mobile_none");
//   const emptyLink = document.querySelector(".header__right_menu .empty");
//   const modalLignBtn = document.querySelector(
//     ".modal_profile_registration_login"
//   );
//   const modalShowLogin = document.querySelector(".modal_profile_registration");
//   modalLignBtn.addEventListener("click", function () {
//     modalShowLogin.classList.remove("modal_animate");
//   });
//   localStorage.setItem("price", addLocalStorage);

//   addFavorites.addEventListener("click", function (e) {
//     addFavorites.classList.toggle("active");
//   });

  

//   // Инициализация основного слайдера
  


//   const swiper = new Swiper(".datails_swiper", {
//     // Optional parameters

//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: 4,

//     // If we need pagination

//     // Navigation arrows
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

//   const swiper1 = new Swiper(".recommend_swiper", {
//     // Optional parameters

//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: 4,

//     // If we need pagination

//     // Navigation arrows
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
//   function changeCounterGoods() {
//     const cart = document.querySelector(".about-product__counter");

//     cart.addEventListener("click", function (event) {
//       if (!event.target.matches(".minus, .plus")) {
//         return;
//       }
//       console.log(event.target);

//       let currentItems, minusBtn;

//       if (event.target.matches(".minus") || event.target.matches(".plus")) {
//         const counter = event.target.closest(".about-product__counter");
//         console.log(counter);

//         currentItems = counter.querySelector(".counter");

//         minusBtn = counter.querySelector(".minus");
//         console.log(minusBtn);
//       }

//       if (event.target.matches(".plus")) {
//         currentItems.textContent = ++currentItems.textContent;

//         minusBtn.removeAttribute("disabled");
//         conculateTotalCartValue();
//       }

//       if (event.target.matches(".minus")) {
//         if (parseInt(currentItems.textContent) > 2) {
//           currentItems.textContent = --currentItems.textContent;
//           currentItems.classList.remove("currentItems_active");
//         } else if (parseInt(currentItems.textContent) === 2) {
//           currentItems.textContent = --currentItems.textContent;
//           minusBtn.setAttribute("disabled", "disabled");
//         }
//         conculateTotalCartValue();
//       }
//     });

//     const conculateTotalCartValue = () => {
//       const cartItems = document.querySelector(".about-product__price");
//       const cartTotalPrice = document.querySelector(
//         ".about-product__price .price"
//       );

//       let totalCartValue = 0;

//       const itemCount = document.querySelector(
//         ".about-product__counter .counter"
//       );

//       const itemPrice = localStorage.getItem("price");
//       const itemTotalPrice =
//         parseInt(itemCount.textContent) *
//         parseInt(itemPrice.split(" ").join(""));
//       console.log(itemPrice);

//       //  itemPrice.textContent = formatter.format(itemTotalPrice);

//       totalCartValue += itemTotalPrice;

//       let total = totalCartValue.toLocaleString("ua-UA");
//       cartTotalPrice.textContent = total + "₴";
//     };
//   }

//   changeCounterGoods();

//   function tabsProduct() {
//     const tabsbtn = document.querySelectorAll(".about-product__tabs_nav");
//     const tabsItem = document.querySelectorAll(".about-product__tabs_content");

//     tabsbtn.forEach((tabs) => {
//       tabs.addEventListener("click", function () {
//         const currentBtn = tabs;
//         const tabId = currentBtn.getAttribute("data-tab");
//         const currentTab = document.querySelector(tabId);
//         tabsItem.forEach((item) => {
//           item.classList.remove("active");
//         });

//         tabsbtn.forEach((item) => {
//           item.classList.remove("active");
//         });
//         currentBtn.classList.add("active");
//         currentTab.classList.add("active");
//       });
//     });
//   }
//   tabsProduct();

//   function changeAcardion() {
//     const acardion = document.querySelectorAll(".about-product__btn");
//     console.log(acardion);

//     // const content = document.querySelectorAll(".content");
//     acardion.forEach((el) => {
//       el.addEventListener("click", function (e) {
//         console.log(e.target);
//         e.target.classList.add("active");
//         acardion.forEach((el) => {
//           el.classList.remove("active");
//         });

//         let content = el.nextElementSibling;

//         if (content.style.maxHeight) {
//           e.target.classList.remove("active");

//           document
//             .querySelectorAll(".about-product__cardion_content")
//             .forEach((el) => {
//               el.style.maxHeight = null;
//             });
//         } else {
//           e.target.classList.add("active");
//           document
//             .querySelectorAll(".about-product__cardion_content")
//             .forEach((el) => {
//               el.style.maxHeight = null;
//               content.style.maxHeight = content.scrollHeight + "px";
//             });
//         }
//       });
//     });
//   }
//   function addFavoritesProduct() {
//     const favorites = document.querySelectorAll(".card .favorites");
//     const besket = document.querySelectorAll(".card__besket_add");
//     console.dir(favorites);

//     favorites.forEach((product) => {
//       product.addEventListener("click", function (event) {
//         console.dir(favorites);
//         event.target.classList.toggle("active");
//       });
//     });

//     besket.forEach((product) => {
//       product.addEventListener("click", function (event) {
//         event.target.classList.toggle("active");
//         if (!event.target.classList.contains("active")) {
//           console.dir("asfasf");
//         }
//       });
//     });
//   }

//     function changeCounterProductBesket() {
//     const counterProduct = document.querySelector(
//       ".header__besket_counter .counter"
//     );
//     const addBesket = document.querySelectorAll(".card__besket_add");
//     const besketCounter = document.querySelector(".header__besket_counter");
//     //   const removeProduct = document.querySelector(".modal_besket_remove");
//     const modalEmpty = document.querySelector(".modal_empty_besket");
//     const stopEvent = document.querySelector(".header__right_menu svg");

//     let counter = 0;
     
//      emptyLink.addEventListener("click", function(e) {
//       e.preventDefault();
//        modalEmpty.classList.add("modal_animate");
//      if(counter > 0) {
//           console.dir(counter);
//           modalEmpty.classList.remove("modal_animate");
//           window.location.href = "/public/besket.html"

//         }
   
    
//   })

//     addBesket.forEach((addProduct) => {
//       addProduct.addEventListener("click", function (e) {
//         e.preventDefault();
//         besketCounter.classList.add("header__besket_counter_show");

//         if (!addProduct.classList.contains("active")) {
//           counter++;
//           counterProduct.textContent = counter;
//         }

//         if (addProduct.classList.contains("active")) {
//           counter--;
//           counterProduct.textContent = counter;
//         }
//         if (counter <= 0) {
//           counter = 0;
//         }
//         if(counter > 0) {
//           modalEmpty.classList.remove("modal_animate")
          
//         }

//         if (counter == 0) {
//           besketCounter.classList.remove("header__besket_counter_show");
//         }
//       });
//     });

//     //   removeProduct.addEventListener("click", function () {
//     //     counter--;
//     //     counterProduct.textContent = counter;
//     //     if (counter == 0) {
//     //       besketCounter.classList.remove("besket_counter_show");
//     //     }
//     //   });
//   }

//   function changeCounterProductFavorites() {
//     const counterProduct = document.querySelector(
//       ".header__favorites_counter .counter"
//     );
//     const addBesket = document.querySelectorAll(".card .favorites");
//     const besketCounter = document.querySelector(".header__favorites_counter");
//     //   const removeProduct = document.querySelector(".modal_besket_remove");

//     let counter = 0;
//     addfavorites.addEventListener("click", function (e) {
//     e.preventDefault();
//     if(counter > 0) {
//       window.location.href = "favorites.html"
//     }

    
    
//   });
//     addBesket.forEach((addProduct) => {
//       addProduct.addEventListener("click", function (e) {
//         e.preventDefault();
//         besketCounter.classList.add("header__besket_counter_show");

//         if (!addProduct.classList.contains("active")) {
//           counter++;
//           counterProduct.textContent = counter;
//         }

//         if (addProduct.classList.contains("active")) {
//           counter--;
//           counterProduct.textContent = counter;
//         }
        

//         if (counter == 0) {
//           showfavorites.classList.add("mobile_none");
//         }

//         if(counter > 0) {
//           console.log("asfasfasf");
          
//           showfavorites.classList.remove("mobile_none")
//         }

//         if (counter == 0) {
//           besketCounter.classList.remove("header__besket_counter_show");
//         }
//       });
//     });

//     //   removeProduct.addEventListener("click", function () {
//     //     counter--;
//     //     counterProduct.textContent = counter;
//     //     if (counter == 0) {
//     //       besketCounter.classList.remove("besket_counter_show");
//     //     }
//     //   });
//   }

//   changeCounterProductBesket();
//   changeCounterProductFavorites();
//   addFavoritesProduct();
//   changeAcardion();
//   scrollToHeaderBtn();

