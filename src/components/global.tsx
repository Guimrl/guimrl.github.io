import React from 'react';
import { FaBars, FaSun, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Progress = styled('div')`
  animation: scroll 1ms ease-in;
  animation-timeline: scroll();
  background-color: var(--main-color);
  transform-origin: left;
  height: var(--scroll-height);
  inset: 0;
  position: fixed;
  z-index: 1000;

  @keyframes scroll {
    from {
      scale: 0 1;
    }

    to {
      scale: 1 1;
    }
  }
`;

export const FaBar = ({ onClick }) => {
  return (
    <NavButton onClick={onClick}>
      <FaBars title={'abrir barra de navegação lateral'} />
    </NavButton>
  );
};

export const CloseBtn = ({ onClick, title }) => {
  return (
    <NavButton onClick={onClick}>
      <FaTimes title={title} />
    </NavButton>
  );
};

export const SocialItem = ({ title, href, icon }) => {
  return (
    <li>
      <Link to={href} title={title} taget={'_blank'}>
        {icon}
      </Link>
    </li>
  );
};

export const Highlight = styled('span')`
  color: var(--main-color);

  a:link,
  a:visited {
    text-decoration: none;
    color: var(--main-color);
  }
`;

export const Container = styled('section')`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--main-text-color);
  background-color: var(--bg-color);
`;

export const WelcomeText = styled('p')`
  font-weight: bold;
  margin: 10px;
`;

const NavButton = styled('button')`
  padding-block: var(--scroll-height);
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 2em;

  color: var(--main-color);
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1;
`;
