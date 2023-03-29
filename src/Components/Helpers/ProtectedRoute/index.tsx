import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

interface ProtectedRouteProps {
  children: ReactNode;
}
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { login } = useContext(UserContext);
  return login ? <>{children}</> : <Navigate to="/login" />;
};
