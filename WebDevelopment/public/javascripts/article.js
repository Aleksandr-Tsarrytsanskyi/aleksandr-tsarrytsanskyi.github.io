document.addEventListener("DOMContentLoaded",function() {
const swiper = new Swiper('.mobile_articel', {
  // Optional parameters
 slidesPerView: 1.1,
    spaceBetween: 20,
  

  // If we need pagination


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

})