document.addEventListener("DOMContentLoaded", function() {
   

    
       

        function splashScreen() {
            const splashScreen = document.querySelector('.splash');
        const content = document.querySelector('.container');

      // Анимация для скрытия splash screen
       setTimeout(() => {
         splashScreen.classList.add("splashScreen_show")
       }, 1000)
    

      // Показываем контент после завершения анимации
      splashScreen.addEventListener('transitionend', function() {
        setTimeout(() => {
          splashScreen.remove(); // Удаляем splash screen
        }, 1000)
        content.style.display = 'block'; // Показываем контент
      }, { once: true });
        }

        splashScreen();
    
})