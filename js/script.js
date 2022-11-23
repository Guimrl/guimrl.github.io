const darkBtn = document.querySelector('input')
const root = document.documentElement

const lightTheme = {
    '--main-color': '#0b5ed7',
    '--negative-color': '#F39C12',
    '--main-text-color': '#262626',
    '--bio-text-color': '#FFFFFF',
    '--bio-bg-color': '#333333',
    '--bio-border-color': '#30363D',
    '--about-bg-color': '#FFFFFF'
}

const darkTheme = {
    '--main-color': '#F39C12',
    '--negative-color': '#0b5ed7',
    '--main-text-color': '#EEEEEE',
    '--bio-text-color': '#EEEEEE',
    '--bio-bg-color': '#363636',
    '--bio-border-color': '#30363D',
    '--about-bg-color': '#262626'
}

darkBtn.addEventListener('change', () => {
    const check = darkBtn.checked
    if(check) {
        changeTheme(darkTheme)
    } else {
        changeTheme(lightTheme)
    }
})

function changeTheme(theme) {
    for(let prop in theme) {
        changeProperty(prop, theme[prop])
    }
}

function changeProperty(property, value) {
    root.style.setProperty(property, value)
}