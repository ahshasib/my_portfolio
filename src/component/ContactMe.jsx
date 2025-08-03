import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WaveSection from "./WaveSection";

const bubbleArray = Array.from({ length: 40 });
const fishArray = Array.from({ length: 6 });

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1cchccs', 'template_lgg6812', form.current, {
        publicKey: '8Ssr-FvcCMSGM07wm',
      })
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            theme: 'dark',
          });
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message. Try again!', {
            position: 'top-right',
            autoClose: 3000,
            theme: 'dark',
          });
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="relative z-10 pt-20 px-5 md:px-0 bg-slate-900 overflow-hidden">
      <ToastContainer />

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

      {/* 🐟 Fish animation */}
      {fishArray.map((_, index) => {
        const top = 10 + Math.random() * 70;
        const isRight = Math.random() > 0.5;
        const size = 30 + Math.random() * 30;
        const duration = 18 + Math.random() * 12;
        const delay = Math.random() * 8;
        const blur = Math.random() > 0.6 ? 'blur-sm opacity-70' : '';
        const direction = isRight ? 1 : -1;
        const startX = isRight ? '-20vw' : '120vw';
        const endX = isRight ? '120vw' : '-20vw';
        const flip = isRight ? 'scale-x-100' : 'scale-x-[-1]';
        const verticalDrift = [0, 5 * direction, -5 * direction, 0];

        // return (
        //   <motion.div
        //     key={index}
        //     className={`absolute z-10 pointer-events-none ${blur}`}
        //     style={{
        //       top: `${top}vh`,
        //       width: `${size}px`,
        //       height: 'auto',
        //       zIndex: 5,
        //     }}
        //     initial={{ x: startX, y: 0 }}
        //     animate={{ x: endX, y: verticalDrift }}
        //     transition={{
        //       x: { duration, repeat: Infinity, delay, ease: 'linear' },
        //       y: {
        //         duration: duration / 3,
        //         repeat: Infinity,
        //         repeatType: 'mirror',
        //         ease: 'easeInOut',
        //       },
        //     }}
        //   >
        //     <img src="/fish2.svg" alt="Fish" className={`w-full ${flip}`} />
        //   </motion.div>
        // );
      })}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto bg-transparent bg-opacity-10 p-8 rounded-xl backdrop-blur-md"
      >
        <p className="text-sm text-center py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 tracking-wide font-mono">
          Always feel free to
        </p>
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-300 tracking-wide font-mono text-center">
          Contact Me
        </h2>
        <motion.div
          className="mx-auto mt-2 w-28 h-[2px] bg-cyan-400 rounded-full shadow-cyan-500/40 shadow-md"
          animate={{ scaleX: [1, 1.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white mt-[10%]">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 col-span-1">
            <input
              name="from_name"
              type="text"
              placeholder="Your Name"
              className="bg-slate-700 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              name="from_email"
              type="email"
              placeholder="Your Email"
              className="bg-slate-700 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="bg-slate-700 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="relative group inline-flex items-center justify-center w-full px-6 py-2 mt-4 border-4 border-transparent bg-slate-800 text-cyan-300 font-mono font-semibold rounded-full overflow-hidden transition-all duration-300 z-10 cursor-pointer"
            >
              <span className="absolute inset-[1px] z-0 rounded-full bg-gradient-to-r from-cyan-200 via-blue-500 to-cyan-500 animate-spin-slow" />
              <span className="absolute inset-[1px] z-0 rounded-full bg-slate-800" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition">
                <FiSend size={18} />
                Send Message
              </span>
            </motion.button>
          </form>

          <div className="hidden md:flex justify-center items-center">
            <div className="w-px h-full bg-cyan-400 opacity-50" />
          </div>

          <div className="flex flex-col justify-center items-start gap-4">
            <h3 className="text-xl font-semibold text-cyan-200">Get in Touch</h3>
            <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 tracking-wide font-mono">
              I’m open to freelance work, collaboration, or just a friendly chat. Let’s connect!
            </p>
            <div className="flex gap-4 text-2xl mt-2">
              <a href="mailto:you@example.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="text-cyan-200 hover:text-white transition" />
              </a>
              <a href="https://github.com/ahshasib" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-cyan-200 hover:text-white transition" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-cyan-200 hover:text-white transition" />
              </a>
              <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-cyan-200 hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Wave at bottom */}
      <WaveSection />
    </section>
  );
};

export default ContactMe;
