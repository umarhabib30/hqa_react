import { FaMapMarkerAlt } from "react-icons/fa";

export default function Details({ event }) {
  const getGoogleCalendarURL = () => {
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description || "");
    const location = encodeURIComponent(event.location || "");

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${event.startISO}/${event.endISO}`;
  };

  const openGoogleMap = () => {
    window.open(
      `https://www.google.com/maps?q=${encodeURIComponent(event.location)}`,
      "_blank",
    );
  };

  return (
    <section className="w-full px-10 bg-[#bcddfc] py-12 font-serif">
      <div className="border border-gray-200 rounded-md px-10 py-6 max-w-7xl bg-white mx-auto">
        <h1 className="text-4xl text-center text-[#092962] mb-4">
          {event.title}
        </h1>

        <p className="text-center text-gray-800 max-w-2xl mx-auto mb-10">
          {event.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
          {/* LEFT */}
          <div className="md:col-span-7">
            <img
              src={event.mainImage}
              alt={event.title}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* RIGHT */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h3 className="font-bold text-[#092962]">Date & Time</h3>
              <p>{event.fullDate}</p>
              <p>{event.time}</p>

              <button
                onClick={() => window.open(getGoogleCalendarURL(), "_blank")}
                className="text-[#092962] underline mt-1"
              >
                Add to Google Calendar
              </button>
            </div>

            <div>
              <h3 className="font-bold text-[#092962]">Location</h3>
              <p>{event.location}</p>

              <button
                onClick={openGoogleMap}
                className="text-[#092962] underline mt-1 flex items-center gap-1"
              >
                <FaMapMarkerAlt /> View Map
              </button>
            </div>

            <a
              href="/reservation"
              className="block bg-[#092962] text-white text-center py-3 rounded-md"
            >
              RSVP NOW
            </a>

            <div>
              <h3 className="font-bold text-[#092962]">Organizer</h3>
              <div className="flex items-center gap-3 mt-2">
                <img
                  src={event.organizerImage}
                  className="w-16 h-16 rounded-full border"
                  alt="Organizer"
                />
                <p>{event.organizerName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
