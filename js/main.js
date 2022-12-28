const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('.nav');
const inicio = document.getElementById('inicio');

openBtn.addEventListener('click', () => {
    nav.classList.add('visivel');
})

closeBtn.addEventListener('click', () => {
    nav.classList.remove('visivel');
})

nav.addEventListener('click', () => {
    nav.classList.remove('visivel')
})