export class DialogModel {
  constructor() {
    this.openModal = document.querySelector('#abrir-modal');
    this.closeModal = document.querySelector('#fechar-modal');
    this.modal = document.querySelector('#modal');
    this.fade = document.querySelector('#fade');
  }
  btnToggleModal() {
    [this.modal, this.fade].forEach(el =>
      el === null || el === void 0 ? void 0 : el.classList.toggle('hide'),
    );
  }
  togleModal() {
    [this.openModal, this.closeModal, this.fade].forEach(el => {
      const dialogUnavailable = document.querySelector(
        '#dialogConteudoIndisponivel',
      );
      el === null || el === void 0
        ? void 0
        : el.addEventListener('click', () => this.btnToggleModal());
      dialogUnavailable === null || dialogUnavailable === void 0
        ? void 0
        : dialogUnavailable.focus();
      document.addEventListener('keyup', tecla => {
        var _a;
        if (
          tecla.key == 'Escape' &&
          !((_a = this.modal) === null || _a === void 0
            ? void 0
            : _a.classList.contains('hide'))
        ) {
          this.btnToggleModal();
        }
      });
    });
  }
}
