import React from 'react';
import styled from 'styled-components';

import { FaSun } from 'react-icons/fa';

const DarkMode = () => {
  return (
    <div id={'dark-mode-theme'}>
      <input
        type={'checkbox'}
        name={'theme'}
        id={'theme'}
        className={'checkbox'}
        title={'alterar tema da página entre claro ou escuro'}
      />
      <DarkModeLabel htmlFor={'theme'}>
        {/* <Icon name={'fas fa-moon'} /> */}
        <div className="ball"></div>
      </DarkModeLabel>
    </div>
  );
};

const DarkModeLabel = styled('label')`
  background-color: var(--bg-color);
  border-radius: 3.125em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.313em;
  position: relative;
  margin-left: 65px;
  height: 1.625em;
  width: 3.125em;
  transform: scale(1.5);
`;

export default DarkMode;
