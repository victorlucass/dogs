import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { LayoutDefault } from "./Layout/default";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";

export function RoutesApp() {
  const { login } = useContext(UserContext);
  if (login) return <Navigate to="/conta" />;
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
      </Route>
    </Routes>
  );
}
