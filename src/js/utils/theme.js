export function theme() {
    const input = document.querySelector('#theme');
    const root = document.documentElement;
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
    input === null || input === void 0 ? void 0 : input.addEventListener('change', () => {
        let GetTheme;
        if (input.checked) {
            GetTheme = 'DARK';
            changeTheme(darkTheme);
        }
        else {
            GetTheme = 'LIGHT';
            changeTheme(lightTheme);
        }
        localStorage.setItem("PageTheme", JSON.stringify(GetTheme));
    });
    function changeTheme(theme) {
        for (let prop in theme) {
            changeProperty(prop, theme[prop]);
        }
    }
    function changeProperty(property, value) {
        root.style.setProperty(property, value);
    }
    let GetTheme = localStorage.getItem("PageTheme");
    let theme;
    GetTheme != null ? theme = JSON.parse(GetTheme) : theme = "light";
    if (theme === 'DARK') {
        changeTheme(darkTheme);
    }
}
