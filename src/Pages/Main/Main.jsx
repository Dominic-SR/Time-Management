import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../Components/Header/Header'

const Main = () => {
  return (
    <div className='main-container h-[100%] w-[100%]'>
        <Header />
        <Outlet />
    </div>
  )
}

export default Main