
const caseStudyActiveEl = document.querySelector('.case-study-active')
const accordionActiveEl = document.querySelector('.accordion-active')
const caseStudyArrow = document.querySelector('.fa-arrow-down')

const burgerMenuBtn = document.querySelector('.burger-menu-button')
const burgerMenuEl = document.querySelector('.nav')



caseStudyActiveEl.addEventListener('click', ()=>{
    caseStudyActiveEl.classList.toggle('active')
    accordionActiveEl.classList.toggle('visible')
    caseStudyArrow.classList.toggle('rotated')
})

burgerMenuBtn.addEventListener('click', ()=>{
    burgerMenuEl.classList.toggle('nav-toggled')
    if (burgerMenuBtn.getAttribute('aria-expanded') === 'true') {
        burgerMenuBtn.setAttribute('aria-expanded', 'false') 
    } else {
        burgerMenuBtn.setAttribute('aria-expanded', 'true') 
    }
})

document.body.addEventListener('click', (e)=>{
    if (e.target.id !== 'burgerSvg') {
        burgerMenuEl.classList.remove('nav-toggled')
        burgerMenuBtn.setAttribute('aria-expanded', 'false') 
    }
})