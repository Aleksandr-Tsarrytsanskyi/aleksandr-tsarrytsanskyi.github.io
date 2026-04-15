document.addEventListener("DOMContentLoaded", function() {
const work = new Swiper('.work', {
  // Optional parameters
  slidesPerView: 2.6,
  spaceBetween: 140,
  loop: true,

  // If we need pagination
  
});

const portfolio = new Swiper('.portfolio', {
  // Optional parameters
  loop: true,
   slidesPerView: 3.2,
   spaceBetween: 110,

  // If we need pagination
  
});

const Portfolio_prev_slide = document.querySelector(".Portfolio_prev_slide");
  const Portfolio_next_slide = document.querySelector(".Portfolio_next_slide");
const work_prev_slide = document.querySelector(".work_prev_slide");
  const work_next_slide = document.querySelector(".work_next_slide");

work_prev_slide.addEventListener("click", () => {
        work.slidePrev();

     })

     work_next_slide.addEventListener("click", () => {
        work.slideNext();

     })

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

     function changeAcardion() {
     
  
  const acardion = document.querySelectorAll(".acardion");
  console.log(acardion);
  
  const contentActive = document.querySelector(".acardion_content_active");
   contentActive.style.maxHeight = contentActive.scrollHeight + "px"
  acardion.forEach(el => {
    el.addEventListener("click", function(e) {
      console.log(e.target);
      acardion.forEach(btn => {
            btn.classList.remove("acardion_show")
         })
      
      let content = el.nextElementSibling 
     
      console.dir(content);
      
      console.log(content.style.maxHeight);
      
      if(content.style.maxHeight) {
        console.dir("11111");
        
        document.querySelectorAll(".acardion_content").forEach(el => {
          el.style.maxHeight = null
         
        })
      }
      else {
        console.log("22222");
        
        document.querySelectorAll(".acardion_content").forEach(els => {
          els.style.maxHeight = null
               el.classList.add("acardion_show")
          
          content.style.maxHeight = content.scrollHeight + "px"
        })
      }
    })
  })
  

      }

    changeAcardion()

})