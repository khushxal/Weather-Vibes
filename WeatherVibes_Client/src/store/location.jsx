import { useContext, createContext } from "react";

// created the auth context all authentication and authorization will be handled here.
export const LocationContext = createContext();

// Provider is used to wrap the part of code that will be using the context api variables.
export function LocationProvider({ children }) {
  const msg = "This is location";
  return (
    <LocationContext.Provider value={{ msg }}>
      {children}
    </LocationContext.Provider>
  );
}

// Use is called whenever any variable is required.
export function useLoc() {
  return useContext(LocationContext);
}
