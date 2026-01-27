import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Cta = () => {
  const ref = useRef(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background animation
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 1],
    [0, 1, 1, 0.7]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  // Text & color animations
  const headingColor = useTransform(opacity, [0, 1], ["#00285E", "#FFFFFF"]);
  const textColor = useTransform(opacity, [0, 1], ["#00285E", "#FFFFFF"]);
  const buttonBg = useTransform(opacity, [0, 1], ["#FFFFFF", "#CF3528"]);
  const buttonText = useTransform(opacity, [0, 1], ["#CF3528", "#FFFFFF"]);
  const iconColor = useTransform(opacity, [0, 1], ["#00285E", "#FFFFFF"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center text-center font-serif overflow-hidden bg-[#BCDDFC] py-20 px-6"
    >
      {/* Animated background */}
      <motion.img
        src="/home/story.jpg"
        alt="Background"
        style={{ opacity, scale }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Title */}
        <motion.h2
          style={{ color: headingColor }}
          className="text-[30px] md:text-[75px] italic mb-6 leading-snug"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Ready to Chart your Path?
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          style={{ color: textColor }}
          className="max-w-7xl mb-10 leading-relaxed p"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Every student’s academic journey at HQA is tailored, interconnected,
          and faith-infused. Let’s partner to unlock your child’s potential.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link to="/student-life">
            <motion.button
              style={{ backgroundColor: buttonBg, color: buttonText }}
              className="flex items-center gap-2 cursor-pointer px-6 py-3 rounded-lg shadow-md text-sm sm:text-base md:text-lg transition hover:scale-105"
            >
              Student Life
              <FaArrowRight className="text-inherit" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.a
            href="#"
            aria-label="Facebook"
            style={{ color: iconColor }}
            className="transition hover:scale-110"
          >
            <FaFacebookF size={22} />
          </motion.a>
          <motion.a
            href="#"
            aria-label="Twitter"
            style={{ color: iconColor }}
            className="transition hover:scale-110"
          >
            <FaTwitter size={22} />
          </motion.a>
          <motion.a
            href="#"
            aria-label="Instagram"
            style={{ color: iconColor }}
            className="transition hover:scale-110"
          >
            <FaInstagram size={22} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
