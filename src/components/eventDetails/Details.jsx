import { useState } from "react";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import axios from "axios";

export default function Details({ event }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    number_of_guests: 0,
    profile_pic: null,
  });

  const getGoogleCalendarURL = () => {
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description || "");
    const location = encodeURIComponent(event.location || "");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${event.startISO}/${event.endISO}`;
  };

  const openGoogleMap = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`,
      "_blank",
    );
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setForm({ ...form, [name]: files[0] });
    } else if (type === "number") {
      setForm({ ...form, [name]: parseInt(value) || 0 });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) =>
        formData.append(key, value),
      );
      formData.append("event_id", event.id); // ✅ Include the event ID

      await axios.post(
        "http://localhost:8000/api/pto-event-attendees",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      alert("RSVP submitted successfully!");
      setIsModalOpen(false);

      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        number_of_guests: 0,
        profile_pic: null,
      });
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        alert("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-10 bg-[#bcddfc] py-12 font-serif relative">
      <div className="border border-gray-200 rounded-md px-10 py-6 max-w-7xl bg-white mx-auto">
        <h1 className="text-4xl text-center text-[#092962] mb-4">
          {event.title}
        </h1>
        <p className="text-center text-gray-800 max-w-2xl mx-auto mb-10">
          {event.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
          <div className="md:col-span-7">
            <img
              src={event.mainImage}
              alt={event.title}
              className="rounded-lg shadow-md w-full h-[500px] object-cover"
            />
          </div>

          <div className="md:col-span-3 space-y-6">
            <div>
              <h3 className="font-bold text-[#092962]">Date & Time</h3>
              <p>{event.fullDate}</p>
              <p>{event.time}</p>
              <button
                onClick={() => window.open(getGoogleCalendarURL(), "_blank")}
                className="text-[#092962] underline mt-1 text-sm"
              >
                Add to Google Calendar
              </button>
            </div>

            <div>
              <h3 className="font-bold text-[#092962]">Location</h3>
              <p>{event.location}</p>
              <button
                onClick={openGoogleMap}
                className="text-[#092962] underline mt-1 flex items-center gap-1 text-sm"
              >
                <FaMapMarkerAlt /> View Map
              </button>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-[#092962] text-white py-3 rounded-md font-bold"
            >
              RSVP NOW
            </button>

            <div>
              <h3 className="font-bold text-[#092962]">Organizer</h3>
              <div className="flex items-center gap-3 mt-2">
                <img
                  src={event.organizerImage}
                  className="w-16 h-16 rounded-full border object-cover"
                  alt="Organizer"
                />
                <p>{event.organizerName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-lg p-8 relative shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-2xl font-bold text-[#092962] mb-6">
              Event Registration
            </h2>

            <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="first_name"
                  placeholder="First Name"
                  className="border p-2 rounded w-full"
                  value={form.first_name}
                  onChange={handleChange}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-xs">{errors.first_name[0]}</p>
                )}

                <input
                  name="last_name"
                  placeholder="Last Name"
                  className="border p-2 rounded w-full"
                  value={form.last_name}
                  onChange={handleChange}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-xs">{errors.last_name[0]}</p>
                )}
              </div>

              <input
                name="email"
                type="email"
                placeholder="Email"
                className="border p-2 rounded w-full"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email[0]}</p>
              )}

              <input
                name="phone"
                type="text"
                placeholder="Phone"
                className="border p-2 rounded w-full"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone[0]}</p>
              )}

              <input
                name="number_of_guests"
                type="number"
                min="0"
                className="border p-2 rounded w-full"
                value={form.number_of_guests}
                onChange={handleChange}
              />
              {errors.number_of_guests && (
                <p className="text-red-500 text-xs">
                  {errors.number_of_guests[0]}
                </p>
              )}

              <input
                name="profile_pic"
                type="file"
                accept="image/*"
                className="border p-2 rounded w-full"
                onChange={handleChange}
              />
              {errors.profile_pic && (
                <p className="text-red-500 text-xs">{errors.profile_pic[0]}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#092962] text-white py-3 rounded-md font-bold"
              >
                {loading ? "Submitting..." : "Submit RSVP"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
