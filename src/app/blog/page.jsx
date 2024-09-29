"use client"

import React, { useEffect, useState } from 'react'
import './blog.css'
import Image from 'next/image'
import blogData from './data.json';

const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const triggerOpen = (item) => {
    setOpen(true);
    setActiveItem(item);
    const mainEle = document.getElementById('main');
    mainEle.style.filter = 'blur(100px)';
  }

  const triggerClose = () => {
    setOpen(false);
    setActiveItem(null);
    const mainEle = document.getElementById('main');
    mainEle.style.filter = 'blur(0px)';
  }

  return (
    <>
    <main id="main">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <h1 className='text-center lg:text-8xl font-fira_sans font-bold mt-10'>Blogs</h1>
      <h1 className='text-center lg:text-5xl font-fira_sans font-light mt-10'>What's New : Talk on Web Development</h1>
      
      <div>
        {
          blogData.map((item, index) => {
            return (
              <div className='inline-flex relative' key={index}>
                <div className='h-96 w-96 mt-16 ml-24 bg-white rounded-3xl glowing-border text-black' onClick={() => triggerOpen(item)}>
                  <img className='rounded-3xl' src={item.link}/>
                  <div className='ml-4 mt-4 font-fira_sans text-3xl'>
                  {item.title}
                  <br />
                  </div>
                  <div className='ml-32 mt-1 italic font-fira_sans text-2xl'>
                  {item.subclass}
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
      </main>
      <div id="modal" className='mb-10'>
      {isOpen && (
        <div className='fixed mt-10 rounded-xl border-4 border-gray-500 w-224 h-130 overflow-y-scroll bg-black text-white z-10 font-fira_sans' style={{ top: '13%', left: '20%'}}>
          <p className='ml-4 mt-2 text-5xl text-white font-bold'>{activeItem.title}</p>
          <img src={activeItem.innerimage} className='h-96 mt-4 w-full'/>
          <p className='text-white font-fira_sans text-xl m-5'>{activeItem.content}</p>
          <p className='text-white absolute right-4 top-4 hover:text-gray-600' onClick={triggerClose}><span class="material-symbols-outlined"><p className='text-4xl'>close</p></span></p>
        </div>
      )}
      </div>
    </>
  );
}

export default Page;
