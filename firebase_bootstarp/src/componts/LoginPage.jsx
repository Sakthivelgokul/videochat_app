import {useLoginContex} from "../firebaseJs/LoginContex"


export  function Loginpage(){
    const signWithPopup=useLoginContex();
    async function handldeLogin(){
        const loginReuslt=await signWithPopup();  
        if(loginReuslt=="success"){
            console.log("hi");
        }
        else{
            prompt("login fail");
            console.log("errors");
        }
    }
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <button className="bg-chat border-chat text-emerald-600"onClick={handldeLogin}>login</button>
        </div>
    )
}