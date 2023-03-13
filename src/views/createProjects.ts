import { Projects } from "../interfaces/ProjectsInterface";
import { projects } from "../services/projects";

export function createProjects(): void {
    const section: HTMLElement | null = document.querySelector('#projetos');
    projects.forEach((project: Projects) => {
        const div: HTMLElement = document.createElement("div");
        div.classList.add("projetos");

        div.innerHTML = `
        <figure id="projeto-conteudo" class="projeto-conteudo">
            <img src="${project.imagem}" alt="${project.alt}" class="projeto-imagem" loading="lazy">
                <figcaption class="descricao-projeto" id="${project.figId}">
                    ${project.descricao}
                    <br><br>
                    <a href="${project.link}" aria-labelledby="${project.figId}" id="btn-projeto"
                        target="_blank">Ver Site</a>
                </figcaption>
        </figure>
        `;

        if (section) {
            section.appendChild(div);
        }
    });
}
