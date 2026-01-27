import React from "react";

const Rooted = () => {
  return (
    <section className="w-full px-10 py-8 sm:py-12 lg:py-16 font-serif">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 min-h-[400px] lg:min-h-[500px] ">
        {/* Left: Image */}
        <div className="order-2 lg:order-1 w-full h-full min-h-[300px] sm:min-h-[350px] lg:min-h-full">
          <img
            src="/donation/msg.jpg"
            alt="HQA Admissions Team"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text Card */}
        <div className="order-1 lg:order-2 bg-[#00285E] flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg w-full h-full">
          {/* Headings */}
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <h1 className="h1 italic text-white mb-3 sm:mb-4 leading-tight">
              Join Us
            </h1>
            <h2 className="h2 italic text-white leading-relaxed">
              "Advancing together with greater strength."
            </h2>
          </div>

          {/* Paragraph */}
          <div className="space-y-4 sm:space-y-5">
            <p className="text-white p leading-relaxed sm:leading-loose">
              This is your opportunity to support innovation and excellence at
              Houston Quran Academy. We are in the process of significant
              expansion, which includes the development of new facilities at
              Katy campus and establishment of a new campus in Richmond city
              that will provide our students with ample space to nurture their
              talents and passions.
            </p>
          </div>

          {/* Optional: Add a call-to-action button */}
          <div className="mt-6 sm:mt-8 lg:mt-10">
            <button className="bg-white text-[#00285E] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooted;
