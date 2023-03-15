export function aboutSection(): void {
    let aboutSection: HTMLElement | null = document.querySelector("#sobre");

    if (aboutSection) {
        aboutSection.innerHTML = `
            <article id="artigo">
                <div id="nome"></div>
                <p id="titulo"><i>Desenvolvedor Web Full-Stack</i></p>
                <p class="descricao">
                    Entusiasta e Amante da programação, cursando Análise e
                    Desenvolvimento de Sistemas na universidade de ensino
                    Estácio de Sá, atualmente no 4° semestre.
                </p>
                <p>
                    Trabalho na
                    <span class="highlight">Target.IT</span> como Estagiário
                    de Desenvolvimento.
                </p>
                <br />
                <p class="descricao">
                    Atuo tanto no
                    <span class="highlight">front-end</span> como no
                    <span class="highlight">back-end</span>, estudo todos os
                    dias buscando aprimorar meus conhecimentos e habilidades
                    para me tornar cada vez melhor no que faço.
                </p>

                <button type="application/pdf" class="btn-cv" id="abrir-modal">
                    <i class="fa-solid fa-cloud-arrow-down"></i><span class="cv-letra"
                        title="Botão para baixar o currículo em pdf">
                        Download CV</span>
                </button>
                <div id="divModal"></div>
            </article>
            `
    }
}
