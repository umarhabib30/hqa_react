import {
  SlideLeft,
  SlideRight,
  SlideButton,
  SlideUp,
} from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Balance = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#FFFDF5]  pb-12 md:mt-12   px-10 flex flex-col items-center text-center font-serif  overflow-hidden"
    >
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[#00285E] h1 font-serif italic mb-4"
      >
        <span className="text-red-700">Balance & Commitment</span>
      </motion.h1>

      <motion.p
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-800 max-w-6xl mt-6 p  mb-10"
      >
        Participation in sports is encouraged alongside a strong academic and
        spiritual foundation. We emphasize time management, healthy competition,
        and prayer-conscious scheduling, ensuring students thrive in every area
        of life.
      </motion.p>

      <motion.p
        variants={SlideLeft(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[#00285E] max-w-6xl mt-6  italic h2"
      >
        "A strong believer is better and more beloved to Allah than a weak
        believer..." – Hadith (Muslim)
      </motion.p>
    </section>
  );
};

export default Balance;
