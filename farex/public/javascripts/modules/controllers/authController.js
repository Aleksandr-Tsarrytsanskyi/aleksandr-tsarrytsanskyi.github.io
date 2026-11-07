import { modalController } from "../../modal/modal.js";
import {showErrorMessage} from "../../utils/utils.js"

export async function init() {
    const formRegistration = document.querySelector(".modal_profile_registration form")
    const modalSuccess = document.querySelector(".modal_success")
    const modalSuccessBtn = document.querySelector(".modal_success__login")
    const modalProfileRegi = document.querySelector(".modal_profile_registration")
    const modalProfileLogin = document.querySelector(".modal_profile_login ")
     modalController({
        modal: ".modal_success",
        btnOpen: ".seccess",
        btnClose: ".modal__close",
        time: "300",
        });
    
    formRegistration.addEventListener("submit", function(e) {
        e.preventDefault();
        const errorSpan = document.querySelector(".modal_profile_registration .error_span")
        

         let error = validateRegistration();
         if(error === 0) {
            formRegistration.reset()
           
           
         }
    })
    
    // modalSuccessBtn.addEventListener("click", function() {
    //     modalSuccess.classList.remove("modal_animate")
    //     modalProfileRegi.classList.remove("modal_animate")
    //     modalProfileLogin.classList.add("modal_animate")
    // })

}


function validateRegistration() {
   
    const formRegistration = document.querySelector(".modal_profile_registration form")
     let inputs = formRegistration.elements;
        let {mail ,password, repeatpassword} = inputs;
     
      let error = 0
      let regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        const regExp = new RegExp(regExpEmail);
       
      if(!regExp.test(mail.value)) {
        erorrInput(mail, "error_input")
        error++
      }
      else {
        validateInput(mail, "error_input")
      }

      if(password.value.length <= 3) {
         erorrInput(password, "error_input");
         spanErro("Пароль слишком короткий")
          error++
      }

      else {
        removeErroreSpan();
         validateInput(password, "error_input")
      }

      if(password.value !== repeatpassword.value) {
        erorrInput(repeatpassword, "error_input")
         spanErro("Пароль не совпадает")
          error++
      }
      else {
        validateInput(repeatpassword, "error_input")
      }

      

       
      



      
  return error
 
  
}


async function userApi(data) {
      const formData = new FormData(data);
    const modalSuccess = document.querySelector(".modal_success")
  

    try {
        const response = await fetch('register.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            modalSuccess.classList.add("modal_animate")
        } else {
            alert('Ошибка: ' + result.message);
        }
    } catch (error) {
        console.error('Ошибка:', error);
    } 
}


 function erorrInput(input, addclass) {
    input.classList.add(addclass);
    
  }

  function validateInput(input, removeclass) {
    input.classList.remove(removeclass);
    
  }

  function spanErro(text) {
  const errorSpan = document.querySelector(".modal_profile_registration .error_span")
    errorSpan.textContent = text
  }

  function removeErroreSpan() {
    const errorSpan = document.querySelector(".modal_profile_registration .error_span")
   errorSpan.textContent = ""
  }