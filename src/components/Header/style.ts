import { IconButton } from '@mui/material';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  border-bottom: 1px solid var(--soft-border);
  background: rgba(9, 9, 11, 0.76);
  backdrop-filter: blur(18px);
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(calc(100% - 48px), var(--container));
  height: 74px;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: calc(100% - 30px);
    height: 66px;
  }
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 14px;
  font-weight: 750;
  letter-spacing: -0.02em;
  @media (max-width: 640px) {
    span:last-child {
      display: none;
    }
  }
`;

const BrandMark = styled.span`
  display: grid;
  place-items: center;
  width: 35px;
  height: 35px;
  border-radius: 9px;
  background: var(--orange);
  color: #17110d;
  font:
    800 11px ui-monospace,
    monospace;
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
  color: var(--muted);
  font-size: 13px;
  a {
    transition: color 0.2s;
  }
  a:hover {
    color: white;
  }
  @media (max-width: 640px) {
    a:not(:last-child) {
      display: none;
    }
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LanguageButton = styled(IconButton)`
  && {
    color: var(--muted);

    &:hover {
      color: var(--text);
      background: rgba(255, 255, 255, 0.08);
    }
  }
`;

export {
  HeaderContainer,
  Navigation,
  Brand,
  BrandMark,
  Links,
  ContactLink,
  HeaderActions,
  LanguageButton,
};
