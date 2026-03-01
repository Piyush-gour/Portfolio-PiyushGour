import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import visitextBg from '../assets/Screenshot 2026-02-28 111226.png'; // Background/Secondary screenshot
import visitextFg from '../assets/Screenshot 2026-02-28 111320.png'; // Foreground/Login screenshot
import legalsathiBg from '../assets/legatsathi website image.png'; // LegalSathi project screenshot

const TiltCard = ({ children, className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth out the mouse movements
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    // Map the smoothed mouse position to rotation degrees
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={className}
        >
            <div style={{ transform: "translateZ(75px)", width: '100%', height: '100%', transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="relative w-full py-24 overflow-hidden text-left bg-slate-50 dark:bg-black text-slate-600 dark:text-[#a1a1aa] transition-colors duration-300">
            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-12 flex flex-col items-center">

                {/* Section Heading */}
                <h2 className="text-slate-800 dark:text-[#e2e2e5] text-xl font-medium tracking-[0.4em] mb-20 text-center uppercase transition-colors">
                    Projects
                </h2>

                <div className="flex flex-col gap-24 sm:gap-32 w-full">
                    {/* Project 1: VisiText */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 sm:gap-12 lg:gap-20 items-center w-full"
                    >

                        {/* Left Column: Interactive Image Showcase */}
                        <TiltCard className="relative w-full aspect-[4/3] rounded-[20px] group perspective-[1200px] cursor-pointer">

                            {/* StarForge-Style Pink/Magenta Background Plate */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ed1d78] to-[#e44d8a] rounded-[20px] overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-[0_20px_40px_rgba(237,29,120,0.3)]">

                                {/* Decorative Text */}
                                <div className="absolute top-8 left-8 right-8 flex justify-between items-start opacity-100 transition-opacity duration-500 group-hover:opacity-0" style={{ transform: "translateZ(30px)" }}>
                                    <p className="text-white text-[15px] md:text-[18px] font-gatuzo italic tracking-wide leading-snug w-[95%] pr-4">
                                        A full-stack web application designed to deliver seamless user experience with scalable backend architecture.
                                    </p>
                                    <ArrowUpRight className="text-white" size={24} />
                                </div>

                                {/* Background Project Image Layer (Main App screenshot) */}
                                {/* Normal: Flat. Hover: Tilts back slightly and scales up */}
                                <div style={{ transform: "translateZ(50px)" }} className="absolute top-[32%] left-[5%] right-[5%] bottom-[-5%] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom transform-style-3d group-hover:scale-[1.05] group-hover:-translate-y-2">
                                    <img
                                        src={visitextBg}
                                        alt="VisiText App Background"
                                        className="w-full h-full object-cover object-top rounded-t-[12px] shadow-2xl border-t border-x border-white/20 transition-all duration-700 group-hover:brightness-105"
                                    />
                                </div>
                            </div>
                        </TiltCard>

                        {/* Right Column: Project Details */}
                        <div className="flex flex-col gap-6 mt-8 sm:mt-12 lg:mt-0 lg:ml-8">
                            {/* Elegant Title matching StarForge ref */}
                            <h3 className="flex items-center text-slate-800 dark:text-[#e2e2e5] text-xl sm:text-2xl md:text-[28px] font-gatuzo italic tracking-wide transition-colors">
                                <span className="text-[#ed1d78] mr-3 sm:mr-4 text-xl sm:text-2xl font-sans not-italic font-light shrink-0">—</span>
                                VisiText - AI Image Generator
                            </h3>

                            <p className="text-sm md:text-[15px] leading-relaxed font-light mt-2 text-slate-600 dark:text-[#a1a1aa] transition-colors">
                                A powerful and scalable AI-powered image generation platform built to deliver seamless user experience and secure credit-based access. Designed with a modern UI and robust backend architecture for performance and reliability.
                            </p>

                            {/* Feature Bullet List with Pink Stars */}
                            <ul className="text-[14px] md:text-[15px] font-light leading-relaxed space-y-4 mt-6 ml-2 list-none transition-colors">
                                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#ed1d78] text-slate-700 dark:text-[#e2e2e5]">Built full-stack AI image generator using text prompts.</li>
                                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#ed1d78] text-slate-700 dark:text-[#e2e2e5]">Implemented JWT authentication with bcrypt security.</li>
                                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#ed1d78] text-slate-700 dark:text-[#e2e2e5]">Developed credit-based usage & auto-deduction logic.</li>
                                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#ed1d78] text-slate-700 dark:text-[#e2e2e5]">Integrated Razorpay for secure credit purchases.</li>
                                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#ed1d78] text-slate-700 dark:text-[#e2e2e5]">Managed user data with MongoDB.</li>
                                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#ed1d78] text-slate-700 dark:text-[#e2e2e5]">Used Axios for API communication.</li>
                                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#ed1d78] text-slate-700 dark:text-[#e2e2e5]">Handled image data using FormData.</li>
                                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#ed1d78] text-slate-700 dark:text-[#e2e2e5]">Secured backend with Express & dotenv.</li>
                            </ul>

                            {/* Tech Stack Badges - StarForge Style compact pills */}
                            <div className="flex flex-wrap gap-3 mt-8">
                                <div className="flex items-center gap-2 bg-white dark:bg-[#121214] border border-slate-200 dark:border-[#27272a]/60 px-3.5 py-1.5 rounded-full shadow-sm transition-colors">
                                    <span className="text-slate-800 dark:text-white text-[12px]">⚛</span>
                                    <span className="text-[11px] font-semibold tracking-wider text-slate-500 dark:text-[#a1a1aa]">REACT</span>
                                </div>

                                <div className="flex items-center gap-2 bg-white dark:bg-[#121214] border border-slate-200 dark:border-[#27272a]/60 px-3.5 py-1.5 rounded-full shadow-sm transition-colors">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-[14px] h-[14px]" alt="MongoDB" />
                                    <span className="text-[11px] font-semibold tracking-wider text-slate-500 dark:text-[#a1a1aa]">MONGODB</span>
                                </div>

                                <div className="flex items-center gap-2 bg-white dark:bg-[#121214] border border-slate-200 dark:border-[#27272a]/60 px-3.5 py-1.5 rounded-full shadow-sm transition-colors">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-[14px] h-[14px]" alt="Tailwind" />
                                    <span className="text-[11px] font-semibold tracking-wider text-slate-500 dark:text-[#a1a1aa]">TAILWIND CSS</span>
                                </div>

                                <div className="flex items-center gap-2 bg-white dark:bg-[#121214] border border-slate-200 dark:border-[#27272a]/60 px-3.5 py-1.5 rounded-full shadow-sm transition-colors">
                                    <svg viewBox="0 0 256 222" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className="w-[10px] h-[10px] opacity-70 dark:opacity-100"><path fill="currentColor" className="text-slate-900 dark:text-white" d="m128 0 128 221.705H0z" /></svg>
                                    <span className="text-[11px] font-semibold tracking-wider text-slate-500 dark:text-[#a1a1aa]">VERCEL</span>
                                </div>

                                <div className="flex items-center gap-2 bg-white dark:bg-[#121214] border border-slate-200 dark:border-[#27272a]/60 px-3.5 py-1.5 rounded-full shadow-sm transition-colors">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="w-[14px] h-[14px] dark:invert opacity-80 dark:opacity-100" alt="GitHub" />
                                    <span className="text-[11px] font-semibold tracking-wider text-slate-500 dark:text-[#a1a1aa]">GITHUB</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-8 flex items-center gap-4">
                                <a
                                    href="https://github.com/Piyush-gour" target="_blank" rel="noopener noreferrer"
                                    className="group relative flex items-center gap-2 font-medium bg-[#ed1d78] text-white px-6 py-2.5 rounded-full overflow-hidden transition-all hover:bg-[#c90d5f] hover:shadow-[0_0_20px_rgba(237,29,120,0.4)]"
                                >
                                    <span className="relative z-10 text-[14px]">Live Demo</span>
                                    <ArrowUpRight size={18} className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                            </div>

                        </div>
                    </motion.div>
                    {/* End Project 1 */}

                    {/* Project 2: LegalSathi */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 sm:gap-12 lg:gap-20 items-center w-full"
                    >

                        {/* Left Column: Interactive Image Showcase */}
                        <TiltCard className="relative w-full aspect-[4/3] rounded-[20px] group perspective-[1200px] cursor-pointer">

                            {/* Purple/Indigo Background Plate (To contrast with Pink) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7e22ce] to-[#a855f7] rounded-[20px] overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-[0_20px_40px_rgba(168,85,247,0.3)]">

                                {/* Decorative Text */}
                                <div className="absolute top-8 left-8 right-8 flex justify-between items-start opacity-100 transition-opacity duration-500 group-hover:opacity-0" style={{ transform: "translateZ(30px)" }}>
                                    <p className="text-white text-[15px] md:text-[18px] font-gatuzo italic tracking-wide leading-snug w-[95%] pr-4">
                                        A comprehensive digital consultation platform bridging the gap between legal experts and clients.
                                    </p>
                                    <ArrowUpRight className="text-white" size={24} />
                                </div>

                                {/* Background Project Image Layer */}
                                {/* Normal: Flat. Hover: Tilts back slightly and scales up */}
                                <div style={{ transform: "translateZ(50px)" }} className="absolute top-[32%] left-[5%] right-[5%] bottom-[-5%] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom transform-style-3d group-hover:scale-[1.05] group-hover:-translate-y-2">
                                    <img
                                        src={legalsathiBg}
                                        alt="LegalSathi App Background"
                                        className="w-full h-full object-cover object-top rounded-t-[12px] shadow-2xl border-t border-x border-white/20 transition-all duration-700 group-hover:brightness-105"
                                    />
                                </div>
                            </div>
                        </TiltCard>

                        {/* Right Column: Project Details */}
                        <div className="flex flex-col gap-6 mt-8 sm:mt-12 lg:mt-0 lg:ml-8">
                            {/* Elegant Title */}
                            <h3 className="flex items-center text-slate-800 dark:text-[#e2e2e5] text-xl sm:text-2xl md:text-[28px] font-gatuzo italic tracking-wide transition-colors">
                                <span className="text-[#a855f7] mr-3 sm:mr-4 text-xl sm:text-2xl font-sans not-italic font-light shrink-0">—</span>
                                LegalSathi – Lawyer Connect
                            </h3>

                            <p className="text-sm md:text-[15px] leading-relaxed font-light mt-2 text-slate-600 dark:text-[#a1a1aa] transition-colors">
                                Designed and developed a full-stack legal consultation web application that connects clients with lawyers through a structured digital platform. Features a robust dual-sided architecture for optimal user experience.
                            </p>

                            {/* Feature Bullet List */}
                            <ul className="text-[14px] md:text-[15px] font-light leading-relaxed space-y-4 mt-6 ml-2 list-none transition-colors">
                                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#a855f7] text-slate-700 dark:text-[#e2e2e5]">Built a lawyer registration and profile management system for qualifications and expertise tracking.</li>
                                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#a855f7] text-slate-700 dark:text-[#e2e2e5]">Implemented a robust admin panel to review, approve, or reject lawyer applications securely.</li>
                                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#a855f7] text-slate-700 dark:text-[#e2e2e5]">Engineered secured user authentication flows utilizing JWT and Bcrypt hashing.</li>
                                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#a855f7] text-slate-700 dark:text-[#e2e2e5]">Developed scalable, structured REST APIs utilizing the Node.js and Express.js backend ecosystem.</li>
                            </ul>

                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap gap-3 mt-8">
                                <div className="flex items-center gap-2 bg-white dark:bg-[#121214] border border-slate-200 dark:border-[#27272a]/60 px-3.5 py-1.5 rounded-full shadow-sm transition-colors">
                                    <span className="text-slate-800 dark:text-white text-[12px]">⚛</span>
                                    <span className="text-[11px] font-semibold tracking-wider text-slate-500 dark:text-[#a1a1aa]">REACT</span>
                                </div>

                                <div className="flex items-center gap-2 bg-white dark:bg-[#121214] border border-slate-200 dark:border-[#27272a]/60 px-3.5 py-1.5 rounded-full shadow-sm transition-colors">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-[14px] h-[14px]" alt="Node.js" />
                                    <span className="text-[11px] font-semibold tracking-wider text-slate-500 dark:text-[#a1a1aa]">NODE.JS</span>
                                </div>

                                <div className="flex items-center gap-2 bg-white dark:bg-[#121214] border border-slate-200 dark:border-[#27272a]/60 px-3.5 py-1.5 rounded-full shadow-sm transition-colors">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className="w-[14px] h-[14px] dark:invert" alt="Express.js" />
                                    <span className="text-[11px] font-semibold tracking-wider text-slate-500 dark:text-[#a1a1aa]">EXPRESS</span>
                                </div>

                                <div className="flex items-center gap-2 bg-white dark:bg-[#121214] border border-slate-200 dark:border-[#27272a]/60 px-3.5 py-1.5 rounded-full shadow-sm transition-colors">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-[14px] h-[14px]" alt="MongoDB" />
                                    <span className="text-[11px] font-semibold tracking-wider text-slate-500 dark:text-[#a1a1aa]">MONGODB</span>
                                </div>

                                <div className="flex items-center gap-2 bg-white dark:bg-[#121214] border border-slate-200 dark:border-[#27272a]/60 px-3.5 py-1.5 rounded-full shadow-sm transition-colors">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-[14px] h-[14px]" alt="Tailwind" />
                                    <span className="text-[11px] font-semibold tracking-wider text-slate-500 dark:text-[#a1a1aa]">TAILWIND CSS</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-8 flex items-center gap-4">
                                <a
                                    href="https://legal-sathi-lac.vercel.app/" target="_blank" rel="noopener noreferrer"
                                    className="group relative flex items-center gap-2 font-medium bg-[#a855f7] text-white px-6 py-2.5 rounded-full overflow-hidden transition-all hover:bg-[#8b3fd6] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                                >
                                    <span className="relative z-10 text-[14px]">Live Demo</span>
                                    <ArrowUpRight size={18} className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                            </div>

                        </div>
                    </motion.div>
                    {/* End Project 2 */}
                </div>
            </div>
        </section>
    );
};

export default Projects;
