 function modalController({modal, btnOpen, btnClose, time = 300}) {
  const buttonElements = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);
  const blurmain = document.querySelector("main")
  const blurfooter = document.querySelector("footer")
  const blurheadr = document.querySelector("header")
    
  const openMOdal = () => {
    modalElem.classList.add("modal-create-company-animate")
    document.body.style.overflow = 'hidden';
    
    window.addEventListener("keydown", closeModal)
     
    
  };
  buttonElements.forEach((item) => {
    item.addEventListener("click", openMOdal);
  });
  modalElem.addEventListener("click", closeModal);

  function closeModal(event) {
    const target = event.target;

    if (target == modalElem || (btnClose && target.closest(btnClose)) || event.code === "Escape") {
      modalElem.classList.remove("modal-create-company-animate");
      document.body.style.overflow = 'visible'; 
    
      
      window.removeEventListener("keydown", closeModal)
    }
  }
    
}

modalController({
  modal: ".modal__graphics",
  btnOpen: ".btn-modal-craphics",
  btnClose: ".modal-create-company-close",
  time: "300",
});

modalController({
  modal: ".modal__create-graphics",
  btnOpen: ".modal__create-graphics-btn",
  btnClose: ".modal-create-graphics-close",
  time: "300",
});

modalController({
  modal: ".modal__company-success",
  btnOpen: ".modal__company-success-btn",
  btnClose: ".modal-success-close",
  time: "300",
});
function addEventListener() {
    const companyListHover = document.querySelectorAll('.modal__graphics-header-hover');
    const companyList = document.querySelectorAll('.modal__graphics-lists');
    const generateBtn = document.querySelector('.modal__create-graphics-generate');
    const promoInput = document.querySelector('.modal__create-graphics-content-promo');
    const mobileList = document.querySelectorAll('.modal__graphics-company-list');
    const mediaQuery = window.matchMedia('(max-width: 840px)');
    const minmediaQuery = window.matchMedia('(min-width: 840px)');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    if (minmediaQuery.matches) {
        companyListHover.forEach(el => {
        el.addEventListener("mouseover", () => {
             companyList.forEach(list => {

                 list.classList.add("modal__graphics-lists-show")
             })
    })
    })
    
    companyListHover.forEach(el => {
         el.addEventListener("mouseout", () => {

            companyList.forEach(list => {
                list.classList.remove("modal__graphics-lists-show")

            })
    })
    })
    }

    

if (mediaQuery.matches) {
    mobileList.forEach(el => {
        el.addEventListener("click", function() {
        companyList.forEach(list => {
                list.classList.toggle("modal__graphics-lists-show")

            })
    })
    })
}

    

    

   

    generateBtn.addEventListener("click", () => {
         let promo = '';
    // Генерируем код из 8 символов
    for (let i = 0; i < 8; i++) {
        promo += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    promoInput.value = promo

    navigator.clipboard.writeText(promo);
   
    })

    
}

addEventListener();

