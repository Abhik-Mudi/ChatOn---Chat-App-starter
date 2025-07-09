import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast';

// This hook fetches messages for the selected conversation from the server
const useGetMessages = () => {
  const [loading, setLoading] = useState(false)
  const {selectedConversation, messages, setMessages}=useConversation();

  useEffect(() => {
    setLoading(true)
    const getMessages=async ()=>{

      try {
        const res=await fetch(`/api/messages/${selectedConversation._id}`)
        const data=await res.json();
        
        if(data.error) throw new Error(data.error)
          
          setMessages(data)
          
        } catch (error) {
          toast.error(error)
        }finally{
          setLoading(false)
        }
    }

    if(selectedConversation?._id) getMessages()
  }, [selectedConversation?._id])
  
  return {loading, messages}
}

export default useGetMessages;
