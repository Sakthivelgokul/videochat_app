/* eslint-disable react/prop-types */



export default function Textmsg(props){
    let client="flex justify-end "
    let chatbot="flex justify-start"
    let cssClass=(props.person!="chatbot")?  client:chatbot
    return(
        <div className={cssClass}>
            <span className="text-lg font-Poppins p-1">{props.name}</span>
             {/* <span className="text-sm flex items-center">{`${props.Time.hours}:${props.Time.mins}`}</span> */}
             </div>
    )
}