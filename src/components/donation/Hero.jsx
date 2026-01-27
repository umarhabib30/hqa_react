import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Text = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger animation when user scrolls 200px or more
      if (window.scrollY > 20) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slideFromTop = {
    hidden: { y: "-80%", opacity: 0 },
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
      {/* Video Background */}
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

      {/* Text container */}
      <div className="relative z-10 w-full">
        <h1 className="text-[50px] md:text-[90px] italic font-bold text-white leading-none w-full">
          <motion.div
            variants={slideFromTop}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            className="w-full bg-[#00285E] -mb-1"
          >
            <span className="block pt-38 pb-30">One Drop of Generosity</span>
          </motion.div>

          <motion.div
            variants={slideFromBottom}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            className="w-full bg-[#00285E]"
          >
            <span className="block pb-60 pt-32 text-[#FAF1C4]">
              Creates Waves of Change
            </span>
          </motion.div>
        </h1>
      </div>
    </div>
  );
};

export default Text;
