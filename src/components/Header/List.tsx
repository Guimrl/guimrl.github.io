import * as React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const NavList = () => {
  return (
    <UlStyled>
      {/* <li>
        <Link to="#inicio" smooth>
          Início
        </Link>
      </li> */}
      <li>
        <a href={'#inicio'} title={'pular para inicio'}>
          Início
        </a>
      </li>
      <li>
        <a href={'#sobre'} title={'pular para sobre'}>
          Sobre
        </a>
      </li>
      <li>
        <a href={'#tecnologias'} title={'pular para tecnologias'}>
          Tecnologias
        </a>
      </li>
      <li>
        <a href={'#projetos'} title={'pular para projetos'}>
          Projetos
        </a>
      </li>
    </UlStyled>
  );
};

const UlStyled = styled('ul')`
  li,
  li a {
    list-style-type: none;
    text-decoration: none;
    padding: 10px;
    margin: 10px;
    color: var(--main-text-color);
  }

  li a:hover {
    color: var(--main-color);
    font-weight: bold;
    transform: scale(1.3);
  }
`;

export default NavList;
