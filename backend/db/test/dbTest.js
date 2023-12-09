// import connectDB from "./connect";
import mongoose from "mongoose";
const contactSchema=new mongoose.Schema({
    no:Number
})
const conmodal = new mongoose.model("contact",contactSchema);

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    contact: [{ type: mongoose.Schema.Types.ObjectId, ref: 'contact' }]
})
// const db=connectDB().then(db.)
const modal = new mongoose.model("student",userSchema);

 const test = async ()=>{
    const data=conmodal.create({no:897654})
    modal.create({username:"wellcome",email:"weko",data}).then(console.log("sucess"));
}
export default test