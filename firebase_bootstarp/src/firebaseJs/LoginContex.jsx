/* eslint-disable react/prop-types */
import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";
import { createContext, useContext } from "react";



const LoginContex = createContext()

export function useLoginContex() {
    return useContext(LoginContex)
}

async function signWithPopup() {
    let auth = getAuth()
    const provider = new GoogleAuthProvider();
    let result = await setPersistence(auth, browserLocalPersistence).then(() => {
        return signInWithPopup(auth, provider)
    }).catch(e => console.log(e))

    if (result != undefined) { return "success" }

    else { return "error" }

}
export function LoginContexProvider({ children }) {
    return(
    <LoginContex.Provider value={signWithPopup}>
      {children}
    </LoginContex.Provider>
    )
}