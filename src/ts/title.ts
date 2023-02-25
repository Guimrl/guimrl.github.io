export function title(): void 
{
    let title: string = document.title;
    let counter: number = 0;
    let interval: any = setInterval(tradeTitle, 2000);
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
        document.title = title;
        interval = setInterval(tradeTitle, 2000);
    });

    window.addEventListener('blur', () => {
        document.title = 'Volta aqui! ;(';
        clearInterval(interval);
    });
}
