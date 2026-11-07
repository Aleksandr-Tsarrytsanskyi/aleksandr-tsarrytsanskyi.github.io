import { modalController } from "./modal/modal.js";
import { scrollToHeaderBtn } from "./scrollUp.js";
scrollToHeaderBtn();
modalController({
  modal: ".modal-contacts",
  btnOpen: ".contact",
  btnClose: ".modal__close",
  time: "300",
});

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
  const trigger = document.querySelectorAll(".modal__trigger");
  const email = document.querySelector(".modal__email");
  const phone = document.querySelector(".modal__phone");
 const feedback = document.querySelector(".modal-contacts .feedback");
 const inputCheckbox = document.querySelector(".feedback__checkox_real");
 const modalSubmit = document.querySelector(".modal_submitted");
 const modalClose = document.querySelector(".modal_submitted .modal__close");
 const modalContacts = document.querySelector(".modal-contacts");
 let inputs = feedback.elements;
  let {mail ,telephone, message, policy} = inputs;

  
  const modalShowLogin = document.querySelector(".modal_profile_registration");
  modalLignBtn.addEventListener("click", function () {
    modalShowLogin.classList.remove("modal_animate");
  });

  modalClose.addEventListener("click", function() {
     modalSubmit.classList.remove("modal_animate_submit")
  })
 feedback.addEventListener("submit", function(event) {
        event.preventDefault();
        console.dir("OK");
        
        
        let error = validateFeddBack();
        if(error === 0) { 
        console.dir("send");
        feedback.reset();
            modalSubmit.classList.add("modal_animate_submit");
            modalContacts.classList.remove("modal_animate");

        }
    });

  function validateFeddBack() {
      let error = 0
      let regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        const regExp = new RegExp(regExpEmail);
         let regExpphone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
        const regExpPhone = new RegExp(regExpphone);
      if(!regExp.test(mail.value)) {
        console.dir("error");
        erorrInput(mail, "error_input")
        error++
      }
      else {
        validateInput(mail, "error_input")
      }

      if(!regExpPhone.test(telephone.value)) {
         erorrInput(telephone, "error_input")
          error++
        }

        else {
            validateInput(telephone, "error_input")
        }
        if(message.value.length < 10) {
           erorrInput(message, "error_input")
            error++
        }

        else {
           validateInput(message, "error_input")
        }

        if(!policy.checked) {
          erorrInput(inputCheckbox, "error_input")
            error++
        }

        else {
          validateInput(inputCheckbox, "error_input")
        }
  return error
  }
  
 
  



  function erorrInput(input, addclass) {
    input.classList.add(addclass);
    
  }

  function validateInput(input, removeclass) {
    input.classList.remove(removeclass);
    
  }

});
