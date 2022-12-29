// Efeito Smooth da navegação
const menu = document.querySelectorAll('.navegacao a[href^="#"]');

function descobreAdistanciaEntreASectionETopo(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollNativo(distanciaEntreASectionETopo) {
    window.scroll({
        top: distanciaEntreASectionETopo,
        behavior: "smooth"
    })
}

function scrollSessao(event) {
    event.preventDefault();
    const distanciaEntreASectionETopo = descobreAdistanciaEntreASectionETopo(event.target) - 90;
    scrollNativo(distanciaEntreASectionETopo);
}

menu.forEach((link) => {
    link.addEventListener("click", scrollSessao);
})

// Evento de click da Navbar
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('.nav');

openBtn.addEventListener('click', () => {
    nav.classList.add('visivel');
})

closeBtn.addEventListener('click', () => {
    nav.classList.remove('visivel');
})

menu.forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove('visivel'))
})

// Muda o title do HTML quando o usuario pressiona tab
let title = document.title;
window.addEventListener("blur", () => {
    document.title = 'Volta aqui! :(';
})

window.addEventListener("focus", () => {
    document.title = title;
})
