import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../../utility/animation";

const requirements = [
  "Shaping long-term strategic goals",
  "Upholding transparency and financial integrity",
  "Guiding faith-aligned policies and growth initiatives.",
  "Strengthening community trust and partnerships.",
  "Empowering innovation while preserving tradition.",
];

const FamilyMobile = () => {
  return (
    <section className="block md:hidden py-12 px-4 font-serif  overflow-hidden">
      <motion.div
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col space-y-4"
      >
        {requirements.map((req, index) => {
          const isOdd = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex items-center p-4 rounded-lg shadow-black shadow-2xl w-full ${
                isOdd
                  ? "bg-[#00285E] text-white"
                  : "bg-[#C8E1F8] text-[#00285E]"
              }`}
            >
              <span
                className={`p mr-4 font-semibold ${
                  isOdd ? "text-white" : "text-[#00285E]"
                }`}
              >
                {index + 1}
              </span>
              <p className="p">{req}</p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FamilyMobile;
