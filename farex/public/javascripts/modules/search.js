
import {
  showErrorMessage, setFavoritesLocalStorage,getFavoritesLocalStorage,getBasketLocalStorage, setBasketLocalStorage,checkingRelevanceValueBasket
} from "../utils/utils.js";
import {
  COUNT_SHOW_CARDS_CLICK,
  ERRO_SERVER,
  NO_PRODUCTS_IN_THIS_CATEGORY,
} from "../constants/constant.js"; 
import {search} from "./helpers.js"
const basket  = getBasketLocalStorage();
const favorites  = getFavoritesLocalStorage();
let productsDataUrl = []
let searchproductData = []
let countClickBtnShowCards = 1;
let shownCardS = COUNT_SHOW_CARDS_CLICK;
const btnShowCards = document.querySelector(".show_more button");
const cards = document.querySelector(".products_catalog");

cards.addEventListener("click", handlefavoritesCardClick);
cards.addEventListener("click", handleCardClick);
btnShowCards.addEventListener("click", sliceArrCards);
getProductsUrl();
search();
 async function getProductsUrl() {
  try {
   
      const res = await fetch("users", {
        method: "GET",
        headers: { "Content-Type": "application/json;charset=utf-8" },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
        console.log("Err");
      }
     productsDataUrl = await res.json();
       const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search'); // Получаем то, что искали
   if (searchQuery) {
    const decodedQuery = decodeURIComponent(searchQuery).toLowerCase();
     renderGoods(searchFiltreUrl(productsDataUrl, decodedQuery))
     console.log(decodedQuery, productsDataUrl);
     let productChildren = searchFiltreUrl(productsDataUrl, decodedQuery)
     if(productChildren.length <= 5) {
      btnShowCards.classList.add("filtersProductsBtn_hide");
     }
     
    
   }
    chekingActiveButtons(basket);
  chekingFavoritesActiveBurrons(favorites);
    
  } catch (err) {
    showErrorMessage(ERRO_SERVER);
    console.log(err.message);
  }
}

function searchFiltreUrl(goods, value) {
  return goods.filter((goodsitem) => {
    return goodsitem.name.toLowerCase().includes(value.toLowerCase()) || goodsitem.ram.toLowerCase().includes(value.toLowerCase()) || goodsitem.top.toLowerCase().includes(value.toLowerCase())
  });
}


function renderGoods(product) {
    

  if (!product.length) {

    return false;
  }
  const searchProduct = document.querySelector(
    ".search_res  .products_catalog",
  );

  
  
  searchProduct.textContent = "";
  

  const arrCards = product.slice(0, 5);

  arrCards.forEach((card) => {
    const { id, top, img, name, price, discount } = card;
    const cardItem = `
         <div class="products__cell" data-product-id="${id}">
         
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
                <div class="card__product">
                     <a href="./aboutProduct.html?id=${id}">
                  <img
                    src="./images/${img}"
                    alt="Image"
                  />
                  </a>
                </div>
              </div>
              <div class="card__content">
                
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
                  <div class="card__price_cell">
                    <button type="button" class="card__besket_add" data-product-id="${id}"></button>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      `;
    searchProduct.insertAdjacentHTML("beforeend", cardItem);
    const hit = document.querySelectorAll(".card__body .hit p");

    hit.forEach((hit) => {
      hit.textContent = "ТОП ПРОДАЖ";
    });
  });
}




function sliceArrCards() {
  if (shownCardS >= productsDataUrl.length) return;

  countClickBtnShowCards++;
  const countShowCards = COUNT_SHOW_CARDS_CLICK * countClickBtnShowCards;

        const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search'); // Получаем то, что искали
   if (searchQuery) {
    const decodedQuery = decodeURIComponent(searchQuery).toLowerCase();
    let filterSearch =  searchFiltreUrl(productsDataUrl, decodedQuery)
     console.log(decodedQuery, filterSearch);
     
     const addCards = filterSearch.slice(shownCardS, countShowCards);
     createCards(addCards);
     shownCardS = cards.children.length;

  if (shownCardS >= filterSearch.length) {
    console.log("098");
    
    btnShowCards.classList.add("filtersProductsBtn_hide");
    
  }
   }

   

 chekingActiveButtons(basket);
  chekingFavoritesActiveBurrons(favorites);
  
 
  // chekingActiveButtons(basket);
  // chekingFavoritesActiveBurrons(favorites);
}


function createCards(data) {
  data.forEach((card) => {
    const { id, top, img, name, price, discount } = card;
    const cardItem = `
         <div class="products__cell" data-product-id="${id}">
         
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
                <div class="card__product">
                     <a href="./aboutProduct.html?id=${id}">
                  <img
                    src="./images/${img}"
                    alt="Image"
                  />
                  </a>
                </div>
              </div>
              <div class="card__content">
                <div class="card__reviews">
                  <div class="card__reviews_cell">
                    <p class="text_left">5.0</p>
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
                    <p class="text_right">
                      <span class="card__count">3</span> отызва
                    </p>
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
                  <div class="card__price_cell">
                    <button type="button" class="card__besket_add" data-product-id="${id}"></button>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      `;
    cards.insertAdjacentHTML("beforeend", cardItem);
    const hit = document.querySelectorAll(".card__body .hit p");

    hit.forEach((hit) => {
      hit.textContent = "ТОП ПРОДАЖ";
    });
  });
}

 function chekingActiveButtons(besket) {
  const buttons = document.querySelectorAll(".card__besket_add");
  const modalEmpty = document.querySelector(".modal_empty_besket");

  buttons.forEach((btn) => {
    const card = btn.closest(".products__cell");
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

 function chekingFavoritesActiveBurrons(favorites) {
  const buttons = document.querySelectorAll(".card .favorites");

  buttons.forEach((btn) => {
    const card = btn.closest(".products__cell");
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

function handlefavoritesCardClick(event) {
  //  const modalAddFavorites = document.querySelector(".header__favorites_counter ");
  const fovorites = document.querySelector(".favorites_icon");
  const targetButton = event.target.closest(".card .favorites");
  const fovoratiesCounter = document.querySelector(
    ".header__favorites_counter",
  );
  const modalFavorites = document.querySelector(".modal_add_faborites ");
  if (!targetButton) return;

  const card = targetButton.closest(".products__cell");
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
  chekingFavoritesActiveBurrons(favorites);
}

function handleCardClick(event) {
  const basketCount = document.querySelector(".header__besket_counter");
  const modalAddBasket = document.querySelector(".modal_add_besket ");
  const targetButton = event.target.closest(".card__besket_add");
  if (!targetButton) return;

  const card = targetButton.closest(".products__cell");
  const id = card.dataset.productId;

  if (basket.includes(id)) {
    return;
  }

  modalAddBasket.classList.add("modal_animate");
  basket.push(id);
  basketCount.classList.add("header__besket_counter_show");
  setBasketLocalStorage(basket);

  chekingActiveButtons(basket);
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

setBasketLocalStorage(basket);

addBasketProducts();



shekingCounterFavorites();
