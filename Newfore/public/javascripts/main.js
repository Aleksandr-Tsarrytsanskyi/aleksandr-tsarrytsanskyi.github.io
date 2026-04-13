document.addEventListener("DOMContentLoaded", function() {
    const buttonList = document.querySelector(".project_service_list")
    const listP = document.querySelectorAll(".form_list p")
    const form_list = document.querySelector(".form_list")

    buttonList.addEventListener("click", function() {
        this.classList.toggle("project_service_list_hide")
          form_list.classList.toggle("form_list_show")
    })

    listP.forEach(list => {
        list.addEventListener("click", function() {
            form_list.classList.remove("form_list_show")
            buttonList.classList.remove("project_service_list_hide")
            
            buttonList.textContent = this.textContent
        })
    })


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

const swiperPrev = document.querySelector(".swiperPrev");
  const swiperNext = document.querySelector(".swiperNext");


     swiperPrev.addEventListener("click", () => {
        swiper.slidePrev();

     })

     swiperNext.addEventListener("click", () => {
        swiper.slideNext();

     })

})