document.addEventListener("DOMContentLoaded", function () {
  const start = document.querySelectorAll(".date");
  const hours = document.querySelector(
    "#timer-text-8c68798e8a8c3bf4110503e56dd68f07-hours"
  );
  const minutes = document.querySelector(
    "#timer-text-8c68798e8a8c3bf4110503e56dd68f07-minutes"
  );
  let date = new Date(); // Текущая дата
  // const data = document.querySelector("#date").innerHTML = date
  date.setDate(date.getDate() + 2); // Добавляем один день
  let arr = date.getDate(); // Выводим измененную дату

  function changeDate() {
    start.forEach((date) => {
      date.innerHTML = arr;
    });
    hours.innerHTML = "годин";
    minutes.innerHTML = "хвилин";
  }

  function TimeCount() {
    let date = new Date("2022-03-25  11:13:00");
    console.log(date);
  }

  function getAcardion() {
    const acardion = document.querySelectorAll(".acardion");
    const arrow = document.querySelectorAll(".arrow");
    console.log(acardion);

    const content = document.querySelectorAll(".footer .content");
    acardion.forEach((el) => {
      el.addEventListener("click", function (e) {
        console.log(e.target);

        let content = el.lastElementChild ;
        console.log(content);
       
       
        el.children[0].children[1].children[0].classList.toggle("arrow_active")
        console.log(content.style.maxHeight);

        if (content.style.maxHeight) {
          console.log("11111");
        //    arrow.classList.remove("arrow_active")
        //   arrow.classList.add("arrow")
          document.querySelectorAll(".footer .content").forEach((el) => {
            el.style.maxHeight = null;
          });
        } else {
          document.querySelectorAll(".footer .content").forEach((el) => {
        //    arrow.classList.remove("arrow")
        //      arrow.classList.add("arrow_active")
            el.style.maxHeight = null;
            content.style.maxHeight = content.scrollHeight + "px";
          });
        }
      });
    });
  }
  getAcardion()
  changeDate();
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

  
});
