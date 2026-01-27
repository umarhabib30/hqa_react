import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const requirements = [
  "Introduce new programs in AI, digital <br> literacy & interfaith awareness",
  "Expand our facilities and scholarships to <br> welcome more families",
  "Strengthen social responsibility through civic and inter-community engagement",
];

const Tilted = () => {
  return (
    <section className="py-12 px-10 bg-[#FFFDF5] font-serif">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl italic  text-center mb-6 text-[#CF3528]">
        Where We're Headed{" "}
      </h2>
      <p className="text-center text-lg md:text-2xl max-w-5xl mx-auto mb-10 text-gray-700">
        Innovation, Expansion, Unity
      </p>
      <p className="text-lg md:text-xl text-center italic text-gray-800 mb-10">
        As we move forward, we stay rooted in our faith and ready for the
        future:{" "}
      </p>

      <div className="w-full grid md:grid-cols-2 items-stretch gap-6">
        {/* Left Side (Cards with shrink effect) */}
        <div className="flex flex-col space-y-4 h-full">
          {requirements.map((req, index) => {
            const isDark = index % 2 === 0;
            return (
              <div
                key={index}
                style={{
                  width: `calc(100% - ${index * 2}%)`, // shrink effect
                }}
                className={`flex items-center p-6 clip-card transition-all duration-300
                  ${
                    isDark
                      ? "bg-[#00285E] text-white"
                      : "bg-[#BCDDFC] text-[#00285E]"
                  }
                `}
              >
                {/* Use dangerouslySetInnerHTML to render HTML tags */}
                <p
                  className="text-xl"
                  dangerouslySetInnerHTML={{ __html: req }}
                />
              </div>
            );
          })}
        </div>

        {/* Right Side (Image with tilt effect) */}
        <div className="relative shadow-lg overflow-hidden w-full h-full clip-left">
          <img
            src="/admission/library.jpg"
            alt="Library"
            className="w-full h-[400px] md:h-[350px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Tilted;
