export function modalController({modal, btnOpen, btnClose, time = 300}) {
  const buttonElements = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

 

  const openMOdal = () => {
    modalElem.classList.add("modal_animate")
   
   
   
    
    window.addEventListener("keydown", closeModal)
  };
  buttonElements.forEach((item) => {
    item.addEventListener("click", openMOdal);
  });
  modalElem.addEventListener("click", closeModal);

  function closeModal(event) {
    const target = event.target;

    if (target == modalElem || (btnClose && target.closest(btnClose)) || event.code === "Escape") {
    modalElem.classList.remove("modal_animate")
      
      window.removeEventListener("keydown", closeModal)
    }
  }
}

