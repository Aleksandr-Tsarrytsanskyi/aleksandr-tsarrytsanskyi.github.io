import { modalController } from "./modal.js";
document.addEventListener("DOMContentLoaded", function() {
    
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
    
    const categories = document.querySelectorAll(".categories a");
    const modalCategories = document.querySelector(".modal_categories");
    const modalCategoriesClose = document.querySelector(".modal_categories .modal__close");

  categories.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
    })
  })

    // categories.forEach( item => {
    //     item.addEventListener("click", function(event) {
    //         event.preventDefault();
    //         modalCategories.classList.add("modal_animate")
    //     })
    // })

    // modalCategoriesClose.addEventListener("click", function() {
    //       modalCategories.classList.remove("modal_animate")
    // })
})