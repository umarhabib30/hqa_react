import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { events } from "../../constants/events";

export default function EventDetail() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event)
    return (
      <div className="p-20 text-center text-red-600 text-xl">
        Event Not Found
      </div>
    );

  //calender
  const getGoogleCalendarURL = () => {
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description || "");
    const location = encodeURIComponent(event.location || "");

    const start = encodeURIComponent(event.startISO);
    const end = encodeURIComponent(event.endISO);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${start}/${end}`;
  };

  //map
  const openGoogleMap = () => {
    window.open(
      `https://www.google.com/maps?q=${encodeURIComponent(event.location)}`,
      "_blank"
    );
  };

  return (
    <section className="w-full px-10  bg-[#bcddfc] py-12 font-serif ">
      <div className=" border border-gray-200 rounded-md px-10 py-6 max-w-7xl bg-white">
        <h1 className="h1 text-center text-[#092962] mb-4">{event.title}</h1>

        <p className="text-center text-gray-800 max-w-2xl mx-auto p mb-10">
          {event.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
          {/* LEFT  */}
          <div className="md:col-span-7 flex justify-center">
            <img
              src={event.mainImage}
              alt={event.title}
              className="rounded-lg shadow-md max-w-full"
            />
          </div>

          {/* RIGHT ) */}
          <div className="md:col-span-3 space-y-7">
            <div>
              <h3 className="font-bold text-[#092962] p mb-1">Date and time</h3>
              <p className="text-gray-800 p">{event.fullDate}</p>
              <p className="text-gray-800 p">{event.time}</p>

              <button
                onClick={() => window.open(getGoogleCalendarURL(), "_blank")}
                className="text-[#092962] p underline cursor-pointer mt-1"
              >
                Add to Google Calendar
              </button>
            </div>

            {/* LOCATION */}
            <div>
              <h3 className="font-bold text-[#092962] p  mb-1">Location</h3>
              <p className="text-gray-800 whitespace-pre-line p">
                {event.location}
              </p>

              <button
                onClick={openGoogleMap}
                className="text-[#092962] underline p cursor-pointer text-sm mt-1"
              >
                View Map
              </button>
            </div>

            <div>
              <p className="text-gray-800 h2 font-bold">{event.attendees}</p>
              <p className="text-[#092962] underline p">attendees</p>
            </div>

            <a
              href="/reservation"
              className="block bg-[#092962] hover:bg-[#0c3a8c] text-white text-center py-3 rounded-md  h2"
            >
              RSVP NOW
            </a>

            <div className="flex gap-3 mt-3 flex-wrap">
              {event.paymentMethods.map((method, index) => (
                <div key={index} className="relative group w-10 h-10">
                  <img
                    src={method.image}
                    className="w-10 h-10 rounded shadow-sm cursor-pointer"
                    alt={method.name}
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded shadow-lg p whitespace-nowrap z-10">
                    Pay by {method.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h3 className="font-bold text-[#092962] p">ORGANIZER</h3>

              <div className="flex items-center gap-3 mt-3">
                <img
                  src={event.organizerImage}
                  className="w-20 h-20 rounded-full border"
                  alt="organizer"
                />

                <div>
                  <p className=" p">{event.organizerName}</p>
                  <a href="#" className="text-[#092962] underline p">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
