


document.addEventListener("DOMContentLoaded", function() {
    const favorites = document.querySelectorAll(".products__header svg")

favorites.forEach(el => {
    el.addEventListener('click', function(event) {
        el.classList.toggle("active")
    })
})








//     localStorage.setItem("id", "")
//     localStorage.setItem("item", "")
//     const favorites = document.querySelectorAll(".products_cart")
//     const products = document.querySelector(".favorites")
//     favorites.forEach(item => {
//         item.addEventListener("click", function(event) {
//         let target = event.target.closest(".products_cart svg")
//         target.classList.toggle("active")
//      if(target.classList.contains("active")) {
//        productsfavorites.push(item.dataset.product,item.innerHTML)
//         addLocalStorage(item.dataset.product, productsfavorites)
//         let productCartId = localStorage.getItem("id");
//       let product = localStorage.getItem("item")
      
//        console.log(productCartId ,product);
       
        
      
//      }
//      else {
//            removeLocalStorage(item.dataset.product, item)
//      }
        
//     })
//    }) 
  
   

   

//    function addLocalStorage(id, item) {
//     localStorage.setItem("id", id)
//     localStorage.setItem("item",JSON.stringify(item))
//    }

//     function removeLocalStorage(id, item) {
//     localStorage.removeItem("id", id)
//     localStorage.removeItem("item", item)
//     }
   
})