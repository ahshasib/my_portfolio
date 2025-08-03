import { motion } from "framer-motion";

const WaveSection = () => {
  return (
    <div className="relative w-full h-52 overflow-hidden mt-10">
      
      {/* Your image above the wave */}
      
      <img
  src="./p.png"
  alt=""
  className="w-[13%] z-50 relative left-1/2 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
/>

<img
  src="/p2.png"
  alt=""
  className="w-52 left-24 z-50 absolute bottom-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
/>
<img
  src="/s.png"
  alt=""
  className="w-52 right-24 z-50 absolute bottom-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
/>

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
          ease: "easeInOut"
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
