import React from "react";

const cards = [
  {
    id: 1,
    heading: "Dana Chehab",
    text: "        Academic Counselor",
    img: "/faculty/c1.jpg",
  },
  {
    id: 2,
    heading: "          Amina Ishaq",
    text: "        School Counselor Support",
    img: "/faculty/c2.jpg",
  },
  {
    id: 3,
    heading: "          Dr. Abdelhamid Moursy",
    text: "        IT Consultant",
    img: "/faculty/c1.jpg",
  },
  {
    id: 4,
    heading: "          Ahmed Fahmy",
    text: "        Athletics - Head Coach (Boys)",
    img: "/faculty/c2.jpg",
  },
  {
    id: 5,
    heading: "Hind Ezzet",
    text: " Athletics - Head Coach (Girls)",
    img: "/faculty/c1.jpg",
  },
];

const MobileCampus = () => {
  return (
    <section className="w-full flex flex-col gap-20 px-6 py-10 font-serif md:hidden">
      <div className="text-center mb-10">
        <h1 className="h1 italic text-[#CF3528] font-serif mb-4">
          Our Leadership Philosophy
        </h1>
        <p className="text-gray-700 text-2xl max-w-3xl mx-auto">
          Journey deeper into the words of Allah through reflections, tafsir,
          and spiritually uplifting discussions.
        </p>
      </div>

      {cards.map((card, index) => {
        const isEven = index % 2 !== 0;
        const colorClass = isEven ? "bg-[#00285E]" : "bg-[#CF3528]";
        const headingColor = isEven ? "text-[#CF3528]" : "text-[#00285E]";

        return (
          <div key={card.id} className="flex flex-col relative">
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

            <div className="relative w-full -mt-12 px-4">
              <div
                className={`absolute w-50 h-20 z-10 ${colorClass} rounded-md ${
                  isEven ? "-bottom-4 -right-4" : "-bottom-4 -left-4"
                }`}
              ></div>
              <div className="relative bg-white shadow-lg border border-gray-300 rounded-md px-6 py-6 z-20">
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

export default MobileCampus;
