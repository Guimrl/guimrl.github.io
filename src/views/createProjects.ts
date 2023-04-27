import { Projects } from "src/interfaces/ProjectsInterface";

const section: HTMLElement | null = document.querySelector("#projetos");
export function createProjects(projects: Projects[]): void {
    projects.forEach((project) => {
        const { alt, description, image, url, _id } = project;
        const div: HTMLElement = document.createElement("div");
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
        `
        if (section) {
            section.appendChild(div);
        }
    });
}
