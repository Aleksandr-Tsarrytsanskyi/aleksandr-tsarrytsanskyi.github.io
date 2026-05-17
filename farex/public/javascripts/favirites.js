import { modalController } from "./modal/modal.js";
import { scrollToHeaderBtn } from "./scrollUp.js";
import {showErrorMessage,checkingRelevanceValueFavorites, getBasketLocalStorage,setBasketLocalStorage ,getFavoritesLocalStorage, setFavoritesLocalStorage} from "./utils/utils.js";
import {ERRO_SERVER, PRODUCT_INFORMATION_NOT_FOUND, NO_ITEMS_CART,NO_FAVORITES_PRODUCT} from "./constants/constant.js";
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
    modal: ".modal_profile_reset_pas",
    btnOpen: ".modal_profile_login_repeat_pas",
    btnClose: ".modal__close",
    time: "300"
})
// document.addEventListener("DOMContentLoaded", function() {
//     const addfavorites = document.querySelector(".mobile_none a");
//   const showfavorites = document.querySelector(".mobile_none");
//   const emptyLink = document.querySelector(".header__right_menu .empty");

//     function addFavoritesProduct() {
//         const favorites = document.querySelectorAll(".card .favorites");
//         const besket = document.querySelectorAll(".card__besket_add");
//         const resetProducts = document.querySelector(".filtr__reset_product");
//         const addfavorites = document.querySelector(".mobile_none");
//         const modalFavorites = document.querySelector(".modal_add_faborites");
//         const modalBesket = document.querySelector(".modal_add_besket");
//         const addBesket = document.querySelectorAll(".card__besket_add");
//         const products = document.querySelector(".products");
//         const modalLignBtn = document.querySelector(
//           ".modal_profile_registration_login"
//         );
//         const modalShowLogin = document.querySelector(
//           ".modal_profile_registration"
//         );
//          modalController({
//         modal: ".modal_add_faborites",
//         btnOpen: ".card .favorites",
//         btnClose: ".modal__close",
//         time: "300"
//     })
    
//         modalController({
//         modal: ".modal_add_besket",
//         btnOpen: ".card__besket_add",
//         btnClose: ".modal__close",
//         time: "300"
//     })
    
//     favorites.forEach(el => {
//         el.addEventListener("click", function(e) {
//             modalBesket.classList.remove("modal_animate")
//             if(e.target.classList.contains("active")) {
//                 modalFavorites.classList.remove("modal_animate")
//             }
//         })
//     })
    
//     addBesket.forEach(el => {
//         el.addEventListener("click", function(e) {
//              modalFavorites.classList.remove("modal_animate")
//             if(e.target.classList.contains("active")) {
//                 modalBesket.classList.remove("modal_animate")
//             }
//         })
//     })
    
//         modalLignBtn.addEventListener("click", function () {
//           modalShowLogin.classList.remove("modal_animate");
//         });
    
//         resetProducts.addEventListener("click", function(e) {
//             window.location.href = "/public/index.html"
//             setTimeout(() => {
//                 products.innerHTML = ""
//             }, 1000)
//         })
        
    
//         favorites.forEach((product) => {
//           product.addEventListener("click", function (event) {
//             console.dir(favorites);
//             event.target.classList.toggle("active");
            
//             favorites.forEach(el => {
//                 if(!el.classList.contains("active")) {
                   
                    
    
//                     addfavorites.classList.remove("add_favorites_product")
//                 }
//             })
//             addfavorites.classList.add("add_favorites_product");
           
//           });
//         });
    
//         besket.forEach((product) => {
//           product.addEventListener("click", function (event) {
//             event.target.classList.toggle("active");
//             if (!event.target.classList.contains("active")) {
//               console.dir("asfasf");
//             }
//           });
//         });
//     }

//        function changeCounterProductBesket() {
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



//   changeCounterProductBesket();
//   changeCounterProductFavorites();
    
//       addFavoritesProduct();
// })

// let shownCardS = COUNT_SHOW_CARDS_CLICK;

