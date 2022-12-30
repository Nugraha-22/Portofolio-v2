const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const positionWindow = window.scrollY > 0;
    navBar.classList.toggle('active', positionWindow);
});

const menuBar = document.querySelector('.menu-bars');
const showMenu = document.querySelector('.navigation');

menuBar.addEventListener('click', function(){
    showMenu.classList.toggle('active');
});

const closeBar = document.querySelector('.fa-xmark');

closeBar.addEventListener('click', function(){
    showMenu.classList.remove('active');
});