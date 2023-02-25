export function modal() {
    const openModal = document.querySelector('#abrir-modal');
    const closeModal = document.querySelector('#fechar-modal');
    const modal = document.querySelector('#modal');
    const fade = document.querySelector('#fade');
    const toggleModal = () => {
        [modal, fade].forEach((el) => el === null || el === void 0 ? void 0 : el.classList.toggle('hide'));
    };
    [openModal, closeModal, fade].forEach((el) => {
        const dialogUnavailable = document.querySelector('#dialogConteudoIndisponivel');
        el === null || el === void 0 ? void 0 : el.addEventListener('click', () => toggleModal());
        dialogUnavailable === null || dialogUnavailable === void 0 ? void 0 : dialogUnavailable.focus();
    });
    document.addEventListener('keyup', (tecla) => {
        if (tecla.key == 'Escape' && !(modal === null || modal === void 0 ? void 0 : modal.classList.contains('hide'))) {
            toggleModal();
        }
    });
}
