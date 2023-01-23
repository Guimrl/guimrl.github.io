export function modal() {
    const abrirModal = document.querySelector('#abrir-modal');
    const fecharModal = document.querySelector('#fechar-modal');
    const modal = document.querySelector('#modal');
    const fade = document.querySelector('#fade');

    const toggleModal = () => {
        [modal, fade].forEach((el) => el.classList.toggle('hide'));
    }

    [abrirModal, fecharModal, fade].forEach((el) => {
        el.addEventListener('click', () => toggleModal());
    })
}
