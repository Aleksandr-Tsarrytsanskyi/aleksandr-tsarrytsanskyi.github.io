import {setFavoritesLocalStorage,getFavoritesLocalStorage, showErrorMessage,checkingRelevanceValueBasket, getBasketLocalStorage, setBasketLocalStorage} from "./utils/utils.js";
import {ERRO_SERVER, PRODUCT_INFORMATION_NOT_FOUND} from "./constants/constant.js";
import { modalController } from "./modal/modal.js";
import { scrollToHeaderBtn } from "./scrollUp.js";
// import {swiperMain} from "./aboutProduct.js"
const wrapper = document.querySelector(".about-product")
// const wrapperSwiperThumbs = document.querySelector(".SwiperThumbs .swiper-wrapper")
// const wrapperTitle = document.querySelector(".about-product__title")

// import { addFavoritesProduct } from "./main.js";
// addFavoritesProduct();


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

const card = document.querySelector(".about-product")
const recommendAboutProduct = document.querySelector(".recommend_swiper .swiper-wrapper")

card.addEventListener("click",handleCardClick)
card.addEventListener("click",handlefavoritesCardClick)

  const swiper1 = new Swiper(".recommend_swiper", {
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
  });
  // function changeCounterGoods() {
   
  //   const cart = document.querySelector(".about-product__counter");

  //   cart.addEventListener("click", function (event) {
  //     if (!event.target.matches(".minus, .plus")) {
  //       return;
  //     }
  //     console.log(event.target);

  //     let currentItems, minusBtn;

  //     if (event.target.matches(".minus") || event.target.matches(".plus")) {
  //       const counter = event.target.closest(".about-product__counter");
  //       console.log(counter);

  //       currentItems = counter.querySelector(".counter");

  //       minusBtn = counter.querySelector(".minus");
  //       console.log(minusBtn);
  //     }
     
  //     if (event.target.matches(".plus")) {
  //         const countBasket = document.querySelector(".about-product__counter .counter").textContent
  //       currentItems.textContent = ++currentItems.textContent;
  //       // localStorage.setItem("count", currentItems.textContent);
  //       minusBtn.removeAttribute("disabled");
  //       // conculateTotalCartValue();
  //     }

  //     if (event.target.matches(".minus")) {
  //       if (parseInt(currentItems.textContent) >= 2) {
  //         currentItems.textContent = --currentItems.textContent;
  //         //  localStorage.setItem("count", currentItems.textContent);
  //         currentItems.classList.remove("currentItems_active");
  //       } else if (parseInt(currentItems.textContent) === 2) {
  //         currentItems.textContent = --currentItems.textContent;
  //         minusBtn.setAttribute("disabled", "disabled");
  //       }
  //       // conculateTotalCartValue();
  //     }
  //   });

  //   // const conculateTotalCartValue = () => {
  //   //   const cartItems = document.querySelector(".about-product__price");
  //   //   const cartTotalPrice = document.querySelector(
  //   //     ".about-product__price .price"
  //   //   );

  //   //   let totalCartValue = 0;

  //   //   const itemCount = document.querySelector(
  //   //     ".about-product__counter .counter"
  //   //   );

  //   //   const itemPrice = localStorage.getItem("price");
  //   //   const itemTotalPrice =
  //   //     parseInt(itemCount.textContent) *
  //   //     parseInt(itemPrice.split(" ").join(""));
  //   //   console.log(itemPrice);

  //   //   //  itemPrice.textContent = formatter.format(itemTotalPrice);

  //   //   totalCartValue += itemTotalPrice;

  //   //   let total = totalCartValue.toLocaleString("ua-UA");
  //   //   cartTotalPrice.textContent = total + "₴";
  //   // };
  // }
    function changeAcardion() {
    const acardion = document.querySelectorAll(".about-product__btn");
    console.log(acardion);

    // const content = document.querySelectorAll(".content");
    acardion.forEach((el) => {
      el.addEventListener("click", function (e) {
        console.log(e.target);
        e.target.classList.add("active");
        acardion.forEach((el) => {
          el.classList.remove("active");
        });

        let content = el.nextElementSibling;

        if (content.style.maxHeight) {
          e.target.classList.remove("active");

          document
            .querySelectorAll(".about-product__cardion_content")
            .forEach((el) => {
              el.style.maxHeight = null;
            });
        } else {
          e.target.classList.add("active");
          document
            .querySelectorAll(".about-product__cardion_content")
            .forEach((el) => {
              el.style.maxHeight = null;
              content.style.maxHeight = content.scrollHeight + "px";
            });
        }
      });
    });
  }
    function tabsProduct() {
    const tabsbtn = document.querySelectorAll(".about-product__tabs_nav");
    const tabsItem = document.querySelectorAll(".about-product__tabs_content");

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


let productsData = []

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
    let basket = getBasketLocalStorage();
    loadProducDetails(productsData)
   chekingActiveAboutButtons(basket);
   checkActiveModal();
   checkAboutActiveModal();
    console.dir(productsData);
  }

  catch (err) {
    // showErrorMessage(ERRO_SERVER)
    // console.log(err.message);
    console.log("errr");
    
  }
}

function loadProducDetails(data) {
if(!data || !data.length) {
  showErrorMessage(ERRO_SERVER)
  return;
}

checkingRelevanceValueBasket(data);

const productId = Number(getParameterFromURL("id"))

if(!productId) {
  showErrorMessage(PRODUCT_INFORMATION_NOT_FOUND);
  return;
}

const findProduct = data.find(card => card.id === productId)

  
  
if(!findProduct) {
  showErrorMessage(PRODUCT_INFORMATION_NOT_FOUND);
  return;
}
let fovorites = getFavoritesLocalStorage();
renderInfoProduct(findProduct);
renderRecomendProducts(data);
chekingFavoritesActiveBurrons(fovorites);
chekingFavoritesAboutActiveBurrons(fovorites)

}

function renderRecomendProducts(recommend) {
  // const basket = getBasketLocalStorage()
  let recommendProducts =  recommend.filter(product => product.recommended == "recommended");
   recommendProducts.forEach(product => {
    
      const {id,img, name, price, discount} = product
 
  
   const recommendItems = `
      <div class="swiper-slide" data-product-id="${id}">
                <div class="card">
                  <div class="card__item">
                    <div class="card__body">
                      <div class="card__cell">
                        <!-- <div class="hit">
                          <p>${top}</p>
                        </div> -->
                      </div>
                      <div class="card__cell">
                        <button type="button" class="favorites"></button>
                      </div>
                    </div>
                    <a href="./aboutProduct.html">
                      <div class="card__product">
                        <img
                          src="./images/${img}"
                          alt="Андроид 15"
                        />
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
                      <a href="./aboutProduct.html">
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
                        <button type="button" class="card__besket_add"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
   `
    recommendAboutProduct.insertAdjacentHTML("beforeend", recommendItems);
   })
  


 

 
  // chekingActiveButtons(basket);
  

  // swiperMain.update();
}


