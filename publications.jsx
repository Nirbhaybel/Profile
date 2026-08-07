import { motion } from "framer-motion";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";

const papers = [
  {
    title: "ddPhase Noise Effects on Micro-Doppler Extraction for Radar Target Classification using Machine Learning",
    conference: "IEEE APMC 2024 • Bali, Indonesia",
    year: "2024",
    pdf: "/papers/apmc2024.pdf",
  },
  {
    title: "AI-Based Digital Predistortion for Future RF Transmitters",
    conference: "IEEE SPACE 2026",
    year: "2026",
    pdf: "/papers/space2026.pdf",
  },
  {
    title: "Scalable Direct RF Sampling Receiver Architecture",
    conference: "IEEE MAPCON",
    year: "2025",
    pdf: "/papers/mapcon2025.pdf",
  },
];

export default function Publications() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Research Publications
        </motion.h2>

        <div className="space-y-8">

          {papers.map((paper, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 transition"
            >

              <h3 className="text-2xl font-semibold text-white">
                {paper.title}
              </h3>

              <p className="text-cyan-300 mt-3">
                {paper.conference}
              </p>

              <p className="text-gray-400 mt-2">
                {paper.year}
              </p>

              <div className="flex gap-4 mt-6">

                <a
                  href={paper.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-red-600 px-5 py-3 rounded-lg hover:bg-red-700 transition"
                >
                  <FaFilePdf />
                  PDF
                </a>

                <a
                  href={paper.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-cyan-400 px-5 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                >
                  <FaExternalLinkAlt />
                  View
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}