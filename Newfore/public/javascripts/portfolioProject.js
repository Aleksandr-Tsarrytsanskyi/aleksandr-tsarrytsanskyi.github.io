document.addEventListener("DOMContentLoaded", function() {
    const portfolio = new Swiper('.portfolio', {
  // Optional parameters
  loop: true,
   slidesPerView: 3.2,
   spaceBetween: 110,

  // If we need pagination
  
});

const Portfolio_prev_slide = document.querySelector(".Portfolio_prev_slide");
  const Portfolio_next_slide = document.querySelector(".Portfolio_next_slide");

  Portfolio_prev_slide.addEventListener("click", () => {
        portfolio.slidePrev();

     })

     Portfolio_next_slide.addEventListener("click", () => {
        portfolio.slideNext();

     })

     document
       .getElementById("scrollButton")
       .addEventListener("click", function () {
         document.querySelector("header").scrollIntoView({
           behavior: "smooth", // Плавная прокрутка
           block: "start", // Прокрутить до начала элемента
         });
       });
})