function renderInfoProduct(product) {
  const basket = getBasketLocalStorage()
  const {id,img, name, slide_img1,slide_img2,slide_img3,title, garanti, screen, ram, rom, text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12,text13,text14,text15,text16,text17,text18,text19,text20,text21,text22,text23,text24,text25} = product
  const productItem = `
           <div class="about-product__cell" >
          <div class="swiper swiperMain">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
             <div class="swiper-slide">
                <div class="about-product__cart">
                  <img src="./images/${img}" alt="Image" />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="about-product__cart">
                  <img src="./images/${slide_img1}" alt="Image" />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="about-product__cart">
                  <img src="./images/${slide_img2}" alt="Image" />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="about-product__cart">
                  <img src="./images/${slide_img3}" alt="Image" />
                </div>
              </div>
              
            </div>
            <!-- If we need pagination -->

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
          </div>
          <div class="swiper SwiperThumbs">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide">
                <div class="about-product__cart">
                  <img src="./images/${img}" alt="Image" />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="about-product__cart">
                  <img src="./images/${slide_img1}" alt="Image" />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="about-product__cart">
                  <img src="./images/${slide_img2}" alt="Image" />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="about-product__cart">
                  <img src="./images/${slide_img3}" alt="Image" />
                </div>
              </div>
              
            </div>
            <!-- If we need pagination -->

            <!-- If we need navigation buttons -->

            <!-- If we need scrollbar -->
          </div>
        </div>
        <div class="about-product__cell">
          <h2 class="about-product__title">
           ${name}
          </h2>
          <div class="about-product__rewies">
            <div class="cell">
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
            <div class="cell">
              <p><span class="counter">3</span> отзыва</p>
            </div>
          </div>
          <div class="about-product__description">
            <p>
             ${title}
            </p>
          </div>
          <div class="about-product__price">
            <div class="cell">
              <p class="price">4 599₴</p>
            </div>
            <div class="cell">
              <p class="discount">5 899₴</p>
            </div>
          </div>
          
          <div class="about-product__besket" data-product-id="${id}">
            <div class="cell">
              <button type="button" class="about-product__add_besket">
                ДОБАВИТЬ В КАРЗИНУ
              </button>
            </div>
            <div class="cell">
              <button type="button" class="about-product__favorites"></button>
            </div>
          </div>
          <div class="about-product__acardion">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M64 88a3.988 3.988 0 0 1-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0L64 78.344l37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40A3.988 3.988 0 0 1 64 88z" fill="#221f1f" opacity="1" data-original="#000000" class=""></path></g></svg> -->
            <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 612 612" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M604.501 440.509 325.398 134.956c-5.331-5.357-12.423-7.627-19.386-7.27-6.989-.357-14.056 1.913-19.387 7.27L7.499 440.509c-9.999 10.024-9.999 26.298 0 36.323s26.223 10.024 36.222 0l262.293-287.164L568.28 476.832c9.999 10.024 26.222 10.024 36.221 0 9.999-10.023 9.999-26.298 0-36.323z" fill="#221f1f" opacity="1" data-original="#000000" class=""></path></g></svg> -->
            <button type="button" class="about-product__btn">ДОСТАВКА</button>
            <div class="about-product__cardion_content about-product_dev">
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 256 256"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    class=""
                  >
                    <g>
                      <path
                        d="M177.67 177.921h-65.457a5 5 0 0 1 0-10h61.143L189.233 60.74H64.1a5 5 0 0 1 0-10h130.928a5 5 0 0 1 4.946 5.733l-17.358 117.18a5 5 0 0 1-4.946 4.268zM84.873 177.921H46.738a5 5 0 0 1 0-10h38.135a5 5 0 0 1 0 10z"
                        fill="#d29440"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                      <path
                        d="M200.268 177.921h-22.6a5 5 0 0 1 0-10h22.6a5 5 0 0 1 0 10zM247.234 177.921h-19.627a5 5 0 0 1 0-10h15.109l2.742-26.985c.014-.139.034-.277.06-.415a7.479 7.479 0 0 0-7.351-8.854h-5.852a5 5 0 0 1-4.974-5.507l2.247-22.037c.014-.139.034-.276.059-.413a12.725 12.725 0 0 0-12.51-15.067H190.9a5 5 0 0 1 0-10h26.242a22.726 22.726 0 0 1 22.379 26.689l-1.665 16.335h.316a17.478 17.478 0 0 1 17.22 20.471l-3.179 31.289a5 5 0 0 1-4.979 4.494z"
                        fill="#d29440"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                      <path
                        d="M232.315 131.667H202.9a5 5 0 0 1 0-10h29.414a5 5 0 0 1 0 10zM213.938 191.59a18.67 18.67 0 1 1 18.669-18.669 18.691 18.691 0 0 1-18.669 18.669zm0-27.339a8.67 8.67 0 1 0 8.669 8.67 8.68 8.68 0 0 0-8.669-8.67zM98.543 191.59a18.67 18.67 0 1 1 18.67-18.669 18.691 18.691 0 0 1-18.67 18.669zm0-27.339a8.67 8.67 0 1 0 8.67 8.67 8.68 8.68 0 0 0-8.67-8.67zM101.605 86.274H36.357a5 5 0 0 1 0-10h65.248a5 5 0 1 1 0 10zM68.981 119.33H19.232a5 5 0 0 1 0-10h49.749a5 5 0 0 1 0 10zM41.244 152.386H5.351a5 5 0 0 1 0-10h35.893a5 5 0 0 1 0 10z"
                        fill="#d29440"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                    </g>
                  </svg>
                </li>
                <li>
                  <p>Доставка по всей Украине</p>
                </li>
              </ul>
              <div class="clear"></div>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    class=""
                  >
                    <g>
                      <ellipse
                        cx="187.06"
                        cy="360.52"
                        rx="40.45"
                        ry="35.15"
                        transform="rotate(-42.99 187.046 360.518)"
                        fill="#d29440"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></ellipse>
                      <ellipse
                        cx="403.28"
                        cy="360.52"
                        rx="40.45"
                        ry="35.15"
                        transform="rotate(-42.99 403.285 360.528)"
                        fill="#d29440"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></ellipse>
                      <rect
                        width="34.15"
                        height="34.15"
                        x="5.41"
                        y="182.71"
                        rx="17.08"
                        fill="#d29440"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></rect>
                      <path
                        d="M346.48 356.94c6.07-30 34.41-53.84 64.87-53.84 29.33 0 50.47 22.11 49.89 50.54 31.72.83 40.55-40.94 40.55-40.94 2.67-11.68 6.66-34.45 10-56.8a37.76 37.76 0 0 0-2.43-20.42A350.18 350.18 0 0 0 479.42 180c-11-16.41-29.45-26.13-50.51-26.48-12.56-.2-24.89-.32-34.2-.32l-.08-.08c-1.2-20.08-15.84-35.46-36.39-37.3-13.37-1.19-66.33-2.06-91.75-2.06-10.1 0-24.59.14-39.25.38v-.06H50.86a17.07 17.07 0 0 0-17.08 17.08v.08a17 17 0 0 0 17 17h35.53a17 17 0 0 1 15.75 16.94v.09A17.08 17.08 0 0 1 85 182.4H66.78a17.07 17.07 0 0 0-17.07 17.07 17.07 17.07 0 0 0 17.07 17.08H85a17.08 17.08 0 0 1 17.08 17.08A17.08 17.08 0 0 1 85 250.71H16.84A17.08 17.08 0 0 0-.24 267.78a17.08 17.08 0 0 0 17.08 17.08H85a17.08 17.08 0 0 1 17.08 17.08A17.08 17.08 0 0 1 85 319H63.92a17.07 17.07 0 0 0-17.07 17.07 17.08 17.08 0 0 0 17.07 17.08l67.26-.05 5.59-13.93c11.45-21.12 34.23-36.08 58.35-36.08 30.47 0 52.11 23.86 49.73 53.88h101.62m-169.4-166.62h-22.92a.1.1 0 0 0-.09.08l-2.11 15a.08.08 0 0 0 .08.1h17.06a5.63 5.63 0 0 1 5.7 6.63 7.89 7.89 0 0 1-7.56 6.63h-17.08a.09.09 0 0 0-.09.07L147 240.65a7.89 7.89 0 0 1-7.56 6.63 5.62 5.62 0 0 1-5.69-6.63l7.94-56.52a8.36 8.36 0 0 1 8-7h29.23a5.62 5.62 0 0 1 5.69 6.63 7.87 7.87 0 0 1-7.54 6.59Zm61.26-8.72a15.55 15.55 0 0 1 4.8 8 27.57 27.57 0 0 1 .4 10.7 29.23 29.23 0 0 1-6.53 15.05 21 21 0 0 1-8.07 5.87.08.08 0 0 0 0 .11l5.68 16.39c1.53 4.4-2.4 9.53-7.29 9.53H227a5.59 5.59 0 0 1-5.44-3.74l-6.87-20a.11.11 0 0 0-.09-.05H200a.1.1 0 0 0-.09.07l-2.4 17.08a7.89 7.89 0 0 1-7.56 6.63 5.62 5.62 0 0 1-5.69-6.63l7.94-56.52a8.36 8.36 0 0 1 8-7h22.6s9.92-.31 15.53 4.51Zm62.2 1.66a7.36 7.36 0 0 1-7.06 6.19h-26.29a.1.1 0 0 0-.09.07L265 204.39a.08.08 0 0 0 .08.1h20.42a5.25 5.25 0 0 1 5.32 6.19 7.36 7.36 0 0 1-7.06 6.19h-20.43a.1.1 0 0 0-.09.07l-2.51 17.86a.1.1 0 0 0 .09.1h26.27a5.25 5.25 0 0 1 5.32 6.19 7.36 7.36 0 0 1-7.06 6.19h-32.6a6 6 0 0 1-6-7l7.89-56.12a8.36 8.36 0 0 1 8-7h32.59a5.25 5.25 0 0 1 5.3 6.13Zm54.61 0a7.36 7.36 0 0 1-7.06 6.19h-26.29a.1.1 0 0 0-.09.07l-2.08 14.84a.08.08 0 0 0 .08.1h20.42a5.25 5.25 0 0 1 5.32 6.19 7.36 7.36 0 0 1-7.06 6.19h-20.44a.1.1 0 0 0-.09.07l-2.51 17.86a.1.1 0 0 0 .09.1h26.27a5.25 5.25 0 0 1 5.32 6.19 7.36 7.36 0 0 1-7.06 6.19h-32.6a6 6 0 0 1-6-7l7.89-56.12a8.36 8.36 0 0 1 8-7h32.59a5.25 5.25 0 0 1 5.3 6.13Zm38-6.41c8.93 0 20.49.12 32.09.31 14.06.23 26.36 6.69 33.74 17.71a322.39 322.39 0 0 1 21.21 37.1c3.3 6.72-2.77 15.47-10.72 15.47h-85.25Z"
                        fill="#d29440"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                      <path
                        d="M217.45 211.12h-15.8l3-21.64h15.79s11.59-.75 9.69 10.82c.05 0-1.28 10.82-12.68 10.82Z"
                        fill="#d29440"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                    </g>
                  </svg>
                </li>
                <li>
                  <p>Бесплатная доставка</p>
                </li>
              </ul>
            </div>
            <div class="clear"></div>
            <button type="button" class="about-product__btn">ОПЛАТА</button>
            <div class="about-product__cardion_content about-product_payment">
              <p>
                Оплата при получении товара.Apple Pay, Google Pay, Оплата картой
                Visa, Оплата картой Mastercard
              </p>
            </div>
            <button type="button" class="about-product__btn">ГАРАНТИЯ</button>
            <div class="about-product__cardion_content about-product_payment">
              <p>
                Товар можно вернуть в течение 14 дней с момента покупки, если
                товар не был в употреблении и не имеет следов использования,
                товар полностью укомплектован и не нарушена целостность
                упаковки.
              </p>
            </div>
          </div>
        </div>
        <div class="about-product__cell">
          <div class="about-product__tabs">
            <div class="cell">
              <button
                type="button"
                class="about-product__tabs_nav active"
                data-tab="#tab1"
              >
                ОПИСАНИЕ
              </button>
            </div>
            <div class="cell">
              <button type="button" class="about-product__tabs_nav" data-tab="#tab2">
                ХАРАКТЕРИСТИКИ
              </button>
            </div>
            <div class="cell">
              <button type="button" class="about-product__tabs_nav" data-tab="#tab3">
                ОТЗЫВЫ
              </button>
            </div>
          </div>
          <div id="tab1" class="about-product__tabs_content about-product__description_content active">
            <h2>Детали</h2>
            <!-- Slider main container -->
            <div class="swiper datails_swiper">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 474.23 474.23"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    class=""
                  >
                    <g>
                      <path
                        d="M413.92 32.577H60.309C27.051 32.577 0 59.627 0 92.884v236.611c0 33.259 27.051 60.31 60.309 60.31h188.755v-47.911H80.771V80.487H413.92c6.838 0 12.399 5.559 12.399 12.397v4.204h18.067c10.879 0 20.953 3.072 29.844 8.031V92.884c0-33.257-27.052-60.307-60.31-60.307zM41.361 233.886c-12.548 0-22.708-10.168-22.708-22.692 0-12.538 10.16-22.706 22.708-22.706 12.532 0 22.7 10.168 22.7 22.706 0 12.524-10.168 22.692-22.7 22.692z"
                        style=""
                        fill="#000000"
                        data-original="#020202"
                        opacity="1"
                        class=""
                      ></path>
                      <path
                        d="M444.386 129.028H310.81c-16.432 0-29.805 13.374-29.805 29.803V411.85c0 16.43 13.374 29.803 29.805 29.803h133.577c16.43 0 29.804-13.374 29.804-29.803V158.831c-.001-16.43-13.375-29.803-29.805-29.803zm-131.441 31.94H442.25v223.41H312.945v-223.41zm50.103 250.157c0-8.04 6.511-14.552 14.534-14.552 8.055 0 14.574 6.512 14.574 14.552 0 8.031-6.519 14.558-14.574 14.558-8.023 0-14.534-6.527-14.534-14.558z"
                        style=""
                        fill="#000000"
                        data-original="#020202"
                        opacity="1"
                        class=""
                      ></path>
                    </g>
                  </svg>
                  <p class="title">Тип экрана</p>
                  <p class="subtitle">ЖК-дисплей</p>
                </div>
                <div class="swiper-slide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    class=""
                  >
                    <g>
                      <path
                        d="M256 184.118c-39.626 0-71.859 32.233-71.859 71.855s32.233 71.855 71.859 71.855 71.859-32.233 71.859-71.855-32.233-71.855-71.859-71.855zm0 127.708c-30.796 0-55.856-25.057-55.856-55.853S225.204 200.12 256 200.12s55.856 25.057 55.856 55.853-25.06 55.853-55.856 55.853z"
                        fill="#000000"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                      <path
                        d="M368.244 297.881c6.531-17.638 23.275-17.254 24.076-17.559a8 8 0 0 0 7.072-7.947v-32.804a8 8 0 0 0-7.072-7.947c-.941-.358-17.498.212-24.029-17.441-1.047-2.961-2.332-5.788-3.243-7.881-7.955-17.324 4.084-28.531 4.438-29.33a8.002 8.002 0 0 0-.445-10.835l-23.208-23.204a8 8 0 0 0-10.854-.43c-.8.355-11.982 12.376-29.459 4.353-2.487-1.082-5.034-2.214-7.611-3.13-17.629-6.522-17.254-23.268-17.559-24.068a8 8 0 0 0-7.947-7.076h-32.804a7.999 7.999 0 0 0-7.947 7.076c-.305.802.098 17.534-17.449 24.029-2.696.954-5.212 2.075-7.775 3.227-17.471 7.977-28.604-4.057-29.405-4.411a8.003 8.003 0 0 0-10.854.43l-23.208 23.204a8 8 0 0 0-.445 10.835c.355.8 12.402 11.996 4.36 29.491-1.079 2.487-2.21 5.02-3.118 7.603-6.531 17.638-23.275 17.254-24.076 17.559a8 8 0 0 0-7.072 7.947v32.804a8 8 0 0 0 7.072 7.947c.802.305 17.535-.113 24.029 17.441.923 2.618 2.016 5.071 3.235 7.787 7.971 17.473-4.077 28.624-4.431 29.424a8.002 8.002 0 0 0 .445 10.835l23.208 23.204c2.946 2.946 7.658 3.134 10.854.43.8-.354 11.954-12.368 29.459-4.353 2.487 1.082 5.034 2.214 7.611 3.13 17.629 6.522 17.254 23.268 17.559 24.068a8 8 0 0 0 7.947 7.076H272.4a7.999 7.999 0 0 0 7.947-7.076c.305-.802-.098-17.534 17.449-24.029 2.692-.956 5.23-2.084 7.877-3.235 17.314-7.971 28.502 4.065 29.303 4.419 3.188 2.707 7.908 2.52 10.854-.43l23.208-23.204a8 8 0 0 0 .445-10.835c-.355-.801-12.445-11.853-4.306-29.694 1.098-2.446 2.191-4.9 3.067-7.4zm-15.05-5.439c-.774 2.191-1.704 4.244-2.688 6.459-6.181 13.522-5.243 28.576 2.298 40.517l-13.362 13.355c-11.932-7.521-26.999-8.475-40.298-2.356-2.417 1.059-4.593 2.018-6.798 2.794-13.925 5.161-23.872 16.511-26.873 30.151h-18.958c-3.056-13.718-12.988-25.013-26.967-30.191-2.09-.734-4.212-1.67-6.533-2.689-13.417-6.157-28.429-5.236-40.447 2.302l-13.37-13.37c7.509-11.929 8.455-27.03 2.227-40.677-.914-2.051-1.844-4.102-2.665-6.411-5.158-13.937-16.511-23.884-30.147-26.881v-18.958c13.714-3.052 25.013-12.988 30.194-26.983.704-1.999 1.533-3.889 2.68-6.521 6.173-13.421 5.236-28.444-2.298-40.443l13.37-13.366c11.925 7.505 27.006 8.463 40.47 2.317 2.118-.954 4.244-1.911 6.626-2.754 13.925-5.161 23.872-16.511 26.873-30.151h18.958c3.056 13.718 12.988 25.013 26.967 30.191 2.09.734 4.212 1.67 6.533 2.689 13.424 6.166 28.436 5.243 40.447-2.302l13.37 13.366c-7.525 11.94-8.486 26.986-2.367 40.294 1.053 2.407 1.98 4.473 2.805 6.798 5.142 13.889 16.433 23.818 30.147 26.865v18.973c-13.714 3.051-25.013 12.987-30.194 26.982zM241.568 33.694l6.431-6.429v41.62c0 4.419 3.579 8.001 8.001 8.001a8 8 0 0 0 8.001-8.001V27.204l6.431 6.431a8 8 0 0 0 11.315 0 8 8 0 0 0 0-11.315L261.689 2.262c-2.615-2.615-7.994-3.43-11.418.103l-20.02 20.015a8.002 8.002 0 1 0 11.317 11.314zM270.433 478.253l-6.431 6.429v-41.62c0-4.419-3.579-8.001-8.001-8.001s-8.001 3.582-8.001 8v41.681l-6.431-6.431a8 8 0 0 0-11.315 0 8 8 0 0 0 0 11.315l20.059 20.059c2.813 2.813 8.039 3.383 11.418-.103l20.019-20.014c3.125-3.121 3.125-8.19 0-11.315a8.002 8.002 0 0 0-11.317 0zM393.944 129.341l29.475-29.475v9.096c0 4.419 3.579 8.001 8.001 8.001a8 8 0 0 0 8.001-8.001V80.595c0-4.387-3.624-8.07-8.146-8.001h-28.308a8 8 0 0 0-8.001 8.001 7.999 7.999 0 0 0 8.001 8.001h9.088l-29.428 29.428a8 8 0 0 0 0 11.315 8 8 0 0 0 11.317.002zM118.056 382.607l-29.475 29.475v-9.096c0-4.419-3.579-8.001-8.001-8.001a8 8 0 0 0-8.001 8.001v28.365c0 4.204 3.428 8.025 8.025 8.025.822 0 29.25-.023 28.429-.024a8 8 0 0 0 8.001-8.001 8 8 0 0 0-8.001-8.001h-9.088l29.428-29.428a8 8 0 0 0 0-11.315 8 8 0 0 0-11.317 0zM509.611 250.246l-20.02-20.016a8 8 0 0 0-11.315 0 8 8 0 0 0 0 11.315l6.429 6.427h-41.617a8 8 0 0 0-8.001 8.001 7.999 7.999 0 0 0 8.001 8.001h41.681l-6.431 6.431a8 8 0 0 0 0 11.315 8 8 0 0 0 11.315 0l20.059-20.059c3.167-3.166 3.111-8.301-.101-11.415zM76.914 255.974a7.999 7.999 0 0 0-8.001-8.001H27.231l6.431-6.431c3.125-3.125 3.125-8.19 0-11.315a8 8 0 0 0-11.315 0L2.288 250.286c-3.165 3.165-3.114 8.299.102 11.417l20.02 20.016a8 8 0 0 0 11.315 0 8 8 0 0 0 0-11.315l-6.429-6.428h41.617a8.001 8.001 0 0 0 8.001-8.002zM439.376 431.255v-28.311c0-4.419-3.579-8.001-8.001-8.001a8 8 0 0 0-8.001 8.001v9.091l-29.428-29.428a8 8 0 0 0-11.315 0 8 8 0 0 0 0 11.315l29.473 29.473-9.093-.002c-4.415 0-8.001 3.583-8.001 8.001a8 8 0 0 0 8.001 8.001l28.365.004c4.499.001 8.068-3.696 8-8.144zM72.624 80.693v28.311c0 4.419 3.579 8.001 8.001 8.001a8 8 0 0 0 8.001-8.001v-9.091l29.428 29.428a8 8 0 0 0 11.315 0 8 8 0 0 0 0-11.315L99.897 88.553l9.093.002c4.415 0 8.001-3.583 8.001-8.001a8 8 0 0 0-8.001-8.001l-28.365-.004c-4.5-.002-8.069 3.695-8.001 8.144z"
                        fill="#000000"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                    </g>
                  </svg>
                  <p class="title">Особые возможности</p>
                  <p class="subtitle">Беспроводная зарядка</p>
                </div>
                <div class="swiper-slide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    class=""
                  >
                    <g>
                      <path
                        d="M437.333 64H74.666a53.394 53.394 0 0 0-53.333 53.333v277.334A53.394 53.394 0 0 0 74.666 448h362.667a53.394 53.394 0 0 0 53.333-53.333V117.333A53.394 53.394 0 0 0 437.333 64Zm32 330.667a32.037 32.037 0 0 1-32 32H74.666a32.036 32.036 0 0 1-32-32V117.333a32.036 32.036 0 0 1 32-32h362.667a32.036 32.036 0 0 1 32 32Z"
                        fill="#000000"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                      <path
                        d="M128 106.667H85.333A21.357 21.357 0 0 0 64 128v42.667a10.667 10.667 0 0 0 21.333 0V128H128a10.667 10.667 0 1 0 0-21.333ZM437.333 330.667a10.667 10.667 0 0 0-10.667 10.667V384H384a10.667 10.667 0 1 0 0 21.333h42.667A21.357 21.357 0 0 0 448 384v-42.667a10.667 10.667 0 0 0-10.667-10.666ZM426.666 106.667H384A10.667 10.667 0 1 0 384 128h42.667v42.667a10.667 10.667 0 0 0 21.333 0V128a21.357 21.357 0 0 0-21.334-21.333ZM128 384H85.333v-42.667a10.667 10.667 0 0 0-21.333 0V384a21.357 21.357 0 0 0 21.333 21.333H128A10.667 10.667 0 1 0 128 384ZM234.666 181.333A10.667 10.667 0 0 0 224 192v53.333h-53.334V192a10.667 10.667 0 1 0-21.333 0v128a10.667 10.667 0 1 0 21.333 0v-53.333H224V320a10.667 10.667 0 1 0 21.333 0V192a10.667 10.667 0 0 0-10.667-10.667ZM329.535 190.2A116.843 116.843 0 0 0 288 181.333 10.667 10.667 0 0 0 277.333 192v128A10.667 10.667 0 0 0 288 330.667a116.86 116.86 0 0 0 41.535-8.863c28.653-12.28 43.8-35.035 43.8-65.8s-15.147-53.529-43.8-65.804Zm-30.869 118.231V203.57C316.93 206.188 352 216.373 352 256s-35.084 49.816-53.334 52.431Z"
                        fill="#000000"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                    </g>
                  </svg>
                  <p class="title">Разрешение экрана</p>
                  <p class="subtitle">${screen}</p>
                </div>
                <div class="swiper-slide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 265.523 265.523"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    class=""
                  >
                    <g>
                      <path
                        d="M200.865 212.808H64.882c-12.407 0-22.5-10.093-22.5-22.5V74.917c0-12.407 10.093-22.5 22.5-22.5h135.982c12.407 0 22.5 10.093 22.5 22.5v115.392c.001 12.406-10.092 22.499-22.499 22.499zM64.882 67.417c-4.135 0-7.5 3.364-7.5 7.5v115.392c0 4.136 3.365 7.5 7.5 7.5h135.982c4.135 0 7.5-3.364 7.5-7.5V74.917c0-4.136-3.365-7.5-7.5-7.5H64.882z"
                        style=""
                        fill="#000000"
                        data-original="#000002"
                        opacity="1"
                        class=""
                      ></path>
                      <path
                        d="M76.856 66.571a7.5 7.5 0 0 1-7.5-7.5V16.912a7.5 7.5 0 0 1 15 0v42.159a7.5 7.5 0 0 1-7.5 7.5zM114.201 66.571a7.5 7.5 0 0 1-7.5-7.5V16.912a7.5 7.5 0 0 1 15 0v42.159a7.5 7.5 0 0 1-7.5 7.5zM151.547 66.571a7.5 7.5 0 0 1-7.5-7.5V16.912a7.5 7.5 0 0 1 15 0v42.159a7.5 7.5 0 0 1-7.5 7.5zM188.891 66.571a7.5 7.5 0 0 1-7.5-7.5V16.912a7.5 7.5 0 0 1 15 0v42.159a7.5 7.5 0 0 1-7.5 7.5zM258.023 84.094h-42.158a7.5 7.5 0 0 1 0-15h42.158a7.5 7.5 0 0 1 0 15zM258.023 121.44h-42.158a7.5 7.5 0 0 1 0-15h42.158a7.5 7.5 0 0 1 0 15zM258.023 158.785h-42.158a7.5 7.5 0 0 1 0-15h42.158a7.5 7.5 0 0 1 0 15zM258.023 196.129h-42.158a7.5 7.5 0 0 1 0-15h42.158a7.5 7.5 0 0 1 0 15zM49.659 84.094H7.5a7.5 7.5 0 0 1 0-15h42.159a7.5 7.5 0 0 1 0 15zM49.659 121.44H7.5a7.5 7.5 0 0 1 0-15h42.159a7.5 7.5 0 0 1 0 15zM49.659 158.785H7.5a7.5 7.5 0 0 1 0-15h42.159a7.5 7.5 0 0 1 0 15zM49.659 196.129H7.5a7.5 7.5 0 0 1 0-15h42.159a7.5 7.5 0 0 1 0 15zM76.856 256.111a7.5 7.5 0 0 1-7.5-7.5v-42.159a7.5 7.5 0 0 1 15 0v42.159a7.5 7.5 0 0 1-7.5 7.5zM114.201 256.111a7.5 7.5 0 0 1-7.5-7.5v-42.159a7.5 7.5 0 0 1 15 0v42.159a7.5 7.5 0 0 1-7.5 7.5zM151.547 256.111a7.5 7.5 0 0 1-7.5-7.5v-42.159a7.5 7.5 0 0 1 15 0v42.159a7.5 7.5 0 0 1-7.5 7.5zM188.891 256.111a7.5 7.5 0 0 1-7.5-7.5v-42.159a7.5 7.5 0 0 1 15 0v42.159a7.5 7.5 0 0 1-7.5 7.5z"
                        style=""
                        fill="#000000"
                        data-original="#000002"
                        opacity="1"
                        class=""
                      ></path>
                    </g>
                  </svg>
                  <p class="title">RAM</p>
                  <p class="subtitle">${ram}</p>
                </div>
                <div class="swiper-slide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    class=""
                  >
                    <g>
                      <path
                        d="M18.56 12.65c.28-.28.44-.66.44-1.06v-.97c0-.57-.32-1.09-.83-1.34L17 8.69V5c0-.83-.67-1.5-1.5-1.5h-9C5.67 3.5 5 4.17 5 5v14c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3.59c0-.39-.16-.78-.44-1.06l-.56-.56v-.59l.56-.56zM13.5 6c0-.28.22-.5.5-.5s.5.22.5.5v2c0 .28-.22.5-.5.5s-.5-.22-.5-.5zm-2 0c0-.28.22-.5.5-.5s.5.22.5.5v2c0 .28-.22.5-.5.5s-.5-.22-.5-.5zm-2 0c0-.28.22-.5.5-.5s.5.22.5.5v2c0 .28-.22.5-.5.5s-.5-.22-.5-.5zm-2 0c0-.28.22-.5.5-.5s.5.22.5.5v2c0 .28-.22.5-.5.5s-.5-.22-.5-.5zm7 12.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5z"
                        fill="#000000"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                    </g>
                  </svg>
                  <p class="title">ROM</p>
                  <p class="subtitle">${rom}</p>
                </div>
              </div>
              <!-- If we need pagination -->

              <!-- If we need navigation buttons -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>

              <!-- If we need scrollbar -->
            </div>

            <div class="cell">
              <p class="text">
                10.1" Планшет PC 2-в-1 на Android 15 — это универсальное
                устройство с 10.1-дюймовым экраном, которое трансформируется из
                планшета в ноутбук благодаря съемной клавиатуре, работает под
                управлением новейшей ОС Android 15, оснащено мощным процессором,
                большим объемом памяти (часто с расширением) и поддерживает
                работу со стилусом, что делает его идеальным для учебы, работы и
                развлечений, предлагая портативность планшета и функциональность
                ПК.
              </p>
            </div>
          </div>
          <div id="tab2" class="about-product__tabs_content about-product___characteristics">
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Графический сопроцессор:</dt>
                <dd>${text1}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Операционная система:</dt>
                <dd>${text2}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Производитель графического процессора:</dt>
                <dd>${text3}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Сотовые технологии:</dt>
                <dd>${text4}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Соотношение сторон:</dt>
                <dd>${text5}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Производитель ЦБ:</dt>
                <dd>${text6}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Стандарт беспроводной связи:</dt>
                <dd>${text7}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Режим питания:</dt>
                <dd>${text8}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Рабочее напряжение:</dt>
                <dd>${text9}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Бренд:</dt>
                <dd>${text10}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>беспроводная собственность:</dt>
                <dd>${text11}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Свойства батареи:</dt>
                <dd>${text12}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Аккумулятор:</dt>
                <dd>${text13}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>ROM:</dt>
                <dd>${rom}</dd>
              </dl>
            </div>
             <div class="about-product___characteristics_item">
              <dl>
                <dt>RAM:</dt>
                <dd>${ram}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Основной материал:</dt>
                <dd>${text14}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Номер продукта:</dt>
                <dd>${text15}</dd>
              </dl>
            </div>
            
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Размер экрана:</dt>
                <dd>${text16}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Порт зарядки продукта:</dt>
                <dd>${text17}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Максимальная номинальная мощность:</dt>
                <dd>${text18}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Минимальная номинальная мощность:</dt>
                <dd>${text19}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Идентификатор товара:</dt>
                <dd>${text20}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Комлектация:</dt>
                <dd>
                  клавиатура <br />
                  мышка <br />
                  чехол<br />
                  стилус <br />кабель type-c <br />
                  защитная пленка <br />
                  Гарантийны талон
                </dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Гарантия:</dt>
                <dd>${garanti}</dd>
              </dl>
            </div>
            <div class="about-product___characteristics_item">
              <dl>
                <dt>Происхождение::</dt>
                <dd>${text21}</dd>
              </dl>
            </div>
          </div>
          <div id="tab3" class="about-product__tabs_content about-product___reviews">
            <button type="button" class="about-product__delete_review">УДАЛИТЬ ОТЗЫВ</button>
              <div class="cell langht">
                <div class=" about-product_review">
                  <p class="about-product_review__text"><span class="about-product__tabs_content_name">Денис </span><span class="about-product__tabs_content_first_name">Савельев</span></p>
                  <div class="about-product___reviews_data">
                    <div class="cell">
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
                    <div class="cell">
                      <p class="data">Написан 12 дек, 2025 16:38</p>
                    </div>
                  </div>
                  <p class="about-product__comment">Заполнив эти данные, вам не придется каждый раз вводить информацию о вас, о адресе доставке — все это можно будет указать по нажатию одной кнопки.</p>
                </div>
                <div class=" about-product_review">
                  <p class="about-product_review__text"><span class="about-product__tabs_content_name">Денис </span><span class="about-product__tabs_content_first_name">Савельев</span></p>
                  <div class="about-product___reviews_data">
                    <div class="cell">
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
                    <div class="cell">
                      <p class="data">Написан 12 дек, 2025 16:38</p>
                    </div>
                  </div>
                  <p class="about-product__comment">Заполнив эти данные, вам не придется каждый раз вводить информацию о вас, о адресе доставке — все это можно будет указать по нажатию одной кнопки.</p>
                </div>
                <div class=" about-product_review">
                  <p class="about-product_review__text"><span class="about-product__tabs_content_name">Денис </span><span class="about-product__tabs_content_first_name">Савельев</span></p>
                  <div class="about-product___reviews_data">
                    <div class="cell">
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
                    <div class="cell">
                      <p class="data">Написан 12 дек, 2025 16:38</p>
                    </div>
                  </div>
                  <p class="about-product__comment">Заполнив эти данные, вам не придется каждый раз вводить информацию о вас, о адресе доставке — все это можно будет указать по нажатию одной кнопки.</p>
                </div>
                <div class=" about-product_review">
                  <p class="about-product_review__text"><span class="about-product__tabs_content_name">Денис </span><span class="about-product__tabs_content_first_name">Савельев</span></p>
                  <div class="about-product___reviews_data">
                    <div class="cell">
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
                    <div class="cell">
                      <p class="data">Написан 12 дек, 2025 16:38</p>
                    </div>
                  </div>
                  <p class="about-product__comment">Заполнив эти данные, вам не придется каждый раз вводить информацию о вас, о адресе доставке — все это можно будет указать по нажатию одной кнопки.</p>
                </div>
                <div class=" about-product_review">
                  <p class="about-product_review__text"><span class="about-product__tabs_content_name">Денис </span><span class="about-product__tabs_content_first_name">Савельев</span></p>
                  <div class="about-product___reviews_data">
                    <div class="cell">
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
                    <div class="cell">
                      <p class="data">Написан 12 дек, 2025 16:38</p>
                    </div>
                  </div>
                  <p class="about-product__comment">Заполнив эти данные, вам не придется каждый раз вводить информацию о вас, о адресе доставке — все это можно будет указать по нажатию одной кнопки.</p>
                </div>
              </div>
              <div class="cell">
                <div class="about-product__new_review">
                  <p class="about-product__text"><span class="about-product__grade">5.0</span><sub class="">/5</sub></p>
                  <div class="about-product__stars">
                    <div class="cell">
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
                    <div class="cell">
                      <p><span class="about-product__new_review_counter">5</span> отзывов</p>
                    </div>
                  </div>
                  <div class="about-product__new_review_grade">
                    <div class="cell">
                      <p>5</p>
                    </div>
                    <div class="cell">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5716 20L12.0004 15.9776L6.42914 20L8.56825 13.5039L3 9.50711H9.87469L12.0004 3L14.1261 9.50711H21L15.4325 13.5039L17.5716 20Z" fill="#D29440"/>
                      </svg>

                    </div>
                    <div class="cell">
                      <div class="about-product__progress_bar5"></div>
                    </div>
                    <div class="cell">
                      <p><sapn class="counter">4</sapn> отзыва</p>
                    </div>
                  </div>
                  <div class="about-product__new_review_grade">
                    <div class="cell">
                      <p>4</p>
                    </div>
                    <div class="cell">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5716 20L12.0004 15.9776L6.42914 20L8.56825 13.5039L3 9.50711H9.87469L12.0004 3L14.1261 9.50711H21L15.4325 13.5039L17.5716 20Z" fill="#D29440"/>
                      </svg>

                    </div>
                    <div class="cell">
                      <div class="about-product__progress_bar4"></div>
                    </div>
                    <div class="cell">
                      <p><sapn class="counter">1</sapn> отзыв</p>
                    </div>
                  </div>
                  <div class="about-product__new_review_grade">
                    <div class="cell">
                      <p>3</p>
                    </div>
                    <div class="cell">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5716 20L12.0004 15.9776L6.42914 20L8.56825 13.5039L3 9.50711H9.87469L12.0004 3L14.1261 9.50711H21L15.4325 13.5039L17.5716 20Z" fill="#D29440"/>
                      </svg>

                    </div>
                    <div class="cell">
                      <div class="about-product__progress_bar3"></div>
                    </div>
                    <div class="cell">
                      <p><sapn class="counter">0</sapn> отзывов</p>
                    </div>
                  </div>
                  <div class="about-product__new_review_grade">
                    <div class="cell">
                      <p>2</p>
                    </div>
                    <div class="cell">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5716 20L12.0004 15.9776L6.42914 20L8.56825 13.5039L3 9.50711H9.87469L12.0004 3L14.1261 9.50711H21L15.4325 13.5039L17.5716 20Z" fill="#D29440"/>
                      </svg>

                    </div>
                    <div class="cell">
                      <div class="about-product__progress_bar2"></div>
                    </div>
                    <div class="cell">
                      <p><sapn class="counter">0</sapn> отзывов</p>
                    </div>
                  </div>
                  <div class="about-product__new_review_grade">
                    <div class="cell">
                      <p>1</p>
                    </div>
                    <div class="cell">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5716 20L12.0004 15.9776L6.42914 20L8.56825 13.5039L3 9.50711H9.87469L12.0004 3L14.1261 9.50711H21L15.4325 13.5039L17.5716 20Z" fill="#D29440"/>
                      </svg>

                    </div>
                    <div class="cell">
                      <div class="about-product__progress_bar1"></div>
                    </div>
                    <div class="cell">
                      <p><sapn class="counter">0</sapn> отзывов</p>
                    </div>
                  </div>
                  <button type="button" class="about-product__leave feedback">ОСТАВИТЬ ОТЗЫВ</button>
                </div>
              </div>
          </div>
        </div>
              
  `
 

  wrapper.insertAdjacentHTML("beforeend", productItem);
  chekingActiveButtons(basket);
  
   let swiperThumbs = new Swiper(".SwiperThumbs", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4, // Количество отображаемых миниатюр
    freeMode: true,
    watchSlidesProgress: true,
  });

