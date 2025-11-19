import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about.png';

const About = () => {
    return (
        <section id="about" className="section py-20">
            <div className="container">
                <motion.div
                    className="glass-card about-card p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="about-content">
                        <div className="about-text">
                            <h2 className="section-title text-3xl font-bold mb-6 text-white">About Me</h2>
                            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                                I'm a creative technologist with a knack for building immersive web applications. My journey began with a curiosity for how things work on the internet, and it has evolved into a career of solving complex problems with elegant code.
                            </p>
                            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                                I thrive in the intersection of design and engineering, ensuring that every pixel serves a purpose and every line of code is efficient.
                            </p>
                            <div className="tech-stack flex flex-wrap gap-3">
                                {['JavaScript', 'React', 'Node.js', 'Python', 'UI/UX Design'].map((tech) => (
                                    <span key={tech} className="bg-white/10 px-4 py-2 rounded-lg text-sm font-mono text-blue-300 border border-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="about-img-container flex justify-center">
                        <div className="about-img w-72 h-72 rounded-2xl overflow-hidden relative rotate-3 border-2 border-white/20 shadow-2xl">
                            <img src={aboutImg} alt="Mascris" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
