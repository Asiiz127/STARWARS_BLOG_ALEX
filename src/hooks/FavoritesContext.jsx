import React, { createContext, useContext, useReducer, useEffect } from "react";
import storeReducer, { initialStore } from "../store";

import { getCharactersList, getVehicleList, getPlanetList } from "../services/swapiFetch";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  const actions = {
    addFavorite: (item) => dispatch({ type: "add_favorites", payload: item }),
    removeFavorite: (item) => dispatch({ type: "remove_favorites", payload: item }),
    fetchCharacters: async () => {
      try {
        const data = await getCharactersList();
        dispatch({ type: "update_characters", payload: data });
      } catch (error) {
        console.error("Error cargando personajes en context", error);
      }
    },
    
    fetchVehicles: async () => {
      try {
        const data = await getVehicleList();
        dispatch({ type: "update_vehicles", payload: data });
      } catch (error) {
        console.error("Error cargando vehículos en context", error);
      }
    },

    fetchPlanets: async () => {
      try {
        const data = await getPlanetList();
        dispatch({ type: "update_planets", payload: data });
      } catch (error) {
        console.error("Error cargando planetas en context", error);
      }
    },
  };
  useEffect(() => {
    actions.fetchCharacters();
    actions.fetchVehicles();
    actions.fetchPlanets();
  }, []); 
  return (
    <FavoritesContext.Provider value={{ store, actions }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites debe usarse dentro de un FavoritesProvider");
  }
  return context;
};
