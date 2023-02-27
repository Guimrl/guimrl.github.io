import '../../assets/css/document.css';
import '../../assets/css/principal.css';
import '../../assets/css/navbar.css';
import '../../assets/css/root.css';
import '../../assets/css/dark-mode.css';
import '../../assets/css/scrollbar.css';
import '../../assets/css/sobre.css';
import '../../assets/css/botoes.css';
import '../../assets/css/projetos.css';
import '../../assets/css/footer.css';
import '../../assets/css/modal.css';
import '../../assets/css/media/media.css';

import { title } from '../utils/title.js';
import { getApi } from '../services/apiGithub.js';
import { navBar } from '../views/navBar.js';
import { scrollSmooth } from '../utils/scrollSmooth.js';
import { textDigit } from '../utils/textDigit.js';
import { theme } from '../utils/theme.js';
import { modal } from '../views/modal.js';
import { criaProjetos } from '../views/criaProjetos.js';
import { footer } from '../views/footer.js';

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

