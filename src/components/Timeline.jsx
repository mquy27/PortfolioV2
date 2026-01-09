import React from 'react';
import springImg from '../assets/images/loxo.avif'
import uniImg from '../assets/images/hutech.jpg'
import studyBook from '../assets/images/study-book.webp'

const Timeline = () => {
    return (
        <section id="timeline" className="min-h-screen max-w-[1200px] mx-auto relative p-3">
            <h2 className="text-4xl md:text-6xl text-amber-100 text-center font-serif mb-12">Timeline</h2>
            <div className="flex flex-none flex-col flex-nowrap items-center gap-0 relative mx-auto">
                <div style={{ display: "contents" }}>
                    <div className="h-10 overflow-x-clip overflow-y-clip flex-none w-full relative">
                        <div className="absolute inset-0" style={{ backgroundImage: `url(${springImg})`, backgroundRepeat: 'repeat', backgroundPosition: 'left, top', backgroundSize: '69px' }}></div>
                    </div>
                </div>
            </div>
            <div className="relative w-full mx-auto z-0">
                <div className='absolute inset-0 w-[95%] h-full bg-[#f8f5e6] -rotate-2 translate-y-3 translate-x-2 rounded-b-md shadow-md border border-gray-200/50 mt-2'
                    style={{
                        backgroundImage: `
                        linear-gradient(to right, rgba(173, 186, 204, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(173, 186, 204, 0.4) 1px, transparent 1px)
                    `,
                        backgroundSize: '40px 40px',
                        zIndex: -20
                    }}
                ></div>

                <div className='absolute inset-0 w-full h-full bg-[#fcf9ee] rotate-1 translate-y-1.5 -translate-x-1 rounded-b-md shadow-md border border-gray-200/50 mt-3'
                    style={{
                        backgroundImage: `
                        linear-gradient(to right, rgba(173, 186, 204, 0.45) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(173, 186, 204, 0.45) 1px, transparent 1px)
                    `,
                        backgroundSize: '40px 40px',
                        zIndex: -10
                    }}
                ></div>

                <div className="relative z-10 flex bg-[#f2e3cf] min-h-min overflow-hidden rounded-b-md flex-row flex-nowrap items-start gap-5 mx-auto shadow-lg"
                    style={{
                        backgroundImage: `
                        linear-gradient(to right, rgba(173, 186, 204, 0.5) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(173, 186, 204, 0.5) 1px, transparent 1px)
                    `,
                        backgroundSize: '40px 40px'
                    }}>
                    <div className="p-8 flex flex-col flex-nowrap items-start gap-5 relative overflow-visible w-full">
                        <div className="flex-row flex-nowrap items-center gap-5 w-full min-h-min p-0 flex relative overflow-visible">
                            <div style={{ display: 'contents' }}>
                                <div className="flex-row flex-nowrap items-center gap-2 min-h-min p-0 flex relative top-0 left-10 overflow-visible mt-10">
                                    <div className='w-50 h-50 pointer-events-none p-2 bg-white rounded-md shadow-sm transform transition-transform hover:scale-105 duration-300 rotate-3'>
                                        <img src={uniImg} alt="hutech university" className='w-full h-full object-cover rounded-sm' />
                                    </div>
                                    <div className='flex flex-col items-start justify-start ml-10'>
                                        <h2 className='text-2xl md:text-3xl font-serif text-black leading-none'>Hutech University</h2>
                                        <p className='text-base md:text-xl font-gochi text-[#e35342]'>2022 - Present</p>
                                        <ul className="flex flex-col items-start justify-start italic">
                                            <li className='text-sm md:text-lg font-serif text-black'>Bachelor of Engineering in Information Technology</li>
                                            <li className='text-sm md:text-lg font-serif text-black'>GPA: 3.43/4.0</li>
                                            <li className='text-sm md:text-lg font-serif text-black'>Graduation Expected: 2026</li>
                                            <li className='text-sm md:text-lg font-serif text-black'>Recognized as an Outstanding Student in 2nd Semester of the 2nd year.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Connecting Line SVG */}
                        <div className="absolute top-[230px] left-[150px] w-[calc(100%-300px)] h-[250px] z-0 hidden md:block pointer-events-none">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                {/* Main dashed line with a more natural, hand-drawn curve */}
                                <path
                                    d="M 2,2 C 30,60 60,10 98,98"
                                    fill="none"
                                    stroke="#e35342"
                                    strokeWidth="1.5"
                                    strokeDasharray="5,5"
                                    className="opacity-60"
                                    strokeLinecap="round" // Thêm cái này cho nét vẽ mềm hơn
                                />
                                {/* Arrowhead adjusted for the new curve's end angle */}
                                <path
                                    d="M 98,98 L 88,85 M 98,98 L 105,88"
                                    fill="none"
                                    stroke="#e35342"
                                    strokeWidth="1.5"
                                    className="opacity-60"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        {/* 2nd timeline */}
                        <div className="flex-row flex-nowrap items-center gap-5 w-full min-h-min p-0 flex relative overflow-visible">
                            <div style={{ display: 'contents' }}>
                                <div className="flex flex-row flex-nowrap items-center gap-2 min-h-min p-0 relative overflow-visible mt-10 md:mt-50 left-10 md:left-auto md:-right-60">
                                    <div className='flex flex-col items-start justify-start ml-10 order-2 md:order-1'>
                                        <h2 className='text-2xl md:text-3xl font-serif text-black leading-none'>Self-study era</h2>
                                        <p className='text-base md:text-xl font-gochi text-[#e35342]'>2025 - Present</p>
                                        <ul className="flex flex-col items-start justify-start italic">
                                            <li className='text-sm md:text-lg font-serif text-black'>Learning web development</li>
                                            <li className='text-sm md:text-lg font-serif text-black'>GPA: 3.43/4.0</li>
                                            <li className='text-sm md:text-lg font-serif text-black'>Graduation Expected: 2026</li>
                                            <li className='text-sm md:text-lg font-serif text-black'>Recognized as an Outstanding Student in 2nd Semester of the 2nd year.</li>
                                        </ul>
                                    </div>
                                    <div className='w-60 h-60 pointer-events-none p-2 transform transition-transform hover:scale-105 duration-300 rotate-3 order-1 md:order-2'>
                                        <img src={studyBook} alt="hutech university" className='w-full h-full object-cover rounded-sm' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline