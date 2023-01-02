const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const positionWindow = window.scrollY > 0;
    navbar.classList.toggle('active', positionWindow);
});

const items = document.querySelector('.items');
const listItems = document.querySelector('.list-items');

items.addEventListener('click', () => {
    listItems.classList.toggle('active');
});

const menuBar = document.querySelector('.menu-bars');
const sideBar = document.querySelector('.navigation');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('active');
});

const closeBar = document.querySelector('.fa-circle-xmark');

closeBar.addEventListener('click', () => {
    sideBar.classList.remove('active');
});

const hero = document.querySelector('.hero');

hero.addEventListener('click', () => {
    sideBar.classList.remove('active');
});

const about = document.querySelector('.about');

about.addEventListener('click', () => {
    sideBar.classList.remove('active');
});

const certificate = document.querySelector('.certificate');

certificate.addEventListener('click', () => {
    sideBar.classList.remove('active');
});

const project = document.querySelector('.project');

project.addEventListener('click', () => {
    sideBar.classList.remove('active');
});

const contact = document.querySelector('.contact');

contact.addEventListener('click', () => {
    sideBar.classList.remove('active');
});

