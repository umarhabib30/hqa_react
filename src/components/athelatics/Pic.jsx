import { SlideRight } from "../../../utility/animation";
import { motion } from "framer-motion";

const PantherVideo = () => {
  return (
    <motion.div
      variants={SlideRight(0.4)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full flex justify-center items-center py-8 overflow-hidden"
    >
      <video
        src="/athelatics/panther.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full max-w-7xl h-auto rounded-lg shadow-md object-cover"
        preload="metadata"
      />
    </motion.div>
  );
};

export default PantherVideo;
