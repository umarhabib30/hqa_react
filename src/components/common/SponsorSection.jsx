import React from "react";

export default function SponsorSection({
  level,
  amount,
  images,
  gridCols = 4,
  iconImage,
  iconBgColor = "#009689",
}) {
  return (
    <div className="w-full flex justify-center px-4 md:px-0">
      <div className="w-full max-w-7xl border border-[#009689] rounded-2xl p-16 shadow-sm bg-white my-10">
        <div className="flex items-center justify-center text-center gap-3 mb-6">
          <div className="w-18 h-18 flex items-center justify-center rounded-md overflow-hidden">
            {iconImage && (
              <img
                src={iconImage}
                alt={`${level} Icon`}
                className="w-8 h-8 object-contain"
              />
            )}
          </div>

          <p className="h2 italic">
            {level} – <span className="italic">{amount}</span>
          </p>
        </div>

        {/* Images */}
        <div className="flex justify-center">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${gridCols} gap-6 md:gap-8 max-w-6xl cursor-pointer`}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="group relative w-full aspect-square rounded-xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Sponsor Logo ${i + 1}`}
                  className="w-full h-[400px] object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
