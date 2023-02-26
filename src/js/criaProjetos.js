import { projetos } from "./projetos";
export function criaProjetos() {
    const section = document.querySelector('#projetos');
    projetos.forEach((projeto) => {
        const div = document.createElement("div");
        div.classList.add("projetos");
        div.innerHTML = `
        <figure id="projeto-conteudo" class="projeto-conteudo">
            <img src="${projeto.imagem}" alt="${projeto.alt}" class="projeto-imagem" loading="lazy">
                <figcaption class="descricao-projeto" id="${projeto.figId}">
                    ${projeto.descricao}
                    <br><br>
                    <<a href="${projeto.link}" aria-labelledby="${projeto.figId}" id="btn-projeto"
                        target="_blank">Ver Site</a>
                </figcaption>
        </figure>
        `;
        section === null || section === void 0 ? void 0 : section.appendChild(div);
    });
}
