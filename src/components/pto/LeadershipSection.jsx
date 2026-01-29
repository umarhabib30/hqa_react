import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
export default function LeadershipSection() {
  return (
    <section className="w-full bg-white py-12 px-10 font-serif overflow-hidden">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
        {/* LEFT SIDE */}
        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-[#FFA5001A] text-[#FFA500] rounded-3xl px-8 py-3 inline-block p">
            Leadership Team
          </div>

          <h2 className="text-[#00285E] h1 mt-4 leading-snug">
            Meet Your 2025–2026 <br />
            <span className="text-[#cf3528]">PTO Leadership Team </span>
          </h2>

          <p className="text-gray-800 mt-4 p">
            We're a dedicated group of HQA parents passionate about building a
            vibrant, connected community. Together, we bring experience,
            enthusiasm, and heart to every initiative.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={SlideLeft(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full h-[350px] md:h-[390px]"
        >
          <img
            src="/pto/herobg.png"
            alt="Background"
            className="hidden md:block absolute inset-0 w-full h-full object-cover rounded-xl"
          />

          {/* Background Image (Mobile) */}
          <img
            src="/pto/herobgMbl.png"
            alt="Background Mobile"
            className="md:hidden absolute inset-0 w-full h-[300px] object-cover rounded-xl"
          />

          <div className="relative z-10 w-[90%] md:w-[90%] h-[270px] md:h-[330px] mx-auto mt-10 rounded-xl overflow-hidden">
            <img
              src="/pto/hero.png"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
