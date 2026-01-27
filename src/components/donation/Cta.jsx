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

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Image animations
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 1],
    [0, 1, 1, 0.6]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  // Text color animation
  const headingColor = useTransform(opacity, [0, 1], ["#012974", "#FFFFFF"]);
  const textColor = useTransform(opacity, [0, 1], ["#012974", "#FFFFFF"]);

  // Buttons
  const buttonBg = useTransform(opacity, [0, 1], ["#012974", "#CF3528"]);
  const buttonText = useTransform(opacity, [0, 1], ["#FFFFFF", "#FFFFFF"]);
  const buttonBorder = useTransform(opacity, [0, 1], ["#012974", "#CF3528"]);

  const button2Bg = useTransform(opacity, [0, 1], ["white", "#CF3528"]);
  const button2Text = useTransform(opacity, [0, 1], ["#012974", "#FFFFFF"]);
  const button2Border = useTransform(opacity, [0, 1], ["#012974", "#CF3528"]);

  return (
    <section
      ref={ref}
      className="relative bg-[#BCDDFC] py-20 px-6 flex flex-col items-center justify-center text-center font-serif overflow-hidden"
    >
      {/* Background Image */}
      <motion.img
        src="home/story.jpg"
        alt="CTA background"
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Title */}
        <motion.h2
          style={{ color: headingColor }}
          className="text-[32px] md:text-[75px] italic mb-6 leading-snug text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Are you Ready to <br /> Become a HQA Partner?
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          style={{ color: textColor }}
          className="max-w-5xl p text-[#252626] leading-relaxed mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We extend our heartfelt appreciation to all our donors who have chosen
          to invest in the future of Houston Quran Academy. Your contributions
          are actively enriching the lives of our students and fortifying the
          growth of our school. If you haven't had the chance to contribute, we
          warmly invite you to become a part of our journey in constructing a
          lasting legacy of excellence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.button
            style={{
              backgroundColor: buttonBg,
              color: buttonText,
              borderColor: buttonBorder,
            }}
            className="flex items-center gap-2 cursor-pointer px-6 py-3 rounded-lg shadow-md text-sm sm:text-base md:text-lg transition hover:scale-105"
          >
            Become a Sponsor
          </motion.button>

          <motion.button
            style={{
              backgroundColor: button2Bg,
              color: button2Text,
              borderColor: button2Border,
            }}
            className="flex items-center gap-2 cursor-pointer px-6 py-3 rounded-lg shadow-md text-sm sm:text-base md:text-lg transition hover:scale-105 hover:bg-[#CF3528] hover:text-white"
          >
            Donate Now
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          style={{ color: textColor }} // Make icons follow scroll color
          className="flex gap-6 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <FaFacebookF size={22} className="cursor-pointer" />
          <FaTwitter size={22} className="cursor-pointer" />
          <FaInstagram size={22} className="cursor-pointer" />
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
