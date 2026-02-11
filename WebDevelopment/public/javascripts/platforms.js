document.addEventListener("DOMContentLoaded",function() {
const swiper = new Swiper('.mobile_technology ', {
  // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
  

  // If we need pagination


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

const swiper1 = new Swiper('.mobile_project ', {
  // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 30,
  

  // If we need pagination


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

const swiper2 = new Swiper('.mobile_studies ', {
  // Optional parameters
 slidesPerView: 1,
    spaceBetween: 10,
  

  // If we need pagination


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

})