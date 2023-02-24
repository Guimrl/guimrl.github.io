export function modal() {
    const abrirModal = document.querySelector('#abrir-modal');
    const fecharModal = document.querySelector('#fechar-modal');
    const modal = document.querySelector('#modal');
    const fade = document.querySelector('#fade');
    const toggleModal = () => {
        [modal, fade].forEach((el) => el === null || el === void 0 ? void 0 : el.classList.toggle('hide'));
    };
    [abrirModal, fecharModal, fade].forEach((el) => {
        el === null || el === void 0 ? void 0 : el.addEventListener('click', () => toggleModal());
    });
    document.addEventListener('keyup', function (tecla) {
        if (tecla.keyCode == 27 && !(modal === null || modal === void 0 ? void 0 : modal.classList.contains('hide'))) {
            toggleModal();
        }
    });
}
