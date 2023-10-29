export class ThemeSwitcher {
  constructor() {
    this.lightTheme = {
      '--main-color': '#0B5ED7',
      '--main-text-color': '#333333',
      '--main-bg-color': '#EEEEEE',
      '--bg-color': '#FFFFFF',
    };
    this.darkTheme = {
      '--main-color': '#F39C12',
      '--main-text-color': '#EEEEEE',
      '--main-bg-color': '#333333',
      '--bg-color': '#262626',
    };
    this.input = document.querySelector('#theme');
    this.root = document.documentElement;
    this.ball = document.querySelector('.dark-mode .ball');
    this.init();
  }
  init() {
    var _a, _b, _c;
    (_a = this.input) === null || _a === void 0
      ? void 0
      : _a.addEventListener('change', () => {
          var _a, _b, _c;
          let GetTheme;
          if (
            (_a = this.input) === null || _a === void 0 ? void 0 : _a.checked
          ) {
            GetTheme = 'DARK';
            this.changeTheme(this.darkTheme);
            (_b = this.ball) === null || _b === void 0
              ? void 0
              : _b.classList.add('active');
          } else {
            GetTheme = 'LIGHT';
            this.changeTheme(this.lightTheme);
            (_c = this.ball) === null || _c === void 0
              ? void 0
              : _c.classList.add('disable');
          }
          localStorage.setItem('PageTheme', JSON.stringify(GetTheme));
        });
    let GetTheme = localStorage.getItem('PageTheme');
    let theme;
    GetTheme != null ? (theme = JSON.parse(GetTheme)) : (theme = 'LIGHT');
    if (theme === 'DARK') {
      if (this.input) {
        this.input.checked = true;
      }
      (_b = this.ball) === null || _b === void 0
        ? void 0
        : _b.classList.add('active');
      this.changeTheme(this.darkTheme);
    } else {
      if (this.input) {
        this.input.checked = false;
      }
      (_c = this.ball) === null || _c === void 0
        ? void 0
        : _c.classList.add('disable');
      this.changeTheme(this.lightTheme);
    }
  }
  changeTheme(theme) {
    for (let prop in theme) {
      this.changeProperty(prop, theme[prop]);
    }
  }
  changeProperty(property, value) {
    this.root.style.setProperty(property, value);
  }
}
