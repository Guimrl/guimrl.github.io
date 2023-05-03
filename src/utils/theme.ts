import { Theme } from "../interfaces/ThemeInterface";

export class ThemeSwitcher {
    private input: HTMLInputElement | null;
    private root: HTMLElement;
    private ball: HTMLElement | null;
    private lightTheme: Theme = {
        '--main-color': '#0B5ED7',
        '--main-text-color': '#333333',
        '--main-bg-color': '#EEEEEE',
        '--bg-color': '#FFFFFF'
    };
    private darkTheme: Theme = {
        '--main-color': '#F39C12',
        '--main-text-color': '#EEEEEE',
        '--main-bg-color': '#333333',
        '--bg-color': '#262626'
    };

    constructor() {
        this.input = document.querySelector('#theme');
        this.root = document.documentElement;
        this.ball = document.querySelector('.dark-mode .ball');

        this.init();
    }

    private init(): void {
        this.input?.addEventListener("change", () => {
            let GetTheme: string;

            if (this.input?.checked) {
                GetTheme = "DARK";
                this.changeTheme(this.darkTheme);
                this.ball?.classList.add("active");
            } else {
                GetTheme = "LIGHT";
                this.changeTheme(this.lightTheme);
                this.ball?.classList.add("disable");
            }

            localStorage.setItem("PageTheme", JSON.stringify(GetTheme));
        });

        let GetTheme: string | null = localStorage.getItem("PageTheme");
        let theme: string;

        GetTheme != null ? theme = JSON.parse(GetTheme) : theme = "LIGHT";

        if (theme === "DARK") {
            if (this.input) {
                this.input.checked = true;
            }
            this.ball?.classList.add("active");
            this.changeTheme(this.darkTheme);
        } else {
            if (this.input) {
                this.input.checked = false;
            }
            this.ball?.classList.add("disable");
            this.changeTheme(this.lightTheme);
        }
    }

    private changeTheme(theme: Theme): void {
        for (let prop in theme) {
            this.changeProperty(prop, theme[prop]);
        }
    }

    private changeProperty(property: string, value: string): void {
        this.root.style.setProperty(property, value);
    }
}
