// import React, { useEffect, useState } from 'react';

// const ThemeSwitcher = () => {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);
//   const lightTheme = {
//     '--main-color': '#0B5ED7',
//     '--main-text-color': '#333333',
//     '--main-bg-color': '#EEEEEE',
//     '--bg-color': '#FFFFFF',
//   };
//   const darkTheme = {
//     '--main-color': '#F39C12',
//     '--main-text-color': '#EEEEEE',
//     '--main-bg-color': '#333333',
//     '--bg-color': '#262626',
//   };

//   useEffect(() => {
//     const input = document.querySelector('#theme') as HTMLInputElement;
//     const root = document.documentElement;
//     const ball = document.querySelector('.dark-mode .ball');

//     const handleThemeChange = () => {
//       const GetTheme = input.checked ? 'DARK' : 'LIGHT';

//       setIsDarkTheme(input.checked);

//       if (input.checked) {
//         changeTheme(darkTheme);
//         ball?.classList.add('active');
//       } else {
//         changeTheme(lightTheme);
//         ball?.classList.add('disable');
//       }

//       localStorage.setItem('PageTheme', JSON.stringify(GetTheme));
//     };

//     const storedTheme = localStorage.getItem('PageTheme');
//     const theme = storedTheme !== null ? JSON.parse(storedTheme) : 'LIGHT';

//     if (theme === 'DARK') {
//       if (input) {
//         input.checked = true;
//       }
//       ball?.classList.add('active');
//       changeTheme(darkTheme);
//       setIsDarkTheme(true);
//     } else {
//       if (input) {
//         input.checked = false;
//       }
//       ball?.classList.add('disable');
//       changeTheme(lightTheme);
//       setIsDarkTheme(false);
//     }

//     input?.addEventListener('change', handleThemeChange);

//     return () => {
//       input?.removeEventListener('change', handleThemeChange);
//     };
//   }, []);

//   const changeTheme = (theme) => {
//     for (let prop in theme) {
//       changeProperty(prop, theme[prop]);
//     }
//   };

//   const changeProperty = (property, value) => {
//     document.documentElement.style.setProperty(property, value);
//   };

//   return (
//     <div>
//       <input id="theme" type="checkbox" checked={isDarkTheme} onChange={() => {}} />
//     </div>
//   );
// };

// export default ThemeSwitcher;
