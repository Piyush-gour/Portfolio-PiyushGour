import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImg1 from '../assets/About-Profile-01.png';
import profileImg2 from '../assets/About-Profile-02.png';
import profileImg3 from '../assets/About-Profile-03.png';
import profileImg4 from '../assets/About-Profile-04.png';

const About = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const photos = [profileImg1, profileImg2, profileImg3, profileImg4];

    useEffect(() => {
        const interval = setInterval(() => {
            setPhotoIndex((prev) => (prev + 1) % photos.length);
        }, 3000); // Change photo every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="relative w-full py-16 pt-20 sm:py-24 sm:pt-32 overflow-hidden text-left bg-slate-50 dark:bg-black text-slate-600 dark:text-[#a1a1aa] transition-colors duration-300">
            <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 sm:px-12 flex flex-col items-center">

                {/* Center Aligned ABOUT Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-slate-800 dark:text-[#e2e2e5] text-lg sm:text-xl font-medium tracking-[0.4em] mb-12 sm:mb-20 text-center transition-colors"
                >
                    ABOUT
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 sm:gap-16 lg:gap-24 items-center w-full">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >

                        <div className="text-slate-600 dark:text-[#a1a1aa] font-light text-sm md:text-base leading-relaxed flex flex-col gap-6 transition-colors">
                            <p>
                                I'm a passionate Web Developer focused on building clean, responsive, and performance-driven websites. I help turn ideas into seamless digital experiences that are fast, functional, and user-friendly.
                            </p>
                            <p>
                                With a strong foundation in front-end development and modern design principles, I create websites that not only look great but also deliver real results. From landing pages to full-scale web applications, I focus on writing optimized code and crafting intuitive user interfaces.
                            </p>
                            <p>
                                I believe in continuous learning, attention to detail, and building products that make an impact.
                            </p>
                        </div>

                        {/* Sub-Footer (FOCUS / LOCATION) */}
                        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-slate-600 dark:text-[#a1a1aa] font-medium text-sm transition-colors">
                            <div className="flex flex-col gap-2">
                                <h3 className="tracking-[0.2em] text-slate-800 dark:text-[#e2e2e5] transition-colors">FOCUS</h3>
                                <p className="font-light">
                                    Web Development, UI/UX,<br />
                                    Creative Technology
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="tracking-[0.2em] text-slate-800 dark:text-[#e2e2e5] transition-colors">LOCATION</h3>
                                <p className="font-light">
                                    B-Boys Hostel IET-DAVV Indore,<br />
                                    Madhya Pradesh 452020
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Image Slideshow */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="flex justify-center mt-4 lg:mt-0 lg:justify-end"
                    >
                        <div className="w-[85vw] sm:w-full max-w-[360px] aspect-[360/460] border-[12px] border-slate-200 dark:border-[#3f3f46] rounded-sm p-0 object-cover overflow-hidden bg-white dark:bg-black shadow-2xl relative transition-colors duration-300">
                            {photos.map((src, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    alt={`Piyush Gour ${idx + 1}`}
                                    className={`absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-[0.8] transition-opacity duration-1000 ease-in-out ${idx === photoIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
