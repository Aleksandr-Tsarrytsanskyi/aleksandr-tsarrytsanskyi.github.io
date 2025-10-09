document.addEventListener("DOMContentLoaded", function () {
    const modalRemoveproduct = document.querySelector(".header .right-menu__button");
    const modalSearch = document.querySelector(".modal_search");
    const modalClose = document.querySelector(".modal_search .modal__close");
    const searchForm = document.querySelector(".modal_search_container form");
    modalRemoveproduct.addEventListener("click", function() {
        document.body.style.overflow = 'hidden';
        modalSearch.classList.add("modal_animate")
    })
      modalClose.addEventListener("click", function() {
        modalSearch.classList.remove("modal_animate")
        document.body.style.overflow = 'auto ';
    })

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
    })
})