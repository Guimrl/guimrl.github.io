export function title(): void {
    let originalTitle: string = document.title;
    let counter: number = 0;
    let isWindowFocused: boolean = true;
    let interval: ReturnType<typeof setInterval> = setInterval(tradeTitle, 2000);
    let arrayTitle: string[] = [
        "Desenvolvedor Back end",
        "Desenvolvedor Front end",
        "Desenvolvedor Full Stack",
        "Guilherme Amaral"
    ];

    function tradeTitle(): void {
        document.title = arrayTitle[counter % arrayTitle.length];
        counter++;
    }

    window.addEventListener('focus', () => {
        if (!isWindowFocused) {
            isWindowFocused = true;
            document.title = originalTitle;
            interval = setInterval(tradeTitle, 2000);
        }
    });

    window.addEventListener('blur', () => {
        if (isWindowFocused) {
            isWindowFocused = false;
            document.title = 'Volta aqui! ;(';
            clearInterval(interval);
        }
    });
}
