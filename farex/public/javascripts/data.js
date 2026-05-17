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
import { modalController } from "./modal/modal.js";
import { renderFiltrAdd } from "./filters/filter_catalog.js";
const cards = document.querySelector(".products_catalog");
const btnShowCards = document.querySelector(".show_more button");
const productsCatalog = document.querySelector(".products_catalog");
const catalogFiltrBtn = document.querySelector(".show_more__filtr");
const list_products = document.querySelector(".list_products");
const filtrProducts = document.querySelector(".filtr_products");
const modalFiltr = document.querySelector(".modal_filtr");
const filtersProductsBtn = document.querySelector(".products_catalog_filtr");
 const filtersProductsButton = document.querySelector(
    ".products_catalog_filtr button",
  );
let shownCardS = COUNT_SHOW_CARDS_CLICK;
let countClickBtnShowCards = 1;
let productsData = [];
const basket = getBasketLocalStorage();
const favorites = getFavoritesLocalStorage();
let thisValue;
let resFiltr;
let filteredRom;
btnShowCards.addEventListener("click", sliceArrCards);
cards.addEventListener("click", handleCardClick);
cards.addEventListener("click", handlefavoritesCardClick);
list_products.addEventListener("change", sliceFiltrListArrCards);
catalogFiltrBtn.addEventListener("click", sliceFiltrBtnArrCards);
filtrProducts.addEventListener("submit", apllyFiltrProducts);
filtersProductsButton.addEventListener("click", sliceFiltr);
const filters = document.querySelectorAll(
  '.modal_filtr input[type="checkbox"]',
);

getProducts();

// cards.addEventListener("click",delProductBasket)
// productsCatalog.addEventListener("click",delProductBasket)
function showMoreCatalog() {
  const filtrBtn = document.querySelector(".show_more__filtr");
  filtrBtn.classList.add("show_more__catalog_hide");
}

function chengeFiltrCheckbox() {
  // const products = document.querySelectorAll('.product');

  filters.forEach((filter) => {
    filter.addEventListener("change", () => {
      const activeFilters = Array.from(filters)
        .filter((f) => f.checked)
        .map((f) => f.value);
      chekingActiveButtons(basket);
      chekingFavoritesActiveBurrons(favorites);
      resFiltr = activeFilters;
       
      console.log(resFiltr);
    });

    // products.forEach(product => {
    //   if (activeFilters.length === 0 || activeFilters.includes(product.dataset.category)) {
    //     product.style.display = 'block'; // Показать
    //   } else {
    //     product.style.display = 'none'; // Скрыть
    //   }
    // });
  });
}

//  function filtre(arr,prop,value) {
//     let result = []
//     let copy = [...arr]

//     for(const item of copy) {
//       if(item[prop].includes(value) === true) {
//         result.push(item)
//       }
//     }
//     return result;
//   }

chengeFiltrCheckbox();

function sliceFiltr() {
  if (shownCardS >= productsData.length) return;

      countClickBtnShowCards++;
      const countShowCards = COUNT_SHOW_CARDS_CLICK * countClickBtnShowCards;
      const arrCards = filteredRom.slice(shownCardS, countShowCards);
    console.log(arrCards);
    
      renderFiltrAdd(arrCards);
      shownCardS = cards.children.length;
     
       if (shownCardS >= filteredRom.length) {
    filtersProductsButton.classList.add("filtersProductsBtn_hide");
    
  }


  chekingActiveButtons(basket);
  chekingFavoritesActiveBurrons(favorites);
}

