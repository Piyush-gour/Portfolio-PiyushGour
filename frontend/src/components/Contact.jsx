import React, { useState, useEffect, useRef } from 'react';
import { Zap, ArrowRight, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isAvailable, setIsAvailable] = useState(true);
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    useEffect(() => {
        const checkAvailability = () => {
            const hour = new Date().getHours();
            // Available from 9 AM (9) to 7 PM (19)
            if (hour >= 19 || hour < 9) {
                setIsAvailable(false);
            } else {
                setIsAvailable(true);
            }
        };

        checkAvailability();
        const availInterval = setInterval(checkAvailability, 60000); // Check every minute

        return () => clearInterval(availInterval);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Replace these with your actual EmailJS credentials later
        // Service ID, Template ID, Public Key
        emailjs
            .sendForm(
                'Piyush-gour2404',
                'template_5sejt4l',
                formRef.current,
                { publicKey: 'S83iuuAUm0UXwPE6S' }
            )
            .then(
                () => {
                    setIsSubmitting(false);
                    setSubmitStatus('success');
                    formRef.current.reset();
                    setTimeout(() => setSubmitStatus(null), 5000);
                },
                (error) => {
                    setIsSubmitting(false);
                    setSubmitStatus('error');
                    console.log('FAILED...', error.text);
                    setTimeout(() => setSubmitStatus(null), 5000);
                }
            );
    };

    return (
        <section id="contact" className="relative w-full pt-16 sm:pt-24 bg-white dark:bg-black flex justify-center z-20 transition-colors duration-300">
            {/* The Main CTA Card Container */}
            <div className="w-full bg-gradient-to-b from-slate-100 dark:from-[#0b1626] to-slate-50 dark:to-[#030614] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 flex flex-col items-center text-center relative overflow-hidden border-t border-slate-200 dark:border-[#ffffff05] shadow-none dark:shadow-[0_0_50px_rgba(0,0,0,0.4)] transition-colors">

                {/* Subtle Teal Glow behind icon */}
                <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#00d8a1]/10 blur-[100px] rounded-full pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#00d8a1] flex items-center justify-center mb-6 sm:mb-8 shadow-[0_0_25px_rgba(0,216,161,0.4)] z-10 relative"
                >
                    <Zap className="text-white w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#00d8a1] mb-4 sm:mb-5 z-10 relative tracking-wide"
                >
                    Ready to Start Your Project?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-slate-600 dark:text-[#94a3b8] text-[14px] sm:text-[15px] md:text-[17px] max-w-[650px] mb-8 sm:mb-12 z-10 relative leading-relaxed font-light transition-colors"
                >
                    Let's collaborate and bring your ideas to life with cutting-edge technology and creative solutions. Fill out the form below.
                </motion.p>

                {/* EmailJS Contact Form */}
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="w-full max-w-md z-10 relative flex flex-col gap-4 text-left"
                >
                    <div className="flex flex-col gap-1">
                        <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-[#a1a1aa] uppercase tracking-wider pl-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="John Doe"
                            className="w-full bg-white dark:bg-[#18181b]/50 border border-slate-300 dark:border-[#3f3f46] text-slate-900 dark:text-white px-4 py-3 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#00d8a1] focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-[#a1a1aa] uppercase tracking-wider pl-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            className="w-full bg-white dark:bg-[#18181b]/50 border border-slate-300 dark:border-[#3f3f46] text-slate-900 dark:text-white px-4 py-3 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-[#a1a1aa] uppercase tracking-wider pl-1">Message</label>
                        <textarea
                            name="message"
                            required
                            rows={4}
                            placeholder="Tell me about your project..."
                            className="w-full bg-white dark:bg-[#18181b]/50 border border-slate-300 dark:border-[#3f3f46] text-slate-900 dark:text-white px-4 py-3 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#00d8a1] focus:border-transparent transition-all resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex justify-center items-center gap-3 w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-[#f4f4f5] text-white dark:text-black px-8 py-3.5 rounded-[12px] transition-all duration-300 mt-2 text-[14px] font-bold tracking-[0.1em] disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-slate-900/10 dark:shadow-white/10"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                SENDING...
                            </>
                        ) : (
                            <>
                                SEND MESSAGE
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className="flex items-center justify-center gap-2 mt-2 text-green-600 dark:text-green-400 font-medium text-sm bg-green-50 dark:bg-green-400/10 py-2 rounded-[8px] border border-green-200 dark:border-green-400/20">
                            <CheckCircle2 size={16} />
                            Message sent successfully!
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="flex items-center justify-center gap-2 mt-2 text-red-600 dark:text-red-400 font-medium text-sm bg-red-50 dark:bg-red-400/10 py-2 rounded-[8px] border border-red-200 dark:border-red-400/20">
                            <XCircle size={16} />
                            Failed to send. Please try again later.
                        </div>
                    )}
                </motion.form>

                {/* Bottom Status Group */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-slate-500 dark:text-[#71717a] text-[13px] md:text-[14px] z-10 relative transition-colors"
                >
                    <div className="flex items-center gap-2">
                        <div className="relative flex items-center justify-center w-2.5 h-2.5">
                            <span className={`absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping ${isAvailable ? 'bg-green-500 dark:bg-green-400' : 'bg-red-500 dark:bg-red-400'}`}></span>
                            <span className={`relative inline-flex w-2 h-2 rounded-full ${isAvailable ? 'bg-green-600 dark:bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]' : 'bg-red-600 dark:bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]'}`}></span>
                        </div>
                        {isAvailable ? 'Available for Work' : 'Unavailable for work from 11 PM to 9 AM'}
                    </div>
                    {isAvailable && <span className="hidden sm:inline-block text-slate-300 dark:text-[#3f3f46] transition-colors">|</span>}
                    {isAvailable && <span>Response within 24 hours</span>}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
