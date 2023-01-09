import { Link } from "react-router-dom";
import { LoginFormContainer } from "./styled";
import { useForm } from "react-hook-form";
import { Login } from "../Login.model";
import { api } from "../../../api";
import { InputForm } from "../../../Components/Form/Input";
import { ButtonForm } from "../../../Components/Form/Button";
export function LoginForm() {
  const { register, handleSubmit, watch } = useForm<Login>();
  async function handleSubmitForm(data: Login) {
    const response = await api.post("json/jwt-auth/v1/token", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  }
  return (
    <LoginFormContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <InputForm label="Username" type="text" {...register("username")} />
        <InputForm label="password" type="text" {...register("password")} />
        <ButtonForm label="Enviar" type="submit" />
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </LoginFormContainer>
  );
}
