import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

// This hook handles user login functionality
const useLogin = () => {
    const {setAuthUser}=useAuthContext();

    const [loading, setLoading] = useState(false)
    const login=async (username, password)=>{
        setLoading(true)
        try {
            const res= await fetch("/api/auth/login", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({username, password})
            })
            const data=await res.json()

            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("chatUser", JSON.stringify(data))

            setAuthUser(data)
        } catch (error) {
            toast.error(error.message) 
        } finally {
            setLoading(false)
        }
    }
    return {loading, login}
}

export default useLogin
