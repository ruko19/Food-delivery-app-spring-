import { useContext } from "react";

import { authcontext } from "../context/authContex";


const useAuth = () => {
    return (
        useContext(authcontext)
    )
}

export { useAuth }