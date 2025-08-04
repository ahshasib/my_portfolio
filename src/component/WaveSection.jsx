import { motion } from "framer-motion";

const WaveSection = () => {
  return (
    <div className="relative w-full h-60 overflow-hidden mt-16">

      {/* Floating Image with shadow */}
      <motion.img
        src="/s.png"
        alt=""
        className="w-40 md:w-52 left-1/2 -translate-x-1/2 z-50 absolute bottom-5 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />

      {/* Text over the wave */}
      <p className="w-full text-center absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-900 text-sm font-semibold z-50 shadow-2xl">
      © {new Date().getFullYear()} Hasibul Islam. All rights reserved.
      </p>

      {/* Animated Wave SVG */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-[25%]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <path
          fill="#0E7490"
          d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,160C672,139,768,117,864,112C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z"
        />
        <path
          fill="black"
          fillOpacity="0.10"
          d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,160C672,139,768,117,864,112C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z"
        />
      </motion.svg>
    </div>
  );
};

export default WaveSection;
