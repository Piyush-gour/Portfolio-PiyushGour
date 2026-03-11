import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Layout, PenTool, Hash, LayoutTemplate, Briefcase, Shirt, ArrowUpRight, MonitorPlay, Play, Pause } from 'lucide-react';

// Dynamically import all images and videos in the Graphic Design Portfolio directory
// Vite handles this at build/dev time
const imageModules = import.meta.glob('../assets/Graphic Design Portfolio/**/*.{png,jpg,jpeg,svg,mp4,webm}', {
    eager: true,
    import: 'default'
});

// A localized video component to manage its own play/pause state independently
const VideoItem = ({ src, className }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = React.useRef(null);

    const togglePlay = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (videoRef.current) {
            try {
                if (videoRef.current.paused || !isPlaying) {
                    await videoRef.current.play();
                    setIsPlaying(true);
                } else {
                    videoRef.current.pause();
                    setIsPlaying(false);
                }
            } catch (error) {
                console.error("Video playback failed:", error);
            }
        }
    };

    return (
        <div className="relative w-full h-full group/video cursor-pointer" onClick={togglePlay}>
            <video
                ref={videoRef}
                src={`${src}#t=0.001`}
                className={className}
                playsInline
                preload="metadata"
                onEnded={() => setIsPlaying(false)}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
            />
            {/* Play/Pause Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 text-white shadow-xl transform transition-transform group-hover/video:scale-110">
                    {isPlaying ? <Pause className="w-8 h-8 fill-white" /> : <Play className="w-8 h-8 fill-white translate-x-1" />}
                </div>
            </div>

            {/* Always visible play badge when paused */}
            {!isPlaying && (
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-white/90 text-xs font-medium border border-white/10 shadow-lg pointer-events-none group-hover/video:opacity-0 transition-opacity z-10">
                    <Play className="w-3.5 h-3.5 fill-white" />
                    Video
                </div>
            )}
        </div>
    );
};

const GraphicDesignShowcase = () => {
    // Process imported images into a structured array
    const portfolioItems = useMemo(() => {
        const items = [];
        for (const path in imageModules) {
            // Extract the category (folder name) from the path
            // e.g., "../assets/Graphic Design Portfolio/Brand Post/image.jpg" -> "Brand Post"
            const parts = path.split('/');
            const category = parts[parts.length - 2];
            let fileName = parts[parts.length - 1];

            // Format name nicely
            fileName = fileName
                .replace(/\.[^/.]+$/, "") // remove extension
                .replace(/[-_]/g, " "); // replace hyphens and underscores with spaces

            const isVideo = path.toLowerCase().endsWith('.mp4') || path.toLowerCase().endsWith('.webm');

            items.push({
                id: path,
                src: imageModules[path],
                category: category,
                name: fileName,
                isVideo: isVideo
            });
        }

        // Reverse so newer ones might be closer to top, or just keep as is
        return items;
    }, []);

    // Extract unique categories, add 'All' as the first option
    const categories = useMemo(() => {
        const cats = new Set(portfolioItems.map(item => item.category));
        return ['All', ...Array.from(cats).sort()];
    }, [portfolioItems]);

    const [activeCategory, setActiveCategory] = useState('All');

    // Filter items based on active category
    const filteredItems = useMemo(() => {
        if (activeCategory === 'All') return portfolioItems;
        return portfolioItems.filter(item => item.category === activeCategory);
    }, [activeCategory, portfolioItems]);

    return (
        <section id="graphic-design" className="py-24 bg-white dark:bg-black relative transition-colors duration-300 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold text-sm tracking-wide mb-6"
                    >
                        <ImageIcon className="w-4 h-4" />
                        <span>Visual Arts</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6"
                    >
                        Graphic Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Showcase</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg"
                    >
                        A curated collection of my brand identities, logo designs, and social media creatives tailored for impactful visual communication.
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
                    {categories.map((category) => {
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category
                                    ? 'bg-slate-900 dark:bg-white text-white dark:text-black shadow-lg scale-105'
                                    : 'bg-slate-50 dark:bg-[#1a1a1e] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#232328] border border-slate-200 dark:border-white/5'
                                    }`}
                            >
                                {category === 'All' && <LayoutTemplate className="w-4 h-4" />}
                                {category === 'Brand Post' && <Briefcase className="w-4 h-4" />}
                                {category === 'Logo Design' && <PenTool className="w-4 h-4" />}
                                {category === 'Social Media Post' && <Hash className="w-4 h-4" />}
                                {category === 'Frutte Brand Work' && <ImageIcon className="w-4 h-4" />}
                                {category === 'Jersy Design' && <Shirt className="w-4 h-4" />}
                                {category === 'Motion Graphics' && <MonitorPlay className="w-4 h-4" />}
                                {category !== 'All' && category !== 'Brand Post' && category !== 'Logo Design' && category !== 'Social Media Post' && category !== 'Frutte Brand Work' && category !== 'Jersy Design' && category !== 'Motion Graphics' && <Layout className="w-4 h-4" />}
                                {category}
                            </button>
                        );
                    })}
                </motion.div>

                {/* Gallery Grid - Using CSS multicolumn layout for masonry effect */}
                <motion.div
                    layout
                    className="columns-1 sm:columns-2 lg:columns-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className={`relative group rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#111] border border-slate-200 dark:border-white/10 ${item.name === 'Grafiqly 02' || item.name === 'Grafiqly' ? 'break-inside-avoid mb-6 w-full object-cover' : 'break-inside-avoid mb-6'} ${item.name === 'Grafiqly' ? 'aspect-square md:aspect-auto md:h-full' : ''}`}
                            >
                                {/* Media Element - either video or image */}
                                {item.isVideo ? (
                                    <VideoItem
                                        src={item.src}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                )}

                                {/* Overlay hover info */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                                    <span className="text-white/80 text-xs font-semibold tracking-wider uppercase mb-1 drop-shadow-md">
                                        {item.category}
                                    </span>
                                    <h3 className="text-white text-lg font-bold drop-shadow-md">
                                        {item.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-500 dark:text-slate-400">No projects found in this category.</p>
                    </div>
                )}

                {/* Graphic Design Behance Link Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-16 flex justify-center"
                >
                    <a
                        href="https://www.figma.com/design/69L2UvC7R5ry0KFObkcJIK/Untitled?node-id=0-1&t=jX9fndMME0hYg8OC-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-2 font-semibold tracking-wide bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3.5 rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105"
                    >
                        <span className="relative z-10 text-[15px] md:text-[16px]">View Live Demo</span>
                        <ArrowUpRight size={20} className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default GraphicDesignShowcase;
