export class Home {
    private home: HTMLElement | null = document.querySelector("#inicio");

    public createHome(): void {
        if (this.home) {
            this.home.innerHTML = `
            
            `;
        }
    }
}
