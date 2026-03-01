import React from 'react';
import raiSahebLogo from '../assets/Rai saheb logo.png';
import davvLogo from '../assets/DAVV LOGO.png';

const Education = () => {
    return (
        <section id="education" className="relative w-full py-24 bg-slate-50 dark:bg-black overflow-hidden z-20 transition-colors duration-300">
            <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 sm:px-12 flex flex-col items-center">

                {/* Section Heading */}
                <h2 className="text-slate-800 dark:text-[#e2e2e5] text-xl font-medium tracking-[0.4em] mb-32 text-center uppercase transition-colors">
                    Education
                </h2>

                {/* Timeline Axis & Container */}
                <div className="relative w-full pb-10">

                    {/* Central Vertical Line (Visible on lg screens and up) */}
                    <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[-60px] bottom-0 w-[2px] bg-gradient-to-b from-slate-200/0 dark:from-[#3f3f46]/0 via-slate-400 dark:via-[#e2e2e5] to-slate-200/0 dark:to-[#3f3f46]/0 transition-colors"></div>

                    {/* Left-aligned Vertical Line for Mobile/Tablet */}
                    <div className="lg:hidden absolute left-[16px] top-[-30px] bottom-0 w-[2px] bg-gradient-to-b from-slate-200/0 dark:from-[#3f3f46]/0 via-slate-400 dark:via-[#e2e2e5] to-slate-200/0 dark:to-[#3f3f46]/0 transition-colors"></div>

                    {/* --- NODE 1: High School (Right Side) --- */}
                    <div className="relative w-full mb-12 lg:mb-24 flex flex-col lg:flex-row items-start lg:items-center justify-between group">

                        {/* Left Side: Date Marker */}
                        <div className="order-1 lg:w-1/2 flex justify-start lg:justify-end lg:pr-14 w-full pl-[50px] lg:pl-0 mb-3 lg:mb-0">
                            <span className="text-[#00d8a1] text-[15px] font-bold tracking-widest leading-none mt-1 lg:mt-0">
                                2018-19
                            </span>
                        </div>

                        {/* Center Timeline Dot */}
                        <div className="absolute left-[16px] lg:left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-[#00d8a1] z-10 shadow-[0_0_15px_rgba(0,216,161,0.6)] top-1 lg:top-auto"></div>

                        {/* Right Side: Content Card */}
                        <div className="order-2 lg:w-1/2 flex justify-start lg:pl-14 w-full pl-[40px] lg:pl-0">
                            <div className="w-full lg:max-w-[420px] bg-white dark:bg-[#1a1a1c] border border-slate-200 dark:border-[#ffffff10] rounded-[14px] p-5 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 hover:bg-slate-50 dark:hover:bg-[#202022] transition-colors shadow-xl">
                                <div className="flex flex-col flex-1 order-2 sm:order-1">
                                    <h4 className="text-slate-900 dark:text-white text-[16px] lg:text-[18px] font-bold leading-snug mb-2 transition-colors">
                                        High School Examination<br />(CBSE Board)
                                    </h4>
                                    <p className="text-slate-600 dark:text-[#a1a1aa] text-[12px] lg:text-[13px] font-light leading-snug transition-colors">
                                        Rai Saheb Bhanwar Singh Public School Nasrullaganj Sehore M.P
                                    </p>
                                </div>
                                <div className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] shrink-0 flex items-center justify-center order-1 sm:order-2">
                                    <img src={raiSahebLogo} alt="Rai Saheb School" className="w-full h-auto object-contain drop-shadow-md" />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* --- NODE 2: Higher Secondary (Left Side) --- */}
                    <div className="relative w-full mb-12 lg:mb-24 flex flex-col lg:flex-row items-start lg:items-center justify-between group">

                        {/* Right Side: Date Marker (Lg screens) / Left side on mobile */}
                        <div className="order-1 lg:order-2 lg:w-1/2 flex justify-start lg:justify-start lg:pl-14 w-full pl-[50px] lg:pl-0 mb-3 lg:mb-0">
                            <span className="text-[#00d8a1] text-[15px] font-bold tracking-widest leading-none mt-1 lg:mt-0">
                                2020-22
                            </span>
                        </div>

                        {/* Center Timeline Dot */}
                        <div className="absolute left-[16px] lg:left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-[#00d8a1] z-10 shadow-[0_0_15px_rgba(0,216,161,0.6)] top-1 lg:top-auto"></div>

                        {/* Left Side: Content Card (Lg screens) / Right side on mobile */}
                        <div className="order-2 lg:order-1 lg:w-1/2 flex justify-end lg:pr-14 w-full pl-[40px] lg:pl-0">
                            <div className="w-full lg:max-w-[420px] bg-white dark:bg-[#1a1a1c] border border-slate-200 dark:border-[#ffffff10] rounded-[14px] p-5 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 hover:bg-slate-50 dark:hover:bg-[#202022] transition-colors shadow-xl">
                                <div className="flex flex-col flex-1 order-2 sm:order-1">
                                    <h4 className="text-slate-900 dark:text-white text-[16px] lg:text-[18px] font-bold leading-snug mb-2 transition-colors">
                                        Higher Secondary<br />Examination (CBSE Board)
                                    </h4>
                                    <p className="text-slate-600 dark:text-[#a1a1aa] text-[12px] lg:text-[13px] font-light leading-snug transition-colors">
                                        Rai Saheb Bhanwar Singh Public School Nasrullaganj Sehore M.P
                                    </p>
                                </div>
                                <div className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] shrink-0 flex items-center justify-center order-1 sm:order-2">
                                    <img src={raiSahebLogo} alt="Rai Saheb School" className="w-full h-auto object-contain drop-shadow-md" />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* --- NODE 3: University (Right Side) --- */}
                    <div className="relative w-full mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between group">

                        {/* Left Side: Date Marker */}
                        <div className="order-1 lg:w-1/2 flex justify-start lg:justify-end lg:pr-14 w-full pl-[50px] lg:pl-0 mb-3 lg:mb-0">
                            <span className="text-[#00d8a1] text-[15px] font-bold tracking-widest leading-none mt-1 lg:mt-0 uppercase">
                                2022 - Present
                            </span>
                        </div>

                        {/* Center Timeline Dot */}
                        <div className="absolute left-[16px] lg:left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-[#00d8a1] z-10 shadow-[0_0_15px_rgba(0,216,161,0.6)] top-1 lg:top-auto"></div>

                        {/* Right Side: Content Card */}
                        <div className="order-2 lg:w-1/2 flex justify-start lg:pl-14 w-full pl-[40px] lg:pl-0">
                            <div className="w-full lg:max-w-[420px] bg-white dark:bg-[#1a1a1c] border border-slate-200 dark:border-[#ffffff10] rounded-[14px] p-5 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 hover:bg-slate-50 dark:hover:bg-[#202022] transition-colors shadow-xl">
                                <div className="flex flex-col flex-1 order-2 sm:order-1">
                                    <h4 className="text-slate-900 dark:text-white text-[16px] lg:text-[18px] font-bold leading-snug mb-2 pr-2 transition-colors">
                                        Institute of Engineering<br />and Technology, DAVV
                                    </h4>
                                    <p className="text-slate-600 dark:text-[#a1a1aa] text-[12px] lg:text-[13px] font-light leading-snug pr-2 transition-colors">
                                        Bachelor of Engineering, Information Technology (CGPA: 7.1 / 10)
                                    </p>
                                </div>
                                <div className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] shrink-0 flex items-center justify-center order-1 sm:order-2">
                                    <img src={davvLogo} alt="IET DAVV" className="w-full h-auto object-contain drop-shadow-md" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
