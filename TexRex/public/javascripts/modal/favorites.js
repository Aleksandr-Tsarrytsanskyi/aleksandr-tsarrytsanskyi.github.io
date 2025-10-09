document.addEventListener("DOMContentLoaded", function() {
    const addfavorites = document.querySelectorAll(".products__header svg")
    const modalFavorites = document.querySelector(".modal_favorites")
    const deletelFavorites = document.querySelector(".modal_favorites_reject")
    addfavorites.forEach(item => {
        item.addEventListener("click", function() {
            modalFavorites.classList.add("modal_favorites_show")
        })
    })
   deletelFavorites.addEventListener("click", function() {
    modalFavorites.classList.remove('modal_favorites_show')
   })
})