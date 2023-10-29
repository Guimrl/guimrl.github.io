export function title() {
  let originalTitle = document.title;
  let counter = 0;
  let isWindowFocused = true;
  let interval = setInterval(tradeTitle, 2000);
  let arrayTitle = [
    'Desenvolvedor Back end',
    'Desenvolvedor Front end',
    'Desenvolvedor Full Stack',
    'Guilherme Amaral',
  ];
  function tradeTitle() {
    document.title = arrayTitle[counter % arrayTitle.length];
    counter++;
  }
  window.addEventListener('focus', () => {
    if (!isWindowFocused) {
      isWindowFocused = true;
      document.title = originalTitle;
      interval = setInterval(tradeTitle, 2000);
    }
  });
  window.addEventListener('blur', () => {
    if (isWindowFocused) {
      isWindowFocused = false;
      document.title = 'Volta aqui! ;(';
      clearInterval(interval);
    }
  });
}
