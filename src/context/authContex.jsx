import { createContext } from "react";

export const authcontext = createContext()

export const AuthProvider = ({ children }) => {

    const user = {
        login: true
    }

    return (
        <authcontext.Provider value={{ user }}>
            {children}

        </authcontext.Provider>
    )
}