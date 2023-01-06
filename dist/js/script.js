const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const positionWindow = window.scrollY > 0;
    navBar.classList.toggle('active', positionWindow);
});

const btnMenuBar = document.querySelector('.menu-bars');
const menuBar = document.querySelector('.navigation');

btnMenuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active');
})

const items = document.querySelector('.items');
const listItems = document.querySelector('.list-items');

items.addEventListener('click', () => {
    listItems.classList.toggle('active');
});

const closeBar = document.querySelector('.fa-circle-xmark');

closeBar.addEventListener('click', () => {
    menuBar.classList.remove('active');
});

const hero = document.querySelector('.hero');
hero.addEventListener('click', () => {
    menuBar.classList.remove('active');
});
const about = document.querySelector('.about');
about.addEventListener('click', () => {
    menuBar.classList.remove('active');
    
});
const certificate = document.querySelector('.certificate');
certificate.addEventListener('click', () => {
    menuBar.classList.remove('active');
    
});
const project = document.querySelector('.project');
project.addEventListener('click', () => {
    menuBar.classList.remove('active');
    
});
const contact = document.querySelector('.contact');
contact.addEventListener('click', () => {
    menuBar.classList.remove('active');
});