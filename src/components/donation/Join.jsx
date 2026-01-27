import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { SlideRight } from "../../../utility/animation.js";
import { motion } from "framer-motion";

const Join = () => {
  return (
    <section className="flex justify-center items-center py-12 px-10 font-serif  overflow-hidden">
      <div className="relative w-full md:w-[90%] bg-[#E3F1FF] bg-cover bg-center py-10 px-6 md:px-12 flex flex-col items-center justify-center text-center rounded-2xl shadow-2xl overflow-hidden">
        {/* Heading */}
        <motion.h1
          variants={SlideRight(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic text-[#252626] mb-4"
        >
          Assalamu Alaikum and Welcome{" "}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#252626] italic p mb-6"
        >
          “Strength in Giving, Success in Unity.”
        </motion.p>

        {/* Description */}
        <motion.p
          variants={SlideRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#252626] max-w-4xl p mb-8"
        >
          It started with a single donation — one act of faith, one moment of
          giving. That single gesture helped make a meaningful progress, not
          only in dollars raised, but in strengthening our unity and building
          lasting relationships.
        </motion.p>
      </div>
    </section>
  );
};

export default Join;
