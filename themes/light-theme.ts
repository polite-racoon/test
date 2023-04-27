import { createTheme } from '@mui/material';
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // background: {
    //   default: grey[100],
    // },
    primary: {
      main: '#fff', //cyan[100],
    },
    secondary: {
      main: '#000',
    },
    info: {
      main: '#bd5611',
    },
    warning: {
      main: '#9500ae',
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
  typography: {
    fontFamily: [
      'Sacramento',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
