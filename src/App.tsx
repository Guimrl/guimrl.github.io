import { CssBaseline, ThemeProvider } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import MaintenancePage from './pages/MaintenancePage';
import theme from './shared/theme';
import Styles from './shared/styles';
import i18n from './shared/i18n';
import Home from './pages/Home';

const App = () => {
  const isMaintenanceMode = true;
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <CssBaseline />
        <Styles />
        {isMaintenanceMode ? <MaintenancePage /> : <Home />}
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
