export function navBar(): void {
    const links: NodeListOf<Element> = document.querySelectorAll('.navegacao a[href^="#"]');
    const openNav: Element | null = document.querySelector("#open-btn");
    const closeNav: Element | null = document.querySelector("#close-btn");
    const nav: Element | null = document.querySelector("#nav");
    const fadeNav: Element | null = document.querySelector("#fadeNav");

    const toggleNav = () => {
        nav?.classList.toggle("navHide");
        fadeNav?.classList.toggle("navHide");
    }

    [openNav, closeNav, fadeNav].forEach((el) => {
        el?.addEventListener("click", () => toggleNav());
    });

    links.forEach((link) => {
        link.addEventListener("click", () => toggleNav());
    });
}
