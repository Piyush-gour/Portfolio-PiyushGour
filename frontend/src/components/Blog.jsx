import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';
import Magnetic from './Magnetic';

const articles = [
    {
        id: 1,
        title: "Micro-Frontends: Scaling React Applications at Enterprise Level",
        excerpt: "An deep dive into transitioning from a monolithic React SPA to a federated micro-frontend architecture using Webpack 5 Module Federation.",
        date: "Feb 24, 2026",
        readTime: "8 min read",
        tags: ["React", "Architecture", "Webpack"]
    },
    {
        id: 2,
        title: "Mastering Framer Motion: Physics-Based UI Animation",
        excerpt: "How to use spring physics and variants to create natural feeling, hardware-accelerated micro-interactions in modern web applications.",
        date: "Jan 15, 2026",
        readTime: "6 min read",
        tags: ["Animation", "UI/UX", "Frontend"]
    },
    {
        id: 3,
        title: "Optimizing Node.js APIs for High Throughput",
        excerpt: "Strategies for breaking the single-thread barrier: clustering, worker threads, and leveraging Redis for intelligent caching.",
        date: "Dec 02, 2025",
        readTime: "10 min read",
        tags: ["Node.js", "Backend", "Performance"]
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-20 md:py-32 bg-white dark:bg-[#09090b] transition-colors duration-300 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 text-teal-500 mb-4"
                        >
                            <BookOpen className="w-6 h-6" />
                            <span className="text-sm font-bold tracking-widest uppercase">Digital Garden</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
                        >
                            Thoughts, learnings & <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                                engineering notes.
                            </span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Magnetic>
                            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white font-medium transition-all group">
                                Read all articles
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Magnetic>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-slate-50 dark:bg-[#121214] border border-slate-200 dark:border-white/5 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/5 hover:-translate-y-2"
                        >
                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {article.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-teal-500 transition-colors">
                                    <a href="#" className="before:absolute before:inset-0">
                                        {article.title}
                                    </a>
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 line-clamp-3 mb-8">
                                    {article.excerpt}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/10 text-sm text-slate-500 dark:text-slate-400 mt-auto">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{article.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
