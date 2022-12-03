const input = document.querySelector('input');
const root = document.documentElement;

const lightTheme = {
    '--main-color': '#59407f',
    '--negative-color': '#F39C12',
    '--main-text-color': '#262626',
    '--bio-text-color': '#FFFFFF',
    '--bio-bg-color': '#eeeeee',
    '--bio-border-color': '#eeeeee',
    '--about-bg-color': '#FFFFFF'
}

const darkTheme = {
    '--main-color': '#F39C12',
    '--negative-color': '#0b5ed7',
    '--main-text-color': '#EEEEEE',
    '--bio-text-color': '#EEEEEE',
    '--bio-bg-color': '#333333',
    '--bio-border-color': '#30363D',
    '--about-bg-color': '#262626'
}

input.addEventListener('change', () => {
    const check = input.checked;
    let GetTheme;
    if (check) {
        GetTheme = 'DARK';
        changeTheme(darkTheme);
    } else {
        GetTheme = 'LIGHT';
        changeTheme(lightTheme);
    }

    //salva em localStorage
    localStorage.setItem("PageTheme", JSON.stringify(GetTheme));
})

function changeTheme(theme) {
    for (let prop in theme) {
        changeProperty(prop, theme[prop]);
    }
}

function changeProperty(property, value) {
    root.style.setProperty(property, value);
}

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));

if(GetTheme === 'DARK') {
    changeTheme(darkTheme);
}