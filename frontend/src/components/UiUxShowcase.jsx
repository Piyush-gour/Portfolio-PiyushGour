import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool, Layout, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

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
import slice17Img from '../assets/graphic design/Slice 17.png';
import sliceWerImg from '../assets/graphic design/Slice 1WERER.png';

const categories = ['All', 'UI/UX Design', 'Social Media / Graphics'];

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-full group/carousel overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
            </AnimatePresence>

            {/* Arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center px-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20">
                <button onClick={prevSlide} className="p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-md transition-all scale-90 hover:scale-100 shadow-xl">
                    <ChevronLeft size={20} strokeWidth={3} />
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20">
                <button onClick={nextSlide} className="p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-md transition-all scale-90 hover:scale-100 shadow-xl">
                    <ChevronRight size={20} strokeWidth={3} />
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-[110px] inset-x-0 flex justify-center gap-2 z-20">
                {images.map((_, idx) => (
                    <div key={idx} className={`w-2 h-2 shadow-sm rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-teal-400 w-6' : 'bg-white/60'}`} />
                ))}
            </div>
        </div>
    );
};

const FigmaPresentation = ({ topImage, bottomImage }) => (
    <div className="w-full h-full bg-[#1e1e1e] p-6 flex flex-col gap-4 overflow-hidden relative group-hover:scale-[1.03] transition-transform duration-700 ease-out">
        <div className="w-full h-[48%] rounded-xl overflow-hidden shadow-2xl border border-white/10 relative">
            <img src={topImage} className="w-full object-cover object-top h-full hover:object-bottom transition-all duration-[5000ms] ease-in-out" alt="Figma Layout 1" />
        </div>
        <div className="w-full h-[48%] rounded-xl overflow-hidden shadow-2xl border border-white/10 relative">
            <img src={bottomImage} className="w-full object-cover object-top h-full hover:object-bottom transition-all duration-[5000ms] ease-in-out" alt="Figma Layout 2" />
        </div>
        {/* Figma UI Chrome */}
        <div className="absolute top-2.5 left-3.5 flex gap-1.5 opacity-60">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
        </div>
    </div>
);

const showcaseItems = [
    {
        id: 'figma-legalsathi',
        title: "LegalSathi & Portfolio Mockups",
        category: "UI/UX Design",
        isFigma: true,
        topImage: slice17Img,
        bottomImage: sliceWerImg,
        description: "High-fidelity Figma layouts showcasing modern, sleek web architecture.",
        span: "col-span-1 md:col-span-2 row-span-2"
    },
    {
        id: 'social-carousel',
        title: "Brand Promotions Archive",
        category: "Social Media / Graphics",
        isCarousel: true,
        images: [dream11Img, netflixImg, boatImg],
        description: "Instagram-style swipeable carousel featuring key promotional creatives for major brands.",
        span: "col-span-1 md:col-span-2 row-span-2"
    },
    {
        id: 'frutte',
        title: "Frutte Brand Campaign",
        category: "Social Media / Graphics",
        image: frutteImg,
        description: "My first successful freelance project! Complete graphic design and creative direction for the Frutte brand.",
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
        id: 3,
        title: "Dashboard Concept UI",
        category: "UI/UX Design",
        image: desktopImg,
        description: "Modern desktop application dashboard interface layout.",
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
                                {item.isCarousel ? (
                                    <ImageCarousel images={item.images} />
                                ) : item.isFigma ? (
                                    <FigmaPresentation topImage={item.topImage} bottomImage={item.bottomImage} />
                                ) : (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                )}

                                {/* Lighter overlay gradient for much better image readability */}
                                <div className={`absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t ${item.isFigma ? 'from-[#1e1e1e] via-[#1e1e1e]/80' : 'from-black/90 via-black/40'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10`}></div>

                                {/* Hover Content */}
                                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 pointer-events-none">
                                    <span className={`font-semibold text-xs tracking-wider uppercase mb-1 md:mb-2 drop-shadow-md ${item.isFigma ? 'text-teal-300' : 'text-teal-400'}`}>
                                        {item.category}
                                    </span>
                                    <h3 className={`text-xl md:text-2xl font-bold mb-1 md:mb-2 drop-shadow-lg leading-tight ${item.isFigma ? 'text-white' : 'text-white'}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-sm line-clamp-2 drop-shadow-md font-medium ${item.isFigma ? 'text-slate-300' : 'text-slate-200'}`}>
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
