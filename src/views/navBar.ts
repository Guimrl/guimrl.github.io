export function navBar(): void {
    const links: NodeListOf<Element> = document.querySelectorAll('.navegacao a[href^="#"]');
    //const btns: NodeListOf<Element> = document.querySelectorAll('.open-btn, .close-btn');
    const openNav = document.querySelector("#open-btnson");
    const closeNav = document.querySelector("#close-btnson");
    //const nav: Element | null = document.querySelector('.nav');
    const navson = document.querySelector("#navson");
    const fadeNavson = document.querySelector("#fadeNavson");

    const toggleNav = () => {
        navson?.classList.toggle("navHide");
        fadeNavson?.classList.toggle("navHide");
    }

    [openNav, closeNav, fadeNavson].forEach((el) => {
        el?.addEventListener("click", () => toggleNav());
    });












    //btns.forEach((btn) => {
    //  btn.addEventListener('click', () => {
    //    nav?.classList.toggle('visivel');
    //});
    //});

    //links.forEach((link) => {
    //link.addEventListener('click', () => {
    //nav?.classList.remove('visivel');
    //});
    //});
}
