import React from 'react';
import logo from '../assets/PG-LOGO.png';
import linkedinIcon from '../assets/Linkidin.svg';
import facebookIcon from '../assets/Fackbook.svg';
import twitterIcon from '../assets/Twitter.svg';
import githubIcon from '../assets/Github.svg';
import { ArrowUpRight } from 'lucide-react';
import LiveActivity from './LiveActivity';

const Footer = () => {
    return (
        <footer className="relative w-full bg-slate-50 dark:bg-[#030614] pt-16 pb-8 overflow-hidden z-20 transition-colors duration-300">

            {/* Pulsing Glowing Background Orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00d8a1]/10 blur-[130px] rounded-full pointer-events-none animate-pulse-glow z-0"></div>

            <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">

                {/* Massive Animated CTA */}
                <div className="w-full md:w-auto">
                    <h2 className="text-3xl sm:text-[40px] md:text-[54px] lg:text-[72px] font-black leading-[1.1] tracking-tight transition-colors">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r hover:bg-gradient-to-l from-[#0ea5e9] to-[#00d8a1] transition-all duration-700">Let's create</span><br />
                        <span className="text-slate-900 hover:text-slate-700 dark:text-white dark:hover:text-[#f4f4f5] transition-colors">something great.</span>
                    </h2>
                </div>

                {/* Stylish Action Link */}
                <div className="shrink-0 mb-4 md:mb-6">
                    <a href="#contact" className="group flex items-center gap-4 text-slate-800 dark:text-white hover:text-[#00d8a1] text-[18px] md:text-[22px] font-medium transition-colors border-b-2 border-[#00d8a1] pb-2 overflow-hidden relative">
                        Got an idea? Reach out
                        <div className="relative flex overflow-hidden w-6 h-6">
                            <ArrowUpRight className="absolute inset-0 group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-300" />
                            <ArrowUpRight className="absolute inset-0 -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 text-[#00d8a1]" />
                        </div>
                        {/* Hover line fill */}
                        <div className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-[#0ea5e9] group-hover:w-full transition-all duration-500 ease-out"></div>
                    </a>
                </div>
            </div>

            {/* Main Creative Grid */}
            <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-20 border-t border-slate-300 dark:border-[#ffffff15] pt-16 transition-colors">

                    {/* Brand & Mission Statement */}
                    <div className="md:col-span-5 flex flex-col items-start lg:pr-10">
                        <div className="relative group cursor-pointer w-[60px] h-[60px] mb-8">
                            <div className="absolute inset-0 bg-[#00d8a1] blur-md opacity-60 dark:opacity-20 group-hover:opacity-100 dark:group-hover:opacity-60 group-hover:scale-125 transition-all duration-500 rounded-full"></div>
                            <img src={logo} alt="PG Logo" className="w-[60px] h-[60px] relative z-10 drop-shadow-none dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:rotate-12 transition-all duration-500" />
                        </div>
                        <p className="text-slate-600 dark:text-[#a1a1aa] text-[15px] lg:text-[16px] leading-[1.8] font-light max-w-[340px] transition-colors mb-8">
                            I'm Piyush - A Full-Stack Developer, Freelancer & Problem Solver. I specialize in crafting digital experiences that are visually stunning and highly functional. Let's make your vision a reality.
                        </p>
                        <LiveActivity />
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16 w-full">
                        {/* Discover Menu */}
                        <div className="flex flex-col gap-5">
                            <h4 className="text-slate-800 dark:text-white text-[12px] font-bold tracking-[0.25em] mb-4 uppercase opacity-50 dark:opacity-40 transition-colors">Navigation</h4>
                            {['Home', 'About', 'Education', 'Skills', 'Projects', 'Experience'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-600 hover:text-slate-900 dark:text-[#a1a1aa] dark:hover:text-white text-[15px] font-medium hover:translate-x-3 transition-all duration-300 w-fit flex items-center group">
                                    <span className="w-0 h-[1px] bg-[#00d8a1] mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300 hidden sm:block"></span>
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Social Connect Menu */}
                        <div className="flex flex-col gap-5">
                            <h4 className="text-slate-800 dark:text-white text-[12px] font-bold tracking-[0.25em] mb-4 uppercase opacity-50 dark:opacity-40 transition-colors">Connect</h4>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-[#a1a1aa] hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9] text-[15px] font-medium hover:translate-x-3 transition-all duration-300 w-fit">LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-[#a1a1aa] hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9] text-[15px] font-medium hover:translate-x-3 transition-all duration-300 w-fit">Twitter</a>
                            <a href="https://github.com/Piyush-gour" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-[#a1a1aa] hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9] text-[15px] font-medium hover:translate-x-3 transition-all duration-300 w-fit">GitHub</a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-[#a1a1aa] hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9] text-[15px] font-medium hover:translate-x-3 transition-all duration-300 w-fit">Facebook</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Giant Background Typography Watermark */}
            <div className="w-full relative flex justify-center items-center pointer-events-none select-none z-0 overflow-hidden mt-6 sm:mt-10 mb-0 sm:mb-[-5vw] transition-colors">
                <h1 className="text-[16vw] sm:text-[14vw] font-black text-slate-200 dark:text-[#ffffff04] tracking-tighter leading-[0.8] whitespace-nowrap transition-colors">
                    PIYUSH GOUR
                </h1>
                <h1 className="absolute inset-0 text-[16vw] sm:text-[14vw] font-black text-transparent bg-clip-text bg-gradient-to-t from-slate-200/50 dark:from-[#ffffff02] to-transparent tracking-tighter leading-[0.8] whitespace-nowrap blur-[1px] transition-colors text-center">
                    PIYUSH GOUR
                </h1>
            </div>

            {/* Bottom Floating Socials & Copyright */}
            <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 flex flex-col-reverse sm:flex-row justify-between items-center gap-6 sm:gap-8 pt-4 pb-4 sm:pb-0">
                <p className="text-slate-500 dark:text-[#71717a] text-[12px] md:text-[13px] tracking-widest uppercase font-semibold transition-colors mt-2 sm:mt-0 text-center sm:text-left">
                    © {new Date().getFullYear()} Piyush Gour. All Rights Reserved.
                </p>
                <div className="flex items-center gap-6 sm:gap-8 bg-slate-200/50 dark:bg-[#ffffff05] py-3 px-6 sm:py-3.5 sm:px-8 rounded-full border border-slate-300 dark:border-[#ffffff10] backdrop-blur-sm transition-colors">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group">
                        <img src={linkedinIcon} alt="LinkedIn" className="w-[22px] h-[22px] invert dark:invert-0 opacity-60 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:scale-125 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="group">
                        <img src={facebookIcon} alt="Facebook" className="w-[22px] h-[22px] invert dark:invert-0 opacity-60 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:scale-125 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="group">
                        <img src={twitterIcon} alt="Twitter" className="w-[22px] h-[22px] invert dark:invert-0 opacity-60 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:scale-125 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]" />
                    </a>
                    <a href="https://github.com/Piyush-gour" target="_blank" rel="noreferrer" className="group">
                        <img src={githubIcon} alt="GitHub" className="w-[22px] h-[22px] invert dark:invert-0 brightness-0 dark:brightness-200 opacity-60 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:scale-125 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]" />
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
