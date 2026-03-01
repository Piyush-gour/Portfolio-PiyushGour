import React from 'react';
import { motion } from 'framer-motion';

// Import Assets
import vritantLogo from '../assets/Vritant.png';
import mondayModelsLogo from '../assets/Monday Models.png';
import eSummitLogo from '../assets/esummit23.png';
import eCellLogo from '../assets/e cell.png';

const Experience = () => {
    return (
        <section id="experience" className="relative w-full py-24 bg-white dark:bg-black text-slate-600 dark:text-[#a1a1aa] overflow-hidden z-20 transition-colors duration-300">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div>
            <div className="absolute bottom-10 left-[-100px] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-transparent blur-[150px] rounded-full pointer-events-none z-0"></div>

            <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 sm:px-12 flex flex-col">

                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-slate-800 dark:text-[#e2e2e5] text-xl font-medium tracking-[0.4em] mb-20 text-center uppercase transition-colors"
                >
                    Work Experience
                </motion.h2>

                <div className="relative w-full">
                    {/* The Vertical Timeline Line (Now broken into segments below) */}

                    {/* Timeline Header Block (E-Cell) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex items-center gap-5 sm:gap-10 md:gap-14 mb-12 sm:mb-20 group cursor-default"
                    >
                        {/* Official E-Cell Logo Image */}
                        <div className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] md:w-[96px] md:h-[96px] bg-slate-50 dark:bg-white flex justify-center items-center shrink-0 z-10 relative overflow-hidden transition-all duration-300 group-hover:scale-110 shadow-lg shadow-slate-200 dark:shadow-white/5 border border-slate-200 dark:border-transparent">
                            <img src={eCellLogo} alt="E-Cell IET DAVV" className="w-[85%] h-auto object-contain" />
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-[40px] font-bold tracking-wide leading-tight transition-colors">
                                E-Cell IET DAVV
                            </h3>
                            <p className="text-slate-600 dark:text-[#a1a1aa] text-xs sm:text-sm md:text-[15px] tracking-widest mt-1 sm:mt-2 uppercase transition-colors">
                                Indore, Madhya Pradesh, India
                            </p>
                        </div>
                    </motion.div>

                    {/* Experience Nodes Container */}
                    <div className="flex flex-col gap-12 sm:gap-20 ml-[24px] sm:ml-[39px]">

                        {/* Node 1: Design Head */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="relative pl-12 sm:pl-16 md:pl-20"
                        >

                            {/* --- Timeline Track & Dot Wrapper --- */}
                            <div className="absolute left-[8px] sm:left-[16px] top-0 bottom-[calc(-48px)] sm:bottom-[calc(-80px)] w-[16px] -translate-x-1/2 z-10">
                                {/* Timeline Dot - perfectly centered within its 16px wrapper */}
                                <div className="absolute top-2 w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] rounded-full bg-slate-400 dark:bg-[#d4d4d8] left-1/2 -translate-x-1/2 transition-colors"></div>

                                {/* Bottom Line Segment (Connecting to next node) - exactly gap from dot */}
                                <div className="absolute top-[28px] sm:top-[36px] bottom-[4px] left-1/2 -translate-x-1/2 w-[1px] bg-slate-300 dark:bg-[#3f3f46] transition-colors"></div>
                            </div>

                            <div className="flex flex-col">
                                <h4 className="text-slate-900 dark:text-white text-[16px] sm:text-lg md:text-[22px] font-bold tracking-wide transition-colors">
                                    Design Head
                                </h4>
                                <span className="text-slate-600 dark:text-[#a1a1aa] text-[12px] sm:text-[13px] md:text-[15px] mt-1 sm:mt-2 mb-1 transition-colors">Part Time</span>
                                <span className="text-slate-600 dark:text-[#a1a1aa] text-[12px] sm:text-[13px] md:text-[15px] transition-colors">May 2024 - Jan 2025 9 Mon</span>

                                <p className="text-slate-700 dark:text-[#d4d4d8] text-[13px] sm:text-[15px] font-light leading-relaxed mt-5 max-w-[650px] transition-colors">
                                    Led The Complete Design Vertical Of E-Cell IET DAVV, Including Recruitment, Mentoring, And Execution Of Major Publications Like Vritant Newsletter (2nd Edition) While Ensuring Strong Visual Branding.
                                </p>

                                {/* Corresponding Logo */}
                                <div className="mt-5 relative overflow-hidden flex items-center justify-start">
                                    <img src={vritantLogo} alt="Vritant Newsletter" className="h-[65px] sm:h-[80px] w-auto object-contain" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Node 2: Design Team Lead */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            className="relative pl-12 sm:pl-16 md:pl-20"
                        >

                            {/* --- Timeline Track & Dot Wrapper --- */}
                            <div className="absolute left-[8px] sm:left-[16px] top-0 bottom-[calc(-48px)] sm:bottom-[calc(-80px)] w-[16px] -translate-x-1/2 z-10">
                                {/* Timeline Dot - perfectly centered within its 16px wrapper */}
                                <div className="absolute top-2 w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] rounded-full bg-slate-400 dark:bg-[#d4d4d8] left-1/2 -translate-x-1/2 transition-colors"></div>

                                {/* Bottom Line Segment (Connecting to next node) - exactly gap from dot */}
                                <div className="absolute top-[28px] sm:top-[36px] bottom-[4px] left-1/2 -translate-x-1/2 w-[1px] bg-slate-300 dark:bg-[#3f3f46] transition-colors"></div>
                            </div>

                            <div className="flex flex-col">
                                <h4 className="text-slate-900 dark:text-white text-[16px] sm:text-lg md:text-[22px] font-bold tracking-wide transition-colors">
                                    Design Team Lead
                                </h4>
                                <span className="text-slate-600 dark:text-[#a1a1aa] text-[12px] sm:text-[13px] md:text-[15px] mt-1 sm:mt-2 mb-1 transition-colors">Full Time</span>
                                <span className="text-slate-600 dark:text-[#a1a1aa] text-[12px] sm:text-[13px] md:text-[15px] transition-colors">Sep 2023 - May 2024 9 Mon</span>

                                <p className="text-slate-700 dark:text-[#d4d4d8] text-[13px] sm:text-[15px] font-light leading-relaxed mt-5 max-w-[650px] transition-colors">
                                    Headed Creative Direction For Vritant Newsletter And Monday Model Series, Managing The Design Team And Delivering Consistent, High-Impact Visuals For E-Cell Initiatives.
                                </p>

                                {/* Corresponding Logo */}
                                <div className="mt-5 relative overflow-hidden flex items-center justify-start">
                                    <img src={mondayModelsLogo} alt="Monday Models" className="h-[65px] sm:h-[80px] w-auto object-contain" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Node 3: Design Team Member */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            className="relative pl-12 sm:pl-16 md:pl-20"
                        >

                            {/* --- Timeline Track & Dot Wrapper --- */}
                            <div className="absolute left-[8px] sm:left-[16px] top-0 bottom-[calc(-48px)] sm:bottom-[calc(-80px)] w-[16px] -translate-x-1/2 z-10">
                                {/* Timeline Dot - perfectly centered within its 16px wrapper */}
                                <div className="absolute top-2 w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] rounded-full bg-slate-400 dark:bg-[#d4d4d8] left-1/2 -translate-x-1/2 transition-colors"></div>
                            </div>

                            <div className="flex flex-col">
                                <h4 className="text-slate-900 dark:text-white text-[16px] sm:text-lg md:text-[22px] font-bold tracking-wide transition-colors">
                                    Design Team Member
                                </h4>
                                <span className="text-slate-600 dark:text-[#a1a1aa] text-[12px] sm:text-[13px] md:text-[15px] mt-1 sm:mt-2 mb-1 transition-colors">Full Time</span>
                                <span className="text-slate-600 dark:text-[#a1a1aa] text-[12px] sm:text-[13px] md:text-[15px] transition-colors">Jan 2023 - May 2023 5 Mon</span>

                                <p className="text-slate-700 dark:text-[#d4d4d8] text-[13px] sm:text-[15px] font-light leading-relaxed mt-5 max-w-[650px] transition-colors">
                                    Contributed To Design And Branding For E-Summit 2023, Creating Digital Creatives And Supporting Event Promotions As Part Of The Core Design Team.
                                </p>

                                {/* Corresponding Logo */}
                                <div className="mt-5 relative overflow-hidden flex items-center justify-start">
                                    <img src={eSummitLogo} alt="E-Summit 2023" className="h-[65px] sm:h-[80px] w-auto object-contain" />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
