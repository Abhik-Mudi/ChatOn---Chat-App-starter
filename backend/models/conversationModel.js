import mongoose from "mongoose";

// This schema defines the structure of a conversation in the database
const conversationSchema=new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: []
        }
    ]
}, {timestamps: true})

const Conversation = mongoose.model("Conversation", conversationSchema)

export default Conversation;