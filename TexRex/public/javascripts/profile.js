document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelectorAll(".profile_acardion");
  const profiLelogOut = document.querySelector(".profile__log_out");
  const modalLogOut = document.querySelector(".modal_log_out");
  const dontsOut = document.querySelector(".modal_log_out_right .no");
  const saveData = document.querySelectorAll(".save_data");
  const modalsaveData = document.querySelector(".modal_save_date");
  const copyText = document.querySelector(".profile__item .clipboard");

  // copyText.addEventListener("click", function() {
  //   copyText.classList.toggle("active")
  // })

  profiLelogOut.addEventListener("click", function () {
    modalLogOut.classList.add("modal_log_out_show");
  });
  dontsOut.addEventListener("click", function () {
    modalLogOut.classList.remove("modal_log_out_show");
  });
  saveData.forEach((save) => {
    save.addEventListener("click", function () {
      modalsaveData.classList.add("modal_save_date_show");
      setTimeout(() => {
        modalsaveData.classList.remove("modal_save_date_show");
      }, 5000);
    });
  });

  function tabsProduct() {
    const tabsbtn = document.querySelectorAll(".profile__tabs_btn");
    const tabsItem = document.querySelectorAll(".profile__content_tabs");

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
  tabsProduct();
  //Аккардеон
  btn.forEach((el) => {
    el.addEventListener("click", function (e) {
      // btn.forEach(el => {
      //   el.classList.remove("active")
      // })
      e.target.classList.toggle("active")
      el.classList.toggle("btn_active_tabs");
      let content = el.nextElementSibling.nextElementSibling;
      console.log(content);

      console.log(content.style.maxHeight);

      if (content.style.maxHeight) {
        console.log("11111");

        document.querySelectorAll(".profile__acadion_content").forEach((el) => {
          el.style.maxHeight = null;
        });
      } else {
        document.querySelectorAll(".profile__acadion_content").forEach((el) => {
          el.style.maxHeight = null;
          content.style.maxHeight = content.scrollHeight + "px";
        });
      }
    });
  });

  //   function saveDataUser() {

  function copyClipBoard() {
    const coppyButton = document.querySelector(".clipboard");
    const textToCopy = document.querySelector(".textToCopy");
    const sevetextToCopy = document.querySelector(".save_textcopy");
    coppyButton.addEventListener("click", function () {
      const text = textToCopy.textContent;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          sevetextToCopy.style.display = "block";
        });

        setTimeout(() => {
          sevetextToCopy.style.display = "none";
        }, 1500).catch((err) => {
          console.error("Не удалось скопировать текст: ", err);
        });
      } else {
        console.error("Clipboard API не поддерживается в вашем браузере.");
      }
    });
  }
  copyClipBoard();
  function deleteReviews() {
    const removeReviews = document.querySelectorAll(".myreviews");
    const clearReviews = document.querySelector(".clear_myreviews");
    const quantityReviews = document.querySelector(".filtr_myreviews_quantity");
    clearReviews.addEventListener("click", function () {
      removeReviews.forEach((reviews) => {
        reviews.remove();
        quantityReviews.textContent = "0 ОТЗЫВОВ";
      });
    });
    removeReviews.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        let deleteReviews = event.target.closest(".delete_reviews_btn")
          .parentElement.parentElement;

        deleteReviews.remove();
      });
    });
  }
  deleteReviews();
  //     const btn = document.querySelector(".save_data_user");
  //     const form = document.querySelector("#payment");

  //     btn.addEventListener("click", function(event) {
  //         let savePrivete = event.target.closest(".save_privete");
  //         if(savePrivete) {
  //             let dataUser = {
  //                 lastname: form.lastname.value,
  //                 firstname: form.firstname.value,
  //                 surname: form.surname.value
  //             }
  //            form.lastname.value = "asfasfasfasf";

  //         }

  //     })
  //   }saveDataUser();
});
