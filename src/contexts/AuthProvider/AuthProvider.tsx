import React, { createContext, useEffect, useState } from "react";
import useCookies from "../../hooks/useCookies";
import { APIErrorResponse } from "../../network/APIClient";
import loginService from "../../services/todos/login-service";
import { AuthContextType, LoginInputType } from "./auth.types";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [authErrorMsg, setAuthErrorMsg] = useState("");
  const cookies = useCookies();

  const login = async (input: LoginInputType) => {
    setAuthLoading(true);

    try {
      const result = await loginService(input);
      setIsUserLogin(true);
      cookies.set("access-token", result["access_token"]);
    } catch (err) {
      if (err && typeof err === "object" && "msg" in err) {
        const msg = (err as APIErrorResponse).msg;
        setAuthErrorMsg(msg);
        throw new Error(msg);
      }
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = () => {
    setIsUserLogin(false);
  };

  const checkUserLogin = () => {
    return !!cookies.get("access-token");
  };

  const resetAuthErrorMsg = () => {
    setAuthErrorMsg("");
  };

  useEffect(() => {
    if (checkUserLogin()) {
      setIsUserLogin(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isUserLogin, authLoading, login, logout, resetAuthErrorMsg, authErrorMsg }}>
      {children}
    </AuthContext.Provider>
  );
};
