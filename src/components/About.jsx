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
          Senior Mixed-Signal Hardware and FPGA Engineer with more than
          ten years of experience developing mission-critical defence and
          aerospace systems. Specialized in RFSoC, Direct RF Sampling,
          High-Speed ADC/DAC interfaces, JESD204B/C synchronization,
          Digital Beamforming, FPGA design, and AI-enabled radar systems.
          Proven experience leading multidisciplinary engineering teams
          from architecture through production.
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