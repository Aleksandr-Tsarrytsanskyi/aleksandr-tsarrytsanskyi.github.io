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

  const modal4 = document.querySelector(".madal4");
  const modal3Btn = document.querySelector(".madal3 .btn");
  const modal3 = document.querySelector(".madal3");
  const modalBack = document.querySelector(".madal4 .back_btn");
  const modalClose = document.querySelectorAll(".modal__close");
  const modal = document.querySelectorAll(".modal");
  const modalform = document.querySelectorAll(".login_account");
  const inputs = document.querySelectorAll(".payment .number_card");
  const paymentInputs = document.querySelectorAll(".payment__month input");
  const cvvInput = document.querySelector(".payment__card_details .cvv");

  cvvInput.addEventListener("input", function () {
    this.value = this.value.substr(0, 3);
  });
  inputs.forEach((input, index) => {
    console.log(index);

    paymentInputs.forEach((input) => {
      input.addEventListener("input", function (e) {
        this.value = this.value.substr(0, 2);
        if (this.value.length === 2) {
          this.blur();

          e.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.focus();
        }
      });
    });

    input.addEventListener("input", function (e) {
      this.value = this.value.substr(0, 4);
      if (this.value.length === 4) {
        this.blur();
        e.target.parentElement.nextElementSibling.firstElementChild.focus();
      }
    });
  });

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

  //    const radioSpan = document.querySelectorAll(".payment .save_radio")
  //    const labelSaveAdres = document.querySelectorAll(".payment .radio_span")
  //    const save = document.querySelectorAll(".payment .save")
  //    radioSpan.forEach(radio => {
  //     radio.addEventListener("change", function(event) {

  //         if(event.target.checked) {
  //          save.forEach(el => {
  //             labelSaveAdres.forEach(span => {

  //                console.log(el.before());

  //             })
  //          })

  //         }
  //         else {

  //         }
  //     })
  //    })
});
