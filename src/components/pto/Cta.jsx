import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../../../utility/animation";
export default function Cta() {
  return (
    <section className="w-full flex justify-center px-4 sm:px-10 py-16 font-serif bg-white">
      <motion.div
        variants={SlideRight(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-[90%] bg-[#002B5B] rounded-3xl py-6 px-4 sm:px-6 flex flex-col items-center text-center shadow-lg overflow-hidden"
      >
        <div className="absolute -top-6 -left-6 w-16 h-16 sm:w-24 sm:h-24 bg-[#1A3E70] rounded-full"></div>

        <div className="absolute -bottom-8 -right-8 w-22 h-22 sm:w-40 sm:h-40 bg-[#1A3E70] rounded-full"></div>

        <p className="text-white text-xl sm:text-2xl font-semibold">
          We're Here for You
        </p>

        <p className="text-white/80 text-base sm:text-lg mt-3 max-w-md sm:max-w-2xl">
          Reach out anytime — we're always ready to listen, support, and
          connect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto justify-center items-center">
          <button className="flex items-center gap-2 px-4 sm:px-8 py-3 rounded-full bg-white text-[#002B5B] text-lg font-medium cursor-pointer border-2 border-white hover:opacity-90 transition w-auto sm:w-auto justify-center">
            <img src="/icons/email.png" alt="email icon" className="w-5 h-5" />
            pto@hquranacademy.org
          </button>

          <button
            className="px-4 sm:px-10 py-3 rounded-full text-white text-lg font-medium cursor-pointer hover:opacity-90 transition w-auto sm:w-auto"
            style={{ backgroundColor: "#FFA500" }}
          >
            Join WhatsApp Group
          </button>
        </div>
      </motion.div>
    </section>
  );
}
