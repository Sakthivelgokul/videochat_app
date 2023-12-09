/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import { Tcontext } from "./Message";


const BottomMsg=()=>{
    const [textMsg,setTextMsg]=useState("");

    const {OnchatEnter}=useContext(Tcontext);
    function handleMsgInput(event){
        setTextMsg(event.target.value)
    }
    function onEnter(e){
        if (e.key === 'Enter') {
            OnchatEnter(textMsg);
            setTextMsg("");
        }
    }
    return (
        <div className=" flex mb-8 justify-center">
                <div className="rounded-full bg-border p-1 px-3  text-white w-3/5 ">
                    <input type="text" onChange={handleMsgInput} onKeyUp={onEnter} value={textMsg} className=" p-2 rounded-xl focus:border-none border-0 focus-visible:outline-none focus-visible:shadow-none bg-transparent w-full"/>
                </div>
            </div>
    )
}
export default BottomMsg