import React from 'react'

const Users = () => {
    return (
        <div className='flex flex-col h-[65vh] overflow-auto'>
            <div className='flex gap-2 hover:bg-white/20 rounded-3xl px-3 py-2 items-center'>
                <div className="avatar avatar-online">
                    <div className="w-10 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>
                <span className='font-semibold'>John Doe</span>
            </div>
            <div className='flex gap-2 hover:bg-white/20 rounded-3xl px-3 py-2 items-center'>
                <div className="avatar avatar-online">
                    <div className="w-10 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>
                <span className='font-semibold'>John Doe</span>
            </div>
            <div className='flex gap-2 hover:bg-white/20 rounded-3xl px-3 py-2 items-center'>
                <div className="avatar avatar-online">
                    <div className="w-10 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>
                <span className='font-semibold'>John Doe</span>
            </div>
            <div className='flex gap-2 hover:bg-white/20 rounded-3xl px-3 py-2 items-center'>
                <div className="avatar avatar-online">
                    <div className="w-10 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>
                <span className='font-semibold'>John Doe</span>
            </div>


        </div>
    )
}

export default Users