let swiperMain = new Swiper(".swiperMain", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
      swiper: swiperThumbs, // Связываем основной слайдер с миниатюрами
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
    const swiper = new Swiper(".datails_swiper", {
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
  });

  changeAcardion();
  
  tabsProduct();

  // swiperMain.update();
}

function getParameterFromURL(parameter) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(parameter)
}


function handleCardClick(event) {
  
  const targetButton = event.target.closest(".about-product__add_besket");
   const modalAddBasket = document.querySelector(".modal_add_besket ");
  if(!targetButton) return;

  const card = targetButton.closest(".about-product__besket");
  const id = card.dataset.productId;
  
  let basket = getBasketLocalStorage();

  if(basket.includes(id)) {
    return
  } 

   modalAddBasket.classList.add("modal_animate");
    
   
  basket.push(id);
   
  setBasketLocalStorage(basket)
  
  chekingActiveButtons(basket);
  chekingActiveAboutButtons(basket)
  

}



function chekingActiveButtons(besket) {
  const basketCount = document.querySelector(".header__besket_counter ")
  
  const buttons = document.querySelector(".about-product__add_besket");
  console.log(buttons);
  
 
 
    const card = buttons.closest(".about-product__besket");
    const id = card.dataset.productId;
    console.log(id);
    basketCount.classList.add("header__besket_counter_show")
    const isInBasket = besket.includes(id);
   
      
   
    
    // btn.disabled = isInBasket;
      if(isInBasket) {
        buttons.textContent = "ТОВАР В КОРЗИНЕ"
      }

      buttons.addEventListener("click", function(event) {
        if(event.target.textContent == "ТОВАР В КОРЗИНЕ") {
        window.location.href = "../besket.html"
        
      }
      })

      

      // else {
      //    buttons.textContent = "Добавить в корзину"
      // }
    //   btn.addEventListener("click", function(event) {
    
    //  if(event.target.classList.contains("active")) {
    //   window.location.href = "../besket.html"
     
    //  }
      
    // })

   
    
 

  
 
}

