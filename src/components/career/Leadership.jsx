import React from "react";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const Leadership = () => {
  return (
    <section className="w-full overflow-x-hidden px-2 sm:px-6 lg:px-8 py-10 font-serif overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Left text */}
        <motion.div
          variants={SlideRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-1 flex flex-col justify-center text-center md:text-left px-2 sm:px-0"
        >
          <h1 className="italic h2  text-gray-900">
            HQA Leadership <br /> Team
          </h1>
          <p className="text-red-700 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4">
            Requirements to Apply
          </p>
        </motion.div>

        {/* Right side two boxes */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-0">
          <div className="w-full aspect-[2/1] sm:aspect-[4/2] min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] flex flex-col justify-center items-center text-center p-3 sm:p-6 md:p-8 bg-[#00285E] shadow-md text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"></div>

          <div className="w-full aspect-[2/1] sm:aspect-[4/2] min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] bg-gray-200 overflow-hidden shadow-md">
            <img
              src="/career/box1.jpg"
              alt="box1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-0 mt-0">
        {[
          { src: "/career/box2.jpg", type: "img" },
          {
            type: "text",
            number: "1",
            text: (
              <>
                Minimum <span className="text-red-600 italic">5</span>
                <br /> years of teaching <br /> experience.
              </>
            ),
            bg: "#00285E",
            textColor: "text-white",
          },
          { src: "/career/box3.jpg", type: "img" },
          {
            type: "text",
            number: "2",
            text: (
              <>
                Teaching <br /> certification is a <br />
                strong plus.
              </>
            ),
            bg: "#BCDDFC",
            textColor: "text-[#00285E]",
          },
          {
            type: "text",
            number: "3",
            text: (
              <>
                Passion for Islamic <br /> education and <br />
                student development.
              </>
            ),
            bg: "#00285E",
            textColor: "text-white",
          },
          { src: "/career/box4.jpg", type: "img" },
          {
            type: "text",
            number: "4",
            text: (
              <>
                Ability to <br /> collaborate in a <br /> faith-based learning
                environment.
              </>
            ),
            bg: "#BCDDFC",
            textColor: "text-[#00285E]",
          },
          { src: "/career/box5.jpg", type: "img" },
        ].map((box, i) =>
          box.type === "img" ? (
            <div
              key={i}
              className="w-full aspect-[4/3] sm:aspect-[4/3] min-h-[180px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[240px] xl:min-h-[280px] bg-gray-200 overflow-hidden shadow-md"
            >
              <img
                src={box.src}
                alt={`box${i + 2}`}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div
              key={i}
              className={`w-full aspect-[4/3] sm:aspect-[4/3] min-h-[180px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[240px] xl:min-h-[280px] flex flex-col justify-center ${box.textColor} text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-3 sm:p-4 md:p-6 bg-[${box.bg}] shadow-md`}
            >
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl italic mb-2 sm:mb-4">
                {box.number}
              </p>
              <p>{box.text}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Leadership;
