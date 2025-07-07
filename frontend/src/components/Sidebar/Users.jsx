import React from 'react'
import useGetConversation from '../../hooks/useGetConversation'

const Users = () => {
    const {loading, conversations}=useGetConversation();
    console.log(conversations);
    
    return (
        <div className='flex flex-col h-[65vh] overflow-auto'>
            {loading ? (
                <span className='loading loading-spinner'></span>
            ) : (
                conversations.map((conversation, idx) => (
                    <div key={idx} className='flex gap-2 hover:bg-white/20 rounded-3xl px-3 py-2 items-center'>
                        <div className="avatar avatar-online">
                            <div className="w-10 rounded-full">
                                <img src={conversation.profilePic} alt="User avatar" />
                            </div>
                        </div>
                        <span className='font-semibold'>{conversation.fullname || "Unknown User"}</span>
                    </div>
                ))
            )}
            


        </div>
    )
}

export default Users
