import React from 'react'
import { LockKeyhole, Mail, Star, WandSparkles, ShieldUser } from 'lucide-react'
import { Link } from 'react-router-dom'
import bg_register from "../assets/images/bg_register_page.png"


const Register = () => {
  return (
    <>
        <div className='relative w-full h-screen bg-[#02030473] text-amber-50 font-body md:py-12 overflow-hidden flex flex-col items-center justify-center'>
            <img src={bg_register} className='absolute inset-0 -z-10 h-full w-full object-cover' />

            <div className='w-full max-w-md mx-auto px-5 space-y-4 rounded-lg border border-[#5f3c16] bg-black/55 p-6 shadow-[0_0_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-[#9b6724] hover:shadow-[0_-8px_28px_rgba(228,159,67,0.16)]'>
                <div className='text-center'>
                    <h5 className='mx-auto flex w-fit flex-wrap items-center justify-center gap-2 text-center font-heading text-sm tracking-wider text-[#E49F43] sm:text-base md:gap-3'>
                        <span className='h-[1px] w-8 bg-gradient-to-r from-transparent via-[#E49F43] to-[#E49F43] sm:w-6 md:w-8'></span>
                        <Star size={12} />
                        Welcome to spellshelf
                        <Star size={12} />
                        <span className='h-[1px] w-8 bg-gradient-to-l from-transparent via-[#E49F43] to-[#E49F43] sm:w-6 md:w-8'></span>
                    </h5>

                    <h3 className='font-heading text-3xl text-amber-100 mt-4'>Register To SpellShelf</h3>
                    <p className='mt-4'>
                        Access your library, manage your books, members,
                        <span className='block'>and more with ease</span>
                    </p>
                </div> 
                

                <form className='mt-8 space-y-5'>
                    <div>
                        <label htmlFor='email' className='mb-2 block font-heading text-md tracking-wide text-amber-100'>
                            Email Address
                        </label>
                        <div className='flex items-center overflow-hidden rounded-md border border-[#5f3c16] bg-[#050607] transition-all duration-300 focus-within:border-[#E49F43] focus-within:shadow-[0_0_18px_rgba(228,159,67,0.18)]'>
                            <span className='flex h-12 w-12 items-center justify-center border-r border-[#5f3c16] text-[#E49F43]'>
                                <Mail size={18} />
                            </span>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                placeholder='Enter your email'
                                className='min-w-0 flex-1 bg-transparent px-4 py-3 text-base text-amber-50 outline-none placeholder:text-amber-50/55'
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='password' className='mb-2 block font-heading text-md tracking-wide text-amber-100'>
                            Password
                        </label>
                        <div className='flex items-center overflow-hidden rounded-md border border-[#5f3c16] bg-[#050607] transition-all duration-300 focus-within:border-[#E49F43] focus-within:shadow-[0_0_18px_rgba(228,159,67,0.18)]'>
                            <span className='flex h-12 w-12 shrink-0 items-center justify-center border-r border-[#5f3c16] text-[#E49F43]'>
                                <LockKeyhole size={18} />
                            </span>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                placeholder='Create your password'
                                className='min-w-0 flex-1 bg-transparent px-4 py-3 text-base text-amber-50 outline-none placeholder:text-amber-50/55'
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='password' className='mb-2 block font-heading text-md tracking-wide text-amber-100 mt-1'>
                            Admin key
                        </label>
                        <div className='flex items-center overflow-hidden rounded-md border border-[#5f3c16] bg-[#050607] transition-all duration-300 focus-within:border-[#E49F43] focus-within:shadow-[0_0_18px_rgba(228,159,67,0.18)]'>
                            <span className='flex h-12 w-12 shrink-0 items-center justify-center border-r border-[#5f3c16] text-[#E49F43]'>
                                <LockKeyhole size={18} />
                            </span>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                placeholder='Enter admin key (Not required)'
                                className='min-w-0 flex-1 bg-transparent px-4 py-3 text-base text-amber-50 outline-none placeholder:text-amber-50/55'
                            />
                        </div>
                    </div>

                    <button type='submit' className='flex w-full items-center justify-center gap-3 rounded-lg border-2 border-[#372916] bg-[#2A090F] px-6 py-3 text-amber-50 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:border-[#9b6724]'>
                        <WandSparkles className='text-[#E49F43]' size={20} />
                        Register
                    </button>
                </form>

                <h5 className='mx-auto flex w-fit flex-wrap items-center justify-center gap-2 text-center font-heading text-sm tracking-wider text-[#E49F43] sm:text-base md:gap-3'>
                    <span className='h-[1px] w-8 bg-gradient-to-r from-transparent via-[#E49F43] to-[#E49F43] sm:w-12 md:w-28'></span>
                    or
                    <span className='h-[1px] w-8 bg-gradient-to-l from-transparent via-[#E49F43] to-[#E49F43] sm:w-12 md:w-28'></span>
                </h5>

                <p className='text-center'>Do you have account? you can <Link to='/login' className='text-[#E49F43] hover:text-[#bb7b28] transition-all ease-in-out duration-300 '>login here</Link></p>
            </div>
        </div>
    </>
  )
}

export default Register