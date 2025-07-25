
document.addEventListener("DOMContentLoaded", function() {

const tabs = document.querySelectorAll(".integration .menu li")
const tabsItem = document.querySelectorAll(".integration .tabs_content")
const TabsFeedBack = document.querySelectorAll("#feed_back .soc")
const TabsIputs = document.querySelectorAll("#feed_back .none")
const slider = document.querySelector(".employees .swiper")
const slider1 = document.querySelector(".integration  .swiper")
const slider2 = document.querySelector(".reviews  .swiper");


 if(window.innerWidth <= 1215) {
    slider.classList.remove("slider1")
    slider.classList.add("slider_present1")
  }

   if(window.innerWidth <= 1215) {
    slider1.classList.remove("slider4")
    slider1.classList.add("slider_present2")
  }

    if(window.innerWidth <= 580) {
    slider1.classList.remove("slider_present2")
    slider1.classList.add("slider4_present3")
  }

    if(window.innerWidth <= 1215) {
    slider2.classList.remove("slider5")
    slider2.classList.add("slider5_present5")
  }

    if(window.innerWidth <= 530) {
    slider2.classList.remove("slider5_present5")
    slider2.classList.add("slider5_present6")
  }

   if(window.innerWidth <= 650) {
    slider.classList.remove("slider_present1")
    slider.classList.add("slider1_present2")
  }

tabs.forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        let currentBtnt = item;
        let tabId = currentBtnt.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)
        if(!currentBtnt.classList.contains("active")) {
            tabs.forEach(btn => {
            btn.classList.remove("active")
        })

         tabsItem.forEach(btn => {
            btn.classList.remove("active_content")
        })
        currentBtnt.classList.add("active")
        currentTab.classList.add("active_content")
        }
        
    })
})

TabsFeedBack.forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        let currentBtnt = item;
        let tabId = currentBtnt.getAttribute("data-tab1")
        
        let currentTab = document.querySelector(tabId)
        console.log(currentTab);
        if(!currentBtnt.classList.contains("soc_active")) {
            TabsFeedBack.forEach(btn => {
            btn.classList.remove("soc_active")
        })

         TabsIputs.forEach(btn => {
            btn.classList.remove("soc_input")
        })
        currentBtnt.classList.add("soc_active")
        currentTab.classList.add("soc_input")
        }
        
    })
})


const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 3500px)", ".slider1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      hideOnClick: false
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiperslider-pagination",
      clickable: true,
    },
    // breakpoints: {
    //   1200: {
    //     spaceBetween: 20,
    //   },
    // },
  });

resizableSwiper("(max-width: 3500px)", ".slider2", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    navigation: {
      nextEl: ".s-button-next",
      prevEl: ".s-button-prev",
     
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // breakpoints: {
    //   1200: {
    //     spaceBetween: 20,
    //   },
    // },
  });

  resizableSwiper("(max-width: 3500px)", ".slider3", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    navigation: {
      nextEl: ".s1-button-next",
      prevEl: ".s1-button-prev",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // breakpoints: {
    //   1200: {
    //     spaceBetween: 20,
    //   },
    // },
  });

  resizableSwiper("(max-width: 3500px)", ".slider4", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    // pagination: {
    //   el: ".swiperslider-pagination",
    //   clickable: true,
    // },
    // breakpoints: {
    //   1200: {
    //     spaceBetween: 20,
    //   },
    // },
  });


    resizableSwiper("(max-width: 3500px)", ".slider5", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
  
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // breakpoints: {
    //   1200: {
    //     spaceBetween: 20,
    //   },
    // },
  });


   resizableSwiper("(max-width: 1215px)", ".slider_present1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
//   navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//       hideOnClick: false
//     },
    autoplay: {
        delay: 2000,
      },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // breakpoints: {
    //   1200: {
    //     spaceBetween: 20,
    //   },
    // },
  });

   resizableSwiper("(max-width: 650px)", ".slider1_present2", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
//   navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//       hideOnClick: false
//     },
    autoplay: {
        delay: 2000,
      },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // breakpoints: {
    //   1200: {
    //     spaceBetween: 20,
    //   },
    // },
  });


   resizableSwiper("(max-width: 1215px)", ".slider_present2", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      hideOnClick: false
    },
    autoplay: {
        delay: 2000,
      },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // breakpoints: {
    //   1200: {
    //     spaceBetween: 20,
    //   },
    // },
  });


   resizableSwiper("(max-width: 580px)", ".slider4_present3", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      hideOnClick: false
    },
    autoplay: {
        delay: 2000,
      },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // breakpoints: {
    //   1200: {
    //     spaceBetween: 20,
    //   },
    // },
  });


   resizableSwiper("(max-width: 1215px)", ".slider5_present5", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
//   navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//       hideOnClick: false
//     },
    // autoplay: {
    //     delay: 2000,
    //   },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // breakpoints: {
    //   1200: {
    //     spaceBetween: 20,
    //   },
    // },
  });

   resizableSwiper("(max-width: 530px)", ".slider5_present6", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
//   navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//       hideOnClick: false
//     },
    // autoplay: {
    //     delay: 2000,
    //   },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // breakpoints: {
    //   1200: {
    //     spaceBetween: 20,
    //   },
    // },
  });
 
 AOS.init();

});