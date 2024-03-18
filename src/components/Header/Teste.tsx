import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

function SideBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header role="dialog" aria-labelledby="nav">
      <nav>
        <button
          id="open-btn"
          className="open-btn navbar-btn"
          title="abrir barra de navegação lateral"
          onClick={toggleNav}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          id="fadeNav"
          className={`navHide ${isNavOpen ? '' : 'hidden'}`}
        ></div>
        <div id="nav" className={`nav ${isNavOpen ? '' : 'navHide'}`}>
          <button
            id="close-btn"
            className="close-btn navbar-btn"
            title="fechar barra de navegação lateral"
            onClick={toggleNav}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className="navegacao">
            <li>
              <a href="#inicio" title="pular para início">
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" title="pular para sobre">
                Sobre
              </a>
            </li>
            <li>
              <a href="#tecnologias" title="pular para sobre">
                Tecnologias
              </a>
            </li>
            <li>
              <a href="#projetos" title="pular para projetos">
                Projetos
              </a>
            </li>
          </ul>
          <div id="dark-mode-theme">
            <input
              type="checkbox"
              name="theme"
              id="theme"
              className="checkbox"
              title="alterar tema da página entre claro ou escuro"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <label htmlFor="theme" className="dark-mode">
              <FontAwesomeIcon icon={faSun} />
              <FontAwesomeIcon icon={faMoon} />
              <div className="ball"></div>
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default SideBar;
