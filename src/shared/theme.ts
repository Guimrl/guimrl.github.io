import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ff8a3d' },
    background: { default: '#09090b', paper: '#111113' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 9,
  },
});

export default theme;
