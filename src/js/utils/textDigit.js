export function textDigit(element, text, interval) {
    const chars = text.split('');
    let currentIndex = 0;
    const type = setInterval(() => {
        if (currentIndex >= chars.length) {
            clearInterval(type);
            return;
        }
        element.innerHTML += chars[currentIndex];
        currentIndex++;
    }, interval);
}
