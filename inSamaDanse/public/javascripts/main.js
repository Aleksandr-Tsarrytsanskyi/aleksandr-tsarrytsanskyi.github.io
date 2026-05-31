// import '../stylesheets/style.css';

function init() {
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
      let bgAcardion = el.parentElement

      console.dir(bgAcardion);
document.querySelectorAll(".bg_active_acardion").forEach((el) => {
          el.classList.remove("acardion_bg_active")
        });
          bgAcardion.classList.add("acardion_bg_active")
     

      if (content.style.maxHeight) {
        console.dir("11111");
 bgAcardion.classList.remove("acardion_bg_active")
        document.querySelectorAll(".acardion__content").forEach((el) => {
          el.style.maxHeight = null;
        });

        
      } else {
        console.log("22222");

        document.querySelectorAll(".acardion__content").forEach((els) => {
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
   const reviews = new Swiper('.reviews', {
  // Optional parameters

  loop: true,
  slidesPerView: 3,
   spaceBetween: 10,

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

     })

     swiperNext.addEventListener("click", () => {
        reviews.slideNext();

     })
}


function addEventListener() {
    const showReviewsBtn = document.querySelectorAll(".show-review")
    const closeReviews = document.querySelectorAll(".close-reviews")

    showReviewsBtn.forEach(item => {
        item.addEventListener("click", (event) => {
           let element = event.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling 

           element.classList.add("show-reviews")

            // if(!showReviewsBtn) { 
        })
    })

    closeReviews.forEach(item => {
        item.addEventListener("click", (event) => {
           let element = event.target.parentElement.parentElement.parentElement.parentElement
           console.log(element);
           
            
           element.classList.remove("show-reviews")

            // if(!showReviewsBtn) { 
        })
    })
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

  tabsProduct();
addEventListener();
swiper();

changeAcardion();
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
});
