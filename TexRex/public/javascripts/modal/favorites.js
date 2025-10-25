document.addEventListener("DOMContentLoaded", function() {
    const addfavorites = document.querySelectorAll(".products__header .cell:nth-child(2) > svg")
    const besketaddfavorites = document.querySelector(".description__addcart .cell:nth-child(2)  svg")
    const favoritesLink = document.querySelector(".description__addcart .cell:nth-child(2)  a")
    const modalFavorites = document.querySelector(".modal_favorites")
    const deletelFavorites = document.querySelector(".modal_favorites_reject")
    // const clearbtn = document.querySelector(".comparison__item button");
     const addBasket = document.querySelectorAll(".product_besket .product_besket_cell:first-child > svg");
     const modalbesket  = document.querySelector(".modal_besket ");
     const removemodalBesket = document.querySelector(".modal_besket_remove");
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
      btn.classList.toggle("active")
      modalbesket.classList.add("modal_besket_show");
    });
  })
})