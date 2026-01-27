import React from "react";
import { SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const Hours = () => {
  return (
    <section className="w-full px-10 py-12 bg-[#BCDDFC] font-serif">
      <motion.h1
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center  italic h1 text-[#00285E] mb-6"
      >
        School Hours
      </motion.h1>

      {/* Table Container */}
      <motion.div
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center py-8"
      >
        <table className="w-full max-w-6xl italic p border-collapse rounded-2xl overflow-hidden shadow-[0_15px_30px_5px_rgba(0,0,0,0.25),0_5px_10px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.2)]">
          <thead>
            <tr className="bg-[#00285E] text-white">
              <td className="px-4 py-5 text-center border-r border-gray-300">
                Monday – Thursday
              </td>
              <td className="px-4 py-5 text-center">8:00 AM – 4:00 PM</td>
            </tr>
          </thead>
          <tbody>
            {[{ day: "Friday", time: "8:00 AM – 12:45 PM" }].map((row, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0
                    ? "bg-[#F2F7FF] text-black"
                    : "bg-white text-gray-800"
                }`}
              >
                <td className="px-4 py-5 border-r border-b border-gray-300 text-center font-medium">
                  {row.day}
                </td>
                <td className="px-4 py-5 border-b border-gray-300 text-center">
                  {row.time}
                </td>
              </tr>
            ))}

            <tr className="bg-white text-gray-800">
              <td
                colSpan="2"
                className="px-4 py-4 border-t border-gray-300 text-center italic"
              >
                School doors open at 7:40 am
                <br />
                Morning Assembly starts at 7:45am{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default Hours;
