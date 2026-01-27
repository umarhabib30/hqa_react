import { SlideRight, SlideUp } from "../../../utility/animation.js";
import { motion } from "framer-motion";
const MomentumSection = () => {
  return (
    <section className="py-16 bg-white text-center px-4 sm:px-6 lg:px-8 font-serif ">
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-10">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic text-[#000000] mb-2"
        >
          Momentum Meets Opportunity
        </motion.h1>
        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#000000] p  italic"
        >
          This year we are excited to continue the journey
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        variants={SlideRight(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {/* Card 1 */}
        <div className="bg-[#BCDDFC] rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <div className="bg-[#00285E] h-2 rounded-t-lg"></div>
          <div className="p-6">
            <p className="text-gray-800 italic h2 mt-6">
              Building on our <br /> momentum
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#BCDDFC] rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <div className="bg-[#00285E] h-2 rounded-t-lg"></div>
          <div className="p-6">
            <p className="text-gray-800 italic h2 mt-6">
              Expanding our <br /> impact
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#BCDDFC] rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <div className="bg-[#00285E] h-2 rounded-t-lg"></div>
          <div className="p-6">
            <p className="text-gray-800 italic h2 mt-6">
              Inviting you to <br /> be part <br /> of it once more.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MomentumSection;
