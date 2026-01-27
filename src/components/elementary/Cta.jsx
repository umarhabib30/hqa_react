import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Cta = () => {
  const ref = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background and text color transformations
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 1],
    [0, 1, 1, 0.6]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const textColor = useTransform(opacity, [0, 1], ["#00285E", "#FFFFFF"]);
  const headingColor = useTransform(opacity, [0, 1], ["#00285E", "#FFFFFF"]);

  // Button 1 styles
  const button1Bg = useTransform(opacity, [0, 1], ["#00285E", "#CF3528"]);
  const button1Text = useTransform(opacity, [0, 1], ["#FFFFFF", "#FFFFFF"]);

  // Button 2 styles
  const button2Bg = useTransform(opacity, [0, 1], ["transparent", "#CF3528"]);
  const button2Text = useTransform(opacity, [0, 1], ["#00285E", "#FFFFFF"]);
  const button2Border = useTransform(opacity, [0, 1], ["#00285E", "#CF3528"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center text-center font-serif overflow-hidden bg-[#BCDDFC] py-20 px-6"
    >
      <motion.img
        src="/donation/speakerbg.jpg"
        alt="background"
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <motion.h2
          style={{ color: headingColor }}
          className="text-[30px] md:text-[75px] italic mb-6 leading-snug"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Limited <span className="text-[#CF3528]">Seats Available</span>
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          style={{ color: textColor }}
          className="max-w-6xl p mb-10 leading-relaxed mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Don’t wait to secure your child’s place in a faith-driven,
          academically enriching Montessori environment. HQA is where confident
          learners and compassionate leaders begin their journey.
        </motion.p>

        <motion.p
          style={{ color: textColor }}
          className="max-w-4xl italic h2 mb-10 leading-relaxed mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Call now: (281) 717-4847
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.button
            style={{ backgroundColor: button1Bg, color: button1Text }}
            className="flex items-center gap-2 cursor-pointer px-6 py-3 rounded-lg shadow-md text-sm sm:text-base md:text-lg transition hover:scale-105"
          >
            Schedule a Tour
            <FaArrowRight />
          </motion.button>

          <motion.button
            style={{
              backgroundColor: button2Bg,
              color: button2Text,
              borderColor: button2Border,
            }}
            className="flex items-center gap-2 cursor-pointer border-2 mt-4 sm:mt-0 px-6 py-3 rounded-lg shadow-md text-sm sm:text-base md:text-lg transition hover:scale-105"
          >
            Start Admission Process
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
