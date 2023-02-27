export function navBar() {
    const links = document.querySelectorAll('.navegacao a[href^="#"]');
    const btns = document.querySelectorAll('.open-btn, .close-btn');
    const nav = document.querySelector('.nav');

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
