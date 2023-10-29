export class LoaderModel {
  static onLoad() {
    const load = document.querySelector('#load');
    if (load) {
      load.style.display = 'flex';
    }
    window.addEventListener('load', () => {
      if (load) {
        load.style.display = 'none';
      }
    });
  }
}
