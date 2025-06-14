import React from 'react'
import { Outlet } from 'react-router'
const Header = () => {
  return (
    <div className='flex items-center justify-between h-[10%] py-4 px-4 bg-gradient-to-r from-zinc-700 to-gray-900'>
        <h1 className='text-white'>Title</h1>

        <div className='flex gap-1'>
            <span className='text-white'>
                One
            </span>
            <span className='text-white'>
                Two
            </span>
            <span className='text-white'>
                Three
            </span>
        </div>
    </div>
  )
}

export default Header