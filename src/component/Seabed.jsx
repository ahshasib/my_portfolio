import { motion } from "framer-motion";

const Seabed = () => {
  return (
    <div className="relative mt-20 overflow-hidden">
      {/* SVG Wave Design */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-[150px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#0f172a" // slate-900
            d="M0,96L60,101.3C120,107,240,117,360,122.7C480,128,600,128,720,122.7C840,117,960,107,1080,101.3C1200,96,1320,96,1380,96L1440,96L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"
          />
        </svg>
      </div>

      {/* Octopus Icon */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: [20, 10, 20] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-4 left-12 text-4xl text-slate-700 opacity-80"
      >
        🐙
      </motion.div>

      {/* Shark Icon */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: [-100, 100, -100] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute bottom-10 right-0 text-5xl text-slate-700 opacity-80"
      >
        🦈
      </motion.div>
    </div>
  );
};

export default Seabed;
