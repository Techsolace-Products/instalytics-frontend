import Image from 'next/image'
import React from 'react'
import Dashboard from '@/../public/dashboard.png';
import Shape5 from '@/../public/shape5.png';

const PostHero = () => {
  return (
    <>
    <div className='max-w-[1200px] m-auto'>
    <div className='w-full bg-white p-10 GlobalMesh rounded-3xl flex flex-col gap-5 relative'>
    <Image src={Shape5} width={100} height={100} alt='Dashboard' className='top-5 left-5 absolute' />
        <p className='text-2xl text-center font-semibold text-blue-400'>Schedule Generate Posts with AI</p>
        <div className='px-[40px]'>
        <Image src={Dashboard} width={1000} height={1000} alt='Dashboard' className='w-full rounded-2xl' />
        </div>
    </div>
    </div>
    </>
  )
}

export default PostHero