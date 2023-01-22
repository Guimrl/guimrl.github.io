export function digitaTexto(elemento, texto, intervalo) {
    const caractere = texto.split("").reverse();
    const digitador = setInterval(() => {

        if (!caractere.length) {
            return clearInterval(digitador);
        }

        const proximaLetra = caractere.pop();

        elemento.innerHTML += proximaLetra;
    }, intervalo);
}
