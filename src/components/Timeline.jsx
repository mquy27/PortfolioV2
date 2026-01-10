import React from 'react';
import springImg from '../assets/images/loxo.avif'
import uniImg from '../assets/images/hutech.jpg'
import studyBook from '../assets/images/study-book.webp'
import selfStudy from '../assets/images/self-study.JPEG'

const Timeline = () => {
    return (
        <section id="timeline" className="min-h-screen max-w-[1200px] mx-auto relative p-3 mb-10">
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
                                    stroke="#000"
                                    strokeWidth="0.5"
                                    strokeDasharray="5,5"
                                    className="opacity-60"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M 98,98 L 88,85 M 98,98 L 105,88"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="0.5"
                                    className="opacity-60"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        {/* 2nd timeline */}
                        <div className="flex-row flex-nowrap items-center gap-5 w-full min-h-min p-0 flex relative overflow-visible">
                            <div style={{ display: 'contents' }}>
                                <div className="flex flex-row flex-nowrap items-center gap-2 min-h-min p-0 relative overflow-visible mt-10 md:mt-50 left-0 md:left-auto md:-right-100">
                                    <div className='flex flex-col items-start justify-start ml-10 order-2 md:order-1'>
                                        <h2 className='text-2xl md:text-3xl font-serif text-black leading-none'>Self-study era</h2>
                                        <p className='text-base md:text-xl font-gochi text-[#e35342]'>2025 - Present</p>
                                        <ul className="flex flex-col items-start justify-start italic">
                                            <li className='text-sm md:text-lg font-serif text-black'>Goal: Bridging the gap between Theory & Practice.</li>
                                            <li className='text-sm md:text-lg font-serif text-black'>Stack: React, Tailwind, Firebase, Figma.</li>
                                            <li className='text-sm md:text-lg font-serif text-black'>Activity: Building clones & personal projects.</li>
                                        </ul>
                                    </div>
                                    <div className='w-50 h-50 pointer-events-none p-2 bg-white rounded-md shadow-sm transform transition-transform hover:scale-105 duration-300 -rotate-3 order-1 md:order-2'>
                                        <img src={selfStudy} alt="hutech university" className='w-full h-full object-cover rounded-sm' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Connecting Line SVG */}
                        <div className="absolute top-[660px] left-[150px] w-[calc(100%-300px)] h-[250px] z-0 hidden md:block pointer-events-none">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                {/* Main dashed line with a more natural, hand-drawn curve - Flipped for Right to Left */}
                                <path
                                    d="M 98,2 C 70,60 40,10 2,98"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="0.5"
                                    strokeDasharray="5,5"
                                    className="opacity-60"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M 2,98 L 12,85 M 2,98 L -5,88"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="0.5"
                                    className="opacity-60"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>


                        {/* 3rd timeline */}
                        <div className="flex-row flex-nowrap items-center gap-5 w-full min-h-min p-0 flex relative overflow-visible">
                            <div style={{ display: 'contents' }}>
                                <div className="flex-row flex-nowrap items-center gap-2 min-h-min p-0 md:mt-50 flex relative top-0 left-10 overflow-visible mt-10">
                                    <div className='w-50 h-50 pointer-events-none p-2 bg-white rounded-md shadow-sm transform transition-transform hover:scale-105 duration-300 rotate-3'>
                                        <img src={uniImg} alt="hutech university" className='w-full h-full object-cover rounded-sm' />
                                    </div>
                                    <div className='flex flex-col items-start justify-start ml-10'>
                                        <h2 className='text-2xl md:text-3xl font-serif text-black leading-none'>Freelance Journey</h2>
                                        <p className='text-base md:text-xl font-gochi text-[#e35342]'>2026</p>
                                        <ul className="flex flex-col items-start justify-start italic">
                                            <li className='text-sm md:text-lg font-serif text-black'>Project: Modern Website for a Local Coffee Shop.</li>
                                            <li className='text-sm md:text-lg font-serif text-black'>Role: Frontend Developer & UI Designer.</li>
                                            <li className='text-sm md:text-lg font-serif text-black'>Tech Stack: React, Tailwind CSS, Figma.</li>
                                            <li className='text-sm md:text-lg font-serif text-black'>Outcome: Delivered a fully responsive site that boosted customer engagement.</li>
                                            <li className='text-sm md:text-lg font-serif text-black'>Lesson: "Communication is as important as coding."</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Face Doodle SVG */}
                        <div className="absolute top-[400px] left-[5%] w-24 h-24 z-20 opacity-80 pointer-events-none hidden md:block -rotate-12">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320.171 320.171" className="w-full h-full">
                                <g>
                                    <path fill="#010002" d="M271.768,62.158C237.42,29.165,177.857,44.781,136.64,51.781
                                        C94.405,56.806,34.276,62.817,13.962,106.427c-16.573,35.571-16.763,84.681-9.013,122.254c3.209,15.539,11.4,33.717,25.351,42.485
                                        c23.007,14.452,41.582,5.14,59.15-12.749c8.822-8.985,16.116-19.33,24.911-28.332c8.512-8.719,24.568-6.152,35.62-7.734
                                        c14.685-2.105,29.197-5.205,43.964-6.804c18.047-1.953,25.917,6.092,36.812,18.895c16.926,19.891,60.2,41.326,79.557,12.76
                                        c17.644-26.031,7.468-66.563,1.148-94.645C304.418,121.303,295.547,84.992,271.768,62.158z M289.515,229.007
                                        c-7.321,23.584-58.595-36.192-68.549-38.715c-14.985-3.791-29.741-1.817-44.829,0.315c-19.635,2.779-39.809,4.623-59.242,8.333
                                        c-26.233,5.009-59.014,74.336-79.856,39.401c-16.905-28.359-9.959-74.678-3.198-105.017c10.242-45.96,66.329-49.952,105.463-54.668
                                        c0.549-0.065,1.028-0.228,1.545-0.337c0.68-0.027,1.354-0.022,2.072-0.141c34.337-5.765,84.871-20.554,113.502,6.946
                                        c16.801,16.138,22.322,48.342,27.712,70.039C289.815,178.005,296.706,205.81,289.515,229.007z"/>
                                    <path fill="#010002" d="M74.651,120.117c-1.343-0.038-2.458,0.283-3.389,0.794c-14.142,4.329-23.105,18.21-20.75,33.059
                                        c2.475,15.648,17.965,25.602,33.309,21.794c12.999-3.225,20.146-17.971,19.722-30.388
                                        C102.988,129.331,89.565,120.52,74.651,120.117z M82.102,161.862c-7.011,4.253-15.8-1.61-17.905-8.501
                                        c-2.681-8.8,3.182-17.073,11.362-19.575c7.256,0.424,13.657,3.563,14.386,11.596C90.516,151.723,87.612,158.522,82.102,161.862z"/>
                                    <path fill="#010002" d="M227.108,98.644c-1.343-0.038-2.458,0.283-3.389,0.794c-14.142,4.324-23.105,18.21-20.75,33.059
                                        c2.475,15.648,17.965,25.602,33.309,21.794c12.999-3.225,20.146-17.971,19.722-30.388
                                        C255.445,107.857,242.021,99.046,227.108,98.644z M234.559,140.388c-7.011,4.253-15.8-1.61-17.905-8.501
                                        c-2.681-8.8,3.182-17.073,11.362-19.575c7.256,0.424,13.657,3.563,14.386,11.596C242.973,130.25,240.063,137.043,234.559,140.388z"/>
                                </g>
                            </svg>
                        </div>

                        {/* Decorative Spring/Scribble SVG */}
                        <div className="absolute top-[880px] right-[50px] w-20 h-20 z-20 opacity-80 pointer-events-none hidden md:block rotate-12">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.255 286.255" className="w-full h-full text-indigo-400">
                                <g>
                                    <path fill="#010002" d="M170.233,271.774c32.248,15.811,85.431,27.853,102.695-15.278
                                        c22.512-56.251-25.243-107.797-65.552-139.528c-31.693-24.954-90.37-91.344-134.78-59.248
                                        c-50.594,36.556,0.984,86.204,32.178,111.827c21.588,17.731,44.622,33.635,66.275,51.28c12.64,10.307,25.498,16.758,41.685,14.033
                                        c11.373-1.92,23.094-13.157,23.034-25.139c-0.098-20.679-17.296-33.657-32.401-45.041c-14.016-10.563-27.543,13.065-13.723,23.48
                                        c0.587,0.446,25.667,17.443,15.86,20.473c-6.848,2.116-19.863-10.753-24.666-14.522c-21.017-16.508-42.675-32.161-63.327-49.131
                                        c-12.189-10.013-41.794-31.242-39.02-49.822c6.239-41.832,54.94-2.35,68.978,8.936c36.393,29.278,81.635,55.353,98.822,100.846
                                        c9.856,26.086,5.461,55.163-27.402,54.505c-15.349-0.31-31.519-9.257-44.736-16.089c-34.631-17.9-65.796-42.843-93.122-70.458
                                        c-26.037-26.314-51.687-58.998-44.91-97.832c14.887-85.295,112.692-38.47,158.739-10.046c14.968,9.241,28.615-14.294,13.723-23.48
                                        C146.307,3.09,39.386-36.637,11.391,61.255C-14.907,153.213,99.797,237.236,170.233,271.774z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline