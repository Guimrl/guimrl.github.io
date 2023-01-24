const projetos = [
    {
        imagem: "https://user-images.githubusercontent.com/88007295/213883176-d2471b02-b34f-44ee-a762-215ff4864847.png",
        alt: "Repositório de Mini Projetos",
        descricao: "Mini Projetos para treinar HTML, CSS e JavaScript Vanilla.",
        link: "https://guimrl.github.io/mini-projetos/",
        FigId: "fig1"
    },
    {
        imagem: "https://user-images.githubusercontent.com/88007295/210238502-cb35a5e0-03dc-4345-ae1b-c3a8dfdaeb7d.png",
        alt: "Site oficial banda Gran Toro",
        descricao: "Site desenvolvido para a banda Gran Toro. O design e cores utilizadas correspondem à identidade visual da mesma.",
        link: "https://grantoro.github.io/",
        FigId: "fig2"
    },
    {
        imagem: "https://user-images.githubusercontent.com/88007295/209858541-f79b5773-6f21-4e43-a772-a758bd43375b.png",
        alt: "jogo mortynight run",
        descricao: "Jogo para navegador inspirado na série de TV Rick and Morty, o objetivo é clicar nos Mortys enquanto o cronômetro não estiver zerado.",
        link: "https://guimrl.github.io/mortynight-run/",
        figId: "fig3"
    },
    {
        imagem: "https://user-images.githubusercontent.com/88007295/209858540-e102543c-10e5-4e80-a296-668677612a6c.png",
        alt: "Jogo Número Secreto",
        descricao: "Jogo com reconhecimento de voz, o objetivo é encontrar o número secreto entre 1 e 1000.",
        link: "https://guimrl.github.io/numero-secreto/",
        figId: "fig4"
    },
    {
        imagem: "https://user-images.githubusercontent.com/88007295/209858537-ecd6eb34-1a86-4316-9e5a-8e19b0e717f0.png",
        alt: "Aplicativo Lista de Tarefas",
        descricao: "Aplicativo de gerenciamento de tarefas. Ele permite que os usuários gerenciem suas tarefas.",
        link: "http://listatarefas.epizy.com/nova_tarefa.php",
        figId: "fig5"
    },
    {
        imagem: "https://user-images.githubusercontent.com/88007295/214141392-288efe09-8c45-411e-8487-9b5db7317dd5.png",
        alt: "Página inicial projeto fictício money bank",
        descricao: "Site de um banco fictício desenvolvido para treinar validação de formulário e eventos em JavaScript",
        link: "https://guimrl.github.io/money-bank/pages/abrir-conta-form.html",
        figId: "fig6"
    }
]

export function criaProjetos() {
    for (let i = 0; i < projetos.length; i++) {
        let section = document.querySelector('#projetos');
        let projeto = document.createElement("div");
        projeto.classList.add("projetos");

        projeto.innerHTML += `
        <figure id="projeto-conteudo" class="projeto-conteudo">
            <img src="${projetos[i].imagem}" alt="${projetos[i].alt}" class="projeto-imagem" loading="lazy">
                <figcaption class="descricao-projeto" id="${projetos[i].FigId}">
                    ${projetos[i].descricao}
                    <br><br>
                    <a href="${projetos[i].link}" aria-labelledby="${projetos[i].FigId}" id="btn-projeto"
                        target="_blank">Ver Site</a>
                </figcaption>
        </figure>
        `;

        section.insertAdjacentElement("beforeend", projeto);
    }
}
