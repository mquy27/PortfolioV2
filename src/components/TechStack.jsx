import React, { useRef, useEffect, useState } from "react";
import CuttingMat from "./CuttingMat";
import Matter from "matter-js";
import { HtmlIcon, CssIcon, ReactIcon, JsIcon, TailwindIcon, FigmaIcon, CSharpIcon, FirebaseIcon, GithubIcon, VsIcon } from './TechIcons';

const TechStack = () => {
    const [isLit, setIsLit] = useState(false);
    const sceneRef = useRef(null);
    const engineRef = useRef(null);
    const itemsRef = useRef([]);
    const fillerRefs = useRef([]);
    const [fillerItems, setFillerItems] = useState([]);

    const skills = [
        {
            id: 'html',
            icon: <HtmlIcon className="w-full h-full" />,
            label: 'HTML5',
            color: '#e44f26',
            desc: 'The skeleton of the web. Semantic structure is my priority.',
            usage: ['Accessible Forms', 'SEO Best Practices'],
            rotate: -2
        },
        {
            id: 'css',
            icon: <CssIcon className="w-full h-full" />,
            label: 'CSS3',
            color: '#1572b6',
            desc: 'Animating the dull and styling the chaos.',
            usage: ['Responsive Layouts', 'Keyframe Animations'],
            rotate: 1
        },
        {
            id: 'js',
            icon: <JsIcon className="w-full h-full" />,
            label: 'JavaScript',
            color: '#f0db4f',
            desc: 'Self taught via roadmap and use it as my core frontend language in my final project. I have learned a lot from DOM manipulation to handling asynchronous APIs requests.',
            usage: ['ES6+ Syntax', 'Event Handling', 'DOM manipulation', 'Async/Await', 'Fetch API', 'Array Manipulation', 'Error Handling'],
            rotate: -1,
            titleClass: 'shadow-black drop-shadow-sm'
        },
        {
            id: 'react',
            icon: <ReactIcon className="w-full h-full" />,
            label: 'React',
            color: '#61dafb',
            desc: 'Component-based architecture makes my heart sing.',
            usage: ['Custom Hooks', 'State Management'],
            rotate: 2
        },
        {
            id: 'tailwind',
            icon: <TailwindIcon className="w-full h-full" />,
            label: 'Tailwind CSS',
            color: '#06b6d4',
            desc: 'My favorite library for styling without leaving the markup. No separate CSS files, no naming conflicts. Just pure utility classes that make building beautiful interfaces fast and consistent.',
            usage: ['Dark Mode', 'Responsive Design (Mobile First)', 'Rapid Prototyping', 'Component Reusability', 'Performance Optimization'],
            rotate: -3
        },
        {
            id: 'figma',
            icon: <FigmaIcon className="w-full h-full" />,
            label: 'Figma',
            color: '#f24e1e',
            desc: 'I\'m not a designer, but I use Figma to visualize what\'s in my head. It makes turning ideas into real interfaces much easier.',
            usage: ['UI Sketching', 'Basic Prototyping', 'Layout Planning'],
            rotate: 1
        },
        {
            id: 'csharp',
            icon: <CSharpIcon className="w-full h-full" />,
            label: 'C#',
            color: '#512bd4',
            desc: 'Robust object-oriented programming for heavy lifting.',
            usage: ['Backend APIs', 'Game Scripting'],
            rotate: -2
        },
        {
            id: 'firebase',
            icon: <FirebaseIcon className="w-full h-full" />,
            label: 'Firebase',
            color: '#ffca28',
            desc: 'My instant backend. It handles the heavy lifting like authentication and database storage, allowing me to focus entirely on building a great frontend experience.',
            usage: ['User Authentication', 'Realtime Database', 'Cloud Storage', 'Cloud Functions', 'Hosting'],
            rotate: 3
        },
        {
            id: 'github',
            icon: <GithubIcon className="w-full h-full" />,
            label: 'GitHub',
            color: '#333',
            desc: 'My code\'s safety net.I use it to manage all my school projects and assignments.It makes working with teammates easier and ensures I never lose a version of my work.',
            usage: ['Version Control', 'Collaboration', 'CI/CD Workflows', 'Pull Requests & Merges'],
            rotate: -1
        },
        {
            id: 'vs',
            icon: <VsIcon className="w-full h-full" />,
            label: 'Visual Studio',
            color: '#5c2d91',
            desc: 'The ultimate medical kit for code surgery.',
            usage: ['Note: Not VS Code', '.NET Development'],
            rotate: 2
        },
    ];

    useEffect(() => {
        if (!sceneRef.current) return;
        const Engine = Matter.Engine,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Runner = Matter.Runner,
            Events = Matter.Events,
            Composite = Matter.Composite;

        const engine = Engine.create();
        engineRef.current = engine;
        const world = engine.world;

        engine.world.gravity.y = 1;

        const width = sceneRef.current.clientWidth;
        const height = sceneRef.current.clientHeight;

        const wallThickness = 100;
        const walls = [
            Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true }), // Bottom
            Bodies.rectangle(width / 2, -wallThickness * 4, width, wallThickness, { isStatic: true }), // Top (higher up)
            Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 4, { isStatic: true }), // Left
            Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 4, { isStatic: true }) // Right
        ];
        World.add(world, walls);

        const techBodies = skills.map((skill) => {
            const x = Math.random() * (width - 200) + 100;
            const y = height - (Math.random() * 200 + 100);
            const boxSize = 80;

            return Bodies.rectangle(x, y, boxSize, boxSize, {
                restitution: 0.2,
                friction: 0.5,
                frictionAir: 0.01,
                label: skill.id,
                angle: (Math.random() - 0.5) * Math.PI / 2
            });
        });

        const fillerCount = 30;
        const fillersData = Array.from({ length: fillerCount }).map((_, i) => ({
            id: `filler-${i}`,
            r: Math.random() * 20 + 30,
            color: Math.random() > 0.5 ? '#374151' : '#1f2937'
        }));

        setFillerItems(fillersData);

        const fillerBodies = fillersData.map((item) => {
            const x = Math.random() * (width - 200) + 100;
            const y = height - (Math.random() * 200 + 100);

            return Bodies.circle(x, y, item.r, {
                restitution: 0.5,
                friction: 0.4,
                frictionAir: 0.005,
                angle: Math.random() * Math.PI * 2,
                label: item.id
            });
        });

        World.add(world, [...techBodies, ...fillerBodies]);

        const mouse = Mouse.create(sceneRef.current);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });

        mouse.element.removeEventListener("wheel", mouse.mousewheel);
        mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

        World.add(world, mouseConstraint);

        const runner = Runner.create();
        Runner.run(runner, engine);


        const updateLoop = () => {
            techBodies.forEach((body, index) => {
                const domNode = itemsRef.current[index];
                if (domNode) {
                    const { x, y } = body.position;
                    const angle = body.angle;
                    domNode.style.transform = `translate(${x - 40}px, ${y - 40}px) rotate(${angle}rad)`;

                    const tooltipNode = tooltipsRef.current[index];
                    if (tooltipNode) {
                        tooltipNode.style.transform = `translate(${x}px, ${y - 50}px) translateX(-50%) translateY(-100%) rotate(${skills[index].rotate}deg)`;
                    }
                }
            });

            fillerBodies.forEach((body, index) => {
                const domNode = fillerRefs.current[index];
                if (domNode) {
                    const { x, y } = body.position;
                    const angle = body.angle;
                    const item = fillersData[index];
                    domNode.style.transform = `translate(${x - item.r}px, ${y - item.r}px) rotate(${angle}rad)`;
                }
            });
        };

        Events.on(engine, 'afterUpdate', updateLoop);

        return () => {
            Runner.stop(runner);
            Engine.clear(engine);
            World.clear(world);
            Events.off(engine, 'afterUpdate', updateLoop);
            engineRef.current = null;
        };
    }, []);

    const tooltipsRef = useRef([]);

    const containerClasses = "cursor-grab active:cursor-grabbing hover:scale-110 transition-transform duration-300 ease-spring w-20 h-20 flex items-center justify-center";
    const iconContainerClasses = "w-full h-full flex items-center justify-center transition-all duration-300";

    const tooltipClasses = "fixed top-0 left-0 w-64 bg-[#fdf6e3] text-gray-800 p-6 rounded-sm shadow-[2px_2px_15px_rgba(0,0,0,0.15)] transition-opacity duration-300 origin-bottom z-50 pointer-events-none select-none";
    const noteTextClasses = "font-gochi";

    return (
        <section id="tech-stack" className="w-full min-h-screen px-8 lg:px-24 py-12 relative overflow-hidden flex items-center justify-center bg-transparent">
            <div className="w-full">
                <CuttingMat className="relative inset-0 max-w-full h-[700px] md:h-[600px] overflow-hidden">
                    <h2 className="text-center text-xl md:text-4xl font-bold font-gochi text-amber-100 mt-4 pointer-events-none select-none mb-8">
                        What I've learned throughout the years ;)
                    </h2>
                    <div className="absolute top-4 right-4 z-50">
                        <button
                            onClick={() => setIsLit(!isLit)}
                            className={`p-3 cursor-pointer rounded-full border-2 transition-all duration-300 ${isLit ? 'bg-yellow-400 border-yellow-200 shadow-[0_0_20px_rgba(250,204,21,0.6)]' : 'bg-gray-700 border-gray-600'}`}
                        >
                            {isLit ? 'ON' : 'OFF'}
                        </button>
                    </div>
                    <div className="absolute top-20 right-20 z-50 pointer-events-none">
                        <p className={`${isLit ? 'text-amber-100 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]' : 'text-amber-100'} transition-all duration-300 font-gochi text-lg md:text-2xl`}>Let there be light!</p>
                    </div>

                    <div className="absolute top-40 left-20 z-50 -rotate-3">
                        <p className={`${isLit ? 'text-indigo-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]' : 'text-gray-900'} transition-all duration-300 font-gochi text-lg md:text-3xl`}>My tools. Learned by doing.</p>
                    </div>

                    <div className="absolute top-65 right-20 z-50 rotate-3">
                        <p className={`${isLit ? 'text-[#e35342] drop-shadow-[0_0_8px_rgba(227,83,66,0.8)]' : 'text-gray-900'} transition-all duration-300 font-gochi text-lg md:text-3xl`}>Hover over the icons to uncover the details.</p>
                    </div>
                    <div
                        className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[120%] z-0 pointer-events-none transition-opacity duration-700 ease-in-out ${isLit ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            background: 'conic-gradient(from 225deg at 50% -100px, transparent 0deg, rgba(250, 204, 21, 0.05) 15deg, rgba(250, 204, 21, 0.3) 45deg, rgba(250, 204, 21, 0.05) 75deg, transparent 90deg)',
                            filter: 'blur(40px)',
                            mixBlendMode: 'screen',
                        }}
                    />

                    <div ref={sceneRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto">
                        {fillerItems.map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => (fillerRefs.current[index] = el)}
                                className="absolute top-0 left-0 rounded-full pointer-events-auto cursor-grab active:cursor-grabbing transition-colors shadow-sm"
                                style={{
                                    width: item.r * 2,
                                    height: item.r * 2,
                                    backgroundColor: item.color,
                                    willChange: 'transform'
                                }}
                            />
                        ))}

                        {skills.map((skill, index) => (
                            <React.Fragment key={skill.id}>
                                <div
                                    ref={(el) => (itemsRef.current[index] = el)}
                                    className="absolute top-0 left-0 will-change-transform"
                                    onMouseEnter={() => {
                                        if (tooltipsRef.current[index]) {
                                            tooltipsRef.current[index].style.opacity = '1';
                                            tooltipsRef.current[index].style.visibility = 'visible';
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        if (tooltipsRef.current[index]) {
                                            tooltipsRef.current[index].style.opacity = '0';
                                            tooltipsRef.current[index].style.visibility = 'hidden';
                                        }
                                    }}
                                >
                                    <div className={containerClasses}>
                                        <div
                                            className={`${iconContainerClasses} transition-all duration-500`}
                                            style={{
                                                color: isLit ? skill.color : '#262626', // Much darker gray
                                                filter: isLit ? `drop-shadow(0 0 10px ${skill.color})` : 'none',
                                                opacity: isLit ? 1 : 0.4 // Lower opacity for dimmer look
                                            }}
                                        >
                                            {skill.icon}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    ref={(el) => (tooltipsRef.current[index] = el)}
                                    className={tooltipClasses}
                                    style={{
                                        opacity: 0,
                                        visibility: 'hidden',
                                    }}
                                >
                                    <h3 className={`${noteTextClasses} text-xl font-bold mb-2`} style={{ color: skill.color }}>
                                        {skill.label}
                                    </h3>
                                    <p className={`${noteTextClasses} text-lg leading-tight mb-3`}>
                                        {skill.desc}
                                    </p>
                                    <div className={`${noteTextClasses} text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-1 mb-1`}>
                                        Notable Usage
                                    </div>
                                    <ul className={`${noteTextClasses} text-base list-disc pl-4`}>
                                        {skill.usage.map((u, i) => (
                                            <li key={i}>{u}</li>
                                        ))}
                                    </ul>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>

                </CuttingMat>
            </div>
        </section>
    );
};

export default TechStack;