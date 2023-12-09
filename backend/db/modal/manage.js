import mongoose from "mongoose";

var offerroom;
var ansroom;
const schema = new mongoose.Schema({
    roomname: String,
}, { strict: false })



export async function creataRoom(str) {
    offerroom = new mongoose.model("offer" + str, schema)
    ansroom = new mongoose.model("ansner" + str, schema)
    offerroom.create({ roomname: str })
    ansroom.create({ roomname: str })
}

export async function OfferRoom(json) {
    offerroom.create({ json })
}
