const MenuBar = document.querySelector(".header .nav-bar .nav-list .MenuBar ");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector('.header .container');

MenuBar.addEventListener('click', () => {
    MenuBar.classList.toggle('active');
    mobile_menu.classList.toggle('active');

})