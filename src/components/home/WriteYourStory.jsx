import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WriteYourStory = () => {
  const ref = useRef(null);

  // Track scroll progress
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
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  // Text color animation
  const textColor = useTransform(opacity, [0, 1], ["#012974", "#FFFFFF"]);
  const headingColor = useTransform(opacity, [0, 1], ["#CF3528", "#FFFFFF"]);

  // Button colors
  const buttonBg = useTransform(opacity, [0, 1], ["#012974", "#CF3528"]);
  const buttonText = useTransform(opacity, [0, 1], ["#FFFFFF", "#FFFFFF"]);
  const buttonBorder = useTransform(opacity, [0, 1], ["#012974", "#CF3528"]);

  // For 2nd button
  const button2Bg = useTransform(opacity, [0, 1], ["transparent", "#CF3528"]);
  const button2Text = useTransform(opacity, [0, 1], ["#012974", "#FFFFFF"]);
  const button2Border = useTransform(opacity, [0, 1], ["#012974", "#CF3528"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen font-serif flex items-center justify-center overflow-hidden bg-[#BCDDFC] px-4 sm:px-6"
    >
      <motion.img
        src="home/footer.jpg"
        alt="Write your story background"
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative text-center max-w-5xl z-10">
        <motion.h1
          style={{ color: headingColor }}
          className="text-[40px] font-normal md:text-[75px] italic mb-4 sm:mb-6 leading-snug"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Are You Ready to Write <br />
          Your Story?
        </motion.h1>

        <motion.p
          style={{ color: textColor }}
          className="p leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          At Houston Quran Academy, we don’t just prepare students for exams—we
          prepare them for life. With Allah as their guide and knowledge as
          their tool, they’ll thrive in both Dunya and Akhirah.
        </motion.p>

        <motion.div
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Button 1 */}
          <a
            href="https://hqasis.com/front/office/inquiry/form"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              style={{
                backgroundColor: buttonBg,
                color: buttonText,
                borderColor: buttonBorder,
              }}
              className="h-12 px-6 sm:w-60 rounded-md font-medium cursor-pointer border-2 transition duration-300"
            >
              Schedule a Campus Tour
            </motion.button>
          </a>

          {/* Button 2 */}
          <a
            href="https://hqasis.com/OnlineRegistration"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              style={{
                backgroundColor: button2Bg,
                color: button2Text,
                borderColor: button2Border,
              }}
              className="h-12 px-6 sm:w-60 rounded-md font-medium cursor-pointer border-2 transition duration-300"
            >
              Apply Now for Fall 2025
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WriteYourStory;
