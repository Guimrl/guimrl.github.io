import '../css/document.css';
import '../css/principal.css';
import '../css/navbar.css';
import '../css/root.css';
import '../css/dark-mode.css';
import '../css/scrollbar.css';
import '../css/sobre.css';
import '../css/botoes.css';
import '../css/projetos.css';
import '../css/footer.css';
import '../css/modal.css';
import '../css/media/media.css';

import { title } from './title.js';
import { getApi } from './apiGithub.js';
import { navBar } from './navBar.js';
import { navegacao } from './navegacao.js';
import { digitaTexto } from './digitaTexto.js';
import { tema } from './tema.js';
import { modal } from './modal.js';
import { criaProjetos } from './projetos.js';

const elemento = document.querySelector('#digit');
const texto = "Desenvolvedor Full Stack.";
const intervalo = 100;

title();
getApi();
navBar();
navegacao();
digitaTexto(elemento, texto, intervalo);
tema();
modal();
criaProjetos();
