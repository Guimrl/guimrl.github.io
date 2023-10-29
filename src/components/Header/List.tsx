import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavList = () => {
  return (
    <UlStyled>
      <li>
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={300}
          title="Pular para início"
        >
          Início
        </Link>
      </li>

      <li>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          title="Pular para sobre"
        >
          Sobre
        </Link>
      </li>

      <li>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          title="Pular para projetos"
        >
          Projetos
        </Link>
      </li>
    </UlStyled>
  );
};

const UlStyled = styled('ul')`
  li,
  li {
    list-style-type: none;
    text-decoration: none;
    padding: 10px;
    margin: 10px;
    color: var(--main-text-color);
  }

  :hover {
    color: var(--main-color);
    font-weight: bold;
    cursor: pointer;
  }
`;

export default NavList;
