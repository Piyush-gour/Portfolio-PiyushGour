import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool, Layout, Image as ImageIcon } from 'lucide-react';

// Import Assets
import legalsathiImg from '../assets/legatsathi website image.png';
import desktopImg from '../assets/Desktop - 1.png';
import vritantImg from '../assets/Vritant.png';
import mondayModelsImg from '../assets/Monday Models.png';
import esummitImg from '../assets/esummit23.png';

// New Graphic Design Assets
import frutteImg from '../assets/graphic design/Frutte.png';
import dream11Img from '../assets/graphic design/DREAM 11.jpg';
import netflixImg from '../assets/graphic design/Netflix.jpg';
import boatImg from '../assets/graphic design/BOAT.jpg';
import rachnaImg from '../assets/graphic design/RACHNA 2023.jpg';

const categories = ['All', 'UI/UX Design', 'Social Media / Graphics'];

const showcaseItems = [
    {
        id: 'frutte',
        title: "Frutte Brand Campaign",
        category: "Social Media / Graphics",
        image: frutteImg,
        description: "My first successful freelance project! Complete graphic design and creative direction for the Frutte brand.",
        span: "col-span-1 md:col-span-2 row-span-2"
    },
    {
        id: 1,
        title: "LegalSathi Platform",
        category: "UI/UX Design",
        image: legalsathiImg,
        description: "Full-stack legal consultation platform interface.",
        span: "col-span-1 md:col-span-1 row-span-1"
    },
    {
        id: 'dream11',
        title: "Dream 11 Creative",
        category: "Social Media / Graphics",
        image: dream11Img,
        description: "High-impact promotional graphic for fantasy sports.",
        span: "col-span-1 md:col-span-1 row-span-1"
    },
    {
        id: 2,
        title: "Vritant Newsletter 2nd Ed",
        category: "Social Media / Graphics",
        image: vritantImg,
        description: "Editorial design and branding for E-Cell newsletter.",
        span: "col-span-1 md:col-span-1 row-span-1"
    },
    {
        id: 'netflix',
        title: "Netflix Ad Concept",
        category: "Social Media / Graphics",
        image: netflixImg,
        description: "Key visual and social media advertisement concept.",
        span: "col-span-1 md:col-span-2 row-span-1"
    },
    {
        id: 3,
        title: "Dashboard Concept UI",
        category: "UI/UX Design",
        image: desktopImg,
        description: "Modern desktop application dashboard interface layout.",
        span: "col-span-1 md:col-span-1 row-span-1"
    },
    {
        id: 'boat',
        title: "boAt Product Graphic",
        category: "Social Media / Graphics",
        image: boatImg,
        description: "Product marketing creative for audio accessories.",
        span: "col-span-1 md:col-span-1 row-span-1"
    },
    {
        id: 4,
        title: "Monday Models Series",
        category: "Social Media / Graphics",
        image: mondayModelsImg,
        description: "Creative direction for weekly entrepreneurial showcase.",
        span: "col-span-1 md:col-span-1 row-span-1"
    },
    {
        id: 5,
        title: "E-Summit 2023 Branding",
        category: "Social Media / Graphics",
        image: esummitImg,
        description: "Promotional creatives and digital assets for major collegiate summit.",
        span: "col-span-1 md:col-span-2 row-span-1"
    },
    {
        id: 'rachna',
        title: "Rachna 2023 Visuals",
        category: "Social Media / Graphics",
        image: rachnaImg,
        description: "Event branding and social media graphics for Rachna tech fest.",
        span: "col-span-1 md:col-span-1 row-span-1"
    }
];

const UiUxShowcase = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems = showcaseItems.filter(item =>
        activeCategory === 'All' ? true : item.category === activeCategory
    );

    return (
        <section id="design" className="py-24 bg-slate-50 dark:bg-black/90 relative transition-colors duration-300 overflow-hidden">
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
                    className="flex flex-wrap justify-center gap-3 mb-12"
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

                {/* Masonry-style Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                                className={`relative group rounded-3xl overflow-hidden bg-slate-200 dark:bg-[#121214] border border-slate-200 dark:border-white/10 shadow-lg ${item.span}`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                />

                                {/* Lighter overlay gradient for much better image readability */}
                                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Hover Content */}
                                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                    <span className="text-teal-400 font-semibold text-xs tracking-wider uppercase mb-1 md:mb-2 drop-shadow-md">
                                        {item.category}
                                    </span>
                                    <h3 className="text-white text-xl md:text-2xl font-bold mb-1 md:mb-2 drop-shadow-lg leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-200 text-sm line-clamp-2 drop-shadow-md font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default UiUxShowcase;
