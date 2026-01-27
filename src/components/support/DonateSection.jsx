import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { Link } from "react-router-dom";
export default function DonateSection() {
  return (
    <section className="w-full flex justify-center px-6 py-20 font-serif">
      <div className="max-w-6xl w-full  rounded-3xl p-10 md:p-16 flex flex-col items-center">
        <div className="w-full bg-[#BCDDFC] rounded-3xl p-10 flex flex-col items-center text-center">
          <motion.img
            variants={SlideUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src="/support/icon.png"
            alt="icon"
            className="w-16 h-16 object-contain mb-6"
          />

          <motion.h2
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h1 text-[#2C2C2C] mb-4"
          >
            Your Gift Transforms Lives
          </motion.h2>

          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl text-gray-700 p leading-relaxed mb-8"
          >
            Every contribution—big or small—helps us build a brighter future
            grounded in Quran, character, and excellence.
          </motion.p>

          <Link to="/donation-form" className="inline-block">
            <motion.button
              type="button"
              variants={SlideRight(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-white text-[#0A2F68] cursor-pointer px-6 py-3 rounded-full shadow-md hover:bg-[#0A2F68] hover:text-white transition-all duration-200"
            >
              Donate Now
              <img
                src="/support/donate.png"
                alt="donate icon"
                className="w-6 h-6 object-contain"
              />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
