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



    function startCountdown(endDate, elementId) {
  const countdownElement = document.getElementById("date_timer");

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft < 0) {
      countdownElement.innerHTML = "Акция завершена!";
      clearInterval(countdownInterval);
      return;
    }

    
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `До конца акции:  ${hours}ч ${minutes}м ${seconds}с`;
  }

  updateCountdown(); // Обновляем сразу при загрузке страницы
  const countdownInterval = setInterval(updateCountdown, 1000);
}

// Пример использования:
const акцииEndDate = new Date("2030-07-31T23:59:59").getTime(); // Замените на реальную дату окончания акции
startCountdown(акцииEndDate, "date_timer"); // id элемента для отображения таймера

})