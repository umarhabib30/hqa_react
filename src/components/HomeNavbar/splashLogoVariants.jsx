import { motion, AnimatePresence } from "framer-motion";

const splashLogoVariants = {
  initial: { y: "40vh", scale: 1, opacity: 1 },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
  exit: {
    y: "-10vh",
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

export default function SplashLogo({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <motion.img
            src="/logo.webp"
            alt="Logo"
            fetchPriority="high"
            decoding="async"
            loading="eager"
            width={300}
            height={300}
            variants={splashLogoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-[300px] h-[300px] sm:w-56 sm:h-56 object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
