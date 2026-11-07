import { modalController } from "./modal/modal.js";
import { scrollToHeaderBtn } from "./scrollUp.js";
import {
  setFavoritesLocalStorage,
  getFavoritesLocalStorage,
  showErrorMessage,
  getBasketLocalStorage,
  setBasketLocalStorage,
  checkingRelevanceValueBasket,
  checkingRelevanceValueFavorites,
} from "./utils/utils.js";
import {
  COUNT_SHOW_CARDS_CLICK,
  ERRO_SERVER,
  NO_PRODUCTS_IN_THIS_CATEGORY,
} from "./constants/constant.js";
import {search} from "./modules/helpers.js"
import {init} from "./modules/controllers/authController.js"
// import { changeCounterProductBesket } from "./counters/counter-besket.js";

document.addEventListener("DOMContentLoaded", function () {
  scrollToHeaderBtn();

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

 let shownCardS = COUNT_SHOW_CARDS_CLICK;
let countClickBtnShowCards = 1;
let productsData = [];
const basket = getBasketLocalStorage();
const favorites = getFavoritesLocalStorage();
const cards = document.querySelector(".products_cards");
const news = document.querySelector(".new_products .swiper-wrapper");
const tops = document.querySelector(".new_watch .swiper-wrapper");
 cards.addEventListener("click", handleCardClickSlide);
cards.addEventListener("click", handlefavoritesCardClickSlide);
  
getProducts();
search();
init();
  

 

async function getProducts() {
  try {
    if (!productsData.length) {
      const res = await fetch("users", {
        method: "GET",
        headers: { "Content-Type": "application/json;charset=utf-8" },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
        console.log("Err");
      }

      productsData = await res.json();
    }
    renderNewStartPage(productsData);
    renderTopStartPage(productsData)
    checkActiveModal();
    
  } catch (err) {
    showErrorMessage(ERRO_SERVER);
    console.log(err.message);
  }
}

function renderNewStartPage(data) {
  if (!data || !data.length) {
    showErrorMessage(NO_PRODUCTS_IN_THIS_CATEGORY);
    return;
  }

  console.log(data);
  
  const filterCrads = data.filter(product => product.filtr === "new");

  createNewCards(filterCrads);
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
  checkingRelevanceValueBasket(data);
  checkingRelevanceValueFavorites(data);

  const bakset = getBasketLocalStorage();
  const favorites = getFavoritesLocalStorage();

  chekingActiveButtonsSlide(bakset);
  chekingFavoritesActiveBurronsSlide(favorites);
}

function renderTopStartPage(data) {
  if (!data || !data.length) {
    showErrorMessage(NO_PRODUCTS_IN_THIS_CATEGORY);
    return;
  }


  
  const filterCrads = data.filter(product => product.filtr === "top");
  console.log(filterCrads);
  createTopCards(filterCrads);
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
  checkingRelevanceValueBasket(data);
  checkingRelevanceValueFavorites(data);

  const bakset = getBasketLocalStorage();
  const favorites = getFavoritesLocalStorage();

  chekingActiveButtonsSlide(bakset);
  chekingFavoritesActiveBurronsSlide(favorites);
}

function createTopCards(data) {
  data.forEach((card) => {
    const { id, top, img, name, price, discount } = card;
    const priceDiskount = price - (price * discount) / 100;
    const cardItem = `
         <div class="swiper-slide" data-product-id="${id}">
                <div class="card">
                  <div class="card__item">
                    <div class="card__body">
                      <div class="card__cell">
                         <div class="${top}">
                          <p></p>
                        </div> 
                      </div>
                      <div class="card__cell">
                        <button type="button" class="favorites"></button>
                      </div>
                    </div>
                    <a href="./aboutProduct.html">
                      <div class="card__product">
                        <a href="./aboutProduct.html?id=${id}">
                        <img
                          src="./images/${img}"
                          alt="Андроид 15"
                        />
                        </a>
                      </div>
                    </a>
                  </div>
                  <div class="card__content">
                    <div class="card__reviews">
                      <div class="card__reviews_cell">
                        <p>5.0</p>
                      </div>
                      <div class="card__reviews_cell">
                        <svg
                          width="180"
                          height="36"
                          viewBox="0 0 180 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M26.3574 30L18.0006 23.9664L9.64371 30L12.8524 20.2558L4.5 14.2607H14.812L18.0006 4.5L21.1891 14.2607H31.5L23.1487 20.2558L26.3574 30Z"
                            fill="#D29440"
                          />
                          <path
                            d="M62.3574 30L54.0006 23.9664L45.6437 30L48.8524 20.2558L40.5 14.2607H50.812L54.0006 4.5L57.1891 14.2607H67.5L59.1487 20.2558L62.3574 30Z"
                            fill="#D29440"
                          />
                          <path
                            d="M98.3574 30L90.0006 23.9664L81.6437 30L84.8524 20.2558L76.5 14.2607H86.812L90.0006 4.5L93.1891 14.2607H103.5L95.1487 20.2558L98.3574 30Z"
                            fill="#D29440"
                          />
                          <path
                            d="M134.357 30L126.001 23.9664L117.644 30L120.852 20.2558L112.5 14.2607H122.812L126.001 4.5L129.189 14.2607H139.5L131.149 20.2558L134.357 30Z"
                            fill="#D29440"
                          />
                          <path
                            d="M170.357 30L162.001 23.9664L153.644 30L156.852 20.2558L148.5 14.2607H158.812L162.001 4.5L165.189 14.2607H175.5L167.149 20.2558L170.357 30Z"
                            fill="#D29440"
                          />
                        </svg>
                      </div>
                      <div class="card__reviews_cell">
                        <p><span class="card__count">3</span> отызва</p>
                      </div>
                    </div>
                    <div class="card__title">
                       <a href="./aboutProduct.html?id=${id}">
                        <h2>${name}</h2>
                      </a>
                    </div>

                    <div class="card__price">
                      <div class="card__price_cell">
                        <p class="price">${price}</p>
                      </div>
                      <div class="card__price_cell">
                        <p class="discount">${discount}</p>
                      </div>
                      <div class="card__price_cell none">
                        <p class="discount">1 000₴</p>
                      </div>
                      <div class="card__price_cell">
                        <button type="button" class="card__besket_add"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      `;
    tops.insertAdjacentHTML("beforeend", cardItem);
    const hit = document.querySelectorAll(".card__body .hit p");

    hit.forEach((hit) => {
      hit.textContent = "ТОП ПРОДАЖ";
    });
  });
}

function createNewCards(data) {
  data.forEach((card) => {
    const { id, top, img, name, price, discount } = card;
    const priceDiskount = price - (price * discount) / 100;
    const cardItem = `
         <div class="swiper-slide" data-product-id="${id}">
                <div class="card">
                  <div class="card__item">
                    <div class="card__body">
                      <div class="card__cell">
                        <div class="${top}">
                          <p></p>
                        </div> 
                      </div>
                      <div class="card__cell">
                        <button type="button" class="favorites"></button>
                      </div>
                    </div>
                    <a href="./aboutProduct.html">
                      <div class="card__product">
                        <a href="./aboutProduct.html?id=${id}">
                        <img
                          src="./images/${img}"
                          alt="Андроид 15"
                        />
                        </a>
                      </div>
                    </a>
                  </div>
                  <div class="card__content">
                    <div class="card__reviews">
                      <div class="card__reviews_cell">
                        <p>5.0</p>
                      </div>
                      <div class="card__reviews_cell">
                        <svg
                          width="180"
                          height="36"
                          viewBox="0 0 180 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M26.3574 30L18.0006 23.9664L9.64371 30L12.8524 20.2558L4.5 14.2607H14.812L18.0006 4.5L21.1891 14.2607H31.5L23.1487 20.2558L26.3574 30Z"
                            fill="#D29440"
                          />
                          <path
                            d="M62.3574 30L54.0006 23.9664L45.6437 30L48.8524 20.2558L40.5 14.2607H50.812L54.0006 4.5L57.1891 14.2607H67.5L59.1487 20.2558L62.3574 30Z"
                            fill="#D29440"
                          />
                          <path
                            d="M98.3574 30L90.0006 23.9664L81.6437 30L84.8524 20.2558L76.5 14.2607H86.812L90.0006 4.5L93.1891 14.2607H103.5L95.1487 20.2558L98.3574 30Z"
                            fill="#D29440"
                          />
                          <path
                            d="M134.357 30L126.001 23.9664L117.644 30L120.852 20.2558L112.5 14.2607H122.812L126.001 4.5L129.189 14.2607H139.5L131.149 20.2558L134.357 30Z"
                            fill="#D29440"
                          />
                          <path
                            d="M170.357 30L162.001 23.9664L153.644 30L156.852 20.2558L148.5 14.2607H158.812L162.001 4.5L165.189 14.2607H175.5L167.149 20.2558L170.357 30Z"
                            fill="#D29440"
                          />
                        </svg>
                      </div>
                      <div class="card__reviews_cell">
                        <p><span class="card__count">3</span> отызва</p>
                      </div>
                    </div>
                    <div class="card__title">
                      <a href="./aboutProduct.html?id=${id}">
                        <h2>${name}</h2>
                      </a>
                    </div>

                    <div class="card__price">
                      <div class="card__price_cell">
                        <p class="price">${price}</p>
                      </div>
                      <div class="card__price_cell">
                        <p class="discount">${discount}</p>
                      </div>
                      <div class="card__price_cell none">
                        <p class="discount">1 000₴</p>
                      </div>
                      <div class="card__price_cell">
                        <button type="button" class="card__besket_add"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      `;
    news.insertAdjacentHTML("beforeend", cardItem);
    const hit = document.querySelectorAll(".card__body .hit p");

    hit.forEach((hit) => {
      hit.textContent = "ТОП ПРОДАЖ";
    });
  });
}


  function chekingActiveButtonsSlide(besket) {
    const buttons = document.querySelectorAll(".card__besket_add");
    const modalEmpty = document.querySelector(".modal_empty_besket");
  
    buttons.forEach((btn) => {
      const card = btn.closest(".swiper-slide");
      const id = card.dataset.productId;
      const isInBasket = besket.includes(id);
      // btn.disabled = isInBasket;
      btn.classList.toggle("active", isInBasket);
      modalEmpty.classList.remove("modal_animate");
      btn.addEventListener("click", function (event) {
        if (event.target.classList.contains("active")) {
          window.location.href = "../besket.html";
        }
      });
    });
  }
  
   function chekingFavoritesActiveBurronsSlide(favorites) {
    const buttons = document.querySelectorAll(".card .favorites");
  
    buttons.forEach((btn) => {
      const card = btn.closest(".swiper-slide");
      const id = card.dataset.productId;
      const isInBasket = favorites.includes(id);
      // btn.disabled = isInBasket;
      btn.classList.toggle("active", isInBasket);
  
      // modalEmpty.classList.add("modal_animate")
  
      btn.addEventListener("click", function (event) {
        if (event.target.classList.contains("active")) {
          window.location.href = "../favorites.html";
        }
      });
      // modalEmpty.classList.remove("modal_animate");
      //   btn.addEventListener("click", function(event) {
  
      //  if(event.target.classList.contains("active")) {
      //   window.location.href = "../besket.html"
  
      //  }
      // })
    });
  }
  
  function handlefavoritesCardClickSlide(event) {
    //  const modalAddFavorites = document.querySelector(".header__favorites_counter ");
    const fovorites = document.querySelector(".favorites_icon");
    const targetButton = event.target.closest(".card .favorites");
    const fovoratiesCounter = document.querySelector(
      ".header__favorites_counter",
    );
    const modalFavorites = document.querySelector(".modal_add_faborites ");
    if (!targetButton) return;
  
    const card = targetButton.closest(".swiper-slide");
    const id = card.dataset.productId;
  
    let favorites = getFavoritesLocalStorage();
  
    if (favorites.includes(id)) {
      return;
    }
  
    // modalAddFavorites.classList.add("modal_animate");
  
    fovorites.classList.add("modal_animate");
    fovoratiesCounter.classList.add("modal_animate");
    modalFavorites.classList.add("modal_animate");
    favorites.push(id);
    setFavoritesLocalStorage(favorites);
    chekingFavoritesActiveBurronsSlide(favorites);
  }
  
  function handleCardClickSlide(event) {
    const basketCount = document.querySelector(".header__besket_counter");
    const modalAddBasket = document.querySelector(".modal_add_besket ");
    const targetButton = event.target.closest(".card__besket_add");
    if (!targetButton) return;
  
    const card = targetButton.closest(".swiper-slide ");
    const id = card.dataset.productId;
  
    if (basket.includes(id)) {
      return;
    }
  
    modalAddBasket.classList.add("modal_animate");
    basket.push(id);
    basketCount.classList.add("header__besket_counter_show");
    setBasketLocalStorage(basket);
  
    chekingActiveButtonsSlide(basket);
  }
  
  function shekingCounterFavorites() {
    const modalEmpty = document.querySelector(".header__favorites_counter");
    const fovoritesIcon = document.querySelector(".mobile_none");
    const counterFavorites = document.querySelector(
      ".header__favorites_counter .counter",
    );
    const favorites = getFavoritesLocalStorage();
    fovoritesIcon.classList.add("mobile_none");
  
    if (favorites.length) {
      counterFavorites.textContent = favorites.length;
      modalEmpty.classList.add("modal_animate");
      fovoritesIcon.classList.remove("mobile_none");
    } else {
      modalEmpty.classList.remove("modal_animate");
      fovoritesIcon.classList.add("mobile_none");
    }
  }

  const basketCount = document.querySelector(".header__besket_counter");
  function addBasketProducts() {
  if (basket.length) {
    basketCount.classList.add("header__besket_counter_show");
  } else {
    basketCount.classList.remove("header__besket_counter_show");
  }
  }

  function chekingEmptyCart() {
  const modalEmpty = document.querySelector(".modal_empty_besket");
  const emptyLink = document.querySelector(".header__right_menu .empty");
  const counterProducts = document.querySelector(
    ".header__besket_counter .counter",
  );
  // const counterFovorites = document.querySelector(".header__favorites_counter  .counter")
  emptyLink.addEventListener("click", function (e) {
    e.preventDefault();

    if (counterProducts.textContent == "0") {
      modalEmpty.classList.add("modal_animate");
    } else {
      modalEmpty.classList.remove("modal_animate");
      window.location.href = "../besket.html";
    }
  });
}

function checkActiveModal() {
  let favoritesCard = document.querySelectorAll(".card .favorites");
  let basketCard = document.querySelectorAll(".card__besket_add");
  let favorites = document.querySelector(".modal_add_faborites");
  let addBasket = document.querySelector(".modal_add_besket");

  favoritesCard.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      favorites.classList.add("add_show_modal");
      addBasket.classList.remove("add_show_modal");
    });
  });

  basketCard.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      addBasket.classList.add("add_show_modal");
      favorites.classList.remove("add_show_modal");
    });
  });
}

setBasketLocalStorage(basket);
chekingEmptyCart();
addBasketProducts();
shekingCounterFavorites();



});
