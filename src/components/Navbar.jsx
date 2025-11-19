import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 w-full h-20 z-50 flex items-center glass">
            <div className="container flex justify-between items-center">
                <a href="#" className="logo text-2xl font-bold text-white font-mono tracking-tighter">AM.</a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 nav-links">
                    <li><a href="#about" className="text-sm font-semibold text-slate-300 uppercase tracking-widest hover:text-white transition-colors">About</a></li>
                    <li><a href="#skills" className="text-sm font-semibold text-slate-300 uppercase tracking-widest hover:text-white transition-colors">Skills</a></li>
                    <li><a href="#projects" className="text-sm font-semibold text-slate-300 uppercase tracking-widest hover:text-white transition-colors">Work</a></li>
                    <li><a href="#contact" className="text-sm font-semibold text-slate-300 uppercase tracking-widest hover:text-white transition-colors">Contact</a></li>
                    <li>
                        <a href="/resume.pdf" className="btn-nav border border-slate-200 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <div className="md:hidden text-2xl text-white cursor-pointer" onClick={toggleMenu}>
                    <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    className={`absolute top-20 left-0 w-full bg-[#0f172a]/95 backdrop-blur-xl flex-col p-8 border-b border-white/10 md:hidden ${isOpen ? 'flex' : 'hidden'}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="flex flex-col gap-6 items-center">
                        <li><a href="#about" className="text-lg font-semibold text-slate-300 uppercase tracking-widest hover:text-white" onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a href="#skills" className="text-lg font-semibold text-slate-300 uppercase tracking-widest hover:text-white" onClick={() => setIsOpen(false)}>Skills</a></li>
                        <li><a href="#projects" className="text-lg font-semibold text-slate-300 uppercase tracking-widest hover:text-white" onClick={() => setIsOpen(false)}>Work</a></li>
                        <li><a href="#contact" className="text-lg font-semibold text-slate-300 uppercase tracking-widest hover:text-white" onClick={() => setIsOpen(false)}>Contact</a></li>
                        <li>
                            <a href="/resume.pdf" className="btn-nav border border-slate-200 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                                Resume
                            </a>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
