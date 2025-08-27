document.addEventListener("DOMContentLoaded", function() {
            const swiper = new Swiper('.swiper', {
  // Optional parameters
 slidesPerView: 3,
  loop: true,

  // If we need pagination
  breakpoints: {
            // Для экранов шириной до 768px
            935: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            // // Для экранов шириной до 320px
            // 320: {
            //     slidesPerView: 1,
            //     spaceBetween: 20
            // },
        },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true
  },

  // And if we need scrollbar
 
});


    const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
 slidesPerView: 3,
  loop: true,

  // If we need pagination
  // breakpoints: {
  //           // Для экранов шириной до 768px
  //           935: {
  //               slidesPerView: 1,
  //               spaceBetween: 15
  //           },
  //           // Для экранов шириной до 320px
  //           320: {
  //               slidesPerView: 1,
  //               spaceBetween: 20
  //           },

  //       },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true
  },

  // And if we need scrollbar
 
});



})