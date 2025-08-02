import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";


const projects = [
  {
    id: 1,
    title: "Real estate Platform",
    image: "https://i.ibb.co/NgYfxvHn/Purple-and-White-Minimalist-New-Website-Launch-Free-Facebook-Post.png",
    description: "A Real estate Platform (an online platform where people can add and buy real estate properties) using the MERN stack.",
    techStack: ["React", "Tailwind", "Firebase", "Node.js", "Js", "Mongo DB", "Framer Motion", "Express js", "Daisy ui"],
    liveLink: "",
  },
  {
    id: 2,
    title: "FITNESS CLUB Website",
    image: "https://i.ibb.co/yFTY5jf3/Screenshot-291.png",
    description: "Fitness Club website offers users personalized workout plans, and trainer information. It also includes responsive design, membership options, and an engaging interface to boost user motivation",
    techStack: ["Next.js", "MongoDB", "Framer Motion", "Firebase", "Node.js", "Js",],
    liveLink: "https://fitclub-1my.pages.dev/",
  },
  {
    id: 3,
    title: "FoodPanda Clone",
    image: "https://i.ibb.co/sv4LKWHV/Brown-Website-Launch-Announcement-Facebook-Post.png",
    description: "A clone of FoodPanda with user login, cart, and admin panel.",
    techStack: ["React", "Tailwind", "Firebase"],
    liveLink: "",
  },
  {
    id: 4,
    title: "Education Website",
    image: "https://i.ibb.co/qLn6KhD8/Sage-Green-Minimalist-Natural-Download-App-Facebook-Post.png",
    description: "An education platform for online courses and student dashboards.",
    techStack: ["Next.js", "MongoDB", "Framer Motion"],
    repoLink:"",
    liveLink: "https://plantnet.org/en/",
  },

];


const bubbleArray = Array.from({ length: 35 });
const fishArray = Array.from({ length: 4 });

const ProjectCard = ({ project }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    setX(offsetX * 0.1);
    setY(offsetY * 0.1);
  };

  const handleMouseLeave = () => {
    setX(0);
    setY(0);
  };

  return (


    <motion.div
      className="bg-transparent border border-cyan-200 rounded-xl overflow-hidden p-4 transition-shadow shadow-lg hover:shadow-xl z-30 backdrop-blur-sm"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl text-cyan-200 font-semibold mb-2">{project.title}</h3>
      <p className="text-sm py-2 md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 tracking-wide font-mono">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="bg-cyan-900 text-cyan-200 border border-cyan-200 text-xs px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      

      <div className="flex gap-4 pt-3">
        {/* Source Code Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          
        >
          <Link to={project.repoLink}
           className="group relative inline-flex items-center gap-2 px-3 py-1 border-4 border-transparent bg-slate-800 text-cyan-300 font-mono font-semibold rounded-full overflow-hidden transition-all duration-300 z-10"
          >
          <span className="absolute inset-[1px] z-0 rounded-full bg-gradient-to-r from-cyan-200 via-blue-500 to-cyan-500 animate-spin-slow"></span>
          <span className="absolute inset-[1px] z-0 rounded-full bg-slate-800"></span>
          <span className="relative z-10 text-cyan-300 group-hover:text-white transition">
            <FaGithub size={18} />
          </span>
          <span className="relative z-10 group-hover:text-white transition">
            Source Code
          </span>
          </Link>
        </motion.div>

        {/* Live Preview Button */}
        <motion.div
        
          whileHover={{ scale: 1.05 }}
         
        >
          <Link to={project.liveLink}
           className="group relative inline-flex items-center gap-2 px-3 py-1 border-4 border-transparent bg-slate-800 text-cyan-300 font-mono font-semibold rounded-full overflow-hidden transition-all duration-300 z-10"
          >
          <span className="absolute inset-[1px] z-0 rounded-full bg-gradient-to-r from-cyan-200 via-blue-500 to-cyan-500 animate-spin-slow"></span>
          <span className="absolute inset-[1px] z-0 rounded-full bg-slate-800"></span>
          <span className="relative z-10 text-cyan-300 group-hover:text-white transition">
            <FiExternalLink size={18} />
          </span>
          <span className="relative z-10 group-hover:text-white transition">
            Live Preview
          </span>
          </Link>
        </motion.div>
      </div>
    </motion.div>

  );
};

const Project = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-900 overflow-hidden text-white py-20 px-6">
      <div className="absolute top-0 w-full h-[15vh] bg-gradient-to-b from-slate-900 to-transparent z-20 pointer-events-none" />

      {/* 🔵 Bubbles */}
      {bubbleArray.map((_, index) => {
        const size = 8 + Math.random() * 20;
        const left = Math.random() * 100;
        const duration = 6 + Math.random() * 6;
        const delay = Math.random() * 5;
        const opacity = 0.15 + Math.random() * 0.3;
        const blur = Math.random() > 0.3 ? "blur-sm" : "";
        const xDrift = Math.random() * 30 - 15;

        return (
          <motion.div
            key={index}
            className={`absolute bottom-0 rounded-full bg-cyan-200 ${blur} z-10 pointer-events-none`}
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
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* 🐟 Fish */}
      {fishArray.map((_, index) => {
        const top = 10 + Math.random() * 70;
        const isRight = Math.random() > 0.5;
        const size = 30 + Math.random() * 30;
        const duration = 18 + Math.random() * 12;
        const delay = Math.random() * 8;
        const blur = Math.random() > 0.6 ? "blur-sm opacity-70" : "";
        const direction = isRight ? 1 : -1;
        const startX = isRight ? "-20vw" : "120vw";
        const endX = isRight ? "120vw" : "-20vw";
        const flip = isRight ? "scale-x-100" : "scale-x-[-1]";
        const verticalDrift = [0, 5 * direction, -5 * direction, 0];

        return (

          <motion.div
            key={index}
            className={`absolute z-10 pointer-events-none ${blur}`}
            style={{
              top: `${top}vh`,
              width: `${size}px`,
              height: "auto",
              zIndex: 5,
            }}
            initial={{ x: startX, y: 0 }}
            animate={{ x: endX, y: verticalDrift }}
            transition={{
              x: {
                duration,
                repeat: Infinity,
                delay,
                ease: "linear",
              },
              y: {
                duration: duration / 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
          >
            <img src="/fish2.svg" alt="Fish" className={`w-full ${flip}`} />
          </motion.div>
        );
      })}


      <div className="relative z-30">
        <p className="text-sm text-center py-2 md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 tracking-wide font-mono">I constantly try to improve</p>
        <h2 className="relative z-40 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-300 tracking-wide font-mono text-center">
          My Project
        </h2>

        <motion.div
          className="relative z-40 mx-auto mt-2 w-28 h-[2px] bg-cyan-400 rounded-full shadow-cyan-500/40 shadow-md"
          animate={{
            scaleX: [1, 1.4, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto mt-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>


      <div className="absolute bottom-0 w-full h-[10vh] bg-gradient-to-t from-slate-900 to-transparent z-20 pointer-events-none" />
    </div>

  );
};

export default Project;
