/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
// import { database } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
import BottomMsg from "./BottomMessgeInput";
import MsgArea from "./MsgArea"; 

export const Tcontext=createContext()

export function Message() {
    const [messageObject,setMessageObject]=useState([]);
    
    // const ref = useRef();
    // const collectionRef = collection(database, "chat");

    // useEffect(() => {
    //     addDoc(collectionRef, { data: msgs[0] })
    // }, [])
    const OnchatEnter=(Textmsg)=>{
        let currentTime=new Date();
        setMessageObject((pres)=>(
           [...pres, { data:Textmsg,
                time: {
                    hours:currentTime.getHours(),
                    mins:currentTime.getMinutes()
                }}]
        ))
        }
        // console.log(messageObject)
    
    return (
        <div className="absolute left-16 flex w-1/3 h-full flex-col bg-chat border-r border-l border-border ">
            <Tcontext.Provider value={{OnchatEnter,messageObject}}>
            <MsgArea/>
            <BottomMsg/>
            </Tcontext.Provider>
        </div>
    )
}