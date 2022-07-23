
// Меню бургер
// находим элемент с которым будем работать
const iconMenu = document.querySelector('.menu__icon');
// делаем проверку
if (iconMenu){
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
// Прокрутка по странице
