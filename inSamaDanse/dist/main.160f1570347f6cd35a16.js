/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/stylesheets/style.css"
/*!**************************************!*\
  !*** ./public/stylesheets/style.css ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://insamadanse/./public/stylesheets/style.css?\n}");

/***/ },

/***/ "./public/javascripts/main.js"
/*!************************************!*\
  !*** ./public/javascripts/main.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/style.css */ \"./public/stylesheets/style.css\");\n\r\n\r\nfunction init() {\r\n\r\n   function modalController({modal, btnOpen, btnClose, time = 300}) {\r\n  const buttonElements = document.querySelectorAll(btnOpen);\r\n  const modalElem = document.querySelector(modal);\r\n  // const blurmain = document.querySelector(\"main\")\r\n  // const blurfooter = document.querySelector(\"footer\")\r\n  // const blurheadr = document.querySelector(\"header\")\r\n    \r\n  const openMOdal = () => {\r\n    modalElem.classList.add(\"active\")\r\n    document.body.style.overflow = 'hidden';\r\n    \r\n    window.addEventListener(\"keydown\", closeModal)\r\n     \r\n    \r\n  };\r\n  buttonElements.forEach((item) => {\r\n    item.addEventListener(\"click\", openMOdal);\r\n  });\r\n  modalElem.addEventListener(\"click\", closeModal);\r\n\r\n  function closeModal(event) {\r\n    const target = event.target;\r\n\r\n    if (target == modalElem || (btnClose && target.closest(btnClose)) || event.code === \"Escape\") {\r\n      modalElem.classList.remove(\"active\");\r\n      document.body.style.overflow = 'visible'; \r\n    \r\n      \r\n      window.removeEventListener(\"keydown\", closeModal)\r\n    }\r\n  }\r\n    \r\n}\r\n\r\nmodalController({\r\n  modal: \".burger-dialog\",\r\n  btnOpen: \".burger-btn\",\r\n  btnClose: \".close-btn\",\r\n  time: \"300\",\r\n});\r\n  function changeAcardion() {\r\n    const acardion = document.querySelectorAll(\".acardion\");\r\n    console.log(acardion);\r\n\r\n    const contentActive = document.querySelector(\".acardion_content_active\");\r\n    contentActive.style.maxHeight = contentActive.scrollHeight + \"px\";\r\n    acardion.forEach((el) => {\r\n      el.addEventListener(\"click\", function (e) {\r\n        console.log(e.target);\r\n        acardion.forEach((btn) => {\r\n          btn.classList.remove(\"acardion_show\");\r\n        });\r\n\r\n        let content = el.nextElementSibling;\r\n        let bgAcardion = el.parentElement;\r\n\r\n        console.dir(bgAcardion);\r\n        document.querySelectorAll(\".faq-course-content .bg_active_acardion\").forEach((el) => {\r\n          el.classList.remove(\"acardion_bg_active\");\r\n        });\r\n        bgAcardion.classList.add(\"acardion_bg_active\");\r\n\r\n        if (content.style.maxHeight) {\r\n          console.dir(\"11111\");\r\n          bgAcardion.classList.remove(\"acardion_bg_active\");\r\n          document.querySelectorAll(\".faq-course-content .acardion__content\").forEach((el) => {\r\n            el.style.maxHeight = null;\r\n          });\r\n        } else {\r\n          console.log(\"22222\");\r\n\r\n          document.querySelectorAll(\".faq-course-content .acardion__content\").forEach((els) => {\r\n            els.style.maxHeight = null;\r\n            el.classList.add(\"acardion_show\");\r\n\r\n            content.style.maxHeight = content.scrollHeight + \"px\";\r\n          });\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  function changeAcardionFaq() {\r\n    const acardion = document.querySelectorAll(\".acardion-faq\");\r\n    console.log(acardion);\r\n\r\n    const contentActive = document.querySelector(\".acardion_content_active-faq\");\r\n    contentActive.style.maxHeight = contentActive.scrollHeight + \"px\";\r\n    acardion.forEach((el) => {\r\n      el.addEventListener(\"click\", function (e) {\r\n        console.log(e.target);\r\n        acardion.forEach((btn) => {\r\n          btn.classList.remove(\"acardion_show\");\r\n        });\r\n\r\n        let content = el.nextElementSibling;\r\n        let bgAcardion = el.parentElement;\r\n\r\n        console.dir(bgAcardion);\r\n        document.querySelectorAll(\".faq-content .bg_active_acardion\").forEach((el) => {\r\n          el.classList.remove(\"acardion_bg_active\");\r\n        });\r\n        bgAcardion.classList.add(\"acardion_bg_active\");\r\n\r\n        if (content.style.maxHeight) {\r\n          console.dir(\"11111\");\r\n          bgAcardion.classList.remove(\"acardion_bg_active\");\r\n          document.querySelectorAll(\".faq-content .acardion__content-faq\").forEach((el) => {\r\n            el.style.maxHeight = null;\r\n          });\r\n        } else {\r\n          console.log(\"22222\");\r\n\r\n          document.querySelectorAll(\".faq-content .acardion__content-faq\").forEach((els) => {\r\n            els.style.maxHeight = null;\r\n            el.classList.add(\"acardion_show\");\r\n\r\n            content.style.maxHeight = content.scrollHeight + \"px\";\r\n          });\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  function swiper() {\r\n    const swiperPrev = document.querySelector(\".swiperPrev\");\r\n    const swiperNext = document.querySelector(\".swiperNext\");\r\n    const reviews = new Swiper(\".reviews\", {\r\n      // Optional parameters\r\n\r\n      loop: true,\r\n      slidesPerView: 3,\r\n      spaceBetween: 10,\r\n\r\n      // If we need pagination\r\n      //   pagination: {\r\n      //     el: '.swiper-pagination',\r\n      //   },\r\n\r\n      //   // Navigation arrows\r\n      //   navigation: {\r\n      //     nextEl: '.swiper-button-next',\r\n      //     prevEl: '.swiper-button-prev',\r\n      //   },\r\n\r\n      //   // And if we need scrollbar\r\n      //   scrollbar: {\r\n      //     el: '.swiper-scrollbar',\r\n      //   },\r\n    });\r\n    swiperPrev.addEventListener(\"click\", () => {\r\n      reviews.slidePrev();\r\n    });\r\n\r\n    swiperNext.addEventListener(\"click\", () => {\r\n      reviews.slideNext();\r\n    });\r\n  }\r\n\r\n  function addEventListener() {\r\n    const showReviewsBtn = document.querySelectorAll(\".show-review\");\r\n    const closeReviews = document.querySelectorAll(\".close-reviews\");\r\n\r\n    showReviewsBtn.forEach((item) => {\r\n      item.addEventListener(\"click\", (event) => {\r\n        let element =\r\n          event.target.parentElement.parentElement.parentElement.parentElement\r\n            .nextElementSibling;\r\n\r\n        element.classList.add(\"show-reviews\");\r\n\r\n        // if(!showReviewsBtn) {\r\n      });\r\n    });\r\n\r\n    closeReviews.forEach((item) => {\r\n      item.addEventListener(\"click\", (event) => {\r\n        let element =\r\n          event.target.parentElement.parentElement.parentElement.parentElement;\r\n        console.log(element);\r\n\r\n        element.classList.remove(\"show-reviews\");\r\n\r\n        // if(!showReviewsBtn) {\r\n      });\r\n    });\r\n  }\r\n\r\n  function tabsProduct() {\r\n    const tabsbtn = document.querySelectorAll(\".tabs_nav\");\r\n    const tabsItem = document.querySelectorAll(\".tabs_content\");\r\n\r\n    tabsbtn.forEach((tabs) => {\r\n      tabs.addEventListener(\"click\", function () {\r\n        const currentBtn = tabs;\r\n        const tabId = currentBtn.getAttribute(\"data-tab\");\r\n        const currentTab = document.querySelector(tabId);\r\n        tabsItem.forEach((item) => {\r\n          item.classList.remove(\"active_tab\");\r\n        });\r\n\r\n        tabsbtn.forEach((item) => {\r\n          item.classList.remove(\"active_tab\");\r\n        });\r\n        currentBtn.classList.add(\"active_tab\");\r\n        currentTab.classList.add(\"active_tab\");\r\n      });\r\n    });\r\n  }\r\n\r\n  function anhorsLinks() {\r\n    const links = document.querySelectorAll('.mobile-menu a')\r\n    const modalBurger = document.querySelector(\".burger-dialog\")\r\n    console.log(anhorsLinks);\r\n    \r\n    links.forEach(link => {\r\n      link.addEventListener(\"click\", function(e) {\r\n      \r\n\r\n      modalBurger.classList.remove(\"active\")\r\n       document.body.style.overflow = 'visible';\r\n    })\r\n    })\r\n    \r\n  }\r\n\r\n  anhorsLinks();\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n// Закрытие по клавише Escape обеспечивается самим тегом <dialog>, \r\n// но если вам нужно перехватить событие:\r\n\r\n\r\n  tabsProduct();\r\n  addEventListener();\r\n  swiper();\r\n  changeAcardionFaq();\r\n  changeAcardion();\r\n}\r\n\r\ninit();\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const video = document.querySelector(\".header-video-bg\");\r\n\r\n  video.addEventListener(\"canplay\", () => {\r\n    video.classList.add(\"is-loaded\");\r\n  });\r\n\r\n  // Если видео уже закешировано\r\n  if (video.readyState >= 3) {\r\n    video.classList.add(\"is-loaded\");\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://insamadanse/./public/javascripts/main.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/javascripts/main.js");
/******/ 	
/******/ })()
;