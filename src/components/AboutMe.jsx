import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import schoolPic from '../assets/images/hutech.jpg'
import Draggable from "./Draggable";
const AboutMe = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 100]);

    return (
        <section id="about" ref={ref} className="w-full min-h-screen relative z-0 px-8 lg:px-24 overflow-hidden py-20 -mt-[1vh] md:-mt-[30vh]">
            <div className="max-w-7xl w-full pt-[40vh] md:pt-[40vh] mx-auto grid grid-cols-1 md:grid-cols-2 relative">

                {/* Left Column: Text Content */}
                <div className="relative">
                    <motion.h1 style={{ y }} className="text-amber-100 text-4xl md:text-6xl font-gochi font-bold absolute -top-50 md:-top-30 left-2 md:left-10">About Me</motion.h1>

                    <div className="absolute -top-50 md:-top-10 left-0 md:left-10 w-full md:w-[700px] text-xl md:text-2xl font-gochi leading-relaxed space-y-4">
                        <p className="text-amber-100">
                            Maintaining a GPA of <span className="relative inline-block mx-2">
                                <span className="text-[#e35342] font-bold relative z-10">3.43/4.0</span>
                                <svg
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[145%] h-[180%] pointer-events-none text-[#e35342]"
                                    viewBox="0 0 260 90"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M215,22 C165,12 45,12 30,42 C20,72 85,82 135,79 C195,76 255,62 250,37 C245,17 205,12 175,22"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ vectorEffect: "non-scaling-stroke" }}
                                    />
                                </svg>
                            </span> , I am currently pursuing a Bachelor's degree in Software Engineering at Hutech University.
                        </p>
                        <p className="text-amber-100">
                            I have a <span className="text-indigo-500">deep passion</span> for building user-friendly websites and applications that solve real-world problems.
                        </p>
                        <p className="text-amber-100">
                            I pride myself on being a collaborative team player with good communication skills and a strong work ethic.
                            I am eager to learn, adapt to new technologies, and contribute to the team's success.
                        </p>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="relative h-[400px] md:h-auto mt-96 md:mt-0">
                    <Draggable>
                        <motion.div style={{ y }} className="absolute right-2 md:right-20 top-0 md:-top-85 cursor-grab active:cursor-grabbing">
                            <div className="hidden md:block absolute -left-38 bottom-10 -rotate-12 z-10 pointer-events-none">
                                <span className="font-gochi text-3xl text-[#e35342] font-bold text-nowrap">Drag me! ➜</span>
                            </div>
                            <div className="relative w-[300px] h-[250px] md:w-[350px] md:h-[300px] bg-white p-3 rotate-3 hover:-rotate-6 transition-all duration-200 shadow-2xl rounded-lg">
                                <div className="absolute -inset-4 border-4 border-dashed border-indigo-400/80 rounded-2xl pointer-events-none" />
                                <div className="w-full h-[90%] lg:h-[82%] overflow-hidden rounded-lg">
                                    <img src={schoolPic} alt="Hutech University" className="w-full h-full object-cover rounded pointer-events-none" />
                                </div>
                                <p className="text-xs md:text-base xl:text-xl font-bold font-gochi text-indigo-500 text-center mt-1 lg:mt-2 uppercase block">Hutech University</p>
                            </div>
                        </motion.div>
                    </Draggable>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
