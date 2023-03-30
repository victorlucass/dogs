import { Route, Routes } from "react-router-dom";
import { Feed } from "../../Components/Feed";
import { AccountContainer } from "./styled";
import { UserHeader } from "./UserHeader";
import { UserPhotoPost } from "./UserPhotoPost";
import { UserStats } from "./UserStats";

export function Account() {
  return (
    <AccountContainer className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </AccountContainer>
  );
}
