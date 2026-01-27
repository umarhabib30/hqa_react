import React from "react";
import { motion } from "framer-motion";
import { SlideRight } from "../../../utility/animation.js";

const PillarTextMbl = () => {
  return (
    <div className="px-10 ">
      <motion.h1
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="h1 pt-12 font-normal text-gray-800 mb-4 mt-3 font-serif"
      >
        <span className="text-[#CF3528]">Core</span>{" "}
        <span className="text-[#00285E] italic">Pillars</span>
      </motion.h1>

      <motion.p
        variants={SlideRight(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl p mb-6 sm:mb-8 font-serif text-gray-700"
      >
        At Houston Quran Academy, our mission is more than education. We shape
        balanced Muslims, cultivate scholars, and empower compassionate leaders.
        These core pillars ignite purpose, and elevate minds.
      </motion.p>
    </div>
  );
};

export default PillarTextMbl;
