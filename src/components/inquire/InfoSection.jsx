import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { SlideLeft, SlideRight } from "../../../utility/animation";
import { motion } from "framer-motion";

const accordionData = [
  {
    title: "Getting to Houston Quran Academy",
    content: (
      <>
        <p className="mb-3">
          <strong>1902 Baker Rd</strong> <br />
          Houston, TX 77094
        </p>

        <p className="mb-3">
          <strong>Mailing Address:</strong> <br />
          P.O Box 6385 <br />
          Katy, TX 77491
        </p>

        <p className="mb-3">
          Our campus is conveniently located in West Houston with easy access
          from I-10. Visitor parking is available in front of the main entrance.
        </p>

        <a
          href="https://share.google/xi5xmA8KlmOZEJNPp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-800 transition"
        >
          Get Directions
        </a>
      </>
    ),
  },

  {
    title: "Contact Us",
    content: (
      <>
        <p className="mb-2">📞 Phone: (281) 123-4567</p>
        <p className="mb-2">✉️ Email: info@hqacademy.org</p>
      </>
    ),
  },

  {
    title: "Nearby Hotels",
    content: (
      <>
        <p className="mb-4">
          The following hotels are conveniently located near Houston Quran
          Academy and are ideal for families and visitors.
        </p>

        <ul className="space-y-2">
          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Embassy+Suites+by+Hilton+Houston+West+Katy"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-red-600 underline hover:text-red-800 transition"
            >
              Embassy Suites by Hilton Houston West – Katy
            </a>
          </li>

          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Four+Points+by+Sheraton+Houston+Energy+Corridor"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-red-600 underline hover:text-red-800 transition"
            >
              Four Points by Sheraton Houston Energy Corridor
            </a>
          </li>

          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hilton+Garden+Inn+Houston+Energy+Corridor"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-red-600 underline hover:text-red-800 transition"
            >
              Hilton Garden Inn Houston Energy Corridor
            </a>
          </li>

          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Houston+Marriott+Energy+Corridor"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-red-600 underline hover:text-red-800 transition"
            >
              Houston Marriott Energy Corridor
            </a>
          </li>

          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=WoodSpring+Suites+Houston+I-10+West"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-red-600 underline hover:text-red-800 transition"
            >
              WoodSpring Suites Houston I-10 West
            </a>
          </li>

          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Homewood+Suites+Houston+West+Energy+Corridor"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-red-600 underline hover:text-red-800 transition"
            >
              Homewood Suites Houston West Energy Corridor
            </a>
          </li>

          <li>
            <a
              href="https://maps.google.com/?q=Hyatt+Regency+Houston+West"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-red-600 underline hover:text-red-800 transition"
            >
              Hyatt Regency Houston West
            </a>
          </li>

          <li>
            <a
              href="https://maps.google.com/?q=Hotel+ZaZa+Houston+Memorial+City"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-red-600 underline hover:text-red-800 transition"
            >
              Hotel ZaZa Houston Memorial City
            </a>
          </li>

          <li>
            <a
              href="https://maps.google.com/?q=The+Westin+Houston+Memorial+City"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-red-600 underline hover:text-red-800 transition"
            >
              The Westin Houston, Memorial City
            </a>
          </li>
        </ul>
      </>
    ),
  },

  {
    title: "Nearby Restaurants (Halal)",
    content: (
      <>
        <p className="mb-4">
          The following halal and family-friendly restaurants are located near
          Houston Quran Academy.
        </p>

        <ul className="space-y-2">
          <li>
            <a
              href="https://maps.google.com/?q=2712+Eldridge+Pkwy+Ste+102+Houston+TX+77082"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-red-600 underline hover:text-red-800 transition"
            >
              Las Brasas Charcoal Chicken (Halal)
            </a>
          </li>

          <li>
            <a
              href="https://maps.google.com/?q=12039+Antoine+Dr+Ste+210+Houston+TX+77066"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-red-600 underline hover:text-red-800 transition"
            >
              Kebob Korner
            </a>
          </li>

          <li>
            <a
              href="https://maps.google.com/?q=Oh+Mmm+Gyros+22155+Morton+Ranch+Rd+Katy+TX+77494"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-red-600 underline hover:text-red-800 transition"
            >
              Oh Mmm Gyros – Katy
            </a>
          </li>

          <li>
            <a
              href="https://maps.google.com/?q=Fadi’s+Mediterranean+Grill+21792+Katy+Fwy+Katy+TX+77449"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-red-600 underline hover:text-red-800 transition"
            >
              Fadi’s Mediterranean Grill
            </a>
          </li>

          <li>
            <a
              href="https://maps.google.com/?q=Dimassi’s+Mediterranean+Buffet+19143+Katy+Fwy+Houston+TX+77094"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-red-600 underline hover:text-red-800 transition"
            >
              Dimassi’s Mediterranean Buffet
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function InfoSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start font-serif overflow-hidden">

      {/* LEFT COLUMN (SCROLLABLE) */}
      <motion.div
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6 flex flex-col max-h-[600px] overflow-y-auto"
      >
        {accordionData.map((item, index) => (
          <div key={index} className="border-b last:border-none">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center gap-3 py-4 text-left font-medium text-gray-800 hover:text-red-600 transition"
            >
              {openIndex === index ? (
                <FaMinus className="text-black" />
              ) : (
                <FaPlus className="text-black" />
              )}
              <span>{item.title}</span>
            </button>

            {openIndex === index && (
              <div className="pb-4 text-gray-600">{item.content}</div>
            )}
          </div>
        ))}
      </motion.div>

      {/* RIGHT COLUMN (FIXED IMAGE) */}
      <motion.div
        variants={SlideLeft(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hidden md:block w-full h-[600px]"
      >
        <img
          src="/inquire/Getting to Houston Quran Academy.jpeg"
          alt="Campus"
          className="w-full h-full object-cover rounded-xl shadow-md"
        />
      </motion.div>
    </div>
  );
}
