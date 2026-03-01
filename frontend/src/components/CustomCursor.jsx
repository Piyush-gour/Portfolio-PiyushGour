import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if hovered element is a link, button, or has a specific class
            const target = e.target;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Framer Motion variants for the cursor states
    const variants = {
        default: {
            x: mousePosition.x - 16, // center it (32px / 2)
            y: mousePosition.y - 16,
            scale: 1,
            backgroundColor: "transparent",
            border: "2px solid rgba(0, 216, 161, 0.5)", // The brand teal color
        },
        hover: {
            x: mousePosition.x - 32, // center it (64px / 2)
            y: mousePosition.y - 32,
            scale: 1.5,
            backgroundColor: "rgba(0, 216, 161, 0.1)",
            border: "1px solid rgba(0, 216, 161, 0.8)",
            mixBlendMode: "difference"
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden lg:block"
            variants={variants}
            animate={isHovering ? 'hover' : 'default'}
            transition={{
                type: "spring",
                stiffness: 700,
                damping: 30,
                mass: 0.5
            }}
        />
    );
};

export default CustomCursor;
