import { createContext, useContext, useState } from "react";

export const AuthContext= createContext();

// This context provides authentication state and functions to manage the authenticated user
export const useAuthContext=()=>{
    return useContext(AuthContext)
}

// This provider component wraps the application and provides the authentication context
export const AuthContextProvider=({children})=>{
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chatUser")) || null)

    return <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>
}