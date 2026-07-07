import React from 'react'
import logo from '../assets/images/logo.png'
import { Globe, MessageCircle, Send, Share2 } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='relative bg-[#020304] border-t border-[#3f280e] font-body text-amber-50 transition-all duration-300 hover:border-[#9b6724] hover:shadow-[0_-8px_28px_rgba(228,159,67,0.16)]'>
      <div className='mx-auto flex max-w-7xl flex-col gap-10 px-8 py-8 md:flex-row md:justify-between md:gap-12'>
        <div className='md:w-[28%] md:border-r md:border-[#2b1b0b] md:pr-10'>
          <div className='flex items-center'>
            <img src={logo} className='w-18' alt='SpellShelf logo' />
            <div>
              <h2 className='font-heading text-2xl tracking-wider text-[#E49F43]'>SpellShelf</h2>
              <p className='font-heading text-xs tracking-wide text-amber-50'>Library Management System</p>
            </div>
          </div>

          <p className='mt-4 max-w-xs text-lg leading-6 text-amber-50/85'>
            Empowering libraries with magical solutions to manage books, members and knowledge.
          </p>

          <div className='mt-5 flex gap-4'>
            <button className='flex h-9 w-9 items-center justify-center rounded-full border border-[#5f3c16] text-[#E49F43] transition hover:border-[#E49F43] hover:bg-[#2A090F]' aria-label='Website'>
              <Globe size={16} />
            </button>
            <button className='flex h-9 w-9 items-center justify-center rounded-full border border-[#5f3c16] text-[#E49F43] transition hover:border-[#E49F43] hover:bg-[#2A090F]' aria-label='Community'>
              <MessageCircle size={16} />
            </button>
            <button className='flex h-9 w-9 items-center justify-center rounded-full border border-[#5f3c16] text-[#E49F43] transition hover:border-[#E49F43] hover:bg-[#2A090F]' aria-label='Share'>
              <Share2 size={16} />
            </button>
          </div>
        </div>

        <div className='md:w-[13%]'>
          <h3 className='font-heading text-lg font-semibold tracking-wider text-[#E49F43]'>Quick Links</h3>
          <ul className='mt-4 space-y-2 text-lg text-amber-50/85'>
            <li className='cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#E49F43]'>Home</li>
            <li className='cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#E49F43]'>Features</li>
            <li className='cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#E49F43]'>About Us</li>
            <li className='cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#E49F43]'>Contact</li>
          </ul>
        </div>

        <div className='md:w-[16%]'>
          <h3 className='font-heading text-lg font-semibold tracking-wider text-[#E49F43]'>Features</h3>
          <ul className='mt-4 space-y-2 text-lg text-amber-50/85'>
            <li className='cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#E49F43]'>Book Management</li>
            <li className='cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#E49F43]'>Member Management</li>
            <li className='cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#E49F43]'>Issue &amp; Return</li>
            <li className='cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#E49F43]'>Reports &amp; Analytics</li>
          </ul>
        </div>

        <div className='md:w-[14%]'>
          <h3 className='font-heading text-lg font-semibold tracking-wider text-[#E49F43]'>Support</h3>
          <ul className='mt-4 space-y-2 text-lg text-amber-50/85'>
            <li className='cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#E49F43]'>Help Center</li>
            <li className='cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#E49F43]'>Documentation</li>
            <li className='cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#E49F43]'>Privacy Policy</li>
            <li className='cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#E49F43]'>Terms of Service</li>
          </ul>
        </div>

        <div className='md:w-[22%]'>
          <h3 className='font-heading text-lg font-semibold tracking-wider text-[#E49F43]'>Newsletter</h3>
          <p className='mt-4 max-w-xs text-lg leading-6 text-amber-50/85'>
            Stay updated with our latest news and updates.
          </p>

          <form className='mt-5 flex max-w-sm overflow-hidden rounded-md border border-[#5f3c16] bg-[#050607] transition-all duration-300 hover:border-[#E49F43] hover:shadow-[0_0_18px_rgba(228,159,67,0.18)] focus-within:border-[#E49F43] focus-within:shadow-[0_0_18px_rgba(228,159,67,0.18)]'>
            <input
              type='email'
              placeholder='Enter your email'
              className='min-w-0 flex-1 bg-transparent px-4 py-3 text-base text-amber-50 outline-none placeholder:text-amber-50/55'
            />
            <button className='flex w-12 items-center justify-center border-l border-[#5f3c16] bg-[#2A090F] text-[#E49F43] transition hover:bg-[#3b0d16]' aria-label='Send newsletter email'>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className='mx-auto flex max-w-7xl items-center gap-6 px-8 pb-5 text-center text-sm text-amber-50/75'>
        <span className='h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#5f3c16] to-[#5f3c16]'></span>
        <p>© 2024 SpellShelf. All rights reserved.</p>
        <span className='h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#5f3c16] to-[#5f3c16]'></span>
      </div>
    </footer>
  )
}

export default Footer
