import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const pillars = [
  {
    id: 1,
    title: "Inquiry Form",
    text: `Start your journey by filling out our simple <a href="https://hqasis.com/front/office/inquiry/form" target="_blank" class="underline font-bold">Online Inquiry Form</a>. A member of our Admissions team will get in touch to guide you through the next steps.`,
    bullets: [],
    img: "/admission/step1.jpg",
  },
  {
    id: 2,
    title: " Schedule a Campus Tour",
    text: `See the heart of our school in action. Walk through our classrooms, meet our faculty, and experience the <a href="https://hqasis.com/visitor/form" target="_blank" class="underline font-bold">HQA environment</a>.`,
    bullets: [],
    img: "/admission/Placement Test Evaluation.jpg",
  },
  {
    id: 3,
    title: "Submit Application for Placement Test",
    text: `Complete and submit your <a href="https://hqasis.com/front/office/placement/form" target="_blank" class="underline font-bold">Placement Test Application Form</a> along with the required student and parent details. Once received, our admissions team will schedule your child’s placement test.`,
    bullets: [],
    img: "/admission/forms.jpeg",
  },
  {
    id: 4,
    title: "Placement Test Evaluation",
    text: `Students must achieve a <strong>minimum of 75% in English and Math</strong> to qualify for admission consideration. Results will be shared with parents after evaluation.`,
    bullets: [],
    img: "/admission/placement.png",
  },
  {
    id: 5,
    title: "Portal Access and Admission Confirmation",
    text: `After successful completion of all steps and administrative review, families will receive <strong>portal access credentials</strong> from the admissions office. This portal will contain student information, updates, and next enrollment steps.`,
    bullets: [],
    img: "/admission/Portal Access and Admission.png",
  },
];

const Steps = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(pillars.length - 1) * 100}%`]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[350vh] md:h-[500vh] bg-white font-serif"
    >
      <div className="sticky top-0 h-screen flex flex-col px-4 md:px-10 overflow-hidden">
        {/* Horizontal Scroll */}
        <div className="flex-grow relative overflow-hidden  md:mb-12">
          <motion.div
            style={{ x: xTranslate }}
            className="absolute inset-0 flex w-full h-full"
          >
            {pillars.map((pillar, i) => (
              <div key={i} className="flex-shrink-0 w-full h-full px-2 sm:px-4">
                <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                  <div className="w-[100%] md:w-[55%] h-[35vh] sm:h-[40vh] md:h-[80vh] relative mb-2 md:mb-0">
                    <img
                      src={pillar.img}
                      alt={pillar.title}
                      className="w-full h-full object-cover  rounded-md"
                    />
                  </div>

                  {/* Card */}
                  <div className="w-[98%] md:w-[55%] flex relative md:-ml-12 z-30 -mt-12 md:mt-0">
                    <div className="bg-[#C8E1F8] rounded-md text-gray-800 p-3 sm:p-4 w-full flex flex-col overflow-visible shadow-lg">
                      <h3 className="h1 italic mb-1 text-[#00285E]">
                        Step {pillar.id}
                      </h3>
                      <h3 className="text-3xl sm:text-xl md:text-4xl italic mb-1 text-[#00285E]">
                        {pillar.title}
                      </h3>

                      <p
                        className="p text-gray-800 leading-relaxed mb-1"
                        dangerouslySetInnerHTML={{ __html: pillar.text }}
                      />

                      {pillar.bullets.length > 0 && (
                        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg mb-1 space-y-1">
                          {pillar.bullets.map((point, j) => (
                            <li key={j}>{point}</li>
                          ))}
                        </ul>
                      )}

                      {pillar.para && (
                        <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-1">
                          {pillar.para}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