/////

function handlefavoritesCardClick(event) {
  //  const modalAddFavorites = document.querySelector(".header__favorites_counter ");
   const fovorites = document.querySelector(".favorites_icon");
  const targetButton = event.target.closest(".about-product__favorites");
  const fovoratiesCounter = document.querySelector(".header__favorites_counter");
  const modalFavorites = document.querySelector(".modal_add_faborites ");
  if(!targetButton) return;

  const card = targetButton.closest(".about-product__besket");
  const id = card.dataset.productId;
  
  let favorites = getFavoritesLocalStorage();

  if(favorites.includes(id)) {
    return
  } 

    // modalAddFavorites.classList.add("modal_animate");
    
    
    
    
    fovorites.classList.add("modal_animate");
    fovoratiesCounter.classList.add("modal_animate");
    modalFavorites.classList.add("modal_animate")
    favorites.push(id);
   
  setFavoritesLocalStorage(favorites)
  
  chekingFavoritesActiveBurrons(favorites);
  chekingFavoritesAboutActiveBurrons(favorites)
}

function chekingFavoritesActiveBurrons(favorites) {
    const buttons = document.querySelectorAll(".about-product__favorites");

 
  buttons.forEach(btn => {
    const card = btn.closest(".about-product__besket");
    const id = card.dataset.productId;
    const isInBasket = favorites.includes(id);
    // btn.disabled = isInBasket;
    btn.classList.toggle("active",isInBasket); 

    // modalEmpty.classList.add("modal_animate")

    btn.addEventListener("click", function(event) {
    
     if(event.target.classList.contains("active")) {
      window.location.href = "../favorites.html"
     
     }
      
    })
      // modalEmpty.classList.remove("modal_animate");
    //   btn.addEventListener("click", function(event) {
    
    //  if(event.target.classList.contains("active")) {
    //   window.location.href = "../besket.html"
     
    //  }
    // })

   
    
  }) 

  
      
}

