// import "../stylesheets/style.scss";
function isMobileBurgerMenu() {
  const menuLinks = document.querySelectorAll(".header__link[data-goto]");
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Window: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.IOS() ||
        isMobile.Opera() ||
        isMobile.Window()
      );
    },
  };

  const iconMenu = document.querySelector(".menu_icon");
  const menu = document.querySelector(".header__menu");

  if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle("_lock");
      iconMenu.classList.toggle("_active");
      menu.classList.toggle("_active");
    });
  }

  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", function (e) {
        const menuLink = e.target;

        if (
          menuLink.dataset.goto &&
          document.querySelector(menuLink.dataset.goto)
        ) {
          const gotoBlock = document.querySelector(menuLink.dataset.goto);
          const gotoBlockValue =
            gotoBlock.getBoundingClientRect().top +
            pageYOffset -
            document.querySelector("header").offsetHeight;

          if (iconMenu.classList.contains("_active")) {
            document.body.classList.remove("_lock");
            iconMenu.classList.remove("_active");
            menu.classList.remove("_active");
          }

          window.scrollTo({
            top: gotoBlockValue + 600,
            behavior: "smooth",
          });
          e.preventDefault();
        }
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const listSocial = document.querySelectorAll(".list_menu");
  const listSocialCheckbox = document.querySelectorAll(
    ".list_menu input[type= 'checkbox']"
  );
  const modals = document.querySelector(".modal_window1");
  const modal2 = document.querySelector(".modal2");
  const h1Main = document.querySelector(".professionals h1");
  const listCheckbox = document.querySelectorAll(
    ".feedback .menu2 input[type= 'checkbox']"
  );
  console.log(listSocialCheckbox);

  const listConnection = document.querySelectorAll(".list_menu2");
  const inputSpec = document.querySelectorAll(".show_connect");
  const inputSpecLabel = document.querySelectorAll(".show_connect label");
  const inputConnection = document.querySelectorAll(".connection2");
  const inputConnectionLabel = document.querySelectorAll(".connection_label2");
  console.log(inputSpec);

  const policy = document.querySelector(".checkbox_style");
  const popaplink = document.querySelectorAll(".formats__classes");
  const h2 = document.querySelector(".work h2");
  const text = document.querySelector(".work__text_content");
  console.log(policy);

  const header = document.querySelector(".professionals__postion");
   const slider = document.querySelector(".specialists .swiper") 

  if (window.innerWidth > 935) {
    slider.classList.remove("slider")
    slider.classList.add("slider1")
  }
 
  if (window.innerWidth < 440) {
    h1Main.innerHTML =
      "Человечные <br>профессионалыв <br>области <br>психического <br>здоровья";
    console.log("440");

    header.style.top = "440px !important";
  }

  if (window.innerWidth < 935) {
    h2.innerHTML = "С какими <br>вопросами мы <br>можем помочь";
    text.innerHTML =
      "Поведение ребёнка:<br> агрессивность, замкнутость, <br>неумение выражать эмоции";
  }
  popaplink.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });

  modals.addEventListener("click", function () {
    modal2.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.5ms ease-in-out;
    `;
  });

  policy.addEventListener("click", function (e) {
    if (e.target.checked) {
      e.target.style.opacity = "1";
    }
  });
  inputConnection.forEach((item) => {
    item.disabled = false;
  });
  inputSpec.forEach((item) => {
    item.disabled = false;
  });
  inputSpec.forEach((item) => {
    item.addEventListener("click", function (e) {
      listSocial.forEach((menu) => {
        menu.classList.remove("list_hoidden");
        menu.classList.toggle("list_show");
      });
      console.log("click");

      listSocialCheckbox.forEach((chekbox) => {
        console.log(chekbox.nextSibling.nextSibling);
        chekbox.addEventListener("click", function (e) {
          // chekbox.checked = false;
          listSocialCheckbox.forEach((checkbox) => {
            checkbox.checked = false;
          });
          e.target.checked = true;
          if (e.target) {
            console.log("OK");
            inputSpecLabel.forEach((label) => {
              label.innerHTML = e.target.nextSibling.nextSibling.innerHTML;
            });
          }
          // listSocial.forEach(label => {
          //   label.classList.add("list_hoidden");

          // })
        });
      });
    });
  });
  inputConnection.forEach((item) => {
    item.addEventListener("click", function () {
      listConnection.forEach((list) => {
        list.classList.toggle("list2_show");
        list.classList.remove("list_hoidden");
      });

      console.log("click");

      listCheckbox.forEach((chekbox) => {
        console.log(chekbox.nextSibling.nextSibling);
        chekbox.addEventListener("click", function (e) {
          // chekbox.checked = false;
          listCheckbox.forEach((checkbox) => {
            checkbox.checked = false;
          });
          e.target.checked = true;
          if (e.target) {
            console.log("OK");
            inputConnectionLabel.forEach((checkbox) => {
              checkbox.innerHTML = e.target.nextSibling.nextSibling.innerHTML;
            });
          }
          // listConnection.forEach(list => {
          //   list.classList.add("list_hoidden");
          // })
        });
      });
    });
  });

  function getCheckboxFeedBack() {
    const checkboxes = document.querySelectorAll('input[name="relations"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        // Пример: если выбран Опция 1, то другие должны быть отключены
        if (this.value === "option1" && this.checked) {
          checkboxes.forEach((cb) => {
            if (cb.value !== "option1") {
              cb.checked = false;
            }
          });
        }
        // Можно добавить другую логику для других опций или для случая, когда выбран другой чекбокс
      });
    });
  }

  function modalController({ modal, btnOpen, btnClose, time = 300 }) {
    const buttonElements = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);
    console.log(modal);

    modalElem.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity ${time}ms ease-in-out;
    `;

    const openMOdal = () => {
      modalElem.style.visibility = "visible";
      modalElem.style.opacity = 1;
      window.addEventListener("keydown", closeModal);
    };
    buttonElements.forEach((item) => {
      item.addEventListener("click", openMOdal);
    });
    modalElem.addEventListener("click", closeModal);

    function closeModal(event) {
      const target = event.target;

      if (
        target == modalElem ||
        (btnClose && target.closest(btnClose)) ||
        event.code === "Escape"
      ) {
        modalElem.style.opacity = 0;

        setTimeout(() => {
          modalElem.style.visibility = "hidden";
        }, time);
        window.removeEventListener("keydown", closeModal);
      }
    }
  }
  modalController({
    modal: ".modal1",
    btnOpen: ".modal_window1",
    btnClose: ".modal__close",
  });

  modalController({
    modal: ".modal2",
    btnOpen: ".modal_window2",
    btnClose: ".modal__close",
  });

  getCheckboxFeedBack();
  isMobileBurgerMenu();
  function initMarque(container) {
    const track = container.querySelector(".mergue__track");
    const inner = track.querySelector(".marquee_wrapper__inner");
    const speed = parseInt(container.qetAttribute("data-speed")) || 30;
    const duraction = container.qetAttribute("data-direction") || "left";

    if (!inner.dataset.cloned) {
      const originalCards = Array.from(inner.children);
      const totalWidth = inner.scrollWidth;
      const containerWidth = container.offsetWidth;

      while (totalWidth < containerWidth * 2) {
        originalCards.forEach((card) => {
          inner.appendChild(card.cloneNode(true));
        });
        totalWidth = inner.scrollWidth;
      }
      inner.dataset.cloned = "true";
    }
    const updetaanimation = () => {
      const totalWidth = inner.scrollWidth / 2;
      const duration = totalWidth / speed;

      inner.style.animationName =
        duraction === "right" ? "scroll-right" : "scroll-left";
      inner.animationDuration = `${duration}s`;
    };

    updetaanimation();
    windows.addEventListener("resize", updetaanimation);
  }

  // document.querySelectorAll(".marquee_wrapper_container").forEach(initMarque)
});
