//Pagina principal de toda a aplicação. O que for configurado aqui, aparecerá em todas as paginas do app

import "../ui/styles/global.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import tema from "../ui/themes/tema";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
