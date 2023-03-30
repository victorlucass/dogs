import { Title } from "../../../Components/StylesComponents/styled";
import { UserHeaderContainer } from "./styled";
import { UserHeaderNav } from "./UserHeaderNav";

export function UserHeader() {
  return (
    <UserHeaderContainer>
      <Title>Título</Title>
      <UserHeaderNav />
    </UserHeaderContainer>
  );
}
