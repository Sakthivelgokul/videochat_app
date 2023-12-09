import { Screen } from "./Screen"
import { Message } from "./Message";
import ContactArea from "./ContactArea";



export default function Homepage(){
    return(
        <div className="relative flex flex-row h-screen ">
            <ContactArea />
            <Message />
            <Screen />
        </div>
    )
}