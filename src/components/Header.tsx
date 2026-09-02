import { useEffect } from 'react';
import { IconButton, Tooltip, Typography } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface IHeaderProps {
  maintenance?: boolean;
}

type TLanguageType = 'en' | 'pt-BR';

const Header = (props: IHeaderProps) => {
  const { maintenance = false } = props;
  const { i18n, t } = useTranslation('maintenance');
  const [language, setLanguage] = useLocalStorage<TLanguageType>(
    'language',
    i18n.language === 'en' ? 'en' : 'pt-BR',
  );

  useEffect(() => {
    if (language !== i18n.language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'pt-BR' ? 'en' : 'pt-BR');
  };

  return (
    <HeaderContainer>
      <Navigation>
        <Brand href="#home">
          <BrandMark>GA</BrandMark>
          <Typography>Guimrl</Typography>
        </Brand>
        <HeaderActions>
          {!maintenance && (
            <Links aria-label="Navegação principal">
              <a href="#about">Sobre</a>
              <a href="#experience">Experiência</a>
              <a href="#projects">Projetos</a>
              <ContactLink href="#contact">Contato</ContactLink>
            </Links>
          )}

          <Tooltip title={t('languageLabel')}>
            <LanguageButton
              aria-label={`${t('languageLabel')}: ${language}`}
              onClick={toggleLanguage}
            >
              <TranslateIcon />
            </LanguageButton>
          </Tooltip>
        </HeaderActions>
      </Navigation>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: absolute;
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

export default Header;