function apllyFiltrProducts(event) {
  event.preventDefault();
 
  const filtersbtn = document.querySelector(
    ".products_catalog_filtr",
  );
  const min = document.querySelector(".modal_filtr__price_min").value;
  const max = document.querySelector(".modal_filtr__price_max").value;
  if (!resFiltr) {
    return;
  }
  let filtersProducts = [...productsData];
  let checkedFiltr = resFiltr;



  if (resFiltr) {
     filteredRom = productsData.filter((product) => {
      const ismin = min.trim() ? product.price >= parseInt(min.trim()) : true;
      const ismax = max.trim() ? product.price <= parseInt(max.trim()) : true;
      let rom = checkedFiltr.includes("128GB")
        ? checkedFiltr.includes(product.rom)
        : true;
      let ram = checkedFiltr.includes("8GB")
        ? checkedFiltr.includes(product.ram)
        : true;
      let rom1 = checkedFiltr.includes("256GB")
        ? checkedFiltr.includes(product.rom)
        : true;
      let ram1 = checkedFiltr.includes("16GB")
        ? checkedFiltr.includes(product.ram)
        : true;
      let rom2 = checkedFiltr.includes("64GB")
        ? checkedFiltr.includes(product.rom)
        : true;
      let ram2 = checkedFiltr.includes("6GB")
        ? checkedFiltr.includes(product.ram)
        : true;
      let ram3 = checkedFiltr.includes("4GB")
        ? checkedFiltr.includes(product.ram)
        : true;
      let hit = checkedFiltr.includes("hit")
        ? checkedFiltr.includes(product.top)
        : true;
      let discount = checkedFiltr.includes("dis")
        ? checkedFiltr.includes(product.productdis)
        : true;

      return (
        ismin &&
        ismax &&
        rom &&
        ram &&
        rom1 &&
        ram1 &&
        rom2 &&
        ram2 &&
        ram3 &&
        hit &&
        discount
      );

      // checkedFiltr.forEach(el => {
      //    res = product.ram == el
      // })
    });

    console.log(filteredRom);

    if (filteredRom.length === 0) {
      showErrorMessage("Нет таких товаров");
      modalFiltr.classList.remove("modal_animate");
    } else {
    }

    cards.textContent = "";
    const arrCards = filteredRom.slice(0, 5);
    renderFiltrAdd(arrCards);
    btnShowCards.classList.add("none");
    catalogFiltrBtn.classList.add("filtersProductsBtn_hide");
    filtersProductsBtn.classList.remove("filtersProductsBtn_hide");
     filtersProductsButton.classList.remove("filtersProductsBtn_hide");
   if(cards.children.length >= filteredRom.length) {
     filtersProductsButton.classList.add("filtersProductsBtn_hide");
   }

   else {
    filtersProductsButton.classList.remove("filtersProductsBtn_hide");
   }

    

    // sliceFiltr(filteredRom)
  }

  chekingActiveButtons(basket);
  chekingFavoritesActiveBurrons(favorites);

   

  

  //  let filteredRam =  productsData.filter(product => {

  //   let ram = checkedFiltr.length === 0 || checkedFiltr.includes(product.ram);

  //  return ram

  //   // checkedFiltr.forEach(el => {
  //   //    res = product.ram == el
  //   // })
  // })

  // filteredRom.forEach(item => {
  //   filtersProducts.push(item)
  // })
  //   filteredRam.forEach(item => {
  //   filtersProducts.push(item)
  // })

  // filtersProducts = filtre(filtersProducts, "rom", checkedFiltr);

  // filtersProducts = []
}

showMoreCatalog();

function sliceFiltrListArrCards(event) {
  // if((event.target.value == "price") || (event.target.value == "popularity")) {
  //   console.log("POI");

  //   return
  // }

  ////

  if(event.target) {
    filtersProductsBtn.classList.add("filtersProductsBtn_hide")
  }

  const products = document.querySelector(".products_catalog");
  const catalog = document.querySelector(".show_more__catalog");
  const catalogFiltrBtn = document.querySelector(".show_more__filtr");

  if (
    (event.target && event.target.value == "new") ||
    (event.target && event.target.value == "top")
  ) {
    thisValue = event.target.value;
    console.log("OKL");
    products.textContent = "";
    catalog.classList.add("show_more__catalog_hide");
    catalogFiltrBtn.classList.remove("show_more__catalog_hide");
    let filtr = productsData.filter((item) => item.filtr === this.value);
    const addCards = filtr.slice(0, 5);
    renderFiltrAdd(addCards);
    catalogFiltrBtn.classList.remove("filtersProductsBtn_hide");
    
  }

  if (event.target && event.target.value == "price") {
    thisValue = event.target.value;
    cards.textContent = "";
    catalog.classList.add("show_more__catalog_hide");
    catalogFiltrBtn.classList.remove("show_more__catalog_hide");
    let sort = productsData.sort((a, b) => b.price - a.price);
    const addCards = sort.slice(0, 5);
    console.log(addCards);

    renderFiltrAdd(addCards);
    catalogFiltrBtn.classList.remove("filtersProductsBtn_hide");
  }

  if (event.target && event.target.value == "popularity") {
    thisValue = event.target.value;
    cards.textContent = "";
    catalog.classList.add("show_more__catalog_hide");
    catalogFiltrBtn.classList.remove("show_more__catalog_hide");
    let sort = productsData.sort((a, b) => a.price - b.price);
    const addCards = sort.slice(0, 5);
    console.log(addCards);

    renderFiltrAdd(addCards);
    catalogFiltrBtn.classList.remove("filtersProductsBtn_hide");
  }

  if (event.target && event.target.value == "allproducts") {
    thisValue = event.target.value;
    cards.textContent = "";
    catalog.classList.add("show_more__catalog_hide");
    catalogFiltrBtn.classList.remove("show_more__catalog_hide");
    const arrCards = productsData.slice(0, COUNT_SHOW_CARDS_CLICK);

    renderFiltrAdd(arrCards);
    catalogFiltrBtn.classList.remove("filtersProductsBtn_hide");
  }

  chekingActiveButtons(basket);
  chekingFavoritesActiveBurrons(favorites);

  shownCardS = cards.children.length;

  if (shownCardS >= productsData.length) {
    btnShowCards.classList.add("none");
  }

  //////
}

