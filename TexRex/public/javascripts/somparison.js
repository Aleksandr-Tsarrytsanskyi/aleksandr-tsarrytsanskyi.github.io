document.addEventListener("DOMContentLoaded", function() {
    const removeProduct = document.querySelector(".comparison__content");
    const clearProduct = document.querySelectorAll(".comparison__content .remove");
    const clearbtn = document.querySelector(".comparison__item button");
removeProduct.addEventListener("click", function(event) {
   let eventTarget =  event.target.closest(".comparison__content_remove").parentElement;
    eventTarget.remove();
})

clearbtn.addEventListener("click", function() {
   clearProduct.forEach(product => {
    product.remove();
   }) 
})

})