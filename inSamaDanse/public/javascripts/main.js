

function init() {

   function modalController({modal, btnOpen, btnClose, time = 300}) {
  const buttonElements = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);
  // const blurmain = document.querySelector("main")
  // const blurfooter = document.querySelector("footer")
  // const blurheadr = document.querySelector("header")
    
  const openMOdal = () => {
    modalElem.classList.add("active")
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
      modalElem.classList.remove("active");
      document.body.style.overflow = 'visible'; 
    
      
      window.removeEventListener("keydown", closeModal)
    }
  }
    
}

modalController({
  modal: ".burger-dialog",
  btnOpen: ".burger-btn",
  btnClose: ".close-btn",
  time: "300",
});
  function changeAcardion() {
    const acardion = document.querySelectorAll(".acardion");
    console.log(acardion);

    const contentActive = document.querySelector(".acardion_content_active");
    contentActive.style.maxHeight = contentActive.scrollHeight + "px";
    acardion.forEach((el) => {
      el.addEventListener("click", function (e) {
        console.log(e.target);
        acardion.forEach((btn) => {
          btn.classList.remove("acardion_show");
        });

        let content = el.nextElementSibling;
        let bgAcardion = el.parentElement;

        console.dir(bgAcardion);
        document.querySelectorAll(".faq-course-content .bg_active_acardion").forEach((el) => {
          el.classList.remove("acardion_bg_active");
        });
        bgAcardion.classList.add("acardion_bg_active");

        if (content.style.maxHeight) {
          console.dir("11111");
          bgAcardion.classList.remove("acardion_bg_active");
          document.querySelectorAll(".faq-course-content .acardion__content").forEach((el) => {
            el.style.maxHeight = null;
          });
        } else {
          console.log("22222");

          document.querySelectorAll(".faq-course-content .acardion__content").forEach((els) => {
            els.style.maxHeight = null;
            el.classList.add("acardion_show");

            content.style.maxHeight = content.scrollHeight + "px";
          });
        }
      });
    });
  }

  function changeAcardionFaq() {
    const acardion = document.querySelectorAll(".acardion-faq");
    console.log(acardion);

    const contentActive = document.querySelector(".acardion_content_active-faq");
    contentActive.style.maxHeight = contentActive.scrollHeight + "px";
    acardion.forEach((el) => {
      el.addEventListener("click", function (e) {
        console.log(e.target);
        acardion.forEach((btn) => {
          btn.classList.remove("acardion_show");
        });

        let content = el.nextElementSibling;
        let bgAcardion = el.parentElement;

        console.dir(bgAcardion);
        document.querySelectorAll(".faq-content .bg_active_acardion").forEach((el) => {
          el.classList.remove("acardion_bg_active");
        });
        bgAcardion.classList.add("acardion_bg_active");

        if (content.style.maxHeight) {
          console.dir("11111");
          bgAcardion.classList.remove("acardion_bg_active");
          document.querySelectorAll(".faq-content .acardion__content-faq").forEach((el) => {
            el.style.maxHeight = null;
          });
        } else {
          console.log("22222");

          document.querySelectorAll(".faq-content .acardion__content-faq").forEach((els) => {
            els.style.maxHeight = null;
            el.classList.add("acardion_show");

            content.style.maxHeight = content.scrollHeight + "px";
          });
        }
      });
    });
  }

  function swiper() {
    const swiperPrev = document.querySelector(".swiperPrev");
    const swiperNext = document.querySelector(".swiperNext");
    const reviews = new Swiper(".reviews", {
      // Optional parameters

      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,

       breakpoints: {
    // Если ширина экрана >= 480px
    360: {
      slidesPerView: 1,
      spaceBetween: 10
    },

    864: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // Если ширина экрана >= 768px
    
  }

      // If we need pagination
      //   pagination: {
      //     el: '.swiper-pagination',
      //   },

      //   // Navigation arrows
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },

      //   // And if we need scrollbar
      //   scrollbar: {
      //     el: '.swiper-scrollbar',
      //   },
    });

     const inSama = new Swiper(".inSama", {
      // Optional parameters
        

      loop: true,
      slidesPerView: "auto",
      spaceBetween: 0,
      centeredSlides: false,

      on: {
    init: function () {
      this.update();
    },
  },

  //      breakpoints: {
  //   // Если ширина экрана >= 480px
  //   360: {
  //     slidesPerView: 1,
  //     spaceBetween: 0,
      
  //   },
  //   // Если ширина экрана >= 768px
    
  // }

      // If we need pagination
      //   pagination: {
      //     el: '.swiper-pagination',
      //   },

      //   // Navigation arrows
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },

      //   // And if we need scrollbar
      //   scrollbar: {
      //     el: '.swiper-scrollbar',
      //   },
    });
    swiperPrev.addEventListener("click", () => {
      reviews.slidePrev();
    });

    swiperNext.addEventListener("click", () => {
      reviews.slideNext();
    });
  }

  function addEventListener() {
    const showReviewsBtn = document.querySelectorAll(".show-review");
    const closeReviews = document.querySelectorAll(".close-reviews");

    showReviewsBtn.forEach((item) => {
      item.addEventListener("click", (event) => {
        let element =
          event.target.parentElement.parentElement.parentElement.parentElement
            .nextElementSibling;

        element.classList.add("show-reviews");

        // if(!showReviewsBtn) {
      });
    });

    closeReviews.forEach((item) => {
      item.addEventListener("click", (event) => {
        let element =
          event.target.parentElement.parentElement.parentElement.parentElement;
        console.log(element);

        element.classList.remove("show-reviews");

        // if(!showReviewsBtn) {
      });
    });
  }

  function tabsProduct() {
    const tabsbtn = document.querySelectorAll(".tabs_nav");
    const tabsItem = document.querySelectorAll(".tabs_content");

    tabsbtn.forEach((tabs) => {
      tabs.addEventListener("click", function () {
        const currentBtn = tabs;
        const tabId = currentBtn.getAttribute("data-tab");
        const currentTab = document.querySelector(tabId);
        tabsItem.forEach((item) => {
          item.classList.remove("active_tab");
        });

        tabsbtn.forEach((item) => {
          item.classList.remove("active_tab");
        });
        currentBtn.classList.add("active_tab");
        currentTab.classList.add("active_tab");
      });
    });
  }

  function anhorsLinks() {
    const links = document.querySelectorAll('.mobile-menu a')
    const modalBurger = document.querySelector(".burger-dialog")
    console.log(anhorsLinks);
    
    links.forEach(link => {
      link.addEventListener("click", function(e) {
      e.preventDefault();

      modalBurger.classList.remove("active")
       document.body.style.overflow = 'visible';
    })
    })
    
  }

  

  
  anhorsLinks();

 





// Закрытие по клавише Escape обеспечивается самим тегом <dialog>, 
// но если вам нужно перехватить событие:


  tabsProduct();
  addEventListener();
  swiper();
  changeAcardionFaq();
  changeAcardion();
}

function madiaScreenVideo() {
    const mediaQuery = window.matchMedia('(max-width: 864px)');
    
    
    if(mediaQuery.matches) {
      const video = document.querySelector(".header-video-bg")
      const videoSourse = document.querySelector(".header-video-bg source")
      
        videoSourse.src = './video/videoMobile.mp4';
        video.load();

        
    }

  }


init();

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".header-video-bg");
  
  video.addEventListener("canplay", () => {
    video.classList.add("is-loaded");
    
  });
  
  // Если видео уже закешировано
  if (video.readyState >= 3) {
    video.classList.add("is-loaded");
  }
  madiaScreenVideo();
});


document.addEventListener("visibilitychange", function() {
    const video = document.querySelector(".header-video-bg");
    if (document.visibilityState === "visible" && video.paused) {
        video.play().catch(error => console.log("Автозапуск заблокирован:", error));
    }
});
