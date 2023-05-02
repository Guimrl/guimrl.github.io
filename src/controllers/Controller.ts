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
import '../assets/css/maintenance.css';

import { createMaintenance } from '../views/createMaintenance';
import { hideMaintenance } from '../views/maintenance';
import { Home } from '../views/Home';
import { aboutSection } from '../views/aboutSection';
import { createNav } from '../views/createNav';
import { title } from '../utils/title';
import { NavBar } from '../views/NavBar';
import { createModal } from '../views/createModal';
import { scrollSmooth } from '../utils/scrollSmooth';
import { theme } from '../utils/theme';
import { Modal } from '../views/Modal';
import { createProjects } from '../views/createProjects';
import { Footer } from '../views/Footer';
import { Progress } from '../utils/Progress';
import { TextTyper } from '../utils/TextTyper';
import { ApiFactory } from '../services/ApiFactory';
import { ApiGithub } from 'src/services/apiGithub';
import { ApiProjects } from '../services/ApiProjects';

export class Controller {

    public render(): void {
        const element: HTMLElement | null = document.querySelector('#digit');
        const text: string = "Desenvolvedor web Full Stack.";
        const interval: number = 100;

        createMaintenance();

        //onMaintenance();
        hideMaintenance()

        const progress: Progress = new Progress();
        progress.scroll();

        const home: Home = new Home();
        home.createHome();

        aboutSection();
        createNav();
        title();
        // getApi();

        const nav: NavBar = new NavBar();
        nav.togleNav();

        createModal();
        scrollSmooth();

        const typer: TextTyper = new TextTyper();
        typer.start(element, text, interval);

        theme();

        const modal: Modal = new Modal();
        modal.togleModal();

        const projectsApi: ApiProjects = ApiFactory.createProjectsApi();
        projectsApi.getData().then(projects => createProjects(projects));

        const githubApi: ApiGithub = ApiFactory.createUserApi();
        githubApi.getData().then(data => console.log(data))

        const footer: Footer = new Footer();
        footer.createFooter();

    }

}
