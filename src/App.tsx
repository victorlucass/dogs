import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./Routes";
import { GlobalStyled } from "./Theme/global";
import { defaultTheme } from "./Theme/theme";
import { ThemeProvider } from "styled-components";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </ThemeProvider>
  );
}
