import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
export default function SpiritCorner() {
  const items = [
    {
      title: "Modest Apparel",
      icon: "/pto/i1.png",
    },
    { title: "Prayer Mats", icon: "/pto/i2.png" },
    { title: "Eco Bottles", icon: "/pto/i3.png" },
    {
      title: "Fun Stickers",
      icon: "/pto/i4.png",
    },
  ];

  return (
    <section className="w-full flex justify-center px-10 py-16 font-serif overflow-hidden ">
      <div className="bg-[#F9FAFB] px-4 py-10  rounded-md">
        <div className="w-full max-w-9xl">
          <motion.h2
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center h1 text-[#00285E]"
          >
            HQA Spirit Corner
          </motion.h2>
          <motion.p
            variants={SlideLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-gray-800 p mt-2"
          >
            Show your pride with HQA merchandise!
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 cursor-pointer mt-12">
            {/* Left Cards */}
            <motion.div
              variants={SlideRight(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 col-span-2"
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 
                           flex flex-col items-center justify-center text-center gap-4"
                >
                  <div className="rounded-xl flex items-center justify-center">
                    <img src={item.icon} alt="" className="w-12 h-12" />
                  </div>

                  <p className="text-gray-800 p">{item.title}</p>
                </div>
              ))}
            </motion.div>

            {/* Right Blue Card */}
            <motion.div
              variants={SlideLeft(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#05224c] rounded-3xl p-10 text-white flex flex-col justify-center"
            >
              <div className="rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img src="/pto/bag.png" alt="" className="w-16 h-16" />
              </div>

              <h3 className="text-center p">Shop Now</h3>
              <p className="text-center text-gray-300 p mt-2">
                Perfect for school spirit days or Eid gifts
              </p>
              <div className="flex justify-center mt-8">
                <a
                  href="https://hqasis.com/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="bg-[#ffb020] text-[#05224c] p cursor-pointer font-semibold rounded-full px-8 py-3 shadow hover:bg-[#ffca54] transition">
                    Browse Collection
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
