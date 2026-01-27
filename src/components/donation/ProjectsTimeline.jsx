import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";

const projects = [
  {
    title: "Recruitment and Education of Educators",
    years: ["2024", "2025", "2026"],
    completion: "2027",
    color: "bg-[#7EB4E3]",
  },
  {
    title: "Construction of Richmond Campus",
    years: ["2024", "2025", "2026"],
    completion: "2027",
    color: "bg-[#00285E]",
  },
  {
    title: "Upgradation of Current Facility at Katy Campus",
    years: ["2024", "2025", "2026"],
    completion: "2027",
    color: "bg-[#D32F2F]",
  },
  {
    title: "Upgradation Technology at Katy Campus",
    years: ["2024", "2025", "2026"],
    completion: "2027",
    color: "bg-[#D32F2F]",
  },
  {
    title: "Preparing and Grand Opening of the New Katy High School",
    years: ["2025", "2026"],
    completion: "2026",
    color: "bg-[#00285E]",
  },
];

export default function ProjectsTimeline() {
  return (
    <section className="bg-white py-20 px-10 font-serif">
      {/* Heading */}
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 text-center  text-[#00285E] italic mb-12"
      >
        Progress Made{" "}
        <span className="text-[#D32F2F]"> Commitment Ongoing</span> <br />
        “what was done” → “what needs to be done”{" "}
      </motion.h1>

      <motion.p
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="p text-center mb-20 max-w-5xl mx-auto"
      >
        While we’re proud of what we accomplished, our work is far from done.
        Because of you, a strong foundation has been laid — now it’s time to
        raise the next roof.
      </motion.p>
      {/* Top Row  */}
      <div className="flex flex-wrap justify-center gap-10 mb-20">
        {projects.slice(0, 3).map((p, index) => {
          const tilt = index === 0 ? 10 : index === 1 ? -10 : 12;

          return (
            <motion.div
              key={index}
              initial={{ rotate: tilt }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="relative bg-[#FFF4E0] cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.4)] rounded-2xl w-90 h-118 flex flex-col justify-between items-center px-6 py-8 text-center overflow-hidden"
            >
              {/* Title */}
              <h3 className="text-[#00285E] h2">{p.title}</h3>

              {/* Years */}
              <div className="flex flex-col items-center justify-center mb-2 text-gray-700 p leading-none mt-4">
                {p.years.map((y, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span>{y}</span>
                    {i < p.years.length - 1 && (
                      <>
                        <span className="text-gray-500 text-sm leading-none">
                          •
                        </span>
                        <span className="text-gray-500 text-sm leading-none">
                          •
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Half Circle */}
              <div className="relative w-full flex flex-col items-center mt-auto">
                <div
                  className={`absolute bottom-[-30px] w-[300px] h-[160px] ${p.color} rounded-t-full flex flex-col items-center justify-center text-white mx-auto`}
                >
                  <p className="p">Completion of</p>
                  <p className="p mb-1">Initial Phase</p>
                  <p className="pfont-semibold">{p.completion}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Row  */}
      <div className="flex flex-wrap justify-center gap-10">
        {projects.slice(3, 5).map((p, index) => {
          const tilt = index === 0 ? -12 : 12;

          return (
            <motion.div
              key={index}
              initial={{ rotate: tilt }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="relative bg-[#FFF4E0] shadow-[0_4px_15px_rgba(0,0,0,0.4)] cursor-pointer rounded-2xl w-90 h-118 flex flex-col justify-between items-center px-6 py-8 text-center"
            >
              {/* Title */}
              <h3 className="text-[#00285E] h2 mb-3">{p.title}</h3>

              {/* Years */}
              <div className="flex flex-col items-center justify-center mb-2 text-gray-700 p leading-none">
                {p.years.map((y, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span>{y}</span>
                    {i < p.years.length - 1 && (
                      <>
                        <span className="text-gray-500 text-sm leading-none">
                          •
                        </span>
                        <span className="text-gray-500 text-sm leading-none">
                          •
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Half Circle */}
              <div className="relative w-full flex flex-col items-center mt-auto">
                <div
                  className={`absolute bottom-0 w-[300px] h-[160px] ${p.color} rounded-t-full flex flex-col bottom-[-30px] items-center justify-center text-white mx-auto`}
                >
                  <p className="p">Completion of</p>
                  <p className="p mb-1">Initial Phase</p>
                  <p className="p font-semibold">{p.completion}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
