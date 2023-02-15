import { createContext, ReactNode, useState } from "react";
import { api } from "../api";
import { Login } from "../Pages/Login/Login.model";

export const UserContext = createContext({} as any);

interface UserStorageProps {
  children: ReactNode;
}
export function UserStorage({ children }: UserStorageProps) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  async function getUser(token: string) {
    const response = await api.get("api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(response.data);
    setLogin(true);
  }

  async function userLogin(data: Login) {
    const response = await api.post("jwt-auth/v1/token", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.localStorage.setItem("token", response.data.token);
    getUser(response.data.token);
  }
  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
}
