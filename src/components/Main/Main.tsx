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
  const [notificationPermission, setNotificationPermission] = useState(false);

  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'granted') {
      setNotificationPermission(true);
    }
  }, []);

  const handleNotifyMe = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          setNotificationPermission(true);
        }
      });
    }
  };

  const handleMaintenanceEnd = () => {
    if (notificationPermission) {
      new Notification('A página está de volta!', {
        body: 'A manutenção terminou e a página está disponível novamente.',
      });
    }
  };

  return (
    <div>
      {maintenanceMode ? (
        <Maintenance
          maintenanceMode={maintenanceMode}
          handleNotifyMe={handleNotifyMe}
          notificationPermission={notificationPermission}
        />
      ) : (
        <>
          {handleMaintenanceEnd}
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
