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
import '../assets/css/skillsContainer.css';
import { Progress } from '../utils/Progress';
import { title } from '../utils/title';
import { ThemeSwitcher } from '../utils/ThemeSwitcher';
import { scrollSmooth } from '../utils/scrollSmooth';
import { TextTyper } from '../utils/TextTyper';
import { LoaderModel } from './LoaderModel';
import { NavBarModel } from './NavBarModel';
import { DownloadCV } from '../views/DownloadCV';

export class Model {
  public render(): void {
    const element: HTMLElement | null = document.querySelector('#digit');
    const text = 'Desenvolvedor web Full Stack.';
    const interval = 100;

    const progress = new Progress();
    const nav = new NavBarModel();
    const typer = new TextTyper();

    LoaderModel.onLoad();

    title();

    progress.scroll();

    nav.togleNav();
    new ThemeSwitcher();

    scrollSmooth();

    typer.start(element, text, interval);

    // const modal: Modal = new Modal();
    // createModal();
    // modal.togleModal();

    document.addEventListener('DOMContentLoaded', () => {
      const downloadCVInstance = new DownloadCV('#downloadCvBtn');
      downloadCVInstance.render();
    });
  }
}