document.addEventListener("DOMContentLoaded", function() {
  const resetFavorites = document.querySelector(".filtr__reset_product");
  const contentProducts = document.querySelector(".products_favorites ");
  const empty_basket = document.querySelector(".empty_basket")
  let countClickBtnShowCards = 1;
let productsData = [];
let basket = getBasketLocalStorage();
let fovorites = getFavoritesLocalStorage();
let cart = document.querySelector(".products_catalog")
cart.addEventListener("click",handleCardClick)
cart.addEventListener("click",delProductBasket)
resetFavorites.addEventListener("click", resetFavoritesProducts);
  getProducts();
  
  async function getProducts() {
    try {
      if(!productsData.length) {
        const res = await fetch("users", {
           method: "GET",
          headers: { "Content-Type": "application/json;charset=utf-8" },
        })
        if(!res.ok) {
          throw new Error(res.statusText)
          console.log("Err");
          
        }
  
        productsData = await res.json();
     
      }
      loadProductBasket(productsData);
      chekingActiveButtons(basket);
     checkingRelevanceValueFavorites(productsData)
    }
  
    catch (err) {
      showErrorMessage(ERRO_SERVER)
      console.log(err.message);
     
      
    }
  }

 function loadProductBasket(data) {
   // cart.textContent = ''
 
   if(!data || !data.length) {
   showErrorMessage(ERRO_SERVER)
   return;
 }
 
 
 const basket = getFavoritesLocalStorage();
   if(!basket || !basket.length) {
   showErrorMessage(NO_FAVORITES_PRODUCT)
   return;
 }
 
 const findProducts = data.filter(item => basket.includes(String(item.id)));
 
 if(!findProducts.length) {
    showErrorMessage(NO_FAVORITES_PRODUCT)
    return;
 }
 
 renderProductsBasket(findProducts)
 checkingRelevanceValueFavorites(data)
 }


 function renderProductsBasket (arr){
   const basket = getFavoritesLocalStorage();
   const countertext = document.querySelector(".besket_products__counter")
   const counterT = document.querySelector(".besket_products__counter_text")
   const count =  basket.length
  //  countertext.textContent = count
 
  //  if(count > 1) {
  //    counterT.textContent = "товара"
  //  }
 
  //  if(count == 1) {
  //    counterT.textContent = "товар"
  //  }
 
  //  if(count >=5) {
  //    counterT.textContent = "шт."
  //  }
   if(count > 1) {
    counterT.textContent = "товара"
  }

  if(count == 1) {
    counterT.textContent = "товар"
  }

  if(count >=5) {
    counterT.textContent = "шт."
  }

  if(count == 0) {
    counterT.textContent = "товаров"
  } 


   arr.forEach(card => {
     let counter =  localStorage.getItem("count")
     const {id,img, name, price, discount, top} = card;
 
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
                    <button type="button" class="card__remove_favorites_product">
                      <svg class="" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6924 17.78L10.9142 10.0018L18.6924 2.22364L17.2781 0.809424L9.49997 8.5876L1.7218 0.809424L0.307582 2.22364L8.08576 10.0018L0.307582 17.78L1.7218 19.1942L9.49997 11.416L17.2781 19.1942L18.6924 17.78Z"></path>
                    </svg>
                    </button>
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
    `
     
     cart.insertAdjacentHTML("beforeend",cardItem);

      const hit =document.querySelectorAll(".card__body .hit p");

        hit.forEach(hit => {
          hit.textContent  = "ТОП ПРОДАЖ"
        })
   })
   checkingRelevanceValueFavorites(arr)
 }


 function handleCardClick(event) {
  const basketCount = document.querySelector(".header__besket_counter")
   const modalAddBasket = document.querySelector(".modal_add_besket ");
   const targetButton = event.target.closest(".card__besket_add");
   if(!targetButton) return;
 
   const card = targetButton.closest(".products__cell");
   const id = card.dataset.productId;
   
 
   if(basket.includes(id)) {
     return
   } 
     
     modalAddBasket.classList.add("modal_animate");
     modalAddBasket.style.zIndex = "300"
   basket.push(id);
    basketCount.classList.add("header__besket_counter_show");
   setBasketLocalStorage(basket)
   
   chekingActiveButtons(basket);
   
 
 }
 
 function chekingActiveButtons(besket) {
   const buttons = document.querySelectorAll(".card__besket_add");
  // const modalEmpty = document.querySelector(".modal_empty_besket");
 
   buttons.forEach(btn => {
     const card = btn.closest(".products__cell");
     const id = card.dataset.productId;
     const isInBasket = besket.includes(id);
     // btn.disabled = isInBasket;
     btn.classList.toggle("active",isInBasket); 
      //  modalEmpty.classList.remove("modal_animate");
       btn.addEventListener("click", function(event) {
     
      if(event.target.classList.contains("active")) {
       window.location.href = "../besket.html"
      
      }
       
     })
 
    
     
   }) 
 
   
  
 }

 function chekingEmptyCart() {
  const modalEmpty = document.querySelector(".modal_empty_besket");
  const fovoritesCount = document.querySelector(".header__favorites_counter");
const emptyLink = document.querySelector(".header__right_menu .empty");
const counterProducts = document.querySelector(".header__besket_counter .counter")     
const counterfoviretesProduct = document.querySelector(".besket_products__counter");
const counterT = document.querySelector(".besket_products__counter_text")  
  const basketCount = document.querySelector(".header__besket_counter")
   basketCount.classList.add("header__besket_counter_show");  
const counterFovorites = document.querySelector(".header__favorites_counter  .counter") 

if(!basket.length) {
   basketCount.classList.remove("header__besket_counter_show");  
}

if(!fovorites.length) {
  fovoritesCount.classList.remove("modal_animate")
}

  if(fovorites.length) {
    counterfoviretesProduct.textContent += fovorites.length
  } 
  
  

emptyLink.addEventListener("click", function(e) {
      e.preventDefault();
      
     if(counterProducts.textContent == "0") {
          modalEmpty.classList.add("modal_animate");
          

    }
        else {
        modalEmpty.classList.remove("modal_animate");
        window.location.href ="../besket.html"
        }
   
    
  })
}

function delProductBasket(event) {
  const targetButton = event.target.closest(".card__remove_favorites_product ")
  const countertext = document.querySelector(".besket_products__counter")
  const counterT = document.querySelector(".besket_products__counter_text")

  if(!targetButton) {
    return;
  }
  
  const card = targetButton.closest(".products__cell")
  const id =  card.dataset.productId;
  card.remove();
 
  const bakset = getFavoritesLocalStorage();
  
  
  const newBasket = bakset.filter(item => item !== id);
  console.log(newBasket);
  
  
  setFavoritesLocalStorage(newBasket);
  
 
   if(targetButton) {
     const count =  --bakset.length
    countertext.textContent = count;
    if(count > 1) {
    counterT.textContent = "товара"
  }

  if(count == 1) {
    counterT.textContent = "товар"
  }

  if(count >=5) {
    counterT.textContent = "шт."
  }

  if(count == 0) {
    counterT.textContent = ""
    countertext.textContent = ""
  }

   if(!bakset.length) {
    showErrorMessage(NO_ITEMS_CART)
    console.log("sa");
    contentProducts.textContent = ""
    empty_basket.classList.add("empty_basket_show")
    
  }
  
  } 
}
function resetFavoritesProducts() {
    localStorage.removeItem("favorites");
    contentProducts.textContent = ""
    empty_basket.classList.add("empty_basket_show");
     showErrorMessage(NO_FAVORITES_PRODUCT)
  }

  function shekingCounterFavorites() {
  const modalEmpty = document.querySelector(".header__favorites_counter");
  const fovoritesIcon = document.querySelector(".mobile_none");
  const counterFavorites = document.querySelector(".header__favorites_counter .counter");
  const favorites  = getFavoritesLocalStorage();
   fovoritesIcon.classList.add("mobile_none");
  
  if(favorites.length) {
    
    
    counterFavorites.textContent = favorites.length
    modalEmpty.classList.add("modal_animate")
       fovoritesIcon.classList.remove("mobile_none");
    }

    else {
       modalEmpty.classList.remove("modal_animate")
      fovoritesIcon.classList.add("mobile_none");
    }

    
}

shekingCounterFavorites();

chekingEmptyCart();
})