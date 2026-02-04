document.addEventListener("DOMContentLoaded",function() {
const swiper = new Swiper('.mobile_values', {
  // Optional parameters
     slidesPerView: 1.7,
    spaceBetween: 10,
    loop: true,

  // If we need pagination


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

})