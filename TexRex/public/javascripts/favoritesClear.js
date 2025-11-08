 const removeProducts = document.querySelector(".favorites_filtr button");
 const products = document.querySelectorAll(".products > .cell");
 removeProducts.addEventListener("click", function() {
   products.forEach(ptoduct => {
    ptoduct.remove()

  })
  
 })