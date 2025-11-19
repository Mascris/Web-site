import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section py-20">
            <div className="container">
                <motion.div
                    className="glass-card contact-card text-center p-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-3xl font-bold mb-6 text-white">Let's Create Something Amazing</h2>
                    <p className="contact-text text-slate-300 mb-10 text-lg leading-relaxed">
                        Have a project in mind or just want to say hello? I'm always open to discussing new ideas and opportunities.
                    </p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amineserrar20@gmail.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4 inline-block hover:scale-105 transition-transform">
                        Get In Touch
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
