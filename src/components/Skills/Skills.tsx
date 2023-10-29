import React from 'react';

const Skills = () => {
  return (
    <section id="tecnologias" className="skills-container">
      <article>
        <h2 className="projeto-container-titulo">Tecnologias</h2>
        <p className="skills-description">Conheça as tecnologias que domino:</p>
        <div id="skills-mini-container">
          <div className="skills-box">
            <p className="skills-title">Front-end</p>
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-typescript-plain colored"></i>
          </div>
          <div className="skills-box">
            <p className="skills-title">Back-end</p>
            <i className="devicon-php-plain colored"></i>
            <i className="devicon-nodejs-plain colored"></i>
            <i className="devicon-java-plain-wordmark colored"></i>
          </div>
          <div className="skills-box">
            <p className="skills-title">Databases</p>
            <i className="devicon-mysql-plain colored"></i>
            <i className="devicon-postgresql-plain colored"></i>
            <i className="devicon-oracle-original colored"></i>
            <i className="devicon-mongodb-plain colored"></i>
          </div>
          <div className="skills-box">
            <p className="skills-title">Frameworks</p>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-laravel-plain colored"></i>
            <i className="devicon-graphql-plain colored"></i>
            <i className="devicon-bootstrap-plain colored"></i>
            <i className="devicon-express-original-wordmark colored"></i>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Skills;
