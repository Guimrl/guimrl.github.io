export function createModal(): void {
    let divModal: HTMLElement | null = document.querySelector("#divModal");

    if (divModal) {
        divModal.innerHTML = `
        <div id="fade" class="hide"></div>
            <div id="modal" class="hide" role="dialog">
                <div class="modal-header">
                    <h2>Esse recurso está temporariamente indisponível</h2>
                    <button id="fechar-modal" title="Fechar janela de Dialogo">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <p id="dialogConteudoIndisponivel">
                        O Botão de download do curriculo está temporariamente desabilitado ou indisponivel
                    </p>
                </div>
            </div>
        `;
    }
}
