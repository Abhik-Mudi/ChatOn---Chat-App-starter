import mongoose from "mongoose";

// This schema defines the structure of a message in the database
const messageSchema=new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const Message = mongoose.model("Message", messageSchema)

export default Message;