import React from "react";

const requirements = [
  "Application form completed online",
  "Pass Admission Test with Minimum 75% Grade",
  "Copies of previous school records (for Grades 1 and up)",
  "Birth Certificate",
  "Immunization Records",
  "Quranic background (if applicable)",
];

const AdmissionsRequirementsMobile = () => {
  return (
    <section className="block md:hidden  pb-12 md:py-12 px-4 font-serif overflow-hidden">
      <h2 className="text-3xl italic text-center mb-8 text-[#00285E]">
        Admissions Requirements
      </h2>

      <div className="flex flex-col space-y-4">
        {requirements.map((req, index) => {
          const isOdd = index % 2 === 0; // odd cards
          return (
            <div
              key={index}
              className={`flex items-center p-4 rounded-lg shadow-black shadow-2xl w-full ${isOdd
                  ? "bg-[#00285E] text-white"
                  : "bg-[#C8E1F8] text-[#00285E]"
                }`}
            >
              <span
                className={`text-3xl mr-4 font-semibold ${isOdd ? "text-white" : "text-[#00285E]"
                  }`}
              >
                {index + 1}
              </span>
              <p className="text-lg">{req}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdmissionsRequirementsMobile;
