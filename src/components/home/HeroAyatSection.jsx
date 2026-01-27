import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax } from "react-parallax";
import HeroText from "./HeroText";

const ayatVariants = {
  hidden: { y: "60vh", scale: 0.6, opacity: 0 },
  show: {
    y: ["60vh", "0vh", "-1vh", "0vh"],
    scale: [0.6, 1.12, 1.04, 1.0],
    opacity: [0, 1, 1, 1],
    transition: { duration: 1.8, times: [0, 0.6, 0.85, 1], ease: "easeInOut" },
  },
};

const heroTextVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HeroAyatSection() {
  const [ayatAnimationComplete, setAyatAnimationComplete] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showHeroText, setShowHeroText] = useState(false);

  const ayatSrc = useMemo(
    () => (window.innerWidth < 768 ? "/home/ayatmbl.svg" : "/home/ayat.svg"),
    []
  );

  useEffect(() => {
    if (!ayatAnimationComplete) return;

    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (!heroSection) return;

      const progress = Math.min(
        window.scrollY / (heroSection.offsetHeight * 0.6),
        1
      );
      setScrollProgress(progress);

      if (progress > 0.4 && !showHeroText) setShowHeroText(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ayatAnimationComplete, showHeroText]);

  const ayatOpacity = Math.max(0, 1 - scrollProgress / 0.3);
  const heroTextOpacity = Math.max(0, (scrollProgress - 0.4) / 0.1);

  return (
    <Parallax strength={600}>
      <section className="hero-section relative h-[80vh] sm:h-[90vh] grid place-items-center">
        {/* Ayat Animation */}
        <motion.div style={{ opacity: ayatOpacity }}>
          <motion.img
            src={ayatSrc}
            alt="Ayah"
            variants={ayatVariants}
            initial="hidden"
            animate="show"
            onAnimationComplete={() => setAyatAnimationComplete(true)}
            fetchPriority="high"
            decoding="async"
            loading="eager"
            className={`${
              window.innerWidth < 768
                ? "w-full h-auto max-w-none mt-8 object-contain"
                : "w-[920px] max-w-full mx-auto object-contain mt-2 sm:mt-20"
            }`}
          />
        </motion.div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          <motion.div
            style={{ opacity: heroTextOpacity }}
            className="w-full max-w-4xl mx-auto px-4 transition-opacity duration-500 pointer-events-auto"
          >
            <AnimatePresence>
              {showHeroText && (
                <motion.div
                  variants={heroTextVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <HeroText />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
}
