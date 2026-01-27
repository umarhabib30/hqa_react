import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const Slogan = () => {
  return (
    <div className="relative min-h-screen w-full font-serif overflow-hidden">
      {/* Background Image */}
      <img
        src="/donation/bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center  justify-center text-center px-4">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl text-[45px] md:text-[90px]  italic text-white drop-shadow-lg leading-tight transform -translate-y-40 md:-translate-y-30"
        >
          Advancing Together With <br />
          <span className=" text-white">Greater Strength</span>
        </motion.h1>
      </div>
    </div>
  );
};

export default Slogan;
