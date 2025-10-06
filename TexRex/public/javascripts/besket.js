document.addEventListener("DOMContentLoaded", function() {

   
  function swiperSliders() {
       const resizableSwiper1 = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper1;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper1 = new Swiper(className, settings);
      const swiperPrev = document.querySelector(".swiperPrev1");
      const swiperNext = document.querySelector(".swiperNext1");

      swiperPrev.addEventListener("click", () => {
        swiper1.slidePrev();
      });
      swiperNext.addEventListener("click", () => {
        swiper1.slideNext();
      });
      if (callback) {
        callback(swiper1);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper1 !== undefined) swiper1.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

   resizableSwiper1("(max-width: 9020px)", ".recommend_slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    //   navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    //   clickable: true
    // },
    // autoplay: {
    //     delay: 5000,
    //   },
    // pagination: {
    //   el: ".swiperslider-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
  });

  
let swiperThumbs = new Swiper(".mySwiperThumbs", {
       loop: true,
       spaceBetween: 10,
       slidesPerView: 7, // Количество отображаемых миниатюр
       freeMode: true,
       watchSlidesProgress: true,
   });

   // Инициализация основного слайдера
   let swiperMain = new Swiper(".mySwiperMain", {
       loop: true,
       spaceBetween: 10,
      slidesPerView: 1,
       thumbs: {
           swiper: swiperThumbs, // Связываем основной слайдер с миниатюрами
       },
   });

      const swiperPrev = document.querySelector(".swiperPrev");
      const swiperNext = document.querySelector(".swiperNext");

      swiperPrev.addEventListener("click", () => {
        swiperMain.slidePrev();
      });
      swiperNext.addEventListener("click", () => {
        swiperMain.slideNext();
      });
}
swiperSliders()
  
  
  const cart = document.querySelector(".besket")
     cart.addEventListener("click", function(event) {
      if(!event.target.matches(".minus, .plus")) {
        return;
      }

      let currentItems, minusBtn;

      if(event.target.matches(".minus") || event.target.matches(".plus")) {
        const counter = event.target.closest(".besket__quantity");
        console.log(counter);
        
        currentItems = counter.querySelector(".counter");

        minusBtn = counter.querySelector(".minus")
        console.log(minusBtn);
        
      }


      if(event.target.matches(".plus")) {
        currentItems.textContent = ++currentItems.textContent
        minusBtn.removeAttribute("disabled");
        conculateTotalCartValue();
      }

      if(event.target.matches(".minus")) {
        if(parseInt(currentItems.textContent) > 2) {
          currentItems.textContent = --currentItems.textContent
        }
        else if(parseInt(currentItems.textContent) === 2) {
              currentItems.textContent = --currentItems.textContent
                minusBtn.setAttribute('disabled', 'disabled');
            }
             conculateTotalCartValue();
      }
    })

    const conculateTotalCartValue = () => {
    const cartItems = document.querySelectorAll(".besket__products")
    const cartTotalPrice = document.querySelector(".total_price span")
      
    let totalCartValue = 0

    cartItems.forEach(item => {
      const itemCount = item.querySelector(".counter");
        console.log(itemCount);
        
      const itemPrice = item.querySelector(".price span");
        console.log(itemPrice);
        
      const itemTotalPrice = parseInt(itemCount.textContent) * parseInt(itemPrice.textContent.split(" ").join(""))
      console.log(itemTotalPrice);

    //   itemPrice.textContent = formatter.format(itemTotalPrice);

      totalCartValue += itemTotalPrice
      console.log(totalCartValue);
      
      
    })

    cartTotalPrice.textContent = totalCartValue
  }
  conculateTotalCartValue();
  
  const priceProducts = document.querySelectorAll(".besket .price span")
  console.log(priceProducts);
  
  const totalpriceProducts = document.querySelector(".price_products")
priceProducts.forEach(price => {
    const itemTotalPrice = parseInt(price.textContent)
    console.log(itemTotalPrice);
    
    let totalPrice = 0
    totalPrice += itemTotalPrice
    console.log(totalPrice);
    
})
  
})