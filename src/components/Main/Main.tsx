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

export default Main;
