import './index.html';
import './index.scss';

console.log('Build is Work!');

const menuBtn = document.querySelector('.burger__menu-btn');
const burgerList = document.querySelector('.burger__list');

menuBtn.addEventListener('click', () => {
    burgerList.classList.toggle('show');
})

document.addEventListener('click', (event) => {
    if (!burgerList.contains(event.target) && !menuBtn.contains(event.target)) {
        burgerList.classList.remove('show');
    }
})
