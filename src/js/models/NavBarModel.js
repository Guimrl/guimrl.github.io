export class NavBarModel {
  constructor() {
    this.links = document.querySelectorAll('.navegacao a[href^="#"]');
    this.openNav = document.querySelector('#open-btn');
    this.closeNav = document.querySelector('#close-btn');
    this.nav = document.querySelector('#nav');
    this.fadeNav = document.querySelector('#fadeNav');
    this.input = document.querySelector('input');
  }
  btnTogleNav() {
    var _a, _b;
    (_a = this.nav) === null || _a === void 0
      ? void 0
      : _a.classList.toggle('navHide');
    (_b = this.fadeNav) === null || _b === void 0
      ? void 0
      : _b.classList.toggle('navHide');
  }
  togleNav() {
    [this.openNav, this.closeNav, this.fadeNav, this.input].forEach(el => {
      el === null || el === void 0
        ? void 0
        : el.addEventListener('click', () => this.btnTogleNav());
    });
    this.links.forEach(link => {
      link.addEventListener('click', () => this.btnTogleNav());
    });
  }
}
