var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from '../../node_modules/axios';
function getApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield axios.get('https://api.github.com/users/guimrl');
        return res.data;
    });
}
getApi().then(user => {
    const img = document.getElementById('imagem');
    const name = document.getElementById('nome');
    const htmlImagem = `
        <img src="${user.avatar_url}" class="imagem" alt="${user.name} vestindo
        uma camiseta preta, com barba bem aparada e cabelo curto, em um fundo
        colorido com tonalidades de laranja e branco."> `;
    const criaNome = `<h2>${user.name}`;
    if (img) {
        img.innerHTML = htmlImagem;
    }
    if (name) {
        name.innerHTML = criaNome;
    }
});
