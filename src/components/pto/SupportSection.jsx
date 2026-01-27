import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideLeft, SlideRight } from "../../../utility/animation";
// Import your component
import AlumniRSVP from "./AlumniRSVP";

export default function SupportSection() {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  return (
    <section className="w-full flex justify-center px-10 py-16 relative overflow-hidden font-serif">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full border-[60px] border-[#eef2f7] -translate-x-10 pointer-events-none"></div>

      <div className="w-full max-w-9xl bg-white shadow-lg rounded-3xl overflow-hidden relative z-10 flex flex-col lg:flex-row">
        {/* Left Section */}
        <motion.div
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 p-8 lg:p-12 bg-white"
        >
          <h2 className="p font-semibold text-[#00285E] mb-6">
            Easy Ways to Join
          </h2>
          <div
            className="border border-[#00285E] cursor-pointer bg-[#BCDDFC4D] rounded-xl 
                p-4 sm:p-6 lg:p-8 mb-6 
                text-center sm:text-left"
          >
            <h3 className="font-semibold text-[#00285E] text-lg sm:text-xl">
              Zelle
            </h3>
            <p className="text-[#364153] mt-2 p break-all sm:break-normal">
              onlinepayment@hquranacademy.org
            </p>
          </div>

          <div className="border border-[#ffa500] cursor-pointer bg-[#fff8e8] rounded-xl p-8">
            <h3 className="p font-semibold text-[#ffa500]">Venmo</h3>
            <p className="text-[#364153] p mt-1">@hqaurnacademy</p>
          </div>

          <p className="text-[#364153] text-center p mt-5">
            Please write “PTO” in the memo.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 bg-[#05224c] text-white p-8 lg:p-12 relative"
        >
          <div className="w-full flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src="/pto/dollar.png" alt="icon" className="w-18 h-18" />
            </div>
          </div>

          <h3 className="text-center text-xl font-semibold mb-4">
            Member Benefits
          </h3>

          <div className="flex flex-col gap-4 mt-6">
            <div className="bg-[#0b2f62] rounded-xl p-4 flex gap-3 items-center">
              <img src="/pto/s1.png" alt="" className="w-12 h-12" />
              <p className="p">Priority event invitations</p>
            </div>

            <div className="bg-[#0b2f62] rounded-xl p-4 flex gap-3 items-center">
              <img src="/pto/s2.png" alt="" className="w-12 h-12" />
              <p className="p">Special PTO “Star Family” shoutouts</p>
            </div>

            <div className="bg-[#0b2f62] rounded-xl p-4 flex gap-3 items-center">
              <img src="/pto/s3.png" alt="" className="w-12 h-12" />
              <p className="p">Exclusive updates</p>
            </div>
          </div>

          <div className="w-full flex justify-center mt-8">
            {/* ADDED ONCLICK HERE */}
            <button
              onClick={() => setIsRSVPOpen(true)}
              className="bg-[#FFA500] text-white cursor-pointer rounded-full w-full py-5 p shadow-lg hover:bg-[#e69500] transition-colors"
            >
              Join Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* MODAL FOR AlumniRSVP */}
      <AnimatePresence>
        {isRSVPOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsRSVPOpen(false)}
                className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-700 font-bold"
              >
                ✕
              </button>

              <div className="p-2">
                <AlumniRSVP />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
