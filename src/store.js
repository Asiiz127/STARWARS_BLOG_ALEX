export const initialStore=()=>{
  return{
    FavoritesList: [],
    characterList: [],
    vehicleList: [],
    planetList: [],
  };
}
export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_favorites":
      return {...store,FavoritesList: [...store.FavoritesList, action.payload.name],};
    case "remove_favorites":
      return {...store, FavoritesList: store.FavoritesList.filter((item) => item !== action.payload.name,),};
    case "update_characters":
      const characterList = action.payload;
      return { ...store, characterList };
    case "update_vehicles":
      const vehicleList = action.payload;
      return { ...store, vehicleList };
    case "update_planets":
      const planetList = action.payload;
      return { ...store, planetList };
    default:
      throw new Error(`Unknown action type`);
  }
}
