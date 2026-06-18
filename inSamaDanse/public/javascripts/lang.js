import { homeTexts } from "./transition-page/home.js";

export  function changesLanguage() {
  
  let currentLang = "ru";
  const currentPathName = window.location.pathname;
  let currentTexts = {};
  const langSelect = document.querySelector(".lang");

  function checkPagePathName() {
    switch (currentPathName) {
      case "/inSamaDanse/public/":
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


  function changesAboutUs() {
    const course2 = document.querySelector(".lang-course2")
          const course3 = document.querySelector(".lang-course3")
          const course4 = document.querySelector(".lang-course4")
          const langItem = document.querySelector(".lang-item")
          const course5 = document.querySelector(".lang-course5")
          course2.classList.remove("change-lang-course2")
          course3.classList.remove("change-lang-course3")
          course4.classList.remove("change-lang-course4")
          langItem.classList.remove("change-lang-item")
         course3.classList.remove("mobile-lang-course3")
         course5.classList.remove("change-lang-course5")
    langSelect.addEventListener("change", function (e) {
      currentLang = this.value;
      if(this.value == "ru") {
        location.reload()
      }

      if(innerWidth >= 1280) {
        if(this.value == "en") {
         

          course2.classList.add("change-lang-course2")
          course3.classList.add("change-lang-course3")
          course4.classList.add("change-lang-course4")
        }
      }

      if(innerWidth <= 864) {
         if(this.value == "en") {
           

         langItem.classList.add("change-lang-item")
         course3.classList.add("mobile-lang-course3")
         course5.classList.add("change-lang-course5")
         }
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
}
