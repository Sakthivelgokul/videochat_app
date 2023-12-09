import mongoose from "mongoose";



const schema = new mongoose.Schema({
    roomname: String,
}, { strict: false })

export async function creataRoom(str:String) {
    let room =  mongoose.model<mongoose.Document>("room", schema,"room");
    let offer =  mongoose.model<mongoose.Document>("offer", schema,"room");
    let answer =  mongoose.model<mongoose.Document>("answer", schema,"room");
    await room.create({roomname:str})
    const id =(await room.findOne({roomname:str})).id
    console.log(id);
    return id
}




export async function OfferRoom(json:JSON) {


}
