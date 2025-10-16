document.addEventListener("DOMContentLoaded", function() {
   

    
       

        function splashScreen() {
            const splashScreen = document.querySelector('.splash');
        const content = document.querySelector('.container');

      // Анимация для скрытия splash screen
      splashScreen.style.transition = 'opacity 0.5s ease-out';
      splashScreen.style.opacity = '0';

      // Показываем контент после завершения анимации
      splashScreen.addEventListener('transitionend', function() {
        splashScreen.remove(); // Удаляем splash screen
        content.style.display = 'block'; // Показываем контент
      }, { once: true });
        }

        splashScreen();
    
})