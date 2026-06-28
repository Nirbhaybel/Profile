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
  return (
    <section className="relative min-h-screen bg-[#07111F] overflow-hidden flex items-center">

      {/* Left Side */}
      <div className="relative z-20 w-full lg:w-1/2 px-8 lg:px-20 py-20">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[6px] text-cyan-400 font-semibold"
        >
          Defence • Aerospace • Radar
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-5xl font-black mt-6 leading-none"
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
          className="text-2xl md:text-4xl mt-8 font-semibold"
        >
          <span className="text-4xl font-semibold text-white">

Senior Radar Systems Architect

</span>

<br/>

<span className="text-cyan-400 text-xl">

FPGA • RFSoC • Mixed Signal Hardware

</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-300 mt-8 text-lg leading-8 max-w-xl"
        >
          FPGA • RFSoC • Mixed Signal Hardware •
          High-Speed Digital Design • Digital Beamforming •
          Direct RF Sampling • AI for Radar
        </motion.p>

        <div className="flex flex-wrap gap-5 mt-12">

          <a
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  download
  className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black rounded-lg font-semibold transition-all duration-300"
>
  Download Resume
</a>

          <a
            href="#projects"
            className="border border-cyan-400 px-8 py-4 rounded-full flex items-center gap-3 hover:bg-cyan-500/20 transition"
          >
            View Projects
            <FaArrowRight />
          </a>

        </div>

        <div className="grid grid-cols-2 gap-6 mt-20">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
              className="bg-[#101C2D]/90 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6"
            >

              <div className="text-cyan-400 text-3xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold">
                {item.value}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

      {/* Right Side Radar */}

      <div className="hidden lg:flex absolute right-0 top-0 w-1/2 h-full items-center justify-center">


        <RadarCanvas/>

      </div>

    </section>
  );
}