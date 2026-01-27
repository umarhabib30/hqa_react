import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const LeaderShipPagesCta = ({
  title,
  highlight,
  description,
  boldText,
  bgImage = "/donation/speakerbg.jpg",
  buttonText,
  onButtonClick,
  socialIcons,
}) => {
  const ref = useRef(null);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.6, 1],
    [0, 1, 1, 0.7]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const headingColor = useTransform(opacity, [0, 1], ["#00285E", "#FFFFFF"]);
  const textColor = useTransform(opacity, [0, 1], ["#00285E", "#FFFFFF"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center text-center font-serif overflow-hidden bg-[#BCDDFC] py-20 px-10"
    >
      <motion.img
        src={bgImage}
        alt="background"
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 max-w-6xl flex flex-col items-center">
        <motion.h2
          style={{ color: headingColor }}
          className="text-[30px] md:text-[65px] italic mb-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {title}{" "}
          {highlight && <span className="text-red-700">{highlight}</span>}
        </motion.h2>
        <motion.p
          style={{ color: textColor }}
          className="max-w-4xl mx-auto mb-16 italic font-semibold p leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {boldText}
        </motion.p>

        {/* Paragraph */}
        <motion.p
          style={{ color: textColor }}
          className="max-w-5xl mx-auto mb-10 p leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {description}
        </motion.p>

        {buttonText ? (
          <motion.button
            onClick={onButtonClick}
            className="group flex items-center justify-center gap-3 cursor-pointer bg-white text-[#B91C1C] px-8 py-3 rounded-lg shadow-md text-base font-medium transition-all duration-300 hover:bg-[#00285E] hover:text-white hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {buttonText}
            <FaArrowRight className="text-red-600 group-hover:text-white transition-colors duration-300" />
          </motion.button>
        ) : socialIcons ? (
          <motion.div
            className="flex gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {socialIcons.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-white text-[#00285E] p-3 rounded-full shadow-md hover:bg-[#00285E] hover:text-white transition-all duration-300"
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default LeaderShipPagesCta;
