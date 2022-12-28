const url = 'https://api.github.com/users/guimrl';
const img = document.getElementById('imagem');


async function getApi() {
    axios.get(url).then(res => {
    var imagemDePerfil = res.data.avatar_url;
    var nome = res.data.name;

    console.log(res.data)
    console.log(imagemDePerfil)

    const criaImg = `
    <img src="${imagemDePerfil}" class="imagem" alt="${nome}">
    <h1 class="highlight">${nome}</h1>
    `
    img.innerHTML = criaImg;
    }).catch(e => {
        if(e.request.status === 404) {
            console.log('Erro')
        } else {
            console.log(e)
        }
    }).finally(f => {
        console.log('finalizou')
    })
}



getApi();