import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

// created the auth context all authentication and authorization will be handled here.
export const AuthContext = createContext();

// Provider is used to wrap the part of code that will be using the context api variables.
export function AuthProvider({ children }) {
  const URL = import.meta.env.REACT_APP_SERVER_API + "/api/auth/user";

  const [token, setToken] = useState(localStorage.getItem("token"));

  const [user, setUser] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const LoggedIn = !!token;

  function storeToken(Token) {
    localStorage.setItem("token", Token);
    setToken(Token);
  }

  function deleteToken() {
    setUser("");
    setToken("");
    localStorage.removeItem("token");
  }

  async function isUserAuthorized() {
    try {
      setIsLoading(true);
      const response = await axios.get(URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response) {
        setUser(await response.data.user);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(
    function () {
      if (token) {
        isUserAuthorized();
      }
    },
    [token]
  );

  return (
    <AuthContext.Provider value={{ storeToken, deleteToken, LoggedIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}

// Use is called whenever any variable is required.
export function useAuth() {
  return useContext(AuthContext);
}
