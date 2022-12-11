import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes";
import { AuthProvider } from "../context/auth";
import { UIProvider } from "../context/ui";
import { Layout } from "../components/layouts";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </UIProvider>
  );
}

export default MyApp;
