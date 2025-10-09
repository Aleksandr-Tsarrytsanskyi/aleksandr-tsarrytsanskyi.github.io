document.addEventListener("DOMContentLoaded", function () {
  const filtr = document.querySelector(".modal_filtr");
  const filtrbtn = document.querySelector(".filtr .right button");
  const modalfiltr = document.querySelector(".modal_catalog_filtr");
  const filtrbtnClick = document.querySelector(".filtr_btn");
  const modalClose = document.querySelector(".modal_catalog_filtr .modal__close");
  const filtrBtn = document.querySelectorAll(".modal_catalog_filtr button");
  
  filtrBtn.forEach(btn => {
    btn.addEventListener("click", function(event) {
  event.target.classList.toggle("active");
  event.target.closest(".reset").classList.add("btn_bg_none")
    })
  })

  filtrbtnClick.addEventListener("click", function() {
    modalfiltr.classList.add("modal_animate")
  })

  modalClose.addEventListener("click", function() {
    modalfiltr.classList.remove("modal_animate")
  })
  
  filtrbtn.addEventListener("click", function () {
    filtr.classList.add("modal_filtr_show");
    setTimeout(() => {
      filtr.classList.remove("modal_filtr_show");
    }, 5000);
  });
  function rangeSlider() {
    var slider = document.getElementById("range_slider");
    const inpu0 = document.getElementById("input-0")
    const inpu1 = document.getElementById("input-1")
    const inputs = [inpu0, inpu1]
    if(slider) {
       noUiSlider.create(slider, {
      start: [0, 200000],
      step: 1,
      connect: true,
      range: {
        min: [0],
        max: [200000],
      },
    });
    }
    slider.noUiSlider.on("update", function(values, handle) {
      inputs[handle].value = Math.round(values[handle])
      
    })
    const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      slider.noUiSlider.set(arr)
    }
    inputs.forEach((el, index) => {
      el.addEventListener("change", (e) => {
        setRangeSlider(index, e.currentTarget.value)
      })
    })
   
  }
  rangeSlider();
  function addpProductsPrice() {
    const productCart = document.querySelectorAll(".products_cart");
    productCart.forEach((cart) => {
      cart.addEventListener("click", function (event) {
        let taget = event.target.closest(".products_cart");
        let price = taget.querySelector(".price span");

        localStorage.setItem("priceproducts", `${price.textContent}`);
      });
    });
  }
  addpProductsPrice();
});
