document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll(".categories__item");
    const modalCategories = document.querySelector(".modal_categories");
    const modalCategoriesClose = document.querySelector(".modal_categories .modal__close");

    categories.forEach( item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            modalCategories.classList.add("modal_animate")
        })
    })

    modalCategoriesClose.addEventListener("click", function() {
          modalCategories.classList.remove("modal_animate")
    })
})