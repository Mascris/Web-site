import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-20">
            <div className="container">
                <motion.div
                    className="max-w-3xl mx-auto text-center glass-panel"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.p
                        className="hero-subtitle text-blue-500 font-mono font-semibold mb-4 uppercase tracking-widest"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Welcome to my portfolio
                    </motion.p>
                    <motion.h1
                        className="hero-title text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        I craft <span className="gradient-text">digital experiences</span> that matter.
                    </motion.h1>
                    <motion.p
                        className="hero-text text-lg text-slate-400 mb-10 max-w-xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Hi, I'm Mascris. A passionate developer and designer transforming ideas into stunning, functional realities.
                    </motion.p>
                    <motion.div
                        className="hero-buttons flex gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <a href="#projects" className="btn-primary">View My Work</a>
                        <a href="#contact" className="btn-secondary">Contact Me</a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
