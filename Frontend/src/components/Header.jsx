import React from 'react'
import logo from "../assets/images/logo.png"
import {ShieldUser, SquareArrowRightExit} from "lucide-react"

const HEADER = () => {
  return (
    <>
        <div className='flex justify-between w-screen h-18 border-b border-b-[#131416] pb-2 font-heading bg-black/70 fixed z-10'>
            <div className='flex items-center justify-center'>
                <img src={logo} className='w-20'/> 
                <div>
                    <h1 className='text-2xl text-[#E49F43]'>SpellShelf</h1>
                    <p className=' text-sm text-white'>Library Management System</p>
                </div>
            </div>

            <nav className='pt-7'>
                <ul className='flex list-none space-x-6'>
                    <li className='text-amber-50'>Home</li>
                    <li className='text-amber-50'>Features</li>
                    <li className='text-amber-50'>About</li>
                    <li className='text-amber-50'>Contact</li>
                </ul>
            </nav>

            <div className='pt-3 flex justify-between gap-5 mx-4'>
                <button className='px-4 border-2 border-[#372916] rounded-lg'>
                    <h4 className='text-[#E49F43] flex justify-between items-center gap-2 tracking-tight'><SquareArrowRightExit /> Login</h4>
                </button>

                <button className='px-3 border-2 border-t-3 border-[#372916] rounded-lg bg-[#2A090F]'>
                    <h4 className='text-white flex justify-between items-center gap-2 tracking-tight'><ShieldUser className='text-[#E49F43]' /> Admin Login</h4>
                </button>
            </div>
        </div>
    </>
  )
}

export default HEADER