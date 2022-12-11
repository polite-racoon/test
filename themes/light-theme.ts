import { createTheme } from '@mui/material';
import { cyan, grey, purple, red } from '@mui/material/colors';
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
    error: {
      main: red[200], //'#9500ae',
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
