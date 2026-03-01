import React from 'react';
import { Star } from 'lucide-react';

const Banner = () => {
    // The items to show in the scrolling banner
    const bannerItems = [
        "SEO-READY",
        "IMMERSIVE",
        "DEPENDABLE",
        "CAPTIVATING",
        "USER-FRIENDLY"
    ];

    // We duplicate the array to create a seamless infinite scroll effect
    const duplicatedItems = [...bannerItems, ...bannerItems, ...bannerItems, ...bannerItems];

    return (
        <section className="relative w-full h-[200px] sm:h-[300px] bg-slate-50 dark:bg-black overflow-hidden flex items-center justify-center my-6 sm:my-10 transition-colors duration-300">

            {/* Background Ribbon (Darker, angled down-right) */}
            <div className="absolute w-[120%] h-12 sm:h-16 bg-[#7a1415] opacity-80 transform rotate-[3deg] scale-110 z-0 shadow-2xl"></div>

            {/* Foreground Ribbon (Brighter, angled up-right, with scrolling text) */}
            <div className="absolute w-[120%] bg-[#c82021] transform -rotate-[3deg] scale-110 z-10 flex overflow-hidden shadow-2xl items-center py-2 sm:py-3 border-y border-[#ff3d3d]/20">

                {/* The Marquee Container */}
                <div className="flex animate-marquee whitespace-nowrap items-center">
                    {duplicatedItems.map((item, index) => (
                        <div key={index} className="flex items-center text-white text-sm sm:text-lg tracking-[0.2em] font-medium px-6 sm:px-8">
                            {item}
                            {/* Star Icon Separator */}
                            <Star size={14} className="ml-6 sm:ml-8 text-white/80" fill="transparent" strokeWidth={2.5} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Banner;
