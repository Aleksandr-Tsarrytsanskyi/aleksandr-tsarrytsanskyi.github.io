document.addEventListener("DOMContentLoaded", function() {
    document
       .getElementById("scrollButton")
       .addEventListener("click", function () {
         document.querySelector("header").scrollIntoView({
           behavior: "smooth", // Плавная прокрутка
           block: "start", // Прокрутить до начала элемента
         });
       });
})