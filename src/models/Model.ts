import "../assets/css/document.css";
import "../assets/css/principal.css";
import "../assets/css/navbar.css";
import "../assets/css/root.css";
import "../assets/css/dark-mode.css";
import "../assets/css/scrollbar.css";
import "../assets/css/sobre.css";
import "../assets/css/botoes.css";
import "../assets/css/projetos.css";
import "../assets/css/footer.css";
import "../assets/css/modal.css";
import "../assets/css/media/media.css";
import "../assets/css/maintenance.css";


import { Progress } from "../utils/Progress";
import { title } from "../utils/title";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import { scrollSmooth } from "../utils/scrollSmooth";
import { TextTyper } from "../utils/TextTyper";
import { LoaderModel } from "./LoaderModel";
import { NavBarModel } from "./NavBarModel";

export class Model {

    public render(): void {
        const element: HTMLElement | null = document.querySelector("#digit");
        const text = "Desenvolvedor web Full Stack.";
        const interval = 100;

        LoaderModel.onLoad();

        title();

        const progress: Progress = new Progress();
        progress.scroll();

        const nav: NavBarModel = new NavBarModel();
        nav.togleNav();
        new ThemeSwitcher();

        scrollSmooth();

        const typer: TextTyper = new TextTyper();
        typer.start(element, text, interval);

        // const modal: Modal = new Modal();
        // createModal();
        // modal.togleModal();

    }
}
