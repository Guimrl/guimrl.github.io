export function textDigit(element: Element, text: string, interval: number) {
    const char: string[] = text.split('').reverse();
    const type: any = setInterval(() => {

        if (!char.length) {
            return clearInterval(type);
        }

        let nextLetter: string | undefined = char.pop();

        element.innerHTML += nextLetter;
    }, interval);
}
