import { useEffect, useMemo, useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const EventDetails = () => {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ API state
  const [event, setEvent] = useState(null);

  // ✅ Countdown state
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===========================
     ✅ Fetch Event from API
  =========================== */
  useEffect(() => {
    let alive = true;

    fetch("https://hquranacademy.com/api/donationBooking")
      .then((res) => res.json())
      .then((res) => {
        if (!alive) return;
        if (res && res.success && res.data) {
          setEvent(res.data);
        } else {
          setEvent(null);
        }
      })
      .catch(() => {
        if (!alive) return;
        setEvent(null);
      });

    return () => {
      alive = false;
    };
  }, []);

  /* ===========================
     ✅ Helpers
  =========================== */
  const formatDateForUI = (yyyyMmDd) => {
    // Keep simple: API date "2025-12-31" -> "12/31/2025"
    if (!yyyyMmDd || typeof yyyyMmDd !== "string") return "—";
    const parts = yyyyMmDd.split("-");
    if (parts.length !== 3) return yyyyMmDd;
    const [y, m, d] = parts;
    return `${m}/${d}/${y}`;
  };

  const formatTimeForUI = (hhmmss) => {
    // API time "14:32:00" -> "14:32"
    if (!hhmmss || typeof hhmmss !== "string") return "—";
    return hhmmss.slice(0, 5);
  };

  /* ===========================
     ✅ Seat calculations from API
     event.table_bookings structure:
     { "1":[{total_seats:..}], "2":[...] }
  =========================== */
  const seatStats = useMemo(() => {
    const totalSeats = Number(event?.total_seats || 0);
    const seatsPerTable = Number(event?.seats_per_table || 10);

    const tableBookings = event?.table_bookings || {};
    const allBookings = Object.values(tableBookings).flat();

    const booked = allBookings.reduce((sum, b) => {
      const n = Number(b?.total_seats || 0);
      return sum + (Number.isFinite(n) ? n : 0);
    }, 0);

    const remaining = Math.max(0, totalSeats - booked);
    const available = remaining; // same meaning in your UI
    const bookedPercent =
      totalSeats > 0
        ? Math.min(100, Math.round((booked / totalSeats) * 100))
        : 0;

    return {
      totalSeats,
      seatsPerTable,
      booked,
      remaining,
      available,
      bookedPercent,
    };
  }, [event]);

  /* ===========================
     ✅ Backward Countdown
     (Event Start Date + Start Time)
  =========================== */
  useEffect(() => {
    if (!event?.event_end_date) return;

    const endDate = event.event_end_date; // "2026-01-08"
    const endTime = event.event_end_time || "23:59:59";

    // ✅ Create LOCAL time (no UTC bug)
    const [y, m, d] = endDate.split("-").map(Number);
    const [hh, mm, ss] = endTime.split(":").map(Number);

    const target = new Date(y, m - 1, d, hh, mm, ss).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [event]);

  // ✅ Dynamic values (fallbacks keep UI same)
  const title = event?.event_title || "Fundraising Event";
  const desc =
    event?.event_desc ||
    "While registration is complimentary, access to the event is exclusively contingent upon completing the registration process.";
  const startDateUI = formatDateForUI(event?.event_start_date) || "02/21/2026";
  const timeRangeUI =
    event?.event_start_time && event?.event_end_time
      ? `${formatTimeForUI(event.event_start_time)} - ${formatTimeForUI(
          event.event_end_time,
        )}`
      : "6:00 PM - 10:00 PM";

  const venue = event?.event_location
    ? event.event_location
    : "The Westin Houston, Memorial City, 945 Gessner Rd, Houston, TX 77024";
  const phone = event?.contact_number
    ? event.contact_number
    : "+1 281-501-4300";

  // ✅ Blue info date: show end date as “deadline” (you can replace later)
  const deadlineUI = event?.event_end_date
    ? formatDateForUI(event.event_end_date)
    : "02/01/2026";

  // ✅ Grid tables should be EMPTY (as you said)
  const totalTables = Number(event?.total_tables || 50);
  const seatsPerTable = Number(event?.seats_per_table || 10);

  // ✅ Full booked tables from API
  const fullBookedTables = useMemo(() => {
    if (!event?.table_bookings) return [];

    return Object.entries(event.table_bookings)
      .map(([tableNo, bookings]) => {
        const booking = bookings?.[0];
        if (!booking) return null;

        if (Number(booking.total_seats) === seatsPerTable) {
          const firstName = booking.first_name || "";
          const lastName = booking.last_name || "";

          const customerName = `${firstName} ${lastName}`.trim() || "Reserved";

          return {
            tableNo,
            customerName,
          };
        }

        return null;
      })
      .filter(Boolean);
  }, [event, seatsPerTable]);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat overflow-hidden font-serif"
      style={{ backgroundImage: "url('/donation/eventbg.png')" }}
    >
      <div className="absolute inset-0 bg-blue-900/70"></div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 py-10 md:py-20 flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center md:text-left">
            {title}
          </h2>

          {/* Event Card */}
          <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-6 md:p-8 text-white shadow-xl flex flex-col">
            {/* Calendar */}
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <FaCalendarAlt className="text-red-500 text-2xl md:text-3xl" />
              <p className="text-white text-lg md:text-xl font-semibold">
                {startDateUI}
              </p>
            </div>

            <p className="text-white max-w-full md:max-w-lg mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
              {desc}
            </p>

            <div className="flex flex-wrap items-start gap-6 md:gap-10 mb-6 md:mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FaClock />
                  <h3 className="font-medium">Time</h3>
                </div>
                <p>{timeRangeUI}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FaUser />
                  <h3 className="font-medium">Registration</h3>
                </div>
                <p>Complimentary</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-5 mb-4 md:mb-6">
              <div className="flex items-start gap-3 mb-3 md:mb-4">
                <FaMapMarkerAlt className="mt-1" />
                <div>
                  <h4 className="font-semibold text-sm md:text-base">
                    Venue Location
                  </h4>
                  <p className="text-xs md:text-sm">{venue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaPhone className="mt-1" />
                <div>
                  <h4 className="font-semibold text-sm md:text-base">
                    Contact Number
                  </h4>
                  <p className="text-xs md:text-sm">{phone}</p>
                </div>
              </div>
            </div>

            <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white w-full mt-4 md:mt-6 py-2 px-4 md:px-6 rounded-lg transition-all duration-300">
              <Link
                to="/reservation"
                className="block w-full h-full text-white text-center text-sm md:text-base"
              >
                Register for the Event
              </Link>
            </button>

            <p className="mt-2 md:mt-4 italic text-xs md:text-sm text-center"></p>
          </div>

          {/* Countdown + Info Section */}
          <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 md:p-4 flex flex-col gap-4">
              {/* Countdown */}
              <div className="flex flex-wrap justify-between text-center gap-2 md:gap-4">
                {[
                  { value: countdown.days, label: "Days" },
                  { value: countdown.hours, label: "Hours" },
                  { value: countdown.minutes, label: "Minutes" },
                  { value: countdown.seconds, label: "Seconds" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex-1 min-w-[60px] md:min-w-[80px] bg-white rounded-lg py-2 md:py-4 flex flex-col items-center justify-center relative"
                  >
                    <p className="text-[#00285E] font-bold text-lg md:text-2xl">
                      {item.value}
                    </p>
                    <p className="text-gray-700 text-xs md:text-sm">
                      {item.label}
                    </p>
                    <div
                      className={`absolute bottom-0 left-0 right-0 w-6 h-1 rounded-b-lg mx-auto ${
                        idx % 2 === 0 ? "bg-red-500" : "bg-blue-500"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Blue Info  */}
              <div className="flex flex-col md:flex-row justify-between items-center bg-[#bcddfc]  rounded-xl p-3 md:p-4 text-white gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900 p-3 rounded-md flex items-center justify-center">
                    <FaClock className="text-white text-3xl" />
                  </div>{" "}
                  <div>
                    <p className="text-blue-900 p">{deadlineUI}</p>
                  </div>
                </div>
                <p className="text-red-700 cursor-pointer p  font-semibold py-2 px-4 md:px-6 rounded-lg transition-all duration-300">
                  Deadline to Reserve Seats{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden mt-6 md:mt-0">
          {/* Header */}
          <div className="bg-[#E3F1FF] px-4 py-3 md:px-6 md:py-4 border-b border-blue-100 rounded-t-xl">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2">
                <FaUser className="text-blue-600 text-2xl md:text-3xl" />
                <h3 className="text-blue-900 text-lg md:text-2xl">
                  Seat Availability
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-center mb-4">
              <div className="bg-white rounded-lg shadow-sm px-4 md:px-8 py-2 md:py-4 border border-gray-200">
                <p className="text-gray-600 text-sm md:text-lg">Total Seats</p>
                <p className="text-xl md:text-2xl font-bold text-blue-900">
                  {seatStats.totalSeats || 0}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm px-4 md:px-8 py-2 md:py-4 border border-gray-200">
                <p className="text-gray-600 text-sm md:text-lg">Remaining</p>
                <p className="text-xl md:text-2xl font-bold text-red-500">
                  {seatStats.remaining || 0}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm px-2 md:px-6 py-2 md:py-4 flex flex-col justify-center items-center text-gray-600 gap-2 text-center text-sm md:text-lg">
                <div className="flex flex-col items-start gap-1 md:gap-2 leading-none">
                  <div className="flex items-center gap-2 w-32 justify-start">
                    <div className="w-3 h-3 min-w-3 bg-[#00285E] rounded-sm"></div>
                    <span className="leading-none text-xs md:text-sm">
                      Available: {seatStats.available || 0}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 w-32 justify-start">
                    <div className="w-3 h-3 min-w-3 bg-gray-400 rounded-sm"></div>
                    <span className="leading-none text-xs md:text-sm">
                      Booked: {seatStats.booked || 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#00285E] h-full"
                style={{ width: `${seatStats.bookedPercent || 0}%` }}
              ></div>
            </div>

            <p className="text-xs text-gray-500 mt-1 text-right">
              {seatStats.bookedPercent || 0}% Booked
            </p>
          </div>

          <div className="bg-[#00285E] text-center py-2 text-white rounded-xl m-2">
            STAGE
          </div>

          {/* Tables Grid */}
          {/* Scrollable Tables Grid */}
          {/* Tables Grid – FULL BOOKED ONLY */}
          <div className="overflow-y-auto min-h-[500px] p-4 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
              {fullBookedTables.map((table, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center mb-4 md:mb-0"
                >
                  <div
                    className="relative rounded-full bg-blue-200 border-2 border-blue-500 flex items-center justify-center"
                    style={{
                      width: isMobile ? 80 : 96,
                      height: isMobile ? 80 : 96,
                    }}
                  >
                    {/* Center Text */}
                    <div className="text-center z-10">
                      <p className="text-xs md:text-sm font-bold text-blue-900">
                        Table {table.tableNo}
                      </p>
                      <p className="text-[10px] md:text-xs text-blue-800 mt-1">
                        {table.customerName}
                      </p>
                    </div>

                    {/* Seats icons */}
                    {Array.from({ length: seatsPerTable }, (_, j) => {
                      const radius = isMobile ? 40 : 48;
                      const tableSize = isMobile ? 80 : 96;
                      const x =
                        tableSize / 2 +
                        radius * Math.cos((j / seatsPerTable) * 2 * Math.PI);
                      const y =
                        tableSize / 2 +
                        radius * Math.sin((j / seatsPerTable) * 2 * Math.PI);
                      const seatSize = isMobile ? 26 : 24;

                      return (
                        <img
                          key={j}
                          src="/donation/tableicon.png"
                          alt="seat"
                          className="absolute opacity-70"
                          style={{
                            left: `${x}px`,
                            top: `${y}px`,
                            width: `${seatSize}px`,
                            height: `${seatSize}px`,
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      );
                    })}
                  </div>

                  <p className="text-xs mt-4 md:mt-6 text-gray-600 text-center">
                    Fully Booked
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/reservation"
            className="bg-red-600 hover:bg-red-900 text-white text-center py-3 m-4 md:m-6 rounded-md cursor-pointer block"
          >
            Register for the Event
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
