/* eslint-disable react/prop-types */



export default function Textmsg(props){
    return(
        <div className=""><span className="text-lg font-Poppins">{props.name}</span> <span className="text-sm">{`${props.Time.hours}:${props.Time.mins}`}</span></div>
    )
}