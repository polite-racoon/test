import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes";
import { AuthProvider } from "../context/auth";
import { UIProvider } from "../context/ui";
import { ReservasProvider } from "../context/reservas";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ReservasProvider>
        <UIProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </ReservasProvider>
    </AuthProvider>
  );
}

export default MyApp;
