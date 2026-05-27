import { modalController } from "./modal/modal.js";
import { scrollToHeaderBtn } from "./scrollUp.js";
import {setFavoritesLocalStorage,getFavoritesLocalStorage,showErrorMessage,checkingRelevanceValueBasket,setBasketLocalStorage, getBasketLocalStorage} from "./utils/utils.js";
import {ERRO_SERVER, PRODUCT_INFORMATION_NOT_FOUND, NO_ITEMS_CART} from "./constants/constant.js";
import {search} from "./modules/helpers.js"
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
  time: "300",
});

  //  const modalLignBtn = document.querySelector(
  //   ".modal_profile_registration_login"
  // );
  // const totalPrice = document.querySelector(".besket_products__total_price");
 
  // const modalShowLogin = document.querySelector(".modal_profile_registration");
  //  modalLignBtn.addEventListener("click", function () {
  //   modalShowLogin.classList.remove("modal_animate");
  // });
  // function addFavoritesProduct() {
  //   const favorites = document.querySelectorAll(".card .favorites");
  //   const besket = document.querySelectorAll(".card__besket_add");
  //   const resetProducts = document.querySelector(".filtr__reset_product");
  //   const addfavorites = document.querySelector(".mobile_none");
  //   const modalFavorites = document.querySelector(".modal_add_faborites");
  //   const modalBesket = document.querySelector(".modal_add_besket");
  //   const addBesket = document.querySelectorAll(".card__besket_add");
  //   const products = document.querySelector(".products");
    
  //   const modalLignBtn = document.querySelector(
  //     ".modal_profile_registration_login"
  //   );
  //   const modalShowLogin = document.querySelector(
  //     ".modal_profile_registration"
  //   );
    

  //   favorites.forEach((el) => {
  //     el.addEventListener("click", function (e) {
  //       modalBesket.classList.remove("modal_animate");
  //       if (e.target.classList.contains("active")) {
  //         modalFavorites.classList.remove("modal_animate");
  //       }
  //     });
  //   });

  //   addBesket.forEach((el) => {
  //     el.addEventListener("click", function (e) {
  //       modalFavorites.classList.remove("modal_animate");
  //       if (e.target.classList.contains("active")) {
  //         modalBesket.classList.remove("modal_animate");
  //       }
  //     });
  //   });

  //   modalLignBtn.addEventListener("click", function () {
  //     modalShowLogin.classList.remove("modal_animate");
  //   });

  //   // resetProducts.addEventListener("click", function(e) {
  //   //     window.location.href = "/public/index.html"
  //   //     setTimeout(() => {
  //   //         products.innerHTML = ""
  //   //     }, 1000)
  //   // })

  //   favorites.forEach((product) => {
  //     product.addEventListener("click", function (event) {
  //       console.dir(favorites);
  //       event.target.classList.toggle("active");

  //       favorites.forEach((el) => {
  //         if (!el.classList.contains("active")) {
  //           addfavorites.classList.remove("add_favorites_product");
  //         }
  //       });
  //       addfavorites.classList.add("add_favorites_product");
  //     });
  //   });

  //   besket.forEach((product) => {
  //     product.addEventListener("click", function (event) {
  //       event.target.classList.toggle("active");
  //       if (!event.target.classList.contains("active")) {
  //         console.dir("asfasf");
  //       }
  //     });
  //   });
  // }

  

  // const besketcontent = document.querySelector(".besket_products")
  // const empty_basket = document.querySelector(".empty_basket")
