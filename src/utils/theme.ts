import { Theme } from "../interfaces/ThemeInterface";

export function theme(): void {
    const input: HTMLInputElement | null = document.querySelector('#theme');
    const root: HTMLElement = document.documentElement;

    const lightTheme: Theme = {
        '--main-color': '#0B5ED7',
        '--main-text-color': '#333333',
        '--main-bg-color': '#EEEEEE',
        '--bg-color': '#FFFFFF'
    };

    const darkTheme: Theme = {
        '--main-color': '#F39C12',
        '--main-text-color': '#EEEEEE',
        '--main-bg-color': '#333333',
        '--bg-color': '#262626'
    };

    const ball: HTMLElement | null = document.querySelector('.dark-mode .ball');
    input?.addEventListener('change', () => {
        let GetTheme: string;

        if (input.checked) {
            GetTheme = "DARK";
            changeTheme(darkTheme);
            ball?.classList.add("active");
        } else {
            GetTheme = "LIGHT";
            changeTheme(lightTheme);
            ball?.classList.add("disable");
        }

        localStorage.setItem("PageTheme", JSON.stringify(GetTheme));
    })

    function changeTheme(theme: Theme) {
        for (let prop in theme) {
            changeProperty(prop, theme[prop]);
        }
    }

    function changeProperty(property: string, value: string) {
        root.style.setProperty(property, value);
    }

    let GetTheme: string | null = localStorage.getItem("PageTheme");
    let theme: string;

    GetTheme != null ? theme = JSON.parse(GetTheme) : theme = "LIGHT";

    if (theme === "DARK") {
        if (input) {
            input.checked = true;
        }
        ball?.classList.add("active");
        changeTheme(darkTheme);
    } else {
        if (input) {
            input.checked = false;
        }
        ball?.classList.add("disable");
        changeTheme(lightTheme);
    }
}
