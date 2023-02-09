import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from "../Data/firebase";

export const authcontext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("")

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

        })
        return () => {
            unsubscribe();
        }

    }, [])

    return (
        <authcontext.Provider value={{ user, signup, login, logOut }}>
            {children}

        </authcontext.Provider>
    )
}