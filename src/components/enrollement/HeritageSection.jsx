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
      className="bg-[#FFFDF5]  pt-12 pb-18 px-10 flex flex-col items-center text-center font-serif overflow-hidden"
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
            className="h-16 w-16 mx-auto"
          />
        </span>
      </motion.div>

      <motion.h2
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text[#00285E] h1 font-serif  leading-tight italic mb-8"
      >
        Enrollement & Re-enrollement at
        <br />
        <span className="text-[#CF3528]">Houston Quran Academy</span>
      </motion.h2>

      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 max-w-8xl p leading-tight"
      >
        Welcoming new families and continuing our journey with current students
        is a moment of pride at HQA. Whether you're enrolling for the first time
        or returning for another inspiring year, our streamlined process ensures
        clarity, efficiency, and personal support every step of the way.
      </motion.p>
    </section>
  );
};

export default Heritage;
