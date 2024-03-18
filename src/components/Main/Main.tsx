import React from 'react';
import Home from './Home/Home';
import { BrowserRouter } from 'react-router-dom';
// import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Projects from './Projects/Projects';
import About from './About/About';
import Title from '../utils';
import { Progress } from '../global';
import SideBar from '../Header/Teste';
import Maintenance from '../Maintenance/Maintenance';
import { useState } from 'react';
import { useEffect } from 'react';

const Main = () => {
  const [maintenanceMode, setMaintenanceMode] = useState(true);

  return (
    <div>
      {maintenanceMode ? (
        <Maintenance maintenanceMode={maintenanceMode} />
      ) : (
        <>
          <div>
            <BrowserRouter>
              <Title />
              <Progress />
              {/* <Header /> */}
              <SideBar />
              <Home />
              <About />
              <Projects />
              {/* <Skills /> */}
              <Footer />
            </BrowserRouter>
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
