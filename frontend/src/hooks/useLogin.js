import React, { useState } from 'react'

const useLogin = () => {
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

export default useLogin
