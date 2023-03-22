import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { Login } from "../Pages/Login/Login.model";

export const UserContext = createContext({} as any);

interface UserStorageProps {
  children: ReactNode;
}
export function UserStorage({ children }: UserStorageProps) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    autoLogin();
  }, []);

  async function getUser(token: string) {
    const userApi = await api.get("api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(userApi.data);
    setLogin(true);
  }

  async function userLogin(data: Login) {
    try {
      setError(null);
      setLoading(true);
      const tokenApi = await api.post("jwt-auth/v1/token", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (tokenApi.status !== 200) throw new Error("erro personalizado");
      window.localStorage.setItem("token", tokenApi.data.token);
      await getUser(tokenApi.data.token);
    } catch (error: any) {
      const { response } = error;
      setError(response.data.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function autoLogin() {
    const tokenLocal = window.localStorage.getItem("token");
    if (tokenLocal) {
      try {
        setLoading(true);
        const { data, status } = await api.post(
          "jwt-auth/v1/token/validate",
          tokenLocal,
          {
            headers: {
              Authorization: `Bearer ${tokenLocal}`,
            },
          }
        );
        if (status !== 200) throw new Error("Token inválido ou expirado");
        await getUser(tokenLocal);
      } catch (error) {
        console.log(error);
        userLogout();
      } finally {
        setLoading(false);
      }
    }
  }

  async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, loading, login, error }}
    >
      {children}
    </UserContext.Provider>
  );
}
