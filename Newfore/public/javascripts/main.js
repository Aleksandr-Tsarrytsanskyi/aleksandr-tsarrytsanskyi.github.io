document.addEventListener("DOMContentLoaded", function() {
    const buttonList = document.querySelector(".project_service_list")
    const listP = document.querySelectorAll(".form_list p")
    const form_list = document.querySelector(".form_list")
    const project_list = document.querySelector(".project_list")
    const project_listP = document.querySelectorAll(".project_list p")
    const project_btn = document.querySelector(".project_btn")

    buttonList.addEventListener("click", function() {
        this.classList.toggle("project_service_list_hide")
          form_list.classList.toggle("form_list_show")
    })

     project_btn.addEventListener("click", function() {
        this.classList.toggle("project_btn_show")
          project_list.classList.toggle("project_list_show")
    })

    listP.forEach(list => {
        list.addEventListener("click", function() {
            form_list.classList.remove("form_list_show")
            buttonList.classList.remove("project_service_list_hide")
            
            buttonList.textContent = this.textContent
        })
    })


    project_listP.forEach(list => {
        list.addEventListener("click", function() {
            project_list.classList.remove("project_list_show")
            project_btn.classList.remove("project_btn_show")
            
            project_btn.textContent = this.textContent
        })
    })

const portfolio = new Swiper('.portfolio', {
  // Optional parameters
  loop: true,
   slidesPerView: 3.2,
   spaceBetween: 10,

  // If we need pagination
  
});



    const swiper = new Swiper('.hamilton', {
  // Optional parameters

  loop: true,
   slidesPerView: "auto",
     

  // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

  // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});

const work = new Swiper('.work', {
  // Optional parameters
  slidesPerView: 2.6,
  spaceBetween: 10,
  loop: true,

  // If we need pagination
  
});



const swiperPrev = document.querySelector(".swiperPrev");
  const swiperNext = document.querySelector(".swiperNext");
const work_prev_slide = document.querySelector(".work_prev_slide");
  const work_next_slide = document.querySelector(".work_next_slide");
  const Portfolio_prev_slide = document.querySelector(".Portfolio_prev_slide");
  const Portfolio_next_slide = document.querySelector(".Portfolio_next_slide");

     swiperPrev.addEventListener("click", () => {
        swiper.slidePrev();

     })

     swiperNext.addEventListener("click", () => {
        swiper.slideNext();

     })

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

