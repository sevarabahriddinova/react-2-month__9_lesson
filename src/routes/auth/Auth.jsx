import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='flex items-center justify-center min-h-screen '>
        <div className='max-w-[400px] shadow-2xl  flex-1 bg-blue-300 rounded-md p-4'> 
            <Outlet/>
        </div>
    </div>
  )
}

export default Auth