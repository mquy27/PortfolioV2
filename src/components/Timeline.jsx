import React from 'react';
import springImg from '../assets/images/loxo.avif'
const Timeline = () => {
    return (
        <section id="timeline" className="min-h-screen max-w-[1200px] mx-auto relative">
            <h2 className="text-4xl md:text-6xl text-amber-100 text-center font-serif mb-12">Timeline</h2>
            <div className="flex flex-none flex-col flex-nowrap items-center gap-0 relative mx-auto">
                <div style={{ display: "contents" }}>
                    <div className="h-10 overflow-x-clip overflow-y-clip flex-none w-full relative">
                        <div className="absolute inset-0" style={{ backgroundImage: `url(${springImg})`, backgroundRepeat: 'repeat', backgroundPosition: 'left, top', backgroundSize: '69px' }}></div>
                    </div>
                </div>
            </div>
            <div className="flex bg-[#f2e3cf] min-h-min overflow-x-clip overflow-y-clip rounded-b-md flex-row flex-nowrap items-start gap-5 relative mx-auto">
                <div className="p-8 flex flex-col flex-nowrap items-start gap-5 relative overflow-visible">
                    <div className="flex-row flex-nowrap items-center gap-5 w-full min-h-min p-0 flex relative overflow-visible">
                        <div style={{ display: 'contents' }}>
                            <div className="flex-col flex-nowrap items-center gap-2 w-[144px] min-h-min p-0 flex relative overflow-visible">
                                <h2 className="text-amber-100 text-2xl font-serif"></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline