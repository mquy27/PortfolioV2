import React from "react";
import flow1 from '../assets/images/flow-1.png';
import flow2 from '../assets/images/flow-2.png';
import flow3 from '../assets/images/flow-3.png';
import flow4 from '../assets/images/flow-4.png';
import flow5 from '../assets/images/flow-5.png';
import port1_1 from '../assets/images/port1.1.png';
import port1_2 from '../assets/images/port1.2.png';
import port1_3 from '../assets/images/port1.3.png';
import Draggable from "./Draggable";
import CuttingMat from "./CuttingMat";


const Project = () => {
    return (
        <section id="projects" className="w-full min-h-screen px-8 lg:px-24 py-20 relative">
            <Draggable className="absolute top-10 left-4 md:top-20 md:left-20 z-0 hidden lg:block">
                <svg className="w-16 h-16 text-indigo-400" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path d="M30,0a7.957,7.957,0,0,0-2.584.436.523.523,0,0,0-.1.037A7.978,7.978,0,1,0,30,0ZM23,8a7,7,0,0,1,4.473-6.52l1.344,1.106A.5.5,0,0,1,29,2.972V4.356a1.485,1.485,0,0,0-1.244-.135L26.025,4.8A1.5,1.5,0,0,0,25,6.221v.5a1.5,1.5,0,0,0,1.137,1.455L28,8.641a.5.5,0,0,1,.3.762l-1.045,1.568A1.493,1.493,0,0,0,27,11.8v2.512A7,7,0,0,1,23,8Zm4.961,6.695A.5.5,0,0,0,28,14.5V11.8a.5.5,0,0,1,.084-.278l1.045-1.567a1.5,1.5,0,0,0-.885-2.287L26.379,7.2A.5.5,0,0,1,26,6.719v-.5a.5.5,0,0,1,.342-.475l1.73-.576a.5.5,0,0,1,.512.121l.562.563A.5.5,0,0,0,30,5.5V2.972a1.5,1.5,0,0,0-.547-1.158l-.823-.677A6.978,6.978,0,0,1,35.84,4.15l-2.7.676A1.5,1.5,0,0,0,32,6.281v.6a1.491,1.491,0,0,0,.829,1.342l.73.364a.5.5,0,0,1,.261.569l-.667,2.672a1.5,1.5,0,0,0,.394,1.425l.47.47a6.963,6.963,0,0,1-6.056.971Zm6.833-1.608-.54-.54a.5.5,0,0,1-.131-.475L34.791,9.4a1.492,1.492,0,0,0-.785-1.705l-.73-.365A.5.5,0,0,1,33,6.882v-.6a.5.5,0,0,1,.379-.486l2.962-.74a6.948,6.948,0,0,1-1.547,8.032Z" transform="translate(-22)" />
                </svg>
            </Draggable>

            <Draggable className="absolute bottom-10 right-10 z-0 hidden lg:block">
                <svg className="w-24 h-24 text-[#e35342]" width="800px" height="800px" viewBox="0 -2 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g id="wave" transform="translate(-2 -4)">
                        <path id="primary" d="M21,11c-2.25,0-2.25,2-4.5,2s-2.25-2-4.5-2-2.25,2-4.5,2S5.25,11,3,11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path id="primary-2" data-name="primary" d="M3,5C5.25,5,5.25,7,7.5,7S9.75,5,12,5s2.26,2,4.51,2S18.75,5,21,5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path id="primary-3" data-name="primary" d="M21,17c-2.25,0-2.25,2-4.5,2s-2.25-2-4.5-2-2.25,2-4.5,2S5.25,17,3,17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                </svg>
            </Draggable>

            <Draggable className="absolute top-310 left-40 hidden lg:block rotate-6 z-10">
                <svg className="w-16 h-16 text-indigo-400" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path d="M0 15h16v1h-16v-1z"></path>
                    <path d="M0 0h1v16h-1v-16z"></path>
                    <path d="M9 8l-2.9-3-4.1 4v5h14v-13.1z"></path>
                </svg>
            </Draggable>
            <h1 className="text-amber-100 text-4xl md:text-5xl font-gochi font-bold text-center mb-16">My Projects</h1>

            {/* Project 1 */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <div className="flex flex-col gap-6 order-2 md:order-1">
                    <h2 className="text-3xl md:text-5xl font-bold font-gochi text-[#e35342]">Portfolio V1</h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-gochi">
                        A personal portfolio website designed to showcase my skills and projects.
                        It features a unique, playful design with interactive elements like draggable stickers and parallax scrolling.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {["React", "Tailwind CSS", "Framer Motion", "Firebase"].map((tech, index) => (
                            <span key={index} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-amber-100 font-gochi text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-2">
                        <a href="https://portfolio-v1.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#e35342] text-white font-bold font-gochi rounded-lg hover:-translate-y-2 transition-all duration-200">Live Demo</a>
                        <a href="https://github.com/your-username/portfolio-v1" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#e35342] text-white font-bold font-gochi rounded-lg hover:-translate-y-2 transition-all duration-200">Source Code</a>
                    </div>
                </div>

                <div className="relative order-1 md:order-2 group h-[350px] md:h-auto">
                    {/* pic1 */}
                    <Draggable>
                        <div className="absolute -top-4 left-2 md:-top-50 md:left-10 w-[300px] h-[200px] md:w-[350px] md:h-[200px] bg-white p-3 -rotate-4 hover:-rotate-6 transition-all duration-200 shadow-2xl rounded-lg z-10">
                            <div className="absolute -inset-4 border-4 border-dashed border-indigo-400/80 rounded-2xl pointer-events-none" />
                            <div className="w-full h-[90%] lg:h-[82%] overflow-hidden rounded-lg">
                                <img src={port1_1} alt="Portfolio Project" className="w-full h-full object-contain rounded pointer-events-none" />
                            </div>
                            <p className="text-xs md:text-base xl:text-xl font-bold font-gochi text-indigo-500 text-center mt-1 lg:mt-2 uppercase block">Portfolio V1</p>
                        </div>
                    </Draggable>
                    {/* pic2 */}
                    <Draggable>
                        <div className="absolute top-16 left-8 md:-top-20 md:left-80 w-[300px] h-[200px] md:w-[350px] md:h-[200px] bg-white p-3 rotate-6 hover:rotate-12 transition-all duration-200 shadow-2xl rounded-lg z-20">
                            <div className="absolute -inset-4 border-4 border-dashed border-[#e35342]/80 rounded-2xl pointer-events-none" />
                            <div className="w-full h-[90%] lg:h-[82%] overflow-hidden rounded-lg">
                                <img src={port1_2} alt="Portfolio Project" className="w-full h-full object-contain rounded pointer-events-none" />
                            </div>
                            <p className="text-xs md:text-base xl:text-xl font-bold font-gochi text-[#e35342] text-center mt-1 lg:mt-2 uppercase block">Portfolio V1</p>
                        </div>
                    </Draggable>
                    {/* pic3 */}
                    <Draggable>
                        <div className="absolute top-40 left-2 md:top-20 md:left-10 w-[300px] h-[200px] md:w-[350px] md:h-[200px] bg-white p-3 -rotate-4 hover:rotate-2 transition-all duration-200 shadow-2xl rounded-lg z-30">
                            <div className="absolute -inset-4 border-4 border-dashed border-amber-100/80 rounded-2xl pointer-events-none" />
                            <div className="w-full h-[90%] lg:h-[82%] overflow-hidden rounded-lg">
                                <img src={port1_3} alt="Portfolio Project" className="w-full h-full object-contain rounded pointer-events-none" />
                            </div>
                            <p className="text-xs md:text-base xl:text-xl font-bold font-gochi text-indigo-500 text-center mt-1 lg:mt-2 uppercase block">Portfolio V1</p>
                        </div>
                    </Draggable>
                </div>
            </div>

            {/* Project 2 */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 pt-32">
                <div className="flex flex-col gap-6 order-2 md:order-2">
                    <h2 className="text-3xl md:text-5xl font-bold font-gochi text-indigo-500">Flow Project Management</h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-gochi">
                        A comprehensive project management tool inspired by Jira, designed to streamline Agile and Scrum workflows.
                        It empowers teams to plan Sprints, manage Backlogs, and track progress through interactive Kanban boards with drag-and-drop functionality.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {["HTML", "JavaScript", "Tailwind CSS", "C#", "SQL", "Entity FrameWork", ". Net"].map((tech, index) => (
                            <span key={index} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-amber-100 font-gochi text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-2">
                        <a href="https://portfolio-v1.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-indigo-500 text-white font-bold font-gochi rounded-lg hover:-translate-y-2 transition-all duration-200">Live Demo</a>
                        <a href="https://github.com/your-username/portfolio-v1" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-indigo-500 text-white font-bold font-gochi rounded-lg hover:-translate-y-2 transition-all duration-200">Source Code</a>
                    </div>
                </div>

                <CuttingMat className="relative order-1 md:order-1 group h-[400px] md:h-[600px] w-full">
                    {/* pic1 */}
                    <Draggable className="absolute top-10 left-4 md:top-10 md:left-10 z-10">
                        <div className="w-[240px] h-[160px] md:w-[280px] md:h-[190px] bg-white p-2 -rotate-6 hover:-rotate-12 transition-all duration-200 shadow-2xl rounded-lg">
                            <div className="w-full h-[85%] overflow-hidden rounded">
                                <img src={flow1} alt="Portfolio Project" className="w-full h-full object-contain pointer-events-none" />
                            </div>
                            <p className="text-sm font-bold font-gochi text-indigo-500 text-center uppercase block mt-1">Flow Board</p>
                        </div>
                    </Draggable>
                    {/* pic2 */}
                    <Draggable className="absolute top-20 right-4 md:top-20 md:right-5 z-20">
                        <div className="w-[240px] h-[160px] md:w-[280px] md:h-[190px] bg-white p-2 rotate-3 hover:rotate-6 transition-all duration-200 shadow-2xl rounded-lg">
                            <div className="w-full h-[85%] overflow-hidden rounded">
                                <img src={flow2} alt="Portfolio Project" className="w-full h-full object-contain pointer-events-none" />
                            </div>
                            <p className="text-sm font-bold font-gochi text-[#e35342] text-center uppercase block mt-1">Backlog</p>
                        </div>
                    </Draggable>
                    {/* pic3 */}
                    <Draggable className="absolute bottom-10 left-8 md:bottom-30 md:left-10 z-30">
                        <div className="w-[240px] h-[160px] md:w-[280px] md:h-[190px] bg-white p-2 rotate-6 hover:rotate-12 transition-all duration-200 shadow-2xl rounded-lg">
                            <div className="w-full h-[85%] overflow-hidden rounded">
                                <img src={flow3} alt="Portfolio Project" className="w-full h-full object-contain pointer-events-none" />
                            </div>
                            <p className="text-sm font-bold font-gochi text-indigo-500 text-center uppercase block mt-1">Timeline</p>
                        </div>
                    </Draggable>
                    {/* pic4 */}
                    {/* pic4 */}
                    <Draggable className="hidden md:block absolute bottom-40 right-10 md:bottom-20 md:right-15 z-20">
                        <div className="w-[240px] h-[160px] md:w-[280px] md:h-[190px] bg-white p-2 -rotate-6 hover:rotate-12 transition-all duration-200 shadow-2xl rounded-lg">
                            <div className="w-full h-[85%] overflow-hidden rounded">
                                <img src={flow4} alt="Portfolio Project" className="w-full h-full object-contain pointer-events-none" />
                            </div>
                            <p className="text-sm font-bold font-gochi text-indigo-500 text-center uppercase block mt-1">Analytics</p>
                        </div>
                    </Draggable>
                </CuttingMat>
            </div>

            <div className="hidden md:block">
                <CuttingMat className="relative inset-0 w-full h-[800px] md:h-[700px] group">
                    <div className="text-center text-xl md:text-2xl font-bold font-gochi text-amber-100 mt-2">Vision board</div>
                    <Draggable className="hidden md:block absolute bottom-40 right-10 md:bottom-20 md:right-15 z-20">
                        <div className="w-[240px] h-[160px] md:w-[280px] md:h-[190px] bg-white p-2 -rotate-6 hover:rotate-12 transition-all duration-200 shadow-2xl rounded-lg">
                            <div className="absolute -inset-4 border-4 border-dashed border-[#e35342]/80 rounded-2xl pointer-events-none" />
                            <div className="w-full h-[85%] overflow-hidden rounded">
                                <img src={flow4} alt="Portfolio Project" className="w-full h-full object-contain pointer-events-none" />
                            </div>
                            <p className="text-sm font-bold font-gochi text-[#e35342] text-center uppercase block mt-1">Analytics</p>
                        </div>
                    </Draggable>

                    <Draggable className="absolute bottom-10 left-8 md:bottom-30 md:left-10 z-30">
                        <div className="w-[240px] h-[160px] md:w-[280px] md:h-[190px] bg-white p-2 rotate-6 hover:rotate-12 transition-all duration-200 shadow-2xl rounded-lg">
                            <div className="absolute -inset-4 border-4 border-dashed border-amber-100/80 rounded-2xl pointer-events-none" />
                            <div className="w-full h-[85%] overflow-hidden rounded">
                                <img src={flow3} alt="Portfolio Project" className="w-full h-full object-contain pointer-events-none" />
                            </div>
                            <p className="text-sm font-bold font-gochi text-black text-center uppercase block mt-1">Timeline</p>
                        </div>
                    </Draggable>

                    <Draggable className="absolute top-20 right-4 md:top-20 md:right-5 z-20">
                        <div className="w-[240px] h-[160px] md:w-[280px] md:h-[190px] bg-white p-2 rotate-3 hover:rotate-6 transition-all duration-200 shadow-2xl rounded-lg">
                            <div className="absolute -inset-4 border-4 border-dashed border-indigo-400/80 rounded-2xl pointer-events-none" />
                            <div className="w-full h-[85%] overflow-hidden rounded">
                                <img src={flow2} alt="Portfolio Project" className="w-full h-full object-contain pointer-events-none" />
                            </div>
                            <p className="text-sm font-bold font-gochi text-indigo-500 text-center uppercase block mt-1">Backlog</p>
                        </div>
                    </Draggable>

                    <Draggable className="absolute top-10 left-4 md:top-10 md:left-10 z-10">
                        <div className="w-[240px] h-[160px] md:w-[280px] md:h-[190px] bg-white p-2 -rotate-6 hover:-rotate-12 transition-all duration-200 shadow-2xl rounded-lg">
                            <div className="absolute -inset-4 border-4 border-dashed border-indigo-400/80 rounded-2xl pointer-events-none" />
                            <div className="w-full h-[85%] overflow-hidden rounded">
                                <img src={flow1} alt="Portfolio Project" className="w-full h-full object-contain pointer-events-none" />
                            </div>
                            <p className="text-sm font-bold font-gochi text-indigo-500 text-center uppercase block mt-1">Flow Board</p>
                        </div>
                    </Draggable>

                    <Draggable>
                        <div className="absolute top-40 left-2 md:top-20 md:left-120 w-[300px] h-[200px] md:w-[350px] md:h-[200px] bg-white p-3 -rotate-4 hover:rotate-2 transition-all duration-200 shadow-2xl rounded-lg z-30">
                            <div className="absolute -inset-4 border-4 border-dashed border-amber-100/80 rounded-2xl pointer-events-none" />
                            <div className="w-full h-[90%] lg:h-[82%] overflow-hidden rounded-lg">
                                <img src={port1_3} alt="Portfolio Project" className="w-full h-full object-contain rounded pointer-events-none" />
                            </div>
                            <p className="text-xs md:text-base xl:text-xl font-bold font-gochi text-black text-center mt-1 lg:mt-2 uppercase block">Portfolio V1</p>
                        </div>
                    </Draggable>

                    <Draggable>
                        <div className="absolute -top-4 left-2 md:top-100 md:left-120 w-[300px] h-[200px] md:w-[350px] md:h-[200px] bg-white p-3 -rotate-4 hover:-rotate-6 transition-all duration-200 shadow-2xl rounded-lg z-10">
                            <div className="absolute -inset-4 border-4 border-dashed border-indigo-400/80 rounded-2xl pointer-events-none" />
                            <div className="w-full h-[90%] lg:h-[82%] overflow-hidden rounded-lg">
                                <img src={port1_1} alt="Portfolio Project" className="w-full h-full object-contain rounded pointer-events-none" />
                            </div>
                            <p className="text-xs md:text-base xl:text-xl font-bold font-gochi text-indigo-500 text-center mt-1 lg:mt-2 uppercase block">Portfolio V1</p>
                        </div>
                    </Draggable>
                </CuttingMat>
            </div>
        </section>
    );
};

export default Project;
