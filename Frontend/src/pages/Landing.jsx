import React from 'react'
import { Sparkles, WandSparkles, PencilSparkles, BookOpen, Users, Wand, BadgeIndianRupee } from 'lucide-react'
import Header from '../components/Header'
import bg_main from '../assets/images/landing_page_main.png'

const Landing = () => {
  return (
    <>
        <div>
            <section className='relative bg-[#020304] h-screen overflow-hidden'>
                <img src={bg_main} className='h-screen absolute right-3 z-10'/>
                <Header />

                <div className='mt-28 z-20 relative ml-15'>
                    <h5 className='flex items-center gap-2 font-heading text-xl text-[#E49F43]'>
                        <Sparkles size={12} />
                        <span className='px-5 border-t '></span>
                        Welcome to SpellShelf 
                        <span className='px-5 border-t '></span>
                        <Sparkles size={12} /> 
                    </h5>

                    <h1 className='mt-6 font-heading text-6xl leading-tight tracking-tighter text-[#F5E8D0]'>
                        Manage Your Library 
                        <span className='block text-[#E49F43]'>Like Magic</span>
                    </h1>

                    <p className='font-body mt-10 text-2xl leading-8 text-[#F5E8D0] tracking-wider'>
                        A powerful and intuitive Library Management System 
                        <span className='block'>to manage books,
                        members, and transactions </span> 
                        <span className='block'>efficiently and effortlessly.</span>
                    </p>


                    <div className='font-body mt-18 flex gap-6'>
                        <button className='px-12 py-4 border-2 border-[#372916] rounded-lg text-[#E49F43] flex justify-between items-center gap-4 bg-[#2A090F] hover:-translate-y-1 hover:scale-102 hover:border-[#9b6724] transition-all ease-in-out'>
                            <WandSparkles/> <span className='text-2xl text-amber-50'>Get Started</span>
                        </button>

                        <button className='px-7 py-4 border-2  border-[#372916] rounded-lg text-[#E49F43] flex justify-between items-center gap-4 hover:-translate-y-1 hover:scale-102 hover:border-[#9b6724] transition-all ease-in-out'>
                            <PencilSparkles/> <span className='text-2xl text-amber-50'>Explore Features</span>
                        </button>
                    </div>
                    
                    <div className='w-fit font-body mt-12 px-12 py-8 flex gap-15 border-2 border-[#472f0f] text-[#E49F43] rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(228,159,67,0.35)]'>
                        <div className='flex items-center gap-3'>
                            <BookOpen size={40}/>
                            <p className='text-4xl text-amber-50'>
                                10,000+
                                <span className='block'>Books</span>
                            </p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <Users size={40}/>
                            <p className='text-4xl text-amber-50'>
                                10,000+
                                <span className='block'>Books</span>
                            </p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <Wand size={40} />
                            <p className='text-4xl text-amber-50'>
                                10,000+
                                <span className='block'>Books</span>
                            </p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <BadgeIndianRupee size={40}/>
                            <p className='text-4xl text-amber-50'>
                                10,000+
                                <span className='block'>Books</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Landing
