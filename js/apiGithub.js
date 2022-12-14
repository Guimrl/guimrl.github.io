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
    em frente ao espelho usando oculos, camiseta preta,
    com o cabelo raspado, barba e segurando um celular">
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