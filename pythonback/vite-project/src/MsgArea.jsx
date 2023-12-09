/* eslint-disable react-hooks/exhaustive-deps */
import Textmsg from "./Textmsg"
import { Tcontext } from "./Message"
import {useEffect, useContext, useState } from "react"


function MsgArea(){
    let [textmessage,SetTextMessage]=useState([]);
    const{messageObject}=useContext(Tcontext);

    useEffect(()=>{
        addAewMessage(messageObject)
    },[messageObject])
    function addAewMessage(messageObject){
        SetTextMessage( messageObject)
    }
    
    return (
        <div className="flex flex-grow  text-white justify-end  p-4 flex-col">
            {(textmessage.length) ? textmessage.map((Message)=>{
                return <Textmsg key={Message} name={Message.data} Time={Message.time} person={Message.person} />}): "" }
        </div>

    )
}

export default MsgArea