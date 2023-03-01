export function modal(): void {
    const openModal: HTMLElement | null = document.querySelector('#abrir-modal');
    const closeModal: HTMLElement | null = document.querySelector('#fechar-modal');
    const modal: HTMLElement | null = document.querySelector('#modal');
    const fade: HTMLElement | null = document.querySelector('#fade');

    const toggleModal = () => {
        [modal, fade].forEach((el) => el?.classList.toggle('hide'));
    }

    [openModal, closeModal, fade].forEach((el) => {
        const dialogUnavailable: HTMLElement | null = document.querySelector('#dialogConteudoIndisponivel');

        el?.addEventListener('click', () => toggleModal());
        dialogUnavailable?.focus();
    });

    document.addEventListener('keyup', (tecla: KeyboardEvent) => {
        if (tecla.key == 'Escape' && !modal?.classList.contains('hide')) {
            toggleModal();
        }
    });
}
