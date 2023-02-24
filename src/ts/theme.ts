export function theme(): void 
{
    const input = document.querySelector('#theme');
    const root: HTMLElement = document.documentElement;

    const lightTheme = {
        '--main-color': '#0B5ED7',
        '--main-text-color': '#333333',
        '--main-bg-color': '#EEEEEE',
        '--bg-color': '#FFFFFF'
    };

    const darkTheme = {
        '--main-color': '#F39C12',
        '--main-text-color': '#EEEEEE',
        '--main-bg-color': '#333333',
        '--bg-color': '#262626'
    };

    input?.addEventListener('change', () => {
        let GetTheme: string;

        if ((input as HTMLInputElement).checked) {
            GetTheme = 'DARK';
            changeTheme(darkTheme);
        } else {
            GetTheme = 'LIGHT';
            changeTheme(lightTheme);
        }

        localStorage.setItem("PageTheme", JSON.stringify(GetTheme));
    })

    function changeTheme(theme: any) {
        for (let prop in theme) {
            changeProperty(prop, theme[prop]);
        }
    }

    function changeProperty(property: any, value: any) {
        root.style.setProperty(property, value);
    }

    let GetTheme: string | null = localStorage.getItem("PageTheme");
    let theme: string;

    GetTheme != null ? theme = JSON.parse(GetTheme) : theme = "light";
    
    theme === 'DARK' ?? changeTheme(darkTheme);
}
