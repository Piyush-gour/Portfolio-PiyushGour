import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Code2, Check, Copy } from 'lucide-react';

SyntaxHighlighter.registerLanguage('javascript', js);

const codeSnippet = `// Custom React Hook for complex intersecting observer logic
import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && options.triggerOnce) {
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [options]);

  return [targetRef, isIntersecting];
};`;

const CodeShowcase = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-20 bg-slate-50 dark:bg-black/40 relative border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <div className="w-full md:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 text-teal-500 mb-6">
                                <Code2 className="w-6 h-6" />
                                <span className="text-sm font-bold tracking-widest uppercase">Code Quality</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                                Clean, Scalable,<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                                    Maintainable Code.
                                </span>
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                                I don't just build things that work. I build systems that last. My code is strongly typed, thoroughly tested, and documented for team success.
                            </p>
                        </motion.div>
                    </div>

                    {/* Code Window Editor */}
                    <div className="w-full md:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="rounded-2xl overflow-hidden bg-[#1e1e1e] border border-[#333] shadow-2xl"
                        >
                            {/* Mac OS Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-[#333]">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-xs text-gray-400 font-mono">useIntersectionObserver.js</div>

                                <button
                                    onClick={handleCopy}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    title="Copy Code"
                                >
                                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>

                            {/* Code Area */}
                            <div className="p-4 text-sm md:text-base cursor-text overflow-x-auto">
                                <SyntaxHighlighter
                                    language="javascript"
                                    style={atomOneDark}
                                    customStyle={{ background: 'transparent', padding: 0, margin: 0 }}
                                    showLineNumbers={true}
                                    wrapLines={true}
                                >
                                    {codeSnippet}
                                </SyntaxHighlighter>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CodeShowcase;
