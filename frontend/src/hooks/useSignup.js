import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

// This hook handles user signup functionality
const useSignup = () => {
    const {setAuthUser}=useAuthContext();

    const [loading, setLoading] = useState(false)
    const signUp=async ({fullname, username, password, confirmPassword, gender})=>{
        const success=handleInputError(password, confirmPassword)
        if(!success) return;
        
        setLoading(true)
        try {
            const res= await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({fullname, username, password, confirmPassword, gender})
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
    return {loading, signUp}
}

export default useSignup

function handleInputError(password, confirmPassword){
    if(password!==confirmPassword){
        toast.error("Passwords don't match")
        return false;
    }
    return true;
}
