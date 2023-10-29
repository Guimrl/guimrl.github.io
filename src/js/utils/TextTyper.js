export class TextTyper {
  start(element, text, interval) {
    const letters = text.split('').reverse();
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
