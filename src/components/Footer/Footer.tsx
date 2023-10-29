import React from 'react';
import { Highlight } from '../global';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        &copy; Guilherme <Highlight>Amaral</Highlight> - 2023
      </p>
    </FooterContainer>
  );
};

const FooterContainer = styled('footer')`
  height: 18vh;
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  padding-top: 25px;
`;

export default Footer;
