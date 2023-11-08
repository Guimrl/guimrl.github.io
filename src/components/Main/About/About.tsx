import React from 'react';
import { Container, Highlight } from 'src/components/global';
import { Decision, Description, Name, Title } from './Styles';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element name="Sobre">
      <Container>
        <article id="artigo">
          <Name id="nome"></Name>
          <Title>
            <i>Desenvolvedor Web Full-Stack</i>
          </Title>
          <Description>
            Entusiasta e Amante da programação, cursando Análise e
            Desenvolvimento de Sistemas na universidade de ensino Estácio de Sá,
            atualmente no 5° semestre.
          </Description>
          <Description>
            Trabalho na <Decision /> como Estagiário Desenvolvedor Front End.
          </Description>
          <br />
          <Description>
            Atuo tanto no <Highlight> front-end </Highlight> como no
            <Highlight> back-end</Highlight>, estudo todos os dias buscando
            aprimorar meus conhecimentos e habilidades para me tornar cada vez
            melhor no que faço.
          </Description>

          {/* <button type="application/pdf" className="btn-cv" id="abrir-modal">
          <i className="fa-solid fa-cloud-arrow-down">
            <a
              href="./GUILHERME-AMARAL-DEV.pdf"
              download="GUILHERME-AMARAL-DEV.pdf"
            ></a>
          </i>
          <span
            className="cv-letra"
            title="Botão para baixar o currículo em pdf"
          >
            Download CV
          </span>
        </button> */}
          <div id="divModal"></div>
        </article>
      </Container>
    </Element>
  );
};

export default About;
