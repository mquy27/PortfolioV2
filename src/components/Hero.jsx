import React, { useState, useRef } from 'react';
import Draggable from './Draggable';
import RotatingText from './RotatingText';
import myPic from '../assets/images/my-pic.JPEG';

const InteractiveChar = ({ char }) => {
    const [active, setActive] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActive(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActive(false);
        }, 1500);
    };

    return (
        <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`font-serif transition-all duration-200 cursor-default select-none inline-block ${active ? "font-gochi cursor-text font-bold scale-125 tracking-widest text-indigo-500" : "text-indigo-500"
                }`}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    );
};

const Hero = () => {
    return (
        <section className="relative w-full h-screen pt-28 md:pt-18 lg:pt-44 flex justify-center items-center overflow-hidden">
            <div
                className="relative z-20 w-[95%] md:w-[90%] lg:w-[85%] h-[95%] md:h-[80%] lg:h-[85%] bg-[#fdfbf6] rounded-3xl shadow-2xl border-4 border-white/50 transform rotate-1"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(173, 186, 204, 0.5) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(173, 186, 204, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            >
                <div className="w-full h-full flex p-8 md:p-4">
                    <div className="flex flex-col gap-2 md:px-12 mt-12 md:mt-14 lg:mt-18 items-center md:items-start w-full lg:w-2/3">
                        <p className="font-gochi text-sm md:text-xl text-center md:text-left">Welcome to my portfolio, I'm a</p>

                        <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl leading-tight tracking-wider font-medium flex flex-wrap justify-center md:justify-start gap-0.5">
                            {"Frontend Developer".split("").map((char, index) => (
                                <InteractiveChar key={index} char={char} />
                            ))}
                        </div>

                        <div className='text-lg sm:text-xl md:text-3xl lg:text-4xl font-serif font-medium text-indigo-500 flex flex-col md:flex-row items-center md:items-baseline gap-1 md:gap-3 text-center md:text-left'>
                            <span>I make websites look</span>
                            <RotatingText
                                texts={['Responsive', 'Clean', 'Alive', 'Fun']}
                                mainClassName="text-indigo-500 tracking-wider text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gochi font-bold overflow-hidden justify-center md:justify-start"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={3000}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-baseline gap-1 md:gap-3 text-center md:text-left">
                            <button className="flex px-2 py-1 lg:px-3 lg:py-2 bg-indigo-500 rounded-md text-white font-mono text-base lg:text-xl font-bold items-center justify-center cursor-pointer hover:scale-110 hover:-translate-y-1 transition-all duration-200">Download CV</button>
                        </div>
                    </div>
                </div>

                {/* Planet */}
                <Draggable className="absolute top-2 left-4 md:left-8">
                    <svg
                        viewBox="0 -15.89 87.181 87.181"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 md:w-16 md:h-16 text-indigo-500 fill-current pointer-events-none"
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
                </Draggable>


                {/* Face */}
                <Draggable className="absolute bottom-10 right-32 hidden lg:block">
                    <svg
                        viewBox="0 0 96.433 96.433"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 md:w-18 md:h-18 text-indigo-500 fill-current pointer-events-none"
                    >
                        <g>
                            <path d="M24.82,48.678c5.422,0,9.832-6.644,9.832-14.811c0-8.165-4.41-14.809-9.832-14.809s-9.833,6.644-9.833,14.809 C14.987,42.034,19.399,48.678,24.82,48.678z" />
                            <path d="M71.606,48.678c5.422,0,9.833-6.644,9.833-14.811c0-8.165-4.411-14.809-9.833-14.809c-5.421,0-9.831,6.644-9.831,14.809 C61.775,42.034,66.186,48.678,71.606,48.678z" />
                            <path d="M95.855,55.806c-0.6-0.605-1.516-0.77-2.285-0.4C81.232,61.29,65.125,64.53,48.214,64.53 c-16.907,0-33.015-3.24-45.354-9.123c-0.77-0.367-1.688-0.205-2.284,0.4c-0.599,0.606-0.747,1.526-0.369,2.29 c5.606,11.351,25.349,19.277,48.008,19.277c22.668,0,42.412-7.929,48.012-19.279C96.603,57.332,96.453,56.411,95.855,55.806z" />
                        </g>
                    </svg>
                </Draggable>

                {/* Hand */}
                <Draggable className="absolute lg:top-1/2 lg:right-10 bottom-20 right-10 hidden lg:block" >
                    <svg
                        viewBox="0 0 424.427 424.427"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 md:w-14 md:h-14 text-indigo-500 fill-current pointer-events-none"
                    >
                        <path d="M366.282,285.164l-19.713-19.713c-2.251-2.251-3.805-5.08-4.494-8.181c-0.698-3.116-0.495-6.343,0.583-9.343 c1.381-3.828,2.808-9.375,4.241-16.48c2.341-11.62,1.443-23.667-2.598-34.837l-24.398-67.44 c-5.021-13.91-17.795-23.646-32.539-24.801l-15.95-1.258c-7.396-0.585-14.213-4.306-18.704-10.213 c-0.844-1.112-1.76-2.164-2.722-3.126c-11.779-11.778-30.959-11.763-42.756,0.034c-2.306,2.306-4.337,4.809-6.081,7.491 L113.718,9.864C107.356,3.503,98.898,0,89.9,0c-9,0.008-17.454,3.514-23.811,9.87C52.96,23,52.96,44.363,66.09,57.492 l75.968,75.967c-7.188,0.888-14.142,4.084-19.648,9.591c-11.384,11.385-12.898,28.96-4.54,41.991 c-7.536,0.708-14.877,3.941-20.635,9.699c-10.42,10.42-12.571,26.025-6.453,38.586c-6.523,0.618-12.847,3.334-17.833,8.167 c-5.886,5.704-9.131,13.362-9.139,21.564c0,8.026,3.124,15.567,8.8,21.242l84.079,84.079c9.275,9.276,19.812,17.173,31.318,23.475 c15.032,8.233,28.799,18.552,40.918,30.671c2.538,2.538,6.654,2.538,9.192,0l128.165-128.168 C368.82,291.818,368.82,287.702,366.282,285.164z M233.444,408.812c-11.821-11.052-24.979-20.577-39.192-28.361 c-10.423-5.708-19.969-12.864-28.371-21.266l-84.079-84.079c-3.219-3.219-4.991-7.495-4.991-12.042 c0.005-4.651,1.847-8.999,5.187-12.237c6.635-6.431,17.52-6.177,24.264,0.567c2.538,2.538,6.654,2.538,9.192,0 c2.538-2.538,2.539-6.653,0.001-9.192l-9.026-9.03c-8.062-8.062-8.063-21.179-0.001-29.241c8.061-8.061,21.179-8.061,29.24,0 c2.538,2.538,6.654,2.538,9.192,0c2.538-2.538,2.538-6.654,0-9.192l-13.257-13.257c-8.061-8.061-8.062-21.178,0-29.24 c8.035-8.035,21.092-8.062,29.16-0.08l14.142,14.142c2.538,2.538,6.654,2.538,9.192,0c2.538-2.538,2.538-6.654,0-9.192 L75.282,48.3c-8.06-8.061-8.061-21.176,0-29.237c3.904-3.904,9.098-6.057,14.624-6.063c5.52,0,10.714,2.151,14.62,6.056 l165.717,165.716c2.538,2.538,6.654,2.538,9.192,0c2.538-2.538,2.538-6.654,0-9.192l-68.8-68.8 c1.522-2.846,3.461-5.453,5.79-7.782c6.728-6.729,17.661-6.744,24.371-0.034c0.546,0.547,1.071,1.151,1.562,1.797 c6.73,8.853,16.946,14.43,28.032,15.308l15.956,1.258c9.667,0.757,18.039,7.139,21.332,16.259l24.399,67.446 c3.231,8.931,3.951,18.56,2.08,27.846c-1.288,6.39-2.578,11.454-3.728,14.644c-1.916,5.331-2.275,11.061-1.041,16.577 c1.224,5.509,3.987,10.542,7.99,14.545l15.117,15.117L233.444,408.812z" />
                    </svg>
                </Draggable>

                {/* Rocket */}
                <Draggable className="absolute bottom-10 left-10">
                    <svg
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 md:w-14 md:h-14 text-indigo-500 fill-current pointer-events-none"
                    >
                        <path d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z" />
                    </svg>
                </Draggable>

                {/* Sparkles */}
                <Draggable className="absolute top-10 right-10">
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 md:w-12 md:h-12 text-indigo-500 fill-current pointer-events-none"
                    >
                        <path d="M100,40 Q105,85 150,90 Q110,100 105,150 Q90,110 40,100 Q85,90 100,40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                        <path d="M100,40 Q105,85 150,90 Q110,100 105,150 Q90,110 40,100 Q85,90 100,40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" transform="translate(40, -40) scale(0.5)" />
                    </svg>
                </Draggable>

                {/* Sparkles */}
                <Draggable className="absolute hidden lg:flex top-2 left-150">
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 md:w-12 md:h-12 text-indigo-500 fill-current pointer-events-none"
                    >
                        <path d="M100,40 Q105,85 150,90 Q110,100 105,150 Q90,110 40,100 Q85,90 100,40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                        <path d="M100,40 Q105,85 150,90 Q110,100 105,150 Q90,110 40,100 Q85,90 100,40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" transform="translate(40, -40) scale(0.5)" />
                    </svg>
                </Draggable>

                {/* Sparkles */}
                <Draggable className="absolute hidden lg:flex bottom-5 left-60">
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 md:w-12 md:h-12 text-indigo-500 fill-current pointer-events-none"
                    >
                        <path d="M100,40 Q105,85 150,90 Q110,100 105,150 Q90,110 40,100 Q85,90 100,40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                        <path d="M100,40 Q105,85 150,90 Q110,100 105,150 Q90,110 40,100 Q85,90 100,40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" transform="translate(40, -40) scale(0.5)" />
                    </svg>
                </Draggable>
                <Draggable className="absolute bottom-15 right-22 md:bottom-14 md:right-12 lg:right-35 lg:bottom-30">
                    <div className="w-[180px] h-[240px] md:w-[180px] md:h-[240px] lg:w-[250px] lg:h-[300px] bg-white border border-gray-200 rounded-xl px-2 py-3 shadow-md rotate-3 hover:-rotate-12 transition-all duration-200">
                        <div className="w-full h-[75%] lg:h-[82%] overflow-hidden rounded-lg">
                            <img src={myPic} alt="Minh Quy" className="w-full h-full object-cover pointer-events-none" />
                        </div>
                        <p className="text-xs md:text-base xl:text-xl font-bold font-gochi text-indigo-500 text-center mt-1 lg:mt-2 uppercase block">Lê Minh Quý</p>
                        <p className="text-[10px] md:text-sm xl:text-lg font-bold font-gochi text-center block">Frontend Dev</p>
                    </div>
                </Draggable>
            </div>

        </section>
    );
};

export default Hero;
