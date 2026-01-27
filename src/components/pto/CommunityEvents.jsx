import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";

export default function CommunityEvents() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://hquranacademy.com/api/ptoGalleries")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && data.data.length) {
          const galleryImages = data.data[0].images.map(
            (img) => `https://hquranacademy.com/storage/${img}`,
          );
          setImages(galleryImages);
        }
      })
      .catch((err) => console.error("Gallery API Error:", err));
  }, []);

  return (
    <section className="w-full flex justify-center px-10 py-16 font-serif bg-white">
      <div className="w-full">
        <motion.div
          variants={SlideUp(0.63)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-[#FFA5001A] rounded-full py-3 px-8 inline-block">
            <h2 className="text-[#FFA500] p">Community Events</h2>
          </div>
        </motion.div>

        <motion.div
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <h3 className="text-[#002B5B] h1">Celebrate Together</h3>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] transition"
            >
              <img src={img} alt="event" className="w-full h-80 object-cover" />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 rounded-full bg-[#002B5B] text-white text-lg font-medium hover:opacity-80 transition cursor-pointer">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
