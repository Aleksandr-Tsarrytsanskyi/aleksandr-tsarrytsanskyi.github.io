document.addEventListener("DOMContentLoaded", function () {
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
  const menu = document.querySelector(".menu_body");
  const button = document.querySelector(".pos_z");

  if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle("_lock");
      iconMenu.classList.toggle("_active");
      menu.classList.toggle("_active");
      button.classList.toggle("button_index")
    });
  }

  if (isMobile.any()) {
    document.body.classList.add("_touch");

    let menuArrows = document.querySelectorAll(".menu_arrow");

    if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];

        menuArrow.addEventListener("click", function (e) {
          menuArrow.parentElement.classList.toggle("_active");
        });
      }
    }
  } else {
    document.body.classList.add("_pc");
  }

  const menuLinks = document.querySelectorAll(".menu_link[data-goto]");

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
            top: gotoBlockValue,
            behavior: "smooth",
          });
          e.preventDefault();
        }
      });
    });
  }
});
