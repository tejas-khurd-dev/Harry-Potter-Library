import React from 'react'
import { Sparkles, WandSparkles, PencilSparkles, BookOpen, Users, Wand, BadgeIndianRupee, Star } from 'lucide-react'
import Header from '../components/Header'
import bg_main from '../assets/images/landing_page_main.png'
import bg from "../assets/images/bg_landing_page.png"
import book_icon from "../assets/images/book_icon.png"
import members_icon from "../assets/images/members_icon.png"
import issued_and_return_icon from "../assets/images/issued_and_return_icon.png"
import analysis_icon from "../assets/images/analysis_icon.png"


const Landing = () => {
  return (
    <>
        <div className='overflow-hidden'>
            <section className='relative bg-[#020204] h-screen overflow-hidden '>
                <img src={bg_main} className='h-screen absolute right-0 z-10 object-cover'/>
                <Header />

                <div className='mt-28 z-20 relative ml-15'>
                    <h5 className='flex items-center gap-2 font-heading text-xl text-[#E49F43]'>
                        <Sparkles size={12} />
                        <span className='h-[1px] w-32 bg-gradient-to-r from-transparent via-[#E49F43] to-[#E49F43]'></span>
                        Welcome to SpellShelf 
                        <span className='h-[1px] w-32 bg-gradient-to-l from-transparent via-[#E49F43] to-[#E49F43]'></span>
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
                        <button className='px-12 py-4 border-2 border-[#372916] rounded-lg text-[#E49F43] flex justify-between items-center gap-4 bg-[#2A090F] hover:-translate-y-1 hover:scale-102 hover:border-[#9b6724] transition-all ease-in-out duration-300'>
                            <WandSparkles/> 
                            <span className='text-2xl text-amber-50'>Get Started</span>
                        </button>

                        <button className='px-7 py-4 border-2  border-[#372916] rounded-lg text-[#E49F43] flex justify-between items-center gap-4 hover:-translate-y-1 hover:scale-102 hover:border-[#9b6724] transition-all ease-in-out duration-300'>
                            <PencilSparkles/> 
                            <span className='text-2xl text-amber-50'>Explore Features</span>
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


            <section className='bg-[#020304] text-amber-50 w-screen pt-15 font-body'>
                <img src={bg} className='h-screen w-screen   absolute z-10 object-cover'/>

                <div className='relative z-10'>
                    
                    <h3 className='text-[#E49F43] flex items-center gap-3 text-heading tracking-wider font-heading mx-auto w-fit'>
                        <span className='h-[1px] w-32 bg-gradient-to-r from-transparent via-[#E49F43] to-[#E49F43]'></span>
                        <Star size={12} />
                        Why Choose SpellShelf
                        <Star size={12} />
                        <span className='h-[1px] w-32 bg-gradient-to-l from-transparent via-[#E49F43] to-[#E49F43]'></span>
                    </h3>

                    <h5 className='text-4xl font-heading tracking-tight mt-4 text-amber-100 mx-auto w-fit'>Powerful Feature for Magical Management</h5>

                    <div className='w-fit mx-auto flex flex-wrap gap-6 mt-10 items-center justify-center'>

                        <div className='w-80 h-75 border-[1.8px] border-[#7c5420] rounded-lg flex flex-col items-center justify-center gap-2  bg-black/60'>
                            <img src={book_icon} className='w-20 rounded-full mx-auto'/>

                            <h5 className='mx-auto mt-3 text-center text-3xl'>Book Management</h5>

                            <p className='mx-auto text-center text-xl mt-2'>Add, update organize 
                            <span className='block'>books in your library</span> 
                            with ease.
                            </p>

                            <p className='mx-auto text-center mt-3 h-[1px] w-38 bg-gradient-to-r from-transparent via-[#E49F43] to-transparent'></p>
                        </div>

                         <div className='w-80 h-75 border-[1.8px] border-[#7c5420] rounded-lg flex flex-col items-center justify-center gap-2  bg-black/60'>
                            <img src={members_icon} className='w-20 rounded-full mx-auto'/>

                            <h5 className='mx-auto mt-3 text-center text-3xl'>Member Management</h5>

                            <p className='mx-auto text-center text-xl mt-2'>Manage member records, 
                            <span className='block'>track activity and build</span> 
                            strong connections.
                            </p>

                            <p className='mx-auto text-center mt-3 h-[1px] w-38 bg-gradient-to-r from-transparent via-[#E49F43] to-transparent'></p>
                        </div>

                        <div className='w-80 h-75 border-[1.8px] border-[#7c5420] rounded-lg flex flex-col items-center justify-center gap-2  bg-black/60'>
                            <img src={issued_and_return_icon} className='w-20 rounded-full mx-auto'/>

                            <h5 className='mx-auto mt-3 text-center text-3xl'>Issue and Return</h5>

                            <p className='mx-auto text-center text-xl mt-2'>issue books to members
                            <span className='block'>and track return</span> 
                            seamlessly.
                            </p>

                            <p className='mx-auto text-center mt-3 h-[1px] w-38 bg-gradient-to-r from-transparent via-[#E49F43] to-transparent'></p>
                        </div>

                        <div className='w-80 h-75 border-[1.8px] border-[#7c5420] rounded-lg flex flex-col items-center justify-center gap-2  bg-black/60'>
                            <img src={analysis_icon} className='w-20 rounded-full mx-auto'/>

                            <h5 className='mx-auto mt-3 text-center text-3xl'>Reports and Analysis</h5>

                            <p className='mx-auto text-center text-xl mt-2'>Get insightful reports and 
                            <span className='block'>analytics to make better</span> 
                            decisions.
                            </p>

                            <p className='mx-auto text-center mt-3 h-[1px] w-38 bg-gradient-to-r from-transparent via-[#E49F43] to-transparent'></p>
                        </div>
                    </div>


                     <div className='flex-col justify-around gap-10 font-body mt-30 mr-10'>
                        <p className='text-8xl text-center'>
                            <span className='text-9xl text-[#E49F43] font-bold'>"</span>
                            When it doubt,
                            <span className='block ml-40'>go to library <span className='text-9xl text-[#E49F43] font-bold'>"</span> </span>
                            &nbsp;
                        </p>

                        <div className='text-3xl text-center flex absolute bottom-0 right-80'> 
                            <p className='text-center mt-4 h-[1px] w-38 bg-gradient-to-r from-[#fcfcfc] via-[#E49F43] to-transparent'></p> 
                            <p className='text-[#da2a4ad0]'>Hermione Granger</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Landing
