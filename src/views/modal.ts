
export class Modal {
    private openModal: HTMLElement | null = document.querySelector('#abrir-modal');
    private closeModal: HTMLElement | null = document.querySelector('#fechar-modal');
    private modal: HTMLElement | null = document.querySelector('#modal');
    private fade: HTMLElement | null = document.querySelector('#fade');

    public togleModal(): void {
        [this.openModal, this.closeModal, this.fade].forEach((el) => {
            const dialogUnavailable: HTMLElement | null = document.querySelector('#dialogConteudoIndisponivel');

            el?.addEventListener('click', () => this.btnToggleModal());
            dialogUnavailable?.focus();

            document.addEventListener('keyup', (tecla: KeyboardEvent) => {
                if (tecla.key == 'Escape' && !this.modal?.classList.contains('hide')) {
                    this.btnToggleModal();
                }
            });
        });
    }

    private btnToggleModal(): void {
        [this.modal, this.fade].forEach((el) => el?.classList.toggle("hide"));
    }
}