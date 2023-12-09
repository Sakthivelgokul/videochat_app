/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useAuthContex } from "./AuthContex"

const UserDataContex = createContext();
export function useUserData(){
    return useContext(UserDataContex);
}
function GetUserDetail() {

    let auth = useAuthContex();
    const user = auth.currentUser;
    let userDetail = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
    }
    console.log(userDetail)
    return userDetail

}
export function UserDataProvider({ children }) {
    return (
        <UserDataContex.Provider value={GetUserDetail}>
            {children}
        </UserDataContex.Provider>
    )
}