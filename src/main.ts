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

import { getApi } from './services/apiGithub';
import { scrollSmooth } from './utils/scrollSmooth';
import { theme } from './utils/theme';
import { Modal } from './views/Modal';
import { hideMaintenance, onMaintenance } from './views/maintenance';
import { createModal } from './views/createModal';
import { aboutSection } from './views/aboutSection';
import { createNav } from './views/createNav';
import { createMaintenance } from './views/createMaintenance';
import { ApiProjects } from './services/ApiProjects';
import { createProjects } from './views/createProjects';
import { Progress } from './utils/progress';
import { NavBar } from './views/NavBar';
import { textDigit } from './utils/textDigit';
import { Home } from './views/Home';
import { Footer } from './views/Footer';
import { title } from './utils/title';

const element: HTMLElement | null = document.querySelector('#digit');
const text: string = "Desenvolvedor web Full Stack.";
const interval: number = 100;

createMaintenance();

//onMaintenance();
hideMaintenance();

const progress: Progress = new Progress();
progress.scroll();

const home: Home = new Home();
home.createHome();

aboutSection();
createNav();
title();
getApi();

const nav: NavBar = new NavBar();
nav.togleNav();

createModal();
scrollSmooth();

if (element) {
    textDigit(element, text, interval);
}

theme();

const modal: Modal = new Modal();
modal.togleModal();

const apiProjects: ApiProjects = new ApiProjects();
apiProjects.getData().then(projects => createProjects(projects));

const footer: Footer = new Footer();
footer.createFooter();
