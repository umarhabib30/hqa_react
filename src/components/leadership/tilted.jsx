import React from "react";
import { SlideLeft, SlideRight } from "../../../utility/animation";
import { motion } from "framer-motion";

const requirements = [
  "Shaping long-term strategic goals",
  "Upholding transparency and financial integrity",
  "Guiding faith-aligned policies and growth initiatives.",
  "Strengthening community trust and partnerships.",
  "Empowering innovation while preserving tradition.",
];

const Tilted = () => {
  return (
    <section className="py-12 bg-[#FFFDF5] px-10 font-serif overflow-hidden">
      <div className="w-full grid md:grid-cols-2 items-stretch">
        <motion.div
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col space-y-4 h-full"
        >
          {requirements.map((req, index) => {
            const isDark = index % 2 === 0;
            return (
              <div
                key={index}
                style={{
                  width: `calc(100% - ${index * 2}%)`,
                  height: "100%",
                }}
                className={`flex items-center p-4 transition-all duration-300 clip-card ${
                  isDark
                    ? "bg-[#00285E] text-white"
                    : "bg-[#BCDDFC] text-[#00285E]"
                }`}
              >
                <span className="text-3xl mr-4 font-semibold">{index + 1}</span>
                <p className="p">{req}</p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative shadow-lg overflow-hidden w-full h-full clip-left"
        >
          <img
            src="/leadership/Board of Trustees.png"
            alt="Library"
            className="w-full h-[90vh] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Tilted;
