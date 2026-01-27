import React from "react";

const requirements = [
  "Introduce new programs in AI, digital literacy & interfaith awareness",
  "Expand our facilities and scholarships to welcome more families",
  "Strengthen social responsibility through civic and inter-community engagement",
];

const TiltedMobile = () => {
  return (
    <section className="py-12 px-6 sm:px-10 font-serif">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl italic text-center mb-6 text-[#CF3528]">
        Where We’re Headed
      </h2>
      <p className="text-center text-lg sm:text-xl italic mb-2 text-gray-800">
        Innovation, Expansion, Unity
      </p>
      <p className="text-center text-lg sm:text-xl italic mb-10 text-gray-800">
        As we move forward, we stay rooted in our faith and ready for the
        future:
      </p>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left Side (Cards) */}
        <div className="flex flex-col space-y-5">
          {requirements.map((req, index) => {
            const isDark = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex items-center p-5 sm:p-6 rounded-lg shadow-black shadow-md w-full transition-all duration-300 ${
                  isDark
                    ? "bg-[#00285E] text-white"
                    : "bg-[#C8E1F8] text-[#00285E]"
                }`}
              >
                <span
                  className={`text-2xl sm:text-3xl mr-4 font-semibold ${
                    isDark ? "text-white" : "text-[#00285E]"
                  }`}
                >
                  {index + 1}
                </span>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  {req}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TiltedMobile;
