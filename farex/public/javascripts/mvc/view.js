export class View {
    constructor() {
        
    }

    elements = {
        sortFilter: document.querySelector(".list_products"),
        sortPrice : document.querySelector(".list_price"),
        productList: document.querySelector(".products_catalog"),
        sortBtn: document.querySelector(".show_more__category button"),
       
    }

    sortingElementsValue() {
        return {
            sortType: this.elements.sortFilter.value,
            sortPrice: this.elements.sortPrice.value
        }
    }

    renderArrProducts(data) {
        this.elements.productList.textContent = ""
      data.forEach(product => {
          const { id, top, img, name, price, discount } = product;
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
       this.elements.productList.insertAdjacentHTML("beforeend", cardItem);
        const hit = document.querySelectorAll(".card__body .hit p");
       hit.forEach((hit) => {
      hit.textContent = "ТОП ПРОДАЖ";
    });
      });  
    }

    renderBtnArrProducts(data) {
      
      data.forEach(product => {
          const { id, top, img, name, price, discount } = product;
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
       this.elements.productList.insertAdjacentHTML("beforeend", cardItem);
        const hit = document.querySelectorAll(".card__body .hit p");
       hit.forEach((hit) => {
      hit.textContent = "ТОП ПРОДАЖ";
    });
      });  
    }
}