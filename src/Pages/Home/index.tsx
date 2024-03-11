import { Feed } from "../../Components/Feed";
import { HomeContainer, MainContainer } from "./styled";

export function Home() {
  return (
    <HomeContainer>
      <MainContainer>
        <Feed />
      </MainContainer>
    </HomeContainer>
  );
}
