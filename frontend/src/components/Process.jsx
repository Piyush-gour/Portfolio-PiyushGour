import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, LayoutTemplate, Code2, Bug, Rocket } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Discovery & Strategy",
        description: "Understanding requirements, defining user personas, and outlining the technical scope to ensure business goals are met.",
        icon: <Lightbulb className="w-6 h-6 text-teal-400" />,
        color: "from-teal-500/20 to-teal-500/5",
        borderColor: "border-teal-500/30"
    },
    {
        id: 2,
        title: "Architecture & Design",
        description: "Drafting the database schema, API contracts, and creating high-fidelity wireframes for a seamless user experience.",
        icon: <LayoutTemplate className="w-6 h-6 text-purple-400" />,
        color: "from-purple-500/20 to-purple-500/5",
        borderColor: "border-purple-500/30"
    },
    {
        id: 3,
        title: "Agile Development",
        description: "Writing clean, modular, and scalable code with React/Next.js on the frontend and Node.js/Express on the backend.",
        icon: <Code2 className="w-6 h-6 text-blue-400" />,
        color: "from-blue-500/20 to-blue-500/5",
        borderColor: "border-blue-500/30"
    },
    {
        id: 4,
        title: "Rigorous QA & Testing",
        description: "Implementing automated test suites and performing cross-browser manual testing to squash bugs before they reach production.",
        icon: <Bug className="w-6 h-6 text-orange-400" />,
        color: "from-orange-500/20 to-orange-500/5",
        borderColor: "border-orange-500/30"
    },
    {
        id: 5,
        title: "Deployment & Maintenance",
        description: "Setting up CI/CD pipelines, deploying on cloud infrastructure like AWS or Vercel, and monitoring application health.",
        icon: <Rocket className="w-6 h-6 text-rose-400" />,
        color: "from-rose-500/20 to-rose-500/5",
        borderColor: "border-rose-500/30"
    }
];

const Process = () => {
    return (
        <section id="process" className="py-20 md:py-32 bg-slate-50 dark:bg-black/40 relative overflow-hidden transition-colors duration-300">
            {/* Background Gradient Mesh */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 dark:bg-teal-900/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0"></div>

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight"
                    >
                        My Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400 relative inline-block">Process</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        Great software isn't just written—it's engineered. Here is how I transform abstract ideas into scalable, production-ready applications.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* The vertical connector line */}
                    <div className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-teal-500/20 via-purple-500/20 to-transparent -translate-x-1/2 z-0 hidden sm:block"></div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={step.id} className={`relative flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}>

                                    {/* Timeline Node/Icon */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                                        className="absolute left-0 sm:left-1/2 w-[76px] h-[76px] -translate-x-0 sm:-translate-x-1/2 flex items-center justify-center z-10 hidden sm:flex"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-white dark:bg-[#121214] border border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-center relative group">
                                            <div className="absolute inset-0 rounded-full bg-slate-900/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            {step.icon}
                                        </div>
                                    </motion.div>

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                        className={`w-full sm:w-[calc(50%-60px)] ${isEven ? 'sm:pl-0' : 'sm:pr-0'} mt-8 sm:mt-0`}
                                    >
                                        <div className={`p-8 rounded-2xl bg-white/60 dark:bg-[#1a1a1e]/60 backdrop-blur-lg border ${step.borderColor} hover:bg-white dark:hover:bg-[#1e1e24] transition-all duration-300 shadow-lg hover:shadow-xl group`}>
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 border border-white/10 sm:hidden`}>
                                                {step.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-teal-500 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
