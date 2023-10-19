// BURGER FUNCTIONS
function burgerOpenMenu () {
    burgerLineOpen1.classList.add('hidden');
    burgerLineOpen2.classList.add('hidden');
    title1.classList.add('hidden');
    title2.classList.add('hidden');
    description.classList.add('hidden');
    burgerLineClose1.classList.remove('hidden');
    burgerLineClose2.classList.remove('hidden');
    burgerMenu.classList.remove('hidden');
    burgerSocial.classList.remove('hidden');
}

function burgerCloseMenu () {
    burgerLineClose1.classList.add('hidden');
    burgerLineClose2.classList.add('hidden');
    burgerMenu.classList.add('hidden');
    burgerSocial.classList.add('hidden');
    burgerLineOpen1.classList.remove('hidden');
    burgerLineOpen2.classList.remove('hidden');
    title1.classList.remove('hidden');
    title2.classList.remove('hidden');
    description.classList.remove('hidden');
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
    document.querySelector('.contact__check-box-input').checked = false;
}

function modalClose () {
    document.querySelector('.contact__modal').style.display='none';
}