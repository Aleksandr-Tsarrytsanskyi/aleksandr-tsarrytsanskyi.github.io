document.addEventListener("DOMContentLoaded", function() {


function swiperSliders() {
       const resizableSwiper1 = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper1;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper1 = new Swiper(className, settings);
      const swiperPrev = document.querySelector(".swiperPrev1");
      const swiperNext = document.querySelector(".swiperNext1");

      swiperPrev.addEventListener("click", () => {
        swiper1.slidePrev();
      });
      swiperNext.addEventListener("click", () => {
        swiper1.slideNext();
      });
      if (callback) {
        callback(swiper1);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper1 !== undefined) swiper1.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

   resizableSwiper1("(max-width: 9020px)", ".recommend_slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    //   navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    //   clickable: true
    // },
    // autoplay: {
    //     delay: 5000,
    //   },
    // pagination: {
    //   el: ".swiperslider-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
  });

  
let swiperThumbs = new Swiper(".mySwiperThumbs", {
       loop: true,
       spaceBetween: 10,
       slidesPerView: 7, // Количество отображаемых миниатюр
       freeMode: true,
       watchSlidesProgress: true,
   });

   // Инициализация основного слайдера
   let swiperMain = new Swiper(".mySwiperMain", {
       loop: true,
       spaceBetween: 10,
      slidesPerView: 1,
       thumbs: {
           swiper: swiperThumbs, // Связываем основной слайдер с миниатюрами
       },
   });

      const swiperPrev = document.querySelector(".swiperPrev");
      const swiperNext = document.querySelector(".swiperNext");

      swiperPrev.addEventListener("click", () => {
        swiperMain.slidePrev();
      });
      swiperNext.addEventListener("click", () => {
        swiperMain.slideNext();
      });
}
swiperSliders()

function tabsProduct() {
  const tabsbtn = document.querySelectorAll(".description__tabs .tabs_nav_btn");
  const tabsItem = document.querySelectorAll(".description__tabs_content");

  tabsbtn.forEach(tabs => {
    tabs.addEventListener("click", function() {
      const currentBtn = tabs;
      const tabId = currentBtn.getAttribute("data-tab")
      const currentTab = document.querySelector(tabId)
      tabsItem.forEach(item => {
         item.classList.remove("active")
      })

      tabsbtn.forEach(item => {
         item.classList.remove("active")
      })
      currentBtn.classList.add("active")
      currentTab.classList.add("active")
    })
  })
}
tabsProduct();

function cartData() {
  const cart = document.querySelector(".description__item .basket")

  
  cart.addEventListener("click", function(event) {
      if(!event.target.matches(".minus, .plus")) {
        return;
      }
      console.log(event.target);
      
      let currentItems, minusBtn;

      if(event.target.matches(".minus") || event.target.matches(".plus")) {
        const counter = event.target.closest(".description__quantity");
        console.log(counter);
        
        currentItems = counter.querySelector(".counter");

        minusBtn = counter.querySelector(".minus")
        console.log(minusBtn);
        
      }


      if(event.target.matches(".plus")) {
        currentItems.textContent = ++currentItems.textContent
        minusBtn.removeAttribute("disabled");
        conculateTotalCartValue();
      }

      if(event.target.matches(".minus")) {
        if(parseInt(currentItems.textContent) > 2) {
          currentItems.textContent = --currentItems.textContent
        }
        else if(parseInt(currentItems.textContent) === 2) {
              currentItems.textContent = --currentItems.textContent
                minusBtn.setAttribute('disabled', 'disabled');
            }
             conculateTotalCartValue();
      }
    })

     const conculateTotalCartValue = () => {
    const cartItems = document.querySelector(".description__item .basket")
    const cartTotalPrice = document.querySelector(".description_price .price span")

    let totalCartValue = 0

  
      const itemCount = document.querySelector(".description__quantity .counter");

      const itemPrice = localStorage.getItem("priceproducts")

      const itemTotalPrice = parseInt(itemCount.textContent) * parseInt(itemPrice.split(" ").join(""))
      console.log(itemTotalPrice);

    //  itemPrice.textContent = formatter.format(itemTotalPrice);

      totalCartValue += itemTotalPrice
      
   

    cartTotalPrice.textContent = totalCartValue;
  }
}

cartData();

  // let swiper2;
  //     const resizableSwiper2 = (
  //   breakpoint,
  //   swiperClass,
  //   swiperSettings,
  //   callback
  // ) => {

  //   breakpoint = window.matchMedia(breakpoint);

  //   const enableSwiper = function (className, settings) {
  //     swiper2 = new Swiper(className, settings);
  //   //   const swiperPrev = document.querySelector(".swiperPrev1");
  //   //   const swiperNext = document.querySelector(".swiperNext1");

  //   //   swiperPrev.addEventListener("click", () => {
  //   //     swiper2.slidePrev();
  //   //   });
  //   //   swiperNext.addEventListener("click", () => {
  //   //     swiper2.slideNext();
  //   //   });
  //   //   if (callback) {
  //   //     callback(swiper2);
  //   //   }
  //   };

  //   const checker = function () {
  //     if (breakpoint.matches) {
  //       return enableSwiper(swiperClass, swiperSettings);
  //     } else {
  //       if (swiper2 !== undefined) swiper2.destroy(true, true);
  //       return;
  //     }
  //   };

  //   breakpoint.addEventListener("change", checker);
  //   checker();
  // };

  //  resizableSwiper2("(max-width: 9020px)", ".recommend_slider_min", {
  //   loop: true,
  //   spaceBetween: 10,
  //   slidesPerView: 7,
  //   freeMode: true,
  //   // pagination: {
  //   //   el: ".swiper-pagination",
  //   //   clickable: true,
  //   // },
  //   //   navigation: {
  //   //   nextEl: '.swiper-button-next',
  //   //   prevEl: '.swiper-button-prev',
  //   //   clickable: true
  //   // },
  //   // autoplay: {
  //   //     delay: 5000,
  //   //   },
  //   // pagination: {
  //   //   el: ".swiperslider-pagination",
  //   //   clickable: true,
  //   // },
  //   breakpoints: {
  //     1200: {
  //       spaceBetween: 20,
  //     },
  //   },
  // });


  //       const resizableSwiper = (
  //   breakpoint,
  //   swiperClass,
  //   swiperSettings,
  //   callback
  // ) => {
  //   let swiper;

  //   breakpoint = window.matchMedia(breakpoint);

  //   const enableSwiper = function (className, settings) {
  //     swiper = new Swiper(className, settings);
  //     const swiperPrev = document.querySelector(".swiperPrev");
  //     const swiperNext = document.querySelector(".swiperNext");

  //     swiperPrev.addEventListener("click", () => {
  //       swiper.slidePrev();
  //     });
  //     swiperNext.addEventListener("click", () => {
  //       swiper.slideNext();
  //     });
  //     if (callback) {
  //       callback(swiper);
  //     }
  //   };

  //   const checker = function () {
  //     if (breakpoint.matches) {
  //       return enableSwiper(swiperClass, swiperSettings);
  //     } else {
  //       if (swiper !== undefined) swiper.destroy(true, true);
  //       return;
  //     }
  //   };

  //   breakpoint.addEventListener("change", checker);
  //   checker();
  // };

  //  resizableSwiper("(max-width: 9020px)", ".slider_description", {
  //   loop: true,
  //   spaceBetween: 10,
  //   slidesPerView: 1,
  //   freeMode: true,
  //   // pagination: {
  //   //   el: ".swiper-pagination",
  //   //   clickable: true,
  //   // },
  //   //   navigation: {
  //   //   nextEl: '.swiper-button-next',
  //   //   prevEl: '.swiper-button-prev',
  //   //   clickable: true
  //   // },
  //   // autoplay: {
  //   //     delay: 5000,
  //   //   },
  //   // pagination: {
  //   //   el: ".swiperslider-pagination",
  //   //   clickable: true,
  //   // },
  //   breakpoints: {
  //     1200: {
  //       spaceBetween: 20,
  //     },
  //     thumbs: {
  //       swiper: {
  //           el: ".recommend_slider_min",
             
  //       }
  //    }
  //   },
  // });


  
})