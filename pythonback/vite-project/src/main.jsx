import { createRoot } from "react-dom/client";
import React from "react";
import { Message } from "./Message"
import './index.css';
export default function Main() {
  return (
    <div className="h-screen w-screen flex bg-chat ">
      <Message />

      <div className="flex justify-center items-center w-full ">
        <h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl font-Montserrat dark:text-white">Chatbot in Python</h2>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
