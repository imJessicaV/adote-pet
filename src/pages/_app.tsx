//Pagina principal de toda a aplicação. O que for configurado aqui, aparecerá em todas as paginas do app

import '../ui/styles/globals.css';
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import Header from "../ui/components/Header/Header";
import tema from '../ui/themes/tema';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
