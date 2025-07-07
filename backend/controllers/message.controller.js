import Conversation from "../models/conversationModel.js"
import Message from "../models/messageModel.js";

// for sending the messages
export const sendMessage=async (req, res)=>{
    try {
        const {message}=req.body;
        const {id : receiverId}=req.params;
        const senderId=req.user._id;

        let conversation=await Conversation.findOne({
            participants: { $all: [senderId, receiverId]},
        })

        if(!conversation){
            conversation=await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage= await Message.create({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
            await conversation.save();
        }

        res.send(newMessage)
    } catch (error) {
        console.log(error.message)
       res.status(500).json({error: "Internal server error"}) 
    }
}

// getting the messages of logged user and one specific user
export const getMessage=async (req, res)=>{
    try {
        const {id: userToChatId} =req.params;
        const senderId=req.user._id;

        const conversation=await Conversation.findOne({
            participants: { $all :[senderId, userToChatId]}
        }).populate("messages")

        if(!conversation) res.status(200).json([])

        res.send(conversation.messages)
    } catch (error) {
        console.log(error.message)
       res.status(500).json({error: "Internal server error"}) 
    }
}