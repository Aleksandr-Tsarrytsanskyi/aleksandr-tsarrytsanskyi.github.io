document.addEventListener("DOMContentLoaded", function () {
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

  function changeAcardionContent() {
    const acardion = document.querySelectorAll(".questions .acardion");
    console.log(acardion);

    const content = document.querySelectorAll(".questions__content");
    acardion.forEach((el) => {
      el.addEventListener("click", function (e) {
        
        acardion.forEach((item) => {
          item.classList.remove("questions__content_show");
        });
        e.target.classList.add("questions__content_show");

        //   e.target.classList.toggle("questions__content_show")
        let content = el.nextElementSibling;
        console.log(content);

        console.log(content.style.maxHeight);

        if (content.style.maxHeight) {
          console.log("11111");

          document.querySelectorAll(".questions__content").forEach((el) => {
            el.style.maxHeight = null;
          });
        } else {
          document.querySelectorAll(".questions__content").forEach((el) => {
            el.style.maxHeight = null;
            content.style.maxHeight = content.scrollHeight + "px";
          });
        }
      });
    });
  }

  function initCenter() {
    const listSocialCheckbox = document.querySelectorAll(
      ".feedback .menu input[type= 'checkbox']"
    );
   const listSocial = document.querySelectorAll(".list_menu");
   const inputSpec = document.querySelectorAll(".show_connect");
   const inputSpecLabel = document.querySelectorAll(".show_connect label");
    const inputConnection = document.querySelector(".feedback .connection");
    const inputConnectionLabel = document.querySelector(
      ".feedback .connection label"
    );
     const listCheckbox = document.querySelectorAll(
    ".feedback .menu2 input[type= 'checkbox']"
  );
    const policy = document.querySelector(".checkbox_style");
    const listConnection = document.querySelector(".feedback .menu2");
    policy.addEventListener("click", function (e) {
      if (e.target.checked) {
        e.target.style.opacity = "1";
      }
    });
    inputConnection.disabled = false;
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
    inputConnection.addEventListener("click", function () {
      listConnection.classList.toggle("list2_show");
      listConnection.classList.remove("list_hoidden");
      console.log("click");

      listCheckbox.forEach((chekbox) => {
        console.log(chekbox.nextSibling.nextSibling);
        chekbox.addEventListener("click", function (e) {
          chekbox.checked = false;

          if (e.target) {
            console.log("OK");

            inputConnectionLabel.innerHTML =
              e.target.nextSibling.nextSibling.innerHTML;
          }
          listConnection.classList.add("list_hoidden");
        });
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
  isMobileBurgerMenu();
  initCenter();
  changeAcardionContent();
});
