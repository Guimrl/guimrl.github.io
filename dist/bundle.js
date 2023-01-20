/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("// Efeito Smooth da navegação\nvar menu = document.querySelectorAll('.navegacao a[href^=\"#\"]');\nfunction descobreAdistanciaEntreASectionETopo(element) {\n  var id = element.getAttribute(\"href\");\n  return document.querySelector(id).offsetTop;\n}\nfunction scrollNativo(distanciaEntreASectionETopo) {\n  window.scroll({\n    top: distanciaEntreASectionETopo,\n    behavior: \"smooth\"\n  });\n}\nfunction scrollSessao(event) {\n  event.preventDefault();\n  var distanciaEntreASectionETopo = descobreAdistanciaEntreASectionETopo(event.target) - 0;\n  scrollNativo(distanciaEntreASectionETopo);\n}\nmenu.forEach(function (link) {\n  link.addEventListener(\"click\", scrollSessao);\n});\n\n// Evento de click da Navbar\nvar openBtn = document.querySelector('.open-btn');\nvar closeBtn = document.querySelector('.close-btn');\nvar nav = document.querySelector('.nav');\nopenBtn.addEventListener('click', function () {\n  nav.classList.add('visivel');\n});\ncloseBtn.addEventListener('click', function () {\n  nav.classList.remove('visivel');\n});\nmenu.forEach(function (link) {\n  link.addEventListener(\"click\", function () {\n    return nav.classList.remove('visivel');\n  });\n});\n\n// Muda o title do HTML quando o usuario pressiona tab\nvar title = document.title;\nwindow.addEventListener(\"blur\", function () {\n  document.title = 'Volta aqui! :(';\n});\nwindow.addEventListener(\"focus\", function () {\n  document.title = title;\n});\n\n//Texto que digita sozinho\nvar elemento = document.querySelector('#digit');\nvar texto = \"Desenvolvedor Full Stack.\";\nvar intervalo = 100;\nfunction digitaTexto(elemento, texto, intervalo) {\n  var caractere = texto.split(\"\").reverse();\n  var digitador = setInterval(function () {\n    if (!caractere.length) {\n      return clearInterval(digitador);\n    }\n    var proximaLetra = caractere.pop();\n    elemento.innerHTML += proximaLetra;\n  }, intervalo);\n}\ndigitaTexto(elemento, texto, intervalo);\n\n//# sourceURL=webpack://portfolio/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;