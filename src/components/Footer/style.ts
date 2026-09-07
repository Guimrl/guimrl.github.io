import styled from 'styled-components';

const FooterContainer = styled.footer`
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  border-top: 1px solid var(--soft-border);
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(calc(100% - 48px), var(--container));
  min-height: 55px;
  margin: 0 auto;
  color: var(--dimmed);
  font-size: 10px;

  @media (max-width: 640px) {
    width: calc(100% - 30px);
    justify-content: center;
    span:last-child {
      display: none;
    }
  }
`;

export { FooterContainer, FooterContent };
