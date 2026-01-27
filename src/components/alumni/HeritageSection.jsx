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
      className="bg-[#FFFDF5]  pt-12  pb-3 px-10 flex flex-col items-center text-center font-serif"
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
        className="text-[#CF3528] h1 font-serif italic mb-4"
      >
        Welcome Back, <span className="text-[#00285E]">Trailblazers</span>
      </motion.h2>

      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 max-w-5xl mt-6 p leading-tight"
      >
        Once a part of Houston Quran Academy, always part of a family bound by
        faith, knowledge, and purpose.
        <br />
        <br />
        You walked these halls with hearts full of dreams—and now, as you lead
        lives of impact and inspiration across the globe, we’re honored to
        welcome you home. This is your Society of Alumni — a community crafted
        to celebrate your journey, keep you connected, and elevate the legacy we
        continue to build together
      </motion.p>
    </section>
  );
};

export default Heritage;
