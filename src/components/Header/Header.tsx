import React from 'react';
import NavList from './List';
import DarkMode from './DarkMode';
import { useState } from 'react';
import { styled } from 'styled-components';
import { CloseBtn, FaBar } from '../global';

const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const showSideBar = () => setOpenSideBar(!openSideBar);

  return (
    <header role={'dialog'} aria-labelledby={'nav'}>
      <NavStyled>
        <FaBar onClick={showSideBar} />
        {openSideBar && <SideBar active={setOpenSideBar} />}
      </NavStyled>
    </header>
  );
};

const SideBar = ({ active }) => {
  const closeSideBar = () => {
    active(false);
  };

  return (
    <>
      <FadeNav />
      <NavContainer>
        <CloseBtn
          onClick={closeSideBar}
          title={'fechar barra de navegação lateral'}
        />

        <NavList />
        {/* <DarkMode /> */}
      </NavContainer>
    </>
  );
};

const NavStyled = styled('nav')`
  transition: 0.5s;
  opacity: 1;
  pointer-events: all;

  position: fixed;
  left: 0%;
  top: 0%;
  z-index: 10;
  height: 100vh;
  width: 30%;
  padding: 1rem;
`;

const NavContainer = styled('div')`
  position: fixed;
  left: 0%;
  top: 0%;
  z-index: 10;
  background-color: var(--main-bg-color);
  height: 100vh;
  width: 30%;
  padding: 1rem;
`;

const FadeNav = styled.div`
  transition: 0.5s;
  opacity: 1;
  pointer-events: all;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
`;

export default Header;
