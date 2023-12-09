import mongoose from "mongoose";

const offerModal= mongoose.Schema({

})

const icecandiates=mongoose.Schema({

})
const manger=mongoose.model("manger",offerModal)
const conectModal=mongoose.model("pcp1",icecandiates)

export default function testI(){
    manger.create({inial:9})
    conectModal.create({ice:90})
}
