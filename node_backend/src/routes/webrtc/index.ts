import { Router } from "express";
import {creataRoom} from "../../db/modal/webrtcModal.js"
import { send } from "process";

const webrtcRouter=Router();

webrtcRouter.post("/initdb",async(req,res)=>{
    let body = await req.body;
    let id=creataRoom(body.name)
    res.send(id)
})
webrtcRouter.post("/addice",async (req,res)=>{
    let body=await req.body;
    console.log(body)
    res.send("hi")
})
webrtcRouter.post("/addans",async(req,res)=>{
    let body =await req.body;
    let json =JSON.stringify(body.offer);
    res.send("hi")
})
export default webrtcRouter