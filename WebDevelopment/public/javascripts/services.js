document.addEventListener("DOMContentLoaded",function() {
AOS.init({
   duration: 1000, // Длительность анимации
  mirror: true,  // Повторять анимацию при скролле назад
  once: false 
});
  const swiper = new Swiper('.mobile_work', {
  // Optional parameters
 slidesPerView: 'auto',
    spaceBetween: 20,
   
  

  // If we need pagination


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

})