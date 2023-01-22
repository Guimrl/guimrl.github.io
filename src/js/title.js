export function title() {
    let title = document.title;
    window.addEventListener("blur", () => {
        document.title = 'Volta aqui! :(';
    });

    window.addEventListener("focus", () => {
        document.title = title;
    });
}
