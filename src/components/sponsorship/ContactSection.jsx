import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaInfoCircle,
} from "react-icons/fa";

const contactCards = [
  {
    icon: "/sponsorship/user.png",
    title: "Lead Event Organizer",
    info: "Dr. Obaid Ullah",
  },
  {
    icon: "/sponsorship/email.png",
    title: "Email Us",
    info: "u@hquranacademy.org",
  },
  {
    icon: "/sponsorship/contact.png",
    title: "Call Us",
    info: "555-269-5993",
  },
  {
    title: "Office Hours",
    info: {
      Monday: "9:00 AM - 6:00 PM",
      Saturday: "10:00 AM - 4:00 PM",
      Sunday: "Closed",
    },
  },
  {
    title: "Quick Response",
    info: "We typically respond to all inquiries within 24 hours during business days.",
  },
];

export default function ContactSection() {
  return (
    <div className="px-4 md:px-16 py-16 bg-[#fafbfc] font-serif overflow-hidden">
      <motion.div
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="h1 text-[#0B1D5D] mb-4">
          Contact for Sponsorship & Partnership
        </h2>
        <p className="text-gray-700 max-w-2xl p mx-auto">
          Ready to partner with us? Fill out the form below and our team will
          get back to you within 24 hours.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Form  */}
        <motion.form
          variants={SlideRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:w-9/12 bg-white rounded-2xl p-8 shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(255,255,255,0.3)]"
        >
          {/* Name and Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label className=" mb-1 text-[#364153] font-semibold">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center  border border-[#E5E7EB] rounded-lg px-3 py-2 shadow-inner">
                <FaUser className="mr-2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className=" mb-1 text-[#364153] font-semibold">
                Company Name <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center  border border-[#E5E7EB] rounded-lg px-3 py-2 shadow-inner">
                <FaBuilding className="mr-2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label className=" mb-1 text-[#364153] font-semibold">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center  border border-[#E5E7EB] rounded-lg px-3 py-2 shadow-inner">
                <FaEnvelope className="mr-2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className=" mb-1 text-[#364153] font-semibold">
                Phone Number
              </label>
              <div className="flex items-center  border border-[#E5E7EB] rounded-lg px-3 py-2 shadow-inner">
                <FaPhone className="mr-2 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full outline-none"
                />
              </div>
            </div>
          </div>

          {/* Sponsorship Tier */}
          <div className="mb-4">
            <label className=" mb-1 text-[#364153] font-semibold">
              Interested Sponsorship Tier
            </label>
            <select className="w-full  border border-[#E5E7EB] rounded-lg px-3 py-2 shadow-inner">
              <option>Platinum</option>
              <option>Gold</option>
              <option>Silver</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className=" mb-1 text-[#364153] font-semibold">
              Message
            </label>
            <textarea
              className="w-full  border border-[#E5E7EB] rounded-lg px-3 py-2 shadow-inner"
              rows="4"
              placeholder="Your message..."
            />
          </div>

          {/* Submit Button */}
          <button className="w-full flex items-center justify-center cursor-pointer gap-2 bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Submit Inquiry
            <FaInfoCircle />
          </button>

          <p className="text-gray-500 text-center p mt-3">
            We respect your privacy and will never share your information.
          </p>
        </motion.form>

        {/* Right Cards  */}
        <motion.div
          variants={SlideLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:w-4/12 flex flex-col gap-4"
        >
          {contactCards.map((card, index) => {
            let bgColor = "bg-white";
            let textColor = "text-gray-600";
            let borderClass = "";

            if (index === 3) {
              bgColor = "bg-[#0B1D5D]";
              textColor = "text-white";
            } else if (index === 4) {
              bgColor = "bg-[#FEFCE8]";
              borderClass = "border-2 border-yellow-400";
            }

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start md:items-center p-4 rounded-xl
          shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(255,255,255,0.3)]
          ${bgColor} ${borderClass}`}
              >
                {/* Icon */}
                <div className="mr-4 mb-2 md:mb-0">
                  {card.icon && typeof card.icon === "string" ? (
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-10 h-10"
                    />
                  ) : (
                    card.icon
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className={`font-semibold ${textColor}`}>{card.title}</h4>
                  {typeof card.info === "object" ? (
                    <div className={`${textColor} mt-1 space-y-1`}>
                      {Object.entries(card.info).map(([day, time]) => (
                        <div key={day} className="flex justify-between">
                          <span>{day}</span>
                          <span>{time}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className={`${textColor} mt-1`}>{card.info}</p>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
