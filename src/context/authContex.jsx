import { createContext } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../Data/firebase";

export const authcontext = createContext()

export const AuthProvider = ({ children }) => {

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <authcontext.Provider value={{ signup }}>
            {children}

        </authcontext.Provider>
    )
}