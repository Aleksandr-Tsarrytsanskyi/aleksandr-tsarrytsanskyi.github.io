"use strict"

export function showErrorMessage(message) {
    const h2 = document.querySelector(".wrapper");
    const msg = `
                <div class="modal modal_products modal_animate">
      <div class="modal_products__body">
        <div class="modal_products__container">
          <h2>${message}</h2>
          <a href="/">Перейти к списку товаров</a>
           
        </div>
      </div>
    </div>
                `
        h2.insertAdjacentHTML("afterend", msg)        
}

export function getBasketLocalStorage() {
    const cartDataJSON = localStorage.getItem("besket");
    return cartDataJSON ? JSON.parse(cartDataJSON) : [];
}

export function setBasketLocalStorage(basket) {
    const besketCount = document.querySelector('.header__besket_counter .counter')
     localStorage.setItem("besket", JSON.stringify(basket));
    besketCount.innerHTML = basket.length;
}

export function getFavoritesLocalStorage() {
const cartDataJSON = localStorage.getItem("favorites");
    return cartDataJSON ? JSON.parse(cartDataJSON) : [];
}

export function setFavoritesLocalStorage(basket) {
const besketCount = document.querySelector('.header__favorites_counter .counter')
     localStorage.setItem("favorites", JSON.stringify(basket));
    besketCount.innerHTML = basket.length;
}

export function checkingRelevanceValueBasket(productsData) {
    const basket = getBasketLocalStorage()

    basket.forEach((basketId, index) => {
        const exitsInProducts = productsData.some(item => item.id === Number(basketId))
        if(!exitsInProducts) {
            basket.splice(index,1)
        }
    });

    setBasketLocalStorage(basket)
}

export function checkingRelevanceValueFavorites(productsData) {
    const fovorites = getFavoritesLocalStorage()

    fovorites.forEach((basketId, index) => {
        const exitsInProducts = productsData.some(item => item.id === Number(basketId))
        if(!exitsInProducts) {
            fovorites.splice(index,1)
        }
    });

    setFavoritesLocalStorage(fovorites)
}



