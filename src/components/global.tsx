import React from 'react';
import { IconType } from 'react-icons';
import { FaBars, FaSun, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
