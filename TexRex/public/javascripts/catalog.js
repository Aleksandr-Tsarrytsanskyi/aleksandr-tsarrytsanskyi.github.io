document.addEventListener("DOMContentLoaded", function() {
    function addpProductsPrice() {
        const productCart = document.querySelectorAll(".products_cart")
        productCart.forEach(cart => {
            cart.addEventListener("click", function(event) {
                let taget = event.target.closest(".products_cart")
                let price = taget.querySelector(".price span")
                
                localStorage.setItem("priceproducts", `${price.textContent}`);
                
            })
        })
    }
    addpProductsPrice();
})