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
        document.querySelector('#dialogConteudoIndisponivel').focus();
    });

    document.addEventListener('keyup', function(tecla) {
        if(tecla.keyCode == 27 && !modal.classList.contains('hide')) {
            toggleModal();
        }
    });
}
