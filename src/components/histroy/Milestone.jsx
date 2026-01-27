import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const Milestone = () => {
  return (
    <section className="w-full font-serif py-12 px-10 bg-[#D8ECFF] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side (Text) */}
        <motion.div
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <motion.h2 className="text-2xl sm:text-4xl lg:text-5xl  italic text-[#00285E] leading-snug">
            Behind Every Milestone <br />
            <span className="text-[#CF3528]">Is a Movement</span>
          </motion.h2>

          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            Our success is written by people—visionary board members, incredible
            teachers, volunteers, and families who believed in the mission.
          </p>

          <p className="italic text-gray-800 text-base sm:text-lg leading-relaxed">
            “Every brick was placed with du’a. Every decision made with the
            future of our Ummah in mind.”
          </p>
        </motion.div>

        {/* Right Side (Image with Background Shape) */}
        <motion.div
          variants={SlideLeft(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex justify-center mb-12 mt-14 md:mt-0"
        >
          {/* Blue bordered div (pushed down a bit) */}
          <div className="w-100 h-100 border-4 border-[#00285E] rounded-tr-[80px] translate-y-8 relative">
            {/* Overlapping blue filled div */}
            <div className="absolute -top-6 -left-2 w-78 md:w-96 h-104 bg-[#00285E] rounded-tr-[100px] flex items-center justify-center shadow-lg">
              <img
                src="/academics/growth.png"
                alt="Growth"
                className="w-78 md:w-92 h-142 bottom-0 right-2 absolute object-cover rounded-tr-[60px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Milestone;
