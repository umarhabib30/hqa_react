import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
export default function HelpSection() {
  return (
    <section className="w-full flex justify-center px-10 py-16 font-serif bg-white">
      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-[90%] bg-[#002B5B] rounded-3xl py-12 px-6 flex flex-col items-center text-center shadow-lg"
      >
        <img
          src="/pto/question.png"
          alt="help icon"
          className="w-20 h-20 mb-6"
        />

        <h2 className="text-white h1 font-semibold">Need Help?</h2>

        <p className="text-white/80 text-lg mt-3 max-w-2xl">
          We're here to support you every step of the way
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#002B5B] text-lg font-medium cursor-pointer border-2 border-white hover:opacity-90 transition">
            <img src="/pto/email.jpg" alt="email icon" className="w-5 h-5" />
            Email Us
          </button>

          <button
            className="px-10 py-3 rounded-full text-white text-lg font-medium cursor-pointer hover:opacity-90 transition"
            style={{ backgroundColor: "#FFA500" }}
          >
            Helpline
          </button>
        </div>
      </motion.div>
    </section>
  );
}
