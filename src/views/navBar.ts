export function navBar(): void {
    const links: NodeListOf<Element> = document.querySelectorAll('.navegacao a[href^="#"]');
    const btns: NodeListOf<Element> = document.querySelectorAll('.open-btn, .close-btn');
    const nav: Element | null = document.querySelector('.nav');

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            nav?.classList.toggle('visivel');
        });
    });

    links.forEach((link) => {
        link.addEventListener('click', () => {
            nav?.classList.remove('visivel');
        });
    });
}
