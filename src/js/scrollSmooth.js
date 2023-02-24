export function scrollSmooth() {
    const menu = document.querySelectorAll('.navegacao a[href^="#"]');

    function descobreAdistanciaEntreASectionETopo(element) {
        const id = element.getAttribute("href");
        return document.querySelector(id).offsetTop;
    }

    function scrollNativo(distanciaEntreASectionETopo) {
        window.scroll({
            top: distanciaEntreASectionETopo,
            behavior: "smooth"
        });
    }

    function scrollSessao(event) {
        event.preventDefault();
        const distanciaEntreASectionETopo = descobreAdistanciaEntreASectionETopo(event.target) - 0;
        scrollNativo(distanciaEntreASectionETopo);
    }

    menu.forEach((link) => {
        link.addEventListener("click", scrollSessao);
    });
}
