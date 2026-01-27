import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation";

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
    years: ["2025", "2026", "2027"],
    completion: "2029",
    color: "bg-[#00285E]",
  },
];

export default function ProjectsSlider() {
  return (
    <section className="bg-white py-10 px-4 font-serif overflow-hidden">
      {/* Heading */}
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-[#00285E] italic h1 mb-10"
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

      <div className="flex overflow-x-scroll snap-x snap-mandatory -mx-4 px-4 space-x-6 scrollbar-none">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.95 }}
            whileTap={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="snap-start flex-shrink-0 w-72 min-h-[480px] sm:min-h-[520px] bg-[#FFF4E0] rounded-3xl shadow-lg flex flex-col justify-between items-center p-6 relative"
          >
            {/* Title */}
            <h3 className="text-[#00285E] h2 text-center mb-4">
              {project.title}
            </h3>

            {/* Years  */}
            <div className="flex flex-col items-center justify-center text-gray-700 mb-40 leading-tight">
              {project.years.map((year, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-lg">{year}</span>
                  {i < project.years.length - 1 && (
                    <>
                      <span className="text-gray-500 text-base leading-none">
                        •
                      </span>
                      <span className="text-gray-500 text-base leading-none">
                        •
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Half Circle */}
            <div className="absolute bottom-[-0px] w-64 h-32 rounded-t-full flex flex-col items-center justify-center text-white">
              <div
                className={`${project.color} w-full h-full rounded-t-full flex flex-col items-center justify-center`}
              >
                <p className="p">Completion of</p>
                <p className="p mb-1">Initial Phase</p>
                <p className="p font-semibold">{project.completion}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}
