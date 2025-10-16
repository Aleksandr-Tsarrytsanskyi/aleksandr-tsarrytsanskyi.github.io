import {  modalController} from "./modal.js";
    const hit = document.querySelector(".modal_window_hit")
    const hitClose = document.querySelector(".modal_hit .modal__close")

    hit.addEventListener("click", function() {
        document.body.style.overflow = 'hidden'
    })

    hitClose.addEventListener('click', function() {
         document.body.style.overflow = 'auto'
    })

modalController({
  modal: ".modal_hit",
  btnOpen: ".modal_window_hit",
  btnClose: ".modal__close",
  time: "300",
});