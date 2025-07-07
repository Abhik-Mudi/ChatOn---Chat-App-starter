import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchUser = () => {
  return (
    <div className=''>
      <form className='flex items-start gap-2' action="">
        <input type="text" placeholder='Search..' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'><FaSearch /></button>
      </form>
    </div>
  )
}

export default SearchUser
