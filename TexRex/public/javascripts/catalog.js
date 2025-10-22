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

  const filtr = document.querySelector(".modal_filtr");
  const filtrbtn = document.querySelector(".filtr .right button");
  const modalfiltr = document.querySelector(".modal_catalog_filtr");
  const filtrbtnClick = document.querySelector(".filtr_btn");
  const modalClose = document.querySelector(
    ".modal_catalog_filtr .modal__close"
  );
  const filtrBtns = document.querySelectorAll(".modal_catalog_filtr button");
  const resetBtn = document.querySelector(".modal_catalog_filtr .reset");
  const filtrCheckbox = document.querySelectorAll(
    ".modal_catalog_filtr .toogle"
  );
  const modal4 = document.querySelector(".madal4");
  const modal3Btn = document.querySelector(".madal3 .btn");
  const modal3 = document.querySelector(".madal3");
  const modalBack = document.querySelector(".madal4 .back_btn");
  const modalCloses = document.querySelectorAll(".modal__close");
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

  modalCloses.forEach((close) => {
    close.addEventListener("click", function () {
      modal.forEach((modal) => {
        modal.classList.remove("modal_animate");
      });
    });
  });
  function resetFiltr() {
    resetBtn.addEventListener("click", function () {
      filtrBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      filtrCheckbox.forEach((checkbox) => {
        checkbox.checked = false;
      });
    });
  }
  resetFiltr();

  filtrBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.target.classList.toggle("active");
      event.target.closest(".reset").classList.add("btn_bg_none");
    });
  });

  filtrbtnClick.addEventListener("click", function () {
    modalfiltr.classList.add("modal_animate");
  });

  modalClose.addEventListener("click", function () {
    modalfiltr.classList.remove("modal_animate");
  });

  filtrbtn.addEventListener("click", function () {
    filtr.classList.add("modal_filtr_show");
    // setTimeout(() => {
    //   filtr.classList.remove("modal_filtr_show");
    // }, 5000);
  });
  function rangeSlider() {
    var slider = document.getElementById("range_slider");
    const inpu0 = document.getElementById("input-0");
    const inpu1 = document.getElementById("input-1");
    const inputs = [inpu0, inpu1];
    if (slider) {
      noUiSlider.create(slider, {
        start: [0, 200000],
        step: 1,
        connect: true,
        range: {
          min: [0],
          max: [200000],
        },
      });
    }
    slider.noUiSlider.on("update", function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });
    const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      slider.noUiSlider.set(arr);
    };
    inputs.forEach((el, index) => {
      el.addEventListener("change", (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    });
  }
  rangeSlider();
  function addpProductsPrice() {
    const productCart = document.querySelectorAll(".products_cart");
    productCart.forEach((cart) => {
      cart.addEventListener("click", function (event) {
        let taget = event.target.closest(".products_cart");
        let price = taget.querySelector(".price span");

        localStorage.setItem("priceproducts", `${price.textContent}`);
      });
    });
  }
  addpProductsPrice();
});
