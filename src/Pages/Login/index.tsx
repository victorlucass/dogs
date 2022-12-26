import { Route, Routes } from "react-router-dom";
import { LoginCreate } from "./LoginCreate";
import { LoginForm } from "./LoginForm";
import { LoginPasswordLost } from "./LoginPasswordLost";
import { LoginPasswordReset } from "./LoginPasswordReset";
import { LoginContainer } from "./styled";

export function Login() {
  return (
    <LoginContainer>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </LoginContainer>
  );
}
