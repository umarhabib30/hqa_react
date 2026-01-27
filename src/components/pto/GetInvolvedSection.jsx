import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideLeft, SlideRight } from "../../../utility/animation";
// Import your component
import PTOEmailCollectionForm from "./PTOEmailCollectionForm";

export default function GetInvolvedSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const cards = [
    { icon: "/pto/card1.png", title: "Plan family events" },
    { icon: "/pto/card2.png", title: "Join committees" },
    { icon: "/pto/card3.png", title: "Help with bake sales" },
    { icon: "/pto/card4.png", title: "Tech support" },
  ];

  return (
    <section className="relative w-full bg-[#F9FAFB] py-12 px-10 font-serif overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
        <motion.div
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-[#00285E1A] text-[#00285E] rounded-3xl px-6 py-3 inline-block p">
            Join Us
          </div>

          <h2 className="text-[#00285E] h1 mt-4 leading-snug">Get Involved</h2>

          <p className="text-gray-800 mt-4 p">
            The HQA PTO Alliance is your gateway to meaningful community
            connections. Volunteering strengthens school programs and helps you
            build lifelong friendships.
          </p>

          <div className="grid grid-cols-2 gap-2 md:gap-6 mt-8">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-xl transition"
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-16 h-16 mb-4"
                />
                <p className="text-gray-800 p">{card.title}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            {/* CLICK HANDLER ADDED HERE */}
            <button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-[#CF3528] cursor-pointer text-white rounded-2xl hover:bg-red-700 transition"
            >
              <img src="/pto/heart.png" alt="heart" className="w-5 h-5" />
              Sign Up to Volunteer
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full h-[350px] md:h-[550px]"
        >
          <motion.img
            src="/pto/joinbg.png"
            alt="Background"
            className="hidden md:block cursor-pointer absolute inset-0 w-full h-full object-contain rounded-xl"
            whileHover={{ rotate: 6 }}
            transition={{ type: "spring", stiffness: 140, damping: 12 }}
          />

          <div className="relative z-10 w-[90%] md:w-[84%] h-[380px] md:h-[350px] mx-auto md:mt-26 rounded-xl overflow-hidden">
            <img
              src="/pto/joinHero.jpg"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {isFormOpen && (
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
              className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-600"
              >
                ✕
              </button>

              {/* Form Component */}
              <PTOEmailCollectionForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
