import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const {loading, login}=useLogin()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit=async (e)=>{
        e.preventDefault()
        await login(username, password)
    }

    return (
        <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-cover bg-center">
            <div className="md:w-full w-[90%] max-w-md bg-white/20 rounded-xl shadow-lg backdrop-blur-md border border-white/30 flex flex-col items-center md:p-8 p-6">
                <h1 className="text-2xl font-bold text-white mb-4">
                    Login <span className='text-blue-300'>ChatOn</span>
                </h1>
                <form className='flex flex-col w-full gap-4' onSubmit={(e)=>onSubmit(e)}>

                    {/* Username */}
                    <div>
                        <label className="block text-white mb-1" htmlFor="username">Username</label>
                        <input
                            id="username"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            type="text"
                            className="input input-bordered w-full bg-white/60 text-black placeholder:text-gray-500"
                            placeholder="Username"
                            pattern="[A-Za-z][A-Za-z0-9\-_]*"
                            minLength="3"
                            maxLength="30"
                            title="Only letters, numbers or dash"
                            required
                        />
                        {/* <p className="text-[10px] hidden text-gray-200 mt-1">
                            Must be 3 to 30 characters containing only letters, numbers or dash
                        </p> */}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-white mb-1" htmlFor="password">Password</label>
                        <input
                            id="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            className="input input-bordered w-full bg-white/60 text-black placeholder:text-gray-500"
                            placeholder="Password"
                            minLength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            required
                        />
                        {/* <p className="text-[10px] hidden text-gray-200 mt-1">
                            Must be more than 8 characters, including at least one number, one lowercase letter, and one uppercase letter
                        </p> */}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn w-full h-10 bg-white text-black border-[#e5e5e5] mt-6 hover:bg-blue-100 transition">
                        {loading ? <span className='loading loading-spinner'></span> : <><svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                        Login</>}
                    </button>

                </form>

                <div className="mt-4 text-white text-sm">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-300 underline hover:text-blue-400">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login