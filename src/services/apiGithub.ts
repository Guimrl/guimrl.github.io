import { Github } from '../interfaces/GithubInterface';
import { Api } from './Api';

export class ApiGithub extends Api {
    constructor(url: RequestInfo | URL) {
        super(url);
    }

    async getData(): Promise<Github> {
        const res: Response = await fetch(this.url);
        const data: Github = await res.json();

        return data;
    }
}










// export async function getApi(): Promise<User> {
//     const res = await axios.get<User>('https://api.github.com/users/guimrl');
//     return res.data;
// }

// getApi().then(user => {
//     const img: HTMLElement | null = document.getElementById('imagem');
//     const name: HTMLElement | null = document.getElementById('nome');

//     const htmlImagem: string = `
//         <img src="${user.avatar_url}" class="imagem" alt="${user.name} vestindo
//         uma camiseta preta, com barba bem aparada e cabelo curto, em um fundo
//         colorido com tonalidades de laranja e branco."> `;

//     const criaNome = `<h2>${user.name}`;

//     if (img) {
//         img.innerHTML = htmlImagem;
//     }
//     if (name) {
//         name.innerHTML = criaNome;
//     }
// }).catch(erro => {
//     if (erro.request.status === 404) {
//         console.log('Erro 404');
//     } else {
//         console.log(erro);
//     }
// }).finally(() => {
//     console.log('Página carregada com sucesso!');
// });
