import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SlideRight } from "../../../utility/animation.js";

const WhyChooseUsTextMbl = () => {
  return (
    <div className="px-6 mb-2">
      <motion.h2
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="h1 text-gray-800 "
      >
        <span className="text-[#00285E] italic">Why Choose HQA?</span>
      </motion.h2>
    </div>
  );
};

export default WhyChooseUsTextMbl;
