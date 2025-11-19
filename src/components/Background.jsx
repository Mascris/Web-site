import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-[#0f172a]">
            <motion.div
                className="absolute rounded-full opacity-60 blur-[80px]"
                style={{
                    background: 'var(--gradient-1)',
                    top: '-10%',
                    left: '-10%',
                    width: '50vw',
                    height: '50vw',
                }}
                animate={{
                    x: [0, 50, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            />
            <motion.div
                className="absolute rounded-full opacity-60 blur-[80px]"
                style={{
                    background: 'var(--gradient-2)',
                    bottom: '-10%',
                    right: '-10%',
                    width: '60vw',
                    height: '60vw',
                }}
                animate={{
                    x: [0, -50, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 5,
                }}
            />
            <motion.div
                className="absolute rounded-full opacity-60 blur-[80px]"
                style={{
                    background: 'var(--gradient-3)',
                    top: '40%',
                    left: '40%',
                    width: '40vw',
                    height: '40vw',
                }}
                animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 2,
                }}
            />
        </div>
    );
};

export default Background;
