import {
  SlideLeft,
  SlideRight,
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
      className="bg-[#FFFDF5] py-12 px-10 flex flex-col items-center text-center font-serif overflow-hidden"
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

      <motion.h2
        variants={SlideLeft(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text[#00285E] h1 font-serif italic mb-4"
      >
        Begin Your Child’s {""}
        <span className="text-[#CF3528]">Journey Today</span>
      </motion.h2>

      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 max-w-8xl p"
      >
        We invite you and your family to tour our facilities, attend a live
        class, and witness the nurturing environment that will help your child
        flourish in faith and knowledge. Schedule your visit now and see how
        Houston Quran Academy can be the starting point for your child’s
        lifelong adventure in learning.
      </motion.p>
    </section>
  );
};

export default Heritage;
