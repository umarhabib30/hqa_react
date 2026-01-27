import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";

export default function SupportHuston() {
  return (
    <section className="w-full bg-[#052B5B] text-white py-20 px-6 flex flex-col items-center font-serif">
      <motion.h2
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" h1 font-serif text-center mb-4"
      >
        Support Houston Quran Academy
      </motion.h2>

      <motion.p
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-4xl p text-gray-200 mb-10 leading-relaxed"
      >
        Your generosity shapes the future of our students, our community, and
        our Ummah.
      </motion.p>
      <motion.p
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-5xl p text-gray-200 mb-10 leading-relaxed"
      >
        Giving to a top Islamic school in Houston—recognized for producing
        exceptional Quran Huffaz and achieving academic excellence—is far more
        than an act of kindness. It is an investment in the next generation.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {/* Quote Box 1 */}
        <motion.div
          variants={SlideRight(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#eefdf7] text-[#0A3D2A] p-6 rounded-xl shadow-md relative overflow-hidden"
        >
          <img
            src="/support/i1.png"
            alt="quote"
            className="w-10 h-10 mb-4 object-contain"
          />

          <p className="leading-relaxed mb-4 p italic">
            "The example of those who spend their wealth in the way of Allah is
            like a seed that sprouts seven ears; in every ear is a hundred
            grains."
          </p>
          <p className="font-semibold text-[#007A55] p">— Quran 2:261</p>

          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#dff7ee] rounded-full opacity-60" />
        </motion.div>

        {/* Quote Box 2 */}
        <motion.div
          variants={SlideRight(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#eefdf7] text-[#03335F] p-6 rounded-xl shadow-md relative overflow-hidden"
        >
          <img
            src="/support/i2.png"
            alt="quote2"
            className="w-10 h-10 mb-4 object-contain"
          />

          <p className="leading-relaxed mb-4 p relative z-10 italic">
            "The believer's shade on the Day of Resurrection will be his
            charity."
          </p>
          <p className="font-semibold relative z-10 p text-[#007595]">
            — Prophet Muhammad (ﷺ), Sahih al-Bukhari
          </p>

          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#d4e9ff] rounded-full opacity-60" />
        </motion.div>
      </div>

      <motion.p
        variants={SlideUp(1.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-gray-200 max-w-3xl mt-10 p leading-relaxed"
      >
        Your support empowers students, strengthens our community, and
        contributes to lifelong spiritual and academic growth.
      </motion.p>
    </section>
  );
}
