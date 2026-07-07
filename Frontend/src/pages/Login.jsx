import React from 'react'
import { LockKeyhole, Mail, Star, WandSparkles, ShieldUser } from 'lucide-react'
import { Link } from 'react-router-dom'
import bg_login from "../assets/images/bg_login_page.png"

const Login = () => {
  return (
    <>
        <div className='relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#02030448] px-2 text-amber-50 font-body sm:justify-end sm:px-8 md:px-35'>
            <img src={bg_login} className='absolute inset-0 -z-10 h-full w-full object-cover' />

            <div className='w-full max-w-md space-y-5 rounded-lg border border-[#5f3c16] bg-black/55 p-6 shadow-[0_0_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-[#9b6724] hover:shadow-[0_-8px_28px_rgba(228,159,67,0.16)]'>
                <div className='text-center'>
                    <h5 className='mx-auto flex w-fit flex-wrap items-center justify-center gap-2 text-center font-heading text-sm tracking-wider text-[#E49F43] sm:text-base md:gap-3'>
                        <span className='h-[1px] w-8 bg-gradient-to-r from-transparent via-[#E49F43] to-[#E49F43] sm:w-12 md:w-20'></span>
                        <Star size={12} />
                        Welcome Back
                        <Star size={12} />
                        <span className='h-[1px] w-8 bg-gradient-to-l from-transparent via-[#E49F43] to-[#E49F43] sm:w-12 md:w-20'></span>
                    </h5>

                    <h3 className='font-heading text-3xl text-amber-100 mt-4'>Login To SpellShelf</h3>
                    <p className='mt-4  '>
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
                                placeholder='Enter your password'
                                className='min-w-0 flex-1 bg-transparent px-4 py-3 text-base text-amber-50 outline-none placeholder:text-amber-50/55'
                                required
                            />
                        </div>
                    </div>

                    <button type='submit' className='flex w-full items-center justify-center gap-3 rounded-lg border-2 border-[#372916] bg-[#2A090F] px-6 py-3 text-amber-50 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:border-[#9b6724]'>
                        <WandSparkles className='text-[#E49F43]' size={20} />
                        Login
                    </button>

                    <h5 className='mx-auto flex w-fit flex-wrap items-center justify-center gap-2 text-center font-heading text-sm tracking-wider text-[#E49F43] sm:text-base md:gap-3'>
                        <span className='h-[1px] w-8 bg-gradient-to-r from-transparent via-[#E49F43] to-[#E49F43] sm:w-12 md:w-20'></span>
                        or
                        <span className='h-[1px] w-8 bg-gradient-to-l from-transparent via-[#E49F43] to-[#E49F43] sm:w-12 md:w-20'></span>
                    </h5>

                    <button type='submit' className='flex w-full items-center justify-center gap-3 rounded-lg border-2 border-[#372916] px-6 py-3 text-amber-50 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:border-[#9b6724]'>
                        <ShieldUser className='text-[#E49F43]' size={20} />
                        Admin Login
                    </button>

                </form>

                <p className='text-center'>Don't have account? you can <Link to='/register' className='text-[#E49F43] hover:text-[#bb7b28] transition-all ease-in-out duration-300 '    >register here</Link></p>
            </div>
        </div>
    </>
  )
}

export default Login
