/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import BottomMsg from "./BottomMsg";
import MsgArea from "./MsgArea";

export const Tcontext = createContext()

export function Message() {
    const [messageObject, setMessageObject] = useState([]);
    const OnchatEnter = async (Textmsg) => {
        let currentTime = new Date();
        setMessageObject((pres) => (
            [...pres, {
                data: Textmsg,
                person:"client",
                time: {
                    hours: currentTime.getHours(),
                    mins: currentTime.getMinutes()
                }
            }]
        ))
        const response = await fetch('http://127.0.0.1:5000/chat', {
            method: 'POST',
            body: JSON.stringify({"text":Textmsg}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result);
        setMessageObject((pres) => (
            [...pres, {
                data: result.message,
                person:"chatbot",
                time: {
                    hours: currentTime.getHours(),
                    mins: currentTime.getMinutes()
                }
            }]
        ))
    }


    return (
        <div className="flex  w-5/6   h-screen flex-col bg-chat border-r border-l-2 border-border ">
            <Tcontext.Provider value={{ OnchatEnter, messageObject }}>
                <MsgArea />
                <BottomMsg />
            </Tcontext.Provider>
        </div>
    )
}