import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Uniform = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#FFFDF5] pt-12 pb-12 px-4 md:px-10 flex flex-col items-center text-center font-serif overflow-hidden"
    >
      <motion.div
        variants={SlideUp(0.6)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative w-[95%] flex items-center justify-center mb-8"
      >
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <span className="relative bg-[#fdfbf7] px-4">
          <img
            src="/logo.png"
            alt="Heritage Logo"
            className="h-12 w-12 mx-auto"
          />
        </span>
      </motion.div>

      <motion.h2
        variants={SlideLeft(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[#CF3528] h1 font-serif italic mb-4"
      >
        <span className="text-[#00285E]"> HQA Uniform</span> Guide 2025
      </motion.h2>

      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 max-w-7xl mt-6 h2 italic"
      >
        Dress with Dignity | Reflect Your Faith | Ready to Learn
      </motion.p>
      <motion.p
        variants={SlideRight(1.4)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 max-w-6xl mt-6 p"
      >
        At Houston Quran Academy, uniforms aren’t just clothes — they’re a
        reflection of modesty, discipline, and the beautiful unity of our
        student body. Our updated 2025 uniform policy ensures comfort,
        consistency, and confidence — all while staying grounded in our Islamic
        values.
      </motion.p>

      <motion.h2
        variants={SlideLeft(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[#CF3528] h2 font-serif italic mt-8 mb-8"
      >
        Pre School Boys & Girls Uniforms
      </motion.h2>

      {/* Cards */}
      <motion.div
        variants={SlideUp(1.2)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full flex flex-col md:flex-row gap-6 justify-center items-stretch"
      >
        {/* Boys KG–5 */}
        <div className="bg-white rounded-lg shadow-lg flex-1 max-w-md mx-auto md:mx-0">
          <div className="bg-[#00285E] text-white p p-4 rounded-t-lg">Boys</div>
          <ul className="list-disc text-gray-800 text-left p p-4 pl-8 space-y-3 marker:text-gray-700">
            <li>Khaki Pants Only</li>
            <li>White or Navy Blue Polo Shirt</li>
            <li>
              Plain Navy or White Jacket/Sweatshirt (No prints, logos, or other
              colors)
            </li>
            <li>Tennis Shoes for safety and comfort</li>
            <li className="text-red-600 font-medium italic">
              No thobes on Fridays
            </li>
          </ul>
        </div>

        {/* Girls KG–4 */}
        <div className="bg-white rounded-lg shadow-lg flex-1 max-w-md mx-auto md:mx-0">
          <div className="bg-[#00285E] text-white p p-4 rounded-t-lg">
            Girls
          </div>
          <ul className="list-disc text-gray-800 text-left p p-4 pl-8 space-y-3 marker:text-gray-700">
            <li>Khaki Jumper over Khaki Pants</li>
            <li>White or Navy Blue Shirt under Jumper</li>
            <li>
              Plain Navy or White Jacket/Sweatshirt (No prints, logos, or other
              colors)
            </li>
            <li className="text-red-700 italic font-medium">
              No abayas on Fridays
            </li>
            <li className="text-red-700 italic font-medium">
              Tennis Shoes — comfortable for movement and play
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Uniform;
