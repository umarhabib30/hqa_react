import {
  SlideLeft,
  SlideRight,
  SlideButton,
  SlideUp,
} from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Life = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#FFFDF5]  pt-12  pb-3 px-10 flex flex-col items-center text-center font-serif"
    >
      {/* Divider with logo */}
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

      {/* Title */}
      <motion.h1
        variants={SlideLeft(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 h1 font-serif italic mb-4"
      >
        Student Life at Houston Quran Academy
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 italic max-w-6xl mt-6 h2"
      >
        Where Character, Culture, and Community Thrive
      </motion.p>
      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 max-w-6xl mt-6 p"
      >
        At Houston Quran Academy (HQA), student life extends far beyond the
        classroom. Our vibrant school environment is designed to foster
        spiritual growth, academic excellence, leadership, and lifelong
        friendships—all within a nurturing Islamic atmosphere. We believe in
        developing well-rounded individuals who are not only academically strong
        but also possess a deep sense of faith, community responsibility, and
        personal integrity.{" "}
      </motion.p>
    </section>
  );
};

export default Life;
