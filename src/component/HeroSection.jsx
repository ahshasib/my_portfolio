import React from 'react';
import { motion } from 'framer-motion';
import Wavify from 'react-wavify';
import { Typewriter } from 'react-simple-typewriter';

const rainArray = Array.from({ length: 100 });

const HeroSection = () => {
    return (
        <div className="relative h-screen bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
            {/* Rain Animation */}
            {rainArray.map((_, index) => {
                const left = Math.random() * 100;
                const height = 10 + Math.random() * 30;
                const duration = 2 + Math.random() * 2.5;
                const delay = Math.random() * 3;
                const opacity = 0.3 + Math.random() * 0.4;
                const blur = Math.random() > 0.7 ? 'blur-sm' : '';
                const color = Math.random() > 0.5 ? 'bg-cyan-200' : 'bg-cyan-300';

                return (
                    <motion.div
                        key={index}
                        className={`absolute top-0 w-0.5 ${color} ${blur}`}
                        style={{
                            left: `${left}vw`,
                            height: `${height}px`,
                            opacity,
                        }}
                        initial={{ y: -100 }}
                        animate={{ y: '85vh', opacity: [opacity, opacity * 0.5, 0] }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            delay,
                            ease: 'easeIn',
                        }}
                    />
                );
            })}

            {/* Hero Title */}
            <div className="relative z-30 h-full flex flex-col justify-center items-center text-white text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 tracking-wide font-mono"
                >
                    Hasibul Islam
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-4 text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 tracking-wide font-mono"
                >
                    <Typewriter
                        words={['Frontend Developer', 'MERN Stack Developer']}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="text-sm w-[80%] md:w-[35%] pt-5 md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 tracking-wide font-mono"
                >
                    Transforming ideas into interactive realities—I’m a frontend developer
                    who loves making the web a better place
                </motion.p>

                <a
                    href="/your-resume.pdf"
                    download
                    className="group relative mt-8 inline-flex items-center gap-2 px-6 py-3 border-2 border-transparent bg-slate-800 text-cyan-300 font-mono font-bold rounded-full overflow-hidden scale-105 hover:text-white transition-all duration-300"
                >
                    {/* Spinning border background */}
                    <span className="absolute inset-0 z-0 rounded-md border border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-spin-slow"></span>

                    {/* Inner mask to hide the gradient background */}
                    <span className="absolute inset-0 z-0 rounded-md bg-slate-800"></span>

                    {/* Button Content */}
                    <span className="relative z-10 flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-cyan-300 group-hover:text-white transition"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l3-3m-3 3l-3-3m0-9h6a2 2 0 012 2v4H9V6a2 2 0 012-2z"
                            />
                        </svg>
                        Resume
                    </span>
                </a>


                {/* <motion.div
                    className="mt-4 w-24 h-1 bg-cyan-400 rounded-full shadow-md"
                    animate={{
                        scaleX: [1, 1.4, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                /> */}
            </div>

            {/* Realistic Floating Boat */}
            <motion.img
                src="https://i.ibb.co/39WyfTpV/vecteezy-wooden-vintage-ship-clipart-design-illustration-9379359.png"
                alt="Real Boat"
                className="absolute bottom-[75px] left-1/2 -translate-x-1/2 w-24 z-20"
                animate={{
                    y: [0, -6, 0],
                    rotate: [0, -2, 2, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Wave Animation */}
            <div className="absolute bottom-0 w-full z-10">
                <Wavify
                    fill="#0891b2"
                    paused={false}
                    options={{
                        height: 40,
                        amplitude: 25,
                        speed: 0.2,
                        points: 6,
                    }}
                    style={{ transform: 'translateY(10px)' }}
                />
            </div>

            {/* Gradient Mask */}
            <div className="absolute bottom-0 w-full h-[15vh] bg-gradient-to-t from-slate-900 to-transparent z-20 pointer-events-none" />
        </div>
    );
};

export default HeroSection;
