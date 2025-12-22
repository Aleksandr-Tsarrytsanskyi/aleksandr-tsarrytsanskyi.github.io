function scrollToHeaderBtn() {
    const btnScrollHeader = document.querySelector(".footer__up");
    const header = document.querySelector(".header");

    btnScrollHeader.addEventListener("click", function () {
      
      if (header) {
       
        document.body.scrollIntoView({
          behavior: "smooth", // Для плавной прокрутки
          block: "start", // Прокрутить так, чтобы начало элемента было вверху
        });
      }
    });
  }
  scrollToHeaderBtn();