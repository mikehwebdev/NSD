
const discipline1El = document.querySelector('.discipline-1')
const accordion1El = document.querySelector('.accordion-1')

const burgerMenuBtn = document.querySelector('.burger-menu-button')
const burgerMenuEl = document.querySelector('.nav')

discipline1El.addEventListener('click', ()=>{
    discipline1El.classList.toggle('active')
    accordion1El.classList.toggle('visible')
})

burgerMenuBtn.addEventListener('click', ()=>{
    burgerMenuEl.classList.toggle('nav-toggled')
    if (burgerMenuBtn.getAttribute('aria-expanded') === 'true') {
        burgerMenuBtn.setAttribute('aria-expanded', 'false') 
    } else {
        burgerMenuBtn.setAttribute('aria-expanded', 'true') 
    }
})