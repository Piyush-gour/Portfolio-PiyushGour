import React, { useState, useEffect } from 'react';
import { ChevronDown, Instagram, Facebook, Sun, Moon, Menu, X } from 'lucide-react';
import logo from '../assets/PG-LOGO.png';
import linkedinIcon from '../assets/Linkidin.svg';
import githubIcon from '../assets/Github.svg';
import profileImg from '../assets/PG-Profile.svg';
import cvPdf from '../assets/PiyushGour-CV.pdf';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [socialIndex, setSocialIndex] = useState(0);
    const [showGreeting, setShowGreeting] = useState(true);
    const [greeting, setGreeting] = useState({ text: 'Good Day', icon: '👋' });
    const { isDarkMode, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Determine time of day
        const hour = new Date().getHours();
        if (hour < 12) {
            setGreeting({ text: 'Good Morning', icon: '☀️' });
        } else if (hour < 18) {
            setGreeting({ text: 'Good Afternoon', icon: '🌤️' });
        } else {
            setGreeting({ text: 'Good Evening', icon: '🌙' });
        }

        // Hide greeting after 5 seconds to show links
        const timer = setTimeout(() => {
            setShowGreeting(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const socials = [
        { name: 'linkedin', icon: <img src={linkedinIcon} alt="LinkedIn" className="w-[22px] h-[22px]" />, bg: 'bg-[#0077B5]', url: 'https://linkedin.com/in/piyush-gour' },
        { name: 'instagram', icon: <Instagram size={22} className="text-white" />, bg: 'bg-[#E1306C]', url: '#' },
        { name: 'facebook', icon: <Facebook size={22} className="text-white fill-white" />, bg: 'bg-[#1877F2]', url: '#' },
        { name: 'github', icon: <img src={githubIcon} alt="GitHub" className="w-[22px] h-[22px] filter invert brightness-0" style={{ filter: 'brightness(0) invert(1)' }} />, bg: 'bg-[#24292e]', url: 'https://github.com/Piyush-gour' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSocialIndex((prevIndex) => (prevIndex + 1) % socials.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [socials.length]);
    return (
        <nav className="flex items-center justify-between py-4 z-50 w-full">
            {/* Left - User's Custom Logo */}
            <div className="flex items-center">
                <a href="/" className="relative group flex items-center justify-center w-[45px] h-[45px]">
                    <div className="absolute inset-0 bg-[#00d8a1] blur-md opacity-60 dark:opacity-20 group-hover:opacity-100 dark:group-hover:opacity-60 group-hover:scale-125 transition-all duration-500 rounded-full"></div>
                    <img src={logo} alt="PG Logo" className="w-[45px] h-[45px] relative z-10 drop-shadow-none dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:rotate-12 transition-all duration-500" />
                </a>
            </div>

            {/* Center - Translucent Navigation Pill */}
            <div className={`hidden lg:flex items-center justify-center bg-white/70 dark:bg-[#1c1c1e]/40 border border-slate-200 dark:border-[#ffffff10] rounded-[40px] p-1.5 shadow-xl transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${showGreeting ? 'w-[280px]' : 'w-[730px]'} h-[50px] relative overflow-hidden backdrop-blur-md`}>
                {showGreeting ? (
                    <div className="absolute inset-0 flex items-center justify-center gap-3 w-full h-full animate-[slideDown_0.6s_ease-out_forwards]">
                        <span className="text-xl">{greeting.icon}</span>
                        <span className="text-lg font-medium tracking-wide text-slate-800 dark:text-[#f4f4f5] whitespace-nowrap">{greeting.text}</span>
                    </div>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-between w-full h-full px-1.5">
                        <a href="#home" className="text-sm font-medium text-slate-900 dark:text-[#f4f4f5] bg-slate-200 dark:bg-[#3a3a3c]/60 px-5 py-2.5 rounded-full transition-colors relative z-10 opacity-0 animate-[slideDown_0.6s_ease-out_forwards] delay-100">
                            Home
                        </a>
                        <a href="#about" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-[#a1a1aa] dark:hover:text-[#f4f4f5] px-5 py-2.5 rounded-full transition-colors opacity-0 animate-[slideDown_0.6s_ease-out_forwards] delay-200">
                            About
                        </a>
                        <a href="#skills" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-[#a1a1aa] dark:hover:text-[#f4f4f5] px-5 py-2.5 rounded-full transition-colors opacity-0 animate-[slideDown_0.6s_ease-out_forwards] delay-[300ms]">
                            Skills
                        </a>
                        <a href="#projects" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-[#a1a1aa] dark:hover:text-[#f4f4f5] px-5 py-2.5 rounded-full transition-colors opacity-0 animate-[slideDown_0.6s_ease-out_forwards] delay-[400ms]">
                            Projects
                        </a>
                        <a href="#contact" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-[#a1a1aa] dark:hover:text-[#f4f4f5] px-5 py-2.5 rounded-full transition-colors opacity-0 animate-[slideDown_0.6s_ease-out_forwards] delay-[500ms]">
                            Contact
                        </a>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-[#27272a]/80 dark:hover:bg-[#3f3f46]/60 transition-colors ml-1 opacity-0 animate-[slideDown_0.6s_ease-out_forwards] delay-[550ms]"
                            aria-label="Toggle Theme"
                        >
                            {isDarkMode ? <Sun size={16} className="text-[#a1a1aa] hover:text-[#f4f4f5]" /> : <Moon size={16} className="text-slate-500 hover:text-slate-900" />}
                        </button>

                        {/* Download Resume Button inside Pill */}
                        <a href={cvPdf} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-[#a1a1aa] bg-slate-100 hover:bg-slate-200 dark:bg-[#27272a]/60 dark:hover:bg-[#3f3f46]/60 px-6 py-2.5 ml-1 rounded-full transition-colors border border-transparent opacity-0 animate-[slideDown_0.6s_ease-out_forwards] delay-[600ms]">
                            Download Resume
                        </a>
                    </div>
                )}
            </div>

            {/* Right - Profile & Social (from Figma final design) */}
            <div className="flex items-center bg-white dark:bg-[#2d2828] rounded-[10px] p-1.5 shadow-lg border border-slate-200 dark:border-[#ffffff05] transition-colors duration-300">
                <div className="w-[40px] h-[40px] rounded-[6px] relative overflow-hidden">
                    {socials.map((social, idx) => {
                        let isCurrent = idx === socialIndex;
                        let isPrevious = idx === (socialIndex === 0 ? socials.length - 1 : socialIndex - 1);

                        let placementClass = '-translate-y-full z-0 opacity-0';
                        if (isCurrent) {
                            placementClass = 'translate-y-0 z-10 opacity-100 transition-all duration-500 ease-in-out';
                        } else if (isPrevious) {
                            placementClass = 'translate-y-full z-10 opacity-100 transition-all duration-500 ease-in-out';
                        }

                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className={`absolute inset-0 flex items-center justify-center ${social.bg} hover:opacity-90 ${placementClass}`}
                            >
                                {social.icon}
                            </a>
                        );
                    })}
                </div>

                <div
                    className="w-[1.5px] h-[18px] mx-3 opacity-60 transition-colors duration-500"
                    style={{ backgroundColor: socials[socialIndex].bg.replace('bg-[', '').replace(']', '') }}
                ></div>

                <div className="w-[40px] h-[40px] flex items-center justify-center">
                    <div className="w-full h-full rounded-[6px] overflow-hidden">
                        <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
                className="relative lg:hidden ml-4 p-2 text-slate-800 dark:text-white z-50 transition-transform duration-300 hover:scale-110"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Mobile Menu"
            >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-[75px] z-40 bg-white/90 dark:bg-[#030614]/90 backdrop-blur-xl flex flex-col justify-start px-8 pt-12 pb-20 overflow-y-auto animate-[slideDown_0.4s_ease-out_forwards]">
                    {/* Decorative blurred blobs */}
                    <div className="absolute top-10 -right-20 w-64 h-64 bg-[#00d8a1]/10 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
                    <div className="absolute bottom-20 -left-20 w-72 h-72 bg-[#0077B5]/10 rounded-full blur-3xl -z-10 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

                    <div className="flex flex-col gap-6 w-full max-w-md mx-auto relative mt-4">
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="group flex items-center justify-between text-5xl font-extrabold text-slate-800 dark:text-white py-3 relative overflow-hidden"
                                style={{ animation: `slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1 + 0.1}s forwards`, opacity: 0 }}
                            >
                                <span className="relative z-10 transition-transform duration-500 ease-out group-hover:translate-x-4">
                                    {item}
                                </span>
                                <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out text-[#00d8a1] group-hover:-translate-x-2 text-4xl">
                                    ↗
                                </span>
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-200 dark:bg-white/5 transition-all duration-500 group-hover:bg-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00d8a1] to-transparent transition-all duration-500 group-hover:w-full"></div>
                            </a>
                        ))}

                        <div
                            className="flex items-center justify-between mt-8 pt-8 border-t border-slate-200 dark:border-white/5"
                            style={{ animation: `slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards`, opacity: 0 }}
                        >
                            <span className="text-xl font-medium text-slate-500 dark:text-slate-400">Theme</span>
                            <button
                                onClick={toggleTheme}
                                className="relative group flex items-center justify-center w-[54px] h-[54px] rounded-full bg-slate-100 dark:bg-[#1c1c1e] border border-slate-200 dark:border-white/5 transition-all duration-300 hover:scale-110 shadow-lg"
                            >
                                <div className="absolute inset-0 rounded-full bg-[#00d8a1]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                {isDarkMode ? <Sun size={24} className="text-[#00d8a1] relative z-10" /> : <Moon size={24} className="text-slate-800 relative z-10" />}
                            </button>
                        </div>

                        <a
                            href={cvPdf}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="relative group mt-10 overflow-hidden rounded-2xl w-full shadow-[0_10px_30px_rgba(0,216,161,0.2)] dark:shadow-[0_10px_30px_rgba(0,216,161,0.1)]"
                            style={{ animation: `slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards`, opacity: 0 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00d8a1] to-[#00b386] transition-transform duration-500 group-hover:scale-105"></div>
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_infinite]"></div>
                            <div className="relative flex items-center justify-center text-xl font-bold text-white py-5 px-6 transition-transform duration-300">
                                <span>Download Resume</span>
                                <span className="ml-3 group-hover:translate-y-1 transition-transform duration-300">↓</span>
                            </div>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
