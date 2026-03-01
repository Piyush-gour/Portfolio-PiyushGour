import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down to given distance
    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top callback
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 sm:bottom-10 right-6 sm:right-10 z-[100] p-3 sm:p-4 rounded-full bg-[#00d8a1] text-white shadow-[0_0_20px_rgba(0,216,161,0.4)] hover:shadow-[0_0_30px_rgba(0,216,161,0.6)] transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#00d8a1] focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-[#030614] cursor-none"
                    aria-label="Back to top"
                >
                    <ArrowUp strokeWidth={2.5} size={20} className="sm:w-6 sm:h-6" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
