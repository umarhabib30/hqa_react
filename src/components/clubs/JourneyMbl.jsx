import React from "react";

const cards = [
  {
    id: 1,
    heading: "STEM Club",
    text: "Explore hands-on science and tech experiments, coding projects, and real-world innovation with our mentors and science faculty.",
    img: "/faculty/c1.jpg",
  },
  {
    id: 2,
    heading: "Debate & Public Speaking",
    text: "Master the art of persuasive speech and critical thinking. Prepare for inter-school debate competitions and learn how to speak with impact.",
    img: "/faculty/c2.jpg",
  },
  {
    id: 3,
    heading: "Service & Leadership Club",
    text: "Engage in community service projects, organize school-wide initiatives, and take an active role in building a better Ummah.",
    img: "/faculty/c1.jpg",
  },
  {
    id: 4,
    heading: "Art & Creative Writing Club",
    text: "Unleash your imagination through painting, calligraphy, storytelling, and poetry—an outlet for creativity rooted in Islamic values.",
    img: "/faculty/c2.jpg",
  },
  {
    id: 5,
    heading: "Girls' Empowerment Circle",
    text: "A space for young Muslimah voices to grow in confidence, mentorship, and empowerment through identity-driven conversations.",
    img: "/faculty/c1.jpg",
  },
];

const JourneyMbl = () => {
  return (
    <section className="w-full flex flex-col gap-20 px-6 py-10 font-serif md:hidden">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="h1 italic text-[#CF3528] font-serif mb-4">
          Our Leadership Philosophy
        </h1>
        <p className="text-gray-700 text-2xl max-w-3xl mx-auto">
          Journey deeper into the words of Allah through reflections, tafsir,
          and spiritually uplifting discussions.
        </p>
      </div>

      {/* Cards */}
      {cards.map((card, index) => {
        const isEven = index % 2 !== 0;
        const colorClass = isEven ? "bg-[#00285E]" : "bg-[#CF3528]";
        const headingColor = isEven ? "text-[#CF3528]" : "text-[#00285E]"; // red on blue, blue on red

        return (
          <div key={card.id} className="flex flex-col relative">
            {/* Image Box */}
            <div className="relative w-full">
              <div
                className={`absolute w-38 h-38 ${colorClass} rounded-md ${
                  isEven ? "-top-4 -left-4" : "-top-4 -right-4"
                }`}
              ></div>
              <img
                src={card.img}
                alt={card.text}
                className="relative w-full h-[260px] object-cover rounded-md z-10"
              />
            </div>

            {/* White Text Box overlapping */}
            <div className="relative w-full -mt-12 px-4">
              {/* Accent Background */}
              <div
                className={`absolute w-50 h-20 z-10 ${colorClass} rounded-md ${
                  isEven ? "-bottom-4 -right-4" : "-bottom-4 -left-4"
                }`}
              ></div>
              {/* White Card */}
              <div className="relative bg-white shadow-lg border border-gray-300 rounded-md px-6 py-6 z-20">
                {/* Heading inside White Card */}
                <h3 className={`h2  italic mb-2 ${headingColor}`}>
                  {card.heading}
                </h3>
                <p className="p font-serif italic">{card.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default JourneyMbl;
