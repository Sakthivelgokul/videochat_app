import mongoose from "mongoose";
const connectDB =async () => {
    try {
        const db = await mongoose.connect("mongodb://127.0.0.1:27017", {
            useNewUrlParser: true,
            useUnifiedTopology: true
            })
        .then(console.log("connected"))
        return db
    } catch (err) {
        console.log(err)
    }
}

export default connectDB