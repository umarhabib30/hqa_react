import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";

const Cta = () => {
  const ref = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background image animation
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 1],
    [0, 1, 1, 0.6]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  // Text color transitions 
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1],
    ["#00285E", "#FFFFFF", "#FFFFFF"]
  );

  // Button background and text transitions
  const buttonBg = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1],
    ["#00285E", "#CF3528", "#CF3528"]
  );
  const buttonText = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1],
    ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
  );

  return (
    <section
      ref={ref}
      className="relative bg-[#BCDDFC] py-32 px-8 flex flex-col items-center justify-center text-center font-serif overflow-hidden"
    >
      <motion.img
        src="/donation/speakerbg.jpg"
        alt="CTA Background"
        style={{ opacity, scale }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 max-w-6xl">
        {/* Title */}
        <motion.h2
          variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ color: textColor }}
          className="text-[34px] sm:text-[45px] md:text-[75px] italic mb-6  leading-tight"
        >
          Ready to Learn More?
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ color: textColor }}
          className="p leading-relaxed mb-12 font-medium"
        >
          We’d love to get to know your family and help you explore what makes
          Houston Quran Academy the right fit.
        </motion.p>

        {/* Button */}
        <a
          href="https://hqasis.com/front/office/inquiry/form"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ backgroundColor: buttonBg, color: buttonText }}
            className="flex items-center gap-3 mx-auto cursor-pointer px-8 py-4 rounded-lg shadow-lg text-base sm:text-lg font-medium transition-transform hover:scale-105"
          >
            Submit an Inquiry Now <FaArrowRight className="text-white" />
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Cta;
