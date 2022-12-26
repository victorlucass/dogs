import { Link } from "react-router-dom";
import { HeaderContainer, HeaderNavContainer } from "./styled";
import Dogs from "../../assets/dogs.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderNavContainer>
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <img src={Dogs} alt="" />
        </Link>
        <Link to="/login" className="login">
          Login / Criar
        </Link>
      </HeaderNavContainer>
    </HeaderContainer>
  );
}
