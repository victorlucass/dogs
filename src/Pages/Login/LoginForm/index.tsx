import { Link } from "react-router-dom";
import { LoginFormContainer } from "./styled";
import { useForm } from "react-hook-form";
import { Login } from "../Login.model";
import { api } from "../../../api";
export function LoginForm() {
  const { register, handleSubmit, watch } = useForm<Login>();
  async function handleSubmitForm(data: Login) {
    const response = await api.post("json/jwt-auth/v1/token", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <LoginFormContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <input type="text" {...register("username")} />
        <input type="text" {...register("password")} />
        <button type="submit">enviar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </LoginFormContainer>
  );
}