function basketCount() {
  const basketCount = document.querySelector(".header__besket_counter")
  let basket = getBasketLocalStorage();

  if(!basket.length) {
    console.log(basket.length);
    basketCount.classList.remove("header__besket_counter_show");
  }
  else {
     basketCount.classList.add("header__besket_counter_show");
  }
}





function addCounterSwitchLocalStorage() {
  let btnAddBasket =  document.querySelector(".about-product__add_besket");
  let btnAddFavorites =  document.querySelector(".about-product__favorites");

  btnAddBasket.addEventListener("click", function() {
    let product = btnAddBasket.closest(".about-product__besket");
    let id = product.dataset.productId;
    let basket = getBasketLocalStorage();
    let existingItem  = basket.find(item => item.id === id);
    
    
  })

   btnAddFavorites.addEventListener("click", function() {
    let product = btnAddBasket.closest(".about-product__besket");
    let id = product.dataset.productId;
    let basket = getFavoritesLocalStorage();
    let existingItem  = basket.find(item => item.id === id);
    
    
  })
}

function shekingCounterFavorites() {
  const modalEmpty = document.querySelector(".header__favorites_counter");
  const fovoritesIcon = document.querySelector(".mobile_none");
  const counterFavorites = document.querySelector(".header__favorites_counter .counter");
  const favorites  = getFavoritesLocalStorage();
  let basket  = getBasketLocalStorage();
   const basketCount = document.querySelector(".header__besket_counter ")
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

function chekingEmptyCart() {
  const modalEmpty = document.querySelector(".modal_empty_besket");
const emptyLink = document.querySelector(".header__right_menu .empty");
const counterProducts = document.querySelector(".header__besket_counter .counter")     
// const counterFovorites = document.querySelector(".header__favorites_counter  .counter")     
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

//////

const recommend_swiper = document.querySelector(".recommend_swiper ");

recommend_swiper.addEventListener("click",handleAboutCardClick)
recommend_swiper.addEventListener("click",handlefavoritesAboutCardClick)

function handleAboutCardClick(event) {
  const basketCount = document.querySelector(".header__besket_counter")
  const modalAddBasket = document.querySelector(".modal_add_besket ");
  const targetButton = event.target.closest(".card__besket_add");
  if(!targetButton) return;
  let basket = getBasketLocalStorage();
  const card = targetButton.closest(".swiper-slide");
  const id = card.dataset.productId;
  

  if(basket.includes(id)) {
    return
  } 
    
    modalAddBasket.classList.add("modal_animate");
  basket.push(id);
   basketCount.classList.add("header__besket_counter_show");
  setBasketLocalStorage(basket)
  
  chekingActiveAboutButtons(basket);
  

}

function chekingActiveAboutButtons(besket) {
  const buttons = document.querySelectorAll(".card__besket_add");
 const modalEmpty = document.querySelector(".modal_empty_besket");
 
  buttons.forEach(btn => {
    const card = btn.closest(".swiper-slide");
    const id = card.dataset.productId;
    const isInBasket = besket.includes(id);
    // btn.disabled = isInBasket;
    btn.classList.toggle("active",isInBasket); 
      modalEmpty.classList.remove("modal_animate");
      btn.addEventListener("click", function(event) {
    
     if(event.target.classList.contains("active")) {
      window.location.href = "../besket.html"
     
     }
      
    })

   
    
  }) 

  
 
}


function handlefavoritesAboutCardClick(event) {
  //  const modalAddFavorites = document.querySelector(".header__favorites_counter ");
   const fovorites = document.querySelector(".favorites_icon");
  const targetButton = event.target.closest(".card .favorites");
  const fovoratiesCounter = document.querySelector(".header__favorites_counter");
  const modalFavorites = document.querySelector(".modal_add_faborites ");
  if(!targetButton) return;

  const card = targetButton.closest(".swiper-slide");
  const id = card.dataset.productId;
  
  let favorites = getFavoritesLocalStorage();

  if(favorites.includes(id)) {
    return
  } 

    // modalAddFavorites.classList.add("modal_animate");
    
    
    
    
    fovorites.classList.add("modal_animate");
    fovoratiesCounter.classList.add("modal_animate");
    modalFavorites.classList.add("modal_animate")
    favorites.push(id);
   
  setFavoritesLocalStorage(favorites)
  
  chekingFavoritesAboutActiveBurrons(favorites);
}

function chekingFavoritesAboutActiveBurrons(favorites) {
    const buttons = document.querySelectorAll(".card .favorites");

 
  buttons.forEach(btn => {
    const card = btn.closest(".swiper-slide");
    const id = card.dataset.productId;
    const isInBasket = favorites.includes(id);
    // btn.disabled = isInBasket;
    btn.classList.toggle("active",isInBasket); 

    // modalEmpty.classList.add("modal_animate")

    btn.addEventListener("click", function(event) {
    
     if(event.target.classList.contains("active")) {
      window.location.href = "../favorites.html"
     
     }
      
    })
      // modalEmpty.classList.remove("modal_animate");
    //   btn.addEventListener("click", function(event) {
    
    //  if(event.target.classList.contains("active")) {
    //   window.location.href = "../besket.html"
     
    //  }
    // })

   
    
  }) 

  
      
}

function checkActiveModal() {
  let favoritesCard = document.querySelectorAll(".card .favorites");
  let basketCard = document.querySelectorAll(".card__besket_add");
  let favorites = document.querySelector(".modal_add_faborites");
  let addBasket = document.querySelector(".modal_add_besket");

  favoritesCard.forEach(btn => {
    btn.addEventListener("click", function(event) {  
      favorites.classList.add("add_show_modal");
      addBasket.classList.remove("add_show_modal");
    })
  })

  basketCard.forEach(btn => {
    btn.addEventListener("click", function(event) {  
      addBasket.classList.add("add_show_modal");
      favorites.classList.remove("add_show_modal");
    })
  })
}

function checkAboutActiveModal() {
  let favoritesCard = document.querySelectorAll(".about-product__favorites");
  let basketCard = document.querySelectorAll(".about-product__add_besket");
  let favorites = document.querySelector(".modal_add_faborites");
  let addBasket = document.querySelector(".modal_add_besket");

  favoritesCard.forEach(btn => {
    btn.addEventListener("click", function(event) {  
      favorites.classList.add("add_show_modal");
      addBasket.classList.remove("add_show_modal");
    })
  })

  basketCard.forEach(btn => {
    btn.addEventListener("click", function(event) {  
      addBasket.classList.add("add_show_modal");
      favorites.classList.remove("add_show_modal");
    })
  })
}



chekingEmptyCart();

shekingCounterFavorites();
basketCount();




