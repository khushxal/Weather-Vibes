import { useContext, createContext, useState } from "react";

// created the auth context all authentication and authorization will be handled here.
export const AuthContext = createContext();

// Provider is used to wrap the part of code that will be using the context api variables.
export function AuthProvider({ children }) {
  const msg = "using context apis";
  return (
    <AuthContext.Provider value={{ msg }}>{children}</AuthContext.Provider>
  );
}

// Use is called whenever any variable is required.
export function useAuth() {
  return useContext(AuthContext);
}
