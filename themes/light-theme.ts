import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
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
      main: '#A55EB9 ',
    },
    warning: {
      main: '#ffea00',
    },
    success: {
      main: orange[900],
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
