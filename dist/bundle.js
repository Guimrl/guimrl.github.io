(()=>{"use strict";console.log("página carregada");const e=document.querySelectorAll('.navegacao a[href^="#"]');function t(e){var t;e.preventDefault(),t=function(e){const t=e.getAttribute("href");return document.querySelector(t).offsetTop}(e.target)-0,window.scroll({top:t,behavior:"smooth"})}e.forEach((e=>{e.addEventListener("click",t)}));const o=document.querySelector(".open-btn"),n=document.querySelector(".close-btn"),c=document.querySelector(".nav");o.addEventListener("click",(()=>{c.classList.add("visivel")})),n.addEventListener("click",(()=>{c.classList.remove("visivel")})),e.forEach((e=>{e.addEventListener("click",(()=>c.classList.remove("visivel")))}));let a=document.title;window.addEventListener("blur",(()=>{document.title="Volta aqui! :("})),window.addEventListener("focus",(()=>{document.title=a})),function(e,t,o){const n="Desenvolvedor Full Stack.".split("").reverse(),c=setInterval((()=>{if(!n.length)return clearInterval(c);const t=n.pop();e.innerHTML+=t}),100)}(document.querySelector("#digit"));const r=document.getElementById("imagem"),l=document.getElementById("nome");!async function(){axios.get("https://api.github.com/users/guimrl").then((e=>{!function(e){const t=`\n    <img src="${e.data.avatar_url}" class="imagem" alt="foto de ${e.data.name}\n    vestindo camiseta preta, de barba, cabelo baixo e com o fundo laranja e branco.">\n    `;r.innerHTML=t}(e),function(e){const t=`\n    <h2>${e.data.name}</h2>\n    `;l.innerHTML=t}(e)})).catch((e=>{404===e.request.status?console.log("Erro 404"):console.log(e)})).finally((e=>{console.log("Página carregada!")}))}();const i=document.querySelector("#theme"),s=document.documentElement,d={"--main-color":"#0b5ed7","--main-text-color":"#333333","--main-bg-color":"#eeeeee","--bg-color":"#FFFFFF"},u={"--main-color":"#F39C12","--main-text-color":"#EEEEEE","--main-bg-color":"#333333","--bg-color":"#262626"};function m(e){for(let n in e)t=n,o=e[n],s.style.setProperty(t,o);var t,o}i.addEventListener("change",(()=>{let e;i.checked?(e="DARK",m(u)):(e="LIGHT",m(d)),localStorage.setItem("PageTheme",JSON.stringify(e))})),"DARK"===JSON.parse(localStorage.getItem("PageTheme"))&&m(u)})();