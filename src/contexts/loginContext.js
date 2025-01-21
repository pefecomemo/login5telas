//contexto, para ser usado em todo o programa de forma global
import { createContext, useContext, useState } from "react";

const LoginContext = createContext(null)

//provider, para usar o contexto
export const LoginProvider = ({children}) => {
    
    const [isLoged, setIsLoged] = useState (false)
    const [userData, setUserData] = useState({})
    
    return <LoginContext.Provider value={{isLoged, setIsLoged, userData, setUserData}}>
            {children}
        </LoginContext.Provider>


}
//usando o contexto
export const useLoginContext = () => {
    const context = useContext(LoginContext)

    if(!context){
        throw new Error("Contexto não definido")
    }

    return context
}