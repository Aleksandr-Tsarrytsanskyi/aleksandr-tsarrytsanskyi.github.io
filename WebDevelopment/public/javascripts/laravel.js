document.addEventListener("DOMContentLoaded", function() {
      const laravel = new Swiper('.laravel', {
  // Optional parameters
 
  loop: true,
   spaceBetween: 10,
    slidesPerView: "auto",
    

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

  breakpoints: {
  320: { slidesPerView: "auto", spaceBetween: 10}, // Мобильные
  768: { slidesPerView: "auto", spaceBetween: 10 }, // Планшеты
  1024: { slidesPerView: "auto", spaceBetween: 10 } // Десктоп
}
});




      const process = new Swiper('.mobile_process', {
  // Optional parameters
 
 
   spaceBetween: 10,
    slidesPerView: "auto",
    

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