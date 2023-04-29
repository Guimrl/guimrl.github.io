
export class NavBar {
    private links: NodeListOf<Element> = document.querySelectorAll('.navegacao a[href^="#"]');
    private openNav: Element | null = document.querySelector("#open-btn");
    private closeNav: Element | null = document.querySelector("#close-btn");
    private nav: Element | null = document.querySelector("#nav");
    private fadeNav: Element | null = document.querySelector("#fadeNav");
    private input: HTMLInputElement | null = document.querySelector("input");

    private btnTogleNav(): void {
        this.nav?.classList.toggle("navHide");
        this.fadeNav?.classList.toggle("navHide");
    }

    public togleNav(): void {
        [this.openNav, this.closeNav, this.fadeNav, this.input].forEach((el) => {
            el?.addEventListener("click", () => this.btnTogleNav());
        });

        this.links.forEach((link) => {
            link.addEventListener("click", () => this.btnTogleNav());
        });
    }
}
