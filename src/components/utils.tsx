import { useState, useEffect } from 'react';

const Title = () => {
  const [isWindowFocused, setIsWindowFocused] = useState(true);
  const originalTitle = document.title;
  let counter = 0;
  const arrayTitle = [
    'Desenvolvedor Back end',
    'Desenvolvedor Front end',
    'Desenvolvedor Full Stack',
    'Guilherme Amaral',
  ];

  const tradeTitle = () => {
    document.title = arrayTitle[counter % arrayTitle.length];
    counter++;
  };

  let interval;

  useEffect(() => {
    interval = setInterval(tradeTitle, 2000);

    const onFocus = () => {
      if (!isWindowFocused) {
        setIsWindowFocused(true);
        document.title = originalTitle;
        interval = setInterval(tradeTitle, 2000);
      }
    };

    const onBlur = () => {
      if (isWindowFocused) {
        setIsWindowFocused(false);
        document.title = 'Volta aqui! ;(';
        clearInterval(interval);
      }
    };

    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);

    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
      clearInterval(interval);
    };
  }, [isWindowFocused, originalTitle]);

  return null;
};

export default Title;
