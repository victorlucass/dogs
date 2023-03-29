import { ButtonForm } from "../../../Components/Form/Button";
import { InputForm } from "../../../Components/Form/Input";
import { Title } from "../../../Components/StylesComponents/styled";
import useForm from "../../../hooks/useForm";
import { LoginCreateContainer, LoginCreateForm } from "./styled";
import { api } from "../../../api/index";
import { useNavigate } from "react-router-dom";
import { useFetchAxios } from "../../../hooks/useFetch";
import { Login } from "../Login.model";
import { Error } from "../../../Components/Helpers/Error";

export function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");
  const navigate = useNavigate();

  const { error, loading, request } = useFetchAxios();

  async function handleSubmit(event: React.SyntheticEvent<EventTarget>) {
    event.preventDefault();
    const dataForm = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    const { response } = await request({
      url: "/api/user",
      method: "POST",
      data: dataForm,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response?.status === 200) {
      navigate("/login");
    }
  }
  return (
    <LoginCreateContainer>
      <Title>Cadastre-se</Title>
      <LoginCreateForm onSubmit={handleSubmit}>
        <InputForm label="Usuário" name="username" type="text" {...username} />
        <InputForm label="Email" name="email" type="email" {...email} />
        <InputForm
          label="Senha"
          name="password"
          type="password"
          {...password}
        />
        {loading ? (
          <ButtonForm label="Cadastrando..." type="submit" disabled />
        ) : (
          <ButtonForm label="Cadastrar" type="submit" />
        )}
        <Error error={error} />
      </LoginCreateForm>
    </LoginCreateContainer>
  );
}
