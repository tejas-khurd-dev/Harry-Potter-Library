import React from 'react'
import { Sparkles, WandSparkles, PencilSparkles, BookOpen, Users, Wand, BadgeIndianRupee, Star } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
            <section className='relative min-h-screen bg-[#020204] overflow-hidden pb-12 md:pb-0'>
                <img src={bg_main} className='absolute inset-y-0 right-0 z-10 h-full w-full object-cover opacity-35 sm:opacity-45 md:h-screen md:w-auto md:opacity-100'/>
                <Header />

                <div className='relative z-20 mx-auto w-full max-w-[92rem] px-5 pt-30 md:ml-15 md:mt-28 md:px-0 md:pt-0'>
                    <h5 className='flex flex-wrap items-center justify-center gap-2 text-center font-heading text-base text-[#E49F43] sm:text-lg md:justify-start md:text-xl'>
                        <Sparkles size={12} />
                        <span className='h-[1px] w-4 md:w-12 bg-gradient-to-r from-transparent via-[#E49F43] to-[#E49F43] sm:w-24 md:w-32'></span>
                        Welcome to SpellShelf 
                        <span className='h-[1px] w-4 md:w-12 bg-gradient-to-l from-transparent via-[#E49F43] to-[#E49F43] sm:w-24 md:w-32'></span>
                        <Sparkles size={12} /> 
                    </h5>

                    <h1 className='mt-6 text-center font-heading text-4xl leading-tight tracking-tighter text-[#F5E8D0] sm:text-5xl md:text-left md:text-6xl'>
                        Manage Your Library 
                        <span className='block text-[#E49F43]'>Like Magic</span>
                    </h1>

                    <p className='font-body mx-auto mt-6 max-w-xl text-center text-xl leading-7 tracking-wider text-[#F5E8D0] md:mx-0 md:mt-10 md:text-left md:text-2xl md:leading-8'>
                        A powerful and intuitive Library Management System 
                        <span className='md:block'>to manage books,
                        members, and transactions </span> 
                        <span className='md:block'>efficiently and effortlessly.</span>
                    </p>


                    <div className='font-body mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:mt-18 md:justify-start md:gap-6'>
                        <button className='flex w-full items-center justify-center gap-3 rounded-lg border-2 border-[#372916] bg-[#2A090F] px-6 py-4 text-[#E49F43] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:border-[#9b6724] sm:w-auto md:gap-4 md:px-12'>
                            <WandSparkles/> 
                            <span className='text-xl text-amber-50 md:text-2xl'>Get Started</span>
                        </button>

                        <button className='flex w-full items-center justify-center gap-3 rounded-lg border-2 border-[#372916] px-6 py-4 text-[#E49F43] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:border-[#9b6724] sm:w-auto md:gap-4 md:px-7'>
                            <PencilSparkles/> 
                            <span className='text-xl text-amber-50 md:text-2xl'>Explore Features</span>
                        </button>
                    </div>
                    
                    <div className='font-body mt-10 flex w-full max-w-xl flex-wrap justify-center gap-5 rounded-lg border-2 border-[#472f0f] px-5 py-6 text-[#E49F43] transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(228,159,67,0.35)] md:mt-12 md:w-fit md:max-w-none md:justify-start md:gap-15 md:px-12 md:py-8'>
                        <div className='flex min-w-32 items-center gap-3'>
                            <BookOpen className='size-8 md:size-10'/>
                            <p className='text-2xl text-amber-50 md:text-4xl'>
                                10,000+
                                <span className='block'>Books</span>
                            </p>
                        </div>

                        <div className='flex min-w-32 items-center gap-3'>
                            <Users className='size-8 md:size-10'/>
                            <p className='text-2xl text-amber-50 md:text-4xl'>
                                10,000+
                                <span className='block'>Books</span>
                            </p>
                        </div>

                        <div className='flex min-w-32 items-center gap-3'>
                            <Wand className='size-8 md:size-10' />
                            <p className='text-2xl text-amber-50 md:text-4xl'>
                                10,000+
                                <span className='block'>Books</span>
                            </p>
                        </div>

                        <div className='flex min-w-32 items-center gap-3'>
                            <BadgeIndianRupee className='size-8 md:size-10'/>
                            <p className='text-2xl text-amber-50 md:text-4xl'>
                                10,000+
                                <span className='block'>Books</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className='relative w-full bg-[#020304] py-12 text-amber-50 font-body md:py-15'>
                <img src={bg} className='absolute inset-0 z-10 h-full w-full object-cover'/>

                <div className='relative z-10 px-5'>
                    
                    <h3 className='mx-auto flex w-fit flex-wrap items-center justify-center gap-2 text-center font-heading text-sm tracking-wider text-[#E49F43] sm:text-base md:gap-3'>
                        <span className='h-[1px] w-12 bg-gradient-to-r from-transparent via-[#E49F43] to-[#E49F43] sm:w-24 md:w-32'></span>
                        <Star size={12} />
                        Why Choose SpellShelf
                        <Star size={12} />
                        <span className='h-[1px] w-12 bg-gradient-to-l from-transparent via-[#E49F43] to-[#E49F43] sm:w-24 md:w-32'></span>
                    </h3>

                    <h5 className='mx-auto mt-4 w-fit max-w-3xl text-center font-heading text-3xl tracking-tight text-amber-100 md:text-4xl'>Powerful Feature for Magical Management</h5>

                    <div className='mx-auto mt-10 flex w-full  flex-wrap items-center justify-center gap-6'>

                        <div className='flex h-70 w-full max-w-80 flex-col items-center justify-center gap-2 rounded-lg border-[1.8px] border-[#7c5420] bg-black/60 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:border-[#9b6724] hover:shadow-[0_-8px_28px_rgba(228,159,67,0.16)] md:h-75 md:w-80'>
                            <img src={book_icon} className='mx-auto w-18 rounded-full md:w-20'/>

                            <h5 className='mx-auto mt-3 text-center text-2xl md:text-3xl'>Book Management</h5>

                            <p className='mx-auto mt-2 text-center text-lg md:text-xl'>Add, update organize 
                            <span className='block'>books in your library</span> 
                            with ease.
                            </p>

                            <p className='mx-auto text-center mt-3 h-[1px] w-38 bg-gradient-to-r from-transparent via-[#E49F43] to-transparent'></p>
                        </div>

                         <div className='flex h-70 w-full max-w-80 flex-col items-center justify-center gap-2 rounded-lg border-[1.8px] border-[#7c5420] bg-black/60 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:border-[#9b6724] hover:shadow-[0_-8px_28px_rgba(228,159,67,0.16)] md:h-75 md:w-80'>
                            <img src={members_icon} className='mx-auto w-18 rounded-full md:w-20'/>

                            <h5 className='mx-auto mt-3 text-center text-2xl md:text-3xl'>Member Management</h5>

                            <p className='mx-auto mt-2 text-center text-lg md:text-xl'>Manage member records, 
                            <span className='block'>track activity and build</span> 
                            strong connections.
                            </p>

                            <p className='mx-auto text-center mt-3 h-[1px] w-38 bg-gradient-to-r from-transparent via-[#E49F43] to-transparent'></p>
                        </div>

                        <div className='flex h-70 w-full max-w-80 flex-col items-center justify-center gap-2 rounded-lg border-[1.8px] border-[#7c5420] bg-black/60 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:border-[#9b6724] hover:shadow-[0_-8px_28px_rgba(228,159,67,0.16)] md:h-75 md:w-80'>
                            <img src={issued_and_return_icon} className='mx-auto w-18 rounded-full md:w-20'/>

                            <h5 className='mx-auto mt-3 text-center text-2xl md:text-3xl'>Issue and Return</h5>

                            <p className='mx-auto mt-2 text-center text-lg md:text-xl'>issue books to members
                            <span className='block'>and track return</span> 
                            seamlessly.
                            </p>

                            <p className='mx-auto text-center mt-3 h-[1px] w-38 bg-gradient-to-r from-transparent via-[#E49F43] to-transparent'></p>
                        </div>

                        <div className='flex h-70 w-full max-w-80 flex-col items-center justify-center gap-2 rounded-lg border-[1.8px] border-[#7c5420] bg-black/60 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:border-[#9b6724] hover:shadow-[0_-8px_28px_rgba(228,159,67,0.16)] md:h-75 md:w-80'>
                            <img src={analysis_icon} className='mx-auto w-18 rounded-full md:w-20'/>

                            <h5 className='mx-auto mt-3 text-center text-2xl md:text-3xl'>Reports and Analysis</h5>

                            <p className='mx-auto mt-2 text-center text-lg md:text-xl'>Get insightful reports and 
                            <span className='block'>analytics to make better</span> 
                            decisions.
                            </p>

                            <p className='mx-auto text-center mt-3 h-[1px] w-38 bg-gradient-to-r from-transparent via-[#E49F43] to-transparent'></p>
                        </div>
                    </div>


                     <div className='mt-16 flex-col justify-around gap-10 font-body md:mr-10 md:mt-25'>
                        <p className='text-center text-4xl sm:text-5xl md:text-8xl'>
                            <span className='text-5xl font-bold text-[#E49F43] sm:text-6xl md:text-9xl'>"</span>
                            When it doubt,
                            <span className='block md:ml-40'>go to library <span className='text-5xl font-bold text-[#E49F43] sm:text-6xl md:text-9xl'>"</span> </span>
                            &nbsp;
                        </p>

                        <div className='mx-auto flex w-fit text-center text-2xl md:absolute md:bottom-0 md:right-80 md:text-3xl'> 
                            <p className='mt-4 h-[1px] w-20 bg-gradient-to-r from-[#fcfcfc] via-[#E49F43] to-transparent text-center md:w-38'></p> 
                            <p className='text-[#da2a4ad0]'>Hermione Granger</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    </>
  )
}

export default Landing
