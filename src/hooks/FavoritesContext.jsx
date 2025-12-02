import React from "react";
import { useReducer, useContext, createContext } from "react";
import { storeReducer, initialStore } from "../store";

export const FavoritesContext = createContext();

export function ReduceComponent({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());
  return (
    <FavoritesContext.Provider value={{ store, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useReduceContext() {
  return useContext(FavoritesContext);
}
