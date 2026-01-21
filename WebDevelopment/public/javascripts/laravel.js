document.addEventListener("DOMContentLoaded", function() {
      const laravel = new Swiper('.laravel', {
  // Optional parameters
 
  loop: true,
   spaceBetween: 10,
    slidesPerView: 3,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
      draggable: true,
  },
});
})