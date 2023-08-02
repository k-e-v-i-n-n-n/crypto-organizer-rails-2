import {createContext, useState} from "react"

const AppContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState()


    return(
        <AppContext.Provider value={{user, setUser}}>
            {children}
        </AppContext.Provider>

    )
}

export {AppContext, UserProvider}