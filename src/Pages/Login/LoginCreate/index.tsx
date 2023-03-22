import { ButtonForm } from "../../../Components/Form/Button";
import { InputForm } from "../../../Components/Form/Input";
import { Title } from "../../../Components/StylesComponents/styled";
import { LoginCreateContainer, LoginCreateForm } from "./styled";

export function LoginCreate() {
  function handleSubmit() {}

  return (
    <LoginCreateContainer>
      <Title>Cadastre-se</Title>
      <LoginCreateForm onSubmit={handleSubmit}>
        <InputForm label="Usuário" name="username" type="text" />
        <ButtonForm label="Cadastrar" />
      </LoginCreateForm>
    </LoginCreateContainer>
  );
}
