import './assets/css/document.css';
import './assets/css/principal.css';
import './assets/css/navbar.css';
import './assets/css/root.css';
import './assets/css/dark-mode.css';
import './assets/css/scrollbar.css';
import './assets/css/sobre.css';
import './assets/css/botoes.css';
import './assets/css/projetos.css';
import './assets/css/footer.css';
import './assets/css/modal.css';
import './assets/css/media/media.css';
import './assets/css/maintenance.css'

import { title } from './utils/title';
import { getApi } from './services/apiGithub';
import { navBar } from './views/navBar';
import { scrollSmooth } from './utils/scrollSmooth';
import { textDigit } from './utils/textDigit';
import { theme } from './utils/theme';
import { modal } from './views/modal';
import { criaProjetos } from './views/criaProjetos';
import { footer } from './views/footer';
import { hideMaintenance, maintenance } from './views/maintenance';

const element: HTMLElement | null = document.querySelector('#digit');
const text: string = "Desenvolvedor web Full Stack.";
const interval: number = 100;

title();
getApi();
navBar();
scrollSmooth();
if (element) {
    textDigit(element, text, interval);
}
theme();
modal();
criaProjetos();
footer();


maintenance();
// hideMaintenance();