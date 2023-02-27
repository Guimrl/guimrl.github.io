export function textDigit(element: Element, text: string, interval: number): void {
    const chars: string[] = text.split('');
    let currentIndex: number = 0;

    const type: NodeJS.Timer = setInterval(() => {
        if (currentIndex >= chars.length) {
            clearInterval(type);
            return;
        }

        element.innerHTML += chars[currentIndex];
        currentIndex++;
    }, interval);
}
