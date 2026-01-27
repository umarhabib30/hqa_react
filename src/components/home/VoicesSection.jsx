import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation.js";
import { FaPlay, FaPause } from "react-icons/fa";

const students = [
  { id: 1, video: "/home/Our Journey Our Voices-1.mp4", name: "Morning Prayer " },
  { id: 2, video: "/home/Our Journey Our Voices-2.mp4", name: "Sports" },
  { id: 3, video: "/home/Our Journey Our Voices-3.mp4", name: "Activities" },
  { id: 4, video: "/home/Our Journey Our Voices-4.mp4", name: "Preschool" },
  { id: 5, video: "/home/Our Journey Our Voices-5.mp4", name: "Quran Tajweed" },
];

const centerIndex = 2;

const VoicesSection = () => {
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);

  const scrollRef = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const handlePlayPause = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index) {
        if (video.paused) {
          video.muted = false;
          video.play().catch(() => {});
          setPlayingIndex(index);
        } else {
          video.pause();
          setPlayingIndex(null);
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  const renderStudent = (student, index, isMobileView) => {
    const isActive = active === index;
    const isCenter = index === centerIndex;
    const activeOrCenter = active !== null ? isActive : isCenter;
    const isPlaying = playingIndex === index;

    const size = isMobileView
      ? activeOrCenter
        ? { width: 220, height: 400 }
        : { width: 120, height: 300 }
      : activeOrCenter
      ? { width: 396, height: 580 }
      : { width: 212, height: 508 };

    return (
      <motion.div
        key={student.id}
        className={`student-${index} relative flex-shrink-0 overflow-hidden rounded-2xl shadow-xl bg-black`}
        onClick={() => setActive(index)}
        animate={{ width: size.width, height: size.height }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* VIDEO */}
        <motion.video
          ref={(el) => (videoRefs.current[index] = el)}
          src={student.video}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          animate={{
            scale: activeOrCenter ? 1.05 : 1.2,
            opacity: activeOrCenter ? 1 : 0.5,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* CENTER CUSTOM PLAY BUTTON */}
        {activeOrCenter && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePlayPause(index);
              }}
              className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-md shadow-2xl flex items-center justify-center hover:scale-110 transition"
            >
              {isPlaying ? (
                <FaPause className="text-black text-3xl" />
              ) : (
                <FaPlay className="text-black text-3xl ml-1" />
              )}
            </button>
          </motion.div>
        )}

        <motion.p
          className={`absolute text-white italic font-semibold tracking-wide ${
            activeOrCenter
              ? isMobileView
                ? "bottom-4 left-1/2 -translate-x-1/2 text-center w-full"
                : "bottom-8 left-10"
              : isMobileView
              ? "right-2 top-1/3 translate-y-10"
              : "right-4 top-45 translate-y-30"
          } text-sm sm:text-lg`}
          animate={{ rotate: activeOrCenter ? 0 : 180 }}
          transition={{ duration: 0.5 }}
          style={{
            writingMode: !activeOrCenter ? "vertical-rl" : "horizontal-tb",
          }}
        >
          {student.name}
        </motion.p>
      </motion.div>
    );
  };

  return (
    <section className="py-16 bg-white text-gray-900 font-serif overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-6xl italic mb-12 md:mb-20"
        >
          Our Journey<span className="text-red-500"> Our Voices</span>
        </motion.h1>

        {!isMobile && (
          <motion.div
            variants={SlideUp(0.6)}
            initial="hidden"
            whileInView="visible"
            className="hidden md:flex justify-center gap-4 items-end"
          >
            {students.map((s, i) => renderStudent(s, i, false))}
          </motion.div>
        )}

        {isMobile && (
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 pb-8 hide-scrollbar -mx-4 px-6 items-end"
          >
            {students.map((s, i) => renderStudent(s, i, true))}
          </div>
        )}
      </div>

      <style>{`
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default VoicesSection;



// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { SlideUp } from "../../../utility/animation.js";

// const students = [
//   { id: 1, image: "home/student1.jpg", name: "Malik Javed" },
//   { id: 2, image: "home/student2.jpg", name: "Aisha Khan" },
//   { id: 3, image: "home/student3.jpg", name: "Omar Hassan" },
//   { id: 4, image: "home/student4.jpg", name: "Fatima Ahmed" },
//   { id: 5, image: "home/student5.jpg", name: "Zainab Ali" },
// ];

// const centerIndex = 2;

// const VoicesSection = () => {
//   const [active, setActive] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const scrollRef = useRef(null);

//   // Check mobile
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Scroll active/center student into view
//   const scrollToIndex = (index, behavior = "smooth") => {
//     if (scrollRef.current) {
//       const container = scrollRef.current;
//       const element = container.querySelector(".student-" + index);
//       if (element) {
//         const scrollLeft =
//           element.offsetLeft -
//           (container.offsetWidth - element.offsetWidth) / 2;
//         container.scrollTo({ left: scrollLeft, behavior });
//       }
//     }
//   };

//   // Initial scroll for mobile center
//   useEffect(() => {
//     if (isMobile) scrollToIndex(centerIndex, "auto");
//   }, [isMobile]);

//   // Scroll when active changes
//   useEffect(() => {
//     if (isMobile && active !== null) scrollToIndex(active);
//   }, [active, isMobile]);

//   const handleClick = (index) => setActive(active === index ? null : index);

//   // Render student card
//   const renderStudent = (student, index, isMobileView) => {
//     const isActive = active === index;
//     const isCenter = index === centerIndex;
//     const activeOrCenter = isActive || (!active && isCenter);

//     const size = isMobileView
//       ? activeOrCenter
//         ? { width: 200, height: 400 }
//         : { width: 120, height: 300 }
//       : activeOrCenter
//       ? { width: 396, height: 580 }
//       : { width: 212, height: 508 };

//     return (
//       <motion.div
//         key={student.id}
//         className={`student-${index} relative flex-shrink-0 overflow-hidden rounded-lg shadow-lg cursor-pointer`}
//         onClick={() => handleClick(index)}
//         animate={{ width: size.width, height: size.height }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//       >
//         <motion.img
//           src={student.image}
//           alt={student.name}
//           className="w-full h-full object-cover"
//           animate={{ scale: activeOrCenter ? 1.1 : 1 }}
//           transition={{ duration: 0.5 }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

//         <motion.p
//           className={`absolute text-white italic font-medium ${
//             activeOrCenter
//               ? isMobileView
//                 ? "bottom-3 left-1/2 -translate-x-1/2 text-center w-full px-2"
//                 : "bottom-4 left-40"
//               : isMobileView
//               ? "right-2 top-1/2 translate-y-10"
//               : "right-4 top-1/2 transform translate-y-30"
//           } text-sm sm:text-base`}
//           animate={{ rotate: activeOrCenter ? 0 : 180 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           style={{
//             writingMode: !activeOrCenter ? "vertical-rl" : "horizontal-tb",
//           }}
//         >
//           {student.name}
//         </motion.p>
//       </motion.div>
//     );
//   };

//   return (
//     <section className="py-16 bg-white text-gray-900 font-serif overflow-hidden">
//       <div className="px-4 sm:px-6 lg:px-8 text-center">
//         <motion.h1
//           variants={SlideUp(0.2)}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="h1 font-serif italic mb-12 md:mb-24"
//         >
//           Our Journey<span className="text-red-500"> Our Voices</span>
//         </motion.h1>

//         {/* Desktop */}
//         {!isMobile && (
//           <motion.div
//             variants={SlideUp(0.6)}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="hidden md:flex w-full justify-center gap-2 overflow-hidden rounded-xl items-end"
//           >
//             {students.map((s, i) => renderStudent(s, i, false))}
//           </motion.div>
//         )}

//         {/* Mobile */}
//         {isMobile && (
//           <div
//             ref={scrollRef}
//             className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar -mx-4 px-4"
//           >
//             <motion.div className="flex gap-4 min-w-max items-end px-8">
//               {students.map((s, i) => renderStudent(s, i, true))}
//             </motion.div>
//           </div>
//         )}
//       </div>

//       {/* Hide scrollbar */}
//       <style>{`
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default VoicesSection;
