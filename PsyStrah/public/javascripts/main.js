document.addEventListener("DOMContentLoaded", function () {
  const start = document.querySelectorAll(".date");

  let date = new Date(); // Текущая дата
  // const data = document.querySelector("#date").innerHTML = date
  date.setDate(date.getDate() + 2); // Добавляем один день
  let arr = date.getDate(); // Выводим измененную дату


   const hoursElement = document.querySelector(".timer .hours ");
  const mintsElement = document.querySelector(".timer .minuts");
  const secondsElement = document.querySelector(".timer .seconds");

    let hours = 1,
     mints = 36,
     second = 10,
     mileseconds = 0
    setInterval(srartTimer, 10)
    
    function srartTimer() {
     mileseconds++
      if(mileseconds > 99) {
        second--
        secondsElement.innerText =  second
        mileseconds = 0
      }
        if(second < 9) {
            secondsElement.innerText = "0" + second
        }
         if(second < 9) {
            secondsElement.innerText =  second
        }
        if (second < 1) {
          console.log("OK");
          
            mints--
           mintsElement.innerText =  mints
           second = 60
           secondsElement.innerText =   second
        }

        if(mints < 9) {
          mintsElement.innerText + mintsElement
        }

        if(mints > 9) {
          mintsElement.innerText + mintsElement
        }

        if(mints < 1) {
          hours--
             hoursElement.innerText =  "0" + hoursElement
          mints = 60
           mintsElement.innerText + mintsElement
        }
    }


  function changeDate() {
    start.forEach((date) => {
      date.innerHTML = arr;
    });
    
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
