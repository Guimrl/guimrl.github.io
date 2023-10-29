import { Github } from '../interfaces/GithubInterface';
import { ApiGithub } from '../services/ApiGithub';

export abstract class ApiGithubView extends ApiGithub {
  public static getApi(user: Github): void {
    const img: HTMLElement | null = document.getElementById('imagem');
    const name: HTMLElement | null = document.getElementById('nome');

    const htmlImagem = `
        <img src="${user.avatar_url}" class="imagem" alt="${user.name} vestindo
        uma camiseta preta, com barba bem aparada e cabelo curto, em um fundo
        colorido com tonalidades de laranja e branco." />`;

    const criaNome = `<h2>${user.name}</h2>`;

    if (img) {
      img.innerHTML = htmlImagem;
    }

    if (name) {
      name.innerHTML = criaNome;
    }
  }
}
