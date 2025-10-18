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

  const favorites = document.querySelectorAll(".products__header .cell:nth-child(2) svg");
  const modal4 = document.querySelector(".madal4");
  const modal3Btn = document.querySelector(".madal3 .btn");
  const modal3 = document.querySelector(".madal3");
  const modalBack = document.querySelector(".madal4 .back_btn");
  const modalClose = document.querySelectorAll(".modal__close");
  const modal = document.querySelectorAll(".modal");
  const modalform = document.querySelectorAll(".login_account");
  const productbesketSvg = document.querySelectorAll(".product_besket svg");

  productbesketSvg.forEach(btn => {
    btn.addEventListener("click", function(event) {
      event.preventDefault();
    })
  })

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
  favorites.forEach((el) => {
    el.addEventListener("click", function (event) {
        event.preventDefault()
      el.classList.toggle("active");
    });
  });

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
});
