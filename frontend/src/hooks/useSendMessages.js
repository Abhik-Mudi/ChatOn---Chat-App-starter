import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import useConversation from '../zustand/useConversation';

const useSendMessage = () => {
    const {setAuthUser}=useAuthContext();
    const [loading, setLoading] = useState(false)
    const {messages, setMessages, selectedConversation}=useConversation()

    const sendMessage=async (message)=>{
        setLoading(true)
        try {
            console.log(selectedConversation);
            const res= await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({message})
            })
            const data=await res.json()

            if(data.error){
                throw new Error(data.error)
            }

            setMessages([...messages, data])
        } catch (error) {
            toast.error(error.message) 
        } finally {
            setLoading(false)
        }
    }
    return {loading, sendMessage}
}

export default useSendMessage;
