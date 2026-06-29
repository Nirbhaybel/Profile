import { motion } from "framer-motion";
import {
  FaSatelliteDish,
  FaCrosshairs,
  FaPlane,
  FaBroadcastTower,
  FaWaveSquare,
} from "react-icons/fa";

import RadarCanvas from "./RadarCanvas";

export default function RadarLab() {

  return (

    <section
      id="radar-lab"
      className="min-h-screen bg-[#07111F] py-24 px-4 lg:px-10"
    >

      {/* Header */}

      <motion.div
        initial={{ opacity:0, y:-30 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:.6 }}
        viewport={{ once:true }}
        className="text-center mb-14"
      >

        <h2 className="text-5xl font-black text-white">

          Interactive

          <span className="text-cyan-400">

            {" "}Radar Lab

          </span>

        </h2>

        <p className="mt-5 text-gray-400 max-w-3xl mx-auto">

          Experience an interactive AESA radar simulation demonstrating
          beam steering, target tracking, digital beamforming,
          radar signal processing and detection algorithms.

        </p>

      </motion.div>

      {/* Main Layout */}

      <div className="grid lg:grid-cols-12 gap-8">

        {/* Left Panel */}

        <motion.div

          initial={{ opacity:0, x:-40 }}

          whileInView={{ opacity:1, x:0 }}

          viewport={{ once:true }}

          className="lg:col-span-4"

        >

          <div className="rounded-3xl border border-cyan-500/20 bg-[#0E1828]/80 backdrop-blur-xl p-8">

            <div className="flex items-center gap-4 mb-8">

              <FaSatelliteDish
                className="text-cyan-400"
                size={28}
              />

              <div>

                <h3 className="text-2xl font-bold text-white">

                  Radar Control Panel

                </h3>

                <p className="text-gray-400 text-sm">

                  Live Radar Parameters

                </p>

              </div>

            </div>

            {/* Status */}

            <div className="space-y-5">

              <ControlCard
                icon={<FaBroadcastTower />}
                title="Radar Mode"
                value="SEARCH"
              />

              <ControlCard
                icon={<FaCrosshairs />}
                title="Beam Angle"
                value="0°"
              />

              <ControlCard
                icon={<FaWaveSquare />}
                title="Pulse Repetition Frequency"
                value="2000 Hz"
              />

              <ControlCard
                icon={<FaPlane />}
                title="Tracked Targets"
                value="0"
              />

            </div>

            <div className="mt-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-5">

              <h4 className="font-bold text-cyan-300">

                Radar Status

              </h4>

              <p className="text-gray-400 mt-3 text-sm leading-7">

                Radar operating normally.

                Awaiting target detection.

                Sweep synchronized.

              </p>

            </div>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div

          initial={{ opacity:0, x:40 }}

          whileInView={{ opacity:1, x:0 }}

          viewport={{ once:true }}

          className="lg:col-span-8"

        >

          <div className="rounded-3xl border border-cyan-500/20 bg-[#0E1828]/80 backdrop-blur-xl overflow-hidden">

            {/* Header */}

            <div className="border-b border-cyan-500/20 p-6 flex justify-between items-center">

              <div>

                <h3 className="text-2xl font-bold text-white">

                  Live Radar Display

                </h3>

                <p className="text-gray-400">

                  AESA Search Radar Simulation

                </p>

              </div>

              <div className="flex gap-3">

                <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400">

                  ONLINE

                </span>

                <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400">

                  SEARCH

                </span>

              </div>

            </div>

            {/* Radar */}

            <div className="h-[700px]">

              <RadarCanvas />

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}

/*---------------------------------------*/
/* Small Reusable Control Card */
/*---------------------------------------*/

function ControlCard({ icon, title, value }) {

  return (

    <div className="rounded-xl border border-cyan-500/20 bg-[#111C2D] p-5 flex justify-between items-center">

      <div className="flex items-center gap-4">

        <div className="text-cyan-400 text-2xl">

          {icon}

        </div>

        <div>

          <p className="text-gray-400 text-sm">

            {title}

          </p>

          <h4 className="text-white font-semibold">

            {value}

          </h4>

        </div>

      </div>

    </div>

  );

}