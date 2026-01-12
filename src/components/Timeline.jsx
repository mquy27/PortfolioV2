import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import springImg from '../assets/images/loxo.avif'
import uniImg from '../assets/images/hutech.jpg'
import selfStudy from '../assets/images/self-study.JPEG'

const ParallaxSvg = ({ children, className, offset = 50, ...props }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const y = useTransform(smoothProgress, [0, 1], [offset, -offset]);

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ y, willChange: "transform" }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

const Timeline = () => {
    return (
        <section id="timeline" className="min-h-screen max-w-[1200px] mx-auto relative p-3 mb-20">
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
                    <div className="md:p-8 p-4 flex flex-col flex-nowrap items-start gap-5 relative overflow-visible w-full">
                        <div className="flex-row flex-nowrap items-center gap-5 w-full min-h-min p-0 flex relative overflow-visible">
                            <div style={{ display: 'contents' }}>
                                <div className="flex flex-col md:flex-row flex-nowrap items-center md:gap-2 min-h-min p-0 relative top-0 md:left-10 left-0 overflow-visible mt-10">
                                    <div className='w-50 h-50 pointer-events-none p-2 bg-white rounded-md shadow-sm transform transition-transform hover:scale-105 duration-300 rotate-3'>
                                        <img src={uniImg} alt="hutech university" className='w-full h-full object-cover rounded-sm' />
                                    </div>
                                    <div className='flex flex-col items-start justify-start mt-5 md:mt-0 md:ml-10 ml-0'>
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
                                <div className="flex flex-col md:flex-row flex-nowrap items-center gap-2 min-h-min p-0 relative overflow-visible mt-10 md:mt-50 left-0 md:left-auto md:-right-100">
                                    <div className='flex flex-col items-start justify-start mt-5 md:mt-0 md:ml-10 ml-0 order-2 md:order-1'>
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
                                <div className="flex flex-col md:flex-row flex-nowrap items-center md:gap-2 min-h-min p-0 md:mt-50 relative top-0 md:left-10 overflow-visible mt-10">
                                    <div className='md:w-50 md:h-50 w-40 h-40 pointer-events-none p-2 bg-white rounded-md shadow-sm transform transition-transform hover:scale-105 duration-300 rotate-3'>
                                        <img src={uniImg} alt="hutech university" className='w-full h-full object-cover rounded-sm' />
                                    </div>
                                    <div className='flex flex-col items-start justify-start mt-5 md:mt-0 md:ml-10 ml-0'>
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

                        <ParallaxSvg className="absolute top-[400px] left-[5%] w-24 h-24 z-20 opacity-80 pointer-events-none hidden md:block -rotate-12" offset={60}>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320.171 320.171" className="md:w-12 md:h-12 text-[#e35342] fill-current">
                                <g>
                                    <path fill="currentColor" d="M271.768,62.158C237.42,29.165,177.857,44.781,136.64,51.781
                                        C94.405,56.806,34.276,62.817,13.962,106.427c-16.573,35.571-16.763,84.681-9.013,122.254c3.209,15.539,11.4,33.717,25.351,42.485
                                        c23.007,14.452,41.582,5.14,59.15-12.749c8.822-8.985,16.116-19.33,24.911-28.332c8.512-8.719,24.568-6.152,35.62-7.734
                                        c14.685-2.105,29.197-5.205,43.964-6.804c18.047-1.953,25.917,6.092,36.812,18.895c16.926,19.891,60.2,41.326,79.557,12.76
                                        c17.644-26.031,7.468-66.563,1.148-94.645C304.418,121.303,295.547,84.992,271.768,62.158z M289.515,229.007
                                        c-7.321,23.584-58.595-36.192-68.549-38.715c-14.985-3.791-29.741-1.817-44.829,0.315c-19.635,2.779-39.809,4.623-59.242,8.333
                                        c-26.233,5.009-59.014,74.336-79.856,39.401c-16.905-28.359-9.959-74.678-3.198-105.017c10.242-45.96,66.329-49.952,105.463-54.668
                                        c0.549-0.065,1.028-0.228,1.545-0.337c0.68-0.027,1.354-0.022,2.072-0.141c34.337-5.765,84.871-20.554,113.502,6.946
                                        c16.801,16.138,22.322,48.342,27.712,70.039C289.815,178.005,296.706,205.81,289.515,229.007z"/>
                                    <path fill="currentColor" d="M74.651,120.117c-1.343-0.038-2.458,0.283-3.389,0.794c-14.142,4.329-23.105,18.21-20.75,33.059
                                        c2.475,15.648,17.965,25.602,33.309,21.794c12.999-3.225,20.146-17.971,19.722-30.388
                                        C102.988,129.331,89.565,120.52,74.651,120.117z M82.102,161.862c-7.011,4.253-15.8-1.61-17.905-8.501
                                        c-2.681-8.8,3.182-17.073,11.362-19.575c7.256,0.424,13.657,3.563,14.386,11.596C90.516,151.723,87.612,158.522,82.102,161.862z"/>
                                    <path fill="currentColor" d="M227.108,98.644c-1.343-0.038-2.458,0.283-3.389,0.794c-14.142,4.324-23.105,18.21-20.75,33.059
                                        c2.475,15.648,17.965,25.602,33.309,21.794c12.999-3.225,20.146-17.971,19.722-30.388
                                        C255.445,107.857,242.021,99.046,227.108,98.644z M234.559,140.388c-7.011,4.253-15.8-1.61-17.905-8.501
                                        c-2.681-8.8,3.182-17.073,11.362-19.575c7.256,0.424,13.657,3.563,14.386,11.596C242.973,130.25,240.063,137.043,234.559,140.388z"/>
                                </g>
                            </svg>
                        </ParallaxSvg>

                        <ParallaxSvg className="absolute top-[880px] right-[50px] w-20 h-20 z-20 opacity-80 pointer-events-none hidden md:block rotate-12" offset={-40}>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.255 286.255" className="w-8 h-8 md:w-12 md:h-12 text-indigo-500 fill-current">
                                <g>
                                    <path fill="currentColor" d="M170.233,271.774c32.248,15.811,85.431,27.853,102.695-15.278
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
                        </ParallaxSvg>

                        <ParallaxSvg className="absolute top-[5%] left-[20%] w-12 h-12 z-20 opacity-80 pointer-events-none hidden md:block" offset={-30}>
                            <svg
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 md:w-12 md:h-12 text-indigo-500 fill-current"
                            >
                                <path d="M100,40 Q105,85 150,90 Q110,100 105,150 Q90,110 40,100 Q85,90 100,40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                                <path d="M100,40 Q105,85 150,90 Q110,100 105,150 Q90,110 40,100 Q85,90 100,40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" transform="translate(40, -40) scale(0.5)" />
                            </svg>
                        </ParallaxSvg>

                        <ParallaxSvg className="absolute top-[15%] right-[5%] w-16 h-16 z-20 opacity-80 pointer-events-none hidden md:block" offset={30}>
                            <svg
                                viewBox="0 -15.89 87.181 87.181"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10 md:w-16 md:h-16 text-indigo-500 fill-current"
                            >
                                <g transform="translate(-355.391 -272.962)">
                                    <g>
                                        <circle cx="4.92" cy="4.92" r="4.92" transform="translate(355.391 287.812) rotate(-45)" />
                                    </g>
                                    <g>
                                        <path d="M442.279,287.352c-2.261-7.09-15.761-6.48-21.731-5.85a27.744,27.744,0,0,0-47.44,15.14c-5.24,2.94-16.6,10.25-14.34,17.34,1.62,5.08,8.98,6.2,15.22,6.2a59.677,59.677,0,0,0,6.51-.37,27.7,27.7,0,0,0,47.42-15.11C433.148,301.772,444.539,294.442,442.279,287.352Zm-78.271,24.96c-.529-1.64,3.5-5.62,8.93-9.14a27.892,27.892,0,0,0,3.64,11.42C370.118,314.882,364.539,313.962,364.008,312.312Zm43.26,9.5a22.166,22.166,0,0,1-19.63-3.05,136.488,136.488,0,0,0,33.82-10.77A22.169,22.169,0,0,1,407.268,321.812Zm-4.01-12.58a134.339,134.339,0,0,1-20.5,4.76,22.284,22.284,0,0,1-3.38-6.58,22.183,22.183,0,0,1,14.4-27.89,22.173,22.173,0,0,1,23.45,6.5,2.336,2.336,0,0,1,.24.29l.039.04a22.31,22.31,0,0,1,5.2,14.91A136.28,136.28,0,0,1,403.258,309.232Zm24.85-11.07a26.83,26.83,0,0,0-1.19-5.91,27.3,27.3,0,0,0-2.439-5.51c6.449-.28,12.029.63,12.56,2.28S433.548,294.642,428.108,298.162Z" />
                                    </g>
                                    <path d="M400.4,283.954" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.5" />
                                    <path d="M416.111,299.381a2.751,2.751,0,0,1-2.59-1.825,15.278,15.278,0,0,0-4.807-6.7,2.75,2.75,0,0,1,3.463-4.274A20.791,20.791,0,0,1,418.7,295.7a2.752,2.752,0,0,1-2.59,3.677Z" />
                                    <path d="M402.912,287.813a2.765,2.765,0,0,1-.6-.066,15.41,15.41,0,0,0-1.972-.307,2.75,2.75,0,1,1,.494-5.478,20.862,20.862,0,0,1,2.676.417,2.75,2.75,0,0,1-.6,5.434Z" />
                                </g>
                            </svg>
                        </ParallaxSvg>

                        <ParallaxSvg className="absolute top-[45%] right-[10%] w-18 h-18 z-20 opacity-80 pointer-events-none hidden md:block" offset={-20}>
                            <svg
                                viewBox="0 0 96.433 96.433"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10 md:w-18 md:h-18 text-[#e35342] fill-current"
                            >
                                <g>
                                    <path d="M24.82,48.678c5.422,0,9.832-6.644,9.832-14.811c0-8.165-4.41-14.809-9.832-14.809s-9.833,6.644-9.833,14.809 C14.987,42.034,19.399,48.678,24.82,48.678z" />
                                    <path d="M71.606,48.678c5.422,0,9.833-6.644,9.833-14.811c0-8.165-4.411-14.809-9.833-14.809c-5.421,0-9.831,6.644-9.831,14.809 C61.775,42.034,66.186,48.678,71.606,48.678z" />
                                    <path d="M95.855,55.806c-0.6-0.605-1.516-0.77-2.285-0.4C81.232,61.29,65.125,64.53,48.214,64.53 c-16.907,0-33.015-3.24-45.354-9.123c-0.77-0.367-1.688-0.205-2.284,0.4c-0.599,0.606-0.747,1.526-0.369,2.29 c5.606,11.351,25.349,19.277,48.008,19.277c22.668,0,42.412-7.929,48.012-19.279C96.603,57.332,96.453,56.411,95.855,55.806z" />
                                </g>
                            </svg>
                        </ParallaxSvg>

                        <ParallaxSvg className="absolute top-[75%] left-[8%] w-14 h-14 z-20 opacity-80 pointer-events-none hidden md:block rotate-12" offset={50}>
                            <svg
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10 md:w-14 md:h-14 text-indigo-500 fill-current"
                            >
                                <path d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z" />
                            </svg>
                        </ParallaxSvg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline