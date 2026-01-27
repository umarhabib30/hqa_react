import React from "react";
import { FaArrowRight } from "react-icons/fa"; // react-icon for button

const cta = () => {
  return (
    <section className="bg-[#BCDDFC] pt-30 pb-30 px-10 flex flex-col items-center justify-center text-center font-serif text-white">
      {/* Title */}
      <h2 className="text-3xl text-[#00285E] sm:text-4xl md:text-5xl  italic mb-6">
        Help Us Write the <span className="text-red-700"> Next Chapter</span>
      </h2>

      {/* Paragraph */}
      <p className="max-w-3xl text-lg  text-gray-800 leading-relaxed mb-10">
        Be Part of Something Bigger
      </p>
      <p className="max-w-3xl text-lg  text-gray-800 leading-relaxed mb-20">
        Whether you’re a parent, an alum, or a supporter—your journey with HQA
        begins now.{" "}
      </p>

      {/* Button */}
      <button className="flex items-center gap-2  cursor-pointer bg-white  hover:bg-[#00285E] hover:text-white text-red-700 px-6 py-3 rounded-lg shadow-md text-sm sm:text-base  transition">
        Donate Now
      </button>
    </section>
  );
};

export default cta;
