import '../css/style.css';
import '../css/media.css';

import { title } from './title.js';
import { getApi } from './apiGithub';
import { navBar } from './navBar';
import { navegacao } from './navegacao';
import { digitaTexto } from './digitaTexto';
import { tema } from './tema';

const elemento = document.querySelector('#digit');
const texto = "Desenvolvedor Full Stack.";
const intervalo = 100;

title();
getApi();
navBar();
navegacao();
digitaTexto(elemento, texto, intervalo);
tema();
