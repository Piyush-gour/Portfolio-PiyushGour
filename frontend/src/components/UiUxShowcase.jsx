import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool, Layout, Image as ImageIcon, ArrowUpRight } from 'lucide-react';

// New Graphic Design Assets (Used in the scrolling showcase)
import dream11Img from '../assets/graphic design/DREAM 11.jpg';
import netflixImg from '../assets/graphic design/Netflix.jpg';
import boatImg from '../assets/graphic design/BOAT.jpg';

const categories = ['All', 'UI/UX Design', 'Social Media / Graphics'];

const UiUxShowcase = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    return (
        <section id="design" className="py-24 bg-slate-50 dark:bg-[#0a0a0a] relative transition-colors duration-300 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/10 to-indigo-500/10 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold text-sm tracking-wide mb-6"
                    >
                        <PenTool className="w-4 h-4" />
                        <span>Creative Portfolio</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6"
                    >
                        UI/UX & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">Visual Design</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg"
                    >
                        A showcase of my product interfaces, brand identities, and social media creative direction from my time leading collegiate design teams and freelance projects.
                    </motion.p>
                </div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category
                                ? 'bg-slate-900 dark:bg-white text-white dark:text-black shadow-lg scale-105'
                                : 'bg-white dark:bg-[#1a1a1e] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#232328] border border-slate-200 dark:border-white/5'
                                }`}
                        >
                            {category === 'UI/UX Design' && <Layout className="w-4 h-4" />}
                            {category === 'Social Media / Graphics' && <ImageIcon className="w-4 h-4" />}
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Main Content Area */}
                <div className="flex flex-col items-center gap-12 md:gap-16">
                    <AnimatePresence mode="wait">
                        {/* Social Media Scrolling Showcase (Visible on 'All' and 'Social Media') */}
                        {(activeCategory === 'All' || activeCategory === 'Social Media / Graphics') && (
                            <motion.div
                                key="social-showcase"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20, height: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full max-w-[1200px] border-[6px] md:border-[10px] border-white bg-white shadow-[0_0_50px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_rgba(255,255,255,0.15)] relative"
                            >
                                <div className="flex flex-col w-full bg-black">
                                    <img src={dream11Img} alt="Dream11 Creative" className="w-full h-auto block pointer-events-none blur-[2px] opacity-60 transition-all duration-500 hover:opacity-100 hover:blur-none" />
                                    <img src={boatImg} alt="boAt Creative" className="w-full h-auto block pointer-events-none blur-[2px] opacity-60 transition-all duration-500 hover:opacity-100 hover:blur-none" />
                                    <img src={netflixImg} alt="Netflix Creative" className="w-full h-auto block pointer-events-none blur-[2px] opacity-60 transition-all duration-500 hover:opacity-100 hover:blur-none" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>


                </div>
            </div>
        </section>
    );
};

export default UiUxShowcase;
