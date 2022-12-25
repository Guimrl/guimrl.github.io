//digita o texto sozinho
const el = document.querySelector('#digit');
const text = "Desenvolvedor Full Stack.";
const interval = 100;

function showText(el, text, interval) {

    const char = text.split("").reverse();
    const typer = setInterval(() => {

        if (!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next;

    }, interval);
}

showText(el, text, interval);

//muda o tittle do html quando o usuario da tab
let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = 'Volta aqui :(';
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})