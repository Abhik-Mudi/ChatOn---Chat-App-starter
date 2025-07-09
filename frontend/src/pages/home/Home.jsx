import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/MessageContainer/MessageContainer'

// This component serves as the main home page of the application
const Home = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-cover bg-center">
      <div className="flex w-[80vw] h-[80vh] bg-white/20 rounded-3xl shadow-2xl backdrop-blur-md border border-white/30 items-stretch">

        <div className="hidden w-1/3 h-full sm:flex py-3 justify-center">
          <Sidebar />
        </div>

        <div className="w-full sm:w-3/4 h-full flex items-center justify-end">
          <div className="w-full h-full rounded-2xl shadow-lg backdrop-blur-md border border-white/30 p-8">
            <MessageContainer />
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Home