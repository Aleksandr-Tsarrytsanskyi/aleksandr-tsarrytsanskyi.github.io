import { homeTexts } from "../translation-pages/lang-home.js";
import { catalogTexts } from "../translation-pages/lang-catalog.js";
document.addEventListener("DOMContentLoaded", function () {
  let currentLang = "ru";
  const currentPathName = window.location.pathname;
  let currentTexts = {};
  const langSelect = document.querySelector(".select_lang");
console.dir(currentPathName);

  function checkPagePathName() {
    switch (currentPathName) {
      case "/index.html":
        currentTexts = homeTexts;
           console.log(currentTexts); 
        
        break;
        case "/catalog.html":
          currentTexts = catalogTexts;
          console.log(currentTexts); 
        
         
        break;
      default:
        currentTexts = {};
        break;
    }
  }

   console.log(currentTexts);
 
  
  checkPagePathName();

  function changeLang() {
    for (const key in currentTexts) {
      let elem = document.querySelector(`[data-lang=${key}]`);
      if (elem) {
        elem.innerHTML = currentTexts[key][currentLang];
      }
    }
  }
  changeLang();

  function changesAboutUs() {
    const search = document.querySelector(".search_products");
    const footer = document.querySelector(".footer");
    const inputLoginAccaunt = document.querySelector(
      ".modal_profile_login input[type='submit']"
    );
    const inputLoginRegistration = document.querySelector(
      ".modal_profile_registration input[type='submit']"
    );
    langSelect.addEventListener("change", function (e) {
      currentLang = this.value;
      console.dir(currentLang);
      

      if (currentLang == "ua") {
        search.placeholder = "Пошук";
        inputLoginAccaunt.value = "Увійти до облікового запису";
        inputLoginRegistration.value = "Відправити";
        footer.classList.add("footer_lange_ua");
      } else {
        search.placeholder = "Поиск";
        inputLoginAccaunt.value = "Войти в аккаунт";
        inputLoginRegistration.value = "Отправить";
        footer.classList.add("footer_lange_ua");
        footer.classList.remove("footer_lange_ua");
      }
      changeLang();
    });
  }

  //  langButtons.forEach(btn => {
  //        btn.classList.remove('lang-switcher__item--active');
  //     })
  // event.target.classList.add('lang-switcher__item--active')
  //   currentLang = event.target.dataset.btn;
  changesAboutUs();
});
