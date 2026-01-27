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

      {/* Title */}
      <motion.h1
        variants={SlideLeft(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[#CF3528] h1 italic mb-4"
      >
        Our Heritage
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 max-w-5xl mt-6 p leading-relaxed"
      >
        Founded with a deep-rooted mission to serve both our local and global
        communities, Houston Quran Academy honors a legacy of educational
        distinction and spiritual guidance. Every lesson, every conversation,
        and every moment reflects traditions that continue to inspire our
        future. Our past gives us strength—and direction—as we grow and strive
        to meet the needs of today’s youth.
      </motion.p>
    </section>
  );
};

export default Heritage;
