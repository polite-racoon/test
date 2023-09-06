import { createTheme } from '@mui/material';
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // background: {
    //   default: 'red',
    // },
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#000',
    },
    info: {
      main: '#9667e0',
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {},
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
});
