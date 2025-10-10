document.addEventListener("DOMContentLoaded", function() {
    const producthit = document.querySelectorAll(".products_cart")
    function addLocalStorage(producthit) {
        producthit.forEach(product => {
    product.addEventListener("click", function(event) {
    let title = product.children[3].textContent
    let subtitle = product.children[4].textContent
    let price = product.children[5].children[0].firstElementChild.children[0].textContent
      
      
    })
  })
}
addLocalStorage(producthit);
})