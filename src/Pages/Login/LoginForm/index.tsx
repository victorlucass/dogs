import { Link } from "react-router-dom";
import { LoginFormContainer } from "./styled";
import { useForm } from "react-hook-form";
import { Login } from "../Login.model";
import { api } from "../../../api";
import { InputForm } from "../../../Components/Form/Input";
import { ButtonForm } from "../../../Components/Form/Button";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
//---------------------
const LoginFormSchema = zod.object({
  username: zod.string().min(1, "*obrigatório"),
  password: zod.string().min(1, "*obrigatório"),
});
//---------------------
export function LoginForm() {
  const { register, handleSubmit, watch, formState } = useForm<Login>({
    mode: "onBlur",
    resolver: zodResolver(LoginFormSchema),
  });
  const { errors } = formState;
  const { userLogin } = useContext(UserContext);

  async function handleSubmitForm(data: Login) {
    if (data) {
      userLogin(data);
    }
  }

  return (
    <LoginFormContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <InputForm
          label="Username"
          type="text"
          min={2}
          error={errors.username?.message}
          {...register("username")}
        />
        <InputForm
          label="password"
          type="text"
          {...register("password")}
          error={errors.password?.message}
        />
        <ButtonForm label="Enviar" type="submit" />
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </LoginFormContainer>
  );
}
