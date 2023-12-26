import React, { ReactNode, createContext, useContext, useReducer } from "react";
import authInitialState from './İnitialState/AuthState';
import favoriteInitialState from './İnitialState/favorites';
import favoritesState from './Reducer/favorites';
import sepetInitialState from './İnitialState/sepet';
import sepetsState from './Reducer/sepet';
import auth from './Reducer/Auth';
import children from "../models/children.model"
export const GlobalContext = createContext({});
const Provider: React.FC<children> = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [favoriteState, favoritesDispacth] = useReducer(favoritesState, favoriteInitialState);
    const [sepetState, sepetDispacth] = useReducer(sepetsState, sepetInitialState);
    const value = {
        authState,
        authDispatch,
        favoriteState,
        favoritesDispacth,
        sepetState,
        sepetDispacth
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