function sliceFiltrBtnArrCards() {
  if (shownCardS >= productsData.length) return;

  countClickBtnShowCards++;
  const countShowCards = COUNT_SHOW_CARDS_CLICK * countClickBtnShowCards;
  if (thisValue == "price") {
    console.log(thisValue);

    let sort = productsData.sort((a, b) => b.price - a.price);
    const addCards = sort.slice(shownCardS, countShowCards);
    renderFiltrAdd(addCards);
    shownCardS = cards.children.length;

  if (shownCardS >= sort.length) {
   
    
    catalogFiltrBtn.classList.add("filtersProductsBtn_hide");
  }
  } else {
    console.log(thisValue);
    let filtr = productsData.filter((item) => item.filtr === thisValue);
    const addCards = filtr.slice(shownCardS, countShowCards);

    renderFiltrAdd(addCards);
  }

  if (thisValue == "popularity") {
    let sort = productsData.sort((a, b) => a.price - b.price);
    const addCards = sort.slice(shownCardS, countShowCards);
    renderFiltrAdd(addCards);

    shownCardS = cards.children.length;

  if (shownCardS >= sort.length) {
    
    
    catalogFiltrBtn.classList.add("filtersProductsBtn_hide");
  }
  }

  if (thisValue == "allproducts") {
    const arrCards = productsData.slice(shownCardS, countShowCards);

    renderFiltrAdd(arrCards);
     shownCardS = cards.children.length;

  if (shownCardS >= productsData.length) {
    
    
    catalogFiltrBtn.classList.add("filtersProductsBtn_hide");
  }
  }
  

  chekingActiveButtons(basket);
  chekingFavoritesActiveBurrons(favorites);
}

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

    console.dir(productsData);

    if (
      productsData.length > COUNT_SHOW_CARDS_CLICK &&
      btnShowCards.classList.contains("none")
    ) {
      btnShowCards.classList.remove("none");
    }
    renderStartPage(productsData);
    checkActiveModal();
    filtersProductsBtn.classList.add("filtersProductsBtn_hide");
  } catch (err) {
    showErrorMessage(ERRO_SERVER);
    console.log(err.message);
  }
}

function renderStartPage(data) {
  if (!data || !data.length) {
    showErrorMessage(NO_PRODUCTS_IN_THIS_CATEGORY);
    return;
  }
  const arrCards = data.slice(0, COUNT_SHOW_CARDS_CLICK);

  createCards(arrCards);
  checkingRelevanceValueBasket(data);
  checkingRelevanceValueFavorites(data);

  const bakset = getBasketLocalStorage();
  const favorites = getFavoritesLocalStorage();

  chekingActiveButtons(bakset);
  chekingFavoritesActiveBurrons(favorites);
}

function createCards(data) {
  data.forEach((card) => {
    const { id, top, img, name, price, discount } = card;
    const priceDiskount = price - (price * discount) / 100;
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

function sliceArrCards() {
  if (shownCardS >= productsData.length) return;

  countClickBtnShowCards++;
  const countShowCards = COUNT_SHOW_CARDS_CLICK * countClickBtnShowCards;
  const addCards = productsData.slice(shownCardS, countShowCards);

  
  createCards(addCards);
  shownCardS = cards.children.length;

  if (shownCardS >= productsData.length) {
    btnShowCards.classList.add("none");
  }
  chekingActiveButtons(basket);
  chekingFavoritesActiveBurrons(favorites);
}

const basketCount = document.querySelector(".header__besket_counter");
if (basket.length) {
  basketCount.classList.add("header__besket_counter_show");
} else {
  basketCount.classList.remove("header__besket_counter_show");
}
setBasketLocalStorage(basket);

// localStorage.clear();

function handleCardClick(event) {
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

///
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

shekingCounterFavorites();
chekingEmptyCart();

// function delProductBasket(event) {
//   const targetButton = event.target.closest(".active")

//   if(!targetButton) {
//     return;
//   }

//   const card = targetButton.closest(".products__cell")
//   const id =  card.dataset.productId;
//   targetButton.classList.remove("active")

//   const bakset = getBasketLocalStorage();

//   const newBasket = bakset.filter(item => item !== id);
//   console.log(newBasket);

//   setBasketLocalStorage(newBasket);

// }
