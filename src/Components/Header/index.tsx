import { Link, useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderNavContainer } from "./styled";
import Dogs from "../../assets/dogs.svg";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export function Header() {
  const { data, userLogout } = useContext(UserContext);
  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <HeaderContainer>
      <HeaderNavContainer>
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <img src={Dogs} alt="" />
        </Link>
        {data ? (
          <>
            <Link to="/conta" className="login">
              {data.nome}
            </Link>
            <button onClick={handleLogout}>sair</button>
          </>
        ) : (
          <Link to="/login" className="login">
            Login / Criar
          </Link>
        )}
      </HeaderNavContainer>
    </HeaderContainer>
  );
}
