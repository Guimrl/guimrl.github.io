export function createNav(): void {
    const header: HTMLElement | null = document.querySelector("header");

    if (header) {
        header.innerHTML = `
        <nav>
            <button id="open-btn" class="open-btn navbar-btn" title="abrir barra de navegação lateral">
                <i class="fas fa-bars"></i>
            </button>
            <div id="fadeNav" class="navHide"></div>
            <div id="nav" class="nav navHide">
                <button id="close-btn" class="close-btn navbar-btn" title="fechar barra de navegação lateral">
                    <i class="fas fa-times"></i>
                </button>
                <ul class="navegacao">
                    <li><a href="#inicio" title="pular para início">início</a></li>
                    <li><a href="#sobre" title="pular para sobre">sobre</a></li>
                    <li><a href="#projetos" title="pular para projetos">projetos</a></li>
                </ul>

                <div id="dark-mode-theme">
                    <input type="checkbox" name="theme" id="theme" class="checkbox"
                        title="alterar tema da página entre claro ou escuro" />
                    <label for="theme" class="dark-mode">
                        <i class="fas fa-sun"></i>
                        <i class="fas fa-moon"></i>
                        <div class="ball"></div>
                    </label>
                </div>
            </div>
            </div>
        </nav>`;
    }
}
