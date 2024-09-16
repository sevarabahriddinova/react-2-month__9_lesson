import { TbBrandGravatar } from "react-icons/tb"; 
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=" bg-blue-500 shadow-2xl">
        <nav className='w-[1200px] m-auto flex items-center justify-between p-2'>

        <Link to={"/"} >
        <div className='flex px-2 shadow-2xl bg-gray-300 w-fit rounded-full'>
            <span className='font-bold text-[36px]  text-lime-700'>S</span>
            <div className="flex flex-col text-lg">
                <span className='font-bold mt-2 text-sm text-yellow-500'>B</span>
                <span><TbBrandGravatar className="text-yellow-600  absolute" /></span>
            </div >
            <span className='font-bold  text-[22px]  left-[44px] mt-2 text-green-700'>M</span>
        </div></Link>
    

            <ul className='flex gap-6'>
                <li className="text-white">
                    <Link to={"/"}>Home</Link>
                </li>

                <li className="text-white">
                    <Link to={"auth/signUp"}>Register </Link>
                </li>

                <li className="text-white">
                    <Link to={"auth/login"}>Login </Link>
                </li>
                <li className="text-white">
                    <Link to={"/profile"}>Profile</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header