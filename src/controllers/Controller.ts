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

// import { createMaintenance } from '../views/createMaintenance';
import { hideMaintenance } from '../views/maintenance';
import { Home } from '../views/Home';
import { aboutSection } from '../views/aboutSection';
import { createNav } from '../views/createNav';
import { title } from '../utils/title';
import { NavBar } from '../views/NavBar';
import { createModal } from '../views/createModal';
import { scrollSmooth } from '../utils/scrollSmooth';
import { Modal } from '../views/Modal';
import { createProjects } from '../views/createProjects';
import { Footer } from '../views/Footer';
import { Progress } from '../utils/Progress';
import { TextTyper } from '../utils/TextTyper';
import { ApiFactory } from '../services/ApiFactory';
import { ApiGithub } from '../services/ApiGithub';
import { ApiProjects } from '../services/ApiProjects';
import { ApiGithubView } from '../views/ApiGithubView';
import { ThemeSwitcher } from '../utils/theme';

export class Controller {

    public render(): void {
        const element: HTMLElement | null = document.querySelector('#digit');
        const text: string = "Desenvolvedor web Full Stack.";
        const interval: number = 100;

        // createMaintenance();

        //onMaintenance();
        hideMaintenance()

        title();
        const progress: Progress = new Progress();
        progress.scroll();

        const home: Home = new Home();
        home.createHome();

        createNav();
        const nav: NavBar = new NavBar();
        nav.togleNav();
        new ThemeSwitcher();
        scrollSmooth();

        const githubApi: ApiGithub = ApiFactory.createUserApi();
        githubApi.getData().then(data => ApiGithubView.getApi(data))
            .catch(erro => {
                erro.request.status === 404 ? console.error(`Error 404: ${erro.message}`) : console.error(`Error: ${erro}`);
            }).finally(() => {
                console.log('Página carregada com sucesso!');
            });

        aboutSection();

        const typer: TextTyper = new TextTyper();
        typer.start(element, text, interval);

        const modal: Modal = new Modal();
        modal.togleModal();
        createModal();

        const projectsApi: ApiProjects = ApiFactory.createProjectsApi();
        projectsApi.getData().then(projects => createProjects(projects));

        const footer: Footer = new Footer();
        footer.createFooter();

    }

}
