import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'HTML5', icon: 'fa-html5' },
    { name: 'CSS3', icon: 'fa-css3-alt' },
    { name: 'JavaScript', icon: 'fa-js' },
    { name: 'React', icon: 'fa-react' },
    { name: 'Node.js', icon: 'fa-node' },
    { name: 'Git', icon: 'fa-git-alt' },
    { name: 'SQL', icon: 'fa-database' },
    { name: 'Design', icon: 'fa-palette' },
];

const Skills = () => {
    return (
        <section id="skills" className="section py-20">
            <div className="container">
                <h2 className="section-title text-center text-4xl font-bold mb-12 text-white">My Expertise</h2>
                <div className="skills-grid grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-card glass-hover p-8 flex flex-col items-center justify-center text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <i className={`fab ${skill.icon} text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400`}></i>
                            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
