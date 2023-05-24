(()=>{"use strict";class e{constructor(){this.progress=document.querySelector("#progress")}scroll(){window.addEventListener("scroll",(()=>{let e=document.body.scrollHeight-window.innerHeight,t=document.documentElement.scrollTop/e*100;this.progress&&(this.progress.style.width=`${t}%`)}))}}class t{constructor(){this.lightTheme={"--main-color":"#0B5ED7","--main-text-color":"#333333","--main-bg-color":"#EEEEEE","--bg-color":"#FFFFFF"},this.darkTheme={"--main-color":"#F39C12","--main-text-color":"#EEEEEE","--main-bg-color":"#333333","--bg-color":"#262626"},this.input=document.querySelector("#theme"),this.root=document.documentElement,this.ball=document.querySelector(".dark-mode .ball"),this.init()}init(){var e,t,n;null===(e=this.input)||void 0===e||e.addEventListener("change",(()=>{var e,t,n;let o;(null===(e=this.input)||void 0===e?void 0:e.checked)?(o="DARK",this.changeTheme(this.darkTheme),null===(t=this.ball)||void 0===t||t.classList.add("active")):(o="LIGHT",this.changeTheme(this.lightTheme),null===(n=this.ball)||void 0===n||n.classList.add("disable")),localStorage.setItem("PageTheme",JSON.stringify(o))}));let o,s=localStorage.getItem("PageTheme");o=null!=s?JSON.parse(s):"LIGHT","DARK"===o?(this.input&&(this.input.checked=!0),null===(t=this.ball)||void 0===t||t.classList.add("active"),this.changeTheme(this.darkTheme)):(this.input&&(this.input.checked=!1),null===(n=this.ball)||void 0===n||n.classList.add("disable"),this.changeTheme(this.lightTheme))}changeTheme(e){for(let t in e)this.changeProperty(t,e[t])}changeProperty(e,t){this.root.style.setProperty(e,t)}}class n{start(e,t,n){const o=t.split("").reverse(),s=setInterval((()=>{if(!o.length)return void clearInterval(s);const t=o.pop();e&&(e.innerHTML+=t)}),n)}}class o{static onLoad(){const e=document.querySelector("#load");e&&(e.style.display="flex"),window.addEventListener("load",(()=>{e&&(e.style.display="none")}))}}class s{constructor(){this.links=document.querySelectorAll('.navegacao a[href^="#"]'),this.openNav=document.querySelector("#open-btn"),this.closeNav=document.querySelector("#close-btn"),this.nav=document.querySelector("#nav"),this.fadeNav=document.querySelector("#fadeNav"),this.input=document.querySelector("input")}btnTogleNav(){var e,t;null===(e=this.nav)||void 0===e||e.classList.toggle("navHide"),null===(t=this.fadeNav)||void 0===t||t.classList.toggle("navHide")}togleNav(){[this.openNav,this.closeNav,this.fadeNav,this.input].forEach((e=>{null==e||e.addEventListener("click",(()=>this.btnTogleNav()))})),this.links.forEach((e=>{e.addEventListener("click",(()=>this.btnTogleNav()))}))}}class a{render(){const a=document.querySelector("#digit");o.onLoad(),function(){let e=document.title,t=0,n=!0,o=setInterval(a,2e3),s=["Desenvolvedor Back end","Desenvolvedor Front end","Desenvolvedor Full Stack","Guilherme Amaral"];function a(){document.title=s[t%s.length],t++}window.addEventListener("focus",(()=>{n||(n=!0,document.title=e,o=setInterval(a,2e3))})),window.addEventListener("blur",(()=>{n&&(n=!1,document.title="Volta aqui! ;(",clearInterval(o))}))}(),(new e).scroll(),(new s).togleNav(),new t,function(){function e(e){var t;e.preventDefault(),t=function(e){const t=e.getAttribute("href");return document.querySelector(t).offsetTop}(e.target)-0,window.scrollTo({top:t,behavior:"smooth"})}document.querySelectorAll('.navegacao a[href^="#"]').forEach((t=>{t.addEventListener("click",e)}))}(),(new n).start(a,"Desenvolvedor web Full Stack.",100)}}class r{constructor(e){this.url=e}}class i extends r{constructor(e){super(e)}async getData(){const e=await fetch(this.url);return await e.json()}}class l extends r{constructor(e){super(e)}async getData(){const e=await fetch(this.url);return await e.json()}}class c{static createProjectsApi(){return new i("https://api-mini-projetos-guimrl.vercel.app/nprojects")}static createGithubApi(){return new l("https://api.github.com/users/guimrl")}}class d extends l{static getApi(e){const t=document.getElementById("imagem"),n=document.getElementById("nome"),o=`\n        <img src="${e.avatar_url}" class="imagem" alt="${e.name} vestindo\n        uma camiseta preta, com barba bem aparada e cabelo curto, em um fundo\n        colorido com tonalidades de laranja e branco." />`,s=`<h2>${e.name}</h2>`;t&&(t.innerHTML=o),n&&(n.innerHTML=s)}}const u=document.querySelector("#projetos");(new class{init(){try{(new a).render(),c.createGithubApi().getData().then((e=>d.getApi(e))).catch((e=>{404===e.request.status?console.error(`Error: ${e.request.statusText} - ${e.request.status}`):console.error(`Error: ${e}`)})).finally((()=>{console.log("Página carregada com sucesso!")})),c.createProjectsApi().getData().then((e=>function(e){e.forEach((e=>{const{alt:t,description:n,image:o,url:s,_id:a}=e,r=document.createElement("div");r.classList.add("projetos"),r.innerHTML=`\n        <figure id="projeto-conteudo" class="projeto-conteudo">\n            <img src="${o}" alt="${t}" class="projeto-imagem" loading="lazy">\n                <figcaption class="descricao-projeto" id="${a}">\n                    ${n}\n                    <br><br>\n                    <a href="${s}" aria-labelledby="${a}" id="btn-projeto"\n                        target="_blank">Ver Site</a>\n                </figcaption>\n        </figure>\n        `,u&&u.appendChild(r)}))}(e)))}catch(e){console.log(e.message)}}}).init()})();