document.addEventListener("DOMContentLoaded",function() {
// const platform = navigator.platform.toLowerCase();
// const userAgent = navigator.userAgent.toLowerCase();
// let os = 'unknown';


// if (platform.includes('win')) {
//     os = 'windows';
//     document.body.classList.add(os)
// } else if (platform.includes('mac')) {
//     os = 'macos';
//     document.body.classList.add(os)
// } else if (platform.includes('linux')) {
//     os = 'linux';
//     document.body.classList.add(os)
// } else if (/android/.test(userAgent)) {
//     os = 'android';
//     document.body.classList.add(os)
// } else if (/iphone|ipad|ipod/.test(userAgent)) {
//     os = 'ios';
//     document.body.classList.add(os)
// }
// activeSlide.lastElementChild.style.opacity = "1"


    AOS.init();
 
  const swiper = new Swiper('.technology', {
  // Optional parameters
 
  
  slidesPerView: "auto",
   spaceBetween: 10,
   
  //  centeredSlides: false, // Отключить центрирование
  // initialSlide: 0,
   
    //  simulateTouch: false,
    //  allowTouchMove: false, 
  

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
      draggable: true,
       
      
  },
  // autoplay: {
  //   delay: 5000, // Задержка в мс (3 секунды)
  //   disableOnInteraction: false, // Не останавливать после взаимодействия
     
  // },


  //  on: {
   
  //   setTranslate: function () {
  //     // При каждом движении переопределяем transform
  //     const drag = this.scrollbar.dragEl;
  //     if (drag) {
  //       // Получаем текущий transform от Swiper
  //       const currentTransform = drag.style.transform;
  //       // Добавляем свои изменения, например, масштаб
  //       drag.style.transform = `${currentTransform} translateX(0px)`;
  //     }
  //   },
  // },

   breakpoints: {
    // когда ширина экрана >= 320px (мобильные)
    300: {
      slidesPerView: "auto",
      spaceBetween: 0
    },
    // когда ширина экрана >= 640px (планшеты)
    768: {
     
      slidesPerView: "auto",
      spaceBetween: 0
    },
    // когда ширина экрана >= 1024px (десктопы)
    960: {
      slidesPerView: "auto",
      spaceBetween: 0
    }
  }

  
  
});

    let clients =  new Swiper(".clients", {
    
    loop: true,
    centeredSlides: true,
    allowTouchMove: false,
    slidesPerView: 3,
    spaceBetween: 20,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     speed: 1000
    // },
    // speed: 1000,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // }

    breakpoints: {
    // когда ширина экрана >= 320px (мобильные)
    300: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // когда ширина экрана >= 640px (планшеты)
    768: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10
    },
    // когда ширина экрана >= 1024px (десктопы)
    960: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
    });

     let icons =  new Swiper(".icons", {
    
       slidesPerView: "auto",
      
       loop: true,
    //    simulateTouch: false,
    //  allowTouchMove: false, 
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     speed: 1000
    // },
    // speed: 1000,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // }

    autoplay: {
    delay: 5000, // Задержка в мс (3 секунды)
    disableOnInteraction: false, // Не останавливать после взаимодействия
     
  },

    breakpoints: {
    // когда ширина экрана >= 320px (мобильные)
    300: {
      slidesPerView: "auto",
      spaceBetween: 30
    },
    // когда ширина экрана >= 640px (планшеты)
    768: {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 40
    },
    // когда ширина экрана >= 1024px (десктопы)
    960: {
      slidesPerView: "auto",
      spaceBetween: 130
    }
  }
    });


    const mobileCore = new Swiper('.mobile_core', {
  // Optional parameters
  slidesPerView: 1.1,
    spaceBetween: 20,
 

  // If we need pagination
 

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});


const mobileCase = new Swiper('.mobile_case', {
  // Optional parameters
  slidesPerView: 1.2,
    spaceBetween: 10,


  // If we need pagination
 

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});


const swiperPrev = document.querySelector(".swiperPrev");
  const swiperNext = document.querySelector(".swiperNext");

      swiperPrev.addEventListener("click", () => {
        clients.slidePrev();
            const activeSlide = document.querySelector(".clients .swiper-slide-active")
            const activeClient = document.querySelectorAll(".clients .client")
          activeClient.forEach(el => {
            el.style.opacity = "0"
          })
          console.dir(activeSlide.lastElementChild);
          
            activeSlide.lastElementChild.style.opacity = "1"
      });
      swiperNext.addEventListener("click", () => {
        clients.slideNext();
        const activeSlide = document.querySelector(".clients .swiper-slide-active")
            const activeClient = document.querySelectorAll(".clients .client")
          activeClient.forEach(el => {
            el.style.opacity = "0"
          })
            activeSlide.lastElementChild.style.opacity = "1"
      });
})
