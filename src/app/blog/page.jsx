"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import './blog.css'
import Image from 'next/image'

const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const triggerOpen = () => {
    setOpen(true);
  }
  const triggerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <h1 className='text-center lg:text-8xl font-fira_sans font-bold mt-10'>Blogs</h1>
      <h1 className='text-center lg:text-5xl font-fira_sans font-light mt-10'>What's New : Talk on Web Development</h1>
      
      <div className='flex h-96 w-224 mt-16 ml-80 bg-white rounded-3xl glowing-border'>
        <div className='flex-1 flex items-center justify-center p-4'>
          <p className='text-2xl text-black'>srgfdg</p>
        </div>
        <div>
          <Image
            src='https://sceptix-club.github.io/website-assets/events/Foss.avif'
            height={500}
            width={500}
            className='w-full h-full rounded-2xl'
          />
        </div>
      </div>


      <div className='inline-flex relative'>
        <div className='h-96 w-96 mt-16 ml-80 bg-white rounded-3xl glowing-border text-black' onClick={triggerOpen}>
      </div>
        
        {isOpen && (
          <div className='absolute top-0 left-80 mt-14 rounded-3xl w-224 h-160 backdrop-blur-3xl text-white z-10'>
            <p className='ml-28 text-5xl'>How we make good websites!</p>
            <p onClick={triggerClose}>close</p>
          </div>
        )}
        
        <div className='h-96 w-96 mt-16 ml-32 bg-white rounded-3xl glowing-border'></div>
      </div>
      
    </>
  );
}

export default Page;
