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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 1],
    [0, 1, 1, 0.6]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1],
    ["#00285E", "#FFFFFF", "#FFFFFF"]
  );
  const buttonBg = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1],
    ["#FFFFFF", "#CF3528", "#CF3528"]
  );

  const buttonText = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1],
    ["#CF3528", "#FFFFFF", "#FFFFFF"]
  );

  return (
    <section
      ref={ref}
      className="relative bg-[#BCDDFC] py-20 px-6 flex flex-col items-center justify-center text-center font-serif overflow-hidden"
    >
      <motion.img
        src="/home/story.jpg"
        alt="CTA Background"
        style={{ opacity, scale }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10">
        <motion.h2
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ color: textColor }}
          className="text-[32px] md:text-[75px] italic mb-6 leading-snug"
        >
          Ready to Apply?
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          variants={SlideLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ color: textColor }}
          className="text-[24px] md:text-[34px] italic font-bold leading-relaxed mb-2"
        >
          Begin Your Child’s Journey Today.
        </motion.p>

        <motion.p
          variants={SlideRight(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ color: textColor }}
          className="h2 leading-relaxed mb-2"
        >
          Have questions? We’re here to help!
        </motion.p>

        <motion.p
          variants={SlideLeft(1.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ color: textColor }}
          className="max-w-5xl h2 leading-relaxed mb-12"
        >
          Call us at <span className="text-[#CF3528]">281-717-4622</span> or
          Email <span className="text-[#CF3528]">admissions@hqa</span> for
          personalized support.
        </motion.p>

        {/* Button */}
        <a
          href="https://hqasis.com/front/office/inquiry/form"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            variants={SlideUp(1.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              backgroundColor: buttonBg,
              color: buttonText,
            }}
            className="flex items-center gap-2 mx-auto cursor-pointer px-6 py-3 rounded-lg shadow-md text-sm sm:text-base md:text-lg transition hover:scale-105"
          >
            Apply Now <FaArrowRight />
          </motion.button>
        </a>

        {/* Social Icons */}
        <motion.div
          variants={SlideUp(1.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ color: textColor }}
          className="flex gap-6 mt-8 justify-center"
        >
          <a href="#" aria-label="Facebook" className="transition">
            <FaFacebookF size={22} />
          </a>
          <a href="#" aria-label="Twitter" className="transition">
            <FaTwitter size={22} />
          </a>
          <a href="#" aria-label="Instagram" className="transition">
            <FaInstagram size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
