document.addEventListener("DOMContentLoaded", function () {
  const removeProduct = document.querySelector(".comparison__content");
  const clearProduct = document.querySelectorAll(
    ".comparison__content .remove"
  );
  const clearbtn = document.querySelector(".comparison__item button");
  const modalRemoveProduct = document.querySelector(
    ".modal_comparison_remove_product"
  );
  const modalclearBtn = document.querySelector(".comparison__item button");
  const modalclear = document.querySelector(".modal_comparison_clear");
  const addBasket = document.querySelectorAll(".comparison__content button");
  const modalBesket = document.querySelector(".modal_besket");
  const removemodalBesket = document.querySelector(".modal_besket_remove");
  removeProduct.addEventListener("click", function (event) {
    let eventTarget = event.target.closest(
      ".comparison__content_remove"
    ).parentElement;
    eventTarget.remove();
    modalRemoveProduct.classList.add("modal_comparison_remove_product_show");
  });

  modalclearBtn.addEventListener("click", function (event) {
    modalclear.classList.add("modal_comparison_remove_product_show");
  });

    removemodalBesket.addEventListener("click", function (event) {
     modalBesket.classList.remove("modal_besket_show")
  });

  clearbtn.addEventListener("click", function () {
    clearProduct.forEach((product) => {
      product.remove();
    });
  });

  addBasket.forEach(btn => {
    btn.addEventListener("click", function() {
        modalBesket.classList.add("modal_besket_show")

    })
  })
});
