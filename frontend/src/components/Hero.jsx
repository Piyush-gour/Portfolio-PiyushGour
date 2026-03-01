import React, { useState, useEffect } from 'react';
import { ArrowRight, Copy, CheckCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg1 from '../assets/About-Profile-01.png';
import profileImg2 from '../assets/About-Profile-02.png';
import profileImg3 from '../assets/About-Profile-03.png';
import profileImg4 from '../assets/About-Profile-04.png';
import Magnetic from './Magnetic';
const Hero = () => {
    const [copied, setCopied] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isAvailable, setIsAvailable] = useState(true);
    const photos = [profileImg1, profileImg2, profileImg3, profileImg4];

    useEffect(() => {
        const interval = setInterval(() => {
            setPhotoIndex((prev) => (prev + 1) % photos.length);
        }, 3000); // Change photo every 3 seconds

        const checkAvailability = () => {
            const hour = new Date().getHours();
            // Available from 9 AM (9) to 7 PM (19)
            if (hour >= 19 || hour < 9) {
                setIsAvailable(false);
            } else {
                setIsAvailable(true);
            }
        };

        checkAvailability();
        const availInterval = setInterval(checkAvailability, 60000); // Check every minute

        return () => {
            clearInterval(interval);
            clearInterval(availInterval);
        };
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('piyushgour988@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    };

    // Simplified Typewriter Effect that doesn't rely on nested variants which were bugging out
    const text1 = "I turn innovative ideas into seamless,";
    const text2 = "responsive,";
    const text3 = "and user-friendly websites.";

    return (
        <div className="w-full flex-1 flex flex-col items-center justify-center text-center -mt-16 z-10 relative px-2 overflow-x-hidden sm:overflow-x-visible max-w-[100vw]">
            {/* Sun Rays Effect (Light Mode Only) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[1000px] sm:h-[1000px] pointer-events-none -z-10 block dark:hidden">
                <div className="w-full h-full sun-rays-light animate-[spin_60s_linear_infinite]"></div>
            </div>

            {/* Main Headline with simplified entrance animations */}
            <h1 className="leading-[1.2] tracking-tight flex flex-col items-center w-full px-4 sm:px-0 mt-8">
                {/* Line 1 */}
                <span className="font-gatuzo text-[26px] sm:text-[32px] md:text-[48px] lg:text-[54px] font-normal mb-1 md:mb-0 flex flex-wrap justify-center text-slate-900 dark:text-white transition-colors duration-300 w-full overflow-hidden">
                    {text1.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.03, ease: "easeOut" }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </span>

                {/* Line 2 */}
                <span className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 w-full text-center overflow-hidden">
                    <span className="font-gatuzo text-[25px] sm:text-[32px] md:text-[48px] lg:text-[54px] font-normal text-slate-900 dark:text-white transition-colors duration-300">
                        {text2.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (text1.length * 0.03) + (index * 0.03), ease: "easeOut" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </span>
                    <span className="font-montserrat text-[25px] sm:text-[32px] md:text-[48px] lg:text-[54px] font-light text-slate-900 dark:text-white transition-colors duration-300">
                        {text3.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (text1.length * 0.03) + (text2.length * 0.03) + (index * 0.03), ease: "easeOut" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </span>
                </span>
            </h1>

            {/* Profile Intro Subheadline */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex flex-wrap justify-center items-center gap-y-3 gap-x-2 sm:gap-3 mt-10 sm:mt-12 px-4 text-center max-w-[95%] sm:max-w-none"
            >
                <p className="text-lg sm:text-xl md:text-3xl font-medium text-slate-700 dark:text-[#e4e4e7] transition-colors leading-relaxed tracking-wide">Hello, I'm Piyush Gour</p>
                <div className="relative inline-block align-middle w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-[10px] sm:rounded-[14px] overflow-hidden bg-white mx-1 sm:mx-2 border border-slate-300 dark:border-[#ffffff20] transition-colors shrink-0">
                    {photos.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`Piyush Gour ${idx + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === photoIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        />
                    ))}
                </div>
                <p className="text-lg sm:text-xl md:text-3xl font-medium text-slate-700 dark:text-[#e4e4e7] transition-colors leading-relaxed tracking-wide">a Full Stack Developer</p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-14 w-full px-6"
            >
                {/* let's Connect Button */}
                <Magnetic className="w-full sm:w-auto">
                    <a href="#contact" className="relative flex items-center justify-between sm:justify-start gap-4 bg-slate-100 dark:bg-[#232328]/80 text-slate-900 dark:text-white px-1.5 py-1.5 pl-6 rounded-full border border-slate-300 dark:border-white/10 group overflow-hidden transition-colors duration-300 w-full sm:w-auto">
                        {/* Expanding Background Ripple */}
                        <div className="absolute right-[6px] top-[6px] w-10 h-10 bg-slate-900 dark:bg-white rounded-full scale-0 opacity-0 group-hover:scale-[18] group-hover:opacity-100 transition-all duration-[800ms] ease-out z-0"></div>

                        <span className="text-[16px] sm:text-[17px] font-medium tracking-wide relative z-10 transition-colors duration-[600ms] group-hover:text-white dark:group-hover:text-black">let's Connect</span>

                        <div className="bg-slate-900 dark:bg-[#e2e2e5] group-hover:bg-transparent rounded-full ml-2 w-10 h-10 flex items-center justify-center transition-all duration-[600ms] ease-out relative z-10 shrink-0">
                            <ArrowRight size={20} className="text-white dark:text-black group-hover:text-white dark:group-hover:text-black transition-all duration-[600ms] ease-out" />
                        </div>
                    </a>
                </Magnetic>

                {/* Email Label (Click to Copy) */}
                <Magnetic className="w-full sm:w-[200px]">
                    <div
                        onClick={handleCopyEmail}
                        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-[#a1a1aa] dark:hover:text-[#f4f4f5] transition-colors cursor-pointer w-full justify-center py-3 sm:py-0 border border-slate-200 dark:border-transparent rounded-full sm:border-none sm:rounded-none bg-slate-50 sm:bg-transparent dark:bg-transparent"
                    >
                        {copied ? <CheckCheck size={16} className="text-green-500 dark:text-green-400" /> : <Copy size={16} />}
                        <span className="text-sm font-medium transition-colors">
                            piyushgour988@gmail.com
                        </span>
                    </div>
                </Magnetic>
            </motion.div>

            {/* Freelance Availability Badge */}
            <div className="flex items-center gap-2 mt-8 px-4 py-1.5 rounded-full bg-slate-200/60 dark:bg-[#1c1c1e]/60 border border-slate-300 dark:border-[#ffffff10] backdrop-blur-sm cursor-default hover:bg-slate-300/60 dark:hover:bg-[#27272a]/60 transition-colors">
                <div className="relative flex items-center justify-center w-3 h-3">
                    <span className={`absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping ${isAvailable ? 'bg-green-500 dark:bg-green-400' : 'bg-red-500 dark:bg-red-400'}`}></span>
                    <span className={`relative inline-flex w-2 h-2 rounded-full ${isAvailable ? 'bg-green-600 dark:bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]' : 'bg-red-600 dark:bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]'}`}></span>
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-[#a1a1aa] tracking-wide transition-colors">
                    {isAvailable ? 'Available for freelancing' : 'Unavailable for work'}
                </span>
            </div>
        </div>
    );
};

export default Hero;
