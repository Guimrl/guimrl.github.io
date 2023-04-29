
export class Footer {
    private footer: HTMLElement | null = document.querySelector("#footerTag");

    public createFooter(): void {
        if (this.footer) {
            this.footer.innerHTML = `
            <div class="footer">
                <p>&copy; Guilherme<span class="highlight"> Amaral</span> - 2023</p>
            </div>`;
        }
    }
}
