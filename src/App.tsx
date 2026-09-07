import { CssBaseline, ThemeProvider } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import Maintenance from './pages/Maintenance/Maintenance';
import theme from './shared/theme';
import Styles from './shared/globalStyles';
import i18n from './shared/i18n';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  const isMaintenanceMode = true;

  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <CssBaseline />
        <Styles />
        <Header maintenance={isMaintenanceMode} />
        {isMaintenanceMode ? <Maintenance /> : <Home />}
        <Footer />
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
