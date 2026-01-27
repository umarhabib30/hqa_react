import {
  SlideLeft,
  SlideRight,
  SlideButton,
  SlideUp,
} from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Heritage = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#FFFDF5]  py-12 px-10 flex flex-col items-center text-center font-serif  overflow-hidden"
    >
      <motion.div
        variants={SlideUp(0.6)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative w-[95%] flex items-center justify-center mb-8"
      >
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <span className="relative bg-[#fdfbf7] px-4">
          <img
            src="/logo.png"
            alt="Heritage Logo"
            className="h-12 w-12 mx-auto"
          />
        </span>
      </motion.div>

      <motion.h1
        variants={SlideLeft(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text[#00285E] h1 font-serif italic mb-4"
      >
        2024–2025 Tuition Policy <br />
        <span className="text-[#CF3528]">for K–12 Students</span>
      </motion.h1>

      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 max-w-8xl p  leading-relaxed"
      >
        At Houston Quran Academy, we are committed to providing exceptional
        academic and spiritual education at a fair and transparent cost. Below
        is a detailed overview of our tuition structure and available sibling
        discounts.
      </motion.p>
    </section>
  );
};

export default Heritage;
