document.addEventListener("DOMContentLoaded", function() {
    const clients = new Swiper('.clients', {
  // Optional parameters
  slidesPerView: 3.6,
  spaceBetween: 180,
  loop: true,

  // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});

const project1 = new Swiper('.project', {
  // Optional parameters
   slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,

});

const project2 = new Swiper('.project2', {
  // Optional parameters
   slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,

});
const project3 = new Swiper('.project3', {
  // Optional parameters
   slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,

});

const project4 = new Swiper('.project4', {
  // Optional parameters
   slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,

});

const project5 = new Swiper('.project5', {
  // Optional parameters
   slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,

});

const project6 = new Swiper('.project6', {
  // Optional parameters
   slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,

});

const project7 = new Swiper('.project7', {
  // Optional parameters
   slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,

});
const project8 = new Swiper('.project8', {
  // Optional parameters
   slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,

});
const project9 = new Swiper('.project9', {
  // Optional parameters
   slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,

});

const project_slide_prev = document.querySelector(".project_slide_prev");
  const project_next_prev = document.querySelector(".project_next_prev");
const project2_slide_prev = document.querySelector(".project2_slide_prev");
  const project2_next_prev = document.querySelector(".project2_next_prev");
  const project3_slide_prev = document.querySelector(".project3_slide_prev");
  const project3_next_prev = document.querySelector(".project3_next_prev");
    const project4_slide_prev = document.querySelector(".project4_slide_prev");
  const project4_next_prev = document.querySelector(".project4_next_prev");
   const project5_slide_prev = document.querySelector(".project5_slide_prev");
  const project5_next_prev = document.querySelector(".project5_next_prev");
   const project6_slide_prev = document.querySelector(".project6_slide_prev");
  const project6_next_prev = document.querySelector(".project6_next_prev");
   const project7_slide_prev = document.querySelector(".project7_slide_prev");
  const project7_next_prev = document.querySelector(".project7_next_prev");
  const project8_slide_prev = document.querySelector(".project8_slide_prev");
  const project8_next_prev = document.querySelector(".project8_next_prev");
   const project9_slide_prev = document.querySelector(".project9_slide_prev");
  const project9_next_prev = document.querySelector(".project9_next_prev");
  project_slide_prev.addEventListener("click", () => {
        project1.slidePrev();

     })

     project_next_prev.addEventListener("click", () => {
        project1.slideNext();

     })
 
  project2_slide_prev.addEventListener("click", () => {
        project2.slidePrev();

     })

     project2_next_prev.addEventListener("click", () => {
        project2.slideNext();

     })

     project3_slide_prev.addEventListener("click", () => {
        project3.slidePrev();

     })

     project3_next_prev.addEventListener("click", () => {
        project3.slideNext();

     })
     project4_slide_prev.addEventListener("click", () => {
        project4.slidePrev();

     })

     project4_next_prev.addEventListener("click", () => {
        project4.slideNext();

     })
     project5_slide_prev.addEventListener("click", () => {
        project5.slidePrev();

     })

     project5_next_prev.addEventListener("click", () => {
        project5.slideNext();

     })

     project6_slide_prev.addEventListener("click", () => {
        project6.slidePrev();

     })

     project6_next_prev.addEventListener("click", () => {
        project6.slideNext();

     })
     project7_slide_prev.addEventListener("click", () => {
        project7.slidePrev();

     })

     project7_next_prev.addEventListener("click", () => {
        project7.slideNext();

     })
     project8_slide_prev.addEventListener("click", () => {
        project8.slidePrev();

     })

     project8_next_prev.addEventListener("click", () => {
        project8.slideNext();

     })
     project9_slide_prev.addEventListener("click", () => {
        project9.slidePrev();

     })

     project9_next_prev.addEventListener("click", () => {
        project9.slideNext();

     })



const work_prev_slide = document.querySelector(".work_prev_slide");
  const work_next_slide = document.querySelector(".work_next_slide");

  work_prev_slide.addEventListener("click", () => {
        clients.slidePrev();

     })

     work_next_slide.addEventListener("click", () => {
        clients.slideNext();

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