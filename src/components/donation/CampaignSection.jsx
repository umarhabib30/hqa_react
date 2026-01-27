import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const CampaignSection = () => {
  const images = [
    {
      src: "/donation/msg.jpg",
      title: "Katy Campus",
      text: "Expanding our reach with modern facilities.",
    },
    {
      src: "/donation/c1.jpg",
      title: "Main Campus",
      text: "Empowering students for success.",
    },
    {
      src: "/donation/c2.jpg",
      title: "New Facility",
      text: "Building for the future generation.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 lg:px-16 py-16 bg-[#fffafa] font-serif overflow-hidden">
      {/* Center Heading */}
      <motion.h2
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 text-[#00285E] leading-tight mb-6"
      >
        Advancing together <br />
        <span className="text-[#D32F2F] italic">with greater strength</span>
      </motion.h2>

      {/* Campaign Target Section */}
      <motion.div
        variants={SlideRight(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:flex lg:items-start lg:justify-between w-full gap-10 mb-16"
      >
        {/* Left Text */}
        <div className="lg:w-1/2">
          <h2 className="h2 font-semibold text-[#00285E] mb-3">
            Campaign Targets
          </h2>
          <p className="text-gray-700 p">
            The "Advancing Together with Greater Strength" campaign focuses on
            uniting our community to raise funds for a premier Islamic school in
            Houston. With a strong record of academic excellence and Qur’an
            proficiency, we aim to build facilities that inspire the next
            generation of learners.
          </p>

          {/* --- Subheading 1 --- */}
          <h3 className="h2 mt-4 mb-4 text-[#00285E] ">Capital Projects</h3>

          {/* --- Cards 1 & 2 --- */}
          <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className=" rounded-xl p-4  bg-white shadow-[0_8px_30px_rgba(0,40,94,0.25)] transition hover:-translate-y-1 duration-300">
              <p className="text-gray-800 mb-2 p">
                Upgradation of current facilities at Katy Campus
              </p>
              <p className="text-[#00285E] text-2xl font-bold">$2 million</p>
            </div>

            {/* Card 2 */}
            <div className=" rounded-xl p-4 bg-white shadow-[0_8px_30px_rgba(0,40,94,0.25)] transition hover:-translate-y-1 duration-300">
              <p className="text-gray-800 mb-2 p">
                Construction of State of the Art Richmond Campus
              </p>
              <p className="text-[#00285E] text-2xl font-bold">$6 million</p>
            </div>
          </div>

          {/* --- Subheading 2 --- */}
          <h3 className="h2 text-[#00285E] mt-4 mb-4 ">
            Operational projects{" "}
          </h3>

          {/* --- Cards 3 & 4 --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 3 */}
            <div className=" rounded-xl p-4 shadow-[0_8px_30px_rgba(0,40,94,0.25)] bg-white transition hover:-translate-y-1 duration-300">
              <p className="text-gray-800 mb-2 p">
                Upgradation of technology at Katy Campus
              </p>
              <p className="text-[#00285E] text-2xl font-bold">$1 million</p>
            </div>

            {/* Card 4 */}
            <div className=" rounded-xl p-4 bg-white shadow-[0_8px_30px_rgba(0,40,94,0.25)] transition hover:-translate-y-1 duration-300">
              <p className="text-gray-800 mb-2 p">
                Recruitment & Education of educators
              </p>
              <p className="text-[#00285E] text-2xl font-bold">$1 million</p>
            </div>
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="relative lg:w-1/2 w-full mt-10 lg:mt-0">
          <motion.img
            key={images[current].src} // ensures framer-motion sees it as a new image
            src={images[current].src}
            alt={images[current].title}
            className="w-full h-[350px] md:h-[400px] lg:h-[620px] object-cover rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Transparent Overlay */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[90%] bg-white/20 backdrop-blur-md text-white py-4 px-6 rounded-2xl border border-white/30 shadow-lg">
            <h3 className="text-2xl font-semibold">{images[current].title}</h3>
            <p className="text-sm">{images[current].text}</p>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer"
          >
            <FaArrowLeft className="text-[#00285E]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer"
          >
            <FaArrowRight className="text-[#00285E]" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-8 rounded-full cursor-pointer transition ${
                  current === index ? "bg-[#D32F2F]" : "bg-gray-300/70"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CampaignSection;
