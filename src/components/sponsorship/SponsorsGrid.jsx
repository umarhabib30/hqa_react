import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const dummySponsors = [
  "/sponsorship/s1.jpg",
  "/sponsorship/s2.jpg",
  "/sponsorship/s3.jpg",
  "/sponsorship/s1.jpg",
  "/sponsorship/s2.jpg",
  "/sponsorship/s3.jpg",
  "/sponsorship/s1.jpg",
  "/sponsorship/s2.jpg",
  "/sponsorship/s3.jpg",
  "/sponsorship/s1.jpg",
  "/sponsorship/s2.jpg",
  "/sponsorship/s3.jpg",
];

export default function SponsorsGrid({ sponsors = dummySponsors }) {
  return (
    <section className="w-full py-12 flex flex-col items-center font-serif italic">
      <motion.h2
        variants={SlideRight(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 text-[#00285E] mb-8"
      >
        Our Valued Sponsors
      </motion.h2>

      <motion.div
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full max-w-7xl px-4"
      >
        {sponsors.length > 0
          ? sponsors.map((src, index) => (
              <div
                key={index}
                className="w-full aspect-square cursor-pointer rounded-xl bg-white 
                           overflow-hidden
                           shadow-[0_0_15px_rgba(0,0,0,0.15)]
                           hover:shadow-[0_0_25px_rgba(26,54,93,0.5)]
                           hover:scale-105 transition-all duration-300 ease-out"
              >
                <img
                  src={src}
                  alt={`Sponsor ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl 
                             transition-all duration-300 hover:opacity-90"
                />
              </div>
            ))
          : Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="w-full aspect-square rounded-md bg-gray-100 animate-pulse"
              ></div>
            ))}
      </motion.div>
    </section>
  );
}