search();
  const conculateTotalCartValue = () => {
      const cartItems = document.querySelectorAll(".besket_products_item");
      const cartTotalPrice = document.querySelector(".besket_products__total_price");                   
      const cartTotalPriceText = document.querySelector(".besket_products_total .text");                   
        const cartTotalDiskountText = document.querySelector(".besket_products__sum .text_col");

      let totalCartValue = 0;
      let totalCartValueDiskount = 0;
      
      cartItems.forEach((item) => {
        const itemCount = item.querySelector(".besket_products__count");
        console.log(itemCount);
        let removeProduct = item.querySelector(".remove");
       
        
        
        const itemPrice = item.querySelector(".besket_products__price_price");
        const itemDiskount = item.querySelector(".besket_products__price_procent");
        console.log(itemPrice);

        const itemTotalPrice =
          parseInt(itemCount.textContent) *
          parseInt(itemPrice.textContent.split(" ").join(""));
               const itemTotalDiskount =
          parseInt(itemCount.textContent) *
          parseInt(itemDiskount.textContent.split(" ").join(""));
        console.log(itemTotalPrice);

        //   itemPrice.textContent = formatter.format(itemTotalPrice);
        totalCartValue += itemTotalPrice;
        totalCartValueDiskount += itemTotalDiskount;
        console.log(totalCartValue);
        removeProduct.addEventListener("click", function() {
          const cartTotalPrice = document.querySelector(".besket_products__total_price");                   
      const cartTotalPriceText = document.querySelector(".besket_products_total .text");                   
        const cartTotalDiskountText = document.querySelector(".besket_products__sum .text_col");
          let totalCartValue = 0;
          let totalCartValueDiskount = 0;
          const itemCount = item.querySelector(".besket_products__count");
          const itemDiskount = item.querySelector(".besket_products__price_procent");
          const itemPrice = item.querySelector(".besket_products__price_price");

          const itemTotalPrice =
          parseInt(itemCount.textContent) *
          parseInt(itemPrice.textContent.split(" ").join(""));
               const itemTotalDiskount =
          parseInt(itemCount.textContent) *
          parseInt(itemDiskount.textContent.split(" ").join(""));
        console.log(itemTotalPrice);

        //   itemPrice.textContent = formatter.format(itemTotalPrice);
        totalCartValue += itemTotalPrice;
        totalCartValueDiskount += itemTotalDiskount;
        console.log(totalCartValue);
           let total = totalCartValue.toLocaleString("ua-UA");
        let totalDIskpunt = totalCartValueDiskount.toLocaleString("ua-UA");

      cartTotalPrice.textContent = total + "₴";
      cartTotalPriceText.textContent = total + "₴";
      cartTotalDiskountText.textContent = totalDIskpunt + "₴";
      
      
      conculateTotalCartValue();
        })
      });
      let total = totalCartValue.toLocaleString("ua-UA");
      let totalDIskpunt = totalCartValueDiskount.toLocaleString("ua-UA");

      cartTotalPrice.textContent = total + "₴";
      cartTotalPriceText.textContent = total + "₴";
      cartTotalDiskountText.textContent = totalDIskpunt + "₴";
    };
  function changequantityProductBesket() {
    const cart = document.querySelector(".besket_products");
    cart.addEventListener("click", function (event) {
      if (!event.target.matches(".besket_products__minus, .besket_products__plus")) {
        return;
      }

      let currentItems, minusBtn;

      if (event.target.matches(".besket_products__minus") || event.target.matches(".besket_products__plus")) {
        const counter = event.target.closest(".besket_products__counters");
        

        currentItems = counter.children[1].firstElementChild;

        minusBtn = counter.querySelector(".besket_products__minus");
       
      }

      if (event.target.matches(".besket_products__plus")) {
        currentItems.textContent =++currentItems.textContent;
        minusBtn.removeAttribute("disabled");
        conculateTotalCartValue();
      }

      if (event.target.matches(".besket_products__minus")) {
        if (parseInt(currentItems.textContent) > 2) {
          currentItems.textContent = --currentItems.textContent;
        } else if (parseInt(currentItems.textContent) === 2) {
          currentItems.textContent = --currentItems.textContent;
          minusBtn.setAttribute("disabled", "disabled");
        }
        conculateTotalCartValue();
      }
    });

    
    conculateTotalCartValue();
    
   
    

    const priceProducts = document.querySelectorAll(".besket .price span");
    console.log(priceProducts);

    const totalpriceProducts = document.querySelector(".price_products");
    priceProducts.forEach((price) => {
      const itemTotalPrice = parseInt(price.textContent);
      console.log(itemTotalPrice);

      let totalPrice = 0;
      totalPrice += itemTotalPrice;
      console.log(totalPrice);
    });
     
  }

  // addFavoritesProduct();
const cart = document.querySelector(".besket_products__content");
const resetBaskets = document.querySelector(".besket_products__reset_btn");
const contentProducts = document.querySelector(".besket_products ");
  const empty_basket = document.querySelector(".empty_basket")

let productsData = []
cart.addEventListener("click", delProductBasket);
resetBaskets.addEventListener("click", resetBasket);
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

    loadProductBasket(productsData)

    console.dir(productsData);
  }

  catch (err) {
    showErrorMessage(ERRO_SERVER)
    console.log(err.message);
    console.log("errr");
    
  }
}

