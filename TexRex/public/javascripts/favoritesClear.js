 const removeProducts = document.querySelector(".favorites_filtr button");
 removeProducts.addEventListener("click", function() {
   products.forEach(ptoduct => {
    ptoduct.remove()

  })
  
 })