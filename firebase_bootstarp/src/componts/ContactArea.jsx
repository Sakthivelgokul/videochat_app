/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { useAuthContex } from "../firebaseJs/AuthContex"
import { useUserData } from "../firebaseJs/userDataContext"
import { useAuthStateContex, useAuthUpateContex } from "../firebaseJs/AuthContex"
export default function ContactArea() {
    const auth = useAuthContex();
    const authState = useAuthStateContex();
    const authSetState = useAuthUpateContex();
    const getUserData = useUserData();
    const userdetail = getUserData();
    function signout() {
        auth.signOut();
        authSetState(false)
    }


    return (
        <div className=" bg-chat  fixed border-r h-screen w-16 border-border ">
            <div className="relative flex items-center justify-center w-auto h-4 my-4 rounded-md ">
                {authState && <img className="rounded-xl h-10 w-10" src={userdetail.photoURL} alt="" onClick={signout} />}
            </div>

        </div>
    )
}
