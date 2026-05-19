import {
  COUNT_SHOW_CARDS_CLICK,
  ERRO_SERVER,
  NO_PRODUCTS_IN_THIS_CATEGORY,
} from "../constants/constant.js";

export let resSearch = [];
const searchForm = document.querySelector(".search");
let productsData = [];
export const debounce = (func, ms = 100) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
};

export const search = () => {
  const modalSaearch = document.querySelector(".modal_search");
  const modal__close = document.querySelector(".modal_search .modal__close ");
  const modal_search__body = document.querySelector(".modal_search__body");
  const searchInput = document.querySelector(".search_products");
  const btn_search = document.querySelector(".btn_search");
  const modalsearchproducts = document.querySelector(".modal_search_products");
const modalSearchTitle = document.querySelector(".modal_search__title");
  searchInput.addEventListener("click", function () {
    modalSaearch.classList.add("modal_animate");
    document.body.style.overflow = "hidden";
    searchInput.classList.add("searchZindex");
    btn_search.classList.add("searchZindex");
    modalsearchproducts.classList.add("modal_search_products_hide");
  });

  window.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
      modalSaearch.classList.remove("modal_animate");
       document.body.style.overflow = "visible";
    }
  });

  modal__close.addEventListener("click", function () {
    modalSaearch.classList.remove("modal_animate");
    document.body.style.overflow = "visible";
  });

  const searchProduct = document.querySelector(
    ".modal_search  .products_catalog",
  );

  const debounceSearch = debounce((event) => {
    if (event.target.value) {
      getProducts();

      renderGoods(searchFiltre(productsData, event.target.value));
    }

    if (event.target.value == "") {
      searchProduct.textContent = "";
      modal_search__body.classList.remove("modal_search__body_height");
      modalsearchproducts.classList.add("modal_search_products_hide");
      modalSearchTitle.textContent = ""
    }
  });

  searchInput.addEventListener("input", debounceSearch);
};



export default async function getProducts() {
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
  } catch (err) {
    showErrorMessage(ERRO_SERVER);
    console.log(err.message);
  }
}

function renderGoods(product) {
  const modalsearchproducts = document.querySelector(".modal_search_products");

  if (!product.length) {
    return false;
  }

  if (product.length < 2) {
    modalsearchproducts.classList.add("modal_search_products_hide");
  } else {
    modalsearchproducts.classList.remove("modal_search_products_hide");
  }

  const searchProduct = document.querySelector(
    ".modal_search  .products_catalog",
  );
  const modal_search__body = document.querySelector(".modal_search__body");
  const modalSearchTitle = document.querySelector(".modal_search__title");
  searchProduct.textContent = "";
  if (product.length) {
    modalSearchTitle.textContent = "Результат поиска"
    modal_search__body.classList.add("modal_search__body_height");
  }

  const arrCards = product.slice(0, 2);

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

function searchFiltre(goods, value) {
  return goods.filter((goodsitem) => {
    return goodsitem.name.toLowerCase().includes(value.toLowerCase()) || goodsitem.ram.toLowerCase().includes(value.toLowerCase()) || goodsitem.top.toLowerCase().includes(value.toLowerCase())
  });
}

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // const searchRes = document.querySelector(".search_res .products_catalog")
  // if(resSearch.length) {

  //   searchRes.textContent =""

  //     resSearch.forEach(card => {
  //     const { id, top, img, name, price, discount } = card;
  //     const cardItem = `
  //        <div class="products__cell" data-product-id="${id}">

  //           <div class="card">
  //             <div class="card__item">
  //               <div class="card__body">
  //                 <div class="card__cell">
  //                   <div class="${top}">
  //                     <p></p>
  //                   </div>
  //                 </div>
  //                 <div class="card__cell">
  //                   <button type="button" class="favorites"></button>
  //                 </div>
  //               </div>
  //               <div class="card__product">
  //                    <a href="./aboutProduct.html?id=${id}">
  //                 <img
  //                   src="./images/${img}"
  //                   alt="Image"
  //                 />
  //                 </a>
  //               </div>
  //             </div>
  //             <div class="card__content">
  //               <div class="card__reviews">
  //                 <div class="card__reviews_cell">
  //                   <p class="text_left">5.0</p>
  //                 </div>
  //                 <div class="card__reviews_cell">
  //                   <svg
  //                     width="180"
  //                     height="36"
  //                     viewBox="0 0 180 36"
  //                     fill="none"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                   >
  //                     <path
  //                       d="M26.3574 30L18.0006 23.9664L9.64371 30L12.8524 20.2558L4.5 14.2607H14.812L18.0006 4.5L21.1891 14.2607H31.5L23.1487 20.2558L26.3574 30Z"
  //                       fill="#D29440"
  //                     />
  //                     <path
  //                       d="M62.3574 30L54.0006 23.9664L45.6437 30L48.8524 20.2558L40.5 14.2607H50.812L54.0006 4.5L57.1891 14.2607H67.5L59.1487 20.2558L62.3574 30Z"
  //                       fill="#D29440"
  //                     />
  //                     <path
  //                       d="M98.3574 30L90.0006 23.9664L81.6437 30L84.8524 20.2558L76.5 14.2607H86.812L90.0006 4.5L93.1891 14.2607H103.5L95.1487 20.2558L98.3574 30Z"
  //                       fill="#D29440"
  //                     />
  //                     <path
  //                       d="M134.357 30L126.001 23.9664L117.644 30L120.852 20.2558L112.5 14.2607H122.812L126.001 4.5L129.189 14.2607H139.5L131.149 20.2558L134.357 30Z"
  //                       fill="#D29440"
  //                     />
  //                     <path
  //                       d="M170.357 30L162.001 23.9664L153.644 30L156.852 20.2558L148.5 14.2607H158.812L162.001 4.5L165.189 14.2607H175.5L167.149 20.2558L170.357 30Z"
  //                       fill="#D29440"
  //                     />
  //                   </svg>
  //                 </div>
  //                 <div class="card__reviews_cell">
  //                   <p class="text_right">
  //                     <span class="card__count">3</span> отызва
  //                   </p>
  //                 </div>
  //               </div>
  //               <div class="card__title">
  //                    <a href="./aboutProduct.html?id=${id}">
  //                 <h2>${name}</h2>
  //                 </a>
  //               </div>
  //               <div class="card__price">
  //                 <div class="card__price_cell">
  //                   <p class="price">${price}</p>
  //                 </div>
  //                 <div class="card__price_cell">
  //                   <p class="discount">${discount}</p>
  //                 </div>
  //                 <div class="card__price_cell">
  //                   <button type="button" class="card__besket_add" data-product-id="${id}"></button>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //       </div>
  //     `;
  //   searchRes.insertAdjacentHTML("beforeend", cardItem);
  //   })

  // }
});

export  function searchUrl() {
  const searchInput = document.querySelector(".search_products");
  const btnSeaRCHResult = document.querySelector(".modal_search_products");

  btnSeaRCHResult.addEventListener("click", function () {
    const query = encodeURIComponent(searchInput.value.trim());
    window.location.href = `../../search.html?search=${query}`;
  });
}

function searchListUrl() {
const searchListProduct = document.querySelectorAll(".modal_search__list a");

searchListProduct.forEach(link => {
  link.addEventListener("click", function() {
     const query = encodeURIComponent(link.textContent.trim());
     window.location.href = `../../search.html?search=${query}`;
     
  })
})
}

searchListUrl();

searchUrl();


