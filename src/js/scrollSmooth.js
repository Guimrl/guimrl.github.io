export function scrollSmooth() {
    const menu = document.querySelectorAll('.navegacao a[href^="#"]');
    function getTheDistanceBetweenTheSectionAndTop(element) {
        const id = element.getAttribute("href");
        return document.querySelector(id).offsetTop;
    }
    function nativeScroll(distanceBetweenTheSectionAndTop) {
        window.scrollTo({
            top: distanceBetweenTheSectionAndTop,
            behavior: "smooth"
        });
    }
    function scrollToSection(event) {
        event.preventDefault();
        const distanceBetweenTheSectionAndTop = getTheDistanceBetweenTheSectionAndTop(event.target) - 0;
        nativeScroll(distanceBetweenTheSectionAndTop);
    }
    menu.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });
}
