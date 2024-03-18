export class Progress {
    constructor() {
        this.progress = document.querySelector("#progress");
    }
    scroll() {
        window.addEventListener('scroll', () => {
            let height = document.body.scrollHeight - window.innerHeight;
            let scrollPosition = document.documentElement.scrollTop;
            let width = (scrollPosition / height) * 100;
            if (this.progress) {
                this.progress.style.width = `${width}%`;
            }
        });
    }
}
