import { useNavigate } from "react-router-dom";
import {
  ContentLosePassword,
  Form,
  LinkLosePassword,
  LoginFormContainer,
} from "./styled";
import { InputForm } from "../../../Components/Form/Input";
import { ButtonForm } from "../../../Components/Form/Button";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { Error } from "../../../Components/Helpers/Error";
import { Title } from "../../../Components/StylesComponents/styled";
import useForm from "../../../hooks/useForm";
import { Login } from "../Login.model";

export function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleSubmitForm(event: React.SyntheticEvent<EventTarget>) {
    event.preventDefault();
    const data: Login = {
      username: username.value,
      password: password.value,
    };
    if (username.validate() && password.validate()) {
      await userLogin(data);
    }
  }

  return (
    <LoginFormContainer className="animeLeft">
      <Title>Login</Title>
      <Form onSubmit={handleSubmitForm}>
        <InputForm label="Usuário" type="text" name="username" {...username} />
        <InputForm
          label="Senha"
          type="password"
          name="password"
          {...password}
        />
        <ButtonForm
          disabled={loading}
          label={loading ? "carregando..." : "Entrar"}
          type="submit"
        />
        <Error error={error} />
      </Form>
      <LinkLosePassword to="/login/perdeu">Perdeu a Senha?</LinkLosePassword>
      <ContentLosePassword>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <ButtonForm
          style={{ marginTop: "4rem" }}
          label="cadastro"
          onClick={() => navigate("criar")}
        />
      </ContentLosePassword>
    </LoginFormContainer>
  );
}
