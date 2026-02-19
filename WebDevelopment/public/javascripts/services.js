document.addEventListener("DOMContentLoaded",function() {
AOS.init();
  const swiper = new Swiper('.mobile_work', {
  // Optional parameters
 slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
  

  // If we need pagination


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

})