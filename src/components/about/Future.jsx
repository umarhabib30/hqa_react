import React from "react";

const Future = () => {
  return (
    <section className="bg-[#BCDDFC] min-h-[80vh] py-12 px-10 flex flex-col items-center justify-center text-center font-serif">
      <div className="relative w-full flex items-center justify-center mb-12 ">
        <div className="flex-grow h-px bg-[#00285E] mr-4 max-w-[40%]"></div>

        <div className="flex-shrink-0 px-4">
          <img
            src="/about/comma.png"
            alt="Quote Icon"
            className="h-10 w-10 mx-auto"
          />
        </div>

        <div className="flex-grow h-px bg-[#00285E] ml-4 max-w-[40%]"></div>
      </div>

      <h1 className=" h1 italic mb-4 text-[#00285E]">
        Our Vision For the Future
      </h1>

      <p className="text-gray-800 max-w-6xl p">
        At HQA, we’re preparing a generation of leaders who are academically
        equipped, morally grounded, and spiritually aware. We envision a future
        where our students uplift their communities and contribute meaningfully
        to society, rooted in faith and knowledge.
      </p>
      <p className="text-gray-800 max-w-6xl p mt-10">
        We continuously evolve—embracing innovation, improving our curriculum,
        and expanding opportunities to ensure every student thrives in a
        complex, ever-changing world.
      </p>
    </section>
  );
};

export default Future;
