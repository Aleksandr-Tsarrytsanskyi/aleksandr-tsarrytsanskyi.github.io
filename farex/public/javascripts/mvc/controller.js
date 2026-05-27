import { Model } from "./model.js";
import { View } from "./view.js";
import {
  setFavoritesLocalStorage,
  getFavoritesLocalStorage,
  showErrorMessage,
  getBasketLocalStorage,
  setBasketLocalStorage,
  checkingRelevanceValueBasket,
  checkingRelevanceValueFavorites,
} from "../utils/utils.js";

import {COUNT_SHOW_CARDS_CLICK} from "../constants/constant.js"
const basket = getBasketLocalStorage();
const favorites = getFavoritesLocalStorage();
const model = new Model()
const view = new View()
let countClickBtnShowCards = 1;
let shownCardS = COUNT_SHOW_CARDS_CLICK
 const cards = document.querySelector(".products_catalog");
init();
async function init() {
    await model.loadingData();
    const btnMore = document.querySelector('.show_more__category')
    btnMore.classList.add('filtersProductsBtn_hide')
    addEventListener();
}

function addEventListener() {
    view.elements.sortFilter.addEventListener("change", sortProduct)
    view.elements.sortPrice.addEventListener("change", sortProduct)
    view.elements.sortBtn.addEventListener("click", sortBtnProduct)
}

function sortBtnProduct() {
  const sortingValue = view.sortingElementsValue();  
   const soringData =  model.soretingProducts(sortingValue);
   const btnMore = document.querySelector('.show_more__category')
   
   countClickBtnShowCards++;
     const countShowCards = COUNT_SHOW_CARDS_CLICK * countClickBtnShowCards;
     console.log(countShowCards);
     
     const addCards = soringData.slice(shownCardS, countShowCards);
     console.log(soringData);
     
    view.renderBtnArrProducts(addCards)

     shownCardS = cards.children.length;
     
       if (shownCardS >= soringData.length) {
   btnMore.classList.add('filtersProductsBtn_hide')
    
  }

  chekingActiveButtons(basket);
  chekingFavoritesActiveBurrons(favorites);
   
}

function sortProduct(e) {
  const btnCategory = document.querySelector('.show_more__category')
  const btnMore = document.querySelector('.show_more__catalog')
  btnMore.classList.add("filtersProductsBtn_hide")
   btnCategory.classList.remove('filtersProductsBtn_hide')
     const filtersProductsButton = document.querySelector(
    ".show_more__catalog button",
  );
    const sortingValue = view.sortingElementsValue();  
   const soringData =  model.soretingProducts(sortingValue);
  
   
    const arrCards = soringData.slice(0, 5);
   view.renderArrProducts(arrCards)
   chekingActiveButtons(basket);
  chekingFavoritesActiveBurrons(favorites);
  if(soringData.length <= 5) {
    btnCategory.classList.add('filtersProductsBtn_hide')
  }
  
//   if(e.target) {
//   filtersProductsButton.classList.remove("none");
//   }
   
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

