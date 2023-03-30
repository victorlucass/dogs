import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserHeaderNavStyled } from "./styled";
import { UserContext } from "../../../../context/UserContext";
import {
  AdicionarSvg,
  EstatisticasSvg,
  FeedSvg,
  SairSvg,
} from "../../../../Components/svg";

export function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const [isMobile, setIsMobile] = useState(false);
  return (
    <UserHeaderNavStyled>
      <NavLink to="/conta" end>
        <FeedSvg />
        {isMobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <EstatisticasSvg />
        {isMobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarSvg />
        {isMobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={userLogout}>
        <SairSvg />
        {isMobile && "Sair"}
      </button>
    </UserHeaderNavStyled>
  );
}
