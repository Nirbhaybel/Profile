import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "9", label: "IEEE Publications" },
  { value: "6", label: "Patents" },
  { value: "136", label: "DBF Channels" }
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-[#08121F] py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.8}}
          className="text-5xl font-bold text-cyan-400"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:.3}}
          className="text-gray-300 mt-8 leading-8 text-lg max-w-5xl"
        >
          Principal FPGA and AESA Radar Systems Engineer with 11 years of experience in
the architecture, design, integration, and deployment of mission-critical defence
radar systems. Expertise spans digital system architecture, FPGA development, RF
and microwave engineering, mixed-signal hardware, and real-time radar signal processing. Proven track record of delivering complex defence programs by translating
operational requirements into scalable, high-performance hardware and FPGA solutions while ensuring system reliability, maintainability, and production readiness.
Led the development of large-scale 160 × 16 coherent-channel AESA radar systems using direct RF sampling architectures, deterministic JESD204B/C synchronization, adaptive digital beamforming, and high-speed FPGA processing. Proven
ability to translate complex system requirements into scalable hardware and FPGA
architectures while leading multidisciplinary engineering teams from concept through
production, system integration, customer acceptance, qualification testing, and
field deployment.
Specialized in FPGA architecture, RFSoC platforms, radar waveform generation,
high-speed digital interfaces, RF front-end design, and AI/ML-based radar target
detection and classification. Experienced in technical leadership, architecture reviews, customer engagement, engineering mentoring, risk management, technical
decision-making, and cross-functional program execution. Passionate about developing next-generation radar technologies through innovation, system optimization,
and continuous improvement across the complete product development lifecycle.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {stats.map((item,index)=>(

            <motion.div
              key={index}
              whileHover={{scale:1.05}}
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:index*.2}}
              className="rounded-2xl bg-[#101C2D] p-8 border border-cyan-500/20 text-center"
            >

              <h1 className="text-5xl font-bold text-cyan-400">
                {item.value}
              </h1>

              <p className="mt-3 text-gray-300">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}