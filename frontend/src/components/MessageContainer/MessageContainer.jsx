import React, { useEffect, useRef, useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
import useSendMessage from '../../hooks/useSendMessages';
import useGetMessages from '../../hooks/useGetMessages';
import convertMongoDate from '../../utils/mongodbTimeConvert.js';
import useListenMessages from '../../hooks/useListenMessages.js';

// This component displays the message container where users can send and receive messages
const NoChatSelected = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full text-center select-none">
            <TiMessages className='w-12 h-12' />
            <h2 className="text-2xl font-bold text-white mb-2">Select a chat to start messaging</h2>
            <p className="text-white/70 mb-2">Choose a conversation from the sidebar or start a new one.</p>
        </div>
    )
}

// This component renders the message container where users can view and send messages
// It listens for incoming messages using a custom hook and allows users to send messages in the selected conversation
const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const { authUser } = useAuthContext()

    // Listen for incoming messages using the custom hook
    useListenMessages();

    const { sendMessage } = useSendMessage()
    const { loading, messages } = useGetMessages();

    const [message, setMessage] = useState("")
    const lastMessageRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message) return;
        await sendMessage(message)
        setMessage("");
    }

    // Clear the selected conversation when the component unmounts
    useEffect(() => {
        return () => {
            setSelectedConversation(null)
        }
    }, [])

    // Scroll to the last message when messages change
    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({behaviour: "smooth"})
    }, [messages])
    

    return (
        <div className='flex flex-col relative  h-full max-h-full overflow-auto px-2 py-4'>
            {selectedConversation ? (
                <>
                    <div className='fixed top-2 font-semibold text-lg'>{selectedConversation.fullname}</div>
                    {messages.map((message, idx) => {
                        const fromMe = message.senderId === authUser.id;
                        const chatClass = fromMe ? "chat-end" : "chat-start";
                        const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
                        const bubbleBg = fromMe ? "bg-blue-500" : "";


                        return (
                            <div key={idx} ref={lastMessageRef} className={`chat ${chatClass} `} >
                                <div className="chat-image avatar ">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="alt"
                                            src={profilePic}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "/Profile_avatar_placeholder_large.png"; 
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="chat-header">

                                    <time className="text-xs opacity-50">{convertMongoDate(message.createdAt)}</time>
                                </div>
                                <div className={`chat-bubble ${bubbleBg} mb-1`}>{message.message}</div>
                            </div>
                        )

                    })}

                    {messages.length==0 && <div className='text-center font-semibold'>Send the first message</div>}

                    <form className='w-[86%] fixed bottom-2 ' onSubmit={handleSubmit}>
                        <label className="input w-full">
                            <input type="search" className="" placeholder="Type message..." value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <span><IoIosSend className='w-5 h-5 cursor-pointer' onClick={(e) => handleSubmit(e)} /></span>
                        </label>
                    </form>
                </>
            ) : (
                <NoChatSelected />
            )}
        </div>
    )
}


export default MessageContainer
