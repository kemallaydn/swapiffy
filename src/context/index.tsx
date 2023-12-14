import React, { ReactNode, createContext } from "react";
import children from "../models/children.model"
export const GlobalContext = createContext({});
const Provider:React.FC<children> = ({children}) => {
    return(
        <GlobalContext.Provider value={{}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default Provider;