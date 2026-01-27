import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const EventDetailsMobile = () => {
  return (
    <section
      className="block md:hidden relative bg-cover bg-center bg-no-repeat overflow-hidden font-serif"
      style={{ backgroundImage: "url('/donation/eventbg.png')" }}
    >
      <div className="absolute inset-0 bg-blue-900/70"></div>

      <div className="relative z-10 px-4 py-10 flex flex-col gap-6">
        {/* Event Heading */}
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Fundraising Event
        </h2>

        {/* Event Card */}
        <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-white shadow-xl flex flex-col">
          {/* Calendar */}
          <div className="flex items-center gap-3 justify-center mb-6">
            <FaCalendarAlt className="text-red-500 text-2xl" />
            <p className="text-white text-lg font-semibold">02/21/2026</p>
          </div>

          {/* Paragraph */}
          <p className="text-white text-sm leading-relaxed mb-6">
            While registration is complimentary, access to the event is
            exclusively contingent upon completing the registration process.
          </p>

          {/* Time and Registration */}
          <div className="flex flex-col gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <FaClock />
              <span>Time: 6:00 PM - 10:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUser />
              <span>Registration: Complimentary</span>
            </div>
          </div>

          {/* Venue & Contact */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-6 text-xs">
            <div className="flex items-start gap-2 mb-2">
              <FaMapMarkerAlt className="mt-1" />
              <div>
                <h4 className="font-semibold text-white text-sm">Venue</h4>
                <p>
                  The Westin Houston, Memorial City, 945 Gessner Rd, Houston, TX
                  77024
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FaPhone className="mt-1" />
              <div>
                <h4 className="font-semibold text-white text-sm">Contact</h4>
                <p>+1 281-501-4300</p>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <button className="bg-red-600 hover:bg-red-700 w-full py-2 rounded-lg transition text-white mb-2">
            <Link to="/reservation" className="block w-full text-center">
              Register for the Event
            </Link>
          </button>

          <p className="text-xs italic text-center mt-2">
            * Registration is free.
          </p>
        </div>

        {/* Seat Availability */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden mt-6">
          <div className="bg-[#E3F1FF] p-4 rounded-t-xl text-center">
            <FaUser className="text-blue-600 text-2xl mb-2" />
            <h3 className="text-blue-900 font-semibold text-lg">
              Seat Availability
            </h3>
          </div>

          {/* Tables Grid */}
          <div className="grid grid-cols-2 gap-4 p-4 justify-items-center">
            {Array.from({ length: 16 }, (_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-20 h-20 rounded-full bg-blue-100 border-2 border-blue-400 flex items-center justify-center">
                  <span className="text-xs font-semibold text-blue-900 text-center">
                    Table <br /> {i + 1}
                  </span>
                </div>
                <p className="text-[10px] mt-2 text-gray-600">10/10 Booked</p>
              </div>
            ))}
          </div>

          <div className="bg-red-600 hover:bg-red-700 text-white text-center py-2 m-4 rounded-md cursor-pointer">
            Register for the Event
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsMobile;
