document.addEventListener("DOMContentLoaded", function() {
    const start = document.querySelectorAll(".date")
    const hours = document.querySelector("#timer-text-8c68798e8a8c3bf4110503e56dd68f07-hours")
    const minutes = document.querySelector("#timer-text-8c68798e8a8c3bf4110503e56dd68f07-minutes")
    let date = new Date(); // Текущая дата
    // const data = document.querySelector("#date").innerHTML = date
     date.setDate(date.getDate() + 2); // Добавляем один день
    let arr = date.getDate(); // Выводим измененную дату
    
    
    
    function changeDate() {
        start.forEach(date => {
            date.innerHTML = arr;
        })
         hours.innerHTML ="годин"
        minutes.innerHTML ="хвилин"
    }

    function TimeCount() {
         let date = new Date("2022-03-25  11:13:00",);
         console.log(date);
         
    }
    changeDate()
    TimeCount();

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