import "../stylesheets/style.css"
import { changesLanguage } from "./lang.js";

const conatctForm = document.querySelector(".robokassa");
const input = conatctForm.elements;
let { name, phone, message } = input;

function init() {
  const conatctForm = document.querySelector(".robokassa");

  function modalController({ modal, btnOpen, btnClose, time = 300 }) {
    const buttonElements = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);
    // const blurmain = document.querySelector("main")
    // const blurfooter = document.querySelector("footer")
    // const blurheadr = document.querySelector("header")

    const openMOdal = () => {
      modalElem.classList.add("active");
      document.body.style.overflow = "hidden";

      window.addEventListener("keydown", closeModal);
    };
    buttonElements.forEach((item) => {
      item.addEventListener("click", openMOdal);
    });
    modalElem.addEventListener("click", closeModal);

    function closeModal(event) {
      const target = event.target;

      if (
        target == modalElem ||
        (btnClose && target.closest(btnClose)) ||
        event.code === "Escape"
      ) {
        modalElem.classList.remove("active");
        document.body.style.overflow = "visible";

        window.removeEventListener("keydown", closeModal);
      }
    }
  }

  modalController({
    modal: ".modal-buy-course",
    btnOpen: ".courses-btn",
    btnClose: ".close-btn",
    time: "300",
  });

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
        document
          .querySelectorAll(".faq-course-content .bg_active_acardion")
          .forEach((el) => {
            el.classList.remove("acardion_bg_active");
          });
        bgAcardion.classList.add("acardion_bg_active");

        if (content.style.maxHeight) {
          console.dir("11111");
          bgAcardion.classList.remove("acardion_bg_active");
          document
            .querySelectorAll(".faq-course-content .acardion__content")
            .forEach((el) => {
              el.style.maxHeight = null;
            });
        } else {
          console.log("22222");

          document
            .querySelectorAll(".faq-course-content .acardion__content")
            .forEach((els) => {
              els.style.maxHeight = null;
              el.classList.add("acardion_show");

              content.style.maxHeight = content.scrollHeight + "px";
            });
        }
      });
    });
  }

  changesLanguage();

  function changeAcardionFaq() {
    const acardion = document.querySelectorAll(".acardion-faq");
    console.log(acardion);

    const contentActive = document.querySelector(
      ".acardion_content_active-faq",
    );
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
        document
          .querySelectorAll(".faq-content .bg_active_acardion")
          .forEach((el) => {
            el.classList.remove("acardion_bg_active");
          });
        bgAcardion.classList.add("acardion_bg_active");

        if (content.style.maxHeight) {
          console.dir("11111");
          bgAcardion.classList.remove("acardion_bg_active");
          document
            .querySelectorAll(".faq-content .acardion__content-faq")
            .forEach((el) => {
              el.style.maxHeight = null;
            });
        } else {
          console.log("22222");

          document
            .querySelectorAll(".faq-content .acardion__content-faq")
            .forEach((els) => {
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
    //  const swiperPrevInsama = document.querySelector(".swiperPrevInsama");
    // const swiperNextInsama = document.querySelector(".swiperNextInsama");

    const swiperPrevVideo = document.querySelector(".swiperPrevVideo");
    const swiperNextVideo = document.querySelector(".swiperNextVideo");

    const swiperPrevClients = document.querySelector(".swiperPrevClients");
    const swiperNextClients = document.querySelector(".swiperNextClients");
    const reviews = new Swiper(".reviews", {
      // Optional parameters

      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,

      breakpoints: {
        // Если ширина экрана >= 480px
        360: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        864: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // Если ширина экрана >= 768px
      },

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

    const videostudents = new Swiper(".video-students", {
      // Optional parameters

      loop: true,

      a11y: false,
      breakpoints: {
        // Если ширина экрана >= 480px
        360: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        864: {
          slidesPerView: 3,
          spaceBetween: 10,
        },

        1280: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // Если ширина экрана >= 768px
      },

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

    const videostudentsClints = new Swiper(".video-reviews-students", {
      // Optional parameters

      loop: true,
      loopAddBlankSlides: true,

      a11y: false,
      breakpoints: {
        // Если ширина экрана >= 480px
        360: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        864: {
          slidesPerView: 3,
          spaceBetween: 10,
        },

        1280: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // Если ширина экрана >= 768px
      },

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

      direction: "vertical",
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
      speed: 800,

      // effect: 'coverflow',
      // grabCursor: true,
      // centeredSlides: true,
      // slidesPerView: 'auto',
      // coverflowEffect: {
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: true,
      // },

      //     speed: 300,
      //     effect: 'fade', // Включаем эффект
      // fadeEffect: {
      //   crossFade: true // Убирает мерцание текста во время смены
      // },
      autoplay: {
        delay: 4000, // Задержка между слайдами в 3 секунды
        disableOnInteraction: false, // Автопрокрутка продолжится после клика/свайпа
      },

      on: {
        init: function () {
          this.update();
        },

        slideChangeTransitionEnd: function () {
          // Находим элементы внутри активного слайда
          const activeSlide = this.slides[this.activeIndex];
          const elementsToAnimate = activeSlide.querySelectorAll(".inSama h2");

          // Запускаем анимацию с помощью GSAP
          gsap.to(elementsToAnimate, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
          });
        },
        slideChangeTransitionStart: function () {
          // Сбрасываем элементы к исходному положению при начале свайпа
          this.slides.forEach((slide) => {
            gsap.set(slide.querySelectorAll(".inSama h2"), {
              opacity: 0.5,
              y: 50,
            });
          });
        },
      },

           breakpoints: {
        // Если ширина экрана >= 480px
        360: {
          slidesPerView: 1,
          direction: "horizontal",
          spaceBetween: 0,

        },

         864: {
          direction: "vertical",

        },

      }
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

    swiperPrevClients.addEventListener("click", () => {
      videostudentsClints.slidePrev();
    });

    swiperNextClients.addEventListener("click", () => {
      videostudentsClints.slideNext();
    });

    swiperPrevVideo.addEventListener("click", () => {
      videostudents.slidePrev();
    });

    swiperNextVideo.addEventListener("click", () => {
      videostudents.slideNext();
    });

    ////
    swiperPrev.addEventListener("click", () => {
      reviews.slidePrev();
    });

    swiperNext.addEventListener("click", () => {
      reviews.slideNext();
    });

    //  swiperPrevInsama.addEventListener("click", () => {
    //   inSama.slidePrev();
    // });

    // swiperNextInsama.addEventListener("click", () => {
    //   inSama.slideNext();
    // });
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
    const manegerLInks = document.querySelectorAll(".contact-manager-link");
    const links = document.querySelectorAll(".mobile-menu a");
    const modalBurger = document.querySelector(".burger-dialog");
    console.log(anhorsLinks);

    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        modalBurger.classList.remove("active");
        document.body.style.overflow = "visible";
      });
    });
  }

  function playVideoStudents() {
    document.querySelectorAll(".video-container").forEach((container) => {
      const video = container.querySelector(".lazy-video");
      const playBtn = container.querySelector(".play-btn");
      const source = container.querySelector(".video-container source");
      const videosЬMobile = document.querySelectorAll(".lazy-video");

      videosЬMobile.forEach((video) => {
        video.addEventListener(
          "touchstart",
          function (event) {
            event.preventDefault(); // Отменяет стандартное поведение браузера
            // Ваша логика управления
          },
          { passive: false },
        );
      });

      container.addEventListener("click", (e) => {
        e.preventDefault();
        // Находим source и меняем data-src на src
        const sources = document.querySelectorAll(".video-container source");
        const videos = document.querySelectorAll(".lazy-video");

        if (source && source.dataset.src) {
          videos.forEach((v) => {
            if (v !== video) {
              v.firstElementChild.src = "";

              v.load();
              v.play();
              v.controls = false;
              v.nextElementSibling.style.display = "block";
            } else {
              source.src = source.dataset.src;
              video.load();
              video.controls = true;
              playBtn.style.display = "none";
              video.play();
            }
          });
        }

        // Прячем кнопку и запускаем видео
      });
    });
  }

  function playVideoClients() {
    document
      .querySelectorAll(".video-container-clients")
      .forEach((container) => {
        const video = container.querySelector(".lazy-video-clients");
        const playBtn = container.querySelector(".play-btn-clients");
        const source = container.querySelector(
          ".video-container-clients source",
        );
        const videosЬMobile = document.querySelectorAll(".lazy-video-clients");

        videosЬMobile.forEach((video) => {
          video.addEventListener(
            "touchstart",
            function (event) {
              event.preventDefault(); // Отменяет стандартное поведение браузера
              // Ваша логика управления
            },
            { passive: false },
          );
        });

        container.addEventListener("click", (e) => {
          e.preventDefault();
          // Находим source и меняем data-src на src
          const sources = document.querySelectorAll(
            ".video-container-clients source",
          );
          const videos = document.querySelectorAll(".lazy-video-clients");

          if (source && source.dataset.src) {
            videos.forEach((v) => {
              if (v !== video) {
                v.firstElementChild.src = "";

                v.load();
                v.play();
                v.controls = false;
                v.nextElementSibling.style.display = "block";
              } else {
                source.src = source.dataset.src;
                video.load();
                video.controls = true;
                playBtn.style.display = "none";
                video.play();
              }
            });
          }

          // Прячем кнопку и запускаем видео
        });
      });
  }

  playVideoClients();

  function playVideoPreview() {
    document.querySelectorAll(".btn-video-preview").forEach((btn) => {
      // const video = container.querySelector('.lazy-video');
      // const playBtn = container.querySelector('.play-btn');
      const videosЬMobile = document.querySelectorAll(".lazy-preview-video");

      videosЬMobile.forEach((video) => {
        video.addEventListener(
          "touchstart",
          function (event) {
            event.preventDefault(); // Отменяет стандартное поведение браузера
            // Ваша логика управления
          },
          { passive: false },
        );
      });

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        let videoContainer =
          e.target.parentElement.parentElement.parentElement.lastElementChild;
        let video =
          e.target.parentElement.parentElement.parentElement.lastElementChild
            .firstElementChild.firstElementChild;
        let source =
          e.target.parentElement.parentElement.parentElement.lastElementChild
            .firstElementChild.firstElementChild.firstElementChild;
        let videoPreviuw = document.querySelectorAll(".video-preview");
        const btn = document.querySelectorAll(".btn-video-preview");

        e.target.classList.add("close-video");

        // btn.forEach(el => {
        //   el.textContent = "Видео превью"
        // })
        // e.target.textContent = 'Закрыть'

        videoPreviuw.forEach((container) => {
          container.classList.remove("video-preview-show");
        });

        videoContainer.classList.add("video-preview-show");
        closeVideoPreview();

        // Находим source и меняем data-src на src
        // const sources = document.querySelectorAll('.video-container source');
        const videos = document.querySelectorAll(".lazy-preview-video");

        if (source && source.dataset.src) {
          videos.forEach((v) => {
            if (v !== video) {
              v.firstElementChild.src = "";

              v.load();
              v.play();
              v.controls = false;
            } else {
              source.src = source.dataset.src;
              video.load();
              video.controls = true;
              video.play();
            }
          });
        }

        // Прячем кнопку и запускаем видео
      });
    });
  }

  function closeVideoPreview() {
    const btnclosevideo = document.querySelectorAll(".close-video");

    btnclosevideo.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        let videoContainer =
          e.target.parentElement.parentElement.parentElement.lastElementChild;
        let video =
          e.target.parentElement.parentElement.parentElement.lastElementChild
            .firstElementChild.firstElementChild;
        let source =
          e.target.parentElement.parentElement.parentElement.lastElementChild
            .firstElementChild.firstElementChild.firstElementChild;
        e.target.classList.remove("close-video");
        // e.target.textContent = "Видео превью"
        videoContainer.classList.remove("video-preview-show");
        source.src = "";
        video.load();
        video.controls = false;
        video.play();
      });
    });
  }

  playVideoPreview();
  playVideoStudents();

  conatctForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let error = validateFeddBack();

    if (error === 0) {
      this.action = "https://robokassa.ru";
      this.submit();
    }
    console.log(error);
  });

  //  phone.addEventListener("input", (e) => {
  //        let value = e.target.value.replace(/\D/g, '');

  //          value = value.substring(0, 10);

  //            if (value.length > 6) {
  //       value = value.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1-$2-$3-$4');
  //   } else if (value.length > 3) {
  //       value = value.replace(/(\d{3})(\d{1,3})/, '$1-$2');
  //   }

  //    e.target.value = value;
  //     })

  function validateFeddBack() {
    let error = 0;

    let regExpphone = /^\d{3}-\d{3}-\d{2}-\d{2}$/;
    const regExpPhone = new RegExp(regExpphone);
    if (name.value.length < 3) {
      erorrInput(name, "input_error");
      error++;
    } else {
      removeErrorInput(name, "input_error");
    }

    if (phone.value.length > 9 && phone.value.length < 20) {
      removeErrorInput(phone, "input_error");
    } else {
      erorrInput(phone, "input_error");
      error++;
    }

    if (message.value.length < 10) {
      erorrInput(message, "input_error");
      error++;
    } else {
      removeErrorInput(message, "input_error");
    }

    return error;
  }

  function erorrInput(input, addclass) {
    input.classList.add(addclass);
  }

  function removeErrorInput(input, removeclass) {
    input.classList.remove(removeclass);
  }
  // Закрытие по клавише Escape обеспечивается самим тегом <dialog>,
  // но если вам нужно перехватить событие:

  anhorsLinks();
  tabsProduct();
  addEventListener();
  swiper();
  changeAcardionFaq();
  changeAcardion();
}

function madiaScreenVideo() {
  const mediaQuery = window.matchMedia("(max-width: 864px)");
  const button = document.getElementById("soundToggle");
  const video = document.querySelector(".header-video-bg");
  if (mediaQuery.matches) {
    const video = document.querySelector(".header-video-bg");
    const videoSourse = document.querySelector(".header-video-bg source");
    video.pause();
    videoSourse.src = "./video/videoMobile.mp4";
    video.load();
    video.play();
  }

  button.addEventListener("click", () => {
    if (video.muted) {
      video.muted = false;
      button.classList.add("soundToggle-off");
    } else {
      video.muted = true;
      button.classList.remove("soundToggle-off");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  madiaScreenVideo();
});

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

// document.addEventListener("visibilitychange", function() {
//     const video = document.querySelector(".header-video-bg");
//     if (document.visibilityState === "visible" && video.paused) {

//         video.play().catch(error => console.log("Автозапуск заблокирован:", error));
//     }
// });
