import { useEffect } from "react"
import { socket } from "./socket"


export default function Resvid() {
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'http://localhost:5000',
        'Access-Control-Allow-Credentials': 'true'
    }
    const servers = {
        iceServers: [
            {
                urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
            },
        ],
        iceCandidatePoolSize: 10,
    };
    let pc = new RTCPeerConnection(servers);

    useEffect(() => {
        socket.connect()
    }, [])
    const sendmsg = async () => {
        let localsteam = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        localsteam.getTracks().forEach((track) => {
            pc.addTrack(track, localsteam);
        });
        let remoteStream = new MediaStream();
        pc.ontrack = (event) => {
            event.streams[0].getTracks().forEach((track) => {
                remoteStream.addTrack(track);
            });
        };
        let localelement = document.getElementById("vdcam");
        localelement.srcObject = localsteam
        let remoteelement = document.getElementById("rdcam");
        remoteelement.srcObject = remoteStream

        socket.emit('hello', {});
    }
    async function initoffer() {
        let response = await fetch("http://127.0.0.1:5000/initdb", {
            method: "POST",
            body: JSON.stringify({
                "name": "gokul"
            }),
            headers: headersList
        });
        let data = await response.text();
        console.log(data);

        pc.onicecandidate = async (event) => {
            if (event.candidate) {
                let response = await fetch("http://127.0.0.1:5000/addice", {
                    method: "POST",
                    body: JSON.stringify(event.candidate),
                    headers: headersList
                });
                console.log(response)
                let jos=event.candidate.candidate
                console.log(jos)
            }
        };
        const offerDescription = await pc.createOffer();
        await pc.setLocalDescription(offerDescription);
        const offer = {
            sdp: offerDescription.sdp,
            type: offerDescription.type,
        };
        let db_add = await fetch("http://127.0.0.1:5000/addans", {
            method: "POST",
            body: JSON.stringify({offer}),
            headers: headersList
        });
        console.log(db_add)
    }

    return (
        <>
            <video id="vdcam" autoPlay playsInline ></video>
            <button onClick={sendmsg}>hello</button>
            <video autoPlay playsInline id="rdcam"></video>
            <button onClick={initoffer}>start call</button>
        </>

    )
}