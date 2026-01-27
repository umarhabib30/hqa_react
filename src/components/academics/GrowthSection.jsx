import React from "react";

const GrowthSection = () => {
  return (
    <section className="w-full pt-12  px-12  lg:px-60 font-serif">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl  italic mb-20">
        <span className="text-[#00285E]">Designed for </span>
        <span className="text-[#CF3528]">Your Growth</span>
      </h2>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center  ">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="absolute top-0 left-0 w-[250px] h-[300px] sm:w-[300px] sm:h-[340px] lg:w-[350px] lg:h-[350px] bg-[#00285E] rounded-tr-[150px] -z-10"></div>
          <div className="absolute top-4 left-4 w-[250px] h-[300px] sm:w-[300px] sm:h-[340px] lg:w-[350px] lg:h-[350px] border-2 border-[#00285E] rounded-tr-[150px] -z-10"></div>

          <img
            src="/academics/growth.png"
            alt="Student"
            className="relative right-4 sm:right-28 lg:right-26 bottom-26 sm:bottom-28 lg:bottom-34 
                       z-40 w-[220px] h-[400px] sm:w-[280px] sm:h-[480px] lg:w-[350] lg:h-[400] 
                       object-cover"
          />
        </div>

        {/* Right Side  */}
        <div className="w-full md:w-1/2  text-lef ">
          <p className="text-gray-800 max-w-2xl leading-relaxed text-sm sm:text-base md:text-lg">
            Whether your child is mastering advanced math, progressing through
            Hifz, or exploring subjects that inspire future college and career
            goals, Houston Quran Academy offers a flexible and enriching
            curriculum tailored to each learner.
          </p>
          <br />
          <br />
          <p className="text-gray-800 max-w-2xl mb-18 leading-relaxed  text-sm sm:text-base md:text-lg">
            From Qur’anic memorization and Islamic studies to rigorous
            academics—including advanced science, math, and humanities—our
            programs are designed to support your child’s unique strengths and
            aspirations. With dedicated teachers and a values-driven
            environment, your child will be equipped to succeed in high school,
            college, and life—with confidence, faith, and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
