import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const Message = () => {
  return (
    <section className="w-full px-10 py-12 font-serif overflow-hidden">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Left: Image -  */}
        <motion.div
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-2 md:order-1 w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[430px]"
        >
          <img
            src="/student/faith.jpeg"
            alt="HQA Admissions Team"
            className="w-full h-full object-cover "
          />
        </motion.div>

        {/* Right: Text Card -  */}
        <motion.div
          variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-1 md:order-2 bg-[#00285E] flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full "
        >
          <h1
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-l-4 md:border-l-[6px] border-[#FAF1C4] pl-2 md:pl-2 h2 italic text-white mb-4 md:mb-6 leading-tight"
          >
            Faith-Centered Environment{" "}
            <p className="text-3xl">Every aspect of student life at HQA </p>
          </h1>

          {/* Three paragraphs */}
          <div className="space-y-3 md:space-y-4">
            <p className="text-white p leading-tight">
              Every aspect of student life at HQA is infused with Islamic
              values. From daily congregational prayers (Salat) to dedicated
              Quran recitation sessions and in-depth Islamic studies, students
              develop a strong and personal connection with their faith. They
              learn to embody the character (akhlaq) of a balanced Muslim in
              their everyday interactions, fostering humility, honesty, and
              compassion. Special emphasis is placed on Quran memorization
              (Hifz) and understanding, with structured programs and dedicated
              teachers to guide students on their journey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Message;
