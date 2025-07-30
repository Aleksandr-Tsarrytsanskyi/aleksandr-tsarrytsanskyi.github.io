document.addEventListener("DOMContentLoaded", function() {
    const start = document.querySelector(".header_title_top__date")
    let date = new Date(); // Текущая дата
    // const data = document.querySelector("#date").innerHTML = date
     date.setDate(date.getDate() + 2); // Добавляем один день
    let arr = date.getDate(); // Выводим измененную дату
    start.innerHTML = arr;


    // document.addEventListener("scroll", function() {
    //     if(scrollY >= 500) {
    //         mainBtn.classList.remove("hidden")
    //     }
    //     else {
    //         mainBtn.classList.add("hidden");
    //     }
    // })

    // mainBtn.addEventListener("click", function() {
    //     window.scrollTo({
    //         top: document.documentElement.scrollHeight,
    //         left: 0,
    //         behavior: "smooth"
    //     })
    // })

})