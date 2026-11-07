import { modalController } from "./modal/modal.js";
import { scrollToHeaderBtn } from "./scrollUp.js";
scrollToHeaderBtn();
modalController({
  modal: ".modal_profile",
  btnOpen: ".header__profile",
  btnClose: ".modal__close",
  time: "300",
});
modalController({
  modal: ".modal_profile_login",
  btnOpen: ".modal_profile__login",
  btnClose: ".modal__close",
  time: "300",
});
modalController({
  modal: ".modal_profile_registration",
  btnOpen: ".modal_profile__registration",
  btnClose: ".modal__close",
  time: "300",
});

modalController({
  modal: ".modal_profile_login",
  btnOpen: ".modal_profile_registration_login",
  btnClose: ".modal__close",
  time: "300",
});

 modalController({
    modal: ".modal_profile_reset_pas",
    btnOpen: ".modal_profile_login_repeat_pas",
    btnClose: ".modal__close",
    time: "300"
})

document.addEventListener("DOMContentLoaded", function () {
  const modalLignBtn = document.querySelector(
    ".modal_profile_registration_login"
  );
  const modalShowLogin = document.querySelector(".modal_profile_registration");
  modalLignBtn.addEventListener("click", function () {
    modalShowLogin.classList.remove("modal_animate");
  });
});
