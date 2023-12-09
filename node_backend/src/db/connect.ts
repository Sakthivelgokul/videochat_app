import mongoose, { ConnectOptions } from "mongoose";

const connectDb = async () => {
    try {
        const db =await mongoose.connect("mongodb://127.0.0.1:27017", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions)
                            .then(()=>console.log("Database was connected"))
        return db
    }
    catch(err){
        console.log(err)
        return err
    }

}
export  default connectDb