import { modalController } from "./modal/modal.js";
document.addEventListener("DOMContentLoaded", function() {

modalController({
  modal: ".madal1",
  btnOpen: ".modal_window1",
  btnClose: ".modal__close",
  time: "300",
});
modalController({
  modal: ".madal2",
  btnOpen: ".modal_window2",
  btnClose: ".modal__close",
  time: "300",
});

modalController({
  modal: ".madal3",
  btnOpen: ".modal_window3",
  btnClose: ".modal__close",
  time: "300",
});

modalController({
  modal: ".madal4",
  btnOpen: ".modal_window4",
  btnClose: ".modal__close",
  time: "300",
});

modalController({
  modal: ".madal5",
  btnOpen: ".modal_window5",
  btnClose: ".modal__close",
  time: "300",
});




  const removeproduct = document.querySelectorAll(".besket__products");
const modalRemoveproduct = document.querySelector(".modal_remove_product");
  const modal4 = document.querySelector(".madal4");
  const modal3Btn = document.querySelector(".madal3 .btn");
  const modal3 = document.querySelector(".madal3");
  const modalBack = document.querySelector(".madal4 .back_btn");
  const modalClose = document.querySelectorAll(".modal__close");
  const modal = document.querySelectorAll(".modal");
  const modalform = document.querySelectorAll(".login_account");
  const clearproduct = document.querySelector(".clear_product button");
  const modalclear = document.querySelector(".modal_comparison_clear");

  clearproduct.addEventListener("click", function() {
modalclear.classList.add("modal_comparison_remove_product_show")
  })

  modalform.forEach((submit) => {
    submit.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  });
  modalBack.addEventListener("click", function () {
    modal4.classList.remove("modal_animate");
  });
  modal3Btn.addEventListener("click", function () {
    modal3.classList.remove("modal_animate");
  });

  modal.forEach((el) => {
    el.addEventListener("click", function (event) {
      event.target
        .closest(".modal_back")
        .parentElement.parentElement.classList.remove("modal_animate");
    });
  });

  modalClose.forEach((close) => {
    close.addEventListener("click", function () {
      modal.forEach((modal) => {
        modal.classList.remove("modal_animate");
      });
    });
  });
   removeproduct.forEach(product => {
    product.addEventListener("click", function(e) {
      e.target.closest(".besket__products .remove").parentElement.parentElement.remove();
      if(e.target.closest(".besket__products .remove")) {
        modalRemoveproduct.classList.add("modal_remove_product_show")
      }
    })
   })
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
      1680: {
        spaceBetween: 20,
        slidesPerView: 4.2,
      },
       960: {
        spaceBetween: 20,
        slidesPerView: 3.2,
      },
       768: {
        spaceBetween: 20,
        slidesPerView: 3.2,
      },

       480: {
        spaceBetween: 20,
        slidesPerView: 2.2,
      },

         320: {
        spaceBetween: 20,
        slidesPerView: 2.2,
      },

    },
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