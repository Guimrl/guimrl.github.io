const section = document.querySelector("#projetos");
export function createProjects(projects) {
    projects.forEach((project) => {
        const { alt, description, image, url, _id } = project;
        const div = document.createElement("div");
        div.classList.add("projetos");
        div.innerHTML = `
        <figure id="projeto-conteudo" class="projeto-conteudo">
            <img src="${image}" alt="${alt}" class="projeto-imagem" loading="lazy">
                <figcaption class="descricao-projeto" id="${_id}">
                    ${description}
                    <br><br>
                    <a href="${url}" aria-labelledby="${_id}" id="btn-projeto"
                        target="_blank">Ver Site</a>
                </figcaption>
        </figure>
        `;
        if (section) {
            section.appendChild(div);
        }
    });
}
