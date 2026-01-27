import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlideUp,
  SlideLeft,
  SlideRight,
  SlideButton,
} from "../../../utility/animation.js";
const slides = [
  {
    id: 1,
    title: "Inquiry Form",
    text: `Start your journey by filling out our simple <a href="https://hqasis.com/front/office/inquiry/form" target="_blank" class="underline font-bold">Online Inquiry Form</a>. A member of our Admissions team will get in touch to guide you through the next steps.`,
    bullets: [],
    img: "/admission/step1.jpg",
  },
  {
    id: 2,
    title: "Step 2: Schedule a Campus Tour",
    text: `See the heart of our school in action. Walk through our classrooms, meet our faculty, and experience the <a href="https://hqasis.com/visitor/form" target="_blank" class="underline font-bold">HQA environment</a>.`,
    bullets: [],
    img: "/inquire/Placement.jpg",
  },
  {
    id: 3,
    title: "Submit Application for Placement Test",
    text: `Complete and submit your <a href="https://hqasis.com/front/office/placement/form" target="_blank" class="underline font-bold">Placement Test Application Form</a> along with the required student and parent details. Once received, our admissions team will schedule your child’s placement test.`,
    bullets: [],
    img: "/inquire/forms.jpeg",
  },
  {
    id: 4,
    title: "Placement Test Evaluation",
    text: `Students must achieve a <strong>minimum of 75% in English and Math</strong> to qualify for admission consideration. Results will be shared with parents after evaluation.`,
    bullets: [],
    img: "/inquire/placment.jpeg",
  },
  {
    id: 5,
    title: "Portal Access and Admission Confirmation",
    text: `After successful completion of all steps and administrative review, families will receive <strong>portal access credentials</strong> from the admissions office. This portal will contain student information, updates, and next enrollment steps.`,
    bullets: [],
    img: "/inquire/Portal.png",
  },
];
const Process = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="py-12 px-4 sm:px-10 overflow-hidden">
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 italic text-[#00285E] mb-8 font-serif"
      >
        Step-by-Step
        <br className="sm:hidden" />
        <span className="text-[#CF3528]"> Admissions Process</span>
      </motion.h1>

      <motion.section
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row-reverse font-serif items-center justify-between gap-6 py-12 px-4 sm:px-10 relative"
      >
        <motion.div className="w-full lg:w-[55%] relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[current].img}
              src={slides[current].img}
              variants={SlideLeft(0)}
              initial="hidden"
              animate="visible"
              exit="hidden"
              alt="HQA Building"
              className="w-full h-72 sm:h-96 md:h-[30rem] lg:h-[30rem] object-cover rounded-xl"
            />
          </AnimatePresence>

          {/* Mobile Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].title}
              variants={SlideRight(0.1)}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute bottom-[-10rem] sm:bottom-[-2rem] left-1/2 -translate-x-1/2 
              bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 
              w-[90%] sm:w-[85%] md:w-[75%] 
              lg:hidden"
            >
              <h4 className="text-red-700 font-serif italic mb-2 h2">
                {slides[current].title}
              </h4>

              <p
                className="text-gray-800 p"
                dangerouslySetInnerHTML={{ __html: slides[current].text }}
              ></p>

              {/* Mobile Nav Buttons */}
              <div className="flex justify-center mt-4 space-x-4">
                <motion.button
                  onClick={prevSlide}
                  variants={SlideButton(0.3)}
                  initial="hidden"
                  animate="visible"
                  className="bg-white border-2 border-[#CF3528] rounded-full h-8 w-8 flex items-center justify-center shadow-md"
                >
                  <FaArrowLeft className="text-[#CF3528] text-xs" />
                </motion.button>

                <motion.button
                  onClick={nextSlide}
                  variants={SlideButton(0.4)}
                  initial="hidden"
                  animate="visible"
                  className="bg-[#CF3528] text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md"
                >
                  <FaArrowRight className="text-xs" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Desktop Card */}
        <div className="hidden lg:block lg:w-[45%] relative">
          {/* Step Number */}
          <div className="flex justify-start mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`step-${current}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="font-serif italic font-medium h1 text-gray-300"
              >
                Step {current + 1}
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].title}
              variants={SlideRight(0)}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-white rounded-lg p-6 md:p-10 relative translate-x-10 shadow-[0_0_20px_4px_rgba(0,0,0,0.2)]"
            >
              <h4 className="text-red-700 font-serif italic font-semibold mb-2 text-2xl">
                {slides[current].title}
              </h4>

              <p
                className="text-gray-800 p leading-relaxed"
                dangerouslySetInnerHTML={{ __html: slides[current].text }}
              ></p>

              {/* Desktop Nav Buttons */}
              <motion.button
                onClick={prevSlide}
                variants={SlideButton(0.3)}
                initial="hidden"
                animate="visible"
                className="absolute -left-3 md:-left-4 top-1/2 transform -translate-y-1/2 bg-white border-2 border-[#CF3528] rounded-full h-8 w-8 flex items-center justify-center shadow-md"
              >
                <FaArrowLeft className="text-[#CF3528] text-sm" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                variants={SlideButton(0.4)}
                initial="hidden"
                animate="visible"
                className="absolute -right-3 md:-right-4 top-1/2 transform -translate-y-1/2 bg-[#CF3528] text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md"
              >
                <FaArrowRight className="text-sm" />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      <div className="block lg:hidden mt-20"></div>
    </div>
  );
};

export default Process;
