const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelector('.nav')

openBtn.addEventListener('click', () => {
    nav.classList.add('visivel')
})

closeBtn.addEventListener('click', () => {
    nav.classList.remove('visivel')
})