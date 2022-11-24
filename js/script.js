// window.sr = ScrollReveal({ reset: true })

// sr.reveal('.description', { duration: 2000, delay: 1000 })


const el = document.querySelector('#digit')
const text = "Desenvolvedor Full Stack."
const interval = 100

function showText(el, text, interval) {

    const char = text.split("").reverse()
    const typer = setInterval(() => {
        
        if(!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop()
        
        el.innerHTML += next

    }, interval);
}

showText(el, text, interval)

