export function textDigit(element, text, interval) {
    const char = text.split('').reverse();
    const type = setInterval(() => {
        if (!char.length) {
            return clearInterval(type);
        }
        let nextLetter = char.pop();
        element.innerHTML += nextLetter;
    }, interval);
}
