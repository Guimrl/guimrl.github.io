import React from 'react';
import { Highlight } from '../global';
import Perfil from '../Main/Home/Perfil';
import TextTyper from '../Main/Home/Typer';
import { styled } from 'styled-components';

const Maintenance = ({ maintenanceMode }) => (
  <>
    <MaintenanceContainer>
      <ContentContainer>
        <Perfil />
        <h1 className="highlight">Guilherme Amaral</h1>
        <Spacer />

        <p>Em manutenção, em breve teremos novidades por aqui.</p>
      </ContentContainer>

      <FooterContainer>
        <p>
          &copy; Guilherme <Highlight>Amaral</Highlight> - 2024
        </p>
      </FooterContainer>
    </MaintenanceContainer>
  </>
);

export const Button = styled('button')`
  font-weight: bold;
  font-size: 1em;
  color: var(--bg-color);
  background-color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 10px;
  text-decoration: none;
  transition: 0.3s;
  margin: 25px;
  padding: 12px;
  cursor: pointer;

  :hover {
    background-color: transparent;
    color: var(--main-color);
  }
`;

export const NotifyContent = styled('div')`
  padding: 15px;
  height: 150px;
  width: 300px;
`;

export const Spacer = styled('div')`
  height: 20px;
`;

export const ContentContainer = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FooterContainer = styled('footer')`
  background-color: var(--footer-bg-color);
  width: 100%;
  color: var(--footer-text-color);
`;

export const MaintenanceContainer = styled('section')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--main-text-color);
  background-color: var(--bg-color);
  overflow: hidden;
`;

export default Maintenance;
