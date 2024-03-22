import React, { ReactNode, createContext, useContext, useReducer, Dispatch } from "react";
import authInitialState from './İnitialState/AuthState';
import favoriteInitialState from './İnitialState/favorites';
import favoritesState from './Reducer/favorites';
import sepetInitialState from './İnitialState/sepet';
import sepetsState from './Reducer/sepet';
import auth from './Reducer/Auth';
import children from "../models/children.model"
import advert from "./Reducer/Advert";
import advertInıtıalState from "./İnitialState/AdvertState";


interface GlobalContextType {
    authState: { isLoggedIn: boolean; data: {authenticatedUser:{id:""}}; error: null; loading: boolean; };
    authDispatch: Dispatch<any>;
    favoriteState: { favorite: never[]; error: null; loading: boolean; };
    favoritesDispacth: Dispatch<any>;
    sepetState: { /* ... */ };
    sepetDispacth: Dispatch<any>;
}

export const GlobalContext = createContext<GlobalContextType>({
    authState: {
        isLoggedIn: false,
        data: {
            authenticatedUser: {
                id: ""
            }
        },
        error: null,
        loading: false
    },
    authDispatch: () => null,
    favoriteState: favoriteInitialState,
    favoritesDispacth: () => null,
    sepetState: sepetInitialState,
    sepetDispacth: () => null
});

const Provider: React.FC<children> = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [favoriteState, favoritesDispacth] = useReducer(favoritesState, favoriteInitialState);
    const [sepetState, sepetDispacth] = useReducer(sepetsState, sepetInitialState);
    const [advertState, advertDispacth] = useReducer(advert, advertInıtıalState);
    const value = {
        authState,
        authDispatch,
        favoriteState,
        favoritesDispacth,
        sepetState,
        sepetDispacth,
        advertState,
        advertDispacth
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