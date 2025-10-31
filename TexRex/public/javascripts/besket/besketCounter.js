 export function countBeskekProduct() {
       const counterProduct = document.querySelector(".besket_counter .counter");
      const addBesket = document.querySelectorAll(".product_besket .product_besket_cell:first-child > svg");
      const besketCounter = document.querySelector(".besket_counter");
      const removeProduct = document.querySelector(".modal_besket_remove");
   
      let counter = 0;
      
      addBesket.forEach(addProduct => {
        addProduct.addEventListener("click", function() {
          besketCounter.classList.add("besket_counter_show")
          
          if(!addProduct.classList.contains("active")) {
            counter++;
            counterProduct.textContent = counter

          }

            if(addProduct.classList.contains("active")) {
            counter--;
            counterProduct.textContent = counter

          }
         else if(counter <= 0) {
            counter = 0
          }
          
          if(counter == 0) {
            besketCounter.classList.remove("besket_counter_show")
          }
          
         
        })
      })

      removeProduct.addEventListener("click", function() {
        counter--;
        counterProduct.textContent = counter;
        if(counter == 0) {
            besketCounter.classList.remove("besket_counter_show")
          }
      })
    }
