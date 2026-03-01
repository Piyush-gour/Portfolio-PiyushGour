import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Banner from './components/Banner';
import Process from './components/Process';
import Blog from './components/Blog';
import CodeShowcase from './components/CodeShowcase';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import earthImg from './assets/NEW-BG.png';
import { ThemeProvider } from './context/ThemeContext';
import StarsBackground from './components/StarsBackground';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <BackToTop />
      <main className="bg-white dark:bg-[#000000] text-slate-900 dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">

        {/* Hero Section Wrapper - Takes full screen height */}
        <div className="relative w-full min-h-[100vh] flex flex-col items-center">
          <StarsBackground />

          <div className="w-full px-4 sm:px-10 md:px-14 lg:px-28 flex flex-col pt-6 relative z-10 flex-1">
            <Navbar />
            <Hero />
          </div>

          {/* Background Earth Image & Flair fixed at the bottom of Hero container */}
          <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center opacity-90 pointer-events-none z-0">
            {/* Colorful Glowing Flair */}
            <div className="absolute top-[30%] w-[80%] max-w-[1200px] h-[400px] bg-gradient-to-r from-purple-600/40 via-blue-500/30 to-teal-400/40 blur-[130px] rounded-[100%] animate-pulse-glow z-0"></div>

            {/* Moon Image positioned at the baseline */}
            <img src={earthImg} alt="Earth Background" className="w-[180%] md:w-[130%] max-w-[2000px] h-auto object-cover relative z-10 translate-y-[30%]" />
          </div>
        </div>

        {/* About, Skills & Projects Sections - Renders over the overflowing planet bottom */}
        <div className="relative z-20 bg-white dark:bg-black w-full transition-colors duration-300">
          <About />
          <Education />
          <Skills />
          <Banner />
          <Process />
          <Blog />
          <CodeShowcase />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
