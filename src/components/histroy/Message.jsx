import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const Rooted = () => {
  return (
    <section className="w-full px-10 py-12 font-serif">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Left: Image - Order changes on mobile */}
        <div className="order-2 md:order-1 w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px]">
          <img
            src="/histroy/msg.jpg"
            alt="HQA Admissions Team"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Right: Text Card - Order changes on mobile */}
        <div className="order-1 md:order-2 bg-[#00285E] flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full ">
          {/* Heading with white border-left */}
          <motion.h2
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-l-4 md:border-l-[6px] border-[#FAF1C4] pl-2 md:pl-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl italic text-white mb-4 md:mb-6 leading-snug"
          >
            Rooted in Vision, Rising Through Faith
            <motion.p
              variants={SlideRight(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl"
            >
              From a Modest Start to a Movement of Light
            </motion.p>
          </motion.h2>

          {/* Three paragraphs */}
          <div className="space-y-3 md:space-y-4">
            <motion.p
              variants={SlideRight(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white text-sm sm:text-base md:text-lg leading-relaxed"
            >
              What began as a small dream is now a thriving hub of Islamic
              excellence in Houston. Houston Quran Academy (HQA) was founded to
              nurture future leaders—intellectually sharp, spiritually grounded,
              and guided by the Qur’an and Sunnah.
            </motion.p>
            <motion.p
              variants={SlideRight(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Each milestone of our journey reflects resilience, unity, and a
              firm belief in the transformative power of Islamic education.
            </motion.p>
            <motion.p
              variants={SlideRight(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white text-sm sm:text-base md:text-lg leading-relaxed "
            >
              “We didn’t just build a school — we built a legacy of light,
              learning, and leadership.”
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooted;
