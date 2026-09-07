import { useEffect } from 'react';
import { Tooltip, Typography } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  Brand,
  BrandMark,
  ContactLink,
  HeaderActions,
  HeaderContainer,
  LanguageButton,
  Links,
  Navigation,
} from './style';
import { TLanguages } from '../../shared/i18n';

interface IHeaderProps {
  maintenance?: boolean;
}

const Header = (props: IHeaderProps) => {
  const { maintenance = false } = props;
  const { i18n, t } = useTranslation('maintenance');
  const [language, setLanguage] = useLocalStorage<TLanguages>(
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

export default Header;
