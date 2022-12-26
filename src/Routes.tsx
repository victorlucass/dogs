import { Route, Routes } from "react-router-dom";
import { LayoutDefault } from "./Layout/default";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
