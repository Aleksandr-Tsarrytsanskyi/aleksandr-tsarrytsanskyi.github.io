import { homeTexts } from "./transition-page/home.js";

export  function changesLanguage() {
  
  let currentLang = "ru";
  const currentPathName = window.location.pathname;
  let currentTexts = {};
  const langSelect = document.querySelector(".lang");

  function checkPagePathName() {
    switch (currentPathName) {
      case "/public/index.html":
        currentTexts = homeTexts;
        console.log(currentTexts);
        
        break;
      default: {
          currentTexts = {}
      }
      
    }
  }

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
    
    langSelect.addEventListener("change", function (e) {
      currentLang = this.value;
      
      changeLang();
    });
  }

  //  langButtons.forEach(btn => {
  //        btn.classList.remove('lang-switcher__item--active');
  //     })
  // event.target.classList.add('lang-switcher__item--active')
  //   currentLang = event.target.dataset.btn;
  changesAboutUs();
}
