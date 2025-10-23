document.addEventListener("DOMContentLoaded", function () {
    const modalFavorites = document.querySelector(".modal_favorites")
  const besketaddfavorites = document.querySelector(
    ".description__addcart .cell:nth-child(2)  svg"
  );
  const favoritesLink = document.querySelector(
    ".description__addcart .cell:nth-child(2)  a"
  );
  favoritesLink.addEventListener("click", function (event) {
    event.preventDefault();
  });

   besketaddfavorites.addEventListener("click", function() {
            modalFavorites.classList.add("modal_favorites_show")
        })
});
