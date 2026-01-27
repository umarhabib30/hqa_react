import { SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
export default function Cards() {
  const stats = [
    {
      title: "Admission Open:",
      date: "January 10th",
      bg: "#FFFF",
      titleColor: "#CF3528",
      dateColor: "#252626",
    },
    {
      title: "Priority Deadline:",
      date: "March 15th",
      bg: "#E3F1FF",
      titleColor: "#00285E",
      dateColor: "#252626",
    },
    {
      title: "Final Deadline:",
      date: "June 1st",
      bg: "#FFFF",
      titleColor: "#CF3528",
      dateColor: "#252626",
    },
    {
      title: "Rolling Admissions:",
      date: "Based on Availability",
      bg: "#E3F1FF",
      titleColor: "#00285E",
      dateColor: "#252626",
    },
  ];

  return (
    <section className="bg-white pt-16 md:pt-24 pb-16 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 font-serif overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <motion.h2
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 mb-12  italic leading-snug px-2 text-[#CF3528]"
        >
          Important Dates
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md px-18 py-16 md:px-10 md:py-10 cursor-pointer flex flex-col items-center justify-center transition-all border border-gray-200 duration-300 hover:scale-105"
              style={{ backgroundColor: item.bg }}
            >
              <motion.h3
                variants={SlideUp(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h2 italic mb-3 text-center"
                style={{ color: item.titleColor }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                variants={SlideUp(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p font-medium text-center"
                style={{ color: item.dateColor }}
              >
                {item.date}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
