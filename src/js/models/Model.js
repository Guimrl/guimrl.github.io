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
export class Model {
  render() {
    const element = document.querySelector('#digit');
    const text = 'Desenvolvedor web Full Stack.';
    const interval = 100;
    LoaderModel.onLoad();
    title();
    const progress = new Progress();
    progress.scroll();
    const nav = new NavBarModel();
    nav.togleNav();
    new ThemeSwitcher();
    scrollSmooth();
    const typer = new TextTyper();
    typer.start(element, text, interval);
  }
}
