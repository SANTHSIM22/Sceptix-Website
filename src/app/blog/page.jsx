"use client"

import React, { useState } from 'react'
import './blog.css'
import Image from 'next/image'
import blogData from './data.json';

const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const triggerOpen = (item) => {
    setOpen(true);
    setActiveItem(item);
  }
  
  const triggerClose = () => {
    setOpen(false);
    setActiveItem(null);
  }

  return (
    <>
      <h1 className='text-center lg:text-8xl font-fira_sans font-bold mt-10'>Blogs</h1>
      <h1 className='text-center lg:text-5xl font-fira_sans font-light mt-10'>What's New : Talk on Web Development</h1>
      
      <div>
        {
          blogData.map((item, index) => {
            return (
              <div className='inline-flex relative' key={index}>
                <div className='h-96 w-96 mt-16 ml-80 bg-white rounded-3xl glowing-border text-black' onClick={() => triggerOpen(item)}>
                </div>
              </div>
            );
          })
        }
      </div>
      
      {isOpen && (
        <div className='absolute top-0 left-80 mt-32 rounded-3xl w-224 h-160 backdrop-blur-3xl text-white z-10'>
          <p className='ml-28 text-5xl'>{activeItem.title}</p>
          <p onClick={triggerClose}>close</p>
        </div>
      )}
    </>
  );
}

export default Page;
