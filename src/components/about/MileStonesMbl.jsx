import React, { useState, useRef, useEffect } from "react";

const MileStonesMbl = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);

  const minSwipeDistance = 50;

  const milestones = [
    {
      year: "Fall 2008",
      topImage: "/about/Ellipse 60.png",
      bottomImage: "/about/bg5.png",
      points: [
        "MAS Houston chapter started a Quran memorization program.",
        "Rented a 2,500 sq. ft. office space.",
        "School named Al Noor Islamic Academy, a DBA of MAS Houston Incorporated.",
        "Started with 10 students, later grew to 14.",
        "Mr. Fady Qaddoura served as the main administrator.",
        "Dr. Main Alqudah led the Quran memorization effort.",
      ],
    },
    {
      year: "Spring 2009",
      topImage: "/about/Ellipse 61.png",
      bottomImage: "/logo.png",
      points: [
        " Dr. Hamed Ghazali joined the school, bringing educational expertise.",
        "Curriculum expanded to include core academic subjects: Math, Science, English, Social Studies, Physical Education, and Art.",
        "The school’s name changed to Houston Quran Academy (HQA).",
      ],
    },
    {
      year: "2009-2010 Academic",
      topImage: "/about/Ellipse 60.png",
      bottomImage: "/about/bg6.png",
      points: [
        " HQA partnered with Texas Virtual Academy (TXVA) for accredited K-12 enrollment.",
        "Enrollment grew to 40 students.",
        "Certified teachers were hired for all academic subjects.",
        "Ms. Shamima Khalid appointed as Assistant Principal.",
        "New testing standards introduced for understanding the Quran before memorization.",
      ],
    },
    {
      year: "2010-2011 Academic Year",
      topImage: "/about/Ellipse 61.png",
      bottomImage: "/about/bg3.png",
      points: [
        "HQA relocated to the MAS Katy Center on a 10-acre property.",
        "Facilities included two semi-modular buildings (7,500 sq. ft. each), a small daycare house, and outdoor sports facilities.",
        "Enrollment increased to 100 students.",
      ],
    },
    {
      year: "2012-2013 Academic Year",
      topImage: "/about/Ellipse 60.png",
      bottomImage: "/about/bg7.jpg",
      points: [
        "HQA received its first accreditation from SACS (Cognia’s predecessor).",
        "Enrollment grew to 194",
      ],
    },
    {
      year: "2017-2018 Academic Year",
      topImage: "/about/Ellipse 61.png",
      bottomImage: "/logo.png",
      points: [
        "HQA renewed its second accreditation with SACS.",
        "Enrollment grew to 265 students.",
      ],
    },
    {
      year: "2022-2023 Academic Year",
      topImage: "/about/Ellipse 60.png",
      bottomImage: "/about/bg8.png",
      points: [
        "HQA completed its third accreditation with Cognia, maintaining high academic standards and performance.",
        "Enrollment grew to 302",
      ],
    },
    {
      year: "2024-2025 Academic Year",
      topImage: "/about/Ellipse 61.png",
      bottomImage: "/about/bg4.png",
      points: ["Enrollment has grown to 350+ students."],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % milestones.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + milestones.length) % milestones.length
    );
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: currentSlide * slideWidth,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  return (
    <div className="px-4 py-8 font-serif relative w-full max-w-md mx-auto bg-white">
      {/* Heading */}
      <h2 className="text-center italic text-[#CF3528] text-3xl font-[400] mb-6">
        Key Milestones
      </h2>

      {/* Horizontal Scroll Container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {milestones.map((milestone, index) => {
          const isOddCard = index % 2 === 0;
          const isEvenCard = index % 2 === 1;

          return (
            <div key={index} className="flex-shrink-0 w-full snap-center px-2">
              <div
                className={`border rounded-2xl shadow-2xl p-6 ${
                  isOddCard ? "bg-white" : "bg-[#E8F4FF]"
                } transition-colors duration-300 h-[850px] flex flex-col`}
              >
                {/* ODD CARDS */}
                {isOddCard && (
                  <>
                    {/* Top Image */}
                    <div className="flex justify-center h-18 ">
                      <img
                        src={milestone.topImage}
                        alt="milestone"
                        className="h-full object-contain"
                      />
                    </div>

                    {/* Circle */}
                    <div className="flex justify-center mb-8 h-28">
                      <div className="w-34 h-34 bg-gray-200 rounded-full flex items-center justify-center">
                        <p className="text-base font-semibold text-center text-[#00285E]">
                          {milestone.year}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Image */}
                    <div className="flex justify-center mt-0 h-24">
                      <img
                        src={milestone.bottomImage}
                        alt="milestone"
                        className="h-full object-contain"
                      />
                    </div>

                    {/* Points */}
                    <ul className="mt-4 space-y-3 text-lg list-none pl-0 flex-1 overflow-hidden">
                      {milestone.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-black"></span>
                          <span className="flex-1 text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* EVEN CARDS */}
                {isEvenCard && (
                  <>
                    {/* Circle */}
                    <div className="flex justify-center h-22 ">
                      <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center">
                        <p className="text-base font-semibold text-center text-[#00285E]">
                          {milestone.year}
                        </p>
                      </div>
                    </div>

                    {/* Top Image */}
                    <div className="flex justify-center  h-20 ">
                      <img
                        src={milestone.topImage}
                        alt="milestone"
                        className="h-full object-contain"
                      />
                    </div>

                    {/* Bottom Image */}
                    <div className="flex justify-center mt-4 h-24">
                      <img
                        src={milestone.bottomImage}
                        alt="milestone"
                        className="h-full object-contain"
                      />
                    </div>

                    {/* Points */}
                    <ul className="mt-4 space-y-3 text-lg list-none pl-0 flex-1 overflow-hidden">
                      {milestone.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-black"></span>
                          <span className="flex-1 text-black">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {milestones.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-[#CF3528]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MileStonesMbl;
