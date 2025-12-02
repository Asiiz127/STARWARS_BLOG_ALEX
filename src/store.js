export const initialStore=()=>{
  return{
    favortiesList: [],
    characterList: [],
    vehicleList: [],
    planetList: [],
  };
}
export default const storeReducer=(store, action)=>{
  switch(action.type){
    case "SET_FAVORITES":