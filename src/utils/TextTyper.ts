
export class TextTyper {

    public start(element: HTMLElement | null, text: string, interval: number): void {
        const letters: string[] = text.split('');
        let index: number = 0;
        const typer = setInterval(() => {
            if (index >= letters.length) {
                clearInterval(typer);
                return;
            }

            if (element)
                element.innerHTML = letters[index];

            index++;
        }, interval)
    }
}
