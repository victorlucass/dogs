import { useEffect, useState } from "react";
import { Title } from "../../../Components/StylesComponents/styled";
import { UserHeaderContainer } from "./styled";
import { UserHeaderNav } from "./UserHeaderNav";
import { useLocation } from "react-router-dom";

const ROUTES = {
  ACCOUNT: "/conta",
  POST: "/conta/postar",
  STATS: "/conta/estatisticas",
};

export function UserHeader() {
  const [title, updateTitle] = useState("Minha Conta");
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case ROUTES.POST:
        updateTitle("Poste Sua Foto");
        break;
      case ROUTES.STATS:
        updateTitle("Estatísticas");
        break;
      default:
        updateTitle("Minha Conta");
    }
  }, [pathname]);

  return (
    <UserHeaderContainer>
      <Title>{title}</Title>
      <UserHeaderNav />
    </UserHeaderContainer>
  );
}
