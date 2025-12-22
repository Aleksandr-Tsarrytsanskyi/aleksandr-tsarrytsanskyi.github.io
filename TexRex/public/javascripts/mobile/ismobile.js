document.addEventListener("DOMContentLoaded", function () {
  function menuBurger() {
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

    if (isMobile.any()) {
      document.body.classList.add("_touch");
    } else {
      document.body.classList.add("_pc");
    }

    const iconMenu = document.querySelector(".menu_icon");
    const menu = document.querySelector(".header .topmenu");

    if (iconMenu) {
      iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menu.classList.toggle("_active");
      });
    }
  }

  menuBurger();
});
