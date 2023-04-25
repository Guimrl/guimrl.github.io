export function progress() {
    const progress: HTMLElement | null = document.querySelector("#progress");
    window.addEventListener('scroll', () => {
        let height = document.body.scrollHeight - window.innerHeight;
        let scrollPosition = document.documentElement.scrollTop;
        let width = (scrollPosition / height) * 100;

        if (progress) {
            progress.style.width = `${width}%`;
        }
    });
}