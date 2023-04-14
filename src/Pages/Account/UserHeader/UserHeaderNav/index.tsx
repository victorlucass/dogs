import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ButtonMenu, UserHeaderNavStyled } from "./styled";
import { UserContext } from "../../../../context/UserContext";
import {
  AdicionarSvg,
  EstatisticasSvg,
  FeedSvg,
  SairSvg,
} from "../../../../Components/svg";
import { useMedia } from "../../../../hooks/useMedia";
export function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  return (
    <>
      {mobile && (
        <ButtonMenu
          aria-label="Menu"
          onClick={() => setMobileMenu((state) => !state)}
          className={`${mobileMenu && "mobileButtonActive"}`}
        ></ButtonMenu>
      )}
      <UserHeaderNavStyled
        className={`${mobile && "navMobile"} ${
          mobileMenu && "navMobileActive"
        }`}
      >
        <NavLink to="/conta" end>
          {/* 'end' é uma maneira de definir a url principal, para evitar de activar todos que comecem com 'conta/*' */}
          <FeedSvg />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <EstatisticasSvg />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarSvg />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <SairSvg />
          {mobile && "Sair"}
        </button>
      </UserHeaderNavStyled>
    </>
  );
}
