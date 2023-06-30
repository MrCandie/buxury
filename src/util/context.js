import { createContext, useState } from "react";
import { logoutFn } from "./http";
import { getStoredItem } from "./lib";

export const AuthContext = createContext({
  isAuthenticated: false,
  login: (token) => {},
  logout: () => {},
  user: "",
  setUser: (user) => {},
  token: "",
});

export default function AuthProvider({ children }) {
  const initialUser = getStoredItem("user") || "";
  const initialToken = getStoredItem("token");

  const [token, setToken] = useState(initialToken);
  const [userDetail, setUserDetail] = useState(initialUser);

  const isAuthenticated = !!token;

  function login(token) {
    setToken(token);
  }

  async function logout() {
    setToken(null);
  }

  function setUser(user) {
    setUserDetail(user);
  }

  const value = {
    token,
    login,
    logout,
    user: userDetail,
    isAuthenticated,
    setUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
