import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

// This hook fetches the list of conversations (users) from the server
const useGetConversation = () => {
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    const getConversations=async ()=>{
        setLoading(true)

        try {
            const res=await fetch("/api/users")
            const data=await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            setConversations(data)
        } catch (error) {
            toast.error(error)
        } finally {
            setLoading(false)
        }
    }

    getConversations();
  }, [])
  
  return {loading, conversations};
}

export default useGetConversation;
