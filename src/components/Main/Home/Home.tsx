import React from 'react';
import { Container, WelcomeText } from '../../global';
import SocialContainer from './SocialContainer';
import EmailContainer from './EmailContainer';
import TextTyper from './Typer';
import Perfil from './Perfil';

import { Element } from 'react-scroll';

const Home = () => {
  return (
    <Element name="home">
      <Container>
        <Perfil />
        <h1 className="highlight">Guilherme Amaral</h1>

        <TextTyper fullText={'Desenvolvedor web Full Stack.'} />
        <WelcomeText>Seja bem-vindo!</WelcomeText>
        <SocialContainer />

        <EmailContainer />
      </Container>
    </Element>
  );
};

export default Home;
