
export class Footer {
    private footer: HTMLElement | null = document.querySelector("#footerTag");

    public createFooter(): void {
        if (this.footer) {
            this.footer.innerHTML = `
            `;
        }
    }
}
