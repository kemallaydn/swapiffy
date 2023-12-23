import React, { ReactNode, createContext, useContext, useReducer } from "react";
import authInitialState from './İnitialState/AuthState';
import favoriteInitialState from './İnitialState/favorites';
import auth from './Reducer/Auth';
import favoritesState from './Reducer/favorites';
import children from "../models/children.model"
export const GlobalContext = createContext({});
const Provider: React.FC<children> = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [favoriteState, favoritesDispacth] = useReducer(favoritesState, favoriteInitialState);
    const value = {
        authState,
        authDispatch,
        favoriteState,
        favoritesDispacth
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
export const context = () => {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error('useFavori hook must be used within a FavoriProvider');
    }
    return context;
  };
export default Provider;