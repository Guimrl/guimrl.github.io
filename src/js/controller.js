import '../assets/css/document.css';
import '../assets/css/principal.css';
import '../assets/css/navbar.css';
import '../assets/css/root.css';
import '../assets/css/dark-mode.css';
import '../assets/css/scrollbar.css';
import '../assets/css/sobre.css';
import '../assets/css/botoes.css';
import '../assets/css/projetos.css';
import '../assets/css/footer.css';
import '../assets/css/modal.css';
import '../assets/css/media/media.css';

import { title } from './title.js';
import { getApi } from './apiGithub.js';
import { navBar } from './navBar.js';
import { scrollSmooth } from './scrollSmooth.js';
import { textDigit } from './textDigit.js';
import { theme } from './theme.js';
import { modal } from './modal.js';
import { criaProjetos } from './projetos.js';
import { log } from './index.js';

const elemento = document.querySelector('#digit');
const texto = "Desenvolvedor Full Stack.";
const intervalo = 100;

title();
getApi();
navBar();
scrollSmooth();
textDigit(elemento, texto, intervalo);
theme();
modal();
criaProjetos();
log();