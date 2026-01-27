import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation";

const Action = () => {
  return (
    <section className="w-full px-6 sm:px-8 md:px-10 py-12 font-serif bg-[#00285E] overflow-hidden">
      <motion.div
        variants={SlideUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-5 gap-6"
      >
        {/* Left: Text  */}
        <div className="order-2 md:order-1 flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full md:col-span-2">
          <h2 className="border-l-4 md:border-l-[6px] border-[#FAF1C4] pl-3 h1 italic text-white mb-4 md:mb-6 leading-tight">
            Leadership in Action
          </h2>

          <div className="space-y-2 leading-tight">
            <p className="text-white p">
              Whether in the boardroom or the classroom, our leaders model
              excellence, faith, and service. Their impact reaches far beyond
              policies — they build culture, set standards, and shape futures.
            </p>
            <p className="text-white p">
              “Transformational education starts with transformational
              leadership — and ours is rooted in the Prophetic example of
              compassion, justice, and vision.”
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="order-1 md:order-2 w-full h-56 sm:h-64 md:h-80 xl:h-[440px] md:col-span-3">
          <img
            src="/leadership/Leadership in.jpeg"
            alt="HQA Admissions Team"
            className="w-full h-full rounded-md object-cover shadow-[0_0_25px_rgba(0,0,0,0.3)]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Action;
