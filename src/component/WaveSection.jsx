import { motion } from "framer-motion";

const WaveSection = () => {
  return (
    <div className="relative w-full h-52 overflow-hidden mt-10">
      <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <path
          fill="#1f2937"
          d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,160C672,139,768,117,864,112C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </motion.svg>
    </div>
  );
};

export default WaveSection;
