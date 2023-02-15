import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./Routes";
import { GlobalStyled } from "./Theme/global";
import { defaultTheme } from "./Theme/theme";
import { ThemeProvider } from "styled-components";
import { UserStorage } from "./context/UserContext";

export function App() {
  return (
    <UserStorage>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyled />
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </ThemeProvider>
    </UserStorage>
  );
}
