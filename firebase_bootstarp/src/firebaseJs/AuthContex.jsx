/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useContext, createContext, useState } from "react";
const AuthContex = createContext();
const AuthStateContex = createContext();
const AuthUpdateContex = createContext();

export function useAuthContex() {
    return useContext(AuthContex)
}
export function useAuthStateContex() {
    return useContext(AuthStateContex)
}
export function useAuthUpateContex() {
    return useContext(AuthUpdateContex)
}

export function AuthProvider({ children }) {
    const auth = getAuth();
    const [userLogin, setUserLogin] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserLogin(true)
            console.log("hi")
        }
        else {
            console.log("not login");
        }
        
    })
    return (
        <AuthContex.Provider value={auth}>
            <AuthStateContex.Provider value={userLogin}>
                <AuthUpdateContex.Provider value={setUserLogin}>
                    {children}
                </AuthUpdateContex.Provider>
            </AuthStateContex.Provider>
        </AuthContex.Provider>
    )
}