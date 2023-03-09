import './index.html';
import './index.scss';

console.log('Build is Work!');

const menuBtn = document.querySelector('.burger__menu-btn');
const burgerList = document.querySelector('.burger__list');

menuBtn.addEventListener('click', () => {
    burgerList.classList.toggle('show');
})

// document.addEventListener('click', (event) => {
//     if (!burgerList.contains(event.target) && !menuBtn.contains(event.target)) {
//         burgerList.classList.remove('show');
//     }
// })

const main = document.querySelector('.main');
const registrationForm = document.querySelector('.registration-form');
const singInForm = document.querySelector('.sign-in-form');
const signUp = document.querySelector('.btn_sign-up');
const signIn = document.querySelector('.btn_sign-in');
const closeBtn = document.querySelector('.close-btn');
const closeBtnSignIn = document.querySelector('.close-btn-sign-in');
const burgerSignUp = document.querySelector('.burger-btn-sign-up');
const burgerSignIn = document.querySelector('.burger-btn-sign-in');
const plant = document.querySelector('.plant');
const description = document.querySelector('.description');
const featured = document.querySelector('.featured');
const relax = document.querySelector('.relax');
const ourShop = document.querySelector('.our-shop');
const footer = document.querySelector('.footer');

signUp.addEventListener('click', () => {
    registrationForm.classList.add('show-form');
    plant.classList.add('mask');
    description.classList.add('mask');
    featured.classList.add('mask');
    relax.classList.add('mask');
    ourShop.classList.add('mask');
    footer.classList.add('mask');
    document.body.style.overflow = 'hidden';
})

closeBtn.addEventListener('click', () => {
    registrationForm.classList.remove('show-form');
    plant.classList.remove('mask');
    description.classList.remove('mask');
    featured.classList.remove('mask');
    relax.classList.remove('mask');
    ourShop.classList.remove('mask');
    footer.classList.remove('mask');
    document.body.style.overflow = '';
})

signIn.addEventListener('click', () => {
    singInForm.classList.add('show-form');
    plant.classList.add('mask');
    description.classList.add('mask');
    featured.classList.add('mask');
    relax.classList.add('mask');
    ourShop.classList.add('mask');
    footer.classList.add('mask');
    document.body.style.overflow = 'hidden';
})

closeBtnSignIn.addEventListener('click', () => {
    singInForm.classList.remove('show-form');
    plant.classList.remove('mask');
    description.classList.remove('mask');
    featured.classList.remove('mask');
    relax.classList.remove('mask');
    ourShop.classList.remove('mask');
    footer.classList.remove('mask');
    document.body.style.overflow = '';
})

burgerSignUp.addEventListener('click', () => {
    registrationForm.classList.add('show-form');
    plant.classList.add('mask');
    description.classList.add('mask');
    featured.classList.add('mask');
    relax.classList.add('mask');
    ourShop.classList.add('mask');
    footer.classList.add('mask');
    document.body.style.overflow = 'hidden';
    burgerList.classList.remove('show');
})

burgerSignIn.addEventListener('click', () => {
    singInForm.classList.add('show-form');
    plant.classList.add('mask');
    description.classList.add('mask');
    featured.classList.add('mask');
    relax.classList.add('mask');
    ourShop.classList.add('mask');
    footer.classList.add('mask');
    document.body.style.overflow = 'hidden';
    burgerList.classList.remove('show');
})

document.addEventListener('click', (event) => {
    if (!burgerList.contains(event.target) && !menuBtn.contains(event.target)) {
        burgerList.classList.remove('show');
    }

    if ((!registrationForm.contains(event.target) && !menuBtn.contains(event.target) && !burgerSignUp.contains(event.target)) && (!singInForm.contains(event.target) && !menuBtn.contains(event.target) && !burgerSignIn.contains(event.target))) {
        console.log('!!!---!!!');
        registrationForm.classList.remove('show-form');
        singInForm.classList.remove('show-form');
        plant.classList.remove('mask');
        description.classList.remove('mask');
        featured.classList.remove('mask');
        relax.classList.remove('mask');
        ourShop.classList.remove('mask');
        footer.classList.remove('mask');
        document.body.style.overflow = '';
    }
})