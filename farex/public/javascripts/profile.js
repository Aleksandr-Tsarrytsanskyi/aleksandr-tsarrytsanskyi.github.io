import { modalController } from "../javascripts/modal/modal.js";

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
  time: "300",
});

document.addEventListener("DOMContentLoaded", function () {
  const paymentCard = document.querySelector(".profile__payment_card");
  const radioPayment = document.querySelectorAll(".profile_cart_input");
  const numberCard = document.querySelectorAll(".profile__number_card");
  const paymentInputs = document.querySelectorAll(".profile__valid_item input");
  const cvvInput = document.querySelector(".profile__payment_code input");
  const formimage = document.querySelector(".formimage");
  const formpreview = document.querySelector(".formpreview");
  function uploadFile(file) {
    if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
      alert("Разрешены только изображения");
      formimage.value = "";
      return;
    }

    if (file.size > 2 * 2024 * 2024) {
      alert("файл должен быть менее 4 МБ");
      return;
    }

    let reader = new FileReader();

    reader.onload = (e) => {
      formpreview.innerHTML = `<img src="${e.target.result}" alt="photo">`;
    };

    reader.onerror = function (e) {
      alert("Error");
    };
    reader.readAsDataURL(file);
  }

  function addFormImage() {
    formimage.addEventListener("change", function () {
      uploadFile(formimage.files[0]);
    });
  }
  addFormImage();
  cvvInput.addEventListener("input", function () {
    this.value = this.value.substr(0, 3);
  });
  paymentInputs.forEach((input) => {
    input.addEventListener("input", function (e) {
      this.value = this.value.substr(0, 2);
      if (this.value.length === 2) {
        this.blur();

        e.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.focus();
      }
    });
  });

  numberCard.forEach((input, index) => {
    console.log(index);

    input.addEventListener("input", function (e) {
      this.value = this.value.substr(0, 4);
      if (this.value.length === 4) {
        this.blur();
        e.target.parentElement.nextElementSibling.firstElementChild.focus();
      }
    });
  });

  radioPayment.forEach((radio) => {
    if (radio.checked && radio.value == "option 1") {
      paymentCard.style.display = "none";
    }
    radio.addEventListener("change", function () {
      if (this.value == "option 1") {
        paymentCard.style.display = "none";
      } else {
        paymentCard.style.display = "block";
      }
    });
  });

  function tabsProduct() {
    const tabsbtn = document.querySelectorAll(".profile__tabs_btn");
    const tabsItem = document.querySelectorAll(".profile__tabs_content");

    tabsbtn.forEach((tabs) => {
      tabs.addEventListener("click", function () {
        const currentBtn = tabs;
        const tabId = currentBtn.getAttribute("data-tab");
        const currentTab = document.querySelector(tabId);
        tabsItem.forEach((item) => {
          item.classList.remove("active");
        });

        tabsbtn.forEach((item) => {
          item.classList.remove("active");
        });
        currentBtn.classList.add("active");
        currentTab.classList.add("active");
      });
    });
  }

  function changeAcardion() {
    const btn = document.querySelectorAll(".profile__acardion");
    btn.forEach((el) => {
      el.addEventListener("click", function (e) {
        // btn.forEach(el => {
        //   el.classList.remove("active")
        // })
        el.classList.add("active");
        btn.forEach((el) => {
          el.classList.remove("active");
        });

        let content = el.nextElementSibling.nextElementSibling;
        console.log(content);

        console.log(content.style.maxHeight);

        if (content.style.maxHeight) {
          el.classList.remove("active");

          document
            .querySelectorAll(".profile__acardion_content ")
            .forEach((el) => {
              el.style.maxHeight = null;
            });
        } else {
          el.classList.add("active");
          document
            .querySelectorAll(".profile__acardion_content ")
            .forEach((el) => {
              el.style.maxHeight = null;
              content.style.maxHeight = content.scrollHeight + "px";
            });
        }
      });
    });
  }
  //Orders
  function getcardTotalPrice() {
    const newOrder = document.querySelectorAll(".profile__acardion")
  //  const price = newOrder.querySelectorAll(".profile__price .price")

    newOrder.forEach(el => {
      el.addEventListener("click", function(e) {
        let item = el.nextElementSibling.nextElementSibling;
       const price = item.querySelectorAll(".profile__price .price")
        price.forEach(price => {
          console.dir(price.textContent);
          
        })
       
        
      })
    })
   //    let arr = [] 
//    price.forEach(price => {
//      arr.push(price)
      
//     })
//     let totalPrice = arr.reduce((sum, item) => {
//     console.log(sum += item.innerHTML);
    
// }, 0);

// console.dir(totalPrice);

    
    
  }

getcardTotalPrice();
  changeAcardion();
  tabsProduct();
});
