export function scrollSmooth() {
    const menu = document.querySelectorAll('.navegacao a[href^="#"]');

    function descobreAdistanciaEntreASectionETopo(element: any) {
        const id = element.getAttribute("href");
        return document.querySelector(id).offsetTop;
    }

    function scrollNativo(distanciaEntreASectionETopo: any) {
        window.scroll({
            top: distanciaEntreASectionETopo,
            behavior: "smooth"
        });
    }

    function scrollSessao(event: any) {
        event.preventDefault();
        const distanciaEntreASectionETopo = descobreAdistanciaEntreASectionETopo(event.target) - 0;
        scrollNativo(distanciaEntreASectionETopo);
    }

    menu.forEach((link) => {
        link.addEventListener("click", scrollSessao);
    });
}
