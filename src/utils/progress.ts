
export class Progress {
    private progress: HTMLElement | null = document.querySelector("#progress");

    public scroll(): void {

        window.addEventListener('scroll', () => {
            let height: number = document.body.scrollHeight - window.innerHeight;
            let scrollPosition: number = document.documentElement.scrollTop;
            let width: number = (scrollPosition / height) * 100;

            if (this.progress) {
                this.progress.style.width = `${width}%`;
            }
        });
    }
}
