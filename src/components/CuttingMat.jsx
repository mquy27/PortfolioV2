import React from 'react';

const CuttingMat = ({ children, className = "" }) => {
    return (
        <div className={`relative bg-[#1c1c1c] rounded-[2rem] border-[6px] border-[#2d2d2d] overflow-hidden shadow-2xl ${className}`}>

            {/* Grid Lines */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Crosshairs Pattern */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" width="100%" height="100%">
                <defs>
                    <pattern id="grid-cross" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                        <path d="M80 0 V10 M75 5 H85 M0 80 H10 M5 75 V85 M80 80 V70 M75 75 H85 M80 80 H90" stroke="transparent" /> {/* Complex path not needed, just simple crosses at intersections */}
                        {/* Let's simplify: A cross at the bottom-right corner of each cell? No, usually intersections. 
                             Pattern repeats. Let's draw a cross at (0,0) of the pattern?
                         */}
                        <path d="M-5 0 H5 M0 -5 V5" stroke="white" strokeWidth="2" /> {/* Top Left */}
                    </pattern>
                </defs>
                {/* Re-thinking the SVG pattern for simple crosses at intersections */}
                <defs>
                    <pattern id="cross-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                        <path d="M-2 0 H2 M0 -2 V2" stroke="white" strokeWidth="1.5" transform="translate(0,0)" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cross-pattern)" />
            </svg>

            {/* SVG for Crosses (Simpler approach: Draw lines) */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, transparent 78px, rgba(255,255,255,0.1) 2px, transparent 80px),
                        linear-gradient(to bottom, transparent 78px, rgba(255,255,255,0.1) 2px, transparent 80px)
                      `,
                    backgroundSize: '80px 80px'
                }}
            ></div>

            {/* Actual crosses at intersections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="small-cross" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                        <path d="M76 80 H84 M80 76 V84" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#small-cross)" />
            </svg>


            {/* Numbers on the left */}
            <div className="absolute left-2 top-0 bottom-0 w-6 flex flex-col pt-[72px] gap-[64px] pointer-events-none hidden md:flex">
                {[1, 2, 3, 4, 5, 6, 7].map(num => (
                    <span key={num} className="text-white/30 font-mono text-xs font-bold text-center h-4 leading-none">{num}</span>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default CuttingMat;
