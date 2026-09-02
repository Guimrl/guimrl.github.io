import { CssBaseline, ThemeProvider } from '@mui/material';
import MaintenancePage from './pages/MaintenancePage';
import theme from './shared/theme';
import Styles from './shared/Styles';
// import Home from './pages/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Styles />
      <MaintenancePage />
      {/* <Home /> */}
    </ThemeProvider>
  );
};

export default App;
