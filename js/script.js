AOS.init();

// BURGER
const menu = document.querySelector('.general__section-header-menu');
const title = document.querySelector('.general__section-1-title');
const burger = document.querySelector('.general__section-header-burger');
const cross = document.querySelector('.general__section-header-cross');
const header = document.querySelector('.general__section-header');
const home = document.getElementById('home-link');
const programming = document.getElementById('programming-link');
const web = document.getElementById('web-link');
const contact = document.getElementById('contact-link');
const section2 = document.querySelector('.general__section-2');
const section3 = document.querySelector('.general__section-3');
const section4 = document.querySelector('.general__section-4');
const section5 = document.querySelector('.general__section-5');
// PORTFOLIO
const portfolioBtnOpen = document.querySelector('.portfolio__button');
const portfolioBtnClose = document.querySelector('.portfolio__button-hidden');
// CONTACT
const contactBtn = document.querySelector('.contact__button');
const contactBtnClose = document.querySelector('.contact__modal-cross');


// BURGER FUNCTIONS
function openBurger () {
    burger.classList.add('hidden')
    title.classList.add('hidden');
    menu.classList.remove('hidden');
    header.classList.remove('hidden')
    cross.classList.remove('hidden')
}

function closeBurger () {
    title.classList.remove('hidden');
    menu.classList.add('hidden');
    header.classList.remove('hidden');
    burger.classList.remove('hidden');
    cross.classList.add('hidden');
}

// PORTFOLIO FUNCTIONS
function portfolioOpen () {
    document.querySelector('.portfolio__card-hidden-1').style.display='flex';
    document.querySelector('.portfolio__card-hidden-2').style.display='flex';
    document.querySelector('.portfolio__card-hidden-3').style.display='flex';
    document.querySelector('.portfolio__button-hidden').style.display='block';
    document.querySelector('.portfolio__button').style.display='none';
}

function portfolioClose () {
    document.querySelector('.portfolio__card-hidden-1').style.display='none';
    document.querySelector('.portfolio__card-hidden-2').style.display='none';
    document.querySelector('.portfolio__card-hidden-3').style.display='none';
    document.querySelector('.portfolio__button-hidden').style.display='none';
    document.querySelector('.portfolio__button').style.display='block';
}

// CONTACT FUNCTIONS
function modalOpen () {
    document.querySelector('.contact__modal').style.display='flex';
    document.querySelector('.input-1').value = '';
    document.querySelector('.input-2').value = '';
    document.querySelector('.input-3').value = '';
}

function modalClose () {
    document.querySelector('.contact__modal').style.display='none';
}


// BURGER CLICK
burger.addEventListener('click', openBurger);
cross.addEventListener('click', closeBurger);
home.addEventListener('click', closeBurger);
programming.addEventListener('click', closeBurger);
web.addEventListener('click', closeBurger);
contact.addEventListener('click', closeBurger);
section2.addEventListener('click', closeBurger);
section3.addEventListener('click', closeBurger);
section4.addEventListener('click', closeBurger);
section5.addEventListener('click', closeBurger);

//PORTFOLIO CLICK
portfolioBtnOpen.addEventListener('click', portfolioOpen);
portfolioBtnClose.addEventListener('click', portfolioClose);

//MODAL CLICK
contactBtn.addEventListener('click', modalOpen);
contactBtnClose.addEventListener('click', modalClose);