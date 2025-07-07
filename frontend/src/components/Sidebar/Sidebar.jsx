import React from 'react'
import SearchUser from './SearchUser'
import Users from './Users'
import Footer from './Footer'

const Sidebar = () => {
  return (
    <div className='hidden relative sm:block text-md md:text-xl'>
      <SearchUser className=''/>
      <div className='divider m-0 mb-5'></div>
      <Users />
      <Footer className=''/>
    </div>
  )
}

export default Sidebar
