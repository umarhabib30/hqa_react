import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation";

const GallerySection = ({ heading, images = [] }) => {
  const [showMore, setShowMore] = useState(false);
  const visibleImages = showMore ? images : images.slice(0, 10);

  return (
    <section className="w-full px-5 sm:px-10 py-12 font-serif overflow-hidden">
      <motion.h2
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 italic mb-12 text-[#00285E]"
      >
        {heading}
      </motion.h2>

      {/* ===== First Row (1 big + 4 small) ===== */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Big Image */}
        <div className="lg:w-2/5 w-full overflow-hidden rounded-2xl shadow-lg">
          <img
            src={visibleImages[0]}
            alt={`${heading} 1`}
            className="w-full cursor-pointer h-64 sm:h-80 lg:h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* 4 Small Images */}
        <div className="lg:w-3/5 w-full grid grid-cols-2 sm:grid-cols-2 gap-4">
          {visibleImages.slice(1, 5).map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md">
              <img
                src={img}
                alt={`${heading} ${index + 2}`}
                className="w-full cursor-pointer h-40 sm:h-48 md:h-52 lg:h-78 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ===== Second Row (4 small + 1 big) ===== */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* 4 Small Images */}
        <div className="lg:w-3/5 w-full grid grid-cols-2 sm:grid-cols-2 gap-4 order-2 lg:order-1">
          {visibleImages.slice(5, 9).map((img, index) => (
            <div
              key={index + 5}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={img}
                alt={`${heading} ${index + 6}`}
                className="w-full h-40 sm:h-48 md:h-52 lg:h-78 object-cover transform hover:scale-105 cursor-pointer transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Big Image */}
        <div className="lg:w-2/5 w-full overflow-hidden rounded-2xl shadow-lg order-1 lg:order-2 mb-4 lg:mb-0">
          <img
            src={visibleImages[9]}
            alt={`${heading} 10`}
            className="w-full h-64 sm:h-80 lg:h-full cursor-pointer object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* ===== Third Row  ===== */}
      {showMore && images.length > 10 && (
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Big Image */}
          <div className="lg:w-2/5 w-full overflow-hidden rounded-2xl shadow-lg">
            <img
              src={visibleImages[10]}
              alt={`${heading} 11`}
              className="w-full h-64 sm:h-80 lg:h-full object-cover transform hover:scale-105 cursor-pointer transition-transform duration-300"
            />
          </div>

          {/* 4 Small Images */}
          <div className="lg:w-3/5 w-full grid grid-cols-2 sm:grid-cols-2 gap-4 cursor-pointer">
            {visibleImages.slice(11, 15).map((img, index) => (
              <div
                key={index + 11}
                className="overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={img}
                  alt={`${heading} ${index + 12}`}
                  className="w-full h-40 sm:h-48 md:h-52 lg:h-78 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {images.length > 10 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-[#00285E] text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
