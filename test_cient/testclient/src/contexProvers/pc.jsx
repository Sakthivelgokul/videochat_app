/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};
export function usePcContex(){
  return useContext(pcContex)
}
// export function useLsContex(){
//   return useContext(localContex)
// }  
// export function useRsContex(){
//   return useContext(remoteContex)
// }
let pc = new RTCPeerConnection(servers);
// const localsteam = null;
// const remotesteam=null;

const pcContex =createContext();
// const localContex =createContext();
// const remoteContex =createContext();
// async function localsteaminit(){
//   let ls =await navigator.mediaDevices.getUserMedia({audio:true}) 
//   return ls
// }


export function  PcContexProvider({children}){
    return(
        <pcContex.Provider value={pc}>
          {/* <localContex.Provider value={localsteaminit}> */}
            {/* <remoteContex.Provider value={remotesteam}> */}
            {children}
            {/* </remoteContex.Provider> */}
          {/* </localContex.Provider> */}
        </pcContex.Provider>
    )
}
