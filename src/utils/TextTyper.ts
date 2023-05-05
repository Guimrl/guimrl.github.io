
export class TextTyper {

    public start(element: HTMLElement | null, text: string, interval: number): void {
        const letters: string[] = text.split("").reverse();
        const typer = setInterval(() => {
            if (!letters.length) {
                clearInterval(typer);
                return;
            }
            const next = letters.pop();
            if (element) {
                element.innerHTML += next;
            }
        }, interval);
    }
}
