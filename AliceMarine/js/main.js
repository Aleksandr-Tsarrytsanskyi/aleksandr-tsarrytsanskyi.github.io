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

const topmenu = document.querySelector(".topmenu");
const logo = document.querySelector(".burger_body");
const icon = document.querySelector(".burger_body .burger_menu");
const burgermenu = document.querySelectorAll(".burger_menu ");
const header = document.querySelector(".burger_body");
const header__link = document.querySelectorAll(".header__link");


// topmenuі.addEventListener("mouseover", function(e) {
//   console.log(e.target);
//   console.log("asfasfasf");
  
  
// })

// header__link.forEach((item) => {
//     item.addEventListener("click", function(e) {
//         console.log(e.target);
        
//     })
// })

burgermenu.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("_active");
    topmenu.classList.toggle("active");
    logo.classList.toggle("active");
    // icon.classList.add("active")
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Проверяет, прокручено ли на 200px или больше
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}


  function setParalaxManufactory() {
    const parallax = document.querySelector(".manufactory_img  .parallax");

    if (parallax) {
      const content = document.querySelector(
        ".manufactory_img .parallax__container"
      );
      const parallaxLeft = document.querySelector(
        ".manufactory_img  .images_parallax__left"
      );
      const parallaxCenter = document.querySelector(
        ".manufactory_img  .images_parallax__center"
      );
      const parallaxRight = document.querySelector(
        ".manufactory_img .images_parallax__right"
      );

      const forparallaxCenter = 40;
      const forparallaxLeft = 20;
      const forparallaxRight = 10;

      const speed = 0.05;

      let posiionX = 0,
        positionY = 0;
      let coordXprocent = 0,
        coordYprocent = 0;

      function setMouseParallaxStyle() {
        const distX = coordXprocent - posiionX;
        const distY = coordYprocent - positionY;

        posiionX = posiionX + distX * speed;
        positionY = positionY + distY * speed;

        parallaxCenter.style.cssText = `transform: translate(${
          posiionX / forparallaxCenter
        }%, ${positionY / forparallaxCenter}%);`;
        parallaxLeft.style.cssText = `transform: translate(${
          posiionX / forparallaxLeft
        }%, ${positionY / forparallaxLeft}%);`;
        parallaxRight.style.cssText = `transform: translate(${
          posiionX / forparallaxRight
        }%, ${positionY / forparallaxRight}%);`;
        requestAnimationFrame(setMouseParallaxStyle);
      }

      setMouseParallaxStyle();

      parallax.addEventListener("mousemove", function (e) {
        const parallaxWidth = parallax.offsetWidth;
        const parallaxHeight = parallax.offsetHeight;

        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;

        coordXprocent = (coordX / parallaxWidth) * 100;
        coordYprocent = (coordY / parallaxHeight) * 100;
      });
    }
  }

  function setParalaxHeader() {
    const parallax = document.querySelector(".parallax");

    if (parallax) {
      const content = document.querySelector(
        ".header__banner .parallax__container"
      );
      const parallaxLeft = document.querySelector(
        ".header__banner .images_parallax__left"
      );
      const parallaxCenter = document.querySelector(
        ".header__banner .images_parallax__center"
      );
      const parallaxRight = document.querySelector(
        ".header__banner .images_parallax__right"
      );

      const forparallaxCenter = -40;
      const forparallaxLeft = 20;
      const forparallaxRight = 10;

      const speed = 0.05;

      let posiionX = 0,
        positionY = 0;
      let coordXprocent = 0,
        coordYprocent = 0;

      function setMouseParallaxStyle() {
        const distX = coordXprocent - posiionX;
        const distY = coordYprocent - positionY;

        posiionX = posiionX + distX * speed;
        positionY = positionY + distY * speed;

        parallaxCenter.style.cssText = `transform: translate(${
          posiionX / forparallaxCenter
        }%, ${positionY / forparallaxCenter}%);`;
        parallaxLeft.style.cssText = `transform: translate(${
          posiionX / forparallaxLeft
        }%, ${positionY / forparallaxLeft}%);`;
        parallaxRight.style.cssText = `transform: translate(${
          posiionX / forparallaxRight
        }%, ${positionY / forparallaxRight}%);`;
        requestAnimationFrame(setMouseParallaxStyle);
      }

      setMouseParallaxStyle();

      parallax.addEventListener("mousemove", function (e) {
        const parallaxWidth = parallax.offsetWidth;
        const parallaxHeight = parallax.offsetHeight;

        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;

        coordXprocent = (coordX / parallaxWidth) * 100;
        coordYprocent = (coordY / parallaxHeight) * 100;
      });
    }
  }

  function setParalaxIdea() {
    const parallax = document.querySelector(".idea .parallax");

    if (parallax) {
      const content = document.querySelector(".parallax__container");
      const parallaxLeft = document.querySelector(
        ".idea .images_parallax__left"
      );
      const parallaxCenter = document.querySelector(
        ".idea .images_parallax__center"
      );
      const parallaxRight = document.querySelector(
        ".idea .images_parallax__right"
      );

      const forparallaxCenter = 40;
      const forparallaxLeft = 20;
      const forparallaxRight = 10;

      const speed = 0.05;

      let posiionX = 0,
        positionY = 0;
      let coordXprocent = 0,
        coordYprocent = 0;

      function setMouseParallaxStyle() {
        const distX = coordXprocent - posiionX;
        const distY = coordYprocent - positionY;

        posiionX = posiionX + distX * speed;
        positionY = positionY + distY * speed;

        parallaxCenter.style.cssText = `transform: translate(${
          posiionX / forparallaxCenter
        }%, ${positionY / forparallaxCenter}%);`;
        parallaxLeft.style.cssText = `transform: translate(${
          posiionX / forparallaxLeft
        }%, ${positionY / forparallaxLeft}%);`;
        parallaxRight.style.cssText = `transform: translate(${
          posiionX / forparallaxRight
        }%, ${positionY / forparallaxRight}%);`;
        requestAnimationFrame(setMouseParallaxStyle);
      }

      setMouseParallaxStyle();

      parallax.addEventListener("mousemove", function (e) {
        const parallaxWidth = parallax.offsetWidth;
        const parallaxHeight = parallax.offsetHeight;

        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;

        coordXprocent = (coordX / parallaxWidth) * 100;
        coordYprocent = (coordY / parallaxHeight) * 100;
      });
    }
  }

  function setParalaxTarget() {
    const parallax = document.querySelector(".target .parallax");

    if (parallax) {
      const content = document.querySelector(".parallax__container");
      const parallaxLeft = document.querySelector(
        ".target .images_parallax__left"
      );
      const parallaxCenter = document.querySelector(
        ".target .images_parallax__center"
      );
      const parallaxSLot = document.querySelector(
        ".target .images_parallax__slot2"
      );
      const parallaxSLot2 = document.querySelector(
        ".target .images_parallax__an1"
      );
      const parallaxRight = document.querySelector(
        ".target .images_parallax__right"
      );

      const forparallaxCenter = -280;
      const forparallaxLeft = -100;
      const forparallaxRight = -280;
      const forparallaxSlot = -80;
      const forparallaxSlot2 = -280;

      // const forparallaxCenter = 40;
      // const forparallaxLeft = 20;
      // const forparallaxRight = 60;
      //  const forparallaxSlot = 30;
      // const forparallaxSlot2 = 10;

      const speed = 0.5;

      let posiionX = 0,
        positionY = 0;
      let coordXprocent = 0,
        coordYprocent = 0;

      function setMouseParallaxStyle() {
        const distX = coordXprocent - posiionX;
        const distY = coordYprocent - positionY;

        posiionX = posiionX + distX * speed;
        positionY = positionY + distY * speed;

        parallaxCenter.style.cssText = `transform: translate(${
          posiionX / forparallaxCenter
        }%, ${positionY / forparallaxCenter}%);`;
        parallaxLeft.style.cssText = `transform: translate(${
          posiionX / forparallaxLeft
        }%, ${positionY / forparallaxLeft}%);`;
        parallaxRight.style.cssText = `transform: translate(${
          posiionX / forparallaxRight
        }%, ${positionY / forparallaxRight}%);`;
        parallaxSLot.style.cssText = `transform: translate(${
          posiionX / forparallaxSlot
        }%, ${positionY / forparallaxSlot}%);`;
        parallaxSLot2.style.cssText = `transform: translate(${
          posiionX / forparallaxSlot2
        }%, ${positionY / forparallaxSlot2}%);`;
        requestAnimationFrame(setMouseParallaxStyle);
      }

      setMouseParallaxStyle();

      parallax.addEventListener("mousemove", function (e) {
        const parallaxWidth = parallax.offsetWidth;
        const parallaxHeight = parallax.offsetHeight;

        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;

        coordXprocent = (coordX / parallaxWidth) * 100;
        coordYprocent = (coordY / parallaxHeight) * 100;
      });
    }
  }

  
    const menuLinks = document.querySelectorAll(
      ".header .header__link[data-goto]"
    );

    
        
   

    if (menuLinks.length > 0) {
      menuLinks.forEach((menuLink) => {
        console.log(menuLink);

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

            window.scrollTo({
              top: gotoBlockValue,
              behavior: "smooth",
            });
            e.preventDefault();
          }
        });
      });
    }
 

//   clickLinksAnchor();
  setParalaxIdea();
  setParalaxManufactory();
  setParalaxTarget();
  setParalaxHeader();
});
