import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaDownload,
  FaSatelliteDish,
  FaMicrochip,
  FaBroadcastTower,
  FaBrain,
  FaProjectDiagram,
} from "react-icons/fa";

const resumes = [
  {
    title: "Senior Radar Systems Architect",
    subtitle: "AESA • DBF • DDC • Pulse Compression",
    experience: "10+ Years Experience",
    target: "Principal Engineer • Architect • Technical Lead",
    skills: ["AESA Radar", "DBF", "DDC", "CFAR", "Tracking"],
    file: "Radar_Resume.pdf",
    icon: <FaSatelliteDish />,
    color: "cyan",
  },

  {
    title: "FPGA / RTL Design Engineer",
    subtitle: "VHDL • Verilog • Vivado • Timing Closure",
    experience: "10+ Years Experience",
    target: "Senior FPGA Engineer • RTL Designer",
    skills: ["VHDL", "Verilog", "Vivado", "Questa", "Timing"],
    file: "FPGA_Resume.pdf",
    icon: <FaMicrochip />,
    color: "emerald",
  },

  {
    title: "RFSoC & High-Speed Signal Processing",
    subtitle: "ADC • DAC • JESD204B/C • DDC",
    experience: "RFSoC Specialist",
    target: "Signal Processing Engineer",
    skills: ["RFSoC", "JESD204", "ADC", "DAC", "NCO"],
    file: "RFSoC_Resume.pdf",
    icon: <FaBroadcastTower />,
    color: "purple",
  },

  {
    title: "Mixed Signal Hardware Lead",
    subtitle: "High-Speed PCB • DDR • Ethernet",
    experience: "Hardware Team Lead",
    target: "Hardware Architect",
    skills: ["DDR", "Ethernet", "PCB", "MicroBlaze", "RF"],
    file: "MixedSignal_Resume.pdf",
    icon: <FaProjectDiagram />,
    color: "orange",
  },

  {
    title: "AI for Radar & DSP",
    subtitle: "MATLAB • Python • Neural Networks",
    experience: "AI Research",
    target: "AI Engineer • DSP Engineer",
    skills: ["MATLAB", "Python", "ANN", "Radar AI", "DSP"],
    file: "AI_Resume.pdf",
    icon: <FaBrain />,
    color: "pink",
  },
];

export default function ResumeModal({ open, onClose }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-2xl border border-cyan-500 p-8 overflow-y-auto"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold text-cyan-400">
              Select Resume
            </h2>

            <button
              onClick={onClose}
              className="text-white text-2xl"
            >
              <FaTimes />
            </button>

          </div>

          <div className="space-y-4 pb-6">

            {resumes.map((resume) => (

              <div
    key={resume.file}
    className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
>

    <div className="flex justify-between items-center">

        <div className="flex gap-5">

            <div className="text-cyan-400 text-4xl mt-2">
                {resume.icon}
            </div>

            <div>

                <h3 className="text-white text-2xl font-bold">
                    {resume.title}
                </h3>

                <p className="text-cyan-300 mt-1">
                    {resume.subtitle}
                </p>

                <p className="text-gray-400 text-sm mt-2">
                    📈 {resume.experience}
                </p>

                <p className="text-gray-400 text-sm">
                    🎯 {resume.target}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">

                    {resume.skills.map((skill) => (

                        <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-500 text-cyan-300 text-xs"
                        >
                            {skill}
                        </span>

                    ))}

                </div>

            </div>

        </div>

        <a
            href={`${import.meta.env.BASE_URL}resumes/${resume.file}`}
            download
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl flex items-center gap-3 font-bold transition"
        >
            <FaDownload />
            Download
        </a>

    </div>

</div>

            ))}

          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}