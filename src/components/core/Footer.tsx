import Image from 'next/image'
import React from 'react'
import Logo from "@/../public/logo.png";
import { Link } from 'lucide-react';

const Footer = () => {
  return (
    <div className='border-t-[1px] border-t-zinc-900 mt-8'>
        <div className='max-w-[1200px] m-auto p-10'>
            <div className='flex flex-wrap items-center justify-between'>
                <div className='flex flex-col gap-4'>    
                <Image src={Logo} alt='Logo' width={120} height={120} />
                <p className='text-white text-sm'>Scale your social media with InstaLytics.</p>
                </div>
                <div>
                    <h1 className='font-semibold text-white'>General</h1>
                    <Link href="#">Home</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer