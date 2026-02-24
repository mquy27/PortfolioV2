import React, { useState } from "react";
import CuttingMat from "./CuttingMat";
import { HtmlIcon, CssIcon, ReactIcon, JsIcon, TailwindIcon, FigmaIcon, CSharpIcon, FirebaseIcon, GithubIcon, VsIcon } from './TechIcons';

const MobileTechStack = ({ className }) => {
    const [isLit, setIsLit] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const skills = [
        {
            id: 'html',
            icon: <HtmlIcon className="w-10 h-10 md:w-12 md:h-12" />,
            label: 'HTML5',
            color: '#e44f26',
            desc: 'The starting point of everything. I try my best to write clean code (no "div soup" here!) and use Semantic Tags. It helps my projects run smoothly and trying to keep the structure organized.',
            usage: ['Semantic Structure', 'Accessible Forms', 'SEO Best Practices', 'Meta Tags & Open Graph', 'Cross-browser Support'],

        },
        {
            id: 'css',
            icon: <CssIcon className="w-10 h-10 md:w-12 md:h-12" />,
            label: 'CSS3',
            color: '#1572b6',
            desc: 'Making things look good is my favorite part. Before I fell in love with Tailwind, I spent a lot of time understanding how Flexbox and Grid actually work.',
            usage: ['Responsive Layouts', 'Flexbox & Grid', 'Keyframe Animations', 'CSS Variables', 'Media Queries'],
        },
        {
            id: 'js',
            icon: <JsIcon className="w-10 h-10 md:w-12 md:h-12" />,
            label: 'JavaScript',
            color: '#f0db4f',
            desc: 'Self taught via roadmap and use it as my core frontend language in my final project. I have learned a lot from DOM manipulation to handling asynchronous APIs requests.',
            usage: ['ES6+ Syntax', 'Event Handling', 'DOM manipulation', 'Async/Await', 'Fetch API', 'Array Manipulation', 'Error Handling'],
        },
        {
            id: 'react',
            icon: <ReactIcon className="w-10 h-10 md:w-12 md:h-12" />,
            label: 'React',
            color: '#61dafb',
            desc: 'My favorite tool to build UIs. I\'m on a journey to master its ecosystem. From building reusable Components to understanding the magic of Hooks.',
            usage: ['React Hooks', 'State Management', 'Functional Components', 'Context API', 'React Router', 'Component Lifecycle'],
        },
        {
            id: 'tailwind',
            icon: <TailwindIcon className="w-10 h-10 md:w-12 md:h-12" />,
            label: 'Tailwind CSS',
            color: '#06b6d4',
            desc: 'My favorite library for styling without leaving the markup. No separate CSS files, no naming conflicts. Just pure utility classes.',
            usage: ['Responsive Design (Mobile First)', 'Rapid Prototyping', 'Component Reusability', 'Performance Optimization'],
        },
        {
            id: 'figma',
            icon: <FigmaIcon className="w-10 h-10 md:w-12 md:h-12" />,
            label: 'Figma',
            color: '#f24e1e',
            desc: 'I\'m not a designer, but I use Figma to visualize what\'s in my head. It makes turning ideas into real interfaces much easier.',
            usage: ['UI Sketching', 'Basic Prototyping', 'Layout Planning'],
        },
        {
            id: 'csharp',
            icon: <CSharpIcon className="w-10 h-10 md:w-12 md:h-12" />,
            label: 'C#',
            color: '#512bd4',
            desc: 'I learned this at university. It forced me to understand Object-Oriented Programming (OOP) and logic deeply, which actually made me a better developer overall.',
            usage: ['Object-Oriented Programming', 'Algorithmic Thinking', 'Data Structures'],
        },
        {
            id: 'firebase',
            icon: <FirebaseIcon className="w-10 h-10 md:w-12 md:h-12" />,
            label: 'Firebase',
            color: '#ffca28',
            desc: 'My instant backend. It handles the heavy lifting like authentication and database storage, allowing me to focus entirely on building a great frontend experience.',
            usage: ['User Authentication', 'Realtime Database', 'Cloud Storage', 'Cloud Functions', 'Hosting'],
        },
        {
            id: 'github',
            icon: <GithubIcon className="w-10 h-10 md:w-12 md:h-12" />,
            label: 'GitHub',
            color: '#fff',
            desc: 'My code\'s safety net. I use it to manage all my school projects and assignments. It makes working with teammates easier.',
            usage: ['Version Control', 'Collaboration', 'CI/CD Workflows', 'Pull Requests & Merges'],
        },
        {
            id: 'vs',
            icon: <VsIcon className="w-10 h-10 md:w-12 md:h-12" />,
            label: 'Visual Studio',
            color: '#5c2d91',
            desc: 'The ultimate medical kit for code surgery. Primarily used for .NET development.',
            usage: ['Note: Not VS Code', '.NET Development'],
        },
    ];

    return (
        <section id="tech-stack" className={`w-full py-12 px-6 md:px-24 bg-transparent ${className}`}>
            <h2 className="text-2xl md:text-4xl font-bold font-gochi text-amber-100 select-none">
                Tech Stack
            </h2>
            <CuttingMat className="relative p-6 md:p-12 pt-10 min-h-[500px] md:min-h-[600px] overflow-hidden">
                <div className="flex justify-end items-center mb-8 md:mb-12 relative z-50">
                    <div className="relative flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 font-gochi text-xl text-amber-100 transition-all duration-300 whitespace-nowrap">
                            <span>Let there be light!</span>
                            <svg className="w-8 h-8 rotate-180 text-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 20 6 Q 12 6 6 16 l 0 -5 m 0 5 l 5 2"></path>
                            </svg>
                        </div>
                        <button
                            onClick={() => setIsLit(!isLit)}
                            className={`p-3 cursor-pointer rounded-full border-2 transition-all duration-300 ${isLit ? 'bg-yellow-400 border-yellow-200 shadow-[0_0_15px_rgba(250,204,21,0.6)]' : 'bg-gray-700 border-gray-600'}`}
                        >
                            {isLit ? '☀' : '🌑'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 relative z-10">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className={`flex flex-col items-center justify-center p-4 md:p-8 rounded-xl border-2 transition-all duration-300 cursor-pointer ${selectedSkill?.id === skill.id ? 'bg-white/10 border-amber-200 shadow-lg scale-105' : 'bg-white/5 border-transparent hover:bg-white/10'}`}
                            onClick={() => setSelectedSkill(selectedSkill?.id === skill.id ? null : skill)}
                        >
                            <div
                                className="mb-3 transition-all duration-500 transform"
                                style={{
                                    color: isLit ? skill.color : '#262626',
                                    filter: (isLit && selectedSkill?.id === skill.id) ? `drop-shadow(0 0 15px ${skill.color})` : (isLit ? `drop-shadow(0 0 5px ${skill.color})` : 'none'),
                                    opacity: isLit ? 1 : 0.4
                                }}
                            >
                                {skill.icon}
                            </div>
                            <span className="font-gochi text-amber-100 text-lg md:text-xl opacity-80">{skill.label}</span>
                        </div>
                    ))}
                </div>

                <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] z-0 pointer-events-none transition-opacity duration-700 ease-in-out ${isLit ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        background: 'conic-gradient(from 225deg at 50% -50px, transparent 0deg, rgba(250, 204, 21, 0.05) 15deg, rgba(250, 204, 21, 0.3) 45deg, rgba(250, 204, 21, 0.05) 75deg, transparent 90deg)',
                        filter: 'blur(60px)',
                        mixBlendMode: 'screen',
                    }}
                />

                {selectedSkill && (
                    <div className="mt-8 md:mt-12 p-6 md:p-8 bg-[#fdf6e3] rounded-sm shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-300 relative z-10 max-w-2xl mx-auto">
                        <h3 className="font-gochi text-2xl md:text-3xl font-bold mb-3 border-b border-gray-300 pb-2" style={{ color: selectedSkill.color }}>
                            {selectedSkill.label}
                        </h3>
                        <p className="font-gochi text-gray-800 text-xl leading-relaxed">
                            {selectedSkill.desc}
                        </p>
                    </div>
                )}

                <p className="text-center font-gochi text-amber-100/60 mt-8 md:mt-12 italic text-sm md:text-lg select-none">
                    Click the icons to reveal their secrets
                </p>
            </CuttingMat>
        </section>
    );
};

export default MobileTechStack;