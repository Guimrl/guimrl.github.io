export function createHome(): void {
    const home: HTMLElement | null = document.querySelector("#inicio");
    if (home) {
        home.innerHTML = `
        <div id="imagem"></div>
            <h1 class="highlight">Guilherme Amaral</h1>
            <div>
                <p><i id="digit"></i></p>
                <p id="welcome-text">Seja bem-vindo!</p>
                <ul id="social-container">
                    <li class="linkedin">
                        <a href="https://www.linkedin.com/in/guimrl/" target="_blank" title="linkedin">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>

                    <li class="github">
                        <a href="https://github.com/Guimrl" target="_blank" title="github">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </li>

                    <li class="instagram">
                        <a href="https://www.instagram.com/this.guimrl/" target="_blank" title="instagram">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul id="email-container">
                    <li class="email">
                        <i class="fa-regular fa-envelope"></i>
                        <a href="mailto:gui.amaral123@outlook.com" title="email">gui.amaral123@outlook.com</a>
                    </li>
                    <li class="whatsapp">
                        <i class="fa-brands fa-whatsapp"></i>
                        <a href="https://api.whatsapp.com/send?phone=5551989515251
                        &text=Fala,%20Gui!%20Dei%20uma%20olhada%20no%20teu%20portfólio,%20vamos%20bater%20um%20papo?!"
                            target="_blank" title="whatsapp">+55 51 98951-5251</a>
                    </li>
                </ul>
            </div>`;
    }
}
