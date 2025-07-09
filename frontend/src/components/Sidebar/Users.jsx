import React from 'react'
import useGetConversation from '../../hooks/useGetConversation'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

// This component renders a list of users (conversations) in the sidebar
const Users = () => {
    const { loading, conversations } = useGetConversation();
    const { selectedConversation, setSelectedConversation } = useConversation();


    return (
        <div className='flex flex-col h-[65vh] overflow-auto'>
            {loading ? (
                <span className='loading loading-spinner'></span>
            ) : (
                conversations.map((conversation, idx) => {

                    const { onlineUsers } = useSocketContext();
                    const isOnline = onlineUsers.includes(conversation._id)
                    const isSelected = selectedConversation?._id === conversation._id

                    return (
                        <div key={idx} className={`flex text-[16px] gap-2 hover:cursor-pointer rounded-3xl px-3 py-2 items-center ${isSelected && "bg-blue-500"}`}
                            onClick={() => setSelectedConversation(conversation)}
                        >
                            <div className={`avatar ${isOnline?"avatar-online":""}`}>
                                <div className="w-10 rounded-full">
                                    <img src={conversation.profilePic} alt="User avatar" />
                                </div>
                            </div>
                            <span className='font-semibold'>{conversation.fullname || "Unknown User"}</span>
                        </div>
                    )
                })
            )}



        </div>
    )
}

export default Users
