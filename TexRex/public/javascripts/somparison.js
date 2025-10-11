import { modalController } from "./modal/modal.js";
document.addEventListener("DOMContentLoaded", function () {
  modalController({
    modal: ".madal1",
    btnOpen: ".modal_window1",
    btnClose: ".modal__close",
    time: "300",
  });
  modalController({
    modal: ".madal2",
    btnOpen: ".modal_window2",
    btnClose: ".modal__close",
    time: "300",
  });

  modalController({
    modal: ".madal3",
    btnOpen: ".modal_window3",
    btnClose: ".modal__close",
    time: "300",
  });

  modalController({
    modal: ".madal4",
    btnOpen: ".modal_window4",
    btnClose: ".modal__close",
    time: "300",
  });

  modalController({
    modal: ".madal5",
    btnOpen: ".modal_window5",
    btnClose: ".modal__close",
    time: "300",
  });

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
  const modal4 = document.querySelector(".madal4");
  const modal3Btn = document.querySelector(".madal3 .btn");
  const modal3 = document.querySelector(".madal3");
  const modalBack = document.querySelector(".madal4 .back_btn");
  const modalClose = document.querySelectorAll(".modal__close");
  const modal = document.querySelectorAll(".modal");
  const modalform = document.querySelectorAll(".login_account");

  modalform.forEach((submit) => {
    submit.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  });
  modalBack.addEventListener("click", function () {
    modal4.classList.remove("modal_animate");
  });
  modal3Btn.addEventListener("click", function () {
    modal3.classList.remove("modal_animate");
  });

  modal.forEach((el) => {
    el.addEventListener("click", function (event) {
      event.target
        .closest(".modal_back")
        .parentElement.parentElement.classList.remove("modal_animate");
    });
  });

  modalClose.forEach((close) => {
    close.addEventListener("click", function () {
      modal.forEach((modal) => {
        modal.classList.remove("modal_animate");
      });
    });
  });
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
    modalBesket.classList.remove("modal_besket_show");
  });

  clearbtn.addEventListener("click", function () {
    clearProduct.forEach((product) => {
      product.remove();
    });
  });

  addBasket.forEach((btn) => {
    btn.addEventListener("click", function () {
      modalBesket.classList.add("modal_besket_show");
    });
  });
});
