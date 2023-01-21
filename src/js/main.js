import '../css/style.css';
import '../css/media.css';
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
    const distanciaEntreASectionETopo = descobreAdistanciaEntreASectionETopo(event.target) - 0;
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

// Muda o title do HTML quando o usuario da tab
let title = document.title;
window.addEventListener("blur", () => {
    document.title = 'Volta aqui! :(';
})

window.addEventListener("focus", () => {
    document.title = title;
})

//Texto que digita sozinho
const elemento = document.querySelector('#digit');
const texto = "Desenvolvedor Full Stack.";
const intervalo = 100;

function digitaTexto(elemento, texto, intervalo) {
    const caractere = texto.split("").reverse();
    const digitador = setInterval(() => {
        
        if(!caractere.length) {
            return clearInterval(digitador);
        }

        const proximaLetra = caractere.pop();

        elemento.innerHTML += proximaLetra;
    }, intervalo);
}

digitaTexto(elemento, texto, intervalo);

//API GITHUB
const url = 'https://api.github.com/users/guimrl';
const img = document.getElementById('imagem');
const nome = document.getElementById('nome');

async function getApi() {
    axios.get(url).then(res => {
    
    criaImagemDePerfil(res);
    criaInfo(res);
    }).catch(e => {
        if(e.request.status === 404) {
            console.log('Erro 404')
        } else {
            console.log(e)
        }
    }).finally(f => {
        console.log('Página carregada!')
    })
}

function criaImagemDePerfil(res) {
    var imagemDePerfil = res.data.avatar_url;
    var nome = res.data.name;

    const criaImg = `
    <img src="${imagemDePerfil}" class="imagem" alt="foto de ${nome}
    vestindo camiseta preta, de barba, cabelo baixo e com o fundo laranja e branco.">
    `

    img.innerHTML = criaImg;
}

//pega as informaçoes da api e cria a página sobre
function criaInfo(res) {
    const criaNome = `
    <h2>${res.data.name}</h2>
    `
    nome.innerHTML = criaNome;
}
getApi();

//TEMA

const input = document.querySelector('#theme');
const root = document.documentElement;

const lightTheme = {
    '--main-color': '#0b5ed7',
    '--main-text-color': '#333333',
    '--main-bg-color': '#eeeeee',
    '--bg-color': '#FFFFFF'
}

const darkTheme = {
    '--main-color': '#F39C12',
    '--main-text-color': '#EEEEEE',
    '--main-bg-color': '#333333',
    '--bg-color': '#262626'
}

input.addEventListener('change', () => {
    const check = input.checked;
    let GetTheme;
    if (check) {
        GetTheme = 'DARK';
        changeTheme(darkTheme);
    } else {
        GetTheme = 'LIGHT';
        changeTheme(lightTheme);
    }

    //salva em localStorage
    localStorage.setItem("PageTheme", JSON.stringify(GetTheme));
})

function changeTheme(theme) {
    for (let prop in theme) {
        changeProperty(prop, theme[prop]);
    }
}

function changeProperty(property, value) {
    root.style.setProperty(property, value);
}

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));

if (GetTheme === 'DARK') {
    changeTheme(darkTheme);
}
