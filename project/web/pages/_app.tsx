import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { darkTheme, brigthTheme } from "../theme/theme";
import { useEffect, useState } from "react";
import GlobalStyled from "../theme/GlobalStyles";
import ButtonModo from "../compositions/darkMode/Button";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [tema, setTema] = useState(darkTheme);
  const [modo, setModo] = useState(true);
  const [load, setLoad] = useState(true);

  function MudaTema() {
    tema === brigthTheme ? setTema(darkTheme) : setTema(brigthTheme);
  }

  useEffect(() => {
    if (load) {
      setLoad(false);
    }
  }, [modo]);

  if (load) {
    return <div>aguarde...</div>;
  }

  return (
    <ThemeProvider theme={tema}>
      <ButtonModo
        modo={modo}
        onClick={() => {
          setModo(!modo);
          MudaTema();
        }}
      />
      <GlobalStyled />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
