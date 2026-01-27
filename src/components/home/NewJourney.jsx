import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import { SlideUp, SlideLeft, SlideRight } from "../../../utility/animation.js";
import { Link } from "react-router-dom";

const NewJourney = () => {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false; // 🔊 unlock sound
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#D8EDFF] text-gray-900 font-serif overflow-hidden">
      <div className="px-4 sm:px-2 lg:px-8 text-center">
        <motion.h1
          className="h1 mb-4 leading-snug"
          variants={SlideRight(0.2)}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Beyond Possibilities,{" "}
          <span className="italic text-gray-800">A New Journey Begins!</span>
        </motion.h1>

        <motion.p
          className="max-w-4xl mx-auto text-gray-800 mb-8 sm:mb-10 p px-2 sm:px-0"
          variants={SlideLeft(0.4)}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          “ We are thrilled to announce the expansion of HQA with a new campus
          in Richmond! This milestone reflects our commitment to excellence and
          growth, bringing even more opportunities for our students and
          community. ”
        </motion.p>

        {/* VIDEO SECTION */}
        <motion.div
          className="relative rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.25),0_-8px_20px_rgba(0,0,0,0.15)]
 mb-8 sm:mb-10 w-full"
          initial={
            reduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.95 }
          }
          whileInView={{ opacity: 1, scale: 1 }}
          transition={reduceMotion ? {} : { duration: 0.7, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* VIDEO */}
          <video
            ref={videoRef}
            src="/home/Build Tomorrow HQA.mp4"
            muted
            playsInline
            preload="auto"
            className="w-full h-56 min-[480px]:h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[550px] object-cover"
          />

          {/* CENTER PLAY BUTTON */}
          <motion.button
            onClick={handlePlayPause}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-white/90 backdrop-blur-md rounded-full w-24 h-24 flex items-center justify-center shadow-2xl hover:scale-110 transition">
              {isPlaying ? (
                <FaPause className="text-black text-4xl" />
              ) : (
                <FaPlay className="text-black text-4xl ml-1" />
              )}
            </div>
          </motion.button>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="bg-white shadow-md rounded-lg px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full"
          variants={SlideUp(0.8)}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="p text-[#0B49BD] text-center sm:text-left">
            Make a difference with your gift.
          </p>
          <Link to="/support">
            <motion.button
              type="button"
              className="bg-[#00285E] cursor-pointer text-white px-5 sm:px-6 py-2 rounded-lg font-medium hover:bg-red-700 text-xl transition w-full sm:w-auto"
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
            >
              Donate Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewJourney;

// import React from "react";
// import { FaPlay } from "react-icons/fa";
// import { motion, useReducedMotion } from "framer-motion";
// import { SlideUp, SlideLeft, SlideRight } from "../../../utility/animation.js";

// const NewJourney = () => {
//   const reduceMotion = useReducedMotion();

//   return (
//     <section className="py-12 sm:py-16 bg-[#D8EDFF] text-gray-900 font-serif overflow-hidden ">
//       <div className="px-4 sm:px-2 lg:px-8 text-center">
//         <motion.h1
//           className="h1 mb-4 leading-snug"
//           variants={SlideRight(0.2)}
//           initial={reduceMotion ? "visible" : "hidden"}
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           Beyond Possibilities,{" "}
//           <span className="italic text-gray-800">A New Journey Begins!</span>
//         </motion.h1>

//         <motion.p
//           className="max-w-4xl mx-auto text-gray-800 mb-8 sm:mb-10 p px-2 sm:px-0"
//           variants={SlideLeft(0.4)}
//           initial={reduceMotion ? "visible" : "hidden"}
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           “ We are thrilled to announce the expansion of HQA with a new campus
//           in Richmond! This milestone reflects our commitment to excellence and
//           growth, bringing even more opportunities for our students and
//           community. ”
//         </motion.p>

//         <motion.div
//           className="relative rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.25),0_-8px_20px_rgba(0,0,0,0.15)]
//  mb-8 sm:mb-10 w-full"
//           initial={
//             reduceMotion
//               ? { opacity: 1, scale: 1 }
//               : { opacity: 0, scale: 0.95 }
//           }
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={reduceMotion ? {} : { duration: 0.7, delay: 0.6 }}
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <video
//             src="/home/Build Tomorrow HQA.mp4"
//             className="w-full h-56 min-[480px]:h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[550px] object-cover"
//             muted
//             autoPlay
//             loop
//             playsInline
//             preload="auto"
//           />
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           className="bg-white shadow-md rounded-lg px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full"
//           variants={SlideUp(0.8)}
//           initial={reduceMotion ? "visible" : "hidden"}
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <p className="p text-[#0B49BD] text-center sm:text-left">
//             Make a difference with your gift.
//           </p>
//           <motion.button
//             type="button"
//             className="bg-[#00285E] text-white px-5 sm:px-6 py-2 rounded-lg font-medium hover:bg-red-700 text-xl transition w-full sm:w-auto"
//             whileHover={reduceMotion ? undefined : { scale: 1.05 }}
//             whileTap={reduceMotion ? undefined : { scale: 0.95 }}
//           >
//             Donate Now
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default NewJourney;

// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { SlideUp, SlideLeft, SlideRight } from "../../../utility/animation.js";

// const NewJourney = () => {
//   const reduceMotion = useReducedMotion();

//   return (
//     <section className="py-12 sm:py-16 bg-[#D8EDFF] text-gray-900 font-serif overflow-hidden">
//       <div className="px-4 sm:px-2 lg:px-8 text-center">
//         {/* Heading */}
//         <motion.h1
//           className="h1 mb-4 leading-snug"
//           variants={SlideRight(0.2)}
//           initial={reduceMotion ? "visible" : "hidden"}
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           Beyond Possibilities,{" "}
//           <span className="italic text-gray-800">A New Journey Begins!</span>
//         </motion.h1>

//         {/* Paragraph */}
//         <motion.p
//           className="max-w-4xl mx-auto text-gray-800 mb-8 sm:mb-10 p px-2 sm:px-0"
//           variants={SlideLeft(0.4)}
//           initial={reduceMotion ? "visible" : "hidden"}
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           “ We are thrilled to announce the expansion of HQA with a new campus
//           in Richmond! This milestone reflects our commitment to excellence and
//           growth, bringing even more opportunities for our students and
//           community. ”
//         </motion.p>

//         {/* Video Section */}
//         <motion.div
//           className="relative rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.25),0_-8px_20px_rgba(0,0,0,0.15)] mb-8 sm:mb-10 w-full"
//           initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={reduceMotion ? {} : { duration: 0.7, delay: 0.6 }}
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* YouTube iframe */}
//           <iframe
//             src="https://www.youtube.com/embed/0qpOSgPcBF8?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&playsinline=1&playlist=0qpOSgPcBF8&vq=hd1080"
//             title="New Journey Video"
//             frameBorder="0"
//             allow="autoplay; fullscreen"
//             allowFullScreen
//             className="w-full h-56 min-[480px]:h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[550px] object-cover pointer-events-none rounded-xl"
//           />
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           className="bg-white shadow-md rounded-lg px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full"
//           variants={SlideUp(0.8)}
//           initial={reduceMotion ? "visible" : "hidden"}
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <p className="p text-[#0B49BD] text-center sm:text-left">
//             Make a difference with your gift.
//           </p>
//           <motion.button
//             type="button"
//             className="bg-[#00285E] text-white px-5 sm:px-6 py-2 rounded-lg font-medium hover:bg-red-700 text-xl transition w-full sm:w-auto"
//             whileHover={reduceMotion ? undefined : { scale: 1.05 }}
//             whileTap={reduceMotion ? undefined : { scale: 0.95 }}
//           >
//             Donate Now
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default NewJourney;
