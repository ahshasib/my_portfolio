import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
// import Wavify from 'react-wavify'; // keep commented if not used

const bubbleArray = Array.from({ length: 40 });
const fishArray = Array.from({ length: 6 });

const AboutMe = () => {
  return (
    <div className="relative py-40 pb-10 max-h-screen bg-gradient-to-b from-slate-800  to-slate-900 overflow-hidden text-white">

      {/* 🔽 Top shadow to blend with HeroSection */}
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

      {/* 🐟 Animated Fish */}
      {fishArray.map((_, index) => {
        const top = 10 + Math.random() * 70; // from 10vh to 80vh
        const isRight = Math.random() > 0.5;
        const size = 30 + Math.random() * 30; // 30-60px
        const duration = 18 + Math.random() * 12;
        const delay = Math.random() * 8;
        const blur = Math.random() > 0.6 ? 'blur-sm opacity-70' : '';
        const direction = isRight ? 1 : -1;
        const startX = isRight ? '-20vw' : '120vw';
        const endX = isRight ? '120vw' : '-20vw';
        const flip = isRight ? 'scale-x-100' : 'scale-x-[-1]';
        const verticalDrift = [0, 5 * direction, -5 * direction, 0];

        return (
          <motion.div
            key={index}
            className={`absolute z-10 pointer-events-none ${blur}`}
            style={{
              top: `${top}vh`,
              width: `${size}px`,
              height: 'auto',
              zIndex: 5,
            }}
            initial={{ x: startX, y: 0 }}
            animate={{ x: endX, y: verticalDrift }}
            transition={{
              x: {
                duration,
                repeat: Infinity,
                delay,
                ease: 'linear',
              },
              y: {
                duration: duration / 3,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              },
            }}
          >
            <img
              src="/fish2.svg"
              alt="Fish"
              className={`w-full ${flip}`}
            />
          </motion.div>
        );
      })}


      {/* 📝 Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
        <motion.h2
          className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 tracking-wide font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className=" w-24 h-0.5 bg-cyan-400 rounded-full shadow-md"
          animate={{
            scaleX: [1, 1.4, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.p
          className="text-lg md:text-xl mt-10 max-w-3xl text-cyan-100 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          <span className='text-2xl text-transparent bg-clip-text bg-gradient-to-r italic from-cyan-300 via-blue-400 to-cyan-300 tracking-wide font-mono'>I’m Hasibul Islam, a passionate frontend developer</span> based in Khulna, Bangladesh immersive user interfaces. Passionate about building and managing the front end of websites and web applications that contribute to the success of the overall product. I am continuously learning, growing, and improving. When I'm not coding, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.

          If you have a great opportunity that matches my skills and experience, feel free to contact me.

          I believe in waking up each day eager to make a difference!
          <br />
          <small className='flex items-center gap-2 underline pt-3'><FaEnvelope /><span className='text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 tracking-wide font-mono'>ahshasibul6@gmail.com</span></small>
        </motion.p>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-5 text-3xl italic md:w-[40%] text-cyan-200 text-right pr-4 great-vibes-regular "
          >
            - Hasibul Islam
          </motion.p>


        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >


        

          {['React', 'Tailwind', 'Framer Motion', 'Ocean UI'].map((skill, idx) => (
            <motion.div
              key={idx}
              className="bg-cyan-800 bg-opacity-20 px-5 py-3 rounded-xl shadow-md text-cyan-100"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>



      {/* 🔽 Fade Shadow over Wave */}
      <div className="absolute bottom-0 w-full h-[15vh] bg-gradient-to-t from-slate-900 to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export default AboutMe;
