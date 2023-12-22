import React, { ReactNode, createContext, useReducer } from "react";
import authInitialState from './İnitialState/AuthState';
import auth from './Reducer/Auth';
import children from "../models/children.model"
export const GlobalContext = createContext({});
const Provider: React.FC<children> = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const value = {
        authState,
        authDispatch
}
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
export default Provider;