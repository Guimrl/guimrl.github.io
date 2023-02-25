export function title() {
    let title = document.title;
    let counter = 0;
    let interval = setInterval(tradeTitle, 2000);
    let arrayTitle = [
        "Desenvolvedor Back end",
        "Desenvolvedor Front end",
        "Desenvolvedor Full Stack",
        "Guilherme Amaral"
    ];
    function tradeTitle() {
        document.title = arrayTitle[counter % arrayTitle.length];
        counter++;
    }
    window.addEventListener('focus', () => {
        document.title = title;
        interval = setInterval(tradeTitle, 2000);
    });
    window.addEventListener('blur', () => {
        document.title = 'Volta aqui! ;(';
        clearInterval(interval);
    });
}
