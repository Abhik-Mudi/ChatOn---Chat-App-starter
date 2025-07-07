import React from 'react'
import { IoIosSend } from "react-icons/io";
import { TiMessages } from "react-icons/ti";

const NoChatSelected = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full text-center select-none">
            <TiMessages className='w-12 h-12'/>
            <h2 className="text-2xl font-bold text-white mb-2">Select a chat to start messaging</h2>
            <p className="text-white/70 mb-2">Choose a conversation from the sidebar or start a new one.</p>
        </div>
    )
}

const MessageContainer = () => {
    let isSelected = false;

    return (
        <div className='flex flex-col relative justify-between h-full max-h-full overflow-auto px-2 py-4'>
            {isSelected ? (
                <>
                    <div className='fixed top-2 '>Abhik</div>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                                />
                            </div>
                        </div>
                        <div className="chat-header">

                            <time className="text-xs opacity-50">12:45</time>
                        </div>
                        <div className="chat-bubble">You were the Chosen One!</div>
                        <div className="chat-footer opacity-50">Delivered</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                                />
                            </div>
                        </div>
                        <div className="chat-header">

                            <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble">I hate you!</div>
                        <div className="chat-footer opacity-50">Seen at 12:46</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                                />
                            </div>
                        </div>
                        <div className="chat-header">

                            <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble">I hate you!</div>
                        <div className="chat-footer opacity-50">Seen at 12:46</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                                />
                            </div>
                        </div>
                        <div className="chat-header">

                            <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble">I hate you!</div>
                        <div className="chat-footer opacity-50">Seen at 12:46</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                                />
                            </div>
                        </div>
                        <div className="chat-header">

                            <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble">I hate you!</div>
                        <div className="chat-footer opacity-50">Seen at 12:46</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                                />
                            </div>
                        </div>
                        <div className="chat-header">

                            <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble">I hate you!</div>
                        <div className="chat-footer opacity-50">Seen at 12:46</div>
                    </div>
                    <div className='w-[86%] fixed bottom-2 '>
                        <label className="input w-full">
                            <input type="search" className="" placeholder="Type message..." />
                            <span><IoIosSend className='w-5 h-5 cursor-pointer' /></span>
                        </label>
                    </div>
                </>
            ) : (
                <NoChatSelected/>
            ) }
        </div>
    )
}


export default MessageContainer
