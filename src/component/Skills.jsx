import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap",
    "Node.js","Next.js", "MongoDB", "Express.js", "Git", "GitHub", "Firebase", "Figma"
];

const Skills = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 600]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    const bubbleArray = Array.from({ length: 40 });

    return (
        <div className=" relative min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900 overflow-hidden text-white px-4 flex flex-col items-center pt-56">

            {/* 🔽 Top shadow to blend with About section */}
            <div className="absolute top-0 w-full h-[15vh] bg-gradient-to-b from-slate-900 to-transparent z-20 pointer-events-none" />

            {/* 🔵 Realistic Bubbles rising */}
            {bubbleArray.map((_, index) => {
                const size = 8 + Math.random() * 25;
                const left = Math.random() * 100;
                const duration = 6 + Math.random() * 6;
                const delay = Math.random() * 5;
                const opacity = 0.15 + Math.random() * 0.3;
                const blur = Math.random() > 0.3 ? 'blur-sm' : '';
                const xDrift = Math.random() * 30 - 15;

                return (
                    <motion.div
                        key={index}
                        className={`absolute bottom-0 rounded-full bg-cyan-200 ${blur}`}
                        style={{
                            left: `${left}vw`,
                            width: `${size}px`,
                            height: `${size}px`,
                            opacity,
                        }}
                        initial={{ y: 0, x: 0, scale: 0.8 }}
                        animate={{
                            y: `-${90 + Math.random() * 10}vh`,
                            x: xDrift,
                            scale: [0.8, 1, 1.2],
                            opacity: [opacity, opacity * 0.6, 0],
                        }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            delay,
                            ease: 'easeInOut',
                        }}
                    />
                );
            })}

            {/* 🧠 Heading */}
            <p className="text-sm text-center py-2 md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 tracking-wide font-mono">I constantly try to improve</p>
            <h2 className="text-5xl z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 tracking-wide font-mono">
                My Skills
            </h2>
            <motion.div
          className="mt-2 w-24 h-0.5 bg-cyan-400 rounded-full shadow-md"
          animate={{
            scaleX: [1, 1.4, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

            {/* Skill Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-16 max-w-4xl mb-20 z-10">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="group relative inline-flex items-center px-5 py-2 border-2 border-transparent bg-slate-800 text-cyan-300 font-mono font-semibold rounded-full overflow-hidden transition-all duration-300 z-10"
                    >
                        {/* Spinning border background */}
                        <span className="absolute inset-0 z-0 rounded-full border border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-spin-slow"></span>

                        {/* Inner background mask */}
                        <span className="absolute inset-0 z-0 rounded-full bg-slate-800"></span>

                        {/* Text */}
                        <span className="relative z-10 group-hover:text-white transition">{skill}</span>
                    </motion.div>
                ))}

            </div>


            {/* Diver Image with Scroll Animation */}
            <motion.img
                src="./db4.png"
                alt="Diver"
                style={{ y, rotate }}
                className="w-32 md:w-md absolute -top-[10%] left-1/2 transform -translate-x-1/2 z-0 opacity-70"
            />

            {/* Optional Bottom Shadow if you need fade to footer */}
            {/* 
      <div className="absolute bottom-0 w-full h-[15vh] bg-gradient-to-t from-slate-900 to-transparent z-20 pointer-events-none" />
      */}

        </div>
    );
};

export default Skills;
