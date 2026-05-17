export function modalController({modal, btnOpen, btnClose, time = 300}) {
  const buttonElements = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);
  const blurmain = document.querySelector("main")
  const blurfooter = document.querySelector("footer")
  const blurheadr = document.querySelector("header")
    
  const openMOdal = () => {
    modalElem.classList.add("modal_animate")
    document.body.style.overflow = 'hidden';
    
    window.addEventListener("keydown", closeModal)
     blurmain.setAttribute('inert', '');
     blurfooter.setAttribute('inert', '');
     blurheadr.setAttribute('inert', '');
    
  };
  buttonElements.forEach((item) => {
    item.addEventListener("click", openMOdal);
  });
  modalElem.addEventListener("click", closeModal);

  function closeModal(event) {
    const target = event.target;

    if (target == modalElem || (btnClose && target.closest(btnClose)) || event.code === "Escape") {
      modalElem.classList.remove("modal_animate");
      document.body.style.overflow = 'visible'; 
      blurmain.removeAttribute('inert', '');
     blurfooter.removeAttribute('inert', '');
     blurheadr.removeAttribute('inert', '');
      
      window.removeEventListener("keydown", closeModal)
    }
  }
    
}