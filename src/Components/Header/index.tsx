import { Link } from "react-router-dom";
import { HeaderContainer, HeaderNavContainer } from "./styled";
import Dogs from "../../assets/dogs.svg";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export function Header() {
  const { data } = useContext(UserContext);
  return (
    <HeaderContainer>
      <HeaderNavContainer>
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <img src={Dogs} alt="" />
        </Link>
        {data ? (
          <Link to="/conta" className="login">
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className="login">
            Login / Criar
          </Link>
        )}
      </HeaderNavContainer>
    </HeaderContainer>
  );
}
