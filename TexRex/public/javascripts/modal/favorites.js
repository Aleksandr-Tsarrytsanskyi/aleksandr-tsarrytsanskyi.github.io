  const onsale  = document.querySelectorAll(".onsale");

     onsale.forEach(hit => {
     let res = hit.parentElement.parentElement.parentElement.children[5].classList.add("products_price_onsale");
     let text = hit.parentElement.parentElement.parentElement.children[5].children[0].children[0].classList.add("products_price_onsale_text");
     console.log(res)
     });


document.addEventListener("DOMContentLoaded", function() {
    const addfavorites = document.querySelectorAll(".products__header .cell:nth-child(2) > svg")
    const besketaddfavorites = document.querySelector(".description__addcart .cell:nth-child(2)  svg")
    const favoritesLink = document.querySelector(".description__addcart .cell:nth-child(2)  a")
    const modalFavorites = document.querySelector(".modal_favorites")
    const deletelFavorites = document.querySelector(".modal_favorites_reject")
    // const clearbtn = document.querySelector(".comparison__item button");
     const addBasket = document.querySelectorAll(".product_besket .product_besket_cell .add_besket_product");
     const addBasketFav = document.querySelectorAll(".product_besket .product_besket_cell:last-child > svg");
     const modalbesket  = document.querySelector(".modal_besket ");
     const removemodalBesket = document.querySelector(".modal_besket_remove");
     const onsale  = document.querySelectorAll(".onsale ");
     const gramBtn  = document.querySelectorAll(".products__gram ");
     const productsprice  = document.querySelectorAll(".products .price ");
     const addSomparison  = document.querySelectorAll(".product_besket .add_semparison_product ");
  addSomparison.forEach(btn => {
    btn.addEventListener("click", function(e) {
      e.preventDefault();
      btn.classList.toggle("active")
    })
  })
  gramBtn.forEach(btn => {
    btn.addEventListener("click", function(e) {
      e.preventDefault();
     const children = btn.children
     
   Array.from(children).forEach(child => {
      child.classList.remove("active")
      // if(child.firstElementChild.textContent === "1 блин") {
      //   console.log("OK");
        
      // }
      
      // Perform actions on each child element
    });
      
     e.target.closest(".cell").classList.add("active");
     
      // if(e.target.closest(".cell").firstElementChild.textContent == "1 блин") {
      //  productsprice.forEach(price => {
      //   price.textContent = "3 000₽"
      //  })
       
        
      // }

      // if(e.target.closest(".cell").firstElementChild.textContent == "25 грамм") {
      //  productsprice.forEach(price => {
      //   price.textContent = "2 800₽"
      //  })
       
        
      // }
      
     
    })
  })

     onsale.forEach(hit => {
      hit.parentElement.parentElement.children[4].classList.add("products_price_onsale")
     })
//      const button = document.querySelectorAll('.categories .cell');
// const container = document.querySelectorAll('.categories');
// button.forEach(el => {
//   el.addEventListener("mouseover", function() {
//     container.forEach(cat => {
//       cat.classList.add('expanded');

//     })
//   })
// })

// button.forEach(el => {
//   el.addEventListener("mouseleave", function() {
//     container.forEach(cat => {
//       cat.classList.remove('expanded');
//       console.log("safasfasfasf");
      
//     })
//   })
// })

    console.log(addBasket);
    
    
        
   

     addfavorites.forEach(item => {
        item.addEventListener("click", function() {
            modalFavorites.classList.add("modal_favorites_show")
        })
    })

    
   deletelFavorites.addEventListener("click", function() {
    modalFavorites.classList.remove('modal_favorites_show')
   })

    removemodalBesket.addEventListener("click", function (event) {
    modalbesket.classList.remove("modal_besket_show");
  });



  addBasket.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      btn.classList.toggle("active")
      modalbesket.classList.add("modal_besket_show");
    });
  })

   addBasketFav.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      btn.classList.toggle("active")
     
    });
  })
})