import { Router } from "express";
import {creataRoom,OfferRoom } from "../../db/modal/manage.js";
const router=Router();

router.post("/initdb", async(req,res)=>{
    let body = await req.body;
    // let name = body.name;
    console.log(body)
    creataRoom(body.name)
    res.send("hi")
})
router.post("/addice",async (req,res)=>{
    let body=await req.body;
    console.log(body)
    res.send("hi")
})
router.post("/addans",async(req,res)=>{
    let body =await req.body;
    let json =JSON.stringify(body.offer);
    await OfferRoom(json)
    
})
export default router