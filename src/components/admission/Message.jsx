import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";

const Message = () => {
  return (
    <section className="w-full px-10 py-12 font-serif overflow-hidden">
      <div className="mb-6 md:mb-10 lg:mb-12">
        <motion.p
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          className="border-l-4 md:border-l-[6px] border-[#CF3528] pl-3 md:pl-4 italic text-[20px] md:text-[34px] text-[#00285E] font-semibold"
        >
          Each inquiry and application to Houston Quran Academy is met with
          personal care, ensuring a smooth, supportive, and stress-free journey
          for both you and your child from the very first step.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[460px] lg:h-[460px]">
        <motion.div
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          className="order-2 md:order-1 w-full h-full"
        >
          <img
            src="/admission/Admissions Requirements.png"
            alt="HQA Admissions Team"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          className="order-1 md:order-2 bg-[#00285E] flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full"
        >
          <h2 className="border-l-4 md:border-l-[6px] border-white pl-2 md:pl-3 italic text-white mb-4 md:mb-6 leading-snug text-xl md:text-2xl lg:text-3xl font-semibold">
            A Heartfelt Welcome from the HQA Admissions Team
          </h2>

          <div className="space-y-3 md:space-y-4">
            <p className="text-white text-base md:text-lg leading-relaxed">
              At Houston Quran Academy, every child's journey begins with
              purpose and promise. Our Admissions Team is here to guide you with
              warmth, care, and clarity as you explore a school where faith
              meets excellence and learning inspires leadership.
            </p>
            <p className="text-white text-base md:text-lg leading-relaxed">
              Step into a nurturing community where students flourish —
              academically, spiritually, and socially. This is more than
              enrollment; it's the start of a meaningful chapter.
            </p>
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-semibold">
              We're honored to welcome you to the HQA family — where tomorrow's
              leaders rise today.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Message;
