import { motion } from "framer-motion";

export default function Event() {
  return (
    <section className="relative w-full md:min-h-screen overflow-hidden flex flex-col">
      {/* Heading */}
      <div className="z-10 w-full text-center py-6">
        <h1 className=" italic h1 text-blue-900">Looking Ahead</h1>
      </div>

      {/* Video Container */}
      <div className="relative w-full flex-1">
        {/* Background Video */}
        <video
          className="w-full h-full object-cover"
          src="/donation/ramadan.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/donation/poster.jpg"
        ></video>
      </div>
    </section>
  );
}
