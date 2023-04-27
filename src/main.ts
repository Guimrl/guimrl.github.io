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
import { footer } from './views/footer';
import { hideMaintenance, onMaintenance } from './views/maintenance';
import { createModal } from './views/createModal';
import { aboutSection } from './views/aboutSection';
import { createNav } from './views/createNav';
import { createHome } from './views/createHome';
import { createMaintenance } from './views/createMaintenance';
import { progress } from './utils/progress';
import { apiProjects } from './services/apiProjects';
import { createProjects } from './views/createProjects';

const element: HTMLElement | null = document.querySelector('#digit');
const text: string = "Desenvolvedor web Full Stack.";
const interval: number = 100;

createMaintenance();

//onMaintenance();
hideMaintenance();

progress();
createHome();
aboutSection();
createNav();
title();
getApi();
navBar();
createModal();
scrollSmooth();
if (element) {
    textDigit(element, text, interval);
}
theme();
modal();
apiProjects().then(projects => createProjects(projects));
footer();
