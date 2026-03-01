import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/PG-LOGO.png';

const Preloader = ({ onLoadingComplete }) => {
    useEffect(() => {
        // Trigger the complete function after the animation finishes
        const timer = setTimeout(() => {
            onLoadingComplete();
        }, 2200); // Wait for the SVG stroke animation + exit delay

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-white dark:bg-[#000000]"
            initial={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                <motion.img
                    src={logo}
                    alt="PG Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,216,161,0.6)]"
                    initial={{ scale: 0.5, opacity: 0, filter: "brightness(2)" }}
                    animate={{ scale: 1, opacity: 1, filter: "brightness(1)", rotate: [0, 5, -5, 0] }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                />
            </div>
        </motion.div>
    );
};

export default Preloader;
