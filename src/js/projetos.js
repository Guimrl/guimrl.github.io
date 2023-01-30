const projetos = [
    {
        imagem: "https://user-images.githubusercontent.com/88007295/214310217-86278fce-d009-4fd9-8f39-c98bd8def31a.png",
        alt: "Repositório de Mini Projetos",
        descricao: "Mini Projetos para treinar HTML, CSS e JavaScript Vanilla.",
        link: "https://guimrl.github.io/mini-projetos/",
        figId: "fig1"
    },
    {
        imagem: "https://user-images.githubusercontent.com/88007295/214310215-1d8538c0-ea03-4f82-bdb7-21d4aafcbad0.png",
        alt: "Site oficial banda Gran Toro",
        descricao: "Site desenvolvido para a banda Gran Toro. O design e cores utilizadas correspondem à identidade visual da mesma.",
        link: "https://grantoro.github.io/",
        figId: "fig2"
    },
    {
        imagem: "https://user-images.githubusercontent.com/88007295/214310221-c5b6ee06-2c83-4c94-b39e-7916afac27d3.png",
        alt: "jogo mortynight run",
        descricao: "Jogo para navegador inspirado na série de TV Rick and Morty, o objetivo é clicar nos Mortys enquanto o cronômetro não estiver zerado.",
        link: "https://guimrl.github.io/mortynight-run/",
        figId: "fig3"
    },
    {
        imagem: "https://user-images.githubusercontent.com/88007295/214310226-e96db8ab-425e-4e00-8031-e1555d6c4aef.png",
        alt: "Jogo Número Secreto",
        descricao: "Jogo com reconhecimento de voz, o objetivo é encontrar o número secreto entre 1 e 1000.",
        link: "https://guimrl.github.io/numero-secreto/",
        figId: "fig4"
    },
    {
        imagem: "https://user-images.githubusercontent.com/88007295/214310211-1d29bb4c-da31-4ba9-90a3-2e452964de5d.png",
        alt: "Aplicativo Lista de Tarefas",
        descricao: "Aplicativo de gerenciamento de tarefas. Ele permite que os usuários gerenciem suas tarefas.",
        link: "http://listatarefas.epizy.com/nova_tarefa.php",
        figId: "fig5"
    },
    {
        imagem: "https://user-images.githubusercontent.com/88007295/214310219-92ed809b-00f5-4464-b7c0-c461dd74951c.png",
        alt: "Página inicial projeto fictício money bank",
        descricao: "Site de um banco fictício desenvolvido para treinar validação de formulário e eventos em JavaScript",
        link: "https://guimrl.github.io/money-bank/pages/abrir-conta-form.html",
        figId: "fig6"
    }
]

export function criaProjetos() {
    const section = document.querySelector('#projetos');
    projetos.forEach(projeto => {
        const div = document.createElement("div");
        div.classList.add("projetos");

        div.innerHTML = `
        <figure id="projeto-conteudo" class="projeto-conteudo">
            <img src="${projeto.imagem}" alt="${projeto.alt}" class="projeto-imagem" loading="lazy">
                <figcaption class="descricao-projeto" id="${projeto.figId}">
                    ${projeto.descricao}
                    <br><br>
                    <a href="${projeto.link}" aria-labelledby="${projeto.figId}" id="btn-projeto"
                        target="_blank">Ver Site</a>
                </figcaption>
        </figure>
        `;

        section.appendChild(div);
    });
}
