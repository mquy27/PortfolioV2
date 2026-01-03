import React from "react";
import Draggable from "./Draggable";
import CuttingMat from "./CuttingMat";
import { HtmlIcon, CssIcon, ReactIcon, JsIcon, TailwindIcon, FigmaIcon, CSharpIcon, FirebaseIcon, GithubIcon, VsIcon } from './TechIcons';

const TechStack = () => {
    // Common interaction classes
    const containerClasses = "group relative flex flex-col items-center justify-center p-4 transition-transform cursor-grab active:cursor-grabbing hover:scale-110 duration-300 ease-spring";
    const iconContainerClasses = "w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-all duration-300";

    // Note Tooltip Styles - Paper look
    const noteClasses = "absolute -right-30 translate-x-1/2 mb-4 w-64 bg-[#fdf6e3] text-gray-800 p-6 rounded-sm shadow-[2px_2px_15px_rgba(0,0,0,0.15)] opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible origin-bottom rotate-1 z-50 pointer-events-none";
    const noteTextClasses = "font-gochi";

    return (
        <section id="tech-stack" className="w-full min-h-screen px-8 lg:px-24 py-12 relative overflow-hidden flex items-center justify-center">
            <div className="w-full">
                <CuttingMat className="relative inset-0 max-w-full h-[800px] md:h-[700px] overflow-hidden">
                    <div className="text-center text-xl md:text-3xl font-bold font-gochi text-amber-100 mt-4 pointer-events-none select-none mb-8">
                        What I've learned throughout the years ;)
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 px-4 md:px-12 h-full pb-20 overflow-visible">

                        {/* HTML */}
                        <Draggable className="z-20 hover:z-50">
                            <div className={containerClasses}>
                                <div className={`${iconContainerClasses} group-hover:drop-shadow-[0_0_15px_rgba(228,79,38,0.6)]`}>
                                    <HtmlIcon className="w-full h-full" />
                                </div>
                                <div className={`${noteClasses} rotate-[-2deg]`}>
                                    <h3 className={`${noteTextClasses} text-xl font-bold text-[#e44f26] mb-2`}>HTML5</h3>
                                    <p className={`${noteTextClasses} text-lg leading-tight mb-3`}>
                                        The skeleton of the web. Semantic structure is my priority.
                                    </p>
                                    <div className={`${noteTextClasses} text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-1 mb-1`}>Notable Usage</div>
                                    <ul className={`${noteTextClasses} text-base list-disc pl-4`}>
                                        <li>Accessible Forms</li>
                                        <li>SEO Best Practices</li>
                                    </ul>
                                </div>
                            </div>
                        </Draggable>

                        {/* CSS */}
                        <Draggable className="z-20 hover:z-50">
                            <div className={containerClasses}>
                                <div className={`${iconContainerClasses} group-hover:drop-shadow-[0_0_15px_rgba(21,114,182,0.6)]`}>
                                    <CssIcon className="w-full h-full" />
                                </div>
                                <div className={`${noteClasses} rotate-[1deg]`}>
                                    <h3 className={`${noteTextClasses} text-xl font-bold text-[#1572b6] mb-2`}>CSS3</h3>
                                    <p className={`${noteTextClasses} text-lg leading-tight mb-3`}>
                                        Animating the dull and styling the chaos.
                                    </p>
                                    <div className={`${noteTextClasses} text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-1 mb-1`}>Notable Usage</div>
                                    <ul className={`${noteTextClasses} text-base list-disc pl-4`}>
                                        <li>Responsive Layouts</li>
                                        <li>Keyframe Animations</li>
                                    </ul>
                                </div>
                            </div>
                        </Draggable>

                        {/* JavaScript */}
                        <Draggable className="z-20 hover:z-50">
                            <div className={containerClasses}>
                                <div className={`${iconContainerClasses} group-hover:drop-shadow-[0_0_15px_rgba(247,223,30,0.6)]`}>
                                    <JsIcon className="w-full h-full" />
                                </div>
                                <div className={`${noteClasses} rotate-[-1deg]`}>
                                    <h3 className={`${noteTextClasses} text-xl font-bold text-[#f0db4f] shadow-black drop-shadow-sm mb-2`}>JavaScript</h3>
                                    <p className={`${noteTextClasses} text-lg leading-tight mb-3`}>
                                        The logic engine. From DOM manipulation to complex algos.
                                    </p>
                                    <div className={`${noteTextClasses} text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-1 mb-1`}>Notable Usage</div>
                                    <ul className={`${noteTextClasses} text-base list-disc pl-4`}>
                                        <li>Dynamic Content</li>
                                        <li>Async Operations</li>
                                    </ul>
                                </div>
                            </div>
                        </Draggable>

                        {/* React */}
                        <Draggable className="z-20 hover:z-50">
                            <div className={containerClasses}>
                                <div className={`${iconContainerClasses} group-hover:drop-shadow-[0_0_15px_rgba(97,218,251,0.6)]`}>
                                    <ReactIcon className="w-full h-full" />
                                </div>
                                <div className={`${noteClasses} rotate-[2deg]`}>
                                    <h3 className={`${noteTextClasses} text-xl font-bold text-[#61dafb] mb-2`}>React</h3>
                                    <p className={`${noteTextClasses} text-lg leading-tight mb-3`}>
                                        Component-based architecture makes my heart sing.
                                    </p>
                                    <div className={`${noteTextClasses} text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-1 mb-1`}>Notable Usage</div>
                                    <ul className={`${noteTextClasses} text-base list-disc pl-4`}>
                                        <li>Custom Hooks</li>
                                        <li>State Management</li>
                                    </ul>
                                </div>
                            </div>
                        </Draggable>

                        {/* Tailwind */}
                        <Draggable className="z-20 hover:z-50">
                            <div className={containerClasses}>
                                <div className={`${iconContainerClasses} group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]`}>
                                    <TailwindIcon className="w-full h-full" />
                                </div>
                                <div className={`${noteClasses} rotate-[-3deg]`}>
                                    <h3 className={`${noteTextClasses} text-xl font-bold text-[#06b6d4] mb-2`}>Tailwind CSS</h3>
                                    <p className={`${noteTextClasses} text-lg leading-tight mb-3`}>
                                        Rapid UI development without leaving my HTML.
                                    </p>
                                    <div className={`${noteTextClasses} text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-1 mb-1`}>Notable Usage</div>
                                    <ul className={`${noteTextClasses} text-base list-disc pl-4`}>
                                        <li>Dark Mode</li>
                                        <li>Design Systems</li>
                                    </ul>
                                </div>
                            </div>
                        </Draggable>

                        {/* Figma */}
                        <Draggable className="z-20 hover:z-50">
                            <div className={containerClasses}>
                                <div className={`${iconContainerClasses} group-hover:drop-shadow-[0_0_15px_rgba(242,78,30,0.6)]`}>
                                    <FigmaIcon className="w-full h-full" />
                                </div>
                                <div className={`${noteClasses} rotate-[1deg]`}>
                                    <h3 className={`${noteTextClasses} text-xl font-bold text-[#f24e1e] mb-2`}>Figma</h3>
                                    <p className={`${noteTextClasses} text-lg leading-tight mb-3`}>
                                        Visualizing ideas before writing a single line of code.
                                    </p>
                                    <div className={`${noteTextClasses} text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-1 mb-1`}>Notable Usage</div>
                                    <ul className={`${noteTextClasses} text-base list-disc pl-4`}>
                                        <li>Wireframing</li>
                                        <li>High-fi Prototypes</li>
                                    </ul>
                                </div>
                            </div>
                        </Draggable>

                        {/* C# */}
                        <Draggable className="z-20 hover:z-50">
                            <div className={containerClasses}>
                                <div className={`${iconContainerClasses} group-hover:drop-shadow-[0_0_15px_rgba(81,43,212,0.6)]`}>
                                    <CSharpIcon className="w-full h-full" />
                                </div>
                                <div className={`${noteClasses} rotate-[-2deg]`}>
                                    <h3 className={`${noteTextClasses} text-xl font-bold text-[#512bd4] mb-2`}>C#</h3>
                                    <p className={`${noteTextClasses} text-lg leading-tight mb-3`}>
                                        Robust object-oriented programming for heavy lifting.
                                    </p>
                                    <div className={`${noteTextClasses} text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-1 mb-1`}>Notable Usage</div>
                                    <ul className={`${noteTextClasses} text-base list-disc pl-4`}>
                                        <li>Backend APIs</li>
                                        <li>Game Scripting</li>
                                    </ul>
                                </div>
                            </div>
                        </Draggable>

                        {/* Firebase */}
                        <Draggable className="z-20 hover:z-50">
                            <div className={containerClasses}>
                                <div className={`${iconContainerClasses} group-hover:drop-shadow-[0_0_15px_rgba(255,202,40,0.6)]`}>
                                    <FirebaseIcon className="w-full h-full" />
                                </div>
                                <div className={`${noteClasses} rotate-[3deg]`}>
                                    <h3 className={`${noteTextClasses} text-xl font-bold text-[#ffca28] mb-2`}>Firebase</h3>
                                    <p className={`${noteTextClasses} text-lg leading-tight mb-3`}>
                                        Serverless solutions for instant syncing.
                                    </p>
                                    <div className={`${noteTextClasses} text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-1 mb-1`}>Notable Usage</div>
                                    <ul className={`${noteTextClasses} text-base list-disc pl-4`}>
                                        <li>Auth Systems</li>
                                        <li>Realtime DB</li>
                                    </ul>
                                </div>
                            </div>
                        </Draggable>

                        {/* GitHub */}
                        <Draggable className="z-20 hover:z-50">
                            <div className={containerClasses}>
                                <div className={`${iconContainerClasses} group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]`}>
                                    <GithubIcon className="w-full h-full" />
                                </div>
                                <div className={`${noteClasses} rotate-[-1deg] bg-gray-100`}>
                                    <h3 className={`${noteTextClasses} text-xl font-bold text-[#333] mb-2`}>GitHub</h3>
                                    <p className={`${noteTextClasses} text-lg leading-tight mb-3`}>
                                        Version control is a developer's time machine.
                                    </p>
                                    <div className={`${noteTextClasses} text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-1 mb-1`}>Notable Usage</div>
                                    <ul className={`${noteTextClasses} text-base list-disc pl-4`}>
                                        <li>CI/CD Workflows</li>
                                        <li>Collaboration</li>
                                    </ul>
                                </div>
                            </div>
                        </Draggable>

                        {/* Visual Studio */}
                        <Draggable className="z-20 hover:z-50">
                            <div className={containerClasses}>
                                <div className={`${iconContainerClasses} group-hover:drop-shadow-[0_0_15px_rgba(92,45,145,0.6)]`}>
                                    <VsIcon className="w-full h-full" />
                                </div>
                                <div className={`${noteClasses} rotate-[2deg]`}>
                                    <h3 className={`${noteTextClasses} text-xl font-bold text-[#5c2d91] mb-2`}>Visual Studio</h3>
                                    <p className={`${noteTextClasses} text-lg leading-tight mb-3`}>
                                        The ultimate medical kit for code surgery.
                                    </p>
                                    <div className={`${noteTextClasses} text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-1 mb-1`}>Notable Usage</div>
                                    <ul className={`${noteTextClasses} text-base list-disc pl-4`}>
                                        <li>Note: Not VS Code</li>
                                        <li>.NET Development</li>
                                    </ul>
                                </div>
                            </div>
                        </Draggable>

                    </div>

                </CuttingMat>
            </div>
        </section>
    );
};

export default TechStack;