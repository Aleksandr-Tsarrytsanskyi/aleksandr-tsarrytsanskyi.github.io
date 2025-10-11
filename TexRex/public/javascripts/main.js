import { modalController } from "./modal/modal.js";

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

document.addEventListener("DOMContentLoaded", function () {
  const modal4 = document.querySelector(".madal4");
  const modal3Btn = document.querySelector(".madal3 .btn");
  const modal3 = document.querySelector(".madal3");
  const modalBack = document.querySelector(".madal4 .back_btn");
  const modalClose = document.querySelectorAll(".modal__close");
  const modal = document.querySelectorAll(".modal");
  const modalform = document.querySelectorAll(".login_account");
  const cancelCoockie = document.querySelector(".coockie .reject");
  const cookiesAccepted = document.querySelector(".coockie .cookies_accepted");
  const coockie = document.querySelector(".coockie");

  cancelCoockie.addEventListener("click", function () {
    coockie.classList.add("coockie_hide");
  });

  // Сохранить HTML-код в куки
  cookiesAccepted.addEventListener("click", function () {
    coockie.classList.add("coockie_hide");
    // document.cookie = "pageContent=" + encodeURIComponent(pageHTML);

    // const cookies = document.cookie;
    // const pageContentCookie = cookies
    //   .split("; ")
    //   .find((row) => row.startsWith("pageContent="));
    // if (pageContentCookie) {
    //   const savedPageHTML = decodeURIComponent(pageContentCookie.split("=")[1]);
    //   console.log(savedPageHTML.substring(0, 200));
    // } else {
    //   console.log("Куки с содержимым страницы не найдены.");
    // }
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
});
