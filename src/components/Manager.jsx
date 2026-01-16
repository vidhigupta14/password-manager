import React from 'react'

const Manager = () => {
    const handleClick = () => {
        
    }
    return (
        <>
            <div className="absolute top-0 -z-10 h-full w-full bg-white">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-125 w-125 -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
            </div>

            <div className='w-2/3 m-auto mt-12 flex flex-col gap-1'>
                <input type="text" name='website' id='url' placeholder='Website URL' className='p-2 w-full rounded-md border-[rgba(173,109,244,0.5)] border-2' />
                <div className='flex gap-1'>
                    <input type="text" name='website' id='uname' placeholder='Username' className='p-2 w-1/2 rounded-md border-[rgba(173,109,244,0.5)] border-2' />
                    <input type="text" name='website' id='pw' placeholder='Password' className='p-2 w-1/2 rounded-md border-[rgba(173,109,244,0.5)] border-2' />
                </div>
                <button onClick={handleClick()} className='bg-[rgba(173,109,244)] p-3 rounded-md text-white font-bold hover:bg-[#8e4ed7]'>Save</button>
            </div>
        </>
    )
}

export default Manager