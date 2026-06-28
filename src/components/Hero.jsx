import { useState } from "react";
import ResumeModal from "./ResumeModal";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaArrowRight,
  FaSatelliteDish,
  FaMicrochip,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";
/*import RadarBackground from "./RadarBackground";*/
import RadarCanvas from "./RadarCanvas";
const stats = [
  {
    icon: <FaSatelliteDish />,
    value: "136",
    label: "AESA Radar Channels",
  },
  {
    icon: <FaMicrochip />,
    value: "12 GSPS",
    label: "RF ADC / DAC",
  },
  {
    icon: <FaBookOpen />,
    value: "9",
    label: "IEEE Publications",
  },
  {
    icon: <FaAward />,
    value: "6",
    label: "Patents",
  },
];

export default function Hero() {

     const [showResume, setShowResume] = useState(false);
  return (
    <section className="relative min-h-screen bg-[#07111F] overflow-hidden flex flex-col lg:flex-row items-center">
      {/* Left Side */}
      <div className="relative z-20 w-full lg:w-1/2 px-6 sm:px-10 lg:px-20 pt-24 lg:pt-20 pb-14">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[3px] sm:tracking-[6px] text-cyan-400 font-semibold text-xs sm:text-sm"
        >
          Defence • Aerospace • Radar
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
        >
        <span className="text-white tracking-tight">
NIRBHAY
</span>
<span className="bg-gradient-to-r from-cyan-300 via-cyan-500 to-green-400 bg-clip-text text-transparent">
  SINGH
</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <span className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight">

Senior Radar Systems Architect

</span>

<br/>

<span className="text-cyan-400 text-base sm:text-lg lg:text-2xl">

FPGA • RFSoC • Mixed Signal Hardware

</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-300 mt-7 text-base sm:text-lg leading-7 max-w-xl"
        >
          FPGA • RFSoC • Mixed Signal Hardware •
          High-Speed Digital Design • Digital Beamforming •
          Direct RF Sampling • AI for Radar
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">

<button
    onClick={() => setShowResume(true)}
    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all duration-300 hover:scale-105"
>
    Download Resume
</button>

          <a
            href="#projects"
            className="w-full sm:w-auto border border-cyan-400 px-8 py-4 rounded-xl flex justify-center items-center gap-3 hover:bg-cyan-500/20 transition"
          >
            View Projects
            <FaArrowRight />
          </a>

        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-14">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
              className="bg-[#101C2D]/90 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-4 sm:p-6 hover:border-cyan-400 transition-all duration-300"
            >

              <div className="text-cyan-400 text-2xl sm:text-3xl mb-3">
                {item.icon}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold">
                {item.value}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base mt-2">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

      {/* Right Side Radar */}

            <div className="relative lg:absolute right-0 top-0 w-full lg:w-1/2 h-[340px] sm:h-[450px] lg:h-full flex items-center justify-center mt-10 lg:mt-0">

        <RadarCanvas/>

      </div>

      <ResumeModal
        open={showResume}
        onClose={() => setShowResume(false)}
      />

    </section>
  );
}