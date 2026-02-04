document.addEventListener("DOMContentLoaded",function() {

// activeSlide.lastElementChild.style.opacity = "1"


  const swiper = new Swiper('.technology', {
  // Optional parameters
 
  
  
   spaceBetween: 10,
  

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
      autoHeight: true
  },

   breakpoints: {
    // когда ширина экрана >= 320px (мобильные)
    300: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // когда ширина экрана >= 640px (планшеты)
    768: {
      loop: true,
      slidesPerView: 6,
      spaceBetween: 20
    },
    // когда ширина экрана >= 1024px (десктопы)
    960: {
      slidesPerView: 8,
      spaceBetween: 30
    }
  }
});

    let clients =  new Swiper(".clients", {
    
    loop: true,
    centeredSlides: true,
    allowTouchMove: false,
    slidesPerView: 3,
    spaceBetween: 60,
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
      spaceBetween: 60
    }
  }
    });


    const mobileCore = new Swiper('.mobile_core', {
  // Optional parameters
  slidesPerView: 1.2,
    spaceBetween: 10,
  loop: true,

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
  loop: true,

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
