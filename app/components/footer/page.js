import React from 'react'
import {FaGithub, FaLinkedin, FaInbox, } from 'react-icons/fa';

function footer() {
  return (
    <footer className='mt-4 p-5 '>
            <h5 className='text-white'>Find me on </h5>
          <div className='flex'>
            <FaInbox />
            <FaGithub />
            <FaLinkedin />
          </div>
     </footer>
  )
}

export default footer