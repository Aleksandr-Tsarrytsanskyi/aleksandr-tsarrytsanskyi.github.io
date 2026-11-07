 function changeCounterProductBesket() {
  const counterProduct = document.querySelector(".header__besket_counter .counter");
  const addBesket = document.querySelectorAll(
    ".card__besket_add"
  );
  const besketCounter = document.querySelector(".header__besket_counter");
//   const removeProduct = document.querySelector(".modal_besket_remove");

  let counter = 0;

  addBesket.forEach((addProduct) => {
    addProduct.addEventListener("click", function (e) {
      e.preventDefault();
      besketCounter.classList.add("besket_counter_show");

      if (!addProduct.classList.contains("active")) {
        counter++;
        counterProduct.textContent = counter;
      }

      if (addProduct.classList.contains("active")) {
        counter--;
        counterProduct.textContent = counter;
      }
      if (counter <= 0) {
        counter = 0;
      }

      if (counter == 0) {
        besketCounter.classList.remove("besket_counter_show");
      }
    });
  });

//   removeProduct.addEventListener("click", function () {
//     counter--;
//     counterProduct.textContent = counter;
//     if (counter == 0) {
//       besketCounter.classList.remove("besket_counter_show");
//     }
//   });
}
