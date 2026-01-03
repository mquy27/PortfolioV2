import React from "react";
import Draggable from "./Draggable";
import myPic from '../assets/images/my-polaroid.JPEG';

const ContactMe = () => {
    return (
        <section id="contact" className="w-full min-h-screen px-8 lg:px-24 py-12 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-60"
                style={{
                    backgroundImage: `radial-gradient(#b0b0b0 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }}
            ></div>

            <div className="relative w-full h-[80vh] max-w-6xl mx-auto flex flex-wrap justify-center content-center gap-6 md:gap-20 p-4">

                <Draggable className="z-10">
                    <div
                        className="relative bg-amber-50 w-40 h-40 md:w-64 md:h-64 p-4 md:p-6 shadow-xl transform -rotate-6 flex flex-col justify-center items-center text-center font-gochi transition-transform hover:scale-105 hover:rotate-[-4deg]"
                        style={{ filter: "drop-shadow(5px 5px 10px rgba(0,0,0,0.15))" }}
                    >
                        <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-[#e35342] rounded-full shadow-inner border border-red-600 opacity-90"></div>

                        <h2 className="text-2xl md:text-4xl font-bold text-[#e35342] mb-2">Let's Connect!</h2>
                        <p className="text-sm md:text-xl text-gray-700 leading-relaxed">
                            Drag us around! <br />
                            Don't be shy, say hi!
                        </p>
                    </div>
                </Draggable>

                <Draggable className="z-20">
                    <div
                        className="relative bg-amber-50 w-[300px] md:w-[350px] p-4 md:p-6 shadow-md rounded-sm transform rotate-3 flex flex-col justify-between transition-transform hover:scale-105 hover:rotate-[1deg]"
                    >
                        <div className="mb-3">
                            <h3 className="text-3xl md:text-5xl font-bold text-indigo-500 font-gochi tracking-wide">Minh Quý</h3>
                            <p className="text-xs md:text-sm font-serif text-black uppercase tracking-widest mt-1">Frontend Developer</p>
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-gray-700 font-gochi">
                            <a href="tel:+84387804055" className="flex items-center gap-3 text-black text-sm md:text-lg pointer-events-auto group relative">
                                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M15.1653 20.8835C16.0469 21.0388 16.9531 21.0388 17.8347 20.8835C19.2516 20.6338 20.3929 19.6826 20.786 18.4236L20.8694 18.1565C20.956 17.879 21 17.5919 21 17.3034C21 16.0313 19.8623 15 18.4589 15H14.5411C13.1377 15 12 16.0313 12 17.3034C12 17.5919 12.044 17.879 12.1306 18.1565L12.214 18.4236C12.6071 19.6826 13.7484 20.6338 15.1653 20.8835ZM15.1653 20.8835C9.04195 19.7489 4.25108 14.958 3.1165 8.83468M3.1165 8.83468C2.96117 7.95315 2.96117 7.04686 3.1165 6.16532C3.36618 4.74842 4.31744 3.60713 5.57641 3.21402L5.84345 3.13063C6.12103 3.04396 6.40813 3 6.69661 3C7.96874 3 9.00001 4.13768 9 5.54106L9 9.45894C9.00001 10.8623 7.96874 12 6.69661 12C6.40813 12 6.12103 11.956 5.84345 11.8694L5.57641 11.786C4.31744 11.3929 3.36618 10.2516 3.1165 8.83468Z" stroke="#363853" stroke-width="1.5" />
                                </svg>
                                +84 387 804 055
                                <span className="absolute right-5 rotate-6 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-indigo-500 font-bold whitespace-nowrap">
                                    <svg className="w-8 h-8 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 20 6 Q 12 6 6 16 l 0 -5 m 0 5 l 5 2"></path>
                                    </svg>
                                    Call me
                                </span>
                            </a>
                            <a href="mailto:leminhquy737@gmail.com" className="flex items-center gap-3 text-black text-sm md:text-lg pointer-events-auto group relative">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 md:w-6 md:h-6"
                                >
                                    <path d="M5.85557 6.83962C5.62315 6.71446 5.34204 6.72072 5.11541 6.85608C4.88878 6.99145 4.75 7.23599 4.75 7.49997V17C4.75 17.4142 5.08579 17.75 5.5 17.75C5.91421 17.75 6.25 17.4142 6.25 17V8.75563L11.6444 11.6603C11.8664 11.7799 12.1336 11.7799 12.3556 11.6603L17.75 8.75563V17C17.75 17.4142 18.0858 17.75 18.5 17.75C18.9142 17.75 19.25 17.4142 19.25 17V7.49997C19.25 7.23599 19.1112 6.99145 18.8846 6.85608C18.658 6.72072 18.3769 6.71446 18.1444 6.83962L12 10.1482L5.85557 6.83962Z" fill="currentColor" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.3106 3.7218C13.7773 3.40588 10.2228 3.40588 6.68943 3.7218L5.17208 3.85747C3.54447 4.003 2.2294 5.24642 1.99301 6.86334C1.49501 10.2697 1.49501 13.7303 1.99301 17.1366C2.2294 18.7535 3.54447 19.9969 5.17208 20.1425L6.68943 20.2781C10.2228 20.5941 13.7773 20.5941 17.3106 20.2781L18.8279 20.1425C20.4556 19.9969 21.7706 18.7535 22.007 17.1366C22.505 13.7303 22.505 10.2697 22.007 6.86334C21.7706 5.24642 20.4556 4.003 18.8279 3.85747L17.3106 3.7218ZM6.82301 5.21584C10.2675 4.90787 13.7325 4.90787 17.177 5.21584L18.6944 5.35151C19.6305 5.43521 20.3868 6.15036 20.5228 7.08033C20.9998 10.3427 20.9998 13.6572 20.5228 16.9196C20.3868 17.8496 19.6305 18.5647 18.6944 18.6484L17.177 18.7841C13.7325 19.0921 10.2675 19.0921 6.82301 18.7841L5.30567 18.6484C4.36955 18.5647 3.61319 17.8496 3.47723 16.9196C3.00027 13.6572 3.00027 10.3427 3.47723 7.08033C3.61319 6.15036 4.36955 5.43521 5.30567 5.35151L6.82301 5.21584Z" fill="currentColor" />
                                </svg>
                                leminhquy737@gmail.com
                                <span className="absolute right-0 bottom-5 rotate-6 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-[#e35342] font-bold whitespace-nowrap">
                                    <svg className="w-8 h-8 mr-2 text-[#e35342]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 20 6 Q 12 6 6 16 l 0 -5 m 0 5 l 5 2"></path>
                                    </svg>
                                    Email me
                                </span>
                            </a>
                            <div className="flex gap-5 mt-4 ml-1">
                                <a href="https://www.linkedin.com/in/mquy2702" target="_blank" rel="noopener noreferrer" className="w-8 h-8 text-[#0a66c2] hover:scale-110 transition-transform">
                                    <svg
                                        viewBox="0 -0.5 161 161"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full h-full"
                                        fill="currentColor"
                                    >
                                        <g clipPath="url(#clip0_linkedin)">
                                            <path d="M112.307 53.906C104.571 46.3706 94.6231 45.5574 86.3447 51.7847C83.0905 54.2322 79.9611 57.6681 76.7779 62.2861C72.7243 68.1721 71.6781 75.3472 70.756 81.6763C69.123 92.8734 70.374 103.992 71.583 114.74C71.7621 116.328 72.1737 119.981 75.7422 119.981C75.8564 119.981 75.9745 119.978 76.0959 119.97C79.6402 119.743 79.6533 116.711 79.6618 114.704C79.6618 114.511 79.6618 114.323 79.6671 114.139C79.7117 111.733 79.6533 109.288 79.5962 106.926C79.5155 103.549 79.4308 100.058 79.6526 96.6585C80.0642 89.5267 80.901 82.4258 82.1585 75.3931C83.252 69.511 86.5291 64.2592 91.3328 60.6914C96.4385 56.8079 100.996 57.2666 105.271 62.09C108.508 65.7115 110.666 70.1667 111.501 74.9514C112.449 80.5113 113.102 86.2253 113.733 91.753C113.979 93.9071 114.225 96.0625 114.488 98.2133L114.376 98.2284C114.221 98.2494 114.079 98.3223 113.973 98.4358C113.866 98.5494 113.802 98.6958 113.791 98.8507C113.724 99.826 113.656 100.801 113.585 101.777C113.416 104.124 113.241 106.553 113.119 108.946L113.104 109.237C112.96 110.971 112.978 112.715 113.155 114.447C113.568 117.51 115.723 119.712 118.518 119.926C121.209 120.131 123.711 118.308 124.74 115.392C124.974 114.701 125.119 113.983 125.173 113.255C126.199 101.59 126.784 86.2372 122.16 70.9327C120.022 63.853 116.798 58.2818 112.307 53.906Z" />
                                            <path d="M48.2102 113.282C48.2529 115.375 48.7742 117.431 49.7343 119.292C50.3368 120.456 52.3393 121.06 53.5765 121.06C53.6165 121.06 53.6552 121.06 53.6939 121.06C54.8557 121.023 56.2912 119.625 56.6076 118.549C57.0937 116.767 57.2908 114.918 57.1916 113.073C56.7978 102.277 56.3442 91.3014 55.9071 80.6877L55.0362 59.4604C54.9706 57.8438 54.8466 54.8337 51.1862 54.5318C51.0659 54.5233 50.9453 54.5459 50.8362 54.5975C48.0245 55.9607 48.1132 58.525 48.1848 60.5859C48.1972 60.9383 48.2096 61.2887 48.2083 61.6306C48.1571 75.7816 48.1085 94.4413 48.2102 113.282Z" />
                                            <path d="M51.3855 33.6173C50.9411 33.2754 50.4818 32.9222 50.0781 32.5547C49.9845 32.4686 49.8682 32.4111 49.7431 32.3887C49.6179 32.3662 49.4889 32.3799 49.3712 32.4281C44.9251 34.2271 44.6416 37.3228 45.1864 39.6029C45.4543 40.5147 45.9129 41.3593 46.5319 42.0806C47.1508 42.8017 47.9159 43.3832 48.7765 43.7864C49.0325 43.8796 49.3036 43.9242 49.576 43.9178C50.9877 43.9178 52.8925 42.9372 53.5108 41.9363C53.9815 41.1155 54.273 40.2044 54.3662 39.2629C54.4596 38.3214 54.3526 37.3709 54.0522 36.4738C53.5685 35.2983 52.4586 34.445 51.3855 33.6173Z" />
                                            <path d="M157.399 26.6781C155.064 7.50644 138.931 -0.1891 123.984 0.696299C115.114 1.21678 106.329 1.49438 95.8674 1.75035C86.3892 1.98269 76.6695 2.1824 68.0944 2.35829C55.7895 2.61164 43.0651 2.87409 30.4312 3.22326C15.9261 3.62494 4.23025 12.9686 1.98098 25.9464C1.07786 31.1544 1.05157 36.4104 1.10736 42.2472C1.27079 59.2929 1.5202 76.516 1.7637 93.1719L1.79061 94.9755C1.88731 101.676 1.98175 108.377 2.07408 115.078C2.08983 116.207 2.12921 117.339 2.1699 118.47L2.17327 118.561C2.3383 121.365 2.31048 124.177 2.08994 126.977C1.30956 134.454 4.17184 142.427 9.74745 148.302C15.9452 154.833 24.7289 158.154 34.4873 157.656C45.1357 157.105 55.9975 157.211 66.5015 157.312L67.2622 157.319C79.7274 157.438 92.4039 157.756 104.679 158.064L110.869 158.218C111.911 158.281 112.945 158.437 113.959 158.687C114.49 158.8 115.022 158.912 115.552 159.003C115.628 159.016 115.705 159.023 115.782 159.023H122.498C122.564 159.023 122.63 159.018 122.695 159.008C124.037 158.812 125.386 158.634 126.73 158.458L126.831 158.445C129.845 158.051 132.962 157.645 135.999 156.985C149.102 154.138 160.204 140.549 160.24 127.311C160.25 124.19 160.261 121.07 160.273 117.95L160.279 116.384C160.345 99.2824 160.417 81.598 160.049 64.1852C159.78 51.5198 158.889 38.9004 157.399 26.6781ZM150.114 126.387C150.154 136.612 141.235 146.186 129.809 148.182C121.054 149.711 112.105 149.191 103.449 148.69C100.237 148.504 96.9142 148.311 93.6129 148.224C89.8645 148.125 86.0479 147.931 82.3357 147.743L82.0075 147.727C80.41 147.646 78.8111 147.565 77.2254 147.493H77.1519C73.1128 147.493 69.073 147.488 65.0333 147.478C60.3458 147.47 55.5853 147.462 50.7999 147.462C44.5089 147.462 39.337 147.475 34.5228 147.504H34.3108C27.2446 147.504 21.4158 145.408 17.4541 141.441C13.3349 137.316 11.1854 131.156 11.2399 123.624C11.3672 105.914 11.2904 87.9848 11.2155 70.645C11.1735 60.7441 11.1302 50.5071 11.125 40.3923C11.0264 34.5669 12.3441 28.8047 14.9646 23.6012C17.9365 17.8858 23.2449 14.8528 31.6697 14.0567C43.4916 12.9409 53.0309 12.3331 61.69 12.1447C86.6885 11.5973 105.927 11.4037 124.068 11.5159C137.3 11.598 144.939 17.8228 147.433 30.5465C150.19 44.6512 150.15 59.1486 150.108 73.1759L150.105 74.3652C150.045 94.262 150.049 110.793 150.112 126.387H150.114Z" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_linkedin">
                                                <rect width="160.146" height="159.49" fill="white" transform="translate(0.69165 0.0527344)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="https://github.com/mquy27" target="_blank" rel="noopener noreferrer" className="w-8 h-8 text-gray-800 hover:scale-110 transition-transform">
                                    <svg
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        className="w-full h-full"
                                    >
                                        <path d="m5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0 1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3" />
                                        <path d="m5.25 13.75c-1.5.5-3-.5-3.5-1" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </Draggable>

                <Draggable className="z-30">
                    <div
                        className="relative bg-white w-48 p-2 pb-6 md:w-64 md:p-3 md:pb-8 shadow-2xl transform -rotate-3 transition-transform hover:scale-105 rounded-lg hover:rotate-[-1deg] group"
                        style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.2))" }}
                    >
                        <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-[#e35342] rounded-full shadow-inner border border-red-600 opacity-90 z-10"></div>

                        <div className="w-full h-40 md:h-56 mb-4 overflow-hidden relative flex items-center justify-center rounded-sm bg-gray-100">
                            <img src={myPic} alt="Minh Quy" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                        </div>
                        <p className="text-sm md:text-xl font-bold font-gochi text-[#e35342] text-center mt-1 lg:mt-2 uppercase block">Quý nè</p>
                    </div>
                </Draggable>
            </div >
        </section >
    );
};

export default ContactMe;
