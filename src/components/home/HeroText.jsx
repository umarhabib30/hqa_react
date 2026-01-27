import { motion } from "framer-motion";

const SlideRight = (delay = 0) => ({
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut", delay },
  },
});

const SlideLeft = (delay = 0) => ({
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut", delay },
  },
});

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const HeroText = () => {
  return (
    <section className="min-h-[50vh] mt-4 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 1 }} 
        className="text-center"
      >
        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif flex flex-wrap justify-center gap-3">
          <motion.span variants={SlideRight(0.0)} className="text-[#0F2C56]">
            Make Us
          </motion.span>
          <motion.span
            variants={SlideLeft(0.1)}
            className="text-[#C0392B] italic"
          >
            Leaders for the Righteous
          </motion.span>
        </h1>
      </motion.div>
    </section>
  );
};

export default HeroText;
