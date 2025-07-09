import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from '../../hooks/useLogout';

// This component renders the footer of the sidebar with a logout button
const Footer = () => {
  const {loading, logout}=useLogout();
  return (
    <div className='flex items-end fixed bottom-3 left-4' onClick={logout}>
    {loading ? (
      <span className='loading loading-spinner'></span>
    ):( 
      <RiLogoutBoxLine className='w-6 h-6 cursor-pointer'/>
    )}
    </div>
    
  )
}

export default Footer
