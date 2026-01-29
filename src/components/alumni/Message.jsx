import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const Rooted = () => {
  return (
    <section className="w-full px-10 py-12 font-serif overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Left:  */}
        <motion.div
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-2 md:order-1 w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[420px]"
        >
          <img
            src="/public/alumni/thiss.jpeg"
            alt="HQA Admissions Team"
            className="w-full h-full object-cover "
          />
        </motion.div>

        {/* Right */}
        <motion.div
          variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-1 md:order-2 bg-[#00285E] flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full "
        >
          <h2 className="border-l-4 md:border-l-[6px] border-[#FAF1C4] pl-2 md:pl-3 h1 italic text-white mb-4 md:mb-6 leading-tight">
            This is Your Society of Alumni
          </h2>

          <div className="space-y-3 md:space-y-4">
            <p className="text-white p leading-tight">
              The HQA Society of Alumni (SOA) is more than a network — it’s a
              lifelong bond. Whether you were part of our first graduating class
              or just recently received your diploma, you are the living spirit
              of HQA’s mission.
            </p>
            <p className="text-white p leading-tight">
              Together, we honor the past, uplift the present, and shape the
              future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rooted;
