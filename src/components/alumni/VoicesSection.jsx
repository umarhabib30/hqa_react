import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SlideUp } from "../../../utility/animation.js";

import DesktopGallery from "./DesktopGallery";
import MobileScroller from "./MobileScroller";

const allStudents = [
  { id: 1, image: "home/student1.jpg", name: "Malik Javed" },
  { id: 2, image: "home/student2.jpg", name: "Aisha Khan" },
  { id: 3, image: "home/student3.jpg", name: "Omar Hassan" },
  { id: 4, image: "home/student4.jpg", name: "Fatima Ahmed" },
  { id: 5, image: "home/student5.jpg", name: "Zainab Ali" },
  { id: 6, image: "donation/s1.jpg", name: "Ali Raza" },
  { id: 7, image: "donation/s3.jpg", name: "Noor Fatima" },
  { id: 8, image: "donation/s2.jpg", name: "Ahmed Sohail" },
  { id: 9, image: "donation/s1.jpg", name: "Sana Tariq" },
  { id: 10, image: "donation/s3.jpg", name: "Usman Ghani" },
];

const STUDENTS_PER_PAGE = 5;
const centerIndex = 2;

const VoicesSection = () => {
  // State management for data and responsiveness
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  // Derived State
  const totalPages = Math.ceil(allStudents.length / STUDENTS_PER_PAGE);
  const startIndex = currentPage * STUDENTS_PER_PAGE;
  const students = allStudents.slice(
    startIndex,
    startIndex + STUDENTS_PER_PAGE
  );

  // ---  (Check Mobile Size) ---
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- Navigation and Interaction Handlers ---
  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    setActive(null);
    setIsInitialLoad(true);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
    setActive(null);
    setIsInitialLoad(true);
  };

  const handleImageClick = (index) =>
    setActive(active === index ? null : index);

  return (
    <section className="py-16 bg-white text-[#00285E] font-serif overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 font-serif italic mb-12 md:mb-24"
        >
          Recent Graduate
        </motion.h1>

        {/* --- Navigation Arrows --- */}
        <div className="flex absolute top-0 right-4 md:right-8 lg:right-16 xl:right-32 space-x-2 md:space-x-4 z-10">
          <button
            onClick={handlePrev}
            className="p-2 md:p-3 bg-gray-100 cursor-pointer hover:bg-[#00285E] text-[#00285E] hover:text-white transition rounded-full shadow-md"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 md:p-3 bg-gray-100 cursor-pointer hover:bg-[#00285E] text-[#00285E] hover:text-white transition rounded-full shadow-md"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* --- Render Components based on Size --- */}
        <DesktopGallery
          students={students}
          active={active}
          centerIndex={centerIndex}
          handleImageClick={handleImageClick}
        />

        <MobileScroller
          students={students}
          active={active}
          centerIndex={centerIndex}
          handleImageClick={handleImageClick}
          isMobile={isMobile}
          isInitialLoad={isInitialLoad}
          setIsInitialLoad={setIsInitialLoad}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default VoicesSection;
