const url = 'https://api.github.com/users/guimrl';
const img = document.getElementById('imagem');
const nome = document.getElementById('nome');

export async function getApi() {
    axios.get(url).then(res => {
    
    criaImagemDePerfil(res);
    criaInfo(res);
    }).catch(e => {
        if(e.request.status === 404) {
            console.log('Erro 404');
        } else {
            console.log(e)
        }
    }).finally(f => {
        console.log('Página carregada!');
    })
}

function criaImagemDePerfil(res) {
    var imagemDePerfil = res.data.avatar_url;
    var nome = res.data.name;

    const criaImg = `
    <img src="${imagemDePerfil}" class="imagem" alt="foto de ${nome}
    vestindo camiseta preta, de barba, cabelo baixo e com o fundo laranja e branco.">
    `;

    img.innerHTML = criaImg;
}

//pega as informaçoes da api e cria a página sobre
function criaInfo(res) {
    const criaNome = `
    <h2>${res.data.name}</h2>
    `;
    nome.innerHTML = criaNome;
}
