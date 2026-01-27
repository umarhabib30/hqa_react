import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Text = () => {
  const ref = useRef(null);

  // Trigger animation when the section crosses the center of the viewport
  const isInView = useInView(ref, { once: true, margin: "-0% 0px -0% 0px" });

  const slideFromTop = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const slideFromBottom = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-0 overflow-hidden font-serif">
      {/* Video Background - always playing */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/donation/hero.mp4" type="video/mp4" />
      </video>

      {/* Text container triggers animation when section passes center */}
      <div ref={ref} className="relative z-10 w-full">
        <h1 className="text-[50px] md:text-[90px] italic font-bold text-white leading-snug w-full">
          <motion.div
            variants={slideFromTop}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full bg-[#00285E]"
          >
            <span className="block pt-28">One Drop of Generosity</span>
          </motion.div>

          <motion.div
            variants={slideFromBottom}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full bg-[#00285E]"
          >
            <span className="block pb-36 pt-34 text-[#FAF1C4]">
              Creates Waves of Change
            </span>
          </motion.div>
        </h1>
      </div>
    </div>
  );
};

export default Text;
