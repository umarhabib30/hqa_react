import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const AdmissionDates = () => {
  return (
    <section className="relative w-full bg-[#BCDDFC] py-12 px-4 sm:px-6 md:px-10 font-serif overflow-hidden">
      <div className="max-w-9xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Side Content */}
        <div className="flex-1 space-y-6 w-full">
          <h1 className="h1 text-[#00285E] text-center md:text-left">
            Important Admission <br className="hidden sm:block" /> Dates For
            2026
          </h1>

          <motion.div
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white shadow-md p-4 rounded-md"
          >
            <p className="text-gray-800 p">
              Re-Enrollement Opens:{" "}
              <span className="font-semibold">February 12, 2026</span>
            </p>
          </motion.div>

          <motion.div
            variants={SlideRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white shadow-md p-4 rounded-md"
          >
            <p className="text-gray-800 font-medium mb-2 p">
              Admission Test Dates:
            </p>
            <motion.ul
              variants={SlideRight(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="list-disc list-inside text-[#00285E] space-y-1 p"
            >
              <li>
                <span className="font-semibold">December 10, 2026</span>
              </li>
              <li>
                <span className="font-semibold">February 8, 2026</span>
              </li>
              <li>
                <span className="font-semibold">March 2, 2026</span>
              </li>
            </motion.ul>
          </motion.div>

          <motion.div
            variants={SlideRight(0.9)}
            initial="hidden"
            whileInView="visible"
            className="bg-[#DFF5E1] shadow-md p-4 rounded-md"
          >
            <p viewport={{ once: true }} className="text-gray-800 p">
              Admission Test Fee:{" "}
              <span className="font-semibold">$50 per child</span>
            </p>
          </motion.div>

          <motion.div
            variants={SlideRight(1.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#FFF5E6] shadow-md p-4 rounded-md"
          >
            <p className="text-gray-800 p">
              Seats are limited. Early applications are strongly encouraged.
            </p>
          </motion.div>
        </div>

        {/* Right Side  */}
        <div className="flex-1 flex justify-center items-center w-full mt-8 md:mt-0">
          <div className="relative w-full max-w-xs h-64 sm:h-80 md:h-96 flex items-center justify-center">
            <img
              src="/academics/gnarik.jpg"
              alt="p1"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full object-cover border-4 border-red-800 shadow-lg absolute left-0 top-1/2 transform -translate-y-1/2 z-20"
            />
            <img
              src="/enrollement/enrollme.jpg"
              alt="p2"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full object-cover border-4 border-orange-500 shadow-lg absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
            />
            <img
              src="/enrollement/ellrollmet.jpg"
              alt="p3"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-600 shadow-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0 z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionDates;
