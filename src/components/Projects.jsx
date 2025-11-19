import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
    {
        title: 'Neon Dashboard',
        description: 'A futuristic analytics dashboard with real-time data visualization and a customizable interface.',
        tags: ['React', 'D3.js', 'Firebase'],
        image: project1,
    },
    {
        title: 'E-Commerce Redesign',
        description: 'A complete overhaul of an online store focusing on user experience, speed, and conversion optimization.',
        tags: ['Vue.js', 'Tailwind', 'Stripe'],
        image: project2,
    },
    {
        title: 'AI Chat Interface',
        description: 'A clean, responsive chat interface for an AI assistant, featuring markdown support and code highlighting.',
        tags: ['TypeScript', 'Next.js', 'OpenAI API'],
        image: project3,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section py-20">
            <div className="container">
                <h2 className="section-title text-center text-4xl font-bold mb-12 text-white">Featured Projects</h2>
                <div className="projects-grid grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="project-card glass-card flex flex-col"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <div className="project-image h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                            </div>
                            <div className="project-info p-6 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-slate-400 mb-6 text-sm flex-grow">{project.description}</p>
                                <div className="project-tags flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="project-links flex gap-4 mt-auto">
                                    <a href="#" className="btn-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="#" className="btn-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
