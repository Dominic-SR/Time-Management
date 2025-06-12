import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between bg-slate-700'>
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