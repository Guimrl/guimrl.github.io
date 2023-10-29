import React from 'react';
import Home from './Home/Home';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Projects from './Projects/Projects';
import About from './About/About';
import Title from '../utils';
import { Progress } from '../global';

const Main = () => {
  return (
    <BrowserRouter>
      <Title />
      <Progress />
      <Header />
      <Home />
      <About />
      <Projects />
      {/* <Skills /> */}
      <Footer />
    </BrowserRouter>
  );
};

// const Main = () => {
//   return (
//     <main role="main">
//       <div id="progress" className="progress"></div>
//       <Home />
//       <section id="sobre" className="container">
//         <article id="artigo">
//           <div id="nome"></div>
//           <p id="titulo">
//             <i>Desenvolvedor Web Full-Stack</i>
//           </p>
//           <p className="descricao">
//             Entusiasta e Amante da programação, cursando Análise e
//             Desenvolvimento de Sistemas na universidade de ensino Estácio de Sá,
//             atualmente no 5° semestre.
//           </p>
//           <p>
//             Trabalho na
//             <span className="highlight">
//               <a
//                 href="https://decisionsystems.com.br/"
//                 target="_blank"
//                 id="decision"
//               >
//                 Decision Systems
//               </a>
//             </span>{' '}
//             como Estagiário Desenvolvedor Front End.
//           </p>
//           <br />
//           <p className="descricao">
//             Atuo tanto no
//             <span className="highlight">front-end</span> como no
//             <span className="highlight">back-end</span>, estudo todos os dias
//             buscando aprimorar meus conhecimentos e habilidades para me tornar
//             cada vez melhor no que faço.
//           </p>

//           {/* <button type="application/pdf" className="btn-cv" id="abrir-modal">
//             <i className="fa-solid fa-cloud-arrow-down">
//               <a
//                 href="./GUILHERME-AMARAL-DEV.pdf"
//                 download="GUILHERME-AMARAL-DEV.pdf"
//               ></a>
//             </i>
//             <span
//               className="cv-letra"
//               title="Botão para baixar o currículo em pdf"
//             >
//               Download CV
//             </span>
//           </button> */}
//           <div id="divModal"></div>
//         </article>
//       </section>
//       <section id="tecnologias" className="skills-container">
//         <article>
//           <h2 className="projeto-container-titulo">Tecnologias</h2>
//           <p className="skills-description">
//             Conheça as tecnologias que domino:
//           </p>
//           <div id="skills-mini-container">
//             <div className="skills-box">
//               <p className="skills-title">Front-end</p>
//               <i className="devicon-html5-plain colored"></i>
//               <i className="devicon-css3-plain colored"></i>
//               <i className="devicon-javascript-plain colored"></i>
//               <i className="devicon-typescript-plain colored"></i>
//             </div>
//             <div className="skills-box">
//               <p className="skills-title">Back-end</p>
//               <i className="devicon-php-plain colored"></i>
//               <i className="devicon-nodejs-plain colored"></i>
//               <i className="devicon-java-plain-wordmark colored"></i>
//             </div>
//             <div className="skills-box">
//               <p className="skills-title">Databases</p>
//               <i className="devicon-mysql-plain colored"></i>
//               <i className="devicon-postgresql-plain colored"></i>
//               <i className="devicon-oracle-original colored"></i>
//               <i className="devicon-mongodb-plain colored"></i>
//             </div>
//             <div className="skills-box">
//               <p className="skills-title">Frameworks</p>
//               <i className="devicon-react-original colored"></i>
//               <i className="devicon-laravel-plain colored"></i>
//               <i className="devicon-graphql-plain colored"></i>
//               <i className="devicon-bootstrap-plain colored"></i>
//               <i className="devicon-express-original-wordmark colored"></i>
//             </div>
//           </div>
//         </article>
//       </section>
//       <section id="projetos" className="projetos-container">
//         <h2 className="projeto-container-titulo">Projetos</h2>
//       </section>
//     </main>
//   );
// };

export default Main;