function loadProductBasket(data) {
  // cart.textContent = ''

  if(!data || !data.length) {
  showErrorMessage(ERRO_SERVER)
  return;
}

checkingRelevanceValueBasket(data)
const basket = getBasketLocalStorage();
  if(!basket || !basket.length) {
  showErrorMessage(NO_ITEMS_CART)
  return;
}

const findProducts = data.filter(item => basket.includes(String(item.id)));

if(!findProducts.length) {
   showErrorMessage(NO_ITEMS_CART)
   return;
}

renderProductsBasket(findProducts)
}
function delProductBasket(event) {
  const targetButton = event.target.closest(".besket_products__content svg ")
  const countertext = document.querySelector(".besket_products__counter")
  const counterT = document.querySelector(".besket_products__counter_text")

  if(!targetButton) {
    return;
  }
  
  const card = targetButton.closest(".besket_products_item")
  const id =  card.dataset.productId;
  targetButton.parentElement.parentElement.remove()
 
  const bakset = getBasketLocalStorage();
  
  
  const newBasket = bakset.filter(item => item !== id);
  console.log(newBasket);
  
  
  setBasketLocalStorage(newBasket);
  conculateTotalCartValue();
 
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
    counterT.textContent = "товаров"
  }

   if(!bakset.length) {
    showErrorMessage(NO_ITEMS_CART)
    console.log("sa");
    contentProducts.textContent = ""
    empty_basket.classList.add("empty_basket_show")
    
  }
  
  }

  

  
   
  
}

function resetBasket() {
  localStorage.removeItem("besket");
  contentProducts.textContent = ""
  empty_basket.classList.add("empty_basket_show");
   showErrorMessage(NO_ITEMS_CART)
}


function renderProductsBasket (arr){
  const basket = getBasketLocalStorage();
  const countertext = document.querySelector(".besket_products__counter")
  const counterT = document.querySelector(".besket_products__counter_text")
  const count =  basket.length
  countertext.textContent = count

  if(count > 1) {
    counterT.textContent = "товара"
  }

  if(count == 1) {
    counterT.textContent = "товар"
  }

  if(count >=5) {
    counterT.textContent = "шт."
  }
  
  arr.forEach(card => {
    let counter =  localStorage.getItem("count")
    const {id,img, name, price, discount} = card;

    const cardItem = `
       <div class="besket_products_item" data-product-id="${id}">
              <div class="cell">
                <svg
                  class="remove none"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6924 17.78L10.9142 10.0018L18.6924 2.22364L17.2781 0.809424L9.49997 8.5876L1.7218 0.809424L0.307582 2.22364L8.08576 10.0018L0.307582 17.78L1.7218 19.1942L9.49997 11.416L17.2781 19.1942L18.6924 17.78Z"
                  />
                </svg>
              </div>
              <div class="cell">
                <img src="./images/${img}" alt="image" />
              </div>
              <div class="cell">
                <h2>${name}</h2>
                <div class="besket_products__price">
                  <div class="cell">
                    <p><span class="besket_products__price_price">${price}</span></p>
                  </div>
                  <div class="cell">
                    <p><span class="besket_products__price_diskount">${discount}</span></p>
                  </div>
                   <div class="cell none">
                    <p><span class="besket_products__price_procent">1 668</span>₴</p>
                  </div>
                </div>
              </div>
              <div class="cell">
                <div class="besket_products__counters">
                    <div class="cell">
                        <button type="button" class="besket_products__minus" disabled></button>
                    </div>
                    <div class="cell">
                        <p class="besket_products__count">1</p>
                    </div>
                    <div class="cell">
                        <button type="button" class="besket_products__plus"></button>
                    </div>
                </div>
              </div>
            </div>
    `
    
    cart.insertAdjacentHTML("beforeend",cardItem);
  })
  changequantityProductBesket();
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

// function chekingEmptyCart() {
//   const modalEmpty = document.querySelector(".modal_empty_besket");
// const emptyLink = document.querySelector(".header__right_menu .empty");
// const counterProducts = document.querySelector(".header__besket_counter .counter")     
// // const counterFovorites = document.querySelector(".header__favorites_counter  .counter")     
//      emptyLink.addEventListener("click", function(e) {
//       e.preventDefault();
      
//      if(counterProducts.textContent == "0") {
//           modalEmpty.classList.add("modal_animate");
          

//     }
//         else {
//         modalEmpty.classList.remove("modal_animate");
//         window.location.href ="../besket.html"
//         }
   
    
//   })
// }

// chekingEmptyCart();

function basketCount() {
  let basket = getBasketLocalStorage();
  const basketCount = document.querySelector(".header__besket_counter")
if(basket.length) {
    basketCount.classList.add("header__besket_counter_show");

}
  else {
      basketCount.classList.remove("header__besket_counter_show");
  }
}

basketCount();

shekingCounterFavorites();











  

