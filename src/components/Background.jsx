import React from 'react'

const Background = () => {
    return (
        <>
        <div className='w-full fixed h-screen z-[2]'>
            <div className='w-full py-10 absolute top-[5%] flex justify-center text-zinc-600 font-semibold text-xl'>My Documents</div>
            <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>My Docs.</h1>
        </div>
        </>
    )
}
export default Background


