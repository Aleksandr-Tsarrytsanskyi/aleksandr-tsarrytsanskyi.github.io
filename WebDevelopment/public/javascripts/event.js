document.addEventListener("DOMContentLoaded", function() {
   document.addEventListener('contextmenu', event => event.preventDefault()); 
   document.addEventListener('keydown', function(e) {
    // Проверяем, нажаты ли Ctrl и 'u' одновременно
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault(); // Предотвращаем стандартное действие
        console.log('Просмотр исходного кода запрещен!');
        // Можно показать сообщение пользователю:
        // alert('Просмотр исходного кода запрещен!');
    }
});


})