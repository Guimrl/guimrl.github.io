const axios = require('axios');
const url = 'https://api.github.com/users/guimrl';
const img = document.getElementById('imagem');
const nome = document.getElementById('nome');

export async function getApi() {
    axios.get(url)
        .then(res => {
            criaImagemPerfil(res);
            criaInfoPerfil(res);
        })
        .catch(erro => {
            if (erro.request.status === 404) {
                console.log('Erro 404');
            } else {
                console.log(erro);
            }
        })
        .finally(() => {
            console.log('Página carregada com sucesso!');
        });
}

function criaImagemPerfil(res) {
    const imagemPerfil = res.data.avatar_url;
    const nomeCompleto = res.data.name;

    const htmlImagem = `
        <img src="${imagemPerfil}" class="imagem" alt="${nomeCompleto} vestindo
        uma camiseta preta, com barba bem aparada e cabelo curto, em um fundo
        colorido com tonalidades de laranja e branco.">
    `;

    img.innerHTML = htmlImagem;
}

function criaInfoPerfil(res) {
    const criaNome = `
        <h2>${res.data.name}</h2>
    `;
    nome.innerHTML = criaNome;
